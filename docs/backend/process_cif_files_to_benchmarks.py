import os
import subprocess
import sys
import shutil
import re

OUTPUT_DIR = "../data/benchmarks"
BIN_DIR = "C:/Users/rober/Downloads/eclipse-escet-v5.0-win32.win32.x86_64/eclipse-escet-v5.0/bin"

os.makedirs(OUTPUT_DIR, exist_ok=True)

def sanitize_name(name):
    """Replace periods (.) in the base name with underscores (_)."""
    return name.replace(".", "_")

def extract_event_names_sorted(class_file_path):
    """
    Extract the event names based on the order of their appearance 
    in execEdge* comments in the class file.
    """
    event_names = []
    if os.path.exists(class_file_path):
        with open(class_file_path, "r", encoding="utf-8") as file:
            content = file.read()
            matches = re.findall(
                r'/\*\*.*?event\s+"(.*?)".*?\*/\s+execEdge\d+\(\)', 
                content, 
                re.DOTALL
            )
            event_names = matches
    return event_names

def process_file(file_path):
    """Process a single .cif file."""
    file_path = os.path.abspath(file_path)
    if not file_path.endswith(".cif"):
        print(f"Skipping non-CIF file: {file_path}")
        return

    base_name = os.path.splitext(os.path.basename(file_path))[0]
    sanitized_name = sanitize_name(base_name)
    print(f"Processing: {file_path} (Sanitized name: {sanitized_name})")

    cifcodegen_path = os.path.normpath(os.path.join(BIN_DIR, "cifcodegen.cmd"))
    cif2cif_path = os.path.normpath(os.path.join(BIN_DIR, "cif2cif.cmd"))

    try:
        subprocess.run(
            [cifcodegen_path, file_path, "--target-language=javascript", f"--code-prefix=spec"],
            check=True
        )
        print(f"Generated JavaScript files for {base_name}")
    except FileNotFoundError:
        print(f"Error: cifcodegen not found at {cifcodegen_path}")
    except subprocess.CalledProcessError as e:
        print(f"Error running cifcodegen: {e.stderr}")

    spec_utils_path = os.path.abspath(f"spec_utils.js")
    if os.path.exists(spec_utils_path):
        os.remove(spec_utils_path)
        print(f"Deleted file: {spec_utils_path}")
    else:
        print(f"{sanitized_name}_utils.js file not found. Skipping deletion.")

    os.rename("spec_class.js",  f"{sanitized_name}_class.js")
    spec_class_path = os.path.abspath(f"{sanitized_name}_class.js")
    if os.path.exists(spec_class_path):
        destination = os.path.join(OUTPUT_DIR, f"{sanitized_name}_class.js")
        shutil.move(spec_class_path, destination)
        print(f"Moved {sanitized_name}_class.js to: {destination}")
    else:
        print(f"{sanitized_name}_class.js file not found. Skipping move.")

    event_names = extract_event_names_sorted(os.path.join(OUTPUT_DIR, f"{sanitized_name}_class.js"))

    output_file = os.path.join(OUTPUT_DIR, f"{sanitized_name}.cifx")
    try:
        subprocess.run(
            [cif2cif_path, file_path, "-o", os.path.normpath(output_file)],
            check=True
        )
        print(f"Generated CIFX file: {output_file}")
    except FileNotFoundError:
        print(f"Error: cif2cif not found at {cif2cif_path}")
    except subprocess.CalledProcessError as e:
        print(f"Error running cif2cif: {e.stderr}")

    if os.path.exists(output_file):
        with open(output_file, "r", encoding="utf-8") as cifx_file:
            xml_content = cifx_file.read()

        js_file_path = os.path.join(OUTPUT_DIR, f"{sanitized_name}.js")
        with open(js_file_path, "w", encoding="utf-8") as js_file:
            js_file.write(f"const xml_{sanitized_name} = `{xml_content}`;\n")
            js_file.write(f"const eventMap = {event_names};\n")
        print(f"Embedded CIFX content and sorted EVENT_NAMES into: {js_file_path}")

def main():
    """Main function to process files."""
    if len(sys.argv) < 2:
        print("Drag and drop .cif files onto this script to process them.")
        return

    for file_path in sys.argv[1:]:
        if os.path.isfile(file_path):
            process_file(file_path)
        else:
            print(f"Not a valid file: {file_path}")

if __name__ == "__main__":
    main()
