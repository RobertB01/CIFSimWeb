const xml_sudoku = `<?xml version="1.0" encoding="UTF-8"?>
<cif:Specification xmi:version="2.0" xmlns:xmi="http://www.omg.org/XMI" xmlns:xsi="http://www.w3.org/2001/XMLSchema-instance" xmlns:automata="http://eclipse.org/escet/cif/automata" xmlns:cif="http://eclipse.org/escet/cif" xmlns:declarations="http://eclipse.org/escet/cif/declarations" xmlns:expressions="http://eclipse.org/escet/cif/expressions" xmlns:position="http://eclipse.org/escet/position" xmlns:types="http://eclipse.org/escet/cif/types" xsi:schemaLocation="http://eclipse.org/escet/cif/automata http://eclipse.org/escet/cif#//automata http://eclipse.org/escet/cif/declarations http://eclipse.org/escet/cif#//declarations http://eclipse.org/escet/cif/expressions http://eclipse.org/escet/cif#//expressions http://eclipse.org/escet/cif/types http://eclipse.org/escet/cif#//types" xmi:id="1" name="specification">
  <position xmi:type="position:Position" xmi:id="2" source="File &quot;C:\Users\rober\Downloads\eclipse-escet-v5.0-win32.win32.x86_64\eclipse-escet-v5.0\workspace\CIFBenchmarks-5.0.0.v20241003-060816\sudoku\sudoku.cif&quot;: " startLine="1" startColumn="1" endLine="1" endColumn="1" location="C:\Users\rober\Downloads\eclipse-escet-v5.0-win32.win32.x86_64\eclipse-escet-v5.0\workspace\CIFBenchmarks-5.0.0.v20241003-060816\sudoku\sudoku.cif"/>
  <definitions xmi:type="cif:ComponentDef" xmi:id="3">
    <position xmi:type="position:Position" xmi:id="4" source="File &quot;C:\Users\rober\Downloads\eclipse-escet-v5.0-win32.win32.x86_64\eclipse-escet-v5.0\workspace\CIFBenchmarks-5.0.0.v20241003-060816\sudoku\sudoku.cif&quot;: " startLine="29" endOffset="1081" startColumn="11" endLine="29" endColumn="14" startOffset="1078" location="C:\Users\rober\Downloads\eclipse-escet-v5.0-win32.win32.x86_64\eclipse-escet-v5.0\workspace\CIFBenchmarks-5.0.0.v20241003-060816\sudoku\sudoku.cif"/>
    <body xmi:type="automata:Automaton" xmi:id="5" name="Cell" kind="Plant">
      <position xmi:type="position:Position" xmi:id="6" source="File &quot;C:\Users\rober\Downloads\eclipse-escet-v5.0-win32.win32.x86_64\eclipse-escet-v5.0\workspace\CIFBenchmarks-5.0.0.v20241003-060816\sudoku\sudoku.cif&quot;: " startLine="29" endOffset="1081" startColumn="11" endLine="29" endColumn="14" startOffset="1078" location="C:\Users\rober\Downloads\eclipse-escet-v5.0-win32.win32.x86_64\eclipse-escet-v5.0\workspace\CIFBenchmarks-5.0.0.v20241003-060816\sudoku\sudoku.cif"/>
      <declarations xmi:type="declarations:Event" xmi:id="7" name="c_1" controllable="true">
        <position xmi:type="position:Position" xmi:id="8" source="File &quot;C:\Users\rober\Downloads\eclipse-escet-v5.0-win32.win32.x86_64\eclipse-escet-v5.0\workspace\CIFBenchmarks-5.0.0.v20241003-060816\sudoku\sudoku.cif&quot;: " startLine="30" endOffset="1103" startColumn="16" endLine="30" endColumn="18" startOffset="1101" location="C:\Users\rober\Downloads\eclipse-escet-v5.0-win32.win32.x86_64\eclipse-escet-v5.0\workspace\CIFBenchmarks-5.0.0.v20241003-060816\sudoku\sudoku.cif"/>
      </declarations>
      <declarations xmi:type="declarations:Event" xmi:id="9" name="c_2" controllable="true">
        <position xmi:type="position:Position" xmi:id="10" source="File &quot;C:\Users\rober\Downloads\eclipse-escet-v5.0-win32.win32.x86_64\eclipse-escet-v5.0\workspace\CIFBenchmarks-5.0.0.v20241003-060816\sudoku\sudoku.cif&quot;: " startLine="30" endOffset="1108" startColumn="21" endLine="30" endColumn="23" startOffset="1106" location="C:\Users\rober\Downloads\eclipse-escet-v5.0-win32.win32.x86_64\eclipse-escet-v5.0\workspace\CIFBenchmarks-5.0.0.v20241003-060816\sudoku\sudoku.cif"/>
      </declarations>
      <declarations xmi:type="declarations:Event" xmi:id="11" name="c_3" controllable="true">
        <position xmi:type="position:Position" xmi:id="12" source="File &quot;C:\Users\rober\Downloads\eclipse-escet-v5.0-win32.win32.x86_64\eclipse-escet-v5.0\workspace\CIFBenchmarks-5.0.0.v20241003-060816\sudoku\sudoku.cif&quot;: " startLine="30" endOffset="1113" startColumn="26" endLine="30" endColumn="28" startOffset="1111" location="C:\Users\rober\Downloads\eclipse-escet-v5.0-win32.win32.x86_64\eclipse-escet-v5.0\workspace\CIFBenchmarks-5.0.0.v20241003-060816\sudoku\sudoku.cif"/>
      </declarations>
      <declarations xmi:type="declarations:Event" xmi:id="13" name="c_4" controllable="true">
        <position xmi:type="position:Position" xmi:id="14" source="File &quot;C:\Users\rober\Downloads\eclipse-escet-v5.0-win32.win32.x86_64\eclipse-escet-v5.0\workspace\CIFBenchmarks-5.0.0.v20241003-060816\sudoku\sudoku.cif&quot;: " startLine="30" endOffset="1118" startColumn="31" endLine="30" endColumn="33" startOffset="1116" location="C:\Users\rober\Downloads\eclipse-escet-v5.0-win32.win32.x86_64\eclipse-escet-v5.0\workspace\CIFBenchmarks-5.0.0.v20241003-060816\sudoku\sudoku.cif"/>
      </declarations>
      <declarations xmi:type="declarations:DiscVariable" xmi:id="15" name="Value">
        <position xmi:type="position:Position" xmi:id="16" source="File &quot;C:\Users\rober\Downloads\eclipse-escet-v5.0-win32.win32.x86_64\eclipse-escet-v5.0\workspace\CIFBenchmarks-5.0.0.v20241003-060816\sudoku\sudoku.cif&quot;: " startLine="31" endOffset="1142" startColumn="18" endLine="31" endColumn="22" startOffset="1138" location="C:\Users\rober\Downloads\eclipse-escet-v5.0-win32.win32.x86_64\eclipse-escet-v5.0\workspace\CIFBenchmarks-5.0.0.v20241003-060816\sudoku\sudoku.cif"/>
        <type xmi:type="types:IntType" xmi:id="17" lower="0" upper="4">
          <position xmi:type="position:Position" xmi:id="18" source="File &quot;C:\Users\rober\Downloads\eclipse-escet-v5.0-win32.win32.x86_64\eclipse-escet-v5.0\workspace\CIFBenchmarks-5.0.0.v20241003-060816\sudoku\sudoku.cif&quot;: " startLine="31" endOffset="1130" startColumn="8" endLine="31" endColumn="10" startOffset="1128" location="C:\Users\rober\Downloads\eclipse-escet-v5.0-win32.win32.x86_64\eclipse-escet-v5.0\workspace\CIFBenchmarks-5.0.0.v20241003-060816\sudoku\sudoku.cif"/>
        </type>
        <value xmi:type="declarations:VariableValue" xmi:id="19">
          <position xmi:type="position:Position" xmi:id="20" source="File &quot;C:\Users\rober\Downloads\eclipse-escet-v5.0-win32.win32.x86_64\eclipse-escet-v5.0\workspace\CIFBenchmarks-5.0.0.v20241003-060816\sudoku\sudoku.cif&quot;: " startLine="31" endOffset="1142" startColumn="18" endLine="31" endColumn="22" startOffset="1138" location="C:\Users\rober\Downloads\eclipse-escet-v5.0-win32.win32.x86_64\eclipse-escet-v5.0\workspace\CIFBenchmarks-5.0.0.v20241003-060816\sudoku\sudoku.cif"/>
          <values xmi:type="expressions:IntExpression" xmi:id="21">
            <position xmi:type="position:Position" xmi:id="22" source="File &quot;C:\Users\rober\Downloads\eclipse-escet-v5.0-win32.win32.x86_64\eclipse-escet-v5.0\workspace\CIFBenchmarks-5.0.0.v20241003-060816\sudoku\sudoku.cif&quot;: " startLine="31" endOffset="1146" startColumn="26" endLine="31" endColumn="26" startOffset="1146" location="C:\Users\rober\Downloads\eclipse-escet-v5.0-win32.win32.x86_64\eclipse-escet-v5.0\workspace\CIFBenchmarks-5.0.0.v20241003-060816\sudoku\sudoku.cif"/>
            <type xmi:type="types:IntType" xmi:id="23" lower="0" upper="0">
              <position xmi:type="position:Position" xmi:id="24" source="File &quot;C:\Users\rober\Downloads\eclipse-escet-v5.0-win32.win32.x86_64\eclipse-escet-v5.0\workspace\CIFBenchmarks-5.0.0.v20241003-060816\sudoku\sudoku.cif&quot;: " startLine="31" endOffset="1146" startColumn="26" endLine="31" endColumn="26" startOffset="1146" location="C:\Users\rober\Downloads\eclipse-escet-v5.0-win32.win32.x86_64\eclipse-escet-v5.0\workspace\CIFBenchmarks-5.0.0.v20241003-060816\sudoku\sudoku.cif"/>
            </type>
          </values>
        </value>
      </declarations>
      <locations xmi:type="automata:Location" xmi:id="25">
        <position xmi:type="position:Position" xmi:id="26" source="File &quot;C:\Users\rober\Downloads\eclipse-escet-v5.0-win32.win32.x86_64\eclipse-escet-v5.0\workspace\CIFBenchmarks-5.0.0.v20241003-060816\sudoku\sudoku.cif&quot;: " startLine="32" endOffset="1158" startColumn="3" endLine="32" endColumn="10" startOffset="1151" location="C:\Users\rober\Downloads\eclipse-escet-v5.0-win32.win32.x86_64\eclipse-escet-v5.0\workspace\CIFBenchmarks-5.0.0.v20241003-060816\sudoku\sudoku.cif"/>
        <initials xmi:type="expressions:BoolExpression" xmi:id="27" value="true">
          <position xmi:type="position:Position" xmi:id="28" source="File &quot;C:\Users\rober\Downloads\eclipse-escet-v5.0-win32.win32.x86_64\eclipse-escet-v5.0\workspace\CIFBenchmarks-5.0.0.v20241003-060816\sudoku\sudoku.cif&quot;: " startLine="33" endOffset="1171" startColumn="5" endLine="33" endColumn="11" startOffset="1165" location="C:\Users\rober\Downloads\eclipse-escet-v5.0-win32.win32.x86_64\eclipse-escet-v5.0\workspace\CIFBenchmarks-5.0.0.v20241003-060816\sudoku\sudoku.cif"/>
          <type xmi:type="types:BoolType" xmi:id="29">
            <position xmi:type="position:Position" xmi:id="30" source="File &quot;C:\Users\rober\Downloads\eclipse-escet-v5.0-win32.win32.x86_64\eclipse-escet-v5.0\workspace\CIFBenchmarks-5.0.0.v20241003-060816\sudoku\sudoku.cif&quot;: " startLine="33" endOffset="1171" startColumn="5" endLine="33" endColumn="11" startOffset="1165" location="C:\Users\rober\Downloads\eclipse-escet-v5.0-win32.win32.x86_64\eclipse-escet-v5.0\workspace\CIFBenchmarks-5.0.0.v20241003-060816\sudoku\sudoku.cif"/>
          </type>
        </initials>
        <edges xmi:type="automata:Edge" xmi:id="31">
          <position xmi:type="position:Position" xmi:id="32" source="File &quot;C:\Users\rober\Downloads\eclipse-escet-v5.0-win32.win32.x86_64\eclipse-escet-v5.0\workspace\CIFBenchmarks-5.0.0.v20241003-060816\sudoku\sudoku.cif&quot;: " startLine="35" endOffset="1248" startColumn="5" endLine="35" endColumn="8" startOffset="1245" location="C:\Users\rober\Downloads\eclipse-escet-v5.0-win32.win32.x86_64\eclipse-escet-v5.0\workspace\CIFBenchmarks-5.0.0.v20241003-060816\sudoku\sudoku.cif"/>
          <events xmi:type="automata:EdgeEvent" xmi:id="33">
            <position xmi:type="position:Position" xmi:id="34" source="File &quot;C:\Users\rober\Downloads\eclipse-escet-v5.0-win32.win32.x86_64\eclipse-escet-v5.0\workspace\CIFBenchmarks-5.0.0.v20241003-060816\sudoku\sudoku.cif&quot;: " startLine="35" endOffset="1252" startColumn="10" endLine="35" endColumn="12" startOffset="1250" location="C:\Users\rober\Downloads\eclipse-escet-v5.0-win32.win32.x86_64\eclipse-escet-v5.0\workspace\CIFBenchmarks-5.0.0.v20241003-060816\sudoku\sudoku.cif"/>
            <event xmi:type="expressions:EventExpression" xmi:id="35" event="7">
              <position xmi:type="position:Position" xmi:id="36" source="File &quot;C:\Users\rober\Downloads\eclipse-escet-v5.0-win32.win32.x86_64\eclipse-escet-v5.0\workspace\CIFBenchmarks-5.0.0.v20241003-060816\sudoku\sudoku.cif&quot;: " startLine="35" endOffset="1252" startColumn="10" endLine="35" endColumn="12" startOffset="1250" location="C:\Users\rober\Downloads\eclipse-escet-v5.0-win32.win32.x86_64\eclipse-escet-v5.0\workspace\CIFBenchmarks-5.0.0.v20241003-060816\sudoku\sudoku.cif"/>
              <type xmi:type="types:BoolType" xmi:id="37">
                <position xmi:type="position:Position" xmi:id="38" source="File &quot;C:\Users\rober\Downloads\eclipse-escet-v5.0-win32.win32.x86_64\eclipse-escet-v5.0\workspace\CIFBenchmarks-5.0.0.v20241003-060816\sudoku\sudoku.cif&quot;: " startLine="35" endOffset="1252" startColumn="10" endLine="35" endColumn="12" startOffset="1250" location="C:\Users\rober\Downloads\eclipse-escet-v5.0-win32.win32.x86_64\eclipse-escet-v5.0\workspace\CIFBenchmarks-5.0.0.v20241003-060816\sudoku\sudoku.cif"/>
              </type>
            </event>
          </events>
          <guards xmi:type="expressions:BinaryExpression" xmi:id="39" operator="Equal">
            <position xmi:type="position:Position" xmi:id="40" source="File &quot;C:\Users\rober\Downloads\eclipse-escet-v5.0-win32.win32.x86_64\eclipse-escet-v5.0\workspace\CIFBenchmarks-5.0.0.v20241003-060816\sudoku\sudoku.cif&quot;: " startLine="35" endOffset="1265" startColumn="25" endLine="35" endColumn="25" startOffset="1265" location="C:\Users\rober\Downloads\eclipse-escet-v5.0-win32.win32.x86_64\eclipse-escet-v5.0\workspace\CIFBenchmarks-5.0.0.v20241003-060816\sudoku\sudoku.cif"/>
            <type xmi:type="types:BoolType" xmi:id="41">
              <position xmi:type="position:Position" xmi:id="42" source="File &quot;C:\Users\rober\Downloads\eclipse-escet-v5.0-win32.win32.x86_64\eclipse-escet-v5.0\workspace\CIFBenchmarks-5.0.0.v20241003-060816\sudoku\sudoku.cif&quot;: " startLine="35" endOffset="1265" startColumn="25" endLine="35" endColumn="25" startOffset="1265" location="C:\Users\rober\Downloads\eclipse-escet-v5.0-win32.win32.x86_64\eclipse-escet-v5.0\workspace\CIFBenchmarks-5.0.0.v20241003-060816\sudoku\sudoku.cif"/>
            </type>
            <left xmi:type="expressions:DiscVariableExpression" xmi:id="43" variable="15">
              <position xmi:type="position:Position" xmi:id="44" source="File &quot;C:\Users\rober\Downloads\eclipse-escet-v5.0-win32.win32.x86_64\eclipse-escet-v5.0\workspace\CIFBenchmarks-5.0.0.v20241003-060816\sudoku\sudoku.cif&quot;: " startLine="35" endOffset="1263" startColumn="19" endLine="35" endColumn="23" startOffset="1259" location="C:\Users\rober\Downloads\eclipse-escet-v5.0-win32.win32.x86_64\eclipse-escet-v5.0\workspace\CIFBenchmarks-5.0.0.v20241003-060816\sudoku\sudoku.cif"/>
              <type xmi:type="types:IntType" xmi:id="45" lower="0" upper="4">
                <position xmi:type="position:Position" xmi:id="46" source="File &quot;C:\Users\rober\Downloads\eclipse-escet-v5.0-win32.win32.x86_64\eclipse-escet-v5.0\workspace\CIFBenchmarks-5.0.0.v20241003-060816\sudoku\sudoku.cif&quot;: " startLine="35" endOffset="1263" startColumn="19" endLine="35" endColumn="23" startOffset="1259" location="C:\Users\rober\Downloads\eclipse-escet-v5.0-win32.win32.x86_64\eclipse-escet-v5.0\workspace\CIFBenchmarks-5.0.0.v20241003-060816\sudoku\sudoku.cif"/>
              </type>
            </left>
            <right xmi:type="expressions:IntExpression" xmi:id="47">
              <position xmi:type="position:Position" xmi:id="48" source="File &quot;C:\Users\rober\Downloads\eclipse-escet-v5.0-win32.win32.x86_64\eclipse-escet-v5.0\workspace\CIFBenchmarks-5.0.0.v20241003-060816\sudoku\sudoku.cif&quot;: " startLine="35" endOffset="1267" startColumn="27" endLine="35" endColumn="27" startOffset="1267" location="C:\Users\rober\Downloads\eclipse-escet-v5.0-win32.win32.x86_64\eclipse-escet-v5.0\workspace\CIFBenchmarks-5.0.0.v20241003-060816\sudoku\sudoku.cif"/>
              <type xmi:type="types:IntType" xmi:id="49" lower="0" upper="0">
                <position xmi:type="position:Position" xmi:id="50" source="File &quot;C:\Users\rober\Downloads\eclipse-escet-v5.0-win32.win32.x86_64\eclipse-escet-v5.0\workspace\CIFBenchmarks-5.0.0.v20241003-060816\sudoku\sudoku.cif&quot;: " startLine="35" endOffset="1267" startColumn="27" endLine="35" endColumn="27" startOffset="1267" location="C:\Users\rober\Downloads\eclipse-escet-v5.0-win32.win32.x86_64\eclipse-escet-v5.0\workspace\CIFBenchmarks-5.0.0.v20241003-060816\sudoku\sudoku.cif"/>
              </type>
            </right>
          </guards>
          <updates xmi:type="automata:Assignment" xmi:id="51">
            <position xmi:type="position:Position" xmi:id="52" source="File &quot;C:\Users\rober\Downloads\eclipse-escet-v5.0-win32.win32.x86_64\eclipse-escet-v5.0\workspace\CIFBenchmarks-5.0.0.v20241003-060816\sudoku\sudoku.cif&quot;: " startLine="35" endOffset="1279" startColumn="38" endLine="35" endColumn="39" startOffset="1278" location="C:\Users\rober\Downloads\eclipse-escet-v5.0-win32.win32.x86_64\eclipse-escet-v5.0\workspace\CIFBenchmarks-5.0.0.v20241003-060816\sudoku\sudoku.cif"/>
            <addressable xmi:type="expressions:DiscVariableExpression" xmi:id="53" variable="15">
              <position xmi:type="position:Position" xmi:id="54" source="File &quot;C:\Users\rober\Downloads\eclipse-escet-v5.0-win32.win32.x86_64\eclipse-escet-v5.0\workspace\CIFBenchmarks-5.0.0.v20241003-060816\sudoku\sudoku.cif&quot;: " startLine="35" endOffset="1276" startColumn="32" endLine="35" endColumn="36" startOffset="1272" location="C:\Users\rober\Downloads\eclipse-escet-v5.0-win32.win32.x86_64\eclipse-escet-v5.0\workspace\CIFBenchmarks-5.0.0.v20241003-060816\sudoku\sudoku.cif"/>
              <type xmi:type="types:IntType" xmi:id="55" lower="0" upper="4">
                <position xmi:type="position:Position" xmi:id="56" source="File &quot;C:\Users\rober\Downloads\eclipse-escet-v5.0-win32.win32.x86_64\eclipse-escet-v5.0\workspace\CIFBenchmarks-5.0.0.v20241003-060816\sudoku\sudoku.cif&quot;: " startLine="35" endOffset="1276" startColumn="32" endLine="35" endColumn="36" startOffset="1272" location="C:\Users\rober\Downloads\eclipse-escet-v5.0-win32.win32.x86_64\eclipse-escet-v5.0\workspace\CIFBenchmarks-5.0.0.v20241003-060816\sudoku\sudoku.cif"/>
              </type>
            </addressable>
            <value xmi:type="expressions:IntExpression" xmi:id="57" value="1">
              <position xmi:type="position:Position" xmi:id="58" source="File &quot;C:\Users\rober\Downloads\eclipse-escet-v5.0-win32.win32.x86_64\eclipse-escet-v5.0\workspace\CIFBenchmarks-5.0.0.v20241003-060816\sudoku\sudoku.cif&quot;: " startLine="35" endOffset="1281" startColumn="41" endLine="35" endColumn="41" startOffset="1281" location="C:\Users\rober\Downloads\eclipse-escet-v5.0-win32.win32.x86_64\eclipse-escet-v5.0\workspace\CIFBenchmarks-5.0.0.v20241003-060816\sudoku\sudoku.cif"/>
              <type xmi:type="types:IntType" xmi:id="59" lower="1" upper="1">
                <position xmi:type="position:Position" xmi:id="60" source="File &quot;C:\Users\rober\Downloads\eclipse-escet-v5.0-win32.win32.x86_64\eclipse-escet-v5.0\workspace\CIFBenchmarks-5.0.0.v20241003-060816\sudoku\sudoku.cif&quot;: " startLine="35" endOffset="1281" startColumn="41" endLine="35" endColumn="41" startOffset="1281" location="C:\Users\rober\Downloads\eclipse-escet-v5.0-win32.win32.x86_64\eclipse-escet-v5.0\workspace\CIFBenchmarks-5.0.0.v20241003-060816\sudoku\sudoku.cif"/>
              </type>
            </value>
          </updates>
        </edges>
        <edges xmi:type="automata:Edge" xmi:id="61">
          <position xmi:type="position:Position" xmi:id="62" source="File &quot;C:\Users\rober\Downloads\eclipse-escet-v5.0-win32.win32.x86_64\eclipse-escet-v5.0\workspace\CIFBenchmarks-5.0.0.v20241003-060816\sudoku\sudoku.cif&quot;: " startLine="36" endOffset="1291" startColumn="5" endLine="36" endColumn="8" startOffset="1288" location="C:\Users\rober\Downloads\eclipse-escet-v5.0-win32.win32.x86_64\eclipse-escet-v5.0\workspace\CIFBenchmarks-5.0.0.v20241003-060816\sudoku\sudoku.cif"/>
          <events xmi:type="automata:EdgeEvent" xmi:id="63">
            <position xmi:type="position:Position" xmi:id="64" source="File &quot;C:\Users\rober\Downloads\eclipse-escet-v5.0-win32.win32.x86_64\eclipse-escet-v5.0\workspace\CIFBenchmarks-5.0.0.v20241003-060816\sudoku\sudoku.cif&quot;: " startLine="36" endOffset="1295" startColumn="10" endLine="36" endColumn="12" startOffset="1293" location="C:\Users\rober\Downloads\eclipse-escet-v5.0-win32.win32.x86_64\eclipse-escet-v5.0\workspace\CIFBenchmarks-5.0.0.v20241003-060816\sudoku\sudoku.cif"/>
            <event xmi:type="expressions:EventExpression" xmi:id="65" event="9">
              <position xmi:type="position:Position" xmi:id="66" source="File &quot;C:\Users\rober\Downloads\eclipse-escet-v5.0-win32.win32.x86_64\eclipse-escet-v5.0\workspace\CIFBenchmarks-5.0.0.v20241003-060816\sudoku\sudoku.cif&quot;: " startLine="36" endOffset="1295" startColumn="10" endLine="36" endColumn="12" startOffset="1293" location="C:\Users\rober\Downloads\eclipse-escet-v5.0-win32.win32.x86_64\eclipse-escet-v5.0\workspace\CIFBenchmarks-5.0.0.v20241003-060816\sudoku\sudoku.cif"/>
              <type xmi:type="types:BoolType" xmi:id="67">
                <position xmi:type="position:Position" xmi:id="68" source="File &quot;C:\Users\rober\Downloads\eclipse-escet-v5.0-win32.win32.x86_64\eclipse-escet-v5.0\workspace\CIFBenchmarks-5.0.0.v20241003-060816\sudoku\sudoku.cif&quot;: " startLine="36" endOffset="1295" startColumn="10" endLine="36" endColumn="12" startOffset="1293" location="C:\Users\rober\Downloads\eclipse-escet-v5.0-win32.win32.x86_64\eclipse-escet-v5.0\workspace\CIFBenchmarks-5.0.0.v20241003-060816\sudoku\sudoku.cif"/>
              </type>
            </event>
          </events>
          <guards xmi:type="expressions:BinaryExpression" xmi:id="69" operator="Equal">
            <position xmi:type="position:Position" xmi:id="70" source="File &quot;C:\Users\rober\Downloads\eclipse-escet-v5.0-win32.win32.x86_64\eclipse-escet-v5.0\workspace\CIFBenchmarks-5.0.0.v20241003-060816\sudoku\sudoku.cif&quot;: " startLine="36" endOffset="1308" startColumn="25" endLine="36" endColumn="25" startOffset="1308" location="C:\Users\rober\Downloads\eclipse-escet-v5.0-win32.win32.x86_64\eclipse-escet-v5.0\workspace\CIFBenchmarks-5.0.0.v20241003-060816\sudoku\sudoku.cif"/>
            <type xmi:type="types:BoolType" xmi:id="71">
              <position xmi:type="position:Position" xmi:id="72" source="File &quot;C:\Users\rober\Downloads\eclipse-escet-v5.0-win32.win32.x86_64\eclipse-escet-v5.0\workspace\CIFBenchmarks-5.0.0.v20241003-060816\sudoku\sudoku.cif&quot;: " startLine="36" endOffset="1308" startColumn="25" endLine="36" endColumn="25" startOffset="1308" location="C:\Users\rober\Downloads\eclipse-escet-v5.0-win32.win32.x86_64\eclipse-escet-v5.0\workspace\CIFBenchmarks-5.0.0.v20241003-060816\sudoku\sudoku.cif"/>
            </type>
            <left xmi:type="expressions:DiscVariableExpression" xmi:id="73" variable="15">
              <position xmi:type="position:Position" xmi:id="74" source="File &quot;C:\Users\rober\Downloads\eclipse-escet-v5.0-win32.win32.x86_64\eclipse-escet-v5.0\workspace\CIFBenchmarks-5.0.0.v20241003-060816\sudoku\sudoku.cif&quot;: " startLine="36" endOffset="1306" startColumn="19" endLine="36" endColumn="23" startOffset="1302" location="C:\Users\rober\Downloads\eclipse-escet-v5.0-win32.win32.x86_64\eclipse-escet-v5.0\workspace\CIFBenchmarks-5.0.0.v20241003-060816\sudoku\sudoku.cif"/>
              <type xmi:type="types:IntType" xmi:id="75" lower="0" upper="4">
                <position xmi:type="position:Position" xmi:id="76" source="File &quot;C:\Users\rober\Downloads\eclipse-escet-v5.0-win32.win32.x86_64\eclipse-escet-v5.0\workspace\CIFBenchmarks-5.0.0.v20241003-060816\sudoku\sudoku.cif&quot;: " startLine="36" endOffset="1306" startColumn="19" endLine="36" endColumn="23" startOffset="1302" location="C:\Users\rober\Downloads\eclipse-escet-v5.0-win32.win32.x86_64\eclipse-escet-v5.0\workspace\CIFBenchmarks-5.0.0.v20241003-060816\sudoku\sudoku.cif"/>
              </type>
            </left>
            <right xmi:type="expressions:IntExpression" xmi:id="77">
              <position xmi:type="position:Position" xmi:id="78" source="File &quot;C:\Users\rober\Downloads\eclipse-escet-v5.0-win32.win32.x86_64\eclipse-escet-v5.0\workspace\CIFBenchmarks-5.0.0.v20241003-060816\sudoku\sudoku.cif&quot;: " startLine="36" endOffset="1310" startColumn="27" endLine="36" endColumn="27" startOffset="1310" location="C:\Users\rober\Downloads\eclipse-escet-v5.0-win32.win32.x86_64\eclipse-escet-v5.0\workspace\CIFBenchmarks-5.0.0.v20241003-060816\sudoku\sudoku.cif"/>
              <type xmi:type="types:IntType" xmi:id="79" lower="0" upper="0">
                <position xmi:type="position:Position" xmi:id="80" source="File &quot;C:\Users\rober\Downloads\eclipse-escet-v5.0-win32.win32.x86_64\eclipse-escet-v5.0\workspace\CIFBenchmarks-5.0.0.v20241003-060816\sudoku\sudoku.cif&quot;: " startLine="36" endOffset="1310" startColumn="27" endLine="36" endColumn="27" startOffset="1310" location="C:\Users\rober\Downloads\eclipse-escet-v5.0-win32.win32.x86_64\eclipse-escet-v5.0\workspace\CIFBenchmarks-5.0.0.v20241003-060816\sudoku\sudoku.cif"/>
              </type>
            </right>
          </guards>
          <updates xmi:type="automata:Assignment" xmi:id="81">
            <position xmi:type="position:Position" xmi:id="82" source="File &quot;C:\Users\rober\Downloads\eclipse-escet-v5.0-win32.win32.x86_64\eclipse-escet-v5.0\workspace\CIFBenchmarks-5.0.0.v20241003-060816\sudoku\sudoku.cif&quot;: " startLine="36" endOffset="1322" startColumn="38" endLine="36" endColumn="39" startOffset="1321" location="C:\Users\rober\Downloads\eclipse-escet-v5.0-win32.win32.x86_64\eclipse-escet-v5.0\workspace\CIFBenchmarks-5.0.0.v20241003-060816\sudoku\sudoku.cif"/>
            <addressable xmi:type="expressions:DiscVariableExpression" xmi:id="83" variable="15">
              <position xmi:type="position:Position" xmi:id="84" source="File &quot;C:\Users\rober\Downloads\eclipse-escet-v5.0-win32.win32.x86_64\eclipse-escet-v5.0\workspace\CIFBenchmarks-5.0.0.v20241003-060816\sudoku\sudoku.cif&quot;: " startLine="36" endOffset="1319" startColumn="32" endLine="36" endColumn="36" startOffset="1315" location="C:\Users\rober\Downloads\eclipse-escet-v5.0-win32.win32.x86_64\eclipse-escet-v5.0\workspace\CIFBenchmarks-5.0.0.v20241003-060816\sudoku\sudoku.cif"/>
              <type xmi:type="types:IntType" xmi:id="85" lower="0" upper="4">
                <position xmi:type="position:Position" xmi:id="86" source="File &quot;C:\Users\rober\Downloads\eclipse-escet-v5.0-win32.win32.x86_64\eclipse-escet-v5.0\workspace\CIFBenchmarks-5.0.0.v20241003-060816\sudoku\sudoku.cif&quot;: " startLine="36" endOffset="1319" startColumn="32" endLine="36" endColumn="36" startOffset="1315" location="C:\Users\rober\Downloads\eclipse-escet-v5.0-win32.win32.x86_64\eclipse-escet-v5.0\workspace\CIFBenchmarks-5.0.0.v20241003-060816\sudoku\sudoku.cif"/>
              </type>
            </addressable>
            <value xmi:type="expressions:IntExpression" xmi:id="87" value="2">
              <position xmi:type="position:Position" xmi:id="88" source="File &quot;C:\Users\rober\Downloads\eclipse-escet-v5.0-win32.win32.x86_64\eclipse-escet-v5.0\workspace\CIFBenchmarks-5.0.0.v20241003-060816\sudoku\sudoku.cif&quot;: " startLine="36" endOffset="1324" startColumn="41" endLine="36" endColumn="41" startOffset="1324" location="C:\Users\rober\Downloads\eclipse-escet-v5.0-win32.win32.x86_64\eclipse-escet-v5.0\workspace\CIFBenchmarks-5.0.0.v20241003-060816\sudoku\sudoku.cif"/>
              <type xmi:type="types:IntType" xmi:id="89" lower="2" upper="2">
                <position xmi:type="position:Position" xmi:id="90" source="File &quot;C:\Users\rober\Downloads\eclipse-escet-v5.0-win32.win32.x86_64\eclipse-escet-v5.0\workspace\CIFBenchmarks-5.0.0.v20241003-060816\sudoku\sudoku.cif&quot;: " startLine="36" endOffset="1324" startColumn="41" endLine="36" endColumn="41" startOffset="1324" location="C:\Users\rober\Downloads\eclipse-escet-v5.0-win32.win32.x86_64\eclipse-escet-v5.0\workspace\CIFBenchmarks-5.0.0.v20241003-060816\sudoku\sudoku.cif"/>
              </type>
            </value>
          </updates>
        </edges>
        <edges xmi:type="automata:Edge" xmi:id="91">
          <position xmi:type="position:Position" xmi:id="92" source="File &quot;C:\Users\rober\Downloads\eclipse-escet-v5.0-win32.win32.x86_64\eclipse-escet-v5.0\workspace\CIFBenchmarks-5.0.0.v20241003-060816\sudoku\sudoku.cif&quot;: " startLine="37" endOffset="1334" startColumn="5" endLine="37" endColumn="8" startOffset="1331" location="C:\Users\rober\Downloads\eclipse-escet-v5.0-win32.win32.x86_64\eclipse-escet-v5.0\workspace\CIFBenchmarks-5.0.0.v20241003-060816\sudoku\sudoku.cif"/>
          <events xmi:type="automata:EdgeEvent" xmi:id="93">
            <position xmi:type="position:Position" xmi:id="94" source="File &quot;C:\Users\rober\Downloads\eclipse-escet-v5.0-win32.win32.x86_64\eclipse-escet-v5.0\workspace\CIFBenchmarks-5.0.0.v20241003-060816\sudoku\sudoku.cif&quot;: " startLine="37" endOffset="1338" startColumn="10" endLine="37" endColumn="12" startOffset="1336" location="C:\Users\rober\Downloads\eclipse-escet-v5.0-win32.win32.x86_64\eclipse-escet-v5.0\workspace\CIFBenchmarks-5.0.0.v20241003-060816\sudoku\sudoku.cif"/>
            <event xmi:type="expressions:EventExpression" xmi:id="95" event="11">
              <position xmi:type="position:Position" xmi:id="96" source="File &quot;C:\Users\rober\Downloads\eclipse-escet-v5.0-win32.win32.x86_64\eclipse-escet-v5.0\workspace\CIFBenchmarks-5.0.0.v20241003-060816\sudoku\sudoku.cif&quot;: " startLine="37" endOffset="1338" startColumn="10" endLine="37" endColumn="12" startOffset="1336" location="C:\Users\rober\Downloads\eclipse-escet-v5.0-win32.win32.x86_64\eclipse-escet-v5.0\workspace\CIFBenchmarks-5.0.0.v20241003-060816\sudoku\sudoku.cif"/>
              <type xmi:type="types:BoolType" xmi:id="97">
                <position xmi:type="position:Position" xmi:id="98" source="File &quot;C:\Users\rober\Downloads\eclipse-escet-v5.0-win32.win32.x86_64\eclipse-escet-v5.0\workspace\CIFBenchmarks-5.0.0.v20241003-060816\sudoku\sudoku.cif&quot;: " startLine="37" endOffset="1338" startColumn="10" endLine="37" endColumn="12" startOffset="1336" location="C:\Users\rober\Downloads\eclipse-escet-v5.0-win32.win32.x86_64\eclipse-escet-v5.0\workspace\CIFBenchmarks-5.0.0.v20241003-060816\sudoku\sudoku.cif"/>
              </type>
            </event>
          </events>
          <guards xmi:type="expressions:BinaryExpression" xmi:id="99" operator="Equal">
            <position xmi:type="position:Position" xmi:id="100" source="File &quot;C:\Users\rober\Downloads\eclipse-escet-v5.0-win32.win32.x86_64\eclipse-escet-v5.0\workspace\CIFBenchmarks-5.0.0.v20241003-060816\sudoku\sudoku.cif&quot;: " startLine="37" endOffset="1351" startColumn="25" endLine="37" endColumn="25" startOffset="1351" location="C:\Users\rober\Downloads\eclipse-escet-v5.0-win32.win32.x86_64\eclipse-escet-v5.0\workspace\CIFBenchmarks-5.0.0.v20241003-060816\sudoku\sudoku.cif"/>
            <type xmi:type="types:BoolType" xmi:id="101">
              <position xmi:type="position:Position" xmi:id="102" source="File &quot;C:\Users\rober\Downloads\eclipse-escet-v5.0-win32.win32.x86_64\eclipse-escet-v5.0\workspace\CIFBenchmarks-5.0.0.v20241003-060816\sudoku\sudoku.cif&quot;: " startLine="37" endOffset="1351" startColumn="25" endLine="37" endColumn="25" startOffset="1351" location="C:\Users\rober\Downloads\eclipse-escet-v5.0-win32.win32.x86_64\eclipse-escet-v5.0\workspace\CIFBenchmarks-5.0.0.v20241003-060816\sudoku\sudoku.cif"/>
            </type>
            <left xmi:type="expressions:DiscVariableExpression" xmi:id="103" variable="15">
              <position xmi:type="position:Position" xmi:id="104" source="File &quot;C:\Users\rober\Downloads\eclipse-escet-v5.0-win32.win32.x86_64\eclipse-escet-v5.0\workspace\CIFBenchmarks-5.0.0.v20241003-060816\sudoku\sudoku.cif&quot;: " startLine="37" endOffset="1349" startColumn="19" endLine="37" endColumn="23" startOffset="1345" location="C:\Users\rober\Downloads\eclipse-escet-v5.0-win32.win32.x86_64\eclipse-escet-v5.0\workspace\CIFBenchmarks-5.0.0.v20241003-060816\sudoku\sudoku.cif"/>
              <type xmi:type="types:IntType" xmi:id="105" lower="0" upper="4">
                <position xmi:type="position:Position" xmi:id="106" source="File &quot;C:\Users\rober\Downloads\eclipse-escet-v5.0-win32.win32.x86_64\eclipse-escet-v5.0\workspace\CIFBenchmarks-5.0.0.v20241003-060816\sudoku\sudoku.cif&quot;: " startLine="37" endOffset="1349" startColumn="19" endLine="37" endColumn="23" startOffset="1345" location="C:\Users\rober\Downloads\eclipse-escet-v5.0-win32.win32.x86_64\eclipse-escet-v5.0\workspace\CIFBenchmarks-5.0.0.v20241003-060816\sudoku\sudoku.cif"/>
              </type>
            </left>
            <right xmi:type="expressions:IntExpression" xmi:id="107">
              <position xmi:type="position:Position" xmi:id="108" source="File &quot;C:\Users\rober\Downloads\eclipse-escet-v5.0-win32.win32.x86_64\eclipse-escet-v5.0\workspace\CIFBenchmarks-5.0.0.v20241003-060816\sudoku\sudoku.cif&quot;: " startLine="37" endOffset="1353" startColumn="27" endLine="37" endColumn="27" startOffset="1353" location="C:\Users\rober\Downloads\eclipse-escet-v5.0-win32.win32.x86_64\eclipse-escet-v5.0\workspace\CIFBenchmarks-5.0.0.v20241003-060816\sudoku\sudoku.cif"/>
              <type xmi:type="types:IntType" xmi:id="109" lower="0" upper="0">
                <position xmi:type="position:Position" xmi:id="110" source="File &quot;C:\Users\rober\Downloads\eclipse-escet-v5.0-win32.win32.x86_64\eclipse-escet-v5.0\workspace\CIFBenchmarks-5.0.0.v20241003-060816\sudoku\sudoku.cif&quot;: " startLine="37" endOffset="1353" startColumn="27" endLine="37" endColumn="27" startOffset="1353" location="C:\Users\rober\Downloads\eclipse-escet-v5.0-win32.win32.x86_64\eclipse-escet-v5.0\workspace\CIFBenchmarks-5.0.0.v20241003-060816\sudoku\sudoku.cif"/>
              </type>
            </right>
          </guards>
          <updates xmi:type="automata:Assignment" xmi:id="111">
            <position xmi:type="position:Position" xmi:id="112" source="File &quot;C:\Users\rober\Downloads\eclipse-escet-v5.0-win32.win32.x86_64\eclipse-escet-v5.0\workspace\CIFBenchmarks-5.0.0.v20241003-060816\sudoku\sudoku.cif&quot;: " startLine="37" endOffset="1365" startColumn="38" endLine="37" endColumn="39" startOffset="1364" location="C:\Users\rober\Downloads\eclipse-escet-v5.0-win32.win32.x86_64\eclipse-escet-v5.0\workspace\CIFBenchmarks-5.0.0.v20241003-060816\sudoku\sudoku.cif"/>
            <addressable xmi:type="expressions:DiscVariableExpression" xmi:id="113" variable="15">
              <position xmi:type="position:Position" xmi:id="114" source="File &quot;C:\Users\rober\Downloads\eclipse-escet-v5.0-win32.win32.x86_64\eclipse-escet-v5.0\workspace\CIFBenchmarks-5.0.0.v20241003-060816\sudoku\sudoku.cif&quot;: " startLine="37" endOffset="1362" startColumn="32" endLine="37" endColumn="36" startOffset="1358" location="C:\Users\rober\Downloads\eclipse-escet-v5.0-win32.win32.x86_64\eclipse-escet-v5.0\workspace\CIFBenchmarks-5.0.0.v20241003-060816\sudoku\sudoku.cif"/>
              <type xmi:type="types:IntType" xmi:id="115" lower="0" upper="4">
                <position xmi:type="position:Position" xmi:id="116" source="File &quot;C:\Users\rober\Downloads\eclipse-escet-v5.0-win32.win32.x86_64\eclipse-escet-v5.0\workspace\CIFBenchmarks-5.0.0.v20241003-060816\sudoku\sudoku.cif&quot;: " startLine="37" endOffset="1362" startColumn="32" endLine="37" endColumn="36" startOffset="1358" location="C:\Users\rober\Downloads\eclipse-escet-v5.0-win32.win32.x86_64\eclipse-escet-v5.0\workspace\CIFBenchmarks-5.0.0.v20241003-060816\sudoku\sudoku.cif"/>
              </type>
            </addressable>
            <value xmi:type="expressions:IntExpression" xmi:id="117" value="3">
              <position xmi:type="position:Position" xmi:id="118" source="File &quot;C:\Users\rober\Downloads\eclipse-escet-v5.0-win32.win32.x86_64\eclipse-escet-v5.0\workspace\CIFBenchmarks-5.0.0.v20241003-060816\sudoku\sudoku.cif&quot;: " startLine="37" endOffset="1367" startColumn="41" endLine="37" endColumn="41" startOffset="1367" location="C:\Users\rober\Downloads\eclipse-escet-v5.0-win32.win32.x86_64\eclipse-escet-v5.0\workspace\CIFBenchmarks-5.0.0.v20241003-060816\sudoku\sudoku.cif"/>
              <type xmi:type="types:IntType" xmi:id="119" lower="3" upper="3">
                <position xmi:type="position:Position" xmi:id="120" source="File &quot;C:\Users\rober\Downloads\eclipse-escet-v5.0-win32.win32.x86_64\eclipse-escet-v5.0\workspace\CIFBenchmarks-5.0.0.v20241003-060816\sudoku\sudoku.cif&quot;: " startLine="37" endOffset="1367" startColumn="41" endLine="37" endColumn="41" startOffset="1367" location="C:\Users\rober\Downloads\eclipse-escet-v5.0-win32.win32.x86_64\eclipse-escet-v5.0\workspace\CIFBenchmarks-5.0.0.v20241003-060816\sudoku\sudoku.cif"/>
              </type>
            </value>
          </updates>
        </edges>
        <edges xmi:type="automata:Edge" xmi:id="121">
          <position xmi:type="position:Position" xmi:id="122" source="File &quot;C:\Users\rober\Downloads\eclipse-escet-v5.0-win32.win32.x86_64\eclipse-escet-v5.0\workspace\CIFBenchmarks-5.0.0.v20241003-060816\sudoku\sudoku.cif&quot;: " startLine="38" endOffset="1377" startColumn="5" endLine="38" endColumn="8" startOffset="1374" location="C:\Users\rober\Downloads\eclipse-escet-v5.0-win32.win32.x86_64\eclipse-escet-v5.0\workspace\CIFBenchmarks-5.0.0.v20241003-060816\sudoku\sudoku.cif"/>
          <events xmi:type="automata:EdgeEvent" xmi:id="123">
            <position xmi:type="position:Position" xmi:id="124" source="File &quot;C:\Users\rober\Downloads\eclipse-escet-v5.0-win32.win32.x86_64\eclipse-escet-v5.0\workspace\CIFBenchmarks-5.0.0.v20241003-060816\sudoku\sudoku.cif&quot;: " startLine="38" endOffset="1381" startColumn="10" endLine="38" endColumn="12" startOffset="1379" location="C:\Users\rober\Downloads\eclipse-escet-v5.0-win32.win32.x86_64\eclipse-escet-v5.0\workspace\CIFBenchmarks-5.0.0.v20241003-060816\sudoku\sudoku.cif"/>
            <event xmi:type="expressions:EventExpression" xmi:id="125" event="13">
              <position xmi:type="position:Position" xmi:id="126" source="File &quot;C:\Users\rober\Downloads\eclipse-escet-v5.0-win32.win32.x86_64\eclipse-escet-v5.0\workspace\CIFBenchmarks-5.0.0.v20241003-060816\sudoku\sudoku.cif&quot;: " startLine="38" endOffset="1381" startColumn="10" endLine="38" endColumn="12" startOffset="1379" location="C:\Users\rober\Downloads\eclipse-escet-v5.0-win32.win32.x86_64\eclipse-escet-v5.0\workspace\CIFBenchmarks-5.0.0.v20241003-060816\sudoku\sudoku.cif"/>
              <type xmi:type="types:BoolType" xmi:id="127">
                <position xmi:type="position:Position" xmi:id="128" source="File &quot;C:\Users\rober\Downloads\eclipse-escet-v5.0-win32.win32.x86_64\eclipse-escet-v5.0\workspace\CIFBenchmarks-5.0.0.v20241003-060816\sudoku\sudoku.cif&quot;: " startLine="38" endOffset="1381" startColumn="10" endLine="38" endColumn="12" startOffset="1379" location="C:\Users\rober\Downloads\eclipse-escet-v5.0-win32.win32.x86_64\eclipse-escet-v5.0\workspace\CIFBenchmarks-5.0.0.v20241003-060816\sudoku\sudoku.cif"/>
              </type>
            </event>
          </events>
          <guards xmi:type="expressions:BinaryExpression" xmi:id="129" operator="Equal">
            <position xmi:type="position:Position" xmi:id="130" source="File &quot;C:\Users\rober\Downloads\eclipse-escet-v5.0-win32.win32.x86_64\eclipse-escet-v5.0\workspace\CIFBenchmarks-5.0.0.v20241003-060816\sudoku\sudoku.cif&quot;: " startLine="38" endOffset="1394" startColumn="25" endLine="38" endColumn="25" startOffset="1394" location="C:\Users\rober\Downloads\eclipse-escet-v5.0-win32.win32.x86_64\eclipse-escet-v5.0\workspace\CIFBenchmarks-5.0.0.v20241003-060816\sudoku\sudoku.cif"/>
            <type xmi:type="types:BoolType" xmi:id="131">
              <position xmi:type="position:Position" xmi:id="132" source="File &quot;C:\Users\rober\Downloads\eclipse-escet-v5.0-win32.win32.x86_64\eclipse-escet-v5.0\workspace\CIFBenchmarks-5.0.0.v20241003-060816\sudoku\sudoku.cif&quot;: " startLine="38" endOffset="1394" startColumn="25" endLine="38" endColumn="25" startOffset="1394" location="C:\Users\rober\Downloads\eclipse-escet-v5.0-win32.win32.x86_64\eclipse-escet-v5.0\workspace\CIFBenchmarks-5.0.0.v20241003-060816\sudoku\sudoku.cif"/>
            </type>
            <left xmi:type="expressions:DiscVariableExpression" xmi:id="133" variable="15">
              <position xmi:type="position:Position" xmi:id="134" source="File &quot;C:\Users\rober\Downloads\eclipse-escet-v5.0-win32.win32.x86_64\eclipse-escet-v5.0\workspace\CIFBenchmarks-5.0.0.v20241003-060816\sudoku\sudoku.cif&quot;: " startLine="38" endOffset="1392" startColumn="19" endLine="38" endColumn="23" startOffset="1388" location="C:\Users\rober\Downloads\eclipse-escet-v5.0-win32.win32.x86_64\eclipse-escet-v5.0\workspace\CIFBenchmarks-5.0.0.v20241003-060816\sudoku\sudoku.cif"/>
              <type xmi:type="types:IntType" xmi:id="135" lower="0" upper="4">
                <position xmi:type="position:Position" xmi:id="136" source="File &quot;C:\Users\rober\Downloads\eclipse-escet-v5.0-win32.win32.x86_64\eclipse-escet-v5.0\workspace\CIFBenchmarks-5.0.0.v20241003-060816\sudoku\sudoku.cif&quot;: " startLine="38" endOffset="1392" startColumn="19" endLine="38" endColumn="23" startOffset="1388" location="C:\Users\rober\Downloads\eclipse-escet-v5.0-win32.win32.x86_64\eclipse-escet-v5.0\workspace\CIFBenchmarks-5.0.0.v20241003-060816\sudoku\sudoku.cif"/>
              </type>
            </left>
            <right xmi:type="expressions:IntExpression" xmi:id="137">
              <position xmi:type="position:Position" xmi:id="138" source="File &quot;C:\Users\rober\Downloads\eclipse-escet-v5.0-win32.win32.x86_64\eclipse-escet-v5.0\workspace\CIFBenchmarks-5.0.0.v20241003-060816\sudoku\sudoku.cif&quot;: " startLine="38" endOffset="1396" startColumn="27" endLine="38" endColumn="27" startOffset="1396" location="C:\Users\rober\Downloads\eclipse-escet-v5.0-win32.win32.x86_64\eclipse-escet-v5.0\workspace\CIFBenchmarks-5.0.0.v20241003-060816\sudoku\sudoku.cif"/>
              <type xmi:type="types:IntType" xmi:id="139" lower="0" upper="0">
                <position xmi:type="position:Position" xmi:id="140" source="File &quot;C:\Users\rober\Downloads\eclipse-escet-v5.0-win32.win32.x86_64\eclipse-escet-v5.0\workspace\CIFBenchmarks-5.0.0.v20241003-060816\sudoku\sudoku.cif&quot;: " startLine="38" endOffset="1396" startColumn="27" endLine="38" endColumn="27" startOffset="1396" location="C:\Users\rober\Downloads\eclipse-escet-v5.0-win32.win32.x86_64\eclipse-escet-v5.0\workspace\CIFBenchmarks-5.0.0.v20241003-060816\sudoku\sudoku.cif"/>
              </type>
            </right>
          </guards>
          <updates xmi:type="automata:Assignment" xmi:id="141">
            <position xmi:type="position:Position" xmi:id="142" source="File &quot;C:\Users\rober\Downloads\eclipse-escet-v5.0-win32.win32.x86_64\eclipse-escet-v5.0\workspace\CIFBenchmarks-5.0.0.v20241003-060816\sudoku\sudoku.cif&quot;: " startLine="38" endOffset="1408" startColumn="38" endLine="38" endColumn="39" startOffset="1407" location="C:\Users\rober\Downloads\eclipse-escet-v5.0-win32.win32.x86_64\eclipse-escet-v5.0\workspace\CIFBenchmarks-5.0.0.v20241003-060816\sudoku\sudoku.cif"/>
            <addressable xmi:type="expressions:DiscVariableExpression" xmi:id="143" variable="15">
              <position xmi:type="position:Position" xmi:id="144" source="File &quot;C:\Users\rober\Downloads\eclipse-escet-v5.0-win32.win32.x86_64\eclipse-escet-v5.0\workspace\CIFBenchmarks-5.0.0.v20241003-060816\sudoku\sudoku.cif&quot;: " startLine="38" endOffset="1405" startColumn="32" endLine="38" endColumn="36" startOffset="1401" location="C:\Users\rober\Downloads\eclipse-escet-v5.0-win32.win32.x86_64\eclipse-escet-v5.0\workspace\CIFBenchmarks-5.0.0.v20241003-060816\sudoku\sudoku.cif"/>
              <type xmi:type="types:IntType" xmi:id="145" lower="0" upper="4">
                <position xmi:type="position:Position" xmi:id="146" source="File &quot;C:\Users\rober\Downloads\eclipse-escet-v5.0-win32.win32.x86_64\eclipse-escet-v5.0\workspace\CIFBenchmarks-5.0.0.v20241003-060816\sudoku\sudoku.cif&quot;: " startLine="38" endOffset="1405" startColumn="32" endLine="38" endColumn="36" startOffset="1401" location="C:\Users\rober\Downloads\eclipse-escet-v5.0-win32.win32.x86_64\eclipse-escet-v5.0\workspace\CIFBenchmarks-5.0.0.v20241003-060816\sudoku\sudoku.cif"/>
              </type>
            </addressable>
            <value xmi:type="expressions:IntExpression" xmi:id="147" value="4">
              <position xmi:type="position:Position" xmi:id="148" source="File &quot;C:\Users\rober\Downloads\eclipse-escet-v5.0-win32.win32.x86_64\eclipse-escet-v5.0\workspace\CIFBenchmarks-5.0.0.v20241003-060816\sudoku\sudoku.cif&quot;: " startLine="38" endOffset="1410" startColumn="41" endLine="38" endColumn="41" startOffset="1410" location="C:\Users\rober\Downloads\eclipse-escet-v5.0-win32.win32.x86_64\eclipse-escet-v5.0\workspace\CIFBenchmarks-5.0.0.v20241003-060816\sudoku\sudoku.cif"/>
              <type xmi:type="types:IntType" xmi:id="149" lower="4" upper="4">
                <position xmi:type="position:Position" xmi:id="150" source="File &quot;C:\Users\rober\Downloads\eclipse-escet-v5.0-win32.win32.x86_64\eclipse-escet-v5.0\workspace\CIFBenchmarks-5.0.0.v20241003-060816\sudoku\sudoku.cif&quot;: " startLine="38" endOffset="1410" startColumn="41" endLine="38" endColumn="41" startOffset="1410" location="C:\Users\rober\Downloads\eclipse-escet-v5.0-win32.win32.x86_64\eclipse-escet-v5.0\workspace\CIFBenchmarks-5.0.0.v20241003-060816\sudoku\sudoku.cif"/>
              </type>
            </value>
          </updates>
        </edges>
        <markeds xmi:type="expressions:BinaryExpression" xmi:id="151" operator="GreaterThan">
          <position xmi:type="position:Position" xmi:id="152" source="File &quot;C:\Users\rober\Downloads\eclipse-escet-v5.0-win32.win32.x86_64\eclipse-escet-v5.0\workspace\CIFBenchmarks-5.0.0.v20241003-060816\sudoku\sudoku.cif&quot;: " startLine="34" endOffset="1191" startColumn="18" endLine="34" endColumn="18" startOffset="1191" location="C:\Users\rober\Downloads\eclipse-escet-v5.0-win32.win32.x86_64\eclipse-escet-v5.0\workspace\CIFBenchmarks-5.0.0.v20241003-060816\sudoku\sudoku.cif"/>
          <type xmi:type="types:BoolType" xmi:id="153">
            <position xmi:type="position:Position" xmi:id="154" source="File &quot;C:\Users\rober\Downloads\eclipse-escet-v5.0-win32.win32.x86_64\eclipse-escet-v5.0\workspace\CIFBenchmarks-5.0.0.v20241003-060816\sudoku\sudoku.cif&quot;: " startLine="34" endOffset="1191" startColumn="18" endLine="34" endColumn="18" startOffset="1191" location="C:\Users\rober\Downloads\eclipse-escet-v5.0-win32.win32.x86_64\eclipse-escet-v5.0\workspace\CIFBenchmarks-5.0.0.v20241003-060816\sudoku\sudoku.cif"/>
          </type>
          <left xmi:type="expressions:DiscVariableExpression" xmi:id="155" variable="15">
            <position xmi:type="position:Position" xmi:id="156" source="File &quot;C:\Users\rober\Downloads\eclipse-escet-v5.0-win32.win32.x86_64\eclipse-escet-v5.0\workspace\CIFBenchmarks-5.0.0.v20241003-060816\sudoku\sudoku.cif&quot;: " startLine="34" endOffset="1189" startColumn="12" endLine="34" endColumn="16" startOffset="1185" location="C:\Users\rober\Downloads\eclipse-escet-v5.0-win32.win32.x86_64\eclipse-escet-v5.0\workspace\CIFBenchmarks-5.0.0.v20241003-060816\sudoku\sudoku.cif"/>
            <type xmi:type="types:IntType" xmi:id="157" lower="0" upper="4">
              <position xmi:type="position:Position" xmi:id="158" source="File &quot;C:\Users\rober\Downloads\eclipse-escet-v5.0-win32.win32.x86_64\eclipse-escet-v5.0\workspace\CIFBenchmarks-5.0.0.v20241003-060816\sudoku\sudoku.cif&quot;: " startLine="34" endOffset="1189" startColumn="12" endLine="34" endColumn="16" startOffset="1185" location="C:\Users\rober\Downloads\eclipse-escet-v5.0-win32.win32.x86_64\eclipse-escet-v5.0\workspace\CIFBenchmarks-5.0.0.v20241003-060816\sudoku\sudoku.cif"/>
            </type>
          </left>
          <right xmi:type="expressions:IntExpression" xmi:id="159">
            <position xmi:type="position:Position" xmi:id="160" source="File &quot;C:\Users\rober\Downloads\eclipse-escet-v5.0-win32.win32.x86_64\eclipse-escet-v5.0\workspace\CIFBenchmarks-5.0.0.v20241003-060816\sudoku\sudoku.cif&quot;: " startLine="34" endOffset="1193" startColumn="20" endLine="34" endColumn="20" startOffset="1193" location="C:\Users\rober\Downloads\eclipse-escet-v5.0-win32.win32.x86_64\eclipse-escet-v5.0\workspace\CIFBenchmarks-5.0.0.v20241003-060816\sudoku\sudoku.cif"/>
            <type xmi:type="types:IntType" xmi:id="161" lower="0" upper="0">
              <position xmi:type="position:Position" xmi:id="162" source="File &quot;C:\Users\rober\Downloads\eclipse-escet-v5.0-win32.win32.x86_64\eclipse-escet-v5.0\workspace\CIFBenchmarks-5.0.0.v20241003-060816\sudoku\sudoku.cif&quot;: " startLine="34" endOffset="1193" startColumn="20" endLine="34" endColumn="20" startOffset="1193" location="C:\Users\rober\Downloads\eclipse-escet-v5.0-win32.win32.x86_64\eclipse-escet-v5.0\workspace\CIFBenchmarks-5.0.0.v20241003-060816\sudoku\sudoku.cif"/>
            </type>
          </right>
        </markeds>
      </locations>
    </body>
  </definitions>
  <definitions xmi:type="cif:ComponentDef" xmi:id="163">
    <position xmi:type="position:Position" xmi:id="164" source="File &quot;C:\Users\rober\Downloads\eclipse-escet-v5.0-win32.win32.x86_64\eclipse-escet-v5.0\workspace\CIFBenchmarks-5.0.0.v20241003-060816\sudoku\sudoku.cif&quot;: " startLine="65" endOffset="1714" startColumn="11" endLine="65" endColumn="21" startOffset="1704" location="C:\Users\rober\Downloads\eclipse-escet-v5.0-win32.win32.x86_64\eclipse-escet-v5.0\workspace\CIFBenchmarks-5.0.0.v20241003-060816\sudoku\sudoku.cif"/>
    <body xmi:type="cif:Group" xmi:id="165" name="Constraints">
      <position xmi:type="position:Position" xmi:id="166" source="File &quot;C:\Users\rober\Downloads\eclipse-escet-v5.0-win32.win32.x86_64\eclipse-escet-v5.0\workspace\CIFBenchmarks-5.0.0.v20241003-060816\sudoku\sudoku.cif&quot;: " startLine="65" endOffset="1714" startColumn="11" endLine="65" endColumn="21" startOffset="1704" location="C:\Users\rober\Downloads\eclipse-escet-v5.0-win32.win32.x86_64\eclipse-escet-v5.0\workspace\CIFBenchmarks-5.0.0.v20241003-060816\sudoku\sudoku.cif"/>
      <markeds xmi:type="expressions:BinaryExpression" xmi:id="167">
        <position xmi:type="position:Position" xmi:id="168" source="File &quot;C:\Users\rober\Downloads\eclipse-escet-v5.0-win32.win32.x86_64\eclipse-escet-v5.0\workspace\CIFBenchmarks-5.0.0.v20241003-060816\sudoku\sudoku.cif&quot;: " startLine="67" endOffset="1843" startColumn="70" endLine="67" endColumn="71" startOffset="1842" location="C:\Users\rober\Downloads\eclipse-escet-v5.0-win32.win32.x86_64\eclipse-escet-v5.0\workspace\CIFBenchmarks-5.0.0.v20241003-060816\sudoku\sudoku.cif"/>
        <type xmi:type="types:BoolType" xmi:id="169">
          <position xmi:type="position:Position" xmi:id="170" source="File &quot;C:\Users\rober\Downloads\eclipse-escet-v5.0-win32.win32.x86_64\eclipse-escet-v5.0\workspace\CIFBenchmarks-5.0.0.v20241003-060816\sudoku\sudoku.cif&quot;: " startLine="67" endOffset="1843" startColumn="70" endLine="67" endColumn="71" startOffset="1842" location="C:\Users\rober\Downloads\eclipse-escet-v5.0-win32.win32.x86_64\eclipse-escet-v5.0\workspace\CIFBenchmarks-5.0.0.v20241003-060816\sudoku\sudoku.cif"/>
        </type>
        <left xmi:type="expressions:BinaryExpression" xmi:id="171">
          <position xmi:type="position:Position" xmi:id="172" source="File &quot;C:\Users\rober\Downloads\eclipse-escet-v5.0-win32.win32.x86_64\eclipse-escet-v5.0\workspace\CIFBenchmarks-5.0.0.v20241003-060816\sudoku\sudoku.cif&quot;: " startLine="67" endOffset="1822" startColumn="49" endLine="67" endColumn="50" startOffset="1821" location="C:\Users\rober\Downloads\eclipse-escet-v5.0-win32.win32.x86_64\eclipse-escet-v5.0\workspace\CIFBenchmarks-5.0.0.v20241003-060816\sudoku\sudoku.cif"/>
          <type xmi:type="types:BoolType" xmi:id="173">
            <position xmi:type="position:Position" xmi:id="174" source="File &quot;C:\Users\rober\Downloads\eclipse-escet-v5.0-win32.win32.x86_64\eclipse-escet-v5.0\workspace\CIFBenchmarks-5.0.0.v20241003-060816\sudoku\sudoku.cif&quot;: " startLine="67" endOffset="1822" startColumn="49" endLine="67" endColumn="50" startOffset="1821" location="C:\Users\rober\Downloads\eclipse-escet-v5.0-win32.win32.x86_64\eclipse-escet-v5.0\workspace\CIFBenchmarks-5.0.0.v20241003-060816\sudoku\sudoku.cif"/>
          </type>
          <left xmi:type="expressions:BinaryExpression" xmi:id="175">
            <position xmi:type="position:Position" xmi:id="176" source="File &quot;C:\Users\rober\Downloads\eclipse-escet-v5.0-win32.win32.x86_64\eclipse-escet-v5.0\workspace\CIFBenchmarks-5.0.0.v20241003-060816\sudoku\sudoku.cif&quot;: " startLine="67" endOffset="1801" startColumn="28" endLine="67" endColumn="29" startOffset="1800" location="C:\Users\rober\Downloads\eclipse-escet-v5.0-win32.win32.x86_64\eclipse-escet-v5.0\workspace\CIFBenchmarks-5.0.0.v20241003-060816\sudoku\sudoku.cif"/>
            <type xmi:type="types:BoolType" xmi:id="177">
              <position xmi:type="position:Position" xmi:id="178" source="File &quot;C:\Users\rober\Downloads\eclipse-escet-v5.0-win32.win32.x86_64\eclipse-escet-v5.0\workspace\CIFBenchmarks-5.0.0.v20241003-060816\sudoku\sudoku.cif&quot;: " startLine="67" endOffset="1801" startColumn="28" endLine="67" endColumn="29" startOffset="1800" location="C:\Users\rober\Downloads\eclipse-escet-v5.0-win32.win32.x86_64\eclipse-escet-v5.0\workspace\CIFBenchmarks-5.0.0.v20241003-060816\sudoku\sudoku.cif"/>
            </type>
            <left xmi:type="expressions:BinaryExpression" xmi:id="179" operator="Equal">
              <position xmi:type="position:Position" xmi:id="180" source="File &quot;C:\Users\rober\Downloads\eclipse-escet-v5.0-win32.win32.x86_64\eclipse-escet-v5.0\workspace\CIFBenchmarks-5.0.0.v20241003-060816\sudoku\sudoku.cif&quot;: " startLine="67" endOffset="1792" startColumn="20" endLine="67" endColumn="20" startOffset="1792" location="C:\Users\rober\Downloads\eclipse-escet-v5.0-win32.win32.x86_64\eclipse-escet-v5.0\workspace\CIFBenchmarks-5.0.0.v20241003-060816\sudoku\sudoku.cif"/>
              <type xmi:type="types:BoolType" xmi:id="181">
                <position xmi:type="position:Position" xmi:id="182" source="File &quot;C:\Users\rober\Downloads\eclipse-escet-v5.0-win32.win32.x86_64\eclipse-escet-v5.0\workspace\CIFBenchmarks-5.0.0.v20241003-060816\sudoku\sudoku.cif&quot;: " startLine="67" endOffset="1792" startColumn="20" endLine="67" endColumn="20" startOffset="1792" location="C:\Users\rober\Downloads\eclipse-escet-v5.0-win32.win32.x86_64\eclipse-escet-v5.0\workspace\CIFBenchmarks-5.0.0.v20241003-060816\sudoku\sudoku.cif"/>
              </type>
              <left xmi:type="expressions:CompInstWrapExpression" xmi:id="183" instantiation="1085">
                <position xmi:type="position:Position" xmi:id="184" source="File &quot;C:\Users\rober\Downloads\eclipse-escet-v5.0-win32.win32.x86_64\eclipse-escet-v5.0\workspace\CIFBenchmarks-5.0.0.v20241003-060816\sudoku\sudoku.cif&quot;: " startLine="67" endOffset="1790" startColumn="10" endLine="67" endColumn="18" startOffset="1782" location="C:\Users\rober\Downloads\eclipse-escet-v5.0-win32.win32.x86_64\eclipse-escet-v5.0\workspace\CIFBenchmarks-5.0.0.v20241003-060816\sudoku\sudoku.cif"/>
                <type xmi:type="types:IntType" xmi:id="185" lower="0" upper="4">
                  <position xmi:type="position:Position" xmi:id="186" source="File &quot;C:\Users\rober\Downloads\eclipse-escet-v5.0-win32.win32.x86_64\eclipse-escet-v5.0\workspace\CIFBenchmarks-5.0.0.v20241003-060816\sudoku\sudoku.cif&quot;: " startLine="67" endOffset="1790" startColumn="10" endLine="67" endColumn="18" startOffset="1782" location="C:\Users\rober\Downloads\eclipse-escet-v5.0-win32.win32.x86_64\eclipse-escet-v5.0\workspace\CIFBenchmarks-5.0.0.v20241003-060816\sudoku\sudoku.cif"/>
                </type>
                <reference xmi:type="expressions:DiscVariableExpression" xmi:id="187" variable="15">
                  <position xmi:type="position:Position" xmi:id="188" source="File &quot;C:\Users\rober\Downloads\eclipse-escet-v5.0-win32.win32.x86_64\eclipse-escet-v5.0\workspace\CIFBenchmarks-5.0.0.v20241003-060816\sudoku\sudoku.cif&quot;: " startLine="67" endOffset="1790" startColumn="10" endLine="67" endColumn="18" startOffset="1782" location="C:\Users\rober\Downloads\eclipse-escet-v5.0-win32.win32.x86_64\eclipse-escet-v5.0\workspace\CIFBenchmarks-5.0.0.v20241003-060816\sudoku\sudoku.cif"/>
                  <type xmi:type="types:IntType" xmi:id="189" lower="0" upper="4">
                    <position xmi:type="position:Position" xmi:id="190" source="File &quot;C:\Users\rober\Downloads\eclipse-escet-v5.0-win32.win32.x86_64\eclipse-escet-v5.0\workspace\CIFBenchmarks-5.0.0.v20241003-060816\sudoku\sudoku.cif&quot;: " startLine="67" endOffset="1790" startColumn="10" endLine="67" endColumn="18" startOffset="1782" location="C:\Users\rober\Downloads\eclipse-escet-v5.0-win32.win32.x86_64\eclipse-escet-v5.0\workspace\CIFBenchmarks-5.0.0.v20241003-060816\sudoku\sudoku.cif"/>
                  </type>
                </reference>
              </left>
              <right xmi:type="expressions:AlgVariableExpression" xmi:id="191" variable="1081">
                <position xmi:type="position:Position" xmi:id="192" source="File &quot;C:\Users\rober\Downloads\eclipse-escet-v5.0-win32.win32.x86_64\eclipse-escet-v5.0\workspace\CIFBenchmarks-5.0.0.v20241003-060816\sudoku\sudoku.cif&quot;: " startLine="67" endOffset="1798" startColumn="22" endLine="67" endColumn="26" startOffset="1794" location="C:\Users\rober\Downloads\eclipse-escet-v5.0-win32.win32.x86_64\eclipse-escet-v5.0\workspace\CIFBenchmarks-5.0.0.v20241003-060816\sudoku\sudoku.cif"/>
                <type xmi:type="types:IntType" xmi:id="193">
                  <position xmi:type="position:Position" xmi:id="194" source="File &quot;C:\Users\rober\Downloads\eclipse-escet-v5.0-win32.win32.x86_64\eclipse-escet-v5.0\workspace\CIFBenchmarks-5.0.0.v20241003-060816\sudoku\sudoku.cif&quot;: " startLine="67" endOffset="1798" startColumn="22" endLine="67" endColumn="26" startOffset="1794" location="C:\Users\rober\Downloads\eclipse-escet-v5.0-win32.win32.x86_64\eclipse-escet-v5.0\workspace\CIFBenchmarks-5.0.0.v20241003-060816\sudoku\sudoku.cif"/>
                </type>
              </right>
            </left>
            <right xmi:type="expressions:BinaryExpression" xmi:id="195" operator="Equal">
              <position xmi:type="position:Position" xmi:id="196" source="File &quot;C:\Users\rober\Downloads\eclipse-escet-v5.0-win32.win32.x86_64\eclipse-escet-v5.0\workspace\CIFBenchmarks-5.0.0.v20241003-060816\sudoku\sudoku.cif&quot;: " startLine="67" endOffset="1813" startColumn="41" endLine="67" endColumn="41" startOffset="1813" location="C:\Users\rober\Downloads\eclipse-escet-v5.0-win32.win32.x86_64\eclipse-escet-v5.0\workspace\CIFBenchmarks-5.0.0.v20241003-060816\sudoku\sudoku.cif"/>
              <type xmi:type="types:BoolType" xmi:id="197">
                <position xmi:type="position:Position" xmi:id="198" source="File &quot;C:\Users\rober\Downloads\eclipse-escet-v5.0-win32.win32.x86_64\eclipse-escet-v5.0\workspace\CIFBenchmarks-5.0.0.v20241003-060816\sudoku\sudoku.cif&quot;: " startLine="67" endOffset="1813" startColumn="41" endLine="67" endColumn="41" startOffset="1813" location="C:\Users\rober\Downloads\eclipse-escet-v5.0-win32.win32.x86_64\eclipse-escet-v5.0\workspace\CIFBenchmarks-5.0.0.v20241003-060816\sudoku\sudoku.cif"/>
              </type>
              <left xmi:type="expressions:CompInstWrapExpression" xmi:id="199" instantiation="1089">
                <position xmi:type="position:Position" xmi:id="200" source="File &quot;C:\Users\rober\Downloads\eclipse-escet-v5.0-win32.win32.x86_64\eclipse-escet-v5.0\workspace\CIFBenchmarks-5.0.0.v20241003-060816\sudoku\sudoku.cif&quot;: " startLine="67" endOffset="1811" startColumn="31" endLine="67" endColumn="39" startOffset="1803" location="C:\Users\rober\Downloads\eclipse-escet-v5.0-win32.win32.x86_64\eclipse-escet-v5.0\workspace\CIFBenchmarks-5.0.0.v20241003-060816\sudoku\sudoku.cif"/>
                <type xmi:type="types:IntType" xmi:id="201" lower="0" upper="4">
                  <position xmi:type="position:Position" xmi:id="202" source="File &quot;C:\Users\rober\Downloads\eclipse-escet-v5.0-win32.win32.x86_64\eclipse-escet-v5.0\workspace\CIFBenchmarks-5.0.0.v20241003-060816\sudoku\sudoku.cif&quot;: " startLine="67" endOffset="1811" startColumn="31" endLine="67" endColumn="39" startOffset="1803" location="C:\Users\rober\Downloads\eclipse-escet-v5.0-win32.win32.x86_64\eclipse-escet-v5.0\workspace\CIFBenchmarks-5.0.0.v20241003-060816\sudoku\sudoku.cif"/>
                </type>
                <reference xmi:type="expressions:DiscVariableExpression" xmi:id="203" variable="15">
                  <position xmi:type="position:Position" xmi:id="204" source="File &quot;C:\Users\rober\Downloads\eclipse-escet-v5.0-win32.win32.x86_64\eclipse-escet-v5.0\workspace\CIFBenchmarks-5.0.0.v20241003-060816\sudoku\sudoku.cif&quot;: " startLine="67" endOffset="1811" startColumn="31" endLine="67" endColumn="39" startOffset="1803" location="C:\Users\rober\Downloads\eclipse-escet-v5.0-win32.win32.x86_64\eclipse-escet-v5.0\workspace\CIFBenchmarks-5.0.0.v20241003-060816\sudoku\sudoku.cif"/>
                  <type xmi:type="types:IntType" xmi:id="205" lower="0" upper="4">
                    <position xmi:type="position:Position" xmi:id="206" source="File &quot;C:\Users\rober\Downloads\eclipse-escet-v5.0-win32.win32.x86_64\eclipse-escet-v5.0\workspace\CIFBenchmarks-5.0.0.v20241003-060816\sudoku\sudoku.cif&quot;: " startLine="67" endOffset="1811" startColumn="31" endLine="67" endColumn="39" startOffset="1803" location="C:\Users\rober\Downloads\eclipse-escet-v5.0-win32.win32.x86_64\eclipse-escet-v5.0\workspace\CIFBenchmarks-5.0.0.v20241003-060816\sudoku\sudoku.cif"/>
                  </type>
                </reference>
              </left>
              <right xmi:type="expressions:AlgVariableExpression" xmi:id="207" variable="1081">
                <position xmi:type="position:Position" xmi:id="208" source="File &quot;C:\Users\rober\Downloads\eclipse-escet-v5.0-win32.win32.x86_64\eclipse-escet-v5.0\workspace\CIFBenchmarks-5.0.0.v20241003-060816\sudoku\sudoku.cif&quot;: " startLine="67" endOffset="1819" startColumn="43" endLine="67" endColumn="47" startOffset="1815" location="C:\Users\rober\Downloads\eclipse-escet-v5.0-win32.win32.x86_64\eclipse-escet-v5.0\workspace\CIFBenchmarks-5.0.0.v20241003-060816\sudoku\sudoku.cif"/>
                <type xmi:type="types:IntType" xmi:id="209">
                  <position xmi:type="position:Position" xmi:id="210" source="File &quot;C:\Users\rober\Downloads\eclipse-escet-v5.0-win32.win32.x86_64\eclipse-escet-v5.0\workspace\CIFBenchmarks-5.0.0.v20241003-060816\sudoku\sudoku.cif&quot;: " startLine="67" endOffset="1819" startColumn="43" endLine="67" endColumn="47" startOffset="1815" location="C:\Users\rober\Downloads\eclipse-escet-v5.0-win32.win32.x86_64\eclipse-escet-v5.0\workspace\CIFBenchmarks-5.0.0.v20241003-060816\sudoku\sudoku.cif"/>
                </type>
              </right>
            </right>
          </left>
          <right xmi:type="expressions:BinaryExpression" xmi:id="211" operator="Equal">
            <position xmi:type="position:Position" xmi:id="212" source="File &quot;C:\Users\rober\Downloads\eclipse-escet-v5.0-win32.win32.x86_64\eclipse-escet-v5.0\workspace\CIFBenchmarks-5.0.0.v20241003-060816\sudoku\sudoku.cif&quot;: " startLine="67" endOffset="1834" startColumn="62" endLine="67" endColumn="62" startOffset="1834" location="C:\Users\rober\Downloads\eclipse-escet-v5.0-win32.win32.x86_64\eclipse-escet-v5.0\workspace\CIFBenchmarks-5.0.0.v20241003-060816\sudoku\sudoku.cif"/>
            <type xmi:type="types:BoolType" xmi:id="213">
              <position xmi:type="position:Position" xmi:id="214" source="File &quot;C:\Users\rober\Downloads\eclipse-escet-v5.0-win32.win32.x86_64\eclipse-escet-v5.0\workspace\CIFBenchmarks-5.0.0.v20241003-060816\sudoku\sudoku.cif&quot;: " startLine="67" endOffset="1834" startColumn="62" endLine="67" endColumn="62" startOffset="1834" location="C:\Users\rober\Downloads\eclipse-escet-v5.0-win32.win32.x86_64\eclipse-escet-v5.0\workspace\CIFBenchmarks-5.0.0.v20241003-060816\sudoku\sudoku.cif"/>
            </type>
            <left xmi:type="expressions:CompInstWrapExpression" xmi:id="215" instantiation="1093">
              <position xmi:type="position:Position" xmi:id="216" source="File &quot;C:\Users\rober\Downloads\eclipse-escet-v5.0-win32.win32.x86_64\eclipse-escet-v5.0\workspace\CIFBenchmarks-5.0.0.v20241003-060816\sudoku\sudoku.cif&quot;: " startLine="67" endOffset="1832" startColumn="52" endLine="67" endColumn="60" startOffset="1824" location="C:\Users\rober\Downloads\eclipse-escet-v5.0-win32.win32.x86_64\eclipse-escet-v5.0\workspace\CIFBenchmarks-5.0.0.v20241003-060816\sudoku\sudoku.cif"/>
              <type xmi:type="types:IntType" xmi:id="217" lower="0" upper="4">
                <position xmi:type="position:Position" xmi:id="218" source="File &quot;C:\Users\rober\Downloads\eclipse-escet-v5.0-win32.win32.x86_64\eclipse-escet-v5.0\workspace\CIFBenchmarks-5.0.0.v20241003-060816\sudoku\sudoku.cif&quot;: " startLine="67" endOffset="1832" startColumn="52" endLine="67" endColumn="60" startOffset="1824" location="C:\Users\rober\Downloads\eclipse-escet-v5.0-win32.win32.x86_64\eclipse-escet-v5.0\workspace\CIFBenchmarks-5.0.0.v20241003-060816\sudoku\sudoku.cif"/>
              </type>
              <reference xmi:type="expressions:DiscVariableExpression" xmi:id="219" variable="15">
                <position xmi:type="position:Position" xmi:id="220" source="File &quot;C:\Users\rober\Downloads\eclipse-escet-v5.0-win32.win32.x86_64\eclipse-escet-v5.0\workspace\CIFBenchmarks-5.0.0.v20241003-060816\sudoku\sudoku.cif&quot;: " startLine="67" endOffset="1832" startColumn="52" endLine="67" endColumn="60" startOffset="1824" location="C:\Users\rober\Downloads\eclipse-escet-v5.0-win32.win32.x86_64\eclipse-escet-v5.0\workspace\CIFBenchmarks-5.0.0.v20241003-060816\sudoku\sudoku.cif"/>
                <type xmi:type="types:IntType" xmi:id="221" lower="0" upper="4">
                  <position xmi:type="position:Position" xmi:id="222" source="File &quot;C:\Users\rober\Downloads\eclipse-escet-v5.0-win32.win32.x86_64\eclipse-escet-v5.0\workspace\CIFBenchmarks-5.0.0.v20241003-060816\sudoku\sudoku.cif&quot;: " startLine="67" endOffset="1832" startColumn="52" endLine="67" endColumn="60" startOffset="1824" location="C:\Users\rober\Downloads\eclipse-escet-v5.0-win32.win32.x86_64\eclipse-escet-v5.0\workspace\CIFBenchmarks-5.0.0.v20241003-060816\sudoku\sudoku.cif"/>
                </type>
              </reference>
            </left>
            <right xmi:type="expressions:AlgVariableExpression" xmi:id="223" variable="1081">
              <position xmi:type="position:Position" xmi:id="224" source="File &quot;C:\Users\rober\Downloads\eclipse-escet-v5.0-win32.win32.x86_64\eclipse-escet-v5.0\workspace\CIFBenchmarks-5.0.0.v20241003-060816\sudoku\sudoku.cif&quot;: " startLine="67" endOffset="1840" startColumn="64" endLine="67" endColumn="68" startOffset="1836" location="C:\Users\rober\Downloads\eclipse-escet-v5.0-win32.win32.x86_64\eclipse-escet-v5.0\workspace\CIFBenchmarks-5.0.0.v20241003-060816\sudoku\sudoku.cif"/>
              <type xmi:type="types:IntType" xmi:id="225">
                <position xmi:type="position:Position" xmi:id="226" source="File &quot;C:\Users\rober\Downloads\eclipse-escet-v5.0-win32.win32.x86_64\eclipse-escet-v5.0\workspace\CIFBenchmarks-5.0.0.v20241003-060816\sudoku\sudoku.cif&quot;: " startLine="67" endOffset="1840" startColumn="64" endLine="67" endColumn="68" startOffset="1836" location="C:\Users\rober\Downloads\eclipse-escet-v5.0-win32.win32.x86_64\eclipse-escet-v5.0\workspace\CIFBenchmarks-5.0.0.v20241003-060816\sudoku\sudoku.cif"/>
              </type>
            </right>
          </right>
        </left>
        <right xmi:type="expressions:BinaryExpression" xmi:id="227" operator="Equal">
          <position xmi:type="position:Position" xmi:id="228" source="File &quot;C:\Users\rober\Downloads\eclipse-escet-v5.0-win32.win32.x86_64\eclipse-escet-v5.0\workspace\CIFBenchmarks-5.0.0.v20241003-060816\sudoku\sudoku.cif&quot;: " startLine="67" endOffset="1855" startColumn="83" endLine="67" endColumn="83" startOffset="1855" location="C:\Users\rober\Downloads\eclipse-escet-v5.0-win32.win32.x86_64\eclipse-escet-v5.0\workspace\CIFBenchmarks-5.0.0.v20241003-060816\sudoku\sudoku.cif"/>
          <type xmi:type="types:BoolType" xmi:id="229">
            <position xmi:type="position:Position" xmi:id="230" source="File &quot;C:\Users\rober\Downloads\eclipse-escet-v5.0-win32.win32.x86_64\eclipse-escet-v5.0\workspace\CIFBenchmarks-5.0.0.v20241003-060816\sudoku\sudoku.cif&quot;: " startLine="67" endOffset="1855" startColumn="83" endLine="67" endColumn="83" startOffset="1855" location="C:\Users\rober\Downloads\eclipse-escet-v5.0-win32.win32.x86_64\eclipse-escet-v5.0\workspace\CIFBenchmarks-5.0.0.v20241003-060816\sudoku\sudoku.cif"/>
          </type>
          <left xmi:type="expressions:CompInstWrapExpression" xmi:id="231" instantiation="1097">
            <position xmi:type="position:Position" xmi:id="232" source="File &quot;C:\Users\rober\Downloads\eclipse-escet-v5.0-win32.win32.x86_64\eclipse-escet-v5.0\workspace\CIFBenchmarks-5.0.0.v20241003-060816\sudoku\sudoku.cif&quot;: " startLine="67" endOffset="1853" startColumn="73" endLine="67" endColumn="81" startOffset="1845" location="C:\Users\rober\Downloads\eclipse-escet-v5.0-win32.win32.x86_64\eclipse-escet-v5.0\workspace\CIFBenchmarks-5.0.0.v20241003-060816\sudoku\sudoku.cif"/>
            <type xmi:type="types:IntType" xmi:id="233" lower="0" upper="4">
              <position xmi:type="position:Position" xmi:id="234" source="File &quot;C:\Users\rober\Downloads\eclipse-escet-v5.0-win32.win32.x86_64\eclipse-escet-v5.0\workspace\CIFBenchmarks-5.0.0.v20241003-060816\sudoku\sudoku.cif&quot;: " startLine="67" endOffset="1853" startColumn="73" endLine="67" endColumn="81" startOffset="1845" location="C:\Users\rober\Downloads\eclipse-escet-v5.0-win32.win32.x86_64\eclipse-escet-v5.0\workspace\CIFBenchmarks-5.0.0.v20241003-060816\sudoku\sudoku.cif"/>
            </type>
            <reference xmi:type="expressions:DiscVariableExpression" xmi:id="235" variable="15">
              <position xmi:type="position:Position" xmi:id="236" source="File &quot;C:\Users\rober\Downloads\eclipse-escet-v5.0-win32.win32.x86_64\eclipse-escet-v5.0\workspace\CIFBenchmarks-5.0.0.v20241003-060816\sudoku\sudoku.cif&quot;: " startLine="67" endOffset="1853" startColumn="73" endLine="67" endColumn="81" startOffset="1845" location="C:\Users\rober\Downloads\eclipse-escet-v5.0-win32.win32.x86_64\eclipse-escet-v5.0\workspace\CIFBenchmarks-5.0.0.v20241003-060816\sudoku\sudoku.cif"/>
              <type xmi:type="types:IntType" xmi:id="237" lower="0" upper="4">
                <position xmi:type="position:Position" xmi:id="238" source="File &quot;C:\Users\rober\Downloads\eclipse-escet-v5.0-win32.win32.x86_64\eclipse-escet-v5.0\workspace\CIFBenchmarks-5.0.0.v20241003-060816\sudoku\sudoku.cif&quot;: " startLine="67" endOffset="1853" startColumn="73" endLine="67" endColumn="81" startOffset="1845" location="C:\Users\rober\Downloads\eclipse-escet-v5.0-win32.win32.x86_64\eclipse-escet-v5.0\workspace\CIFBenchmarks-5.0.0.v20241003-060816\sudoku\sudoku.cif"/>
              </type>
            </reference>
          </left>
          <right xmi:type="expressions:AlgVariableExpression" xmi:id="239" variable="1081">
            <position xmi:type="position:Position" xmi:id="240" source="File &quot;C:\Users\rober\Downloads\eclipse-escet-v5.0-win32.win32.x86_64\eclipse-escet-v5.0\workspace\CIFBenchmarks-5.0.0.v20241003-060816\sudoku\sudoku.cif&quot;: " startLine="67" endOffset="1861" startColumn="85" endLine="67" endColumn="89" startOffset="1857" location="C:\Users\rober\Downloads\eclipse-escet-v5.0-win32.win32.x86_64\eclipse-escet-v5.0\workspace\CIFBenchmarks-5.0.0.v20241003-060816\sudoku\sudoku.cif"/>
            <type xmi:type="types:IntType" xmi:id="241">
              <position xmi:type="position:Position" xmi:id="242" source="File &quot;C:\Users\rober\Downloads\eclipse-escet-v5.0-win32.win32.x86_64\eclipse-escet-v5.0\workspace\CIFBenchmarks-5.0.0.v20241003-060816\sudoku\sudoku.cif&quot;: " startLine="67" endOffset="1861" startColumn="85" endLine="67" endColumn="89" startOffset="1857" location="C:\Users\rober\Downloads\eclipse-escet-v5.0-win32.win32.x86_64\eclipse-escet-v5.0\workspace\CIFBenchmarks-5.0.0.v20241003-060816\sudoku\sudoku.cif"/>
            </type>
          </right>
        </right>
      </markeds>
      <markeds xmi:type="expressions:BinaryExpression" xmi:id="243">
        <position xmi:type="position:Position" xmi:id="244" source="File &quot;C:\Users\rober\Downloads\eclipse-escet-v5.0-win32.win32.x86_64\eclipse-escet-v5.0\workspace\CIFBenchmarks-5.0.0.v20241003-060816\sudoku\sudoku.cif&quot;: " startLine="68" endOffset="1934" startColumn="70" endLine="68" endColumn="71" startOffset="1933" location="C:\Users\rober\Downloads\eclipse-escet-v5.0-win32.win32.x86_64\eclipse-escet-v5.0\workspace\CIFBenchmarks-5.0.0.v20241003-060816\sudoku\sudoku.cif"/>
        <type xmi:type="types:BoolType" xmi:id="245">
          <position xmi:type="position:Position" xmi:id="246" source="File &quot;C:\Users\rober\Downloads\eclipse-escet-v5.0-win32.win32.x86_64\eclipse-escet-v5.0\workspace\CIFBenchmarks-5.0.0.v20241003-060816\sudoku\sudoku.cif&quot;: " startLine="68" endOffset="1934" startColumn="70" endLine="68" endColumn="71" startOffset="1933" location="C:\Users\rober\Downloads\eclipse-escet-v5.0-win32.win32.x86_64\eclipse-escet-v5.0\workspace\CIFBenchmarks-5.0.0.v20241003-060816\sudoku\sudoku.cif"/>
        </type>
        <left xmi:type="expressions:BinaryExpression" xmi:id="247">
          <position xmi:type="position:Position" xmi:id="248" source="File &quot;C:\Users\rober\Downloads\eclipse-escet-v5.0-win32.win32.x86_64\eclipse-escet-v5.0\workspace\CIFBenchmarks-5.0.0.v20241003-060816\sudoku\sudoku.cif&quot;: " startLine="68" endOffset="1913" startColumn="49" endLine="68" endColumn="50" startOffset="1912" location="C:\Users\rober\Downloads\eclipse-escet-v5.0-win32.win32.x86_64\eclipse-escet-v5.0\workspace\CIFBenchmarks-5.0.0.v20241003-060816\sudoku\sudoku.cif"/>
          <type xmi:type="types:BoolType" xmi:id="249">
            <position xmi:type="position:Position" xmi:id="250" source="File &quot;C:\Users\rober\Downloads\eclipse-escet-v5.0-win32.win32.x86_64\eclipse-escet-v5.0\workspace\CIFBenchmarks-5.0.0.v20241003-060816\sudoku\sudoku.cif&quot;: " startLine="68" endOffset="1913" startColumn="49" endLine="68" endColumn="50" startOffset="1912" location="C:\Users\rober\Downloads\eclipse-escet-v5.0-win32.win32.x86_64\eclipse-escet-v5.0\workspace\CIFBenchmarks-5.0.0.v20241003-060816\sudoku\sudoku.cif"/>
          </type>
          <left xmi:type="expressions:BinaryExpression" xmi:id="251">
            <position xmi:type="position:Position" xmi:id="252" source="File &quot;C:\Users\rober\Downloads\eclipse-escet-v5.0-win32.win32.x86_64\eclipse-escet-v5.0\workspace\CIFBenchmarks-5.0.0.v20241003-060816\sudoku\sudoku.cif&quot;: " startLine="68" endOffset="1892" startColumn="28" endLine="68" endColumn="29" startOffset="1891" location="C:\Users\rober\Downloads\eclipse-escet-v5.0-win32.win32.x86_64\eclipse-escet-v5.0\workspace\CIFBenchmarks-5.0.0.v20241003-060816\sudoku\sudoku.cif"/>
            <type xmi:type="types:BoolType" xmi:id="253">
              <position xmi:type="position:Position" xmi:id="254" source="File &quot;C:\Users\rober\Downloads\eclipse-escet-v5.0-win32.win32.x86_64\eclipse-escet-v5.0\workspace\CIFBenchmarks-5.0.0.v20241003-060816\sudoku\sudoku.cif&quot;: " startLine="68" endOffset="1892" startColumn="28" endLine="68" endColumn="29" startOffset="1891" location="C:\Users\rober\Downloads\eclipse-escet-v5.0-win32.win32.x86_64\eclipse-escet-v5.0\workspace\CIFBenchmarks-5.0.0.v20241003-060816\sudoku\sudoku.cif"/>
            </type>
            <left xmi:type="expressions:BinaryExpression" xmi:id="255" operator="Equal">
              <position xmi:type="position:Position" xmi:id="256" source="File &quot;C:\Users\rober\Downloads\eclipse-escet-v5.0-win32.win32.x86_64\eclipse-escet-v5.0\workspace\CIFBenchmarks-5.0.0.v20241003-060816\sudoku\sudoku.cif&quot;: " startLine="68" endOffset="1883" startColumn="20" endLine="68" endColumn="20" startOffset="1883" location="C:\Users\rober\Downloads\eclipse-escet-v5.0-win32.win32.x86_64\eclipse-escet-v5.0\workspace\CIFBenchmarks-5.0.0.v20241003-060816\sudoku\sudoku.cif"/>
              <type xmi:type="types:BoolType" xmi:id="257">
                <position xmi:type="position:Position" xmi:id="258" source="File &quot;C:\Users\rober\Downloads\eclipse-escet-v5.0-win32.win32.x86_64\eclipse-escet-v5.0\workspace\CIFBenchmarks-5.0.0.v20241003-060816\sudoku\sudoku.cif&quot;: " startLine="68" endOffset="1883" startColumn="20" endLine="68" endColumn="20" startOffset="1883" location="C:\Users\rober\Downloads\eclipse-escet-v5.0-win32.win32.x86_64\eclipse-escet-v5.0\workspace\CIFBenchmarks-5.0.0.v20241003-060816\sudoku\sudoku.cif"/>
              </type>
              <left xmi:type="expressions:CompInstWrapExpression" xmi:id="259" instantiation="1101">
                <position xmi:type="position:Position" xmi:id="260" source="File &quot;C:\Users\rober\Downloads\eclipse-escet-v5.0-win32.win32.x86_64\eclipse-escet-v5.0\workspace\CIFBenchmarks-5.0.0.v20241003-060816\sudoku\sudoku.cif&quot;: " startLine="68" endOffset="1881" startColumn="10" endLine="68" endColumn="18" startOffset="1873" location="C:\Users\rober\Downloads\eclipse-escet-v5.0-win32.win32.x86_64\eclipse-escet-v5.0\workspace\CIFBenchmarks-5.0.0.v20241003-060816\sudoku\sudoku.cif"/>
                <type xmi:type="types:IntType" xmi:id="261" lower="0" upper="4">
                  <position xmi:type="position:Position" xmi:id="262" source="File &quot;C:\Users\rober\Downloads\eclipse-escet-v5.0-win32.win32.x86_64\eclipse-escet-v5.0\workspace\CIFBenchmarks-5.0.0.v20241003-060816\sudoku\sudoku.cif&quot;: " startLine="68" endOffset="1881" startColumn="10" endLine="68" endColumn="18" startOffset="1873" location="C:\Users\rober\Downloads\eclipse-escet-v5.0-win32.win32.x86_64\eclipse-escet-v5.0\workspace\CIFBenchmarks-5.0.0.v20241003-060816\sudoku\sudoku.cif"/>
                </type>
                <reference xmi:type="expressions:DiscVariableExpression" xmi:id="263" variable="15">
                  <position xmi:type="position:Position" xmi:id="264" source="File &quot;C:\Users\rober\Downloads\eclipse-escet-v5.0-win32.win32.x86_64\eclipse-escet-v5.0\workspace\CIFBenchmarks-5.0.0.v20241003-060816\sudoku\sudoku.cif&quot;: " startLine="68" endOffset="1881" startColumn="10" endLine="68" endColumn="18" startOffset="1873" location="C:\Users\rober\Downloads\eclipse-escet-v5.0-win32.win32.x86_64\eclipse-escet-v5.0\workspace\CIFBenchmarks-5.0.0.v20241003-060816\sudoku\sudoku.cif"/>
                  <type xmi:type="types:IntType" xmi:id="265" lower="0" upper="4">
                    <position xmi:type="position:Position" xmi:id="266" source="File &quot;C:\Users\rober\Downloads\eclipse-escet-v5.0-win32.win32.x86_64\eclipse-escet-v5.0\workspace\CIFBenchmarks-5.0.0.v20241003-060816\sudoku\sudoku.cif&quot;: " startLine="68" endOffset="1881" startColumn="10" endLine="68" endColumn="18" startOffset="1873" location="C:\Users\rober\Downloads\eclipse-escet-v5.0-win32.win32.x86_64\eclipse-escet-v5.0\workspace\CIFBenchmarks-5.0.0.v20241003-060816\sudoku\sudoku.cif"/>
                  </type>
                </reference>
              </left>
              <right xmi:type="expressions:AlgVariableExpression" xmi:id="267" variable="1081">
                <position xmi:type="position:Position" xmi:id="268" source="File &quot;C:\Users\rober\Downloads\eclipse-escet-v5.0-win32.win32.x86_64\eclipse-escet-v5.0\workspace\CIFBenchmarks-5.0.0.v20241003-060816\sudoku\sudoku.cif&quot;: " startLine="68" endOffset="1889" startColumn="22" endLine="68" endColumn="26" startOffset="1885" location="C:\Users\rober\Downloads\eclipse-escet-v5.0-win32.win32.x86_64\eclipse-escet-v5.0\workspace\CIFBenchmarks-5.0.0.v20241003-060816\sudoku\sudoku.cif"/>
                <type xmi:type="types:IntType" xmi:id="269">
                  <position xmi:type="position:Position" xmi:id="270" source="File &quot;C:\Users\rober\Downloads\eclipse-escet-v5.0-win32.win32.x86_64\eclipse-escet-v5.0\workspace\CIFBenchmarks-5.0.0.v20241003-060816\sudoku\sudoku.cif&quot;: " startLine="68" endOffset="1889" startColumn="22" endLine="68" endColumn="26" startOffset="1885" location="C:\Users\rober\Downloads\eclipse-escet-v5.0-win32.win32.x86_64\eclipse-escet-v5.0\workspace\CIFBenchmarks-5.0.0.v20241003-060816\sudoku\sudoku.cif"/>
                </type>
              </right>
            </left>
            <right xmi:type="expressions:BinaryExpression" xmi:id="271" operator="Equal">
              <position xmi:type="position:Position" xmi:id="272" source="File &quot;C:\Users\rober\Downloads\eclipse-escet-v5.0-win32.win32.x86_64\eclipse-escet-v5.0\workspace\CIFBenchmarks-5.0.0.v20241003-060816\sudoku\sudoku.cif&quot;: " startLine="68" endOffset="1904" startColumn="41" endLine="68" endColumn="41" startOffset="1904" location="C:\Users\rober\Downloads\eclipse-escet-v5.0-win32.win32.x86_64\eclipse-escet-v5.0\workspace\CIFBenchmarks-5.0.0.v20241003-060816\sudoku\sudoku.cif"/>
              <type xmi:type="types:BoolType" xmi:id="273">
                <position xmi:type="position:Position" xmi:id="274" source="File &quot;C:\Users\rober\Downloads\eclipse-escet-v5.0-win32.win32.x86_64\eclipse-escet-v5.0\workspace\CIFBenchmarks-5.0.0.v20241003-060816\sudoku\sudoku.cif&quot;: " startLine="68" endOffset="1904" startColumn="41" endLine="68" endColumn="41" startOffset="1904" location="C:\Users\rober\Downloads\eclipse-escet-v5.0-win32.win32.x86_64\eclipse-escet-v5.0\workspace\CIFBenchmarks-5.0.0.v20241003-060816\sudoku\sudoku.cif"/>
              </type>
              <left xmi:type="expressions:CompInstWrapExpression" xmi:id="275" instantiation="1105">
                <position xmi:type="position:Position" xmi:id="276" source="File &quot;C:\Users\rober\Downloads\eclipse-escet-v5.0-win32.win32.x86_64\eclipse-escet-v5.0\workspace\CIFBenchmarks-5.0.0.v20241003-060816\sudoku\sudoku.cif&quot;: " startLine="68" endOffset="1902" startColumn="31" endLine="68" endColumn="39" startOffset="1894" location="C:\Users\rober\Downloads\eclipse-escet-v5.0-win32.win32.x86_64\eclipse-escet-v5.0\workspace\CIFBenchmarks-5.0.0.v20241003-060816\sudoku\sudoku.cif"/>
                <type xmi:type="types:IntType" xmi:id="277" lower="0" upper="4">
                  <position xmi:type="position:Position" xmi:id="278" source="File &quot;C:\Users\rober\Downloads\eclipse-escet-v5.0-win32.win32.x86_64\eclipse-escet-v5.0\workspace\CIFBenchmarks-5.0.0.v20241003-060816\sudoku\sudoku.cif&quot;: " startLine="68" endOffset="1902" startColumn="31" endLine="68" endColumn="39" startOffset="1894" location="C:\Users\rober\Downloads\eclipse-escet-v5.0-win32.win32.x86_64\eclipse-escet-v5.0\workspace\CIFBenchmarks-5.0.0.v20241003-060816\sudoku\sudoku.cif"/>
                </type>
                <reference xmi:type="expressions:DiscVariableExpression" xmi:id="279" variable="15">
                  <position xmi:type="position:Position" xmi:id="280" source="File &quot;C:\Users\rober\Downloads\eclipse-escet-v5.0-win32.win32.x86_64\eclipse-escet-v5.0\workspace\CIFBenchmarks-5.0.0.v20241003-060816\sudoku\sudoku.cif&quot;: " startLine="68" endOffset="1902" startColumn="31" endLine="68" endColumn="39" startOffset="1894" location="C:\Users\rober\Downloads\eclipse-escet-v5.0-win32.win32.x86_64\eclipse-escet-v5.0\workspace\CIFBenchmarks-5.0.0.v20241003-060816\sudoku\sudoku.cif"/>
                  <type xmi:type="types:IntType" xmi:id="281" lower="0" upper="4">
                    <position xmi:type="position:Position" xmi:id="282" source="File &quot;C:\Users\rober\Downloads\eclipse-escet-v5.0-win32.win32.x86_64\eclipse-escet-v5.0\workspace\CIFBenchmarks-5.0.0.v20241003-060816\sudoku\sudoku.cif&quot;: " startLine="68" endOffset="1902" startColumn="31" endLine="68" endColumn="39" startOffset="1894" location="C:\Users\rober\Downloads\eclipse-escet-v5.0-win32.win32.x86_64\eclipse-escet-v5.0\workspace\CIFBenchmarks-5.0.0.v20241003-060816\sudoku\sudoku.cif"/>
                  </type>
                </reference>
              </left>
              <right xmi:type="expressions:AlgVariableExpression" xmi:id="283" variable="1081">
                <position xmi:type="position:Position" xmi:id="284" source="File &quot;C:\Users\rober\Downloads\eclipse-escet-v5.0-win32.win32.x86_64\eclipse-escet-v5.0\workspace\CIFBenchmarks-5.0.0.v20241003-060816\sudoku\sudoku.cif&quot;: " startLine="68" endOffset="1910" startColumn="43" endLine="68" endColumn="47" startOffset="1906" location="C:\Users\rober\Downloads\eclipse-escet-v5.0-win32.win32.x86_64\eclipse-escet-v5.0\workspace\CIFBenchmarks-5.0.0.v20241003-060816\sudoku\sudoku.cif"/>
                <type xmi:type="types:IntType" xmi:id="285">
                  <position xmi:type="position:Position" xmi:id="286" source="File &quot;C:\Users\rober\Downloads\eclipse-escet-v5.0-win32.win32.x86_64\eclipse-escet-v5.0\workspace\CIFBenchmarks-5.0.0.v20241003-060816\sudoku\sudoku.cif&quot;: " startLine="68" endOffset="1910" startColumn="43" endLine="68" endColumn="47" startOffset="1906" location="C:\Users\rober\Downloads\eclipse-escet-v5.0-win32.win32.x86_64\eclipse-escet-v5.0\workspace\CIFBenchmarks-5.0.0.v20241003-060816\sudoku\sudoku.cif"/>
                </type>
              </right>
            </right>
          </left>
          <right xmi:type="expressions:BinaryExpression" xmi:id="287" operator="Equal">
            <position xmi:type="position:Position" xmi:id="288" source="File &quot;C:\Users\rober\Downloads\eclipse-escet-v5.0-win32.win32.x86_64\eclipse-escet-v5.0\workspace\CIFBenchmarks-5.0.0.v20241003-060816\sudoku\sudoku.cif&quot;: " startLine="68" endOffset="1925" startColumn="62" endLine="68" endColumn="62" startOffset="1925" location="C:\Users\rober\Downloads\eclipse-escet-v5.0-win32.win32.x86_64\eclipse-escet-v5.0\workspace\CIFBenchmarks-5.0.0.v20241003-060816\sudoku\sudoku.cif"/>
            <type xmi:type="types:BoolType" xmi:id="289">
              <position xmi:type="position:Position" xmi:id="290" source="File &quot;C:\Users\rober\Downloads\eclipse-escet-v5.0-win32.win32.x86_64\eclipse-escet-v5.0\workspace\CIFBenchmarks-5.0.0.v20241003-060816\sudoku\sudoku.cif&quot;: " startLine="68" endOffset="1925" startColumn="62" endLine="68" endColumn="62" startOffset="1925" location="C:\Users\rober\Downloads\eclipse-escet-v5.0-win32.win32.x86_64\eclipse-escet-v5.0\workspace\CIFBenchmarks-5.0.0.v20241003-060816\sudoku\sudoku.cif"/>
            </type>
            <left xmi:type="expressions:CompInstWrapExpression" xmi:id="291" instantiation="1109">
              <position xmi:type="position:Position" xmi:id="292" source="File &quot;C:\Users\rober\Downloads\eclipse-escet-v5.0-win32.win32.x86_64\eclipse-escet-v5.0\workspace\CIFBenchmarks-5.0.0.v20241003-060816\sudoku\sudoku.cif&quot;: " startLine="68" endOffset="1923" startColumn="52" endLine="68" endColumn="60" startOffset="1915" location="C:\Users\rober\Downloads\eclipse-escet-v5.0-win32.win32.x86_64\eclipse-escet-v5.0\workspace\CIFBenchmarks-5.0.0.v20241003-060816\sudoku\sudoku.cif"/>
              <type xmi:type="types:IntType" xmi:id="293" lower="0" upper="4">
                <position xmi:type="position:Position" xmi:id="294" source="File &quot;C:\Users\rober\Downloads\eclipse-escet-v5.0-win32.win32.x86_64\eclipse-escet-v5.0\workspace\CIFBenchmarks-5.0.0.v20241003-060816\sudoku\sudoku.cif&quot;: " startLine="68" endOffset="1923" startColumn="52" endLine="68" endColumn="60" startOffset="1915" location="C:\Users\rober\Downloads\eclipse-escet-v5.0-win32.win32.x86_64\eclipse-escet-v5.0\workspace\CIFBenchmarks-5.0.0.v20241003-060816\sudoku\sudoku.cif"/>
              </type>
              <reference xmi:type="expressions:DiscVariableExpression" xmi:id="295" variable="15">
                <position xmi:type="position:Position" xmi:id="296" source="File &quot;C:\Users\rober\Downloads\eclipse-escet-v5.0-win32.win32.x86_64\eclipse-escet-v5.0\workspace\CIFBenchmarks-5.0.0.v20241003-060816\sudoku\sudoku.cif&quot;: " startLine="68" endOffset="1923" startColumn="52" endLine="68" endColumn="60" startOffset="1915" location="C:\Users\rober\Downloads\eclipse-escet-v5.0-win32.win32.x86_64\eclipse-escet-v5.0\workspace\CIFBenchmarks-5.0.0.v20241003-060816\sudoku\sudoku.cif"/>
                <type xmi:type="types:IntType" xmi:id="297" lower="0" upper="4">
                  <position xmi:type="position:Position" xmi:id="298" source="File &quot;C:\Users\rober\Downloads\eclipse-escet-v5.0-win32.win32.x86_64\eclipse-escet-v5.0\workspace\CIFBenchmarks-5.0.0.v20241003-060816\sudoku\sudoku.cif&quot;: " startLine="68" endOffset="1923" startColumn="52" endLine="68" endColumn="60" startOffset="1915" location="C:\Users\rober\Downloads\eclipse-escet-v5.0-win32.win32.x86_64\eclipse-escet-v5.0\workspace\CIFBenchmarks-5.0.0.v20241003-060816\sudoku\sudoku.cif"/>
                </type>
              </reference>
            </left>
            <right xmi:type="expressions:AlgVariableExpression" xmi:id="299" variable="1081">
              <position xmi:type="position:Position" xmi:id="300" source="File &quot;C:\Users\rober\Downloads\eclipse-escet-v5.0-win32.win32.x86_64\eclipse-escet-v5.0\workspace\CIFBenchmarks-5.0.0.v20241003-060816\sudoku\sudoku.cif&quot;: " startLine="68" endOffset="1931" startColumn="64" endLine="68" endColumn="68" startOffset="1927" location="C:\Users\rober\Downloads\eclipse-escet-v5.0-win32.win32.x86_64\eclipse-escet-v5.0\workspace\CIFBenchmarks-5.0.0.v20241003-060816\sudoku\sudoku.cif"/>
              <type xmi:type="types:IntType" xmi:id="301">
                <position xmi:type="position:Position" xmi:id="302" source="File &quot;C:\Users\rober\Downloads\eclipse-escet-v5.0-win32.win32.x86_64\eclipse-escet-v5.0\workspace\CIFBenchmarks-5.0.0.v20241003-060816\sudoku\sudoku.cif&quot;: " startLine="68" endOffset="1931" startColumn="64" endLine="68" endColumn="68" startOffset="1927" location="C:\Users\rober\Downloads\eclipse-escet-v5.0-win32.win32.x86_64\eclipse-escet-v5.0\workspace\CIFBenchmarks-5.0.0.v20241003-060816\sudoku\sudoku.cif"/>
              </type>
            </right>
          </right>
        </left>
        <right xmi:type="expressions:BinaryExpression" xmi:id="303" operator="Equal">
          <position xmi:type="position:Position" xmi:id="304" source="File &quot;C:\Users\rober\Downloads\eclipse-escet-v5.0-win32.win32.x86_64\eclipse-escet-v5.0\workspace\CIFBenchmarks-5.0.0.v20241003-060816\sudoku\sudoku.cif&quot;: " startLine="68" endOffset="1946" startColumn="83" endLine="68" endColumn="83" startOffset="1946" location="C:\Users\rober\Downloads\eclipse-escet-v5.0-win32.win32.x86_64\eclipse-escet-v5.0\workspace\CIFBenchmarks-5.0.0.v20241003-060816\sudoku\sudoku.cif"/>
          <type xmi:type="types:BoolType" xmi:id="305">
            <position xmi:type="position:Position" xmi:id="306" source="File &quot;C:\Users\rober\Downloads\eclipse-escet-v5.0-win32.win32.x86_64\eclipse-escet-v5.0\workspace\CIFBenchmarks-5.0.0.v20241003-060816\sudoku\sudoku.cif&quot;: " startLine="68" endOffset="1946" startColumn="83" endLine="68" endColumn="83" startOffset="1946" location="C:\Users\rober\Downloads\eclipse-escet-v5.0-win32.win32.x86_64\eclipse-escet-v5.0\workspace\CIFBenchmarks-5.0.0.v20241003-060816\sudoku\sudoku.cif"/>
          </type>
          <left xmi:type="expressions:CompInstWrapExpression" xmi:id="307" instantiation="1113">
            <position xmi:type="position:Position" xmi:id="308" source="File &quot;C:\Users\rober\Downloads\eclipse-escet-v5.0-win32.win32.x86_64\eclipse-escet-v5.0\workspace\CIFBenchmarks-5.0.0.v20241003-060816\sudoku\sudoku.cif&quot;: " startLine="68" endOffset="1944" startColumn="73" endLine="68" endColumn="81" startOffset="1936" location="C:\Users\rober\Downloads\eclipse-escet-v5.0-win32.win32.x86_64\eclipse-escet-v5.0\workspace\CIFBenchmarks-5.0.0.v20241003-060816\sudoku\sudoku.cif"/>
            <type xmi:type="types:IntType" xmi:id="309" lower="0" upper="4">
              <position xmi:type="position:Position" xmi:id="310" source="File &quot;C:\Users\rober\Downloads\eclipse-escet-v5.0-win32.win32.x86_64\eclipse-escet-v5.0\workspace\CIFBenchmarks-5.0.0.v20241003-060816\sudoku\sudoku.cif&quot;: " startLine="68" endOffset="1944" startColumn="73" endLine="68" endColumn="81" startOffset="1936" location="C:\Users\rober\Downloads\eclipse-escet-v5.0-win32.win32.x86_64\eclipse-escet-v5.0\workspace\CIFBenchmarks-5.0.0.v20241003-060816\sudoku\sudoku.cif"/>
            </type>
            <reference xmi:type="expressions:DiscVariableExpression" xmi:id="311" variable="15">
              <position xmi:type="position:Position" xmi:id="312" source="File &quot;C:\Users\rober\Downloads\eclipse-escet-v5.0-win32.win32.x86_64\eclipse-escet-v5.0\workspace\CIFBenchmarks-5.0.0.v20241003-060816\sudoku\sudoku.cif&quot;: " startLine="68" endOffset="1944" startColumn="73" endLine="68" endColumn="81" startOffset="1936" location="C:\Users\rober\Downloads\eclipse-escet-v5.0-win32.win32.x86_64\eclipse-escet-v5.0\workspace\CIFBenchmarks-5.0.0.v20241003-060816\sudoku\sudoku.cif"/>
              <type xmi:type="types:IntType" xmi:id="313" lower="0" upper="4">
                <position xmi:type="position:Position" xmi:id="314" source="File &quot;C:\Users\rober\Downloads\eclipse-escet-v5.0-win32.win32.x86_64\eclipse-escet-v5.0\workspace\CIFBenchmarks-5.0.0.v20241003-060816\sudoku\sudoku.cif&quot;: " startLine="68" endOffset="1944" startColumn="73" endLine="68" endColumn="81" startOffset="1936" location="C:\Users\rober\Downloads\eclipse-escet-v5.0-win32.win32.x86_64\eclipse-escet-v5.0\workspace\CIFBenchmarks-5.0.0.v20241003-060816\sudoku\sudoku.cif"/>
              </type>
            </reference>
          </left>
          <right xmi:type="expressions:AlgVariableExpression" xmi:id="315" variable="1081">
            <position xmi:type="position:Position" xmi:id="316" source="File &quot;C:\Users\rober\Downloads\eclipse-escet-v5.0-win32.win32.x86_64\eclipse-escet-v5.0\workspace\CIFBenchmarks-5.0.0.v20241003-060816\sudoku\sudoku.cif&quot;: " startLine="68" endOffset="1952" startColumn="85" endLine="68" endColumn="89" startOffset="1948" location="C:\Users\rober\Downloads\eclipse-escet-v5.0-win32.win32.x86_64\eclipse-escet-v5.0\workspace\CIFBenchmarks-5.0.0.v20241003-060816\sudoku\sudoku.cif"/>
            <type xmi:type="types:IntType" xmi:id="317">
              <position xmi:type="position:Position" xmi:id="318" source="File &quot;C:\Users\rober\Downloads\eclipse-escet-v5.0-win32.win32.x86_64\eclipse-escet-v5.0\workspace\CIFBenchmarks-5.0.0.v20241003-060816\sudoku\sudoku.cif&quot;: " startLine="68" endOffset="1952" startColumn="85" endLine="68" endColumn="89" startOffset="1948" location="C:\Users\rober\Downloads\eclipse-escet-v5.0-win32.win32.x86_64\eclipse-escet-v5.0\workspace\CIFBenchmarks-5.0.0.v20241003-060816\sudoku\sudoku.cif"/>
            </type>
          </right>
        </right>
      </markeds>
      <markeds xmi:type="expressions:BinaryExpression" xmi:id="319">
        <position xmi:type="position:Position" xmi:id="320" source="File &quot;C:\Users\rober\Downloads\eclipse-escet-v5.0-win32.win32.x86_64\eclipse-escet-v5.0\workspace\CIFBenchmarks-5.0.0.v20241003-060816\sudoku\sudoku.cif&quot;: " startLine="69" endOffset="2025" startColumn="70" endLine="69" endColumn="71" startOffset="2024" location="C:\Users\rober\Downloads\eclipse-escet-v5.0-win32.win32.x86_64\eclipse-escet-v5.0\workspace\CIFBenchmarks-5.0.0.v20241003-060816\sudoku\sudoku.cif"/>
        <type xmi:type="types:BoolType" xmi:id="321">
          <position xmi:type="position:Position" xmi:id="322" source="File &quot;C:\Users\rober\Downloads\eclipse-escet-v5.0-win32.win32.x86_64\eclipse-escet-v5.0\workspace\CIFBenchmarks-5.0.0.v20241003-060816\sudoku\sudoku.cif&quot;: " startLine="69" endOffset="2025" startColumn="70" endLine="69" endColumn="71" startOffset="2024" location="C:\Users\rober\Downloads\eclipse-escet-v5.0-win32.win32.x86_64\eclipse-escet-v5.0\workspace\CIFBenchmarks-5.0.0.v20241003-060816\sudoku\sudoku.cif"/>
        </type>
        <left xmi:type="expressions:BinaryExpression" xmi:id="323">
          <position xmi:type="position:Position" xmi:id="324" source="File &quot;C:\Users\rober\Downloads\eclipse-escet-v5.0-win32.win32.x86_64\eclipse-escet-v5.0\workspace\CIFBenchmarks-5.0.0.v20241003-060816\sudoku\sudoku.cif&quot;: " startLine="69" endOffset="2004" startColumn="49" endLine="69" endColumn="50" startOffset="2003" location="C:\Users\rober\Downloads\eclipse-escet-v5.0-win32.win32.x86_64\eclipse-escet-v5.0\workspace\CIFBenchmarks-5.0.0.v20241003-060816\sudoku\sudoku.cif"/>
          <type xmi:type="types:BoolType" xmi:id="325">
            <position xmi:type="position:Position" xmi:id="326" source="File &quot;C:\Users\rober\Downloads\eclipse-escet-v5.0-win32.win32.x86_64\eclipse-escet-v5.0\workspace\CIFBenchmarks-5.0.0.v20241003-060816\sudoku\sudoku.cif&quot;: " startLine="69" endOffset="2004" startColumn="49" endLine="69" endColumn="50" startOffset="2003" location="C:\Users\rober\Downloads\eclipse-escet-v5.0-win32.win32.x86_64\eclipse-escet-v5.0\workspace\CIFBenchmarks-5.0.0.v20241003-060816\sudoku\sudoku.cif"/>
          </type>
          <left xmi:type="expressions:BinaryExpression" xmi:id="327">
            <position xmi:type="position:Position" xmi:id="328" source="File &quot;C:\Users\rober\Downloads\eclipse-escet-v5.0-win32.win32.x86_64\eclipse-escet-v5.0\workspace\CIFBenchmarks-5.0.0.v20241003-060816\sudoku\sudoku.cif&quot;: " startLine="69" endOffset="1983" startColumn="28" endLine="69" endColumn="29" startOffset="1982" location="C:\Users\rober\Downloads\eclipse-escet-v5.0-win32.win32.x86_64\eclipse-escet-v5.0\workspace\CIFBenchmarks-5.0.0.v20241003-060816\sudoku\sudoku.cif"/>
            <type xmi:type="types:BoolType" xmi:id="329">
              <position xmi:type="position:Position" xmi:id="330" source="File &quot;C:\Users\rober\Downloads\eclipse-escet-v5.0-win32.win32.x86_64\eclipse-escet-v5.0\workspace\CIFBenchmarks-5.0.0.v20241003-060816\sudoku\sudoku.cif&quot;: " startLine="69" endOffset="1983" startColumn="28" endLine="69" endColumn="29" startOffset="1982" location="C:\Users\rober\Downloads\eclipse-escet-v5.0-win32.win32.x86_64\eclipse-escet-v5.0\workspace\CIFBenchmarks-5.0.0.v20241003-060816\sudoku\sudoku.cif"/>
            </type>
            <left xmi:type="expressions:BinaryExpression" xmi:id="331" operator="Equal">
              <position xmi:type="position:Position" xmi:id="332" source="File &quot;C:\Users\rober\Downloads\eclipse-escet-v5.0-win32.win32.x86_64\eclipse-escet-v5.0\workspace\CIFBenchmarks-5.0.0.v20241003-060816\sudoku\sudoku.cif&quot;: " startLine="69" endOffset="1974" startColumn="20" endLine="69" endColumn="20" startOffset="1974" location="C:\Users\rober\Downloads\eclipse-escet-v5.0-win32.win32.x86_64\eclipse-escet-v5.0\workspace\CIFBenchmarks-5.0.0.v20241003-060816\sudoku\sudoku.cif"/>
              <type xmi:type="types:BoolType" xmi:id="333">
                <position xmi:type="position:Position" xmi:id="334" source="File &quot;C:\Users\rober\Downloads\eclipse-escet-v5.0-win32.win32.x86_64\eclipse-escet-v5.0\workspace\CIFBenchmarks-5.0.0.v20241003-060816\sudoku\sudoku.cif&quot;: " startLine="69" endOffset="1974" startColumn="20" endLine="69" endColumn="20" startOffset="1974" location="C:\Users\rober\Downloads\eclipse-escet-v5.0-win32.win32.x86_64\eclipse-escet-v5.0\workspace\CIFBenchmarks-5.0.0.v20241003-060816\sudoku\sudoku.cif"/>
              </type>
              <left xmi:type="expressions:CompInstWrapExpression" xmi:id="335" instantiation="1117">
                <position xmi:type="position:Position" xmi:id="336" source="File &quot;C:\Users\rober\Downloads\eclipse-escet-v5.0-win32.win32.x86_64\eclipse-escet-v5.0\workspace\CIFBenchmarks-5.0.0.v20241003-060816\sudoku\sudoku.cif&quot;: " startLine="69" endOffset="1972" startColumn="10" endLine="69" endColumn="18" startOffset="1964" location="C:\Users\rober\Downloads\eclipse-escet-v5.0-win32.win32.x86_64\eclipse-escet-v5.0\workspace\CIFBenchmarks-5.0.0.v20241003-060816\sudoku\sudoku.cif"/>
                <type xmi:type="types:IntType" xmi:id="337" lower="0" upper="4">
                  <position xmi:type="position:Position" xmi:id="338" source="File &quot;C:\Users\rober\Downloads\eclipse-escet-v5.0-win32.win32.x86_64\eclipse-escet-v5.0\workspace\CIFBenchmarks-5.0.0.v20241003-060816\sudoku\sudoku.cif&quot;: " startLine="69" endOffset="1972" startColumn="10" endLine="69" endColumn="18" startOffset="1964" location="C:\Users\rober\Downloads\eclipse-escet-v5.0-win32.win32.x86_64\eclipse-escet-v5.0\workspace\CIFBenchmarks-5.0.0.v20241003-060816\sudoku\sudoku.cif"/>
                </type>
                <reference xmi:type="expressions:DiscVariableExpression" xmi:id="339" variable="15">
                  <position xmi:type="position:Position" xmi:id="340" source="File &quot;C:\Users\rober\Downloads\eclipse-escet-v5.0-win32.win32.x86_64\eclipse-escet-v5.0\workspace\CIFBenchmarks-5.0.0.v20241003-060816\sudoku\sudoku.cif&quot;: " startLine="69" endOffset="1972" startColumn="10" endLine="69" endColumn="18" startOffset="1964" location="C:\Users\rober\Downloads\eclipse-escet-v5.0-win32.win32.x86_64\eclipse-escet-v5.0\workspace\CIFBenchmarks-5.0.0.v20241003-060816\sudoku\sudoku.cif"/>
                  <type xmi:type="types:IntType" xmi:id="341" lower="0" upper="4">
                    <position xmi:type="position:Position" xmi:id="342" source="File &quot;C:\Users\rober\Downloads\eclipse-escet-v5.0-win32.win32.x86_64\eclipse-escet-v5.0\workspace\CIFBenchmarks-5.0.0.v20241003-060816\sudoku\sudoku.cif&quot;: " startLine="69" endOffset="1972" startColumn="10" endLine="69" endColumn="18" startOffset="1964" location="C:\Users\rober\Downloads\eclipse-escet-v5.0-win32.win32.x86_64\eclipse-escet-v5.0\workspace\CIFBenchmarks-5.0.0.v20241003-060816\sudoku\sudoku.cif"/>
                  </type>
                </reference>
              </left>
              <right xmi:type="expressions:AlgVariableExpression" xmi:id="343" variable="1081">
                <position xmi:type="position:Position" xmi:id="344" source="File &quot;C:\Users\rober\Downloads\eclipse-escet-v5.0-win32.win32.x86_64\eclipse-escet-v5.0\workspace\CIFBenchmarks-5.0.0.v20241003-060816\sudoku\sudoku.cif&quot;: " startLine="69" endOffset="1980" startColumn="22" endLine="69" endColumn="26" startOffset="1976" location="C:\Users\rober\Downloads\eclipse-escet-v5.0-win32.win32.x86_64\eclipse-escet-v5.0\workspace\CIFBenchmarks-5.0.0.v20241003-060816\sudoku\sudoku.cif"/>
                <type xmi:type="types:IntType" xmi:id="345">
                  <position xmi:type="position:Position" xmi:id="346" source="File &quot;C:\Users\rober\Downloads\eclipse-escet-v5.0-win32.win32.x86_64\eclipse-escet-v5.0\workspace\CIFBenchmarks-5.0.0.v20241003-060816\sudoku\sudoku.cif&quot;: " startLine="69" endOffset="1980" startColumn="22" endLine="69" endColumn="26" startOffset="1976" location="C:\Users\rober\Downloads\eclipse-escet-v5.0-win32.win32.x86_64\eclipse-escet-v5.0\workspace\CIFBenchmarks-5.0.0.v20241003-060816\sudoku\sudoku.cif"/>
                </type>
              </right>
            </left>
            <right xmi:type="expressions:BinaryExpression" xmi:id="347" operator="Equal">
              <position xmi:type="position:Position" xmi:id="348" source="File &quot;C:\Users\rober\Downloads\eclipse-escet-v5.0-win32.win32.x86_64\eclipse-escet-v5.0\workspace\CIFBenchmarks-5.0.0.v20241003-060816\sudoku\sudoku.cif&quot;: " startLine="69" endOffset="1995" startColumn="41" endLine="69" endColumn="41" startOffset="1995" location="C:\Users\rober\Downloads\eclipse-escet-v5.0-win32.win32.x86_64\eclipse-escet-v5.0\workspace\CIFBenchmarks-5.0.0.v20241003-060816\sudoku\sudoku.cif"/>
              <type xmi:type="types:BoolType" xmi:id="349">
                <position xmi:type="position:Position" xmi:id="350" source="File &quot;C:\Users\rober\Downloads\eclipse-escet-v5.0-win32.win32.x86_64\eclipse-escet-v5.0\workspace\CIFBenchmarks-5.0.0.v20241003-060816\sudoku\sudoku.cif&quot;: " startLine="69" endOffset="1995" startColumn="41" endLine="69" endColumn="41" startOffset="1995" location="C:\Users\rober\Downloads\eclipse-escet-v5.0-win32.win32.x86_64\eclipse-escet-v5.0\workspace\CIFBenchmarks-5.0.0.v20241003-060816\sudoku\sudoku.cif"/>
              </type>
              <left xmi:type="expressions:CompInstWrapExpression" xmi:id="351" instantiation="1121">
                <position xmi:type="position:Position" xmi:id="352" source="File &quot;C:\Users\rober\Downloads\eclipse-escet-v5.0-win32.win32.x86_64\eclipse-escet-v5.0\workspace\CIFBenchmarks-5.0.0.v20241003-060816\sudoku\sudoku.cif&quot;: " startLine="69" endOffset="1993" startColumn="31" endLine="69" endColumn="39" startOffset="1985" location="C:\Users\rober\Downloads\eclipse-escet-v5.0-win32.win32.x86_64\eclipse-escet-v5.0\workspace\CIFBenchmarks-5.0.0.v20241003-060816\sudoku\sudoku.cif"/>
                <type xmi:type="types:IntType" xmi:id="353" lower="0" upper="4">
                  <position xmi:type="position:Position" xmi:id="354" source="File &quot;C:\Users\rober\Downloads\eclipse-escet-v5.0-win32.win32.x86_64\eclipse-escet-v5.0\workspace\CIFBenchmarks-5.0.0.v20241003-060816\sudoku\sudoku.cif&quot;: " startLine="69" endOffset="1993" startColumn="31" endLine="69" endColumn="39" startOffset="1985" location="C:\Users\rober\Downloads\eclipse-escet-v5.0-win32.win32.x86_64\eclipse-escet-v5.0\workspace\CIFBenchmarks-5.0.0.v20241003-060816\sudoku\sudoku.cif"/>
                </type>
                <reference xmi:type="expressions:DiscVariableExpression" xmi:id="355" variable="15">
                  <position xmi:type="position:Position" xmi:id="356" source="File &quot;C:\Users\rober\Downloads\eclipse-escet-v5.0-win32.win32.x86_64\eclipse-escet-v5.0\workspace\CIFBenchmarks-5.0.0.v20241003-060816\sudoku\sudoku.cif&quot;: " startLine="69" endOffset="1993" startColumn="31" endLine="69" endColumn="39" startOffset="1985" location="C:\Users\rober\Downloads\eclipse-escet-v5.0-win32.win32.x86_64\eclipse-escet-v5.0\workspace\CIFBenchmarks-5.0.0.v20241003-060816\sudoku\sudoku.cif"/>
                  <type xmi:type="types:IntType" xmi:id="357" lower="0" upper="4">
                    <position xmi:type="position:Position" xmi:id="358" source="File &quot;C:\Users\rober\Downloads\eclipse-escet-v5.0-win32.win32.x86_64\eclipse-escet-v5.0\workspace\CIFBenchmarks-5.0.0.v20241003-060816\sudoku\sudoku.cif&quot;: " startLine="69" endOffset="1993" startColumn="31" endLine="69" endColumn="39" startOffset="1985" location="C:\Users\rober\Downloads\eclipse-escet-v5.0-win32.win32.x86_64\eclipse-escet-v5.0\workspace\CIFBenchmarks-5.0.0.v20241003-060816\sudoku\sudoku.cif"/>
                  </type>
                </reference>
              </left>
              <right xmi:type="expressions:AlgVariableExpression" xmi:id="359" variable="1081">
                <position xmi:type="position:Position" xmi:id="360" source="File &quot;C:\Users\rober\Downloads\eclipse-escet-v5.0-win32.win32.x86_64\eclipse-escet-v5.0\workspace\CIFBenchmarks-5.0.0.v20241003-060816\sudoku\sudoku.cif&quot;: " startLine="69" endOffset="2001" startColumn="43" endLine="69" endColumn="47" startOffset="1997" location="C:\Users\rober\Downloads\eclipse-escet-v5.0-win32.win32.x86_64\eclipse-escet-v5.0\workspace\CIFBenchmarks-5.0.0.v20241003-060816\sudoku\sudoku.cif"/>
                <type xmi:type="types:IntType" xmi:id="361">
                  <position xmi:type="position:Position" xmi:id="362" source="File &quot;C:\Users\rober\Downloads\eclipse-escet-v5.0-win32.win32.x86_64\eclipse-escet-v5.0\workspace\CIFBenchmarks-5.0.0.v20241003-060816\sudoku\sudoku.cif&quot;: " startLine="69" endOffset="2001" startColumn="43" endLine="69" endColumn="47" startOffset="1997" location="C:\Users\rober\Downloads\eclipse-escet-v5.0-win32.win32.x86_64\eclipse-escet-v5.0\workspace\CIFBenchmarks-5.0.0.v20241003-060816\sudoku\sudoku.cif"/>
                </type>
              </right>
            </right>
          </left>
          <right xmi:type="expressions:BinaryExpression" xmi:id="363" operator="Equal">
            <position xmi:type="position:Position" xmi:id="364" source="File &quot;C:\Users\rober\Downloads\eclipse-escet-v5.0-win32.win32.x86_64\eclipse-escet-v5.0\workspace\CIFBenchmarks-5.0.0.v20241003-060816\sudoku\sudoku.cif&quot;: " startLine="69" endOffset="2016" startColumn="62" endLine="69" endColumn="62" startOffset="2016" location="C:\Users\rober\Downloads\eclipse-escet-v5.0-win32.win32.x86_64\eclipse-escet-v5.0\workspace\CIFBenchmarks-5.0.0.v20241003-060816\sudoku\sudoku.cif"/>
            <type xmi:type="types:BoolType" xmi:id="365">
              <position xmi:type="position:Position" xmi:id="366" source="File &quot;C:\Users\rober\Downloads\eclipse-escet-v5.0-win32.win32.x86_64\eclipse-escet-v5.0\workspace\CIFBenchmarks-5.0.0.v20241003-060816\sudoku\sudoku.cif&quot;: " startLine="69" endOffset="2016" startColumn="62" endLine="69" endColumn="62" startOffset="2016" location="C:\Users\rober\Downloads\eclipse-escet-v5.0-win32.win32.x86_64\eclipse-escet-v5.0\workspace\CIFBenchmarks-5.0.0.v20241003-060816\sudoku\sudoku.cif"/>
            </type>
            <left xmi:type="expressions:CompInstWrapExpression" xmi:id="367" instantiation="1125">
              <position xmi:type="position:Position" xmi:id="368" source="File &quot;C:\Users\rober\Downloads\eclipse-escet-v5.0-win32.win32.x86_64\eclipse-escet-v5.0\workspace\CIFBenchmarks-5.0.0.v20241003-060816\sudoku\sudoku.cif&quot;: " startLine="69" endOffset="2014" startColumn="52" endLine="69" endColumn="60" startOffset="2006" location="C:\Users\rober\Downloads\eclipse-escet-v5.0-win32.win32.x86_64\eclipse-escet-v5.0\workspace\CIFBenchmarks-5.0.0.v20241003-060816\sudoku\sudoku.cif"/>
              <type xmi:type="types:IntType" xmi:id="369" lower="0" upper="4">
                <position xmi:type="position:Position" xmi:id="370" source="File &quot;C:\Users\rober\Downloads\eclipse-escet-v5.0-win32.win32.x86_64\eclipse-escet-v5.0\workspace\CIFBenchmarks-5.0.0.v20241003-060816\sudoku\sudoku.cif&quot;: " startLine="69" endOffset="2014" startColumn="52" endLine="69" endColumn="60" startOffset="2006" location="C:\Users\rober\Downloads\eclipse-escet-v5.0-win32.win32.x86_64\eclipse-escet-v5.0\workspace\CIFBenchmarks-5.0.0.v20241003-060816\sudoku\sudoku.cif"/>
              </type>
              <reference xmi:type="expressions:DiscVariableExpression" xmi:id="371" variable="15">
                <position xmi:type="position:Position" xmi:id="372" source="File &quot;C:\Users\rober\Downloads\eclipse-escet-v5.0-win32.win32.x86_64\eclipse-escet-v5.0\workspace\CIFBenchmarks-5.0.0.v20241003-060816\sudoku\sudoku.cif&quot;: " startLine="69" endOffset="2014" startColumn="52" endLine="69" endColumn="60" startOffset="2006" location="C:\Users\rober\Downloads\eclipse-escet-v5.0-win32.win32.x86_64\eclipse-escet-v5.0\workspace\CIFBenchmarks-5.0.0.v20241003-060816\sudoku\sudoku.cif"/>
                <type xmi:type="types:IntType" xmi:id="373" lower="0" upper="4">
                  <position xmi:type="position:Position" xmi:id="374" source="File &quot;C:\Users\rober\Downloads\eclipse-escet-v5.0-win32.win32.x86_64\eclipse-escet-v5.0\workspace\CIFBenchmarks-5.0.0.v20241003-060816\sudoku\sudoku.cif&quot;: " startLine="69" endOffset="2014" startColumn="52" endLine="69" endColumn="60" startOffset="2006" location="C:\Users\rober\Downloads\eclipse-escet-v5.0-win32.win32.x86_64\eclipse-escet-v5.0\workspace\CIFBenchmarks-5.0.0.v20241003-060816\sudoku\sudoku.cif"/>
                </type>
              </reference>
            </left>
            <right xmi:type="expressions:AlgVariableExpression" xmi:id="375" variable="1081">
              <position xmi:type="position:Position" xmi:id="376" source="File &quot;C:\Users\rober\Downloads\eclipse-escet-v5.0-win32.win32.x86_64\eclipse-escet-v5.0\workspace\CIFBenchmarks-5.0.0.v20241003-060816\sudoku\sudoku.cif&quot;: " startLine="69" endOffset="2022" startColumn="64" endLine="69" endColumn="68" startOffset="2018" location="C:\Users\rober\Downloads\eclipse-escet-v5.0-win32.win32.x86_64\eclipse-escet-v5.0\workspace\CIFBenchmarks-5.0.0.v20241003-060816\sudoku\sudoku.cif"/>
              <type xmi:type="types:IntType" xmi:id="377">
                <position xmi:type="position:Position" xmi:id="378" source="File &quot;C:\Users\rober\Downloads\eclipse-escet-v5.0-win32.win32.x86_64\eclipse-escet-v5.0\workspace\CIFBenchmarks-5.0.0.v20241003-060816\sudoku\sudoku.cif&quot;: " startLine="69" endOffset="2022" startColumn="64" endLine="69" endColumn="68" startOffset="2018" location="C:\Users\rober\Downloads\eclipse-escet-v5.0-win32.win32.x86_64\eclipse-escet-v5.0\workspace\CIFBenchmarks-5.0.0.v20241003-060816\sudoku\sudoku.cif"/>
              </type>
            </right>
          </right>
        </left>
        <right xmi:type="expressions:BinaryExpression" xmi:id="379" operator="Equal">
          <position xmi:type="position:Position" xmi:id="380" source="File &quot;C:\Users\rober\Downloads\eclipse-escet-v5.0-win32.win32.x86_64\eclipse-escet-v5.0\workspace\CIFBenchmarks-5.0.0.v20241003-060816\sudoku\sudoku.cif&quot;: " startLine="69" endOffset="2037" startColumn="83" endLine="69" endColumn="83" startOffset="2037" location="C:\Users\rober\Downloads\eclipse-escet-v5.0-win32.win32.x86_64\eclipse-escet-v5.0\workspace\CIFBenchmarks-5.0.0.v20241003-060816\sudoku\sudoku.cif"/>
          <type xmi:type="types:BoolType" xmi:id="381">
            <position xmi:type="position:Position" xmi:id="382" source="File &quot;C:\Users\rober\Downloads\eclipse-escet-v5.0-win32.win32.x86_64\eclipse-escet-v5.0\workspace\CIFBenchmarks-5.0.0.v20241003-060816\sudoku\sudoku.cif&quot;: " startLine="69" endOffset="2037" startColumn="83" endLine="69" endColumn="83" startOffset="2037" location="C:\Users\rober\Downloads\eclipse-escet-v5.0-win32.win32.x86_64\eclipse-escet-v5.0\workspace\CIFBenchmarks-5.0.0.v20241003-060816\sudoku\sudoku.cif"/>
          </type>
          <left xmi:type="expressions:CompInstWrapExpression" xmi:id="383" instantiation="1129">
            <position xmi:type="position:Position" xmi:id="384" source="File &quot;C:\Users\rober\Downloads\eclipse-escet-v5.0-win32.win32.x86_64\eclipse-escet-v5.0\workspace\CIFBenchmarks-5.0.0.v20241003-060816\sudoku\sudoku.cif&quot;: " startLine="69" endOffset="2035" startColumn="73" endLine="69" endColumn="81" startOffset="2027" location="C:\Users\rober\Downloads\eclipse-escet-v5.0-win32.win32.x86_64\eclipse-escet-v5.0\workspace\CIFBenchmarks-5.0.0.v20241003-060816\sudoku\sudoku.cif"/>
            <type xmi:type="types:IntType" xmi:id="385" lower="0" upper="4">
              <position xmi:type="position:Position" xmi:id="386" source="File &quot;C:\Users\rober\Downloads\eclipse-escet-v5.0-win32.win32.x86_64\eclipse-escet-v5.0\workspace\CIFBenchmarks-5.0.0.v20241003-060816\sudoku\sudoku.cif&quot;: " startLine="69" endOffset="2035" startColumn="73" endLine="69" endColumn="81" startOffset="2027" location="C:\Users\rober\Downloads\eclipse-escet-v5.0-win32.win32.x86_64\eclipse-escet-v5.0\workspace\CIFBenchmarks-5.0.0.v20241003-060816\sudoku\sudoku.cif"/>
            </type>
            <reference xmi:type="expressions:DiscVariableExpression" xmi:id="387" variable="15">
              <position xmi:type="position:Position" xmi:id="388" source="File &quot;C:\Users\rober\Downloads\eclipse-escet-v5.0-win32.win32.x86_64\eclipse-escet-v5.0\workspace\CIFBenchmarks-5.0.0.v20241003-060816\sudoku\sudoku.cif&quot;: " startLine="69" endOffset="2035" startColumn="73" endLine="69" endColumn="81" startOffset="2027" location="C:\Users\rober\Downloads\eclipse-escet-v5.0-win32.win32.x86_64\eclipse-escet-v5.0\workspace\CIFBenchmarks-5.0.0.v20241003-060816\sudoku\sudoku.cif"/>
              <type xmi:type="types:IntType" xmi:id="389" lower="0" upper="4">
                <position xmi:type="position:Position" xmi:id="390" source="File &quot;C:\Users\rober\Downloads\eclipse-escet-v5.0-win32.win32.x86_64\eclipse-escet-v5.0\workspace\CIFBenchmarks-5.0.0.v20241003-060816\sudoku\sudoku.cif&quot;: " startLine="69" endOffset="2035" startColumn="73" endLine="69" endColumn="81" startOffset="2027" location="C:\Users\rober\Downloads\eclipse-escet-v5.0-win32.win32.x86_64\eclipse-escet-v5.0\workspace\CIFBenchmarks-5.0.0.v20241003-060816\sudoku\sudoku.cif"/>
              </type>
            </reference>
          </left>
          <right xmi:type="expressions:AlgVariableExpression" xmi:id="391" variable="1081">
            <position xmi:type="position:Position" xmi:id="392" source="File &quot;C:\Users\rober\Downloads\eclipse-escet-v5.0-win32.win32.x86_64\eclipse-escet-v5.0\workspace\CIFBenchmarks-5.0.0.v20241003-060816\sudoku\sudoku.cif&quot;: " startLine="69" endOffset="2043" startColumn="85" endLine="69" endColumn="89" startOffset="2039" location="C:\Users\rober\Downloads\eclipse-escet-v5.0-win32.win32.x86_64\eclipse-escet-v5.0\workspace\CIFBenchmarks-5.0.0.v20241003-060816\sudoku\sudoku.cif"/>
            <type xmi:type="types:IntType" xmi:id="393">
              <position xmi:type="position:Position" xmi:id="394" source="File &quot;C:\Users\rober\Downloads\eclipse-escet-v5.0-win32.win32.x86_64\eclipse-escet-v5.0\workspace\CIFBenchmarks-5.0.0.v20241003-060816\sudoku\sudoku.cif&quot;: " startLine="69" endOffset="2043" startColumn="85" endLine="69" endColumn="89" startOffset="2039" location="C:\Users\rober\Downloads\eclipse-escet-v5.0-win32.win32.x86_64\eclipse-escet-v5.0\workspace\CIFBenchmarks-5.0.0.v20241003-060816\sudoku\sudoku.cif"/>
            </type>
          </right>
        </right>
      </markeds>
      <markeds xmi:type="expressions:BinaryExpression" xmi:id="395">
        <position xmi:type="position:Position" xmi:id="396" source="File &quot;C:\Users\rober\Downloads\eclipse-escet-v5.0-win32.win32.x86_64\eclipse-escet-v5.0\workspace\CIFBenchmarks-5.0.0.v20241003-060816\sudoku\sudoku.cif&quot;: " startLine="70" endOffset="2116" startColumn="70" endLine="70" endColumn="71" startOffset="2115" location="C:\Users\rober\Downloads\eclipse-escet-v5.0-win32.win32.x86_64\eclipse-escet-v5.0\workspace\CIFBenchmarks-5.0.0.v20241003-060816\sudoku\sudoku.cif"/>
        <type xmi:type="types:BoolType" xmi:id="397">
          <position xmi:type="position:Position" xmi:id="398" source="File &quot;C:\Users\rober\Downloads\eclipse-escet-v5.0-win32.win32.x86_64\eclipse-escet-v5.0\workspace\CIFBenchmarks-5.0.0.v20241003-060816\sudoku\sudoku.cif&quot;: " startLine="70" endOffset="2116" startColumn="70" endLine="70" endColumn="71" startOffset="2115" location="C:\Users\rober\Downloads\eclipse-escet-v5.0-win32.win32.x86_64\eclipse-escet-v5.0\workspace\CIFBenchmarks-5.0.0.v20241003-060816\sudoku\sudoku.cif"/>
        </type>
        <left xmi:type="expressions:BinaryExpression" xmi:id="399">
          <position xmi:type="position:Position" xmi:id="400" source="File &quot;C:\Users\rober\Downloads\eclipse-escet-v5.0-win32.win32.x86_64\eclipse-escet-v5.0\workspace\CIFBenchmarks-5.0.0.v20241003-060816\sudoku\sudoku.cif&quot;: " startLine="70" endOffset="2095" startColumn="49" endLine="70" endColumn="50" startOffset="2094" location="C:\Users\rober\Downloads\eclipse-escet-v5.0-win32.win32.x86_64\eclipse-escet-v5.0\workspace\CIFBenchmarks-5.0.0.v20241003-060816\sudoku\sudoku.cif"/>
          <type xmi:type="types:BoolType" xmi:id="401">
            <position xmi:type="position:Position" xmi:id="402" source="File &quot;C:\Users\rober\Downloads\eclipse-escet-v5.0-win32.win32.x86_64\eclipse-escet-v5.0\workspace\CIFBenchmarks-5.0.0.v20241003-060816\sudoku\sudoku.cif&quot;: " startLine="70" endOffset="2095" startColumn="49" endLine="70" endColumn="50" startOffset="2094" location="C:\Users\rober\Downloads\eclipse-escet-v5.0-win32.win32.x86_64\eclipse-escet-v5.0\workspace\CIFBenchmarks-5.0.0.v20241003-060816\sudoku\sudoku.cif"/>
          </type>
          <left xmi:type="expressions:BinaryExpression" xmi:id="403">
            <position xmi:type="position:Position" xmi:id="404" source="File &quot;C:\Users\rober\Downloads\eclipse-escet-v5.0-win32.win32.x86_64\eclipse-escet-v5.0\workspace\CIFBenchmarks-5.0.0.v20241003-060816\sudoku\sudoku.cif&quot;: " startLine="70" endOffset="2074" startColumn="28" endLine="70" endColumn="29" startOffset="2073" location="C:\Users\rober\Downloads\eclipse-escet-v5.0-win32.win32.x86_64\eclipse-escet-v5.0\workspace\CIFBenchmarks-5.0.0.v20241003-060816\sudoku\sudoku.cif"/>
            <type xmi:type="types:BoolType" xmi:id="405">
              <position xmi:type="position:Position" xmi:id="406" source="File &quot;C:\Users\rober\Downloads\eclipse-escet-v5.0-win32.win32.x86_64\eclipse-escet-v5.0\workspace\CIFBenchmarks-5.0.0.v20241003-060816\sudoku\sudoku.cif&quot;: " startLine="70" endOffset="2074" startColumn="28" endLine="70" endColumn="29" startOffset="2073" location="C:\Users\rober\Downloads\eclipse-escet-v5.0-win32.win32.x86_64\eclipse-escet-v5.0\workspace\CIFBenchmarks-5.0.0.v20241003-060816\sudoku\sudoku.cif"/>
            </type>
            <left xmi:type="expressions:BinaryExpression" xmi:id="407" operator="Equal">
              <position xmi:type="position:Position" xmi:id="408" source="File &quot;C:\Users\rober\Downloads\eclipse-escet-v5.0-win32.win32.x86_64\eclipse-escet-v5.0\workspace\CIFBenchmarks-5.0.0.v20241003-060816\sudoku\sudoku.cif&quot;: " startLine="70" endOffset="2065" startColumn="20" endLine="70" endColumn="20" startOffset="2065" location="C:\Users\rober\Downloads\eclipse-escet-v5.0-win32.win32.x86_64\eclipse-escet-v5.0\workspace\CIFBenchmarks-5.0.0.v20241003-060816\sudoku\sudoku.cif"/>
              <type xmi:type="types:BoolType" xmi:id="409">
                <position xmi:type="position:Position" xmi:id="410" source="File &quot;C:\Users\rober\Downloads\eclipse-escet-v5.0-win32.win32.x86_64\eclipse-escet-v5.0\workspace\CIFBenchmarks-5.0.0.v20241003-060816\sudoku\sudoku.cif&quot;: " startLine="70" endOffset="2065" startColumn="20" endLine="70" endColumn="20" startOffset="2065" location="C:\Users\rober\Downloads\eclipse-escet-v5.0-win32.win32.x86_64\eclipse-escet-v5.0\workspace\CIFBenchmarks-5.0.0.v20241003-060816\sudoku\sudoku.cif"/>
              </type>
              <left xmi:type="expressions:CompInstWrapExpression" xmi:id="411" instantiation="1133">
                <position xmi:type="position:Position" xmi:id="412" source="File &quot;C:\Users\rober\Downloads\eclipse-escet-v5.0-win32.win32.x86_64\eclipse-escet-v5.0\workspace\CIFBenchmarks-5.0.0.v20241003-060816\sudoku\sudoku.cif&quot;: " startLine="70" endOffset="2063" startColumn="10" endLine="70" endColumn="18" startOffset="2055" location="C:\Users\rober\Downloads\eclipse-escet-v5.0-win32.win32.x86_64\eclipse-escet-v5.0\workspace\CIFBenchmarks-5.0.0.v20241003-060816\sudoku\sudoku.cif"/>
                <type xmi:type="types:IntType" xmi:id="413" lower="0" upper="4">
                  <position xmi:type="position:Position" xmi:id="414" source="File &quot;C:\Users\rober\Downloads\eclipse-escet-v5.0-win32.win32.x86_64\eclipse-escet-v5.0\workspace\CIFBenchmarks-5.0.0.v20241003-060816\sudoku\sudoku.cif&quot;: " startLine="70" endOffset="2063" startColumn="10" endLine="70" endColumn="18" startOffset="2055" location="C:\Users\rober\Downloads\eclipse-escet-v5.0-win32.win32.x86_64\eclipse-escet-v5.0\workspace\CIFBenchmarks-5.0.0.v20241003-060816\sudoku\sudoku.cif"/>
                </type>
                <reference xmi:type="expressions:DiscVariableExpression" xmi:id="415" variable="15">
                  <position xmi:type="position:Position" xmi:id="416" source="File &quot;C:\Users\rober\Downloads\eclipse-escet-v5.0-win32.win32.x86_64\eclipse-escet-v5.0\workspace\CIFBenchmarks-5.0.0.v20241003-060816\sudoku\sudoku.cif&quot;: " startLine="70" endOffset="2063" startColumn="10" endLine="70" endColumn="18" startOffset="2055" location="C:\Users\rober\Downloads\eclipse-escet-v5.0-win32.win32.x86_64\eclipse-escet-v5.0\workspace\CIFBenchmarks-5.0.0.v20241003-060816\sudoku\sudoku.cif"/>
                  <type xmi:type="types:IntType" xmi:id="417" lower="0" upper="4">
                    <position xmi:type="position:Position" xmi:id="418" source="File &quot;C:\Users\rober\Downloads\eclipse-escet-v5.0-win32.win32.x86_64\eclipse-escet-v5.0\workspace\CIFBenchmarks-5.0.0.v20241003-060816\sudoku\sudoku.cif&quot;: " startLine="70" endOffset="2063" startColumn="10" endLine="70" endColumn="18" startOffset="2055" location="C:\Users\rober\Downloads\eclipse-escet-v5.0-win32.win32.x86_64\eclipse-escet-v5.0\workspace\CIFBenchmarks-5.0.0.v20241003-060816\sudoku\sudoku.cif"/>
                  </type>
                </reference>
              </left>
              <right xmi:type="expressions:AlgVariableExpression" xmi:id="419" variable="1081">
                <position xmi:type="position:Position" xmi:id="420" source="File &quot;C:\Users\rober\Downloads\eclipse-escet-v5.0-win32.win32.x86_64\eclipse-escet-v5.0\workspace\CIFBenchmarks-5.0.0.v20241003-060816\sudoku\sudoku.cif&quot;: " startLine="70" endOffset="2071" startColumn="22" endLine="70" endColumn="26" startOffset="2067" location="C:\Users\rober\Downloads\eclipse-escet-v5.0-win32.win32.x86_64\eclipse-escet-v5.0\workspace\CIFBenchmarks-5.0.0.v20241003-060816\sudoku\sudoku.cif"/>
                <type xmi:type="types:IntType" xmi:id="421">
                  <position xmi:type="position:Position" xmi:id="422" source="File &quot;C:\Users\rober\Downloads\eclipse-escet-v5.0-win32.win32.x86_64\eclipse-escet-v5.0\workspace\CIFBenchmarks-5.0.0.v20241003-060816\sudoku\sudoku.cif&quot;: " startLine="70" endOffset="2071" startColumn="22" endLine="70" endColumn="26" startOffset="2067" location="C:\Users\rober\Downloads\eclipse-escet-v5.0-win32.win32.x86_64\eclipse-escet-v5.0\workspace\CIFBenchmarks-5.0.0.v20241003-060816\sudoku\sudoku.cif"/>
                </type>
              </right>
            </left>
            <right xmi:type="expressions:BinaryExpression" xmi:id="423" operator="Equal">
              <position xmi:type="position:Position" xmi:id="424" source="File &quot;C:\Users\rober\Downloads\eclipse-escet-v5.0-win32.win32.x86_64\eclipse-escet-v5.0\workspace\CIFBenchmarks-5.0.0.v20241003-060816\sudoku\sudoku.cif&quot;: " startLine="70" endOffset="2086" startColumn="41" endLine="70" endColumn="41" startOffset="2086" location="C:\Users\rober\Downloads\eclipse-escet-v5.0-win32.win32.x86_64\eclipse-escet-v5.0\workspace\CIFBenchmarks-5.0.0.v20241003-060816\sudoku\sudoku.cif"/>
              <type xmi:type="types:BoolType" xmi:id="425">
                <position xmi:type="position:Position" xmi:id="426" source="File &quot;C:\Users\rober\Downloads\eclipse-escet-v5.0-win32.win32.x86_64\eclipse-escet-v5.0\workspace\CIFBenchmarks-5.0.0.v20241003-060816\sudoku\sudoku.cif&quot;: " startLine="70" endOffset="2086" startColumn="41" endLine="70" endColumn="41" startOffset="2086" location="C:\Users\rober\Downloads\eclipse-escet-v5.0-win32.win32.x86_64\eclipse-escet-v5.0\workspace\CIFBenchmarks-5.0.0.v20241003-060816\sudoku\sudoku.cif"/>
              </type>
              <left xmi:type="expressions:CompInstWrapExpression" xmi:id="427" instantiation="1137">
                <position xmi:type="position:Position" xmi:id="428" source="File &quot;C:\Users\rober\Downloads\eclipse-escet-v5.0-win32.win32.x86_64\eclipse-escet-v5.0\workspace\CIFBenchmarks-5.0.0.v20241003-060816\sudoku\sudoku.cif&quot;: " startLine="70" endOffset="2084" startColumn="31" endLine="70" endColumn="39" startOffset="2076" location="C:\Users\rober\Downloads\eclipse-escet-v5.0-win32.win32.x86_64\eclipse-escet-v5.0\workspace\CIFBenchmarks-5.0.0.v20241003-060816\sudoku\sudoku.cif"/>
                <type xmi:type="types:IntType" xmi:id="429" lower="0" upper="4">
                  <position xmi:type="position:Position" xmi:id="430" source="File &quot;C:\Users\rober\Downloads\eclipse-escet-v5.0-win32.win32.x86_64\eclipse-escet-v5.0\workspace\CIFBenchmarks-5.0.0.v20241003-060816\sudoku\sudoku.cif&quot;: " startLine="70" endOffset="2084" startColumn="31" endLine="70" endColumn="39" startOffset="2076" location="C:\Users\rober\Downloads\eclipse-escet-v5.0-win32.win32.x86_64\eclipse-escet-v5.0\workspace\CIFBenchmarks-5.0.0.v20241003-060816\sudoku\sudoku.cif"/>
                </type>
                <reference xmi:type="expressions:DiscVariableExpression" xmi:id="431" variable="15">
                  <position xmi:type="position:Position" xmi:id="432" source="File &quot;C:\Users\rober\Downloads\eclipse-escet-v5.0-win32.win32.x86_64\eclipse-escet-v5.0\workspace\CIFBenchmarks-5.0.0.v20241003-060816\sudoku\sudoku.cif&quot;: " startLine="70" endOffset="2084" startColumn="31" endLine="70" endColumn="39" startOffset="2076" location="C:\Users\rober\Downloads\eclipse-escet-v5.0-win32.win32.x86_64\eclipse-escet-v5.0\workspace\CIFBenchmarks-5.0.0.v20241003-060816\sudoku\sudoku.cif"/>
                  <type xmi:type="types:IntType" xmi:id="433" lower="0" upper="4">
                    <position xmi:type="position:Position" xmi:id="434" source="File &quot;C:\Users\rober\Downloads\eclipse-escet-v5.0-win32.win32.x86_64\eclipse-escet-v5.0\workspace\CIFBenchmarks-5.0.0.v20241003-060816\sudoku\sudoku.cif&quot;: " startLine="70" endOffset="2084" startColumn="31" endLine="70" endColumn="39" startOffset="2076" location="C:\Users\rober\Downloads\eclipse-escet-v5.0-win32.win32.x86_64\eclipse-escet-v5.0\workspace\CIFBenchmarks-5.0.0.v20241003-060816\sudoku\sudoku.cif"/>
                  </type>
                </reference>
              </left>
              <right xmi:type="expressions:AlgVariableExpression" xmi:id="435" variable="1081">
                <position xmi:type="position:Position" xmi:id="436" source="File &quot;C:\Users\rober\Downloads\eclipse-escet-v5.0-win32.win32.x86_64\eclipse-escet-v5.0\workspace\CIFBenchmarks-5.0.0.v20241003-060816\sudoku\sudoku.cif&quot;: " startLine="70" endOffset="2092" startColumn="43" endLine="70" endColumn="47" startOffset="2088" location="C:\Users\rober\Downloads\eclipse-escet-v5.0-win32.win32.x86_64\eclipse-escet-v5.0\workspace\CIFBenchmarks-5.0.0.v20241003-060816\sudoku\sudoku.cif"/>
                <type xmi:type="types:IntType" xmi:id="437">
                  <position xmi:type="position:Position" xmi:id="438" source="File &quot;C:\Users\rober\Downloads\eclipse-escet-v5.0-win32.win32.x86_64\eclipse-escet-v5.0\workspace\CIFBenchmarks-5.0.0.v20241003-060816\sudoku\sudoku.cif&quot;: " startLine="70" endOffset="2092" startColumn="43" endLine="70" endColumn="47" startOffset="2088" location="C:\Users\rober\Downloads\eclipse-escet-v5.0-win32.win32.x86_64\eclipse-escet-v5.0\workspace\CIFBenchmarks-5.0.0.v20241003-060816\sudoku\sudoku.cif"/>
                </type>
              </right>
            </right>
          </left>
          <right xmi:type="expressions:BinaryExpression" xmi:id="439" operator="Equal">
            <position xmi:type="position:Position" xmi:id="440" source="File &quot;C:\Users\rober\Downloads\eclipse-escet-v5.0-win32.win32.x86_64\eclipse-escet-v5.0\workspace\CIFBenchmarks-5.0.0.v20241003-060816\sudoku\sudoku.cif&quot;: " startLine="70" endOffset="2107" startColumn="62" endLine="70" endColumn="62" startOffset="2107" location="C:\Users\rober\Downloads\eclipse-escet-v5.0-win32.win32.x86_64\eclipse-escet-v5.0\workspace\CIFBenchmarks-5.0.0.v20241003-060816\sudoku\sudoku.cif"/>
            <type xmi:type="types:BoolType" xmi:id="441">
              <position xmi:type="position:Position" xmi:id="442" source="File &quot;C:\Users\rober\Downloads\eclipse-escet-v5.0-win32.win32.x86_64\eclipse-escet-v5.0\workspace\CIFBenchmarks-5.0.0.v20241003-060816\sudoku\sudoku.cif&quot;: " startLine="70" endOffset="2107" startColumn="62" endLine="70" endColumn="62" startOffset="2107" location="C:\Users\rober\Downloads\eclipse-escet-v5.0-win32.win32.x86_64\eclipse-escet-v5.0\workspace\CIFBenchmarks-5.0.0.v20241003-060816\sudoku\sudoku.cif"/>
            </type>
            <left xmi:type="expressions:CompInstWrapExpression" xmi:id="443" instantiation="1141">
              <position xmi:type="position:Position" xmi:id="444" source="File &quot;C:\Users\rober\Downloads\eclipse-escet-v5.0-win32.win32.x86_64\eclipse-escet-v5.0\workspace\CIFBenchmarks-5.0.0.v20241003-060816\sudoku\sudoku.cif&quot;: " startLine="70" endOffset="2105" startColumn="52" endLine="70" endColumn="60" startOffset="2097" location="C:\Users\rober\Downloads\eclipse-escet-v5.0-win32.win32.x86_64\eclipse-escet-v5.0\workspace\CIFBenchmarks-5.0.0.v20241003-060816\sudoku\sudoku.cif"/>
              <type xmi:type="types:IntType" xmi:id="445" lower="0" upper="4">
                <position xmi:type="position:Position" xmi:id="446" source="File &quot;C:\Users\rober\Downloads\eclipse-escet-v5.0-win32.win32.x86_64\eclipse-escet-v5.0\workspace\CIFBenchmarks-5.0.0.v20241003-060816\sudoku\sudoku.cif&quot;: " startLine="70" endOffset="2105" startColumn="52" endLine="70" endColumn="60" startOffset="2097" location="C:\Users\rober\Downloads\eclipse-escet-v5.0-win32.win32.x86_64\eclipse-escet-v5.0\workspace\CIFBenchmarks-5.0.0.v20241003-060816\sudoku\sudoku.cif"/>
              </type>
              <reference xmi:type="expressions:DiscVariableExpression" xmi:id="447" variable="15">
                <position xmi:type="position:Position" xmi:id="448" source="File &quot;C:\Users\rober\Downloads\eclipse-escet-v5.0-win32.win32.x86_64\eclipse-escet-v5.0\workspace\CIFBenchmarks-5.0.0.v20241003-060816\sudoku\sudoku.cif&quot;: " startLine="70" endOffset="2105" startColumn="52" endLine="70" endColumn="60" startOffset="2097" location="C:\Users\rober\Downloads\eclipse-escet-v5.0-win32.win32.x86_64\eclipse-escet-v5.0\workspace\CIFBenchmarks-5.0.0.v20241003-060816\sudoku\sudoku.cif"/>
                <type xmi:type="types:IntType" xmi:id="449" lower="0" upper="4">
                  <position xmi:type="position:Position" xmi:id="450" source="File &quot;C:\Users\rober\Downloads\eclipse-escet-v5.0-win32.win32.x86_64\eclipse-escet-v5.0\workspace\CIFBenchmarks-5.0.0.v20241003-060816\sudoku\sudoku.cif&quot;: " startLine="70" endOffset="2105" startColumn="52" endLine="70" endColumn="60" startOffset="2097" location="C:\Users\rober\Downloads\eclipse-escet-v5.0-win32.win32.x86_64\eclipse-escet-v5.0\workspace\CIFBenchmarks-5.0.0.v20241003-060816\sudoku\sudoku.cif"/>
                </type>
              </reference>
            </left>
            <right xmi:type="expressions:AlgVariableExpression" xmi:id="451" variable="1081">
              <position xmi:type="position:Position" xmi:id="452" source="File &quot;C:\Users\rober\Downloads\eclipse-escet-v5.0-win32.win32.x86_64\eclipse-escet-v5.0\workspace\CIFBenchmarks-5.0.0.v20241003-060816\sudoku\sudoku.cif&quot;: " startLine="70" endOffset="2113" startColumn="64" endLine="70" endColumn="68" startOffset="2109" location="C:\Users\rober\Downloads\eclipse-escet-v5.0-win32.win32.x86_64\eclipse-escet-v5.0\workspace\CIFBenchmarks-5.0.0.v20241003-060816\sudoku\sudoku.cif"/>
              <type xmi:type="types:IntType" xmi:id="453">
                <position xmi:type="position:Position" xmi:id="454" source="File &quot;C:\Users\rober\Downloads\eclipse-escet-v5.0-win32.win32.x86_64\eclipse-escet-v5.0\workspace\CIFBenchmarks-5.0.0.v20241003-060816\sudoku\sudoku.cif&quot;: " startLine="70" endOffset="2113" startColumn="64" endLine="70" endColumn="68" startOffset="2109" location="C:\Users\rober\Downloads\eclipse-escet-v5.0-win32.win32.x86_64\eclipse-escet-v5.0\workspace\CIFBenchmarks-5.0.0.v20241003-060816\sudoku\sudoku.cif"/>
              </type>
            </right>
          </right>
        </left>
        <right xmi:type="expressions:BinaryExpression" xmi:id="455" operator="Equal">
          <position xmi:type="position:Position" xmi:id="456" source="File &quot;C:\Users\rober\Downloads\eclipse-escet-v5.0-win32.win32.x86_64\eclipse-escet-v5.0\workspace\CIFBenchmarks-5.0.0.v20241003-060816\sudoku\sudoku.cif&quot;: " startLine="70" endOffset="2128" startColumn="83" endLine="70" endColumn="83" startOffset="2128" location="C:\Users\rober\Downloads\eclipse-escet-v5.0-win32.win32.x86_64\eclipse-escet-v5.0\workspace\CIFBenchmarks-5.0.0.v20241003-060816\sudoku\sudoku.cif"/>
          <type xmi:type="types:BoolType" xmi:id="457">
            <position xmi:type="position:Position" xmi:id="458" source="File &quot;C:\Users\rober\Downloads\eclipse-escet-v5.0-win32.win32.x86_64\eclipse-escet-v5.0\workspace\CIFBenchmarks-5.0.0.v20241003-060816\sudoku\sudoku.cif&quot;: " startLine="70" endOffset="2128" startColumn="83" endLine="70" endColumn="83" startOffset="2128" location="C:\Users\rober\Downloads\eclipse-escet-v5.0-win32.win32.x86_64\eclipse-escet-v5.0\workspace\CIFBenchmarks-5.0.0.v20241003-060816\sudoku\sudoku.cif"/>
          </type>
          <left xmi:type="expressions:CompInstWrapExpression" xmi:id="459" instantiation="1145">
            <position xmi:type="position:Position" xmi:id="460" source="File &quot;C:\Users\rober\Downloads\eclipse-escet-v5.0-win32.win32.x86_64\eclipse-escet-v5.0\workspace\CIFBenchmarks-5.0.0.v20241003-060816\sudoku\sudoku.cif&quot;: " startLine="70" endOffset="2126" startColumn="73" endLine="70" endColumn="81" startOffset="2118" location="C:\Users\rober\Downloads\eclipse-escet-v5.0-win32.win32.x86_64\eclipse-escet-v5.0\workspace\CIFBenchmarks-5.0.0.v20241003-060816\sudoku\sudoku.cif"/>
            <type xmi:type="types:IntType" xmi:id="461" lower="0" upper="4">
              <position xmi:type="position:Position" xmi:id="462" source="File &quot;C:\Users\rober\Downloads\eclipse-escet-v5.0-win32.win32.x86_64\eclipse-escet-v5.0\workspace\CIFBenchmarks-5.0.0.v20241003-060816\sudoku\sudoku.cif&quot;: " startLine="70" endOffset="2126" startColumn="73" endLine="70" endColumn="81" startOffset="2118" location="C:\Users\rober\Downloads\eclipse-escet-v5.0-win32.win32.x86_64\eclipse-escet-v5.0\workspace\CIFBenchmarks-5.0.0.v20241003-060816\sudoku\sudoku.cif"/>
            </type>
            <reference xmi:type="expressions:DiscVariableExpression" xmi:id="463" variable="15">
              <position xmi:type="position:Position" xmi:id="464" source="File &quot;C:\Users\rober\Downloads\eclipse-escet-v5.0-win32.win32.x86_64\eclipse-escet-v5.0\workspace\CIFBenchmarks-5.0.0.v20241003-060816\sudoku\sudoku.cif&quot;: " startLine="70" endOffset="2126" startColumn="73" endLine="70" endColumn="81" startOffset="2118" location="C:\Users\rober\Downloads\eclipse-escet-v5.0-win32.win32.x86_64\eclipse-escet-v5.0\workspace\CIFBenchmarks-5.0.0.v20241003-060816\sudoku\sudoku.cif"/>
              <type xmi:type="types:IntType" xmi:id="465" lower="0" upper="4">
                <position xmi:type="position:Position" xmi:id="466" source="File &quot;C:\Users\rober\Downloads\eclipse-escet-v5.0-win32.win32.x86_64\eclipse-escet-v5.0\workspace\CIFBenchmarks-5.0.0.v20241003-060816\sudoku\sudoku.cif&quot;: " startLine="70" endOffset="2126" startColumn="73" endLine="70" endColumn="81" startOffset="2118" location="C:\Users\rober\Downloads\eclipse-escet-v5.0-win32.win32.x86_64\eclipse-escet-v5.0\workspace\CIFBenchmarks-5.0.0.v20241003-060816\sudoku\sudoku.cif"/>
              </type>
            </reference>
          </left>
          <right xmi:type="expressions:AlgVariableExpression" xmi:id="467" variable="1081">
            <position xmi:type="position:Position" xmi:id="468" source="File &quot;C:\Users\rober\Downloads\eclipse-escet-v5.0-win32.win32.x86_64\eclipse-escet-v5.0\workspace\CIFBenchmarks-5.0.0.v20241003-060816\sudoku\sudoku.cif&quot;: " startLine="70" endOffset="2134" startColumn="85" endLine="70" endColumn="89" startOffset="2130" location="C:\Users\rober\Downloads\eclipse-escet-v5.0-win32.win32.x86_64\eclipse-escet-v5.0\workspace\CIFBenchmarks-5.0.0.v20241003-060816\sudoku\sudoku.cif"/>
            <type xmi:type="types:IntType" xmi:id="469">
              <position xmi:type="position:Position" xmi:id="470" source="File &quot;C:\Users\rober\Downloads\eclipse-escet-v5.0-win32.win32.x86_64\eclipse-escet-v5.0\workspace\CIFBenchmarks-5.0.0.v20241003-060816\sudoku\sudoku.cif&quot;: " startLine="70" endOffset="2134" startColumn="85" endLine="70" endColumn="89" startOffset="2130" location="C:\Users\rober\Downloads\eclipse-escet-v5.0-win32.win32.x86_64\eclipse-escet-v5.0\workspace\CIFBenchmarks-5.0.0.v20241003-060816\sudoku\sudoku.cif"/>
            </type>
          </right>
        </right>
      </markeds>
      <markeds xmi:type="expressions:BinaryExpression" xmi:id="471">
        <position xmi:type="position:Position" xmi:id="472" source="File &quot;C:\Users\rober\Downloads\eclipse-escet-v5.0-win32.win32.x86_64\eclipse-escet-v5.0\workspace\CIFBenchmarks-5.0.0.v20241003-060816\sudoku\sudoku.cif&quot;: " startLine="73" endOffset="2252" startColumn="70" endLine="73" endColumn="71" startOffset="2251" location="C:\Users\rober\Downloads\eclipse-escet-v5.0-win32.win32.x86_64\eclipse-escet-v5.0\workspace\CIFBenchmarks-5.0.0.v20241003-060816\sudoku\sudoku.cif"/>
        <type xmi:type="types:BoolType" xmi:id="473">
          <position xmi:type="position:Position" xmi:id="474" source="File &quot;C:\Users\rober\Downloads\eclipse-escet-v5.0-win32.win32.x86_64\eclipse-escet-v5.0\workspace\CIFBenchmarks-5.0.0.v20241003-060816\sudoku\sudoku.cif&quot;: " startLine="73" endOffset="2252" startColumn="70" endLine="73" endColumn="71" startOffset="2251" location="C:\Users\rober\Downloads\eclipse-escet-v5.0-win32.win32.x86_64\eclipse-escet-v5.0\workspace\CIFBenchmarks-5.0.0.v20241003-060816\sudoku\sudoku.cif"/>
        </type>
        <left xmi:type="expressions:BinaryExpression" xmi:id="475">
          <position xmi:type="position:Position" xmi:id="476" source="File &quot;C:\Users\rober\Downloads\eclipse-escet-v5.0-win32.win32.x86_64\eclipse-escet-v5.0\workspace\CIFBenchmarks-5.0.0.v20241003-060816\sudoku\sudoku.cif&quot;: " startLine="73" endOffset="2231" startColumn="49" endLine="73" endColumn="50" startOffset="2230" location="C:\Users\rober\Downloads\eclipse-escet-v5.0-win32.win32.x86_64\eclipse-escet-v5.0\workspace\CIFBenchmarks-5.0.0.v20241003-060816\sudoku\sudoku.cif"/>
          <type xmi:type="types:BoolType" xmi:id="477">
            <position xmi:type="position:Position" xmi:id="478" source="File &quot;C:\Users\rober\Downloads\eclipse-escet-v5.0-win32.win32.x86_64\eclipse-escet-v5.0\workspace\CIFBenchmarks-5.0.0.v20241003-060816\sudoku\sudoku.cif&quot;: " startLine="73" endOffset="2231" startColumn="49" endLine="73" endColumn="50" startOffset="2230" location="C:\Users\rober\Downloads\eclipse-escet-v5.0-win32.win32.x86_64\eclipse-escet-v5.0\workspace\CIFBenchmarks-5.0.0.v20241003-060816\sudoku\sudoku.cif"/>
          </type>
          <left xmi:type="expressions:BinaryExpression" xmi:id="479">
            <position xmi:type="position:Position" xmi:id="480" source="File &quot;C:\Users\rober\Downloads\eclipse-escet-v5.0-win32.win32.x86_64\eclipse-escet-v5.0\workspace\CIFBenchmarks-5.0.0.v20241003-060816\sudoku\sudoku.cif&quot;: " startLine="73" endOffset="2210" startColumn="28" endLine="73" endColumn="29" startOffset="2209" location="C:\Users\rober\Downloads\eclipse-escet-v5.0-win32.win32.x86_64\eclipse-escet-v5.0\workspace\CIFBenchmarks-5.0.0.v20241003-060816\sudoku\sudoku.cif"/>
            <type xmi:type="types:BoolType" xmi:id="481">
              <position xmi:type="position:Position" xmi:id="482" source="File &quot;C:\Users\rober\Downloads\eclipse-escet-v5.0-win32.win32.x86_64\eclipse-escet-v5.0\workspace\CIFBenchmarks-5.0.0.v20241003-060816\sudoku\sudoku.cif&quot;: " startLine="73" endOffset="2210" startColumn="28" endLine="73" endColumn="29" startOffset="2209" location="C:\Users\rober\Downloads\eclipse-escet-v5.0-win32.win32.x86_64\eclipse-escet-v5.0\workspace\CIFBenchmarks-5.0.0.v20241003-060816\sudoku\sudoku.cif"/>
            </type>
            <left xmi:type="expressions:BinaryExpression" xmi:id="483" operator="Equal">
              <position xmi:type="position:Position" xmi:id="484" source="File &quot;C:\Users\rober\Downloads\eclipse-escet-v5.0-win32.win32.x86_64\eclipse-escet-v5.0\workspace\CIFBenchmarks-5.0.0.v20241003-060816\sudoku\sudoku.cif&quot;: " startLine="73" endOffset="2201" startColumn="20" endLine="73" endColumn="20" startOffset="2201" location="C:\Users\rober\Downloads\eclipse-escet-v5.0-win32.win32.x86_64\eclipse-escet-v5.0\workspace\CIFBenchmarks-5.0.0.v20241003-060816\sudoku\sudoku.cif"/>
              <type xmi:type="types:BoolType" xmi:id="485">
                <position xmi:type="position:Position" xmi:id="486" source="File &quot;C:\Users\rober\Downloads\eclipse-escet-v5.0-win32.win32.x86_64\eclipse-escet-v5.0\workspace\CIFBenchmarks-5.0.0.v20241003-060816\sudoku\sudoku.cif&quot;: " startLine="73" endOffset="2201" startColumn="20" endLine="73" endColumn="20" startOffset="2201" location="C:\Users\rober\Downloads\eclipse-escet-v5.0-win32.win32.x86_64\eclipse-escet-v5.0\workspace\CIFBenchmarks-5.0.0.v20241003-060816\sudoku\sudoku.cif"/>
              </type>
              <left xmi:type="expressions:CompInstWrapExpression" xmi:id="487" instantiation="1085">
                <position xmi:type="position:Position" xmi:id="488" source="File &quot;C:\Users\rober\Downloads\eclipse-escet-v5.0-win32.win32.x86_64\eclipse-escet-v5.0\workspace\CIFBenchmarks-5.0.0.v20241003-060816\sudoku\sudoku.cif&quot;: " startLine="73" endOffset="2199" startColumn="10" endLine="73" endColumn="18" startOffset="2191" location="C:\Users\rober\Downloads\eclipse-escet-v5.0-win32.win32.x86_64\eclipse-escet-v5.0\workspace\CIFBenchmarks-5.0.0.v20241003-060816\sudoku\sudoku.cif"/>
                <type xmi:type="types:IntType" xmi:id="489" lower="0" upper="4">
                  <position xmi:type="position:Position" xmi:id="490" source="File &quot;C:\Users\rober\Downloads\eclipse-escet-v5.0-win32.win32.x86_64\eclipse-escet-v5.0\workspace\CIFBenchmarks-5.0.0.v20241003-060816\sudoku\sudoku.cif&quot;: " startLine="73" endOffset="2199" startColumn="10" endLine="73" endColumn="18" startOffset="2191" location="C:\Users\rober\Downloads\eclipse-escet-v5.0-win32.win32.x86_64\eclipse-escet-v5.0\workspace\CIFBenchmarks-5.0.0.v20241003-060816\sudoku\sudoku.cif"/>
                </type>
                <reference xmi:type="expressions:DiscVariableExpression" xmi:id="491" variable="15">
                  <position xmi:type="position:Position" xmi:id="492" source="File &quot;C:\Users\rober\Downloads\eclipse-escet-v5.0-win32.win32.x86_64\eclipse-escet-v5.0\workspace\CIFBenchmarks-5.0.0.v20241003-060816\sudoku\sudoku.cif&quot;: " startLine="73" endOffset="2199" startColumn="10" endLine="73" endColumn="18" startOffset="2191" location="C:\Users\rober\Downloads\eclipse-escet-v5.0-win32.win32.x86_64\eclipse-escet-v5.0\workspace\CIFBenchmarks-5.0.0.v20241003-060816\sudoku\sudoku.cif"/>
                  <type xmi:type="types:IntType" xmi:id="493" lower="0" upper="4">
                    <position xmi:type="position:Position" xmi:id="494" source="File &quot;C:\Users\rober\Downloads\eclipse-escet-v5.0-win32.win32.x86_64\eclipse-escet-v5.0\workspace\CIFBenchmarks-5.0.0.v20241003-060816\sudoku\sudoku.cif&quot;: " startLine="73" endOffset="2199" startColumn="10" endLine="73" endColumn="18" startOffset="2191" location="C:\Users\rober\Downloads\eclipse-escet-v5.0-win32.win32.x86_64\eclipse-escet-v5.0\workspace\CIFBenchmarks-5.0.0.v20241003-060816\sudoku\sudoku.cif"/>
                  </type>
                </reference>
              </left>
              <right xmi:type="expressions:AlgVariableExpression" xmi:id="495" variable="1081">
                <position xmi:type="position:Position" xmi:id="496" source="File &quot;C:\Users\rober\Downloads\eclipse-escet-v5.0-win32.win32.x86_64\eclipse-escet-v5.0\workspace\CIFBenchmarks-5.0.0.v20241003-060816\sudoku\sudoku.cif&quot;: " startLine="73" endOffset="2207" startColumn="22" endLine="73" endColumn="26" startOffset="2203" location="C:\Users\rober\Downloads\eclipse-escet-v5.0-win32.win32.x86_64\eclipse-escet-v5.0\workspace\CIFBenchmarks-5.0.0.v20241003-060816\sudoku\sudoku.cif"/>
                <type xmi:type="types:IntType" xmi:id="497">
                  <position xmi:type="position:Position" xmi:id="498" source="File &quot;C:\Users\rober\Downloads\eclipse-escet-v5.0-win32.win32.x86_64\eclipse-escet-v5.0\workspace\CIFBenchmarks-5.0.0.v20241003-060816\sudoku\sudoku.cif&quot;: " startLine="73" endOffset="2207" startColumn="22" endLine="73" endColumn="26" startOffset="2203" location="C:\Users\rober\Downloads\eclipse-escet-v5.0-win32.win32.x86_64\eclipse-escet-v5.0\workspace\CIFBenchmarks-5.0.0.v20241003-060816\sudoku\sudoku.cif"/>
                </type>
              </right>
            </left>
            <right xmi:type="expressions:BinaryExpression" xmi:id="499" operator="Equal">
              <position xmi:type="position:Position" xmi:id="500" source="File &quot;C:\Users\rober\Downloads\eclipse-escet-v5.0-win32.win32.x86_64\eclipse-escet-v5.0\workspace\CIFBenchmarks-5.0.0.v20241003-060816\sudoku\sudoku.cif&quot;: " startLine="73" endOffset="2222" startColumn="41" endLine="73" endColumn="41" startOffset="2222" location="C:\Users\rober\Downloads\eclipse-escet-v5.0-win32.win32.x86_64\eclipse-escet-v5.0\workspace\CIFBenchmarks-5.0.0.v20241003-060816\sudoku\sudoku.cif"/>
              <type xmi:type="types:BoolType" xmi:id="501">
                <position xmi:type="position:Position" xmi:id="502" source="File &quot;C:\Users\rober\Downloads\eclipse-escet-v5.0-win32.win32.x86_64\eclipse-escet-v5.0\workspace\CIFBenchmarks-5.0.0.v20241003-060816\sudoku\sudoku.cif&quot;: " startLine="73" endOffset="2222" startColumn="41" endLine="73" endColumn="41" startOffset="2222" location="C:\Users\rober\Downloads\eclipse-escet-v5.0-win32.win32.x86_64\eclipse-escet-v5.0\workspace\CIFBenchmarks-5.0.0.v20241003-060816\sudoku\sudoku.cif"/>
              </type>
              <left xmi:type="expressions:CompInstWrapExpression" xmi:id="503" instantiation="1101">
                <position xmi:type="position:Position" xmi:id="504" source="File &quot;C:\Users\rober\Downloads\eclipse-escet-v5.0-win32.win32.x86_64\eclipse-escet-v5.0\workspace\CIFBenchmarks-5.0.0.v20241003-060816\sudoku\sudoku.cif&quot;: " startLine="73" endOffset="2220" startColumn="31" endLine="73" endColumn="39" startOffset="2212" location="C:\Users\rober\Downloads\eclipse-escet-v5.0-win32.win32.x86_64\eclipse-escet-v5.0\workspace\CIFBenchmarks-5.0.0.v20241003-060816\sudoku\sudoku.cif"/>
                <type xmi:type="types:IntType" xmi:id="505" lower="0" upper="4">
                  <position xmi:type="position:Position" xmi:id="506" source="File &quot;C:\Users\rober\Downloads\eclipse-escet-v5.0-win32.win32.x86_64\eclipse-escet-v5.0\workspace\CIFBenchmarks-5.0.0.v20241003-060816\sudoku\sudoku.cif&quot;: " startLine="73" endOffset="2220" startColumn="31" endLine="73" endColumn="39" startOffset="2212" location="C:\Users\rober\Downloads\eclipse-escet-v5.0-win32.win32.x86_64\eclipse-escet-v5.0\workspace\CIFBenchmarks-5.0.0.v20241003-060816\sudoku\sudoku.cif"/>
                </type>
                <reference xmi:type="expressions:DiscVariableExpression" xmi:id="507" variable="15">
                  <position xmi:type="position:Position" xmi:id="508" source="File &quot;C:\Users\rober\Downloads\eclipse-escet-v5.0-win32.win32.x86_64\eclipse-escet-v5.0\workspace\CIFBenchmarks-5.0.0.v20241003-060816\sudoku\sudoku.cif&quot;: " startLine="73" endOffset="2220" startColumn="31" endLine="73" endColumn="39" startOffset="2212" location="C:\Users\rober\Downloads\eclipse-escet-v5.0-win32.win32.x86_64\eclipse-escet-v5.0\workspace\CIFBenchmarks-5.0.0.v20241003-060816\sudoku\sudoku.cif"/>
                  <type xmi:type="types:IntType" xmi:id="509" lower="0" upper="4">
                    <position xmi:type="position:Position" xmi:id="510" source="File &quot;C:\Users\rober\Downloads\eclipse-escet-v5.0-win32.win32.x86_64\eclipse-escet-v5.0\workspace\CIFBenchmarks-5.0.0.v20241003-060816\sudoku\sudoku.cif&quot;: " startLine="73" endOffset="2220" startColumn="31" endLine="73" endColumn="39" startOffset="2212" location="C:\Users\rober\Downloads\eclipse-escet-v5.0-win32.win32.x86_64\eclipse-escet-v5.0\workspace\CIFBenchmarks-5.0.0.v20241003-060816\sudoku\sudoku.cif"/>
                  </type>
                </reference>
              </left>
              <right xmi:type="expressions:AlgVariableExpression" xmi:id="511" variable="1081">
                <position xmi:type="position:Position" xmi:id="512" source="File &quot;C:\Users\rober\Downloads\eclipse-escet-v5.0-win32.win32.x86_64\eclipse-escet-v5.0\workspace\CIFBenchmarks-5.0.0.v20241003-060816\sudoku\sudoku.cif&quot;: " startLine="73" endOffset="2228" startColumn="43" endLine="73" endColumn="47" startOffset="2224" location="C:\Users\rober\Downloads\eclipse-escet-v5.0-win32.win32.x86_64\eclipse-escet-v5.0\workspace\CIFBenchmarks-5.0.0.v20241003-060816\sudoku\sudoku.cif"/>
                <type xmi:type="types:IntType" xmi:id="513">
                  <position xmi:type="position:Position" xmi:id="514" source="File &quot;C:\Users\rober\Downloads\eclipse-escet-v5.0-win32.win32.x86_64\eclipse-escet-v5.0\workspace\CIFBenchmarks-5.0.0.v20241003-060816\sudoku\sudoku.cif&quot;: " startLine="73" endOffset="2228" startColumn="43" endLine="73" endColumn="47" startOffset="2224" location="C:\Users\rober\Downloads\eclipse-escet-v5.0-win32.win32.x86_64\eclipse-escet-v5.0\workspace\CIFBenchmarks-5.0.0.v20241003-060816\sudoku\sudoku.cif"/>
                </type>
              </right>
            </right>
          </left>
          <right xmi:type="expressions:BinaryExpression" xmi:id="515" operator="Equal">
            <position xmi:type="position:Position" xmi:id="516" source="File &quot;C:\Users\rober\Downloads\eclipse-escet-v5.0-win32.win32.x86_64\eclipse-escet-v5.0\workspace\CIFBenchmarks-5.0.0.v20241003-060816\sudoku\sudoku.cif&quot;: " startLine="73" endOffset="2243" startColumn="62" endLine="73" endColumn="62" startOffset="2243" location="C:\Users\rober\Downloads\eclipse-escet-v5.0-win32.win32.x86_64\eclipse-escet-v5.0\workspace\CIFBenchmarks-5.0.0.v20241003-060816\sudoku\sudoku.cif"/>
            <type xmi:type="types:BoolType" xmi:id="517">
              <position xmi:type="position:Position" xmi:id="518" source="File &quot;C:\Users\rober\Downloads\eclipse-escet-v5.0-win32.win32.x86_64\eclipse-escet-v5.0\workspace\CIFBenchmarks-5.0.0.v20241003-060816\sudoku\sudoku.cif&quot;: " startLine="73" endOffset="2243" startColumn="62" endLine="73" endColumn="62" startOffset="2243" location="C:\Users\rober\Downloads\eclipse-escet-v5.0-win32.win32.x86_64\eclipse-escet-v5.0\workspace\CIFBenchmarks-5.0.0.v20241003-060816\sudoku\sudoku.cif"/>
            </type>
            <left xmi:type="expressions:CompInstWrapExpression" xmi:id="519" instantiation="1117">
              <position xmi:type="position:Position" xmi:id="520" source="File &quot;C:\Users\rober\Downloads\eclipse-escet-v5.0-win32.win32.x86_64\eclipse-escet-v5.0\workspace\CIFBenchmarks-5.0.0.v20241003-060816\sudoku\sudoku.cif&quot;: " startLine="73" endOffset="2241" startColumn="52" endLine="73" endColumn="60" startOffset="2233" location="C:\Users\rober\Downloads\eclipse-escet-v5.0-win32.win32.x86_64\eclipse-escet-v5.0\workspace\CIFBenchmarks-5.0.0.v20241003-060816\sudoku\sudoku.cif"/>
              <type xmi:type="types:IntType" xmi:id="521" lower="0" upper="4">
                <position xmi:type="position:Position" xmi:id="522" source="File &quot;C:\Users\rober\Downloads\eclipse-escet-v5.0-win32.win32.x86_64\eclipse-escet-v5.0\workspace\CIFBenchmarks-5.0.0.v20241003-060816\sudoku\sudoku.cif&quot;: " startLine="73" endOffset="2241" startColumn="52" endLine="73" endColumn="60" startOffset="2233" location="C:\Users\rober\Downloads\eclipse-escet-v5.0-win32.win32.x86_64\eclipse-escet-v5.0\workspace\CIFBenchmarks-5.0.0.v20241003-060816\sudoku\sudoku.cif"/>
              </type>
              <reference xmi:type="expressions:DiscVariableExpression" xmi:id="523" variable="15">
                <position xmi:type="position:Position" xmi:id="524" source="File &quot;C:\Users\rober\Downloads\eclipse-escet-v5.0-win32.win32.x86_64\eclipse-escet-v5.0\workspace\CIFBenchmarks-5.0.0.v20241003-060816\sudoku\sudoku.cif&quot;: " startLine="73" endOffset="2241" startColumn="52" endLine="73" endColumn="60" startOffset="2233" location="C:\Users\rober\Downloads\eclipse-escet-v5.0-win32.win32.x86_64\eclipse-escet-v5.0\workspace\CIFBenchmarks-5.0.0.v20241003-060816\sudoku\sudoku.cif"/>
                <type xmi:type="types:IntType" xmi:id="525" lower="0" upper="4">
                  <position xmi:type="position:Position" xmi:id="526" source="File &quot;C:\Users\rober\Downloads\eclipse-escet-v5.0-win32.win32.x86_64\eclipse-escet-v5.0\workspace\CIFBenchmarks-5.0.0.v20241003-060816\sudoku\sudoku.cif&quot;: " startLine="73" endOffset="2241" startColumn="52" endLine="73" endColumn="60" startOffset="2233" location="C:\Users\rober\Downloads\eclipse-escet-v5.0-win32.win32.x86_64\eclipse-escet-v5.0\workspace\CIFBenchmarks-5.0.0.v20241003-060816\sudoku\sudoku.cif"/>
                </type>
              </reference>
            </left>
            <right xmi:type="expressions:AlgVariableExpression" xmi:id="527" variable="1081">
              <position xmi:type="position:Position" xmi:id="528" source="File &quot;C:\Users\rober\Downloads\eclipse-escet-v5.0-win32.win32.x86_64\eclipse-escet-v5.0\workspace\CIFBenchmarks-5.0.0.v20241003-060816\sudoku\sudoku.cif&quot;: " startLine="73" endOffset="2249" startColumn="64" endLine="73" endColumn="68" startOffset="2245" location="C:\Users\rober\Downloads\eclipse-escet-v5.0-win32.win32.x86_64\eclipse-escet-v5.0\workspace\CIFBenchmarks-5.0.0.v20241003-060816\sudoku\sudoku.cif"/>
              <type xmi:type="types:IntType" xmi:id="529">
                <position xmi:type="position:Position" xmi:id="530" source="File &quot;C:\Users\rober\Downloads\eclipse-escet-v5.0-win32.win32.x86_64\eclipse-escet-v5.0\workspace\CIFBenchmarks-5.0.0.v20241003-060816\sudoku\sudoku.cif&quot;: " startLine="73" endOffset="2249" startColumn="64" endLine="73" endColumn="68" startOffset="2245" location="C:\Users\rober\Downloads\eclipse-escet-v5.0-win32.win32.x86_64\eclipse-escet-v5.0\workspace\CIFBenchmarks-5.0.0.v20241003-060816\sudoku\sudoku.cif"/>
              </type>
            </right>
          </right>
        </left>
        <right xmi:type="expressions:BinaryExpression" xmi:id="531" operator="Equal">
          <position xmi:type="position:Position" xmi:id="532" source="File &quot;C:\Users\rober\Downloads\eclipse-escet-v5.0-win32.win32.x86_64\eclipse-escet-v5.0\workspace\CIFBenchmarks-5.0.0.v20241003-060816\sudoku\sudoku.cif&quot;: " startLine="73" endOffset="2264" startColumn="83" endLine="73" endColumn="83" startOffset="2264" location="C:\Users\rober\Downloads\eclipse-escet-v5.0-win32.win32.x86_64\eclipse-escet-v5.0\workspace\CIFBenchmarks-5.0.0.v20241003-060816\sudoku\sudoku.cif"/>
          <type xmi:type="types:BoolType" xmi:id="533">
            <position xmi:type="position:Position" xmi:id="534" source="File &quot;C:\Users\rober\Downloads\eclipse-escet-v5.0-win32.win32.x86_64\eclipse-escet-v5.0\workspace\CIFBenchmarks-5.0.0.v20241003-060816\sudoku\sudoku.cif&quot;: " startLine="73" endOffset="2264" startColumn="83" endLine="73" endColumn="83" startOffset="2264" location="C:\Users\rober\Downloads\eclipse-escet-v5.0-win32.win32.x86_64\eclipse-escet-v5.0\workspace\CIFBenchmarks-5.0.0.v20241003-060816\sudoku\sudoku.cif"/>
          </type>
          <left xmi:type="expressions:CompInstWrapExpression" xmi:id="535" instantiation="1133">
            <position xmi:type="position:Position" xmi:id="536" source="File &quot;C:\Users\rober\Downloads\eclipse-escet-v5.0-win32.win32.x86_64\eclipse-escet-v5.0\workspace\CIFBenchmarks-5.0.0.v20241003-060816\sudoku\sudoku.cif&quot;: " startLine="73" endOffset="2262" startColumn="73" endLine="73" endColumn="81" startOffset="2254" location="C:\Users\rober\Downloads\eclipse-escet-v5.0-win32.win32.x86_64\eclipse-escet-v5.0\workspace\CIFBenchmarks-5.0.0.v20241003-060816\sudoku\sudoku.cif"/>
            <type xmi:type="types:IntType" xmi:id="537" lower="0" upper="4">
              <position xmi:type="position:Position" xmi:id="538" source="File &quot;C:\Users\rober\Downloads\eclipse-escet-v5.0-win32.win32.x86_64\eclipse-escet-v5.0\workspace\CIFBenchmarks-5.0.0.v20241003-060816\sudoku\sudoku.cif&quot;: " startLine="73" endOffset="2262" startColumn="73" endLine="73" endColumn="81" startOffset="2254" location="C:\Users\rober\Downloads\eclipse-escet-v5.0-win32.win32.x86_64\eclipse-escet-v5.0\workspace\CIFBenchmarks-5.0.0.v20241003-060816\sudoku\sudoku.cif"/>
            </type>
            <reference xmi:type="expressions:DiscVariableExpression" xmi:id="539" variable="15">
              <position xmi:type="position:Position" xmi:id="540" source="File &quot;C:\Users\rober\Downloads\eclipse-escet-v5.0-win32.win32.x86_64\eclipse-escet-v5.0\workspace\CIFBenchmarks-5.0.0.v20241003-060816\sudoku\sudoku.cif&quot;: " startLine="73" endOffset="2262" startColumn="73" endLine="73" endColumn="81" startOffset="2254" location="C:\Users\rober\Downloads\eclipse-escet-v5.0-win32.win32.x86_64\eclipse-escet-v5.0\workspace\CIFBenchmarks-5.0.0.v20241003-060816\sudoku\sudoku.cif"/>
              <type xmi:type="types:IntType" xmi:id="541" lower="0" upper="4">
                <position xmi:type="position:Position" xmi:id="542" source="File &quot;C:\Users\rober\Downloads\eclipse-escet-v5.0-win32.win32.x86_64\eclipse-escet-v5.0\workspace\CIFBenchmarks-5.0.0.v20241003-060816\sudoku\sudoku.cif&quot;: " startLine="73" endOffset="2262" startColumn="73" endLine="73" endColumn="81" startOffset="2254" location="C:\Users\rober\Downloads\eclipse-escet-v5.0-win32.win32.x86_64\eclipse-escet-v5.0\workspace\CIFBenchmarks-5.0.0.v20241003-060816\sudoku\sudoku.cif"/>
              </type>
            </reference>
          </left>
          <right xmi:type="expressions:AlgVariableExpression" xmi:id="543" variable="1081">
            <position xmi:type="position:Position" xmi:id="544" source="File &quot;C:\Users\rober\Downloads\eclipse-escet-v5.0-win32.win32.x86_64\eclipse-escet-v5.0\workspace\CIFBenchmarks-5.0.0.v20241003-060816\sudoku\sudoku.cif&quot;: " startLine="73" endOffset="2270" startColumn="85" endLine="73" endColumn="89" startOffset="2266" location="C:\Users\rober\Downloads\eclipse-escet-v5.0-win32.win32.x86_64\eclipse-escet-v5.0\workspace\CIFBenchmarks-5.0.0.v20241003-060816\sudoku\sudoku.cif"/>
            <type xmi:type="types:IntType" xmi:id="545">
              <position xmi:type="position:Position" xmi:id="546" source="File &quot;C:\Users\rober\Downloads\eclipse-escet-v5.0-win32.win32.x86_64\eclipse-escet-v5.0\workspace\CIFBenchmarks-5.0.0.v20241003-060816\sudoku\sudoku.cif&quot;: " startLine="73" endOffset="2270" startColumn="85" endLine="73" endColumn="89" startOffset="2266" location="C:\Users\rober\Downloads\eclipse-escet-v5.0-win32.win32.x86_64\eclipse-escet-v5.0\workspace\CIFBenchmarks-5.0.0.v20241003-060816\sudoku\sudoku.cif"/>
            </type>
          </right>
        </right>
      </markeds>
      <markeds xmi:type="expressions:BinaryExpression" xmi:id="547">
        <position xmi:type="position:Position" xmi:id="548" source="File &quot;C:\Users\rober\Downloads\eclipse-escet-v5.0-win32.win32.x86_64\eclipse-escet-v5.0\workspace\CIFBenchmarks-5.0.0.v20241003-060816\sudoku\sudoku.cif&quot;: " startLine="74" endOffset="2343" startColumn="70" endLine="74" endColumn="71" startOffset="2342" location="C:\Users\rober\Downloads\eclipse-escet-v5.0-win32.win32.x86_64\eclipse-escet-v5.0\workspace\CIFBenchmarks-5.0.0.v20241003-060816\sudoku\sudoku.cif"/>
        <type xmi:type="types:BoolType" xmi:id="549">
          <position xmi:type="position:Position" xmi:id="550" source="File &quot;C:\Users\rober\Downloads\eclipse-escet-v5.0-win32.win32.x86_64\eclipse-escet-v5.0\workspace\CIFBenchmarks-5.0.0.v20241003-060816\sudoku\sudoku.cif&quot;: " startLine="74" endOffset="2343" startColumn="70" endLine="74" endColumn="71" startOffset="2342" location="C:\Users\rober\Downloads\eclipse-escet-v5.0-win32.win32.x86_64\eclipse-escet-v5.0\workspace\CIFBenchmarks-5.0.0.v20241003-060816\sudoku\sudoku.cif"/>
        </type>
        <left xmi:type="expressions:BinaryExpression" xmi:id="551">
          <position xmi:type="position:Position" xmi:id="552" source="File &quot;C:\Users\rober\Downloads\eclipse-escet-v5.0-win32.win32.x86_64\eclipse-escet-v5.0\workspace\CIFBenchmarks-5.0.0.v20241003-060816\sudoku\sudoku.cif&quot;: " startLine="74" endOffset="2322" startColumn="49" endLine="74" endColumn="50" startOffset="2321" location="C:\Users\rober\Downloads\eclipse-escet-v5.0-win32.win32.x86_64\eclipse-escet-v5.0\workspace\CIFBenchmarks-5.0.0.v20241003-060816\sudoku\sudoku.cif"/>
          <type xmi:type="types:BoolType" xmi:id="553">
            <position xmi:type="position:Position" xmi:id="554" source="File &quot;C:\Users\rober\Downloads\eclipse-escet-v5.0-win32.win32.x86_64\eclipse-escet-v5.0\workspace\CIFBenchmarks-5.0.0.v20241003-060816\sudoku\sudoku.cif&quot;: " startLine="74" endOffset="2322" startColumn="49" endLine="74" endColumn="50" startOffset="2321" location="C:\Users\rober\Downloads\eclipse-escet-v5.0-win32.win32.x86_64\eclipse-escet-v5.0\workspace\CIFBenchmarks-5.0.0.v20241003-060816\sudoku\sudoku.cif"/>
          </type>
          <left xmi:type="expressions:BinaryExpression" xmi:id="555">
            <position xmi:type="position:Position" xmi:id="556" source="File &quot;C:\Users\rober\Downloads\eclipse-escet-v5.0-win32.win32.x86_64\eclipse-escet-v5.0\workspace\CIFBenchmarks-5.0.0.v20241003-060816\sudoku\sudoku.cif&quot;: " startLine="74" endOffset="2301" startColumn="28" endLine="74" endColumn="29" startOffset="2300" location="C:\Users\rober\Downloads\eclipse-escet-v5.0-win32.win32.x86_64\eclipse-escet-v5.0\workspace\CIFBenchmarks-5.0.0.v20241003-060816\sudoku\sudoku.cif"/>
            <type xmi:type="types:BoolType" xmi:id="557">
              <position xmi:type="position:Position" xmi:id="558" source="File &quot;C:\Users\rober\Downloads\eclipse-escet-v5.0-win32.win32.x86_64\eclipse-escet-v5.0\workspace\CIFBenchmarks-5.0.0.v20241003-060816\sudoku\sudoku.cif&quot;: " startLine="74" endOffset="2301" startColumn="28" endLine="74" endColumn="29" startOffset="2300" location="C:\Users\rober\Downloads\eclipse-escet-v5.0-win32.win32.x86_64\eclipse-escet-v5.0\workspace\CIFBenchmarks-5.0.0.v20241003-060816\sudoku\sudoku.cif"/>
            </type>
            <left xmi:type="expressions:BinaryExpression" xmi:id="559" operator="Equal">
              <position xmi:type="position:Position" xmi:id="560" source="File &quot;C:\Users\rober\Downloads\eclipse-escet-v5.0-win32.win32.x86_64\eclipse-escet-v5.0\workspace\CIFBenchmarks-5.0.0.v20241003-060816\sudoku\sudoku.cif&quot;: " startLine="74" endOffset="2292" startColumn="20" endLine="74" endColumn="20" startOffset="2292" location="C:\Users\rober\Downloads\eclipse-escet-v5.0-win32.win32.x86_64\eclipse-escet-v5.0\workspace\CIFBenchmarks-5.0.0.v20241003-060816\sudoku\sudoku.cif"/>
              <type xmi:type="types:BoolType" xmi:id="561">
                <position xmi:type="position:Position" xmi:id="562" source="File &quot;C:\Users\rober\Downloads\eclipse-escet-v5.0-win32.win32.x86_64\eclipse-escet-v5.0\workspace\CIFBenchmarks-5.0.0.v20241003-060816\sudoku\sudoku.cif&quot;: " startLine="74" endOffset="2292" startColumn="20" endLine="74" endColumn="20" startOffset="2292" location="C:\Users\rober\Downloads\eclipse-escet-v5.0-win32.win32.x86_64\eclipse-escet-v5.0\workspace\CIFBenchmarks-5.0.0.v20241003-060816\sudoku\sudoku.cif"/>
              </type>
              <left xmi:type="expressions:CompInstWrapExpression" xmi:id="563" instantiation="1089">
                <position xmi:type="position:Position" xmi:id="564" source="File &quot;C:\Users\rober\Downloads\eclipse-escet-v5.0-win32.win32.x86_64\eclipse-escet-v5.0\workspace\CIFBenchmarks-5.0.0.v20241003-060816\sudoku\sudoku.cif&quot;: " startLine="74" endOffset="2290" startColumn="10" endLine="74" endColumn="18" startOffset="2282" location="C:\Users\rober\Downloads\eclipse-escet-v5.0-win32.win32.x86_64\eclipse-escet-v5.0\workspace\CIFBenchmarks-5.0.0.v20241003-060816\sudoku\sudoku.cif"/>
                <type xmi:type="types:IntType" xmi:id="565" lower="0" upper="4">
                  <position xmi:type="position:Position" xmi:id="566" source="File &quot;C:\Users\rober\Downloads\eclipse-escet-v5.0-win32.win32.x86_64\eclipse-escet-v5.0\workspace\CIFBenchmarks-5.0.0.v20241003-060816\sudoku\sudoku.cif&quot;: " startLine="74" endOffset="2290" startColumn="10" endLine="74" endColumn="18" startOffset="2282" location="C:\Users\rober\Downloads\eclipse-escet-v5.0-win32.win32.x86_64\eclipse-escet-v5.0\workspace\CIFBenchmarks-5.0.0.v20241003-060816\sudoku\sudoku.cif"/>
                </type>
                <reference xmi:type="expressions:DiscVariableExpression" xmi:id="567" variable="15">
                  <position xmi:type="position:Position" xmi:id="568" source="File &quot;C:\Users\rober\Downloads\eclipse-escet-v5.0-win32.win32.x86_64\eclipse-escet-v5.0\workspace\CIFBenchmarks-5.0.0.v20241003-060816\sudoku\sudoku.cif&quot;: " startLine="74" endOffset="2290" startColumn="10" endLine="74" endColumn="18" startOffset="2282" location="C:\Users\rober\Downloads\eclipse-escet-v5.0-win32.win32.x86_64\eclipse-escet-v5.0\workspace\CIFBenchmarks-5.0.0.v20241003-060816\sudoku\sudoku.cif"/>
                  <type xmi:type="types:IntType" xmi:id="569" lower="0" upper="4">
                    <position xmi:type="position:Position" xmi:id="570" source="File &quot;C:\Users\rober\Downloads\eclipse-escet-v5.0-win32.win32.x86_64\eclipse-escet-v5.0\workspace\CIFBenchmarks-5.0.0.v20241003-060816\sudoku\sudoku.cif&quot;: " startLine="74" endOffset="2290" startColumn="10" endLine="74" endColumn="18" startOffset="2282" location="C:\Users\rober\Downloads\eclipse-escet-v5.0-win32.win32.x86_64\eclipse-escet-v5.0\workspace\CIFBenchmarks-5.0.0.v20241003-060816\sudoku\sudoku.cif"/>
                  </type>
                </reference>
              </left>
              <right xmi:type="expressions:AlgVariableExpression" xmi:id="571" variable="1081">
                <position xmi:type="position:Position" xmi:id="572" source="File &quot;C:\Users\rober\Downloads\eclipse-escet-v5.0-win32.win32.x86_64\eclipse-escet-v5.0\workspace\CIFBenchmarks-5.0.0.v20241003-060816\sudoku\sudoku.cif&quot;: " startLine="74" endOffset="2298" startColumn="22" endLine="74" endColumn="26" startOffset="2294" location="C:\Users\rober\Downloads\eclipse-escet-v5.0-win32.win32.x86_64\eclipse-escet-v5.0\workspace\CIFBenchmarks-5.0.0.v20241003-060816\sudoku\sudoku.cif"/>
                <type xmi:type="types:IntType" xmi:id="573">
                  <position xmi:type="position:Position" xmi:id="574" source="File &quot;C:\Users\rober\Downloads\eclipse-escet-v5.0-win32.win32.x86_64\eclipse-escet-v5.0\workspace\CIFBenchmarks-5.0.0.v20241003-060816\sudoku\sudoku.cif&quot;: " startLine="74" endOffset="2298" startColumn="22" endLine="74" endColumn="26" startOffset="2294" location="C:\Users\rober\Downloads\eclipse-escet-v5.0-win32.win32.x86_64\eclipse-escet-v5.0\workspace\CIFBenchmarks-5.0.0.v20241003-060816\sudoku\sudoku.cif"/>
                </type>
              </right>
            </left>
            <right xmi:type="expressions:BinaryExpression" xmi:id="575" operator="Equal">
              <position xmi:type="position:Position" xmi:id="576" source="File &quot;C:\Users\rober\Downloads\eclipse-escet-v5.0-win32.win32.x86_64\eclipse-escet-v5.0\workspace\CIFBenchmarks-5.0.0.v20241003-060816\sudoku\sudoku.cif&quot;: " startLine="74" endOffset="2313" startColumn="41" endLine="74" endColumn="41" startOffset="2313" location="C:\Users\rober\Downloads\eclipse-escet-v5.0-win32.win32.x86_64\eclipse-escet-v5.0\workspace\CIFBenchmarks-5.0.0.v20241003-060816\sudoku\sudoku.cif"/>
              <type xmi:type="types:BoolType" xmi:id="577">
                <position xmi:type="position:Position" xmi:id="578" source="File &quot;C:\Users\rober\Downloads\eclipse-escet-v5.0-win32.win32.x86_64\eclipse-escet-v5.0\workspace\CIFBenchmarks-5.0.0.v20241003-060816\sudoku\sudoku.cif&quot;: " startLine="74" endOffset="2313" startColumn="41" endLine="74" endColumn="41" startOffset="2313" location="C:\Users\rober\Downloads\eclipse-escet-v5.0-win32.win32.x86_64\eclipse-escet-v5.0\workspace\CIFBenchmarks-5.0.0.v20241003-060816\sudoku\sudoku.cif"/>
              </type>
              <left xmi:type="expressions:CompInstWrapExpression" xmi:id="579" instantiation="1105">
                <position xmi:type="position:Position" xmi:id="580" source="File &quot;C:\Users\rober\Downloads\eclipse-escet-v5.0-win32.win32.x86_64\eclipse-escet-v5.0\workspace\CIFBenchmarks-5.0.0.v20241003-060816\sudoku\sudoku.cif&quot;: " startLine="74" endOffset="2311" startColumn="31" endLine="74" endColumn="39" startOffset="2303" location="C:\Users\rober\Downloads\eclipse-escet-v5.0-win32.win32.x86_64\eclipse-escet-v5.0\workspace\CIFBenchmarks-5.0.0.v20241003-060816\sudoku\sudoku.cif"/>
                <type xmi:type="types:IntType" xmi:id="581" lower="0" upper="4">
                  <position xmi:type="position:Position" xmi:id="582" source="File &quot;C:\Users\rober\Downloads\eclipse-escet-v5.0-win32.win32.x86_64\eclipse-escet-v5.0\workspace\CIFBenchmarks-5.0.0.v20241003-060816\sudoku\sudoku.cif&quot;: " startLine="74" endOffset="2311" startColumn="31" endLine="74" endColumn="39" startOffset="2303" location="C:\Users\rober\Downloads\eclipse-escet-v5.0-win32.win32.x86_64\eclipse-escet-v5.0\workspace\CIFBenchmarks-5.0.0.v20241003-060816\sudoku\sudoku.cif"/>
                </type>
                <reference xmi:type="expressions:DiscVariableExpression" xmi:id="583" variable="15">
                  <position xmi:type="position:Position" xmi:id="584" source="File &quot;C:\Users\rober\Downloads\eclipse-escet-v5.0-win32.win32.x86_64\eclipse-escet-v5.0\workspace\CIFBenchmarks-5.0.0.v20241003-060816\sudoku\sudoku.cif&quot;: " startLine="74" endOffset="2311" startColumn="31" endLine="74" endColumn="39" startOffset="2303" location="C:\Users\rober\Downloads\eclipse-escet-v5.0-win32.win32.x86_64\eclipse-escet-v5.0\workspace\CIFBenchmarks-5.0.0.v20241003-060816\sudoku\sudoku.cif"/>
                  <type xmi:type="types:IntType" xmi:id="585" lower="0" upper="4">
                    <position xmi:type="position:Position" xmi:id="586" source="File &quot;C:\Users\rober\Downloads\eclipse-escet-v5.0-win32.win32.x86_64\eclipse-escet-v5.0\workspace\CIFBenchmarks-5.0.0.v20241003-060816\sudoku\sudoku.cif&quot;: " startLine="74" endOffset="2311" startColumn="31" endLine="74" endColumn="39" startOffset="2303" location="C:\Users\rober\Downloads\eclipse-escet-v5.0-win32.win32.x86_64\eclipse-escet-v5.0\workspace\CIFBenchmarks-5.0.0.v20241003-060816\sudoku\sudoku.cif"/>
                  </type>
                </reference>
              </left>
              <right xmi:type="expressions:AlgVariableExpression" xmi:id="587" variable="1081">
                <position xmi:type="position:Position" xmi:id="588" source="File &quot;C:\Users\rober\Downloads\eclipse-escet-v5.0-win32.win32.x86_64\eclipse-escet-v5.0\workspace\CIFBenchmarks-5.0.0.v20241003-060816\sudoku\sudoku.cif&quot;: " startLine="74" endOffset="2319" startColumn="43" endLine="74" endColumn="47" startOffset="2315" location="C:\Users\rober\Downloads\eclipse-escet-v5.0-win32.win32.x86_64\eclipse-escet-v5.0\workspace\CIFBenchmarks-5.0.0.v20241003-060816\sudoku\sudoku.cif"/>
                <type xmi:type="types:IntType" xmi:id="589">
                  <position xmi:type="position:Position" xmi:id="590" source="File &quot;C:\Users\rober\Downloads\eclipse-escet-v5.0-win32.win32.x86_64\eclipse-escet-v5.0\workspace\CIFBenchmarks-5.0.0.v20241003-060816\sudoku\sudoku.cif&quot;: " startLine="74" endOffset="2319" startColumn="43" endLine="74" endColumn="47" startOffset="2315" location="C:\Users\rober\Downloads\eclipse-escet-v5.0-win32.win32.x86_64\eclipse-escet-v5.0\workspace\CIFBenchmarks-5.0.0.v20241003-060816\sudoku\sudoku.cif"/>
                </type>
              </right>
            </right>
          </left>
          <right xmi:type="expressions:BinaryExpression" xmi:id="591" operator="Equal">
            <position xmi:type="position:Position" xmi:id="592" source="File &quot;C:\Users\rober\Downloads\eclipse-escet-v5.0-win32.win32.x86_64\eclipse-escet-v5.0\workspace\CIFBenchmarks-5.0.0.v20241003-060816\sudoku\sudoku.cif&quot;: " startLine="74" endOffset="2334" startColumn="62" endLine="74" endColumn="62" startOffset="2334" location="C:\Users\rober\Downloads\eclipse-escet-v5.0-win32.win32.x86_64\eclipse-escet-v5.0\workspace\CIFBenchmarks-5.0.0.v20241003-060816\sudoku\sudoku.cif"/>
            <type xmi:type="types:BoolType" xmi:id="593">
              <position xmi:type="position:Position" xmi:id="594" source="File &quot;C:\Users\rober\Downloads\eclipse-escet-v5.0-win32.win32.x86_64\eclipse-escet-v5.0\workspace\CIFBenchmarks-5.0.0.v20241003-060816\sudoku\sudoku.cif&quot;: " startLine="74" endOffset="2334" startColumn="62" endLine="74" endColumn="62" startOffset="2334" location="C:\Users\rober\Downloads\eclipse-escet-v5.0-win32.win32.x86_64\eclipse-escet-v5.0\workspace\CIFBenchmarks-5.0.0.v20241003-060816\sudoku\sudoku.cif"/>
            </type>
            <left xmi:type="expressions:CompInstWrapExpression" xmi:id="595" instantiation="1121">
              <position xmi:type="position:Position" xmi:id="596" source="File &quot;C:\Users\rober\Downloads\eclipse-escet-v5.0-win32.win32.x86_64\eclipse-escet-v5.0\workspace\CIFBenchmarks-5.0.0.v20241003-060816\sudoku\sudoku.cif&quot;: " startLine="74" endOffset="2332" startColumn="52" endLine="74" endColumn="60" startOffset="2324" location="C:\Users\rober\Downloads\eclipse-escet-v5.0-win32.win32.x86_64\eclipse-escet-v5.0\workspace\CIFBenchmarks-5.0.0.v20241003-060816\sudoku\sudoku.cif"/>
              <type xmi:type="types:IntType" xmi:id="597" lower="0" upper="4">
                <position xmi:type="position:Position" xmi:id="598" source="File &quot;C:\Users\rober\Downloads\eclipse-escet-v5.0-win32.win32.x86_64\eclipse-escet-v5.0\workspace\CIFBenchmarks-5.0.0.v20241003-060816\sudoku\sudoku.cif&quot;: " startLine="74" endOffset="2332" startColumn="52" endLine="74" endColumn="60" startOffset="2324" location="C:\Users\rober\Downloads\eclipse-escet-v5.0-win32.win32.x86_64\eclipse-escet-v5.0\workspace\CIFBenchmarks-5.0.0.v20241003-060816\sudoku\sudoku.cif"/>
              </type>
              <reference xmi:type="expressions:DiscVariableExpression" xmi:id="599" variable="15">
                <position xmi:type="position:Position" xmi:id="600" source="File &quot;C:\Users\rober\Downloads\eclipse-escet-v5.0-win32.win32.x86_64\eclipse-escet-v5.0\workspace\CIFBenchmarks-5.0.0.v20241003-060816\sudoku\sudoku.cif&quot;: " startLine="74" endOffset="2332" startColumn="52" endLine="74" endColumn="60" startOffset="2324" location="C:\Users\rober\Downloads\eclipse-escet-v5.0-win32.win32.x86_64\eclipse-escet-v5.0\workspace\CIFBenchmarks-5.0.0.v20241003-060816\sudoku\sudoku.cif"/>
                <type xmi:type="types:IntType" xmi:id="601" lower="0" upper="4">
                  <position xmi:type="position:Position" xmi:id="602" source="File &quot;C:\Users\rober\Downloads\eclipse-escet-v5.0-win32.win32.x86_64\eclipse-escet-v5.0\workspace\CIFBenchmarks-5.0.0.v20241003-060816\sudoku\sudoku.cif&quot;: " startLine="74" endOffset="2332" startColumn="52" endLine="74" endColumn="60" startOffset="2324" location="C:\Users\rober\Downloads\eclipse-escet-v5.0-win32.win32.x86_64\eclipse-escet-v5.0\workspace\CIFBenchmarks-5.0.0.v20241003-060816\sudoku\sudoku.cif"/>
                </type>
              </reference>
            </left>
            <right xmi:type="expressions:AlgVariableExpression" xmi:id="603" variable="1081">
              <position xmi:type="position:Position" xmi:id="604" source="File &quot;C:\Users\rober\Downloads\eclipse-escet-v5.0-win32.win32.x86_64\eclipse-escet-v5.0\workspace\CIFBenchmarks-5.0.0.v20241003-060816\sudoku\sudoku.cif&quot;: " startLine="74" endOffset="2340" startColumn="64" endLine="74" endColumn="68" startOffset="2336" location="C:\Users\rober\Downloads\eclipse-escet-v5.0-win32.win32.x86_64\eclipse-escet-v5.0\workspace\CIFBenchmarks-5.0.0.v20241003-060816\sudoku\sudoku.cif"/>
              <type xmi:type="types:IntType" xmi:id="605">
                <position xmi:type="position:Position" xmi:id="606" source="File &quot;C:\Users\rober\Downloads\eclipse-escet-v5.0-win32.win32.x86_64\eclipse-escet-v5.0\workspace\CIFBenchmarks-5.0.0.v20241003-060816\sudoku\sudoku.cif&quot;: " startLine="74" endOffset="2340" startColumn="64" endLine="74" endColumn="68" startOffset="2336" location="C:\Users\rober\Downloads\eclipse-escet-v5.0-win32.win32.x86_64\eclipse-escet-v5.0\workspace\CIFBenchmarks-5.0.0.v20241003-060816\sudoku\sudoku.cif"/>
              </type>
            </right>
          </right>
        </left>
        <right xmi:type="expressions:BinaryExpression" xmi:id="607" operator="Equal">
          <position xmi:type="position:Position" xmi:id="608" source="File &quot;C:\Users\rober\Downloads\eclipse-escet-v5.0-win32.win32.x86_64\eclipse-escet-v5.0\workspace\CIFBenchmarks-5.0.0.v20241003-060816\sudoku\sudoku.cif&quot;: " startLine="74" endOffset="2355" startColumn="83" endLine="74" endColumn="83" startOffset="2355" location="C:\Users\rober\Downloads\eclipse-escet-v5.0-win32.win32.x86_64\eclipse-escet-v5.0\workspace\CIFBenchmarks-5.0.0.v20241003-060816\sudoku\sudoku.cif"/>
          <type xmi:type="types:BoolType" xmi:id="609">
            <position xmi:type="position:Position" xmi:id="610" source="File &quot;C:\Users\rober\Downloads\eclipse-escet-v5.0-win32.win32.x86_64\eclipse-escet-v5.0\workspace\CIFBenchmarks-5.0.0.v20241003-060816\sudoku\sudoku.cif&quot;: " startLine="74" endOffset="2355" startColumn="83" endLine="74" endColumn="83" startOffset="2355" location="C:\Users\rober\Downloads\eclipse-escet-v5.0-win32.win32.x86_64\eclipse-escet-v5.0\workspace\CIFBenchmarks-5.0.0.v20241003-060816\sudoku\sudoku.cif"/>
          </type>
          <left xmi:type="expressions:CompInstWrapExpression" xmi:id="611" instantiation="1137">
            <position xmi:type="position:Position" xmi:id="612" source="File &quot;C:\Users\rober\Downloads\eclipse-escet-v5.0-win32.win32.x86_64\eclipse-escet-v5.0\workspace\CIFBenchmarks-5.0.0.v20241003-060816\sudoku\sudoku.cif&quot;: " startLine="74" endOffset="2353" startColumn="73" endLine="74" endColumn="81" startOffset="2345" location="C:\Users\rober\Downloads\eclipse-escet-v5.0-win32.win32.x86_64\eclipse-escet-v5.0\workspace\CIFBenchmarks-5.0.0.v20241003-060816\sudoku\sudoku.cif"/>
            <type xmi:type="types:IntType" xmi:id="613" lower="0" upper="4">
              <position xmi:type="position:Position" xmi:id="614" source="File &quot;C:\Users\rober\Downloads\eclipse-escet-v5.0-win32.win32.x86_64\eclipse-escet-v5.0\workspace\CIFBenchmarks-5.0.0.v20241003-060816\sudoku\sudoku.cif&quot;: " startLine="74" endOffset="2353" startColumn="73" endLine="74" endColumn="81" startOffset="2345" location="C:\Users\rober\Downloads\eclipse-escet-v5.0-win32.win32.x86_64\eclipse-escet-v5.0\workspace\CIFBenchmarks-5.0.0.v20241003-060816\sudoku\sudoku.cif"/>
            </type>
            <reference xmi:type="expressions:DiscVariableExpression" xmi:id="615" variable="15">
              <position xmi:type="position:Position" xmi:id="616" source="File &quot;C:\Users\rober\Downloads\eclipse-escet-v5.0-win32.win32.x86_64\eclipse-escet-v5.0\workspace\CIFBenchmarks-5.0.0.v20241003-060816\sudoku\sudoku.cif&quot;: " startLine="74" endOffset="2353" startColumn="73" endLine="74" endColumn="81" startOffset="2345" location="C:\Users\rober\Downloads\eclipse-escet-v5.0-win32.win32.x86_64\eclipse-escet-v5.0\workspace\CIFBenchmarks-5.0.0.v20241003-060816\sudoku\sudoku.cif"/>
              <type xmi:type="types:IntType" xmi:id="617" lower="0" upper="4">
                <position xmi:type="position:Position" xmi:id="618" source="File &quot;C:\Users\rober\Downloads\eclipse-escet-v5.0-win32.win32.x86_64\eclipse-escet-v5.0\workspace\CIFBenchmarks-5.0.0.v20241003-060816\sudoku\sudoku.cif&quot;: " startLine="74" endOffset="2353" startColumn="73" endLine="74" endColumn="81" startOffset="2345" location="C:\Users\rober\Downloads\eclipse-escet-v5.0-win32.win32.x86_64\eclipse-escet-v5.0\workspace\CIFBenchmarks-5.0.0.v20241003-060816\sudoku\sudoku.cif"/>
              </type>
            </reference>
          </left>
          <right xmi:type="expressions:AlgVariableExpression" xmi:id="619" variable="1081">
            <position xmi:type="position:Position" xmi:id="620" source="File &quot;C:\Users\rober\Downloads\eclipse-escet-v5.0-win32.win32.x86_64\eclipse-escet-v5.0\workspace\CIFBenchmarks-5.0.0.v20241003-060816\sudoku\sudoku.cif&quot;: " startLine="74" endOffset="2361" startColumn="85" endLine="74" endColumn="89" startOffset="2357" location="C:\Users\rober\Downloads\eclipse-escet-v5.0-win32.win32.x86_64\eclipse-escet-v5.0\workspace\CIFBenchmarks-5.0.0.v20241003-060816\sudoku\sudoku.cif"/>
            <type xmi:type="types:IntType" xmi:id="621">
              <position xmi:type="position:Position" xmi:id="622" source="File &quot;C:\Users\rober\Downloads\eclipse-escet-v5.0-win32.win32.x86_64\eclipse-escet-v5.0\workspace\CIFBenchmarks-5.0.0.v20241003-060816\sudoku\sudoku.cif&quot;: " startLine="74" endOffset="2361" startColumn="85" endLine="74" endColumn="89" startOffset="2357" location="C:\Users\rober\Downloads\eclipse-escet-v5.0-win32.win32.x86_64\eclipse-escet-v5.0\workspace\CIFBenchmarks-5.0.0.v20241003-060816\sudoku\sudoku.cif"/>
            </type>
          </right>
        </right>
      </markeds>
      <markeds xmi:type="expressions:BinaryExpression" xmi:id="623">
        <position xmi:type="position:Position" xmi:id="624" source="File &quot;C:\Users\rober\Downloads\eclipse-escet-v5.0-win32.win32.x86_64\eclipse-escet-v5.0\workspace\CIFBenchmarks-5.0.0.v20241003-060816\sudoku\sudoku.cif&quot;: " startLine="75" endOffset="2434" startColumn="70" endLine="75" endColumn="71" startOffset="2433" location="C:\Users\rober\Downloads\eclipse-escet-v5.0-win32.win32.x86_64\eclipse-escet-v5.0\workspace\CIFBenchmarks-5.0.0.v20241003-060816\sudoku\sudoku.cif"/>
        <type xmi:type="types:BoolType" xmi:id="625">
          <position xmi:type="position:Position" xmi:id="626" source="File &quot;C:\Users\rober\Downloads\eclipse-escet-v5.0-win32.win32.x86_64\eclipse-escet-v5.0\workspace\CIFBenchmarks-5.0.0.v20241003-060816\sudoku\sudoku.cif&quot;: " startLine="75" endOffset="2434" startColumn="70" endLine="75" endColumn="71" startOffset="2433" location="C:\Users\rober\Downloads\eclipse-escet-v5.0-win32.win32.x86_64\eclipse-escet-v5.0\workspace\CIFBenchmarks-5.0.0.v20241003-060816\sudoku\sudoku.cif"/>
        </type>
        <left xmi:type="expressions:BinaryExpression" xmi:id="627">
          <position xmi:type="position:Position" xmi:id="628" source="File &quot;C:\Users\rober\Downloads\eclipse-escet-v5.0-win32.win32.x86_64\eclipse-escet-v5.0\workspace\CIFBenchmarks-5.0.0.v20241003-060816\sudoku\sudoku.cif&quot;: " startLine="75" endOffset="2413" startColumn="49" endLine="75" endColumn="50" startOffset="2412" location="C:\Users\rober\Downloads\eclipse-escet-v5.0-win32.win32.x86_64\eclipse-escet-v5.0\workspace\CIFBenchmarks-5.0.0.v20241003-060816\sudoku\sudoku.cif"/>
          <type xmi:type="types:BoolType" xmi:id="629">
            <position xmi:type="position:Position" xmi:id="630" source="File &quot;C:\Users\rober\Downloads\eclipse-escet-v5.0-win32.win32.x86_64\eclipse-escet-v5.0\workspace\CIFBenchmarks-5.0.0.v20241003-060816\sudoku\sudoku.cif&quot;: " startLine="75" endOffset="2413" startColumn="49" endLine="75" endColumn="50" startOffset="2412" location="C:\Users\rober\Downloads\eclipse-escet-v5.0-win32.win32.x86_64\eclipse-escet-v5.0\workspace\CIFBenchmarks-5.0.0.v20241003-060816\sudoku\sudoku.cif"/>
          </type>
          <left xmi:type="expressions:BinaryExpression" xmi:id="631">
            <position xmi:type="position:Position" xmi:id="632" source="File &quot;C:\Users\rober\Downloads\eclipse-escet-v5.0-win32.win32.x86_64\eclipse-escet-v5.0\workspace\CIFBenchmarks-5.0.0.v20241003-060816\sudoku\sudoku.cif&quot;: " startLine="75" endOffset="2392" startColumn="28" endLine="75" endColumn="29" startOffset="2391" location="C:\Users\rober\Downloads\eclipse-escet-v5.0-win32.win32.x86_64\eclipse-escet-v5.0\workspace\CIFBenchmarks-5.0.0.v20241003-060816\sudoku\sudoku.cif"/>
            <type xmi:type="types:BoolType" xmi:id="633">
              <position xmi:type="position:Position" xmi:id="634" source="File &quot;C:\Users\rober\Downloads\eclipse-escet-v5.0-win32.win32.x86_64\eclipse-escet-v5.0\workspace\CIFBenchmarks-5.0.0.v20241003-060816\sudoku\sudoku.cif&quot;: " startLine="75" endOffset="2392" startColumn="28" endLine="75" endColumn="29" startOffset="2391" location="C:\Users\rober\Downloads\eclipse-escet-v5.0-win32.win32.x86_64\eclipse-escet-v5.0\workspace\CIFBenchmarks-5.0.0.v20241003-060816\sudoku\sudoku.cif"/>
            </type>
            <left xmi:type="expressions:BinaryExpression" xmi:id="635" operator="Equal">
              <position xmi:type="position:Position" xmi:id="636" source="File &quot;C:\Users\rober\Downloads\eclipse-escet-v5.0-win32.win32.x86_64\eclipse-escet-v5.0\workspace\CIFBenchmarks-5.0.0.v20241003-060816\sudoku\sudoku.cif&quot;: " startLine="75" endOffset="2383" startColumn="20" endLine="75" endColumn="20" startOffset="2383" location="C:\Users\rober\Downloads\eclipse-escet-v5.0-win32.win32.x86_64\eclipse-escet-v5.0\workspace\CIFBenchmarks-5.0.0.v20241003-060816\sudoku\sudoku.cif"/>
              <type xmi:type="types:BoolType" xmi:id="637">
                <position xmi:type="position:Position" xmi:id="638" source="File &quot;C:\Users\rober\Downloads\eclipse-escet-v5.0-win32.win32.x86_64\eclipse-escet-v5.0\workspace\CIFBenchmarks-5.0.0.v20241003-060816\sudoku\sudoku.cif&quot;: " startLine="75" endOffset="2383" startColumn="20" endLine="75" endColumn="20" startOffset="2383" location="C:\Users\rober\Downloads\eclipse-escet-v5.0-win32.win32.x86_64\eclipse-escet-v5.0\workspace\CIFBenchmarks-5.0.0.v20241003-060816\sudoku\sudoku.cif"/>
              </type>
              <left xmi:type="expressions:CompInstWrapExpression" xmi:id="639" instantiation="1093">
                <position xmi:type="position:Position" xmi:id="640" source="File &quot;C:\Users\rober\Downloads\eclipse-escet-v5.0-win32.win32.x86_64\eclipse-escet-v5.0\workspace\CIFBenchmarks-5.0.0.v20241003-060816\sudoku\sudoku.cif&quot;: " startLine="75" endOffset="2381" startColumn="10" endLine="75" endColumn="18" startOffset="2373" location="C:\Users\rober\Downloads\eclipse-escet-v5.0-win32.win32.x86_64\eclipse-escet-v5.0\workspace\CIFBenchmarks-5.0.0.v20241003-060816\sudoku\sudoku.cif"/>
                <type xmi:type="types:IntType" xmi:id="641" lower="0" upper="4">
                  <position xmi:type="position:Position" xmi:id="642" source="File &quot;C:\Users\rober\Downloads\eclipse-escet-v5.0-win32.win32.x86_64\eclipse-escet-v5.0\workspace\CIFBenchmarks-5.0.0.v20241003-060816\sudoku\sudoku.cif&quot;: " startLine="75" endOffset="2381" startColumn="10" endLine="75" endColumn="18" startOffset="2373" location="C:\Users\rober\Downloads\eclipse-escet-v5.0-win32.win32.x86_64\eclipse-escet-v5.0\workspace\CIFBenchmarks-5.0.0.v20241003-060816\sudoku\sudoku.cif"/>
                </type>
                <reference xmi:type="expressions:DiscVariableExpression" xmi:id="643" variable="15">
                  <position xmi:type="position:Position" xmi:id="644" source="File &quot;C:\Users\rober\Downloads\eclipse-escet-v5.0-win32.win32.x86_64\eclipse-escet-v5.0\workspace\CIFBenchmarks-5.0.0.v20241003-060816\sudoku\sudoku.cif&quot;: " startLine="75" endOffset="2381" startColumn="10" endLine="75" endColumn="18" startOffset="2373" location="C:\Users\rober\Downloads\eclipse-escet-v5.0-win32.win32.x86_64\eclipse-escet-v5.0\workspace\CIFBenchmarks-5.0.0.v20241003-060816\sudoku\sudoku.cif"/>
                  <type xmi:type="types:IntType" xmi:id="645" lower="0" upper="4">
                    <position xmi:type="position:Position" xmi:id="646" source="File &quot;C:\Users\rober\Downloads\eclipse-escet-v5.0-win32.win32.x86_64\eclipse-escet-v5.0\workspace\CIFBenchmarks-5.0.0.v20241003-060816\sudoku\sudoku.cif&quot;: " startLine="75" endOffset="2381" startColumn="10" endLine="75" endColumn="18" startOffset="2373" location="C:\Users\rober\Downloads\eclipse-escet-v5.0-win32.win32.x86_64\eclipse-escet-v5.0\workspace\CIFBenchmarks-5.0.0.v20241003-060816\sudoku\sudoku.cif"/>
                  </type>
                </reference>
              </left>
              <right xmi:type="expressions:AlgVariableExpression" xmi:id="647" variable="1081">
                <position xmi:type="position:Position" xmi:id="648" source="File &quot;C:\Users\rober\Downloads\eclipse-escet-v5.0-win32.win32.x86_64\eclipse-escet-v5.0\workspace\CIFBenchmarks-5.0.0.v20241003-060816\sudoku\sudoku.cif&quot;: " startLine="75" endOffset="2389" startColumn="22" endLine="75" endColumn="26" startOffset="2385" location="C:\Users\rober\Downloads\eclipse-escet-v5.0-win32.win32.x86_64\eclipse-escet-v5.0\workspace\CIFBenchmarks-5.0.0.v20241003-060816\sudoku\sudoku.cif"/>
                <type xmi:type="types:IntType" xmi:id="649">
                  <position xmi:type="position:Position" xmi:id="650" source="File &quot;C:\Users\rober\Downloads\eclipse-escet-v5.0-win32.win32.x86_64\eclipse-escet-v5.0\workspace\CIFBenchmarks-5.0.0.v20241003-060816\sudoku\sudoku.cif&quot;: " startLine="75" endOffset="2389" startColumn="22" endLine="75" endColumn="26" startOffset="2385" location="C:\Users\rober\Downloads\eclipse-escet-v5.0-win32.win32.x86_64\eclipse-escet-v5.0\workspace\CIFBenchmarks-5.0.0.v20241003-060816\sudoku\sudoku.cif"/>
                </type>
              </right>
            </left>
            <right xmi:type="expressions:BinaryExpression" xmi:id="651" operator="Equal">
              <position xmi:type="position:Position" xmi:id="652" source="File &quot;C:\Users\rober\Downloads\eclipse-escet-v5.0-win32.win32.x86_64\eclipse-escet-v5.0\workspace\CIFBenchmarks-5.0.0.v20241003-060816\sudoku\sudoku.cif&quot;: " startLine="75" endOffset="2404" startColumn="41" endLine="75" endColumn="41" startOffset="2404" location="C:\Users\rober\Downloads\eclipse-escet-v5.0-win32.win32.x86_64\eclipse-escet-v5.0\workspace\CIFBenchmarks-5.0.0.v20241003-060816\sudoku\sudoku.cif"/>
              <type xmi:type="types:BoolType" xmi:id="653">
                <position xmi:type="position:Position" xmi:id="654" source="File &quot;C:\Users\rober\Downloads\eclipse-escet-v5.0-win32.win32.x86_64\eclipse-escet-v5.0\workspace\CIFBenchmarks-5.0.0.v20241003-060816\sudoku\sudoku.cif&quot;: " startLine="75" endOffset="2404" startColumn="41" endLine="75" endColumn="41" startOffset="2404" location="C:\Users\rober\Downloads\eclipse-escet-v5.0-win32.win32.x86_64\eclipse-escet-v5.0\workspace\CIFBenchmarks-5.0.0.v20241003-060816\sudoku\sudoku.cif"/>
              </type>
              <left xmi:type="expressions:CompInstWrapExpression" xmi:id="655" instantiation="1109">
                <position xmi:type="position:Position" xmi:id="656" source="File &quot;C:\Users\rober\Downloads\eclipse-escet-v5.0-win32.win32.x86_64\eclipse-escet-v5.0\workspace\CIFBenchmarks-5.0.0.v20241003-060816\sudoku\sudoku.cif&quot;: " startLine="75" endOffset="2402" startColumn="31" endLine="75" endColumn="39" startOffset="2394" location="C:\Users\rober\Downloads\eclipse-escet-v5.0-win32.win32.x86_64\eclipse-escet-v5.0\workspace\CIFBenchmarks-5.0.0.v20241003-060816\sudoku\sudoku.cif"/>
                <type xmi:type="types:IntType" xmi:id="657" lower="0" upper="4">
                  <position xmi:type="position:Position" xmi:id="658" source="File &quot;C:\Users\rober\Downloads\eclipse-escet-v5.0-win32.win32.x86_64\eclipse-escet-v5.0\workspace\CIFBenchmarks-5.0.0.v20241003-060816\sudoku\sudoku.cif&quot;: " startLine="75" endOffset="2402" startColumn="31" endLine="75" endColumn="39" startOffset="2394" location="C:\Users\rober\Downloads\eclipse-escet-v5.0-win32.win32.x86_64\eclipse-escet-v5.0\workspace\CIFBenchmarks-5.0.0.v20241003-060816\sudoku\sudoku.cif"/>
                </type>
                <reference xmi:type="expressions:DiscVariableExpression" xmi:id="659" variable="15">
                  <position xmi:type="position:Position" xmi:id="660" source="File &quot;C:\Users\rober\Downloads\eclipse-escet-v5.0-win32.win32.x86_64\eclipse-escet-v5.0\workspace\CIFBenchmarks-5.0.0.v20241003-060816\sudoku\sudoku.cif&quot;: " startLine="75" endOffset="2402" startColumn="31" endLine="75" endColumn="39" startOffset="2394" location="C:\Users\rober\Downloads\eclipse-escet-v5.0-win32.win32.x86_64\eclipse-escet-v5.0\workspace\CIFBenchmarks-5.0.0.v20241003-060816\sudoku\sudoku.cif"/>
                  <type xmi:type="types:IntType" xmi:id="661" lower="0" upper="4">
                    <position xmi:type="position:Position" xmi:id="662" source="File &quot;C:\Users\rober\Downloads\eclipse-escet-v5.0-win32.win32.x86_64\eclipse-escet-v5.0\workspace\CIFBenchmarks-5.0.0.v20241003-060816\sudoku\sudoku.cif&quot;: " startLine="75" endOffset="2402" startColumn="31" endLine="75" endColumn="39" startOffset="2394" location="C:\Users\rober\Downloads\eclipse-escet-v5.0-win32.win32.x86_64\eclipse-escet-v5.0\workspace\CIFBenchmarks-5.0.0.v20241003-060816\sudoku\sudoku.cif"/>
                  </type>
                </reference>
              </left>
              <right xmi:type="expressions:AlgVariableExpression" xmi:id="663" variable="1081">
                <position xmi:type="position:Position" xmi:id="664" source="File &quot;C:\Users\rober\Downloads\eclipse-escet-v5.0-win32.win32.x86_64\eclipse-escet-v5.0\workspace\CIFBenchmarks-5.0.0.v20241003-060816\sudoku\sudoku.cif&quot;: " startLine="75" endOffset="2410" startColumn="43" endLine="75" endColumn="47" startOffset="2406" location="C:\Users\rober\Downloads\eclipse-escet-v5.0-win32.win32.x86_64\eclipse-escet-v5.0\workspace\CIFBenchmarks-5.0.0.v20241003-060816\sudoku\sudoku.cif"/>
                <type xmi:type="types:IntType" xmi:id="665">
                  <position xmi:type="position:Position" xmi:id="666" source="File &quot;C:\Users\rober\Downloads\eclipse-escet-v5.0-win32.win32.x86_64\eclipse-escet-v5.0\workspace\CIFBenchmarks-5.0.0.v20241003-060816\sudoku\sudoku.cif&quot;: " startLine="75" endOffset="2410" startColumn="43" endLine="75" endColumn="47" startOffset="2406" location="C:\Users\rober\Downloads\eclipse-escet-v5.0-win32.win32.x86_64\eclipse-escet-v5.0\workspace\CIFBenchmarks-5.0.0.v20241003-060816\sudoku\sudoku.cif"/>
                </type>
              </right>
            </right>
          </left>
          <right xmi:type="expressions:BinaryExpression" xmi:id="667" operator="Equal">
            <position xmi:type="position:Position" xmi:id="668" source="File &quot;C:\Users\rober\Downloads\eclipse-escet-v5.0-win32.win32.x86_64\eclipse-escet-v5.0\workspace\CIFBenchmarks-5.0.0.v20241003-060816\sudoku\sudoku.cif&quot;: " startLine="75" endOffset="2425" startColumn="62" endLine="75" endColumn="62" startOffset="2425" location="C:\Users\rober\Downloads\eclipse-escet-v5.0-win32.win32.x86_64\eclipse-escet-v5.0\workspace\CIFBenchmarks-5.0.0.v20241003-060816\sudoku\sudoku.cif"/>
            <type xmi:type="types:BoolType" xmi:id="669">
              <position xmi:type="position:Position" xmi:id="670" source="File &quot;C:\Users\rober\Downloads\eclipse-escet-v5.0-win32.win32.x86_64\eclipse-escet-v5.0\workspace\CIFBenchmarks-5.0.0.v20241003-060816\sudoku\sudoku.cif&quot;: " startLine="75" endOffset="2425" startColumn="62" endLine="75" endColumn="62" startOffset="2425" location="C:\Users\rober\Downloads\eclipse-escet-v5.0-win32.win32.x86_64\eclipse-escet-v5.0\workspace\CIFBenchmarks-5.0.0.v20241003-060816\sudoku\sudoku.cif"/>
            </type>
            <left xmi:type="expressions:CompInstWrapExpression" xmi:id="671" instantiation="1125">
              <position xmi:type="position:Position" xmi:id="672" source="File &quot;C:\Users\rober\Downloads\eclipse-escet-v5.0-win32.win32.x86_64\eclipse-escet-v5.0\workspace\CIFBenchmarks-5.0.0.v20241003-060816\sudoku\sudoku.cif&quot;: " startLine="75" endOffset="2423" startColumn="52" endLine="75" endColumn="60" startOffset="2415" location="C:\Users\rober\Downloads\eclipse-escet-v5.0-win32.win32.x86_64\eclipse-escet-v5.0\workspace\CIFBenchmarks-5.0.0.v20241003-060816\sudoku\sudoku.cif"/>
              <type xmi:type="types:IntType" xmi:id="673" lower="0" upper="4">
                <position xmi:type="position:Position" xmi:id="674" source="File &quot;C:\Users\rober\Downloads\eclipse-escet-v5.0-win32.win32.x86_64\eclipse-escet-v5.0\workspace\CIFBenchmarks-5.0.0.v20241003-060816\sudoku\sudoku.cif&quot;: " startLine="75" endOffset="2423" startColumn="52" endLine="75" endColumn="60" startOffset="2415" location="C:\Users\rober\Downloads\eclipse-escet-v5.0-win32.win32.x86_64\eclipse-escet-v5.0\workspace\CIFBenchmarks-5.0.0.v20241003-060816\sudoku\sudoku.cif"/>
              </type>
              <reference xmi:type="expressions:DiscVariableExpression" xmi:id="675" variable="15">
                <position xmi:type="position:Position" xmi:id="676" source="File &quot;C:\Users\rober\Downloads\eclipse-escet-v5.0-win32.win32.x86_64\eclipse-escet-v5.0\workspace\CIFBenchmarks-5.0.0.v20241003-060816\sudoku\sudoku.cif&quot;: " startLine="75" endOffset="2423" startColumn="52" endLine="75" endColumn="60" startOffset="2415" location="C:\Users\rober\Downloads\eclipse-escet-v5.0-win32.win32.x86_64\eclipse-escet-v5.0\workspace\CIFBenchmarks-5.0.0.v20241003-060816\sudoku\sudoku.cif"/>
                <type xmi:type="types:IntType" xmi:id="677" lower="0" upper="4">
                  <position xmi:type="position:Position" xmi:id="678" source="File &quot;C:\Users\rober\Downloads\eclipse-escet-v5.0-win32.win32.x86_64\eclipse-escet-v5.0\workspace\CIFBenchmarks-5.0.0.v20241003-060816\sudoku\sudoku.cif&quot;: " startLine="75" endOffset="2423" startColumn="52" endLine="75" endColumn="60" startOffset="2415" location="C:\Users\rober\Downloads\eclipse-escet-v5.0-win32.win32.x86_64\eclipse-escet-v5.0\workspace\CIFBenchmarks-5.0.0.v20241003-060816\sudoku\sudoku.cif"/>
                </type>
              </reference>
            </left>
            <right xmi:type="expressions:AlgVariableExpression" xmi:id="679" variable="1081">
              <position xmi:type="position:Position" xmi:id="680" source="File &quot;C:\Users\rober\Downloads\eclipse-escet-v5.0-win32.win32.x86_64\eclipse-escet-v5.0\workspace\CIFBenchmarks-5.0.0.v20241003-060816\sudoku\sudoku.cif&quot;: " startLine="75" endOffset="2431" startColumn="64" endLine="75" endColumn="68" startOffset="2427" location="C:\Users\rober\Downloads\eclipse-escet-v5.0-win32.win32.x86_64\eclipse-escet-v5.0\workspace\CIFBenchmarks-5.0.0.v20241003-060816\sudoku\sudoku.cif"/>
              <type xmi:type="types:IntType" xmi:id="681">
                <position xmi:type="position:Position" xmi:id="682" source="File &quot;C:\Users\rober\Downloads\eclipse-escet-v5.0-win32.win32.x86_64\eclipse-escet-v5.0\workspace\CIFBenchmarks-5.0.0.v20241003-060816\sudoku\sudoku.cif&quot;: " startLine="75" endOffset="2431" startColumn="64" endLine="75" endColumn="68" startOffset="2427" location="C:\Users\rober\Downloads\eclipse-escet-v5.0-win32.win32.x86_64\eclipse-escet-v5.0\workspace\CIFBenchmarks-5.0.0.v20241003-060816\sudoku\sudoku.cif"/>
              </type>
            </right>
          </right>
        </left>
        <right xmi:type="expressions:BinaryExpression" xmi:id="683" operator="Equal">
          <position xmi:type="position:Position" xmi:id="684" source="File &quot;C:\Users\rober\Downloads\eclipse-escet-v5.0-win32.win32.x86_64\eclipse-escet-v5.0\workspace\CIFBenchmarks-5.0.0.v20241003-060816\sudoku\sudoku.cif&quot;: " startLine="75" endOffset="2446" startColumn="83" endLine="75" endColumn="83" startOffset="2446" location="C:\Users\rober\Downloads\eclipse-escet-v5.0-win32.win32.x86_64\eclipse-escet-v5.0\workspace\CIFBenchmarks-5.0.0.v20241003-060816\sudoku\sudoku.cif"/>
          <type xmi:type="types:BoolType" xmi:id="685">
            <position xmi:type="position:Position" xmi:id="686" source="File &quot;C:\Users\rober\Downloads\eclipse-escet-v5.0-win32.win32.x86_64\eclipse-escet-v5.0\workspace\CIFBenchmarks-5.0.0.v20241003-060816\sudoku\sudoku.cif&quot;: " startLine="75" endOffset="2446" startColumn="83" endLine="75" endColumn="83" startOffset="2446" location="C:\Users\rober\Downloads\eclipse-escet-v5.0-win32.win32.x86_64\eclipse-escet-v5.0\workspace\CIFBenchmarks-5.0.0.v20241003-060816\sudoku\sudoku.cif"/>
          </type>
          <left xmi:type="expressions:CompInstWrapExpression" xmi:id="687" instantiation="1141">
            <position xmi:type="position:Position" xmi:id="688" source="File &quot;C:\Users\rober\Downloads\eclipse-escet-v5.0-win32.win32.x86_64\eclipse-escet-v5.0\workspace\CIFBenchmarks-5.0.0.v20241003-060816\sudoku\sudoku.cif&quot;: " startLine="75" endOffset="2444" startColumn="73" endLine="75" endColumn="81" startOffset="2436" location="C:\Users\rober\Downloads\eclipse-escet-v5.0-win32.win32.x86_64\eclipse-escet-v5.0\workspace\CIFBenchmarks-5.0.0.v20241003-060816\sudoku\sudoku.cif"/>
            <type xmi:type="types:IntType" xmi:id="689" lower="0" upper="4">
              <position xmi:type="position:Position" xmi:id="690" source="File &quot;C:\Users\rober\Downloads\eclipse-escet-v5.0-win32.win32.x86_64\eclipse-escet-v5.0\workspace\CIFBenchmarks-5.0.0.v20241003-060816\sudoku\sudoku.cif&quot;: " startLine="75" endOffset="2444" startColumn="73" endLine="75" endColumn="81" startOffset="2436" location="C:\Users\rober\Downloads\eclipse-escet-v5.0-win32.win32.x86_64\eclipse-escet-v5.0\workspace\CIFBenchmarks-5.0.0.v20241003-060816\sudoku\sudoku.cif"/>
            </type>
            <reference xmi:type="expressions:DiscVariableExpression" xmi:id="691" variable="15">
              <position xmi:type="position:Position" xmi:id="692" source="File &quot;C:\Users\rober\Downloads\eclipse-escet-v5.0-win32.win32.x86_64\eclipse-escet-v5.0\workspace\CIFBenchmarks-5.0.0.v20241003-060816\sudoku\sudoku.cif&quot;: " startLine="75" endOffset="2444" startColumn="73" endLine="75" endColumn="81" startOffset="2436" location="C:\Users\rober\Downloads\eclipse-escet-v5.0-win32.win32.x86_64\eclipse-escet-v5.0\workspace\CIFBenchmarks-5.0.0.v20241003-060816\sudoku\sudoku.cif"/>
              <type xmi:type="types:IntType" xmi:id="693" lower="0" upper="4">
                <position xmi:type="position:Position" xmi:id="694" source="File &quot;C:\Users\rober\Downloads\eclipse-escet-v5.0-win32.win32.x86_64\eclipse-escet-v5.0\workspace\CIFBenchmarks-5.0.0.v20241003-060816\sudoku\sudoku.cif&quot;: " startLine="75" endOffset="2444" startColumn="73" endLine="75" endColumn="81" startOffset="2436" location="C:\Users\rober\Downloads\eclipse-escet-v5.0-win32.win32.x86_64\eclipse-escet-v5.0\workspace\CIFBenchmarks-5.0.0.v20241003-060816\sudoku\sudoku.cif"/>
              </type>
            </reference>
          </left>
          <right xmi:type="expressions:AlgVariableExpression" xmi:id="695" variable="1081">
            <position xmi:type="position:Position" xmi:id="696" source="File &quot;C:\Users\rober\Downloads\eclipse-escet-v5.0-win32.win32.x86_64\eclipse-escet-v5.0\workspace\CIFBenchmarks-5.0.0.v20241003-060816\sudoku\sudoku.cif&quot;: " startLine="75" endOffset="2452" startColumn="85" endLine="75" endColumn="89" startOffset="2448" location="C:\Users\rober\Downloads\eclipse-escet-v5.0-win32.win32.x86_64\eclipse-escet-v5.0\workspace\CIFBenchmarks-5.0.0.v20241003-060816\sudoku\sudoku.cif"/>
            <type xmi:type="types:IntType" xmi:id="697">
              <position xmi:type="position:Position" xmi:id="698" source="File &quot;C:\Users\rober\Downloads\eclipse-escet-v5.0-win32.win32.x86_64\eclipse-escet-v5.0\workspace\CIFBenchmarks-5.0.0.v20241003-060816\sudoku\sudoku.cif&quot;: " startLine="75" endOffset="2452" startColumn="85" endLine="75" endColumn="89" startOffset="2448" location="C:\Users\rober\Downloads\eclipse-escet-v5.0-win32.win32.x86_64\eclipse-escet-v5.0\workspace\CIFBenchmarks-5.0.0.v20241003-060816\sudoku\sudoku.cif"/>
            </type>
          </right>
        </right>
      </markeds>
      <markeds xmi:type="expressions:BinaryExpression" xmi:id="699">
        <position xmi:type="position:Position" xmi:id="700" source="File &quot;C:\Users\rober\Downloads\eclipse-escet-v5.0-win32.win32.x86_64\eclipse-escet-v5.0\workspace\CIFBenchmarks-5.0.0.v20241003-060816\sudoku\sudoku.cif&quot;: " startLine="76" endOffset="2525" startColumn="70" endLine="76" endColumn="71" startOffset="2524" location="C:\Users\rober\Downloads\eclipse-escet-v5.0-win32.win32.x86_64\eclipse-escet-v5.0\workspace\CIFBenchmarks-5.0.0.v20241003-060816\sudoku\sudoku.cif"/>
        <type xmi:type="types:BoolType" xmi:id="701">
          <position xmi:type="position:Position" xmi:id="702" source="File &quot;C:\Users\rober\Downloads\eclipse-escet-v5.0-win32.win32.x86_64\eclipse-escet-v5.0\workspace\CIFBenchmarks-5.0.0.v20241003-060816\sudoku\sudoku.cif&quot;: " startLine="76" endOffset="2525" startColumn="70" endLine="76" endColumn="71" startOffset="2524" location="C:\Users\rober\Downloads\eclipse-escet-v5.0-win32.win32.x86_64\eclipse-escet-v5.0\workspace\CIFBenchmarks-5.0.0.v20241003-060816\sudoku\sudoku.cif"/>
        </type>
        <left xmi:type="expressions:BinaryExpression" xmi:id="703">
          <position xmi:type="position:Position" xmi:id="704" source="File &quot;C:\Users\rober\Downloads\eclipse-escet-v5.0-win32.win32.x86_64\eclipse-escet-v5.0\workspace\CIFBenchmarks-5.0.0.v20241003-060816\sudoku\sudoku.cif&quot;: " startLine="76" endOffset="2504" startColumn="49" endLine="76" endColumn="50" startOffset="2503" location="C:\Users\rober\Downloads\eclipse-escet-v5.0-win32.win32.x86_64\eclipse-escet-v5.0\workspace\CIFBenchmarks-5.0.0.v20241003-060816\sudoku\sudoku.cif"/>
          <type xmi:type="types:BoolType" xmi:id="705">
            <position xmi:type="position:Position" xmi:id="706" source="File &quot;C:\Users\rober\Downloads\eclipse-escet-v5.0-win32.win32.x86_64\eclipse-escet-v5.0\workspace\CIFBenchmarks-5.0.0.v20241003-060816\sudoku\sudoku.cif&quot;: " startLine="76" endOffset="2504" startColumn="49" endLine="76" endColumn="50" startOffset="2503" location="C:\Users\rober\Downloads\eclipse-escet-v5.0-win32.win32.x86_64\eclipse-escet-v5.0\workspace\CIFBenchmarks-5.0.0.v20241003-060816\sudoku\sudoku.cif"/>
          </type>
          <left xmi:type="expressions:BinaryExpression" xmi:id="707">
            <position xmi:type="position:Position" xmi:id="708" source="File &quot;C:\Users\rober\Downloads\eclipse-escet-v5.0-win32.win32.x86_64\eclipse-escet-v5.0\workspace\CIFBenchmarks-5.0.0.v20241003-060816\sudoku\sudoku.cif&quot;: " startLine="76" endOffset="2483" startColumn="28" endLine="76" endColumn="29" startOffset="2482" location="C:\Users\rober\Downloads\eclipse-escet-v5.0-win32.win32.x86_64\eclipse-escet-v5.0\workspace\CIFBenchmarks-5.0.0.v20241003-060816\sudoku\sudoku.cif"/>
            <type xmi:type="types:BoolType" xmi:id="709">
              <position xmi:type="position:Position" xmi:id="710" source="File &quot;C:\Users\rober\Downloads\eclipse-escet-v5.0-win32.win32.x86_64\eclipse-escet-v5.0\workspace\CIFBenchmarks-5.0.0.v20241003-060816\sudoku\sudoku.cif&quot;: " startLine="76" endOffset="2483" startColumn="28" endLine="76" endColumn="29" startOffset="2482" location="C:\Users\rober\Downloads\eclipse-escet-v5.0-win32.win32.x86_64\eclipse-escet-v5.0\workspace\CIFBenchmarks-5.0.0.v20241003-060816\sudoku\sudoku.cif"/>
            </type>
            <left xmi:type="expressions:BinaryExpression" xmi:id="711" operator="Equal">
              <position xmi:type="position:Position" xmi:id="712" source="File &quot;C:\Users\rober\Downloads\eclipse-escet-v5.0-win32.win32.x86_64\eclipse-escet-v5.0\workspace\CIFBenchmarks-5.0.0.v20241003-060816\sudoku\sudoku.cif&quot;: " startLine="76" endOffset="2474" startColumn="20" endLine="76" endColumn="20" startOffset="2474" location="C:\Users\rober\Downloads\eclipse-escet-v5.0-win32.win32.x86_64\eclipse-escet-v5.0\workspace\CIFBenchmarks-5.0.0.v20241003-060816\sudoku\sudoku.cif"/>
              <type xmi:type="types:BoolType" xmi:id="713">
                <position xmi:type="position:Position" xmi:id="714" source="File &quot;C:\Users\rober\Downloads\eclipse-escet-v5.0-win32.win32.x86_64\eclipse-escet-v5.0\workspace\CIFBenchmarks-5.0.0.v20241003-060816\sudoku\sudoku.cif&quot;: " startLine="76" endOffset="2474" startColumn="20" endLine="76" endColumn="20" startOffset="2474" location="C:\Users\rober\Downloads\eclipse-escet-v5.0-win32.win32.x86_64\eclipse-escet-v5.0\workspace\CIFBenchmarks-5.0.0.v20241003-060816\sudoku\sudoku.cif"/>
              </type>
              <left xmi:type="expressions:CompInstWrapExpression" xmi:id="715" instantiation="1097">
                <position xmi:type="position:Position" xmi:id="716" source="File &quot;C:\Users\rober\Downloads\eclipse-escet-v5.0-win32.win32.x86_64\eclipse-escet-v5.0\workspace\CIFBenchmarks-5.0.0.v20241003-060816\sudoku\sudoku.cif&quot;: " startLine="76" endOffset="2472" startColumn="10" endLine="76" endColumn="18" startOffset="2464" location="C:\Users\rober\Downloads\eclipse-escet-v5.0-win32.win32.x86_64\eclipse-escet-v5.0\workspace\CIFBenchmarks-5.0.0.v20241003-060816\sudoku\sudoku.cif"/>
                <type xmi:type="types:IntType" xmi:id="717" lower="0" upper="4">
                  <position xmi:type="position:Position" xmi:id="718" source="File &quot;C:\Users\rober\Downloads\eclipse-escet-v5.0-win32.win32.x86_64\eclipse-escet-v5.0\workspace\CIFBenchmarks-5.0.0.v20241003-060816\sudoku\sudoku.cif&quot;: " startLine="76" endOffset="2472" startColumn="10" endLine="76" endColumn="18" startOffset="2464" location="C:\Users\rober\Downloads\eclipse-escet-v5.0-win32.win32.x86_64\eclipse-escet-v5.0\workspace\CIFBenchmarks-5.0.0.v20241003-060816\sudoku\sudoku.cif"/>
                </type>
                <reference xmi:type="expressions:DiscVariableExpression" xmi:id="719" variable="15">
                  <position xmi:type="position:Position" xmi:id="720" source="File &quot;C:\Users\rober\Downloads\eclipse-escet-v5.0-win32.win32.x86_64\eclipse-escet-v5.0\workspace\CIFBenchmarks-5.0.0.v20241003-060816\sudoku\sudoku.cif&quot;: " startLine="76" endOffset="2472" startColumn="10" endLine="76" endColumn="18" startOffset="2464" location="C:\Users\rober\Downloads\eclipse-escet-v5.0-win32.win32.x86_64\eclipse-escet-v5.0\workspace\CIFBenchmarks-5.0.0.v20241003-060816\sudoku\sudoku.cif"/>
                  <type xmi:type="types:IntType" xmi:id="721" lower="0" upper="4">
                    <position xmi:type="position:Position" xmi:id="722" source="File &quot;C:\Users\rober\Downloads\eclipse-escet-v5.0-win32.win32.x86_64\eclipse-escet-v5.0\workspace\CIFBenchmarks-5.0.0.v20241003-060816\sudoku\sudoku.cif&quot;: " startLine="76" endOffset="2472" startColumn="10" endLine="76" endColumn="18" startOffset="2464" location="C:\Users\rober\Downloads\eclipse-escet-v5.0-win32.win32.x86_64\eclipse-escet-v5.0\workspace\CIFBenchmarks-5.0.0.v20241003-060816\sudoku\sudoku.cif"/>
                  </type>
                </reference>
              </left>
              <right xmi:type="expressions:AlgVariableExpression" xmi:id="723" variable="1081">
                <position xmi:type="position:Position" xmi:id="724" source="File &quot;C:\Users\rober\Downloads\eclipse-escet-v5.0-win32.win32.x86_64\eclipse-escet-v5.0\workspace\CIFBenchmarks-5.0.0.v20241003-060816\sudoku\sudoku.cif&quot;: " startLine="76" endOffset="2480" startColumn="22" endLine="76" endColumn="26" startOffset="2476" location="C:\Users\rober\Downloads\eclipse-escet-v5.0-win32.win32.x86_64\eclipse-escet-v5.0\workspace\CIFBenchmarks-5.0.0.v20241003-060816\sudoku\sudoku.cif"/>
                <type xmi:type="types:IntType" xmi:id="725">
                  <position xmi:type="position:Position" xmi:id="726" source="File &quot;C:\Users\rober\Downloads\eclipse-escet-v5.0-win32.win32.x86_64\eclipse-escet-v5.0\workspace\CIFBenchmarks-5.0.0.v20241003-060816\sudoku\sudoku.cif&quot;: " startLine="76" endOffset="2480" startColumn="22" endLine="76" endColumn="26" startOffset="2476" location="C:\Users\rober\Downloads\eclipse-escet-v5.0-win32.win32.x86_64\eclipse-escet-v5.0\workspace\CIFBenchmarks-5.0.0.v20241003-060816\sudoku\sudoku.cif"/>
                </type>
              </right>
            </left>
            <right xmi:type="expressions:BinaryExpression" xmi:id="727" operator="Equal">
              <position xmi:type="position:Position" xmi:id="728" source="File &quot;C:\Users\rober\Downloads\eclipse-escet-v5.0-win32.win32.x86_64\eclipse-escet-v5.0\workspace\CIFBenchmarks-5.0.0.v20241003-060816\sudoku\sudoku.cif&quot;: " startLine="76" endOffset="2495" startColumn="41" endLine="76" endColumn="41" startOffset="2495" location="C:\Users\rober\Downloads\eclipse-escet-v5.0-win32.win32.x86_64\eclipse-escet-v5.0\workspace\CIFBenchmarks-5.0.0.v20241003-060816\sudoku\sudoku.cif"/>
              <type xmi:type="types:BoolType" xmi:id="729">
                <position xmi:type="position:Position" xmi:id="730" source="File &quot;C:\Users\rober\Downloads\eclipse-escet-v5.0-win32.win32.x86_64\eclipse-escet-v5.0\workspace\CIFBenchmarks-5.0.0.v20241003-060816\sudoku\sudoku.cif&quot;: " startLine="76" endOffset="2495" startColumn="41" endLine="76" endColumn="41" startOffset="2495" location="C:\Users\rober\Downloads\eclipse-escet-v5.0-win32.win32.x86_64\eclipse-escet-v5.0\workspace\CIFBenchmarks-5.0.0.v20241003-060816\sudoku\sudoku.cif"/>
              </type>
              <left xmi:type="expressions:CompInstWrapExpression" xmi:id="731" instantiation="1113">
                <position xmi:type="position:Position" xmi:id="732" source="File &quot;C:\Users\rober\Downloads\eclipse-escet-v5.0-win32.win32.x86_64\eclipse-escet-v5.0\workspace\CIFBenchmarks-5.0.0.v20241003-060816\sudoku\sudoku.cif&quot;: " startLine="76" endOffset="2493" startColumn="31" endLine="76" endColumn="39" startOffset="2485" location="C:\Users\rober\Downloads\eclipse-escet-v5.0-win32.win32.x86_64\eclipse-escet-v5.0\workspace\CIFBenchmarks-5.0.0.v20241003-060816\sudoku\sudoku.cif"/>
                <type xmi:type="types:IntType" xmi:id="733" lower="0" upper="4">
                  <position xmi:type="position:Position" xmi:id="734" source="File &quot;C:\Users\rober\Downloads\eclipse-escet-v5.0-win32.win32.x86_64\eclipse-escet-v5.0\workspace\CIFBenchmarks-5.0.0.v20241003-060816\sudoku\sudoku.cif&quot;: " startLine="76" endOffset="2493" startColumn="31" endLine="76" endColumn="39" startOffset="2485" location="C:\Users\rober\Downloads\eclipse-escet-v5.0-win32.win32.x86_64\eclipse-escet-v5.0\workspace\CIFBenchmarks-5.0.0.v20241003-060816\sudoku\sudoku.cif"/>
                </type>
                <reference xmi:type="expressions:DiscVariableExpression" xmi:id="735" variable="15">
                  <position xmi:type="position:Position" xmi:id="736" source="File &quot;C:\Users\rober\Downloads\eclipse-escet-v5.0-win32.win32.x86_64\eclipse-escet-v5.0\workspace\CIFBenchmarks-5.0.0.v20241003-060816\sudoku\sudoku.cif&quot;: " startLine="76" endOffset="2493" startColumn="31" endLine="76" endColumn="39" startOffset="2485" location="C:\Users\rober\Downloads\eclipse-escet-v5.0-win32.win32.x86_64\eclipse-escet-v5.0\workspace\CIFBenchmarks-5.0.0.v20241003-060816\sudoku\sudoku.cif"/>
                  <type xmi:type="types:IntType" xmi:id="737" lower="0" upper="4">
                    <position xmi:type="position:Position" xmi:id="738" source="File &quot;C:\Users\rober\Downloads\eclipse-escet-v5.0-win32.win32.x86_64\eclipse-escet-v5.0\workspace\CIFBenchmarks-5.0.0.v20241003-060816\sudoku\sudoku.cif&quot;: " startLine="76" endOffset="2493" startColumn="31" endLine="76" endColumn="39" startOffset="2485" location="C:\Users\rober\Downloads\eclipse-escet-v5.0-win32.win32.x86_64\eclipse-escet-v5.0\workspace\CIFBenchmarks-5.0.0.v20241003-060816\sudoku\sudoku.cif"/>
                  </type>
                </reference>
              </left>
              <right xmi:type="expressions:AlgVariableExpression" xmi:id="739" variable="1081">
                <position xmi:type="position:Position" xmi:id="740" source="File &quot;C:\Users\rober\Downloads\eclipse-escet-v5.0-win32.win32.x86_64\eclipse-escet-v5.0\workspace\CIFBenchmarks-5.0.0.v20241003-060816\sudoku\sudoku.cif&quot;: " startLine="76" endOffset="2501" startColumn="43" endLine="76" endColumn="47" startOffset="2497" location="C:\Users\rober\Downloads\eclipse-escet-v5.0-win32.win32.x86_64\eclipse-escet-v5.0\workspace\CIFBenchmarks-5.0.0.v20241003-060816\sudoku\sudoku.cif"/>
                <type xmi:type="types:IntType" xmi:id="741">
                  <position xmi:type="position:Position" xmi:id="742" source="File &quot;C:\Users\rober\Downloads\eclipse-escet-v5.0-win32.win32.x86_64\eclipse-escet-v5.0\workspace\CIFBenchmarks-5.0.0.v20241003-060816\sudoku\sudoku.cif&quot;: " startLine="76" endOffset="2501" startColumn="43" endLine="76" endColumn="47" startOffset="2497" location="C:\Users\rober\Downloads\eclipse-escet-v5.0-win32.win32.x86_64\eclipse-escet-v5.0\workspace\CIFBenchmarks-5.0.0.v20241003-060816\sudoku\sudoku.cif"/>
                </type>
              </right>
            </right>
          </left>
          <right xmi:type="expressions:BinaryExpression" xmi:id="743" operator="Equal">
            <position xmi:type="position:Position" xmi:id="744" source="File &quot;C:\Users\rober\Downloads\eclipse-escet-v5.0-win32.win32.x86_64\eclipse-escet-v5.0\workspace\CIFBenchmarks-5.0.0.v20241003-060816\sudoku\sudoku.cif&quot;: " startLine="76" endOffset="2516" startColumn="62" endLine="76" endColumn="62" startOffset="2516" location="C:\Users\rober\Downloads\eclipse-escet-v5.0-win32.win32.x86_64\eclipse-escet-v5.0\workspace\CIFBenchmarks-5.0.0.v20241003-060816\sudoku\sudoku.cif"/>
            <type xmi:type="types:BoolType" xmi:id="745">
              <position xmi:type="position:Position" xmi:id="746" source="File &quot;C:\Users\rober\Downloads\eclipse-escet-v5.0-win32.win32.x86_64\eclipse-escet-v5.0\workspace\CIFBenchmarks-5.0.0.v20241003-060816\sudoku\sudoku.cif&quot;: " startLine="76" endOffset="2516" startColumn="62" endLine="76" endColumn="62" startOffset="2516" location="C:\Users\rober\Downloads\eclipse-escet-v5.0-win32.win32.x86_64\eclipse-escet-v5.0\workspace\CIFBenchmarks-5.0.0.v20241003-060816\sudoku\sudoku.cif"/>
            </type>
            <left xmi:type="expressions:CompInstWrapExpression" xmi:id="747" instantiation="1129">
              <position xmi:type="position:Position" xmi:id="748" source="File &quot;C:\Users\rober\Downloads\eclipse-escet-v5.0-win32.win32.x86_64\eclipse-escet-v5.0\workspace\CIFBenchmarks-5.0.0.v20241003-060816\sudoku\sudoku.cif&quot;: " startLine="76" endOffset="2514" startColumn="52" endLine="76" endColumn="60" startOffset="2506" location="C:\Users\rober\Downloads\eclipse-escet-v5.0-win32.win32.x86_64\eclipse-escet-v5.0\workspace\CIFBenchmarks-5.0.0.v20241003-060816\sudoku\sudoku.cif"/>
              <type xmi:type="types:IntType" xmi:id="749" lower="0" upper="4">
                <position xmi:type="position:Position" xmi:id="750" source="File &quot;C:\Users\rober\Downloads\eclipse-escet-v5.0-win32.win32.x86_64\eclipse-escet-v5.0\workspace\CIFBenchmarks-5.0.0.v20241003-060816\sudoku\sudoku.cif&quot;: " startLine="76" endOffset="2514" startColumn="52" endLine="76" endColumn="60" startOffset="2506" location="C:\Users\rober\Downloads\eclipse-escet-v5.0-win32.win32.x86_64\eclipse-escet-v5.0\workspace\CIFBenchmarks-5.0.0.v20241003-060816\sudoku\sudoku.cif"/>
              </type>
              <reference xmi:type="expressions:DiscVariableExpression" xmi:id="751" variable="15">
                <position xmi:type="position:Position" xmi:id="752" source="File &quot;C:\Users\rober\Downloads\eclipse-escet-v5.0-win32.win32.x86_64\eclipse-escet-v5.0\workspace\CIFBenchmarks-5.0.0.v20241003-060816\sudoku\sudoku.cif&quot;: " startLine="76" endOffset="2514" startColumn="52" endLine="76" endColumn="60" startOffset="2506" location="C:\Users\rober\Downloads\eclipse-escet-v5.0-win32.win32.x86_64\eclipse-escet-v5.0\workspace\CIFBenchmarks-5.0.0.v20241003-060816\sudoku\sudoku.cif"/>
                <type xmi:type="types:IntType" xmi:id="753" lower="0" upper="4">
                  <position xmi:type="position:Position" xmi:id="754" source="File &quot;C:\Users\rober\Downloads\eclipse-escet-v5.0-win32.win32.x86_64\eclipse-escet-v5.0\workspace\CIFBenchmarks-5.0.0.v20241003-060816\sudoku\sudoku.cif&quot;: " startLine="76" endOffset="2514" startColumn="52" endLine="76" endColumn="60" startOffset="2506" location="C:\Users\rober\Downloads\eclipse-escet-v5.0-win32.win32.x86_64\eclipse-escet-v5.0\workspace\CIFBenchmarks-5.0.0.v20241003-060816\sudoku\sudoku.cif"/>
                </type>
              </reference>
            </left>
            <right xmi:type="expressions:AlgVariableExpression" xmi:id="755" variable="1081">
              <position xmi:type="position:Position" xmi:id="756" source="File &quot;C:\Users\rober\Downloads\eclipse-escet-v5.0-win32.win32.x86_64\eclipse-escet-v5.0\workspace\CIFBenchmarks-5.0.0.v20241003-060816\sudoku\sudoku.cif&quot;: " startLine="76" endOffset="2522" startColumn="64" endLine="76" endColumn="68" startOffset="2518" location="C:\Users\rober\Downloads\eclipse-escet-v5.0-win32.win32.x86_64\eclipse-escet-v5.0\workspace\CIFBenchmarks-5.0.0.v20241003-060816\sudoku\sudoku.cif"/>
              <type xmi:type="types:IntType" xmi:id="757">
                <position xmi:type="position:Position" xmi:id="758" source="File &quot;C:\Users\rober\Downloads\eclipse-escet-v5.0-win32.win32.x86_64\eclipse-escet-v5.0\workspace\CIFBenchmarks-5.0.0.v20241003-060816\sudoku\sudoku.cif&quot;: " startLine="76" endOffset="2522" startColumn="64" endLine="76" endColumn="68" startOffset="2518" location="C:\Users\rober\Downloads\eclipse-escet-v5.0-win32.win32.x86_64\eclipse-escet-v5.0\workspace\CIFBenchmarks-5.0.0.v20241003-060816\sudoku\sudoku.cif"/>
              </type>
            </right>
          </right>
        </left>
        <right xmi:type="expressions:BinaryExpression" xmi:id="759" operator="Equal">
          <position xmi:type="position:Position" xmi:id="760" source="File &quot;C:\Users\rober\Downloads\eclipse-escet-v5.0-win32.win32.x86_64\eclipse-escet-v5.0\workspace\CIFBenchmarks-5.0.0.v20241003-060816\sudoku\sudoku.cif&quot;: " startLine="76" endOffset="2537" startColumn="83" endLine="76" endColumn="83" startOffset="2537" location="C:\Users\rober\Downloads\eclipse-escet-v5.0-win32.win32.x86_64\eclipse-escet-v5.0\workspace\CIFBenchmarks-5.0.0.v20241003-060816\sudoku\sudoku.cif"/>
          <type xmi:type="types:BoolType" xmi:id="761">
            <position xmi:type="position:Position" xmi:id="762" source="File &quot;C:\Users\rober\Downloads\eclipse-escet-v5.0-win32.win32.x86_64\eclipse-escet-v5.0\workspace\CIFBenchmarks-5.0.0.v20241003-060816\sudoku\sudoku.cif&quot;: " startLine="76" endOffset="2537" startColumn="83" endLine="76" endColumn="83" startOffset="2537" location="C:\Users\rober\Downloads\eclipse-escet-v5.0-win32.win32.x86_64\eclipse-escet-v5.0\workspace\CIFBenchmarks-5.0.0.v20241003-060816\sudoku\sudoku.cif"/>
          </type>
          <left xmi:type="expressions:CompInstWrapExpression" xmi:id="763" instantiation="1145">
            <position xmi:type="position:Position" xmi:id="764" source="File &quot;C:\Users\rober\Downloads\eclipse-escet-v5.0-win32.win32.x86_64\eclipse-escet-v5.0\workspace\CIFBenchmarks-5.0.0.v20241003-060816\sudoku\sudoku.cif&quot;: " startLine="76" endOffset="2535" startColumn="73" endLine="76" endColumn="81" startOffset="2527" location="C:\Users\rober\Downloads\eclipse-escet-v5.0-win32.win32.x86_64\eclipse-escet-v5.0\workspace\CIFBenchmarks-5.0.0.v20241003-060816\sudoku\sudoku.cif"/>
            <type xmi:type="types:IntType" xmi:id="765" lower="0" upper="4">
              <position xmi:type="position:Position" xmi:id="766" source="File &quot;C:\Users\rober\Downloads\eclipse-escet-v5.0-win32.win32.x86_64\eclipse-escet-v5.0\workspace\CIFBenchmarks-5.0.0.v20241003-060816\sudoku\sudoku.cif&quot;: " startLine="76" endOffset="2535" startColumn="73" endLine="76" endColumn="81" startOffset="2527" location="C:\Users\rober\Downloads\eclipse-escet-v5.0-win32.win32.x86_64\eclipse-escet-v5.0\workspace\CIFBenchmarks-5.0.0.v20241003-060816\sudoku\sudoku.cif"/>
            </type>
            <reference xmi:type="expressions:DiscVariableExpression" xmi:id="767" variable="15">
              <position xmi:type="position:Position" xmi:id="768" source="File &quot;C:\Users\rober\Downloads\eclipse-escet-v5.0-win32.win32.x86_64\eclipse-escet-v5.0\workspace\CIFBenchmarks-5.0.0.v20241003-060816\sudoku\sudoku.cif&quot;: " startLine="76" endOffset="2535" startColumn="73" endLine="76" endColumn="81" startOffset="2527" location="C:\Users\rober\Downloads\eclipse-escet-v5.0-win32.win32.x86_64\eclipse-escet-v5.0\workspace\CIFBenchmarks-5.0.0.v20241003-060816\sudoku\sudoku.cif"/>
              <type xmi:type="types:IntType" xmi:id="769" lower="0" upper="4">
                <position xmi:type="position:Position" xmi:id="770" source="File &quot;C:\Users\rober\Downloads\eclipse-escet-v5.0-win32.win32.x86_64\eclipse-escet-v5.0\workspace\CIFBenchmarks-5.0.0.v20241003-060816\sudoku\sudoku.cif&quot;: " startLine="76" endOffset="2535" startColumn="73" endLine="76" endColumn="81" startOffset="2527" location="C:\Users\rober\Downloads\eclipse-escet-v5.0-win32.win32.x86_64\eclipse-escet-v5.0\workspace\CIFBenchmarks-5.0.0.v20241003-060816\sudoku\sudoku.cif"/>
              </type>
            </reference>
          </left>
          <right xmi:type="expressions:AlgVariableExpression" xmi:id="771" variable="1081">
            <position xmi:type="position:Position" xmi:id="772" source="File &quot;C:\Users\rober\Downloads\eclipse-escet-v5.0-win32.win32.x86_64\eclipse-escet-v5.0\workspace\CIFBenchmarks-5.0.0.v20241003-060816\sudoku\sudoku.cif&quot;: " startLine="76" endOffset="2543" startColumn="85" endLine="76" endColumn="89" startOffset="2539" location="C:\Users\rober\Downloads\eclipse-escet-v5.0-win32.win32.x86_64\eclipse-escet-v5.0\workspace\CIFBenchmarks-5.0.0.v20241003-060816\sudoku\sudoku.cif"/>
            <type xmi:type="types:IntType" xmi:id="773">
              <position xmi:type="position:Position" xmi:id="774" source="File &quot;C:\Users\rober\Downloads\eclipse-escet-v5.0-win32.win32.x86_64\eclipse-escet-v5.0\workspace\CIFBenchmarks-5.0.0.v20241003-060816\sudoku\sudoku.cif&quot;: " startLine="76" endOffset="2543" startColumn="85" endLine="76" endColumn="89" startOffset="2539" location="C:\Users\rober\Downloads\eclipse-escet-v5.0-win32.win32.x86_64\eclipse-escet-v5.0\workspace\CIFBenchmarks-5.0.0.v20241003-060816\sudoku\sudoku.cif"/>
            </type>
          </right>
        </right>
      </markeds>
      <markeds xmi:type="expressions:BinaryExpression" xmi:id="775">
        <position xmi:type="position:Position" xmi:id="776" source="File &quot;C:\Users\rober\Downloads\eclipse-escet-v5.0-win32.win32.x86_64\eclipse-escet-v5.0\workspace\CIFBenchmarks-5.0.0.v20241003-060816\sudoku\sudoku.cif&quot;: " startLine="79" endOffset="2657" startColumn="70" endLine="79" endColumn="71" startOffset="2656" location="C:\Users\rober\Downloads\eclipse-escet-v5.0-win32.win32.x86_64\eclipse-escet-v5.0\workspace\CIFBenchmarks-5.0.0.v20241003-060816\sudoku\sudoku.cif"/>
        <type xmi:type="types:BoolType" xmi:id="777">
          <position xmi:type="position:Position" xmi:id="778" source="File &quot;C:\Users\rober\Downloads\eclipse-escet-v5.0-win32.win32.x86_64\eclipse-escet-v5.0\workspace\CIFBenchmarks-5.0.0.v20241003-060816\sudoku\sudoku.cif&quot;: " startLine="79" endOffset="2657" startColumn="70" endLine="79" endColumn="71" startOffset="2656" location="C:\Users\rober\Downloads\eclipse-escet-v5.0-win32.win32.x86_64\eclipse-escet-v5.0\workspace\CIFBenchmarks-5.0.0.v20241003-060816\sudoku\sudoku.cif"/>
        </type>
        <left xmi:type="expressions:BinaryExpression" xmi:id="779">
          <position xmi:type="position:Position" xmi:id="780" source="File &quot;C:\Users\rober\Downloads\eclipse-escet-v5.0-win32.win32.x86_64\eclipse-escet-v5.0\workspace\CIFBenchmarks-5.0.0.v20241003-060816\sudoku\sudoku.cif&quot;: " startLine="79" endOffset="2636" startColumn="49" endLine="79" endColumn="50" startOffset="2635" location="C:\Users\rober\Downloads\eclipse-escet-v5.0-win32.win32.x86_64\eclipse-escet-v5.0\workspace\CIFBenchmarks-5.0.0.v20241003-060816\sudoku\sudoku.cif"/>
          <type xmi:type="types:BoolType" xmi:id="781">
            <position xmi:type="position:Position" xmi:id="782" source="File &quot;C:\Users\rober\Downloads\eclipse-escet-v5.0-win32.win32.x86_64\eclipse-escet-v5.0\workspace\CIFBenchmarks-5.0.0.v20241003-060816\sudoku\sudoku.cif&quot;: " startLine="79" endOffset="2636" startColumn="49" endLine="79" endColumn="50" startOffset="2635" location="C:\Users\rober\Downloads\eclipse-escet-v5.0-win32.win32.x86_64\eclipse-escet-v5.0\workspace\CIFBenchmarks-5.0.0.v20241003-060816\sudoku\sudoku.cif"/>
          </type>
          <left xmi:type="expressions:BinaryExpression" xmi:id="783">
            <position xmi:type="position:Position" xmi:id="784" source="File &quot;C:\Users\rober\Downloads\eclipse-escet-v5.0-win32.win32.x86_64\eclipse-escet-v5.0\workspace\CIFBenchmarks-5.0.0.v20241003-060816\sudoku\sudoku.cif&quot;: " startLine="79" endOffset="2615" startColumn="28" endLine="79" endColumn="29" startOffset="2614" location="C:\Users\rober\Downloads\eclipse-escet-v5.0-win32.win32.x86_64\eclipse-escet-v5.0\workspace\CIFBenchmarks-5.0.0.v20241003-060816\sudoku\sudoku.cif"/>
            <type xmi:type="types:BoolType" xmi:id="785">
              <position xmi:type="position:Position" xmi:id="786" source="File &quot;C:\Users\rober\Downloads\eclipse-escet-v5.0-win32.win32.x86_64\eclipse-escet-v5.0\workspace\CIFBenchmarks-5.0.0.v20241003-060816\sudoku\sudoku.cif&quot;: " startLine="79" endOffset="2615" startColumn="28" endLine="79" endColumn="29" startOffset="2614" location="C:\Users\rober\Downloads\eclipse-escet-v5.0-win32.win32.x86_64\eclipse-escet-v5.0\workspace\CIFBenchmarks-5.0.0.v20241003-060816\sudoku\sudoku.cif"/>
            </type>
            <left xmi:type="expressions:BinaryExpression" xmi:id="787" operator="Equal">
              <position xmi:type="position:Position" xmi:id="788" source="File &quot;C:\Users\rober\Downloads\eclipse-escet-v5.0-win32.win32.x86_64\eclipse-escet-v5.0\workspace\CIFBenchmarks-5.0.0.v20241003-060816\sudoku\sudoku.cif&quot;: " startLine="79" endOffset="2606" startColumn="20" endLine="79" endColumn="20" startOffset="2606" location="C:\Users\rober\Downloads\eclipse-escet-v5.0-win32.win32.x86_64\eclipse-escet-v5.0\workspace\CIFBenchmarks-5.0.0.v20241003-060816\sudoku\sudoku.cif"/>
              <type xmi:type="types:BoolType" xmi:id="789">
                <position xmi:type="position:Position" xmi:id="790" source="File &quot;C:\Users\rober\Downloads\eclipse-escet-v5.0-win32.win32.x86_64\eclipse-escet-v5.0\workspace\CIFBenchmarks-5.0.0.v20241003-060816\sudoku\sudoku.cif&quot;: " startLine="79" endOffset="2606" startColumn="20" endLine="79" endColumn="20" startOffset="2606" location="C:\Users\rober\Downloads\eclipse-escet-v5.0-win32.win32.x86_64\eclipse-escet-v5.0\workspace\CIFBenchmarks-5.0.0.v20241003-060816\sudoku\sudoku.cif"/>
              </type>
              <left xmi:type="expressions:CompInstWrapExpression" xmi:id="791" instantiation="1085">
                <position xmi:type="position:Position" xmi:id="792" source="File &quot;C:\Users\rober\Downloads\eclipse-escet-v5.0-win32.win32.x86_64\eclipse-escet-v5.0\workspace\CIFBenchmarks-5.0.0.v20241003-060816\sudoku\sudoku.cif&quot;: " startLine="79" endOffset="2604" startColumn="10" endLine="79" endColumn="18" startOffset="2596" location="C:\Users\rober\Downloads\eclipse-escet-v5.0-win32.win32.x86_64\eclipse-escet-v5.0\workspace\CIFBenchmarks-5.0.0.v20241003-060816\sudoku\sudoku.cif"/>
                <type xmi:type="types:IntType" xmi:id="793" lower="0" upper="4">
                  <position xmi:type="position:Position" xmi:id="794" source="File &quot;C:\Users\rober\Downloads\eclipse-escet-v5.0-win32.win32.x86_64\eclipse-escet-v5.0\workspace\CIFBenchmarks-5.0.0.v20241003-060816\sudoku\sudoku.cif&quot;: " startLine="79" endOffset="2604" startColumn="10" endLine="79" endColumn="18" startOffset="2596" location="C:\Users\rober\Downloads\eclipse-escet-v5.0-win32.win32.x86_64\eclipse-escet-v5.0\workspace\CIFBenchmarks-5.0.0.v20241003-060816\sudoku\sudoku.cif"/>
                </type>
                <reference xmi:type="expressions:DiscVariableExpression" xmi:id="795" variable="15">
                  <position xmi:type="position:Position" xmi:id="796" source="File &quot;C:\Users\rober\Downloads\eclipse-escet-v5.0-win32.win32.x86_64\eclipse-escet-v5.0\workspace\CIFBenchmarks-5.0.0.v20241003-060816\sudoku\sudoku.cif&quot;: " startLine="79" endOffset="2604" startColumn="10" endLine="79" endColumn="18" startOffset="2596" location="C:\Users\rober\Downloads\eclipse-escet-v5.0-win32.win32.x86_64\eclipse-escet-v5.0\workspace\CIFBenchmarks-5.0.0.v20241003-060816\sudoku\sudoku.cif"/>
                  <type xmi:type="types:IntType" xmi:id="797" lower="0" upper="4">
                    <position xmi:type="position:Position" xmi:id="798" source="File &quot;C:\Users\rober\Downloads\eclipse-escet-v5.0-win32.win32.x86_64\eclipse-escet-v5.0\workspace\CIFBenchmarks-5.0.0.v20241003-060816\sudoku\sudoku.cif&quot;: " startLine="79" endOffset="2604" startColumn="10" endLine="79" endColumn="18" startOffset="2596" location="C:\Users\rober\Downloads\eclipse-escet-v5.0-win32.win32.x86_64\eclipse-escet-v5.0\workspace\CIFBenchmarks-5.0.0.v20241003-060816\sudoku\sudoku.cif"/>
                  </type>
                </reference>
              </left>
              <right xmi:type="expressions:AlgVariableExpression" xmi:id="799" variable="1081">
                <position xmi:type="position:Position" xmi:id="800" source="File &quot;C:\Users\rober\Downloads\eclipse-escet-v5.0-win32.win32.x86_64\eclipse-escet-v5.0\workspace\CIFBenchmarks-5.0.0.v20241003-060816\sudoku\sudoku.cif&quot;: " startLine="79" endOffset="2612" startColumn="22" endLine="79" endColumn="26" startOffset="2608" location="C:\Users\rober\Downloads\eclipse-escet-v5.0-win32.win32.x86_64\eclipse-escet-v5.0\workspace\CIFBenchmarks-5.0.0.v20241003-060816\sudoku\sudoku.cif"/>
                <type xmi:type="types:IntType" xmi:id="801">
                  <position xmi:type="position:Position" xmi:id="802" source="File &quot;C:\Users\rober\Downloads\eclipse-escet-v5.0-win32.win32.x86_64\eclipse-escet-v5.0\workspace\CIFBenchmarks-5.0.0.v20241003-060816\sudoku\sudoku.cif&quot;: " startLine="79" endOffset="2612" startColumn="22" endLine="79" endColumn="26" startOffset="2608" location="C:\Users\rober\Downloads\eclipse-escet-v5.0-win32.win32.x86_64\eclipse-escet-v5.0\workspace\CIFBenchmarks-5.0.0.v20241003-060816\sudoku\sudoku.cif"/>
                </type>
              </right>
            </left>
            <right xmi:type="expressions:BinaryExpression" xmi:id="803" operator="Equal">
              <position xmi:type="position:Position" xmi:id="804" source="File &quot;C:\Users\rober\Downloads\eclipse-escet-v5.0-win32.win32.x86_64\eclipse-escet-v5.0\workspace\CIFBenchmarks-5.0.0.v20241003-060816\sudoku\sudoku.cif&quot;: " startLine="79" endOffset="2627" startColumn="41" endLine="79" endColumn="41" startOffset="2627" location="C:\Users\rober\Downloads\eclipse-escet-v5.0-win32.win32.x86_64\eclipse-escet-v5.0\workspace\CIFBenchmarks-5.0.0.v20241003-060816\sudoku\sudoku.cif"/>
              <type xmi:type="types:BoolType" xmi:id="805">
                <position xmi:type="position:Position" xmi:id="806" source="File &quot;C:\Users\rober\Downloads\eclipse-escet-v5.0-win32.win32.x86_64\eclipse-escet-v5.0\workspace\CIFBenchmarks-5.0.0.v20241003-060816\sudoku\sudoku.cif&quot;: " startLine="79" endOffset="2627" startColumn="41" endLine="79" endColumn="41" startOffset="2627" location="C:\Users\rober\Downloads\eclipse-escet-v5.0-win32.win32.x86_64\eclipse-escet-v5.0\workspace\CIFBenchmarks-5.0.0.v20241003-060816\sudoku\sudoku.cif"/>
              </type>
              <left xmi:type="expressions:CompInstWrapExpression" xmi:id="807" instantiation="1089">
                <position xmi:type="position:Position" xmi:id="808" source="File &quot;C:\Users\rober\Downloads\eclipse-escet-v5.0-win32.win32.x86_64\eclipse-escet-v5.0\workspace\CIFBenchmarks-5.0.0.v20241003-060816\sudoku\sudoku.cif&quot;: " startLine="79" endOffset="2625" startColumn="31" endLine="79" endColumn="39" startOffset="2617" location="C:\Users\rober\Downloads\eclipse-escet-v5.0-win32.win32.x86_64\eclipse-escet-v5.0\workspace\CIFBenchmarks-5.0.0.v20241003-060816\sudoku\sudoku.cif"/>
                <type xmi:type="types:IntType" xmi:id="809" lower="0" upper="4">
                  <position xmi:type="position:Position" xmi:id="810" source="File &quot;C:\Users\rober\Downloads\eclipse-escet-v5.0-win32.win32.x86_64\eclipse-escet-v5.0\workspace\CIFBenchmarks-5.0.0.v20241003-060816\sudoku\sudoku.cif&quot;: " startLine="79" endOffset="2625" startColumn="31" endLine="79" endColumn="39" startOffset="2617" location="C:\Users\rober\Downloads\eclipse-escet-v5.0-win32.win32.x86_64\eclipse-escet-v5.0\workspace\CIFBenchmarks-5.0.0.v20241003-060816\sudoku\sudoku.cif"/>
                </type>
                <reference xmi:type="expressions:DiscVariableExpression" xmi:id="811" variable="15">
                  <position xmi:type="position:Position" xmi:id="812" source="File &quot;C:\Users\rober\Downloads\eclipse-escet-v5.0-win32.win32.x86_64\eclipse-escet-v5.0\workspace\CIFBenchmarks-5.0.0.v20241003-060816\sudoku\sudoku.cif&quot;: " startLine="79" endOffset="2625" startColumn="31" endLine="79" endColumn="39" startOffset="2617" location="C:\Users\rober\Downloads\eclipse-escet-v5.0-win32.win32.x86_64\eclipse-escet-v5.0\workspace\CIFBenchmarks-5.0.0.v20241003-060816\sudoku\sudoku.cif"/>
                  <type xmi:type="types:IntType" xmi:id="813" lower="0" upper="4">
                    <position xmi:type="position:Position" xmi:id="814" source="File &quot;C:\Users\rober\Downloads\eclipse-escet-v5.0-win32.win32.x86_64\eclipse-escet-v5.0\workspace\CIFBenchmarks-5.0.0.v20241003-060816\sudoku\sudoku.cif&quot;: " startLine="79" endOffset="2625" startColumn="31" endLine="79" endColumn="39" startOffset="2617" location="C:\Users\rober\Downloads\eclipse-escet-v5.0-win32.win32.x86_64\eclipse-escet-v5.0\workspace\CIFBenchmarks-5.0.0.v20241003-060816\sudoku\sudoku.cif"/>
                  </type>
                </reference>
              </left>
              <right xmi:type="expressions:AlgVariableExpression" xmi:id="815" variable="1081">
                <position xmi:type="position:Position" xmi:id="816" source="File &quot;C:\Users\rober\Downloads\eclipse-escet-v5.0-win32.win32.x86_64\eclipse-escet-v5.0\workspace\CIFBenchmarks-5.0.0.v20241003-060816\sudoku\sudoku.cif&quot;: " startLine="79" endOffset="2633" startColumn="43" endLine="79" endColumn="47" startOffset="2629" location="C:\Users\rober\Downloads\eclipse-escet-v5.0-win32.win32.x86_64\eclipse-escet-v5.0\workspace\CIFBenchmarks-5.0.0.v20241003-060816\sudoku\sudoku.cif"/>
                <type xmi:type="types:IntType" xmi:id="817">
                  <position xmi:type="position:Position" xmi:id="818" source="File &quot;C:\Users\rober\Downloads\eclipse-escet-v5.0-win32.win32.x86_64\eclipse-escet-v5.0\workspace\CIFBenchmarks-5.0.0.v20241003-060816\sudoku\sudoku.cif&quot;: " startLine="79" endOffset="2633" startColumn="43" endLine="79" endColumn="47" startOffset="2629" location="C:\Users\rober\Downloads\eclipse-escet-v5.0-win32.win32.x86_64\eclipse-escet-v5.0\workspace\CIFBenchmarks-5.0.0.v20241003-060816\sudoku\sudoku.cif"/>
                </type>
              </right>
            </right>
          </left>
          <right xmi:type="expressions:BinaryExpression" xmi:id="819" operator="Equal">
            <position xmi:type="position:Position" xmi:id="820" source="File &quot;C:\Users\rober\Downloads\eclipse-escet-v5.0-win32.win32.x86_64\eclipse-escet-v5.0\workspace\CIFBenchmarks-5.0.0.v20241003-060816\sudoku\sudoku.cif&quot;: " startLine="79" endOffset="2648" startColumn="62" endLine="79" endColumn="62" startOffset="2648" location="C:\Users\rober\Downloads\eclipse-escet-v5.0-win32.win32.x86_64\eclipse-escet-v5.0\workspace\CIFBenchmarks-5.0.0.v20241003-060816\sudoku\sudoku.cif"/>
            <type xmi:type="types:BoolType" xmi:id="821">
              <position xmi:type="position:Position" xmi:id="822" source="File &quot;C:\Users\rober\Downloads\eclipse-escet-v5.0-win32.win32.x86_64\eclipse-escet-v5.0\workspace\CIFBenchmarks-5.0.0.v20241003-060816\sudoku\sudoku.cif&quot;: " startLine="79" endOffset="2648" startColumn="62" endLine="79" endColumn="62" startOffset="2648" location="C:\Users\rober\Downloads\eclipse-escet-v5.0-win32.win32.x86_64\eclipse-escet-v5.0\workspace\CIFBenchmarks-5.0.0.v20241003-060816\sudoku\sudoku.cif"/>
            </type>
            <left xmi:type="expressions:CompInstWrapExpression" xmi:id="823" instantiation="1101">
              <position xmi:type="position:Position" xmi:id="824" source="File &quot;C:\Users\rober\Downloads\eclipse-escet-v5.0-win32.win32.x86_64\eclipse-escet-v5.0\workspace\CIFBenchmarks-5.0.0.v20241003-060816\sudoku\sudoku.cif&quot;: " startLine="79" endOffset="2646" startColumn="52" endLine="79" endColumn="60" startOffset="2638" location="C:\Users\rober\Downloads\eclipse-escet-v5.0-win32.win32.x86_64\eclipse-escet-v5.0\workspace\CIFBenchmarks-5.0.0.v20241003-060816\sudoku\sudoku.cif"/>
              <type xmi:type="types:IntType" xmi:id="825" lower="0" upper="4">
                <position xmi:type="position:Position" xmi:id="826" source="File &quot;C:\Users\rober\Downloads\eclipse-escet-v5.0-win32.win32.x86_64\eclipse-escet-v5.0\workspace\CIFBenchmarks-5.0.0.v20241003-060816\sudoku\sudoku.cif&quot;: " startLine="79" endOffset="2646" startColumn="52" endLine="79" endColumn="60" startOffset="2638" location="C:\Users\rober\Downloads\eclipse-escet-v5.0-win32.win32.x86_64\eclipse-escet-v5.0\workspace\CIFBenchmarks-5.0.0.v20241003-060816\sudoku\sudoku.cif"/>
              </type>
              <reference xmi:type="expressions:DiscVariableExpression" xmi:id="827" variable="15">
                <position xmi:type="position:Position" xmi:id="828" source="File &quot;C:\Users\rober\Downloads\eclipse-escet-v5.0-win32.win32.x86_64\eclipse-escet-v5.0\workspace\CIFBenchmarks-5.0.0.v20241003-060816\sudoku\sudoku.cif&quot;: " startLine="79" endOffset="2646" startColumn="52" endLine="79" endColumn="60" startOffset="2638" location="C:\Users\rober\Downloads\eclipse-escet-v5.0-win32.win32.x86_64\eclipse-escet-v5.0\workspace\CIFBenchmarks-5.0.0.v20241003-060816\sudoku\sudoku.cif"/>
                <type xmi:type="types:IntType" xmi:id="829" lower="0" upper="4">
                  <position xmi:type="position:Position" xmi:id="830" source="File &quot;C:\Users\rober\Downloads\eclipse-escet-v5.0-win32.win32.x86_64\eclipse-escet-v5.0\workspace\CIFBenchmarks-5.0.0.v20241003-060816\sudoku\sudoku.cif&quot;: " startLine="79" endOffset="2646" startColumn="52" endLine="79" endColumn="60" startOffset="2638" location="C:\Users\rober\Downloads\eclipse-escet-v5.0-win32.win32.x86_64\eclipse-escet-v5.0\workspace\CIFBenchmarks-5.0.0.v20241003-060816\sudoku\sudoku.cif"/>
                </type>
              </reference>
            </left>
            <right xmi:type="expressions:AlgVariableExpression" xmi:id="831" variable="1081">
              <position xmi:type="position:Position" xmi:id="832" source="File &quot;C:\Users\rober\Downloads\eclipse-escet-v5.0-win32.win32.x86_64\eclipse-escet-v5.0\workspace\CIFBenchmarks-5.0.0.v20241003-060816\sudoku\sudoku.cif&quot;: " startLine="79" endOffset="2654" startColumn="64" endLine="79" endColumn="68" startOffset="2650" location="C:\Users\rober\Downloads\eclipse-escet-v5.0-win32.win32.x86_64\eclipse-escet-v5.0\workspace\CIFBenchmarks-5.0.0.v20241003-060816\sudoku\sudoku.cif"/>
              <type xmi:type="types:IntType" xmi:id="833">
                <position xmi:type="position:Position" xmi:id="834" source="File &quot;C:\Users\rober\Downloads\eclipse-escet-v5.0-win32.win32.x86_64\eclipse-escet-v5.0\workspace\CIFBenchmarks-5.0.0.v20241003-060816\sudoku\sudoku.cif&quot;: " startLine="79" endOffset="2654" startColumn="64" endLine="79" endColumn="68" startOffset="2650" location="C:\Users\rober\Downloads\eclipse-escet-v5.0-win32.win32.x86_64\eclipse-escet-v5.0\workspace\CIFBenchmarks-5.0.0.v20241003-060816\sudoku\sudoku.cif"/>
              </type>
            </right>
          </right>
        </left>
        <right xmi:type="expressions:BinaryExpression" xmi:id="835" operator="Equal">
          <position xmi:type="position:Position" xmi:id="836" source="File &quot;C:\Users\rober\Downloads\eclipse-escet-v5.0-win32.win32.x86_64\eclipse-escet-v5.0\workspace\CIFBenchmarks-5.0.0.v20241003-060816\sudoku\sudoku.cif&quot;: " startLine="79" endOffset="2669" startColumn="83" endLine="79" endColumn="83" startOffset="2669" location="C:\Users\rober\Downloads\eclipse-escet-v5.0-win32.win32.x86_64\eclipse-escet-v5.0\workspace\CIFBenchmarks-5.0.0.v20241003-060816\sudoku\sudoku.cif"/>
          <type xmi:type="types:BoolType" xmi:id="837">
            <position xmi:type="position:Position" xmi:id="838" source="File &quot;C:\Users\rober\Downloads\eclipse-escet-v5.0-win32.win32.x86_64\eclipse-escet-v5.0\workspace\CIFBenchmarks-5.0.0.v20241003-060816\sudoku\sudoku.cif&quot;: " startLine="79" endOffset="2669" startColumn="83" endLine="79" endColumn="83" startOffset="2669" location="C:\Users\rober\Downloads\eclipse-escet-v5.0-win32.win32.x86_64\eclipse-escet-v5.0\workspace\CIFBenchmarks-5.0.0.v20241003-060816\sudoku\sudoku.cif"/>
          </type>
          <left xmi:type="expressions:CompInstWrapExpression" xmi:id="839" instantiation="1105">
            <position xmi:type="position:Position" xmi:id="840" source="File &quot;C:\Users\rober\Downloads\eclipse-escet-v5.0-win32.win32.x86_64\eclipse-escet-v5.0\workspace\CIFBenchmarks-5.0.0.v20241003-060816\sudoku\sudoku.cif&quot;: " startLine="79" endOffset="2667" startColumn="73" endLine="79" endColumn="81" startOffset="2659" location="C:\Users\rober\Downloads\eclipse-escet-v5.0-win32.win32.x86_64\eclipse-escet-v5.0\workspace\CIFBenchmarks-5.0.0.v20241003-060816\sudoku\sudoku.cif"/>
            <type xmi:type="types:IntType" xmi:id="841" lower="0" upper="4">
              <position xmi:type="position:Position" xmi:id="842" source="File &quot;C:\Users\rober\Downloads\eclipse-escet-v5.0-win32.win32.x86_64\eclipse-escet-v5.0\workspace\CIFBenchmarks-5.0.0.v20241003-060816\sudoku\sudoku.cif&quot;: " startLine="79" endOffset="2667" startColumn="73" endLine="79" endColumn="81" startOffset="2659" location="C:\Users\rober\Downloads\eclipse-escet-v5.0-win32.win32.x86_64\eclipse-escet-v5.0\workspace\CIFBenchmarks-5.0.0.v20241003-060816\sudoku\sudoku.cif"/>
            </type>
            <reference xmi:type="expressions:DiscVariableExpression" xmi:id="843" variable="15">
              <position xmi:type="position:Position" xmi:id="844" source="File &quot;C:\Users\rober\Downloads\eclipse-escet-v5.0-win32.win32.x86_64\eclipse-escet-v5.0\workspace\CIFBenchmarks-5.0.0.v20241003-060816\sudoku\sudoku.cif&quot;: " startLine="79" endOffset="2667" startColumn="73" endLine="79" endColumn="81" startOffset="2659" location="C:\Users\rober\Downloads\eclipse-escet-v5.0-win32.win32.x86_64\eclipse-escet-v5.0\workspace\CIFBenchmarks-5.0.0.v20241003-060816\sudoku\sudoku.cif"/>
              <type xmi:type="types:IntType" xmi:id="845" lower="0" upper="4">
                <position xmi:type="position:Position" xmi:id="846" source="File &quot;C:\Users\rober\Downloads\eclipse-escet-v5.0-win32.win32.x86_64\eclipse-escet-v5.0\workspace\CIFBenchmarks-5.0.0.v20241003-060816\sudoku\sudoku.cif&quot;: " startLine="79" endOffset="2667" startColumn="73" endLine="79" endColumn="81" startOffset="2659" location="C:\Users\rober\Downloads\eclipse-escet-v5.0-win32.win32.x86_64\eclipse-escet-v5.0\workspace\CIFBenchmarks-5.0.0.v20241003-060816\sudoku\sudoku.cif"/>
              </type>
            </reference>
          </left>
          <right xmi:type="expressions:AlgVariableExpression" xmi:id="847" variable="1081">
            <position xmi:type="position:Position" xmi:id="848" source="File &quot;C:\Users\rober\Downloads\eclipse-escet-v5.0-win32.win32.x86_64\eclipse-escet-v5.0\workspace\CIFBenchmarks-5.0.0.v20241003-060816\sudoku\sudoku.cif&quot;: " startLine="79" endOffset="2675" startColumn="85" endLine="79" endColumn="89" startOffset="2671" location="C:\Users\rober\Downloads\eclipse-escet-v5.0-win32.win32.x86_64\eclipse-escet-v5.0\workspace\CIFBenchmarks-5.0.0.v20241003-060816\sudoku\sudoku.cif"/>
            <type xmi:type="types:IntType" xmi:id="849">
              <position xmi:type="position:Position" xmi:id="850" source="File &quot;C:\Users\rober\Downloads\eclipse-escet-v5.0-win32.win32.x86_64\eclipse-escet-v5.0\workspace\CIFBenchmarks-5.0.0.v20241003-060816\sudoku\sudoku.cif&quot;: " startLine="79" endOffset="2675" startColumn="85" endLine="79" endColumn="89" startOffset="2671" location="C:\Users\rober\Downloads\eclipse-escet-v5.0-win32.win32.x86_64\eclipse-escet-v5.0\workspace\CIFBenchmarks-5.0.0.v20241003-060816\sudoku\sudoku.cif"/>
            </type>
          </right>
        </right>
      </markeds>
      <markeds xmi:type="expressions:BinaryExpression" xmi:id="851">
        <position xmi:type="position:Position" xmi:id="852" source="File &quot;C:\Users\rober\Downloads\eclipse-escet-v5.0-win32.win32.x86_64\eclipse-escet-v5.0\workspace\CIFBenchmarks-5.0.0.v20241003-060816\sudoku\sudoku.cif&quot;: " startLine="80" endOffset="2748" startColumn="70" endLine="80" endColumn="71" startOffset="2747" location="C:\Users\rober\Downloads\eclipse-escet-v5.0-win32.win32.x86_64\eclipse-escet-v5.0\workspace\CIFBenchmarks-5.0.0.v20241003-060816\sudoku\sudoku.cif"/>
        <type xmi:type="types:BoolType" xmi:id="853">
          <position xmi:type="position:Position" xmi:id="854" source="File &quot;C:\Users\rober\Downloads\eclipse-escet-v5.0-win32.win32.x86_64\eclipse-escet-v5.0\workspace\CIFBenchmarks-5.0.0.v20241003-060816\sudoku\sudoku.cif&quot;: " startLine="80" endOffset="2748" startColumn="70" endLine="80" endColumn="71" startOffset="2747" location="C:\Users\rober\Downloads\eclipse-escet-v5.0-win32.win32.x86_64\eclipse-escet-v5.0\workspace\CIFBenchmarks-5.0.0.v20241003-060816\sudoku\sudoku.cif"/>
        </type>
        <left xmi:type="expressions:BinaryExpression" xmi:id="855">
          <position xmi:type="position:Position" xmi:id="856" source="File &quot;C:\Users\rober\Downloads\eclipse-escet-v5.0-win32.win32.x86_64\eclipse-escet-v5.0\workspace\CIFBenchmarks-5.0.0.v20241003-060816\sudoku\sudoku.cif&quot;: " startLine="80" endOffset="2727" startColumn="49" endLine="80" endColumn="50" startOffset="2726" location="C:\Users\rober\Downloads\eclipse-escet-v5.0-win32.win32.x86_64\eclipse-escet-v5.0\workspace\CIFBenchmarks-5.0.0.v20241003-060816\sudoku\sudoku.cif"/>
          <type xmi:type="types:BoolType" xmi:id="857">
            <position xmi:type="position:Position" xmi:id="858" source="File &quot;C:\Users\rober\Downloads\eclipse-escet-v5.0-win32.win32.x86_64\eclipse-escet-v5.0\workspace\CIFBenchmarks-5.0.0.v20241003-060816\sudoku\sudoku.cif&quot;: " startLine="80" endOffset="2727" startColumn="49" endLine="80" endColumn="50" startOffset="2726" location="C:\Users\rober\Downloads\eclipse-escet-v5.0-win32.win32.x86_64\eclipse-escet-v5.0\workspace\CIFBenchmarks-5.0.0.v20241003-060816\sudoku\sudoku.cif"/>
          </type>
          <left xmi:type="expressions:BinaryExpression" xmi:id="859">
            <position xmi:type="position:Position" xmi:id="860" source="File &quot;C:\Users\rober\Downloads\eclipse-escet-v5.0-win32.win32.x86_64\eclipse-escet-v5.0\workspace\CIFBenchmarks-5.0.0.v20241003-060816\sudoku\sudoku.cif&quot;: " startLine="80" endOffset="2706" startColumn="28" endLine="80" endColumn="29" startOffset="2705" location="C:\Users\rober\Downloads\eclipse-escet-v5.0-win32.win32.x86_64\eclipse-escet-v5.0\workspace\CIFBenchmarks-5.0.0.v20241003-060816\sudoku\sudoku.cif"/>
            <type xmi:type="types:BoolType" xmi:id="861">
              <position xmi:type="position:Position" xmi:id="862" source="File &quot;C:\Users\rober\Downloads\eclipse-escet-v5.0-win32.win32.x86_64\eclipse-escet-v5.0\workspace\CIFBenchmarks-5.0.0.v20241003-060816\sudoku\sudoku.cif&quot;: " startLine="80" endOffset="2706" startColumn="28" endLine="80" endColumn="29" startOffset="2705" location="C:\Users\rober\Downloads\eclipse-escet-v5.0-win32.win32.x86_64\eclipse-escet-v5.0\workspace\CIFBenchmarks-5.0.0.v20241003-060816\sudoku\sudoku.cif"/>
            </type>
            <left xmi:type="expressions:BinaryExpression" xmi:id="863" operator="Equal">
              <position xmi:type="position:Position" xmi:id="864" source="File &quot;C:\Users\rober\Downloads\eclipse-escet-v5.0-win32.win32.x86_64\eclipse-escet-v5.0\workspace\CIFBenchmarks-5.0.0.v20241003-060816\sudoku\sudoku.cif&quot;: " startLine="80" endOffset="2697" startColumn="20" endLine="80" endColumn="20" startOffset="2697" location="C:\Users\rober\Downloads\eclipse-escet-v5.0-win32.win32.x86_64\eclipse-escet-v5.0\workspace\CIFBenchmarks-5.0.0.v20241003-060816\sudoku\sudoku.cif"/>
              <type xmi:type="types:BoolType" xmi:id="865">
                <position xmi:type="position:Position" xmi:id="866" source="File &quot;C:\Users\rober\Downloads\eclipse-escet-v5.0-win32.win32.x86_64\eclipse-escet-v5.0\workspace\CIFBenchmarks-5.0.0.v20241003-060816\sudoku\sudoku.cif&quot;: " startLine="80" endOffset="2697" startColumn="20" endLine="80" endColumn="20" startOffset="2697" location="C:\Users\rober\Downloads\eclipse-escet-v5.0-win32.win32.x86_64\eclipse-escet-v5.0\workspace\CIFBenchmarks-5.0.0.v20241003-060816\sudoku\sudoku.cif"/>
              </type>
              <left xmi:type="expressions:CompInstWrapExpression" xmi:id="867" instantiation="1093">
                <position xmi:type="position:Position" xmi:id="868" source="File &quot;C:\Users\rober\Downloads\eclipse-escet-v5.0-win32.win32.x86_64\eclipse-escet-v5.0\workspace\CIFBenchmarks-5.0.0.v20241003-060816\sudoku\sudoku.cif&quot;: " startLine="80" endOffset="2695" startColumn="10" endLine="80" endColumn="18" startOffset="2687" location="C:\Users\rober\Downloads\eclipse-escet-v5.0-win32.win32.x86_64\eclipse-escet-v5.0\workspace\CIFBenchmarks-5.0.0.v20241003-060816\sudoku\sudoku.cif"/>
                <type xmi:type="types:IntType" xmi:id="869" lower="0" upper="4">
                  <position xmi:type="position:Position" xmi:id="870" source="File &quot;C:\Users\rober\Downloads\eclipse-escet-v5.0-win32.win32.x86_64\eclipse-escet-v5.0\workspace\CIFBenchmarks-5.0.0.v20241003-060816\sudoku\sudoku.cif&quot;: " startLine="80" endOffset="2695" startColumn="10" endLine="80" endColumn="18" startOffset="2687" location="C:\Users\rober\Downloads\eclipse-escet-v5.0-win32.win32.x86_64\eclipse-escet-v5.0\workspace\CIFBenchmarks-5.0.0.v20241003-060816\sudoku\sudoku.cif"/>
                </type>
                <reference xmi:type="expressions:DiscVariableExpression" xmi:id="871" variable="15">
                  <position xmi:type="position:Position" xmi:id="872" source="File &quot;C:\Users\rober\Downloads\eclipse-escet-v5.0-win32.win32.x86_64\eclipse-escet-v5.0\workspace\CIFBenchmarks-5.0.0.v20241003-060816\sudoku\sudoku.cif&quot;: " startLine="80" endOffset="2695" startColumn="10" endLine="80" endColumn="18" startOffset="2687" location="C:\Users\rober\Downloads\eclipse-escet-v5.0-win32.win32.x86_64\eclipse-escet-v5.0\workspace\CIFBenchmarks-5.0.0.v20241003-060816\sudoku\sudoku.cif"/>
                  <type xmi:type="types:IntType" xmi:id="873" lower="0" upper="4">
                    <position xmi:type="position:Position" xmi:id="874" source="File &quot;C:\Users\rober\Downloads\eclipse-escet-v5.0-win32.win32.x86_64\eclipse-escet-v5.0\workspace\CIFBenchmarks-5.0.0.v20241003-060816\sudoku\sudoku.cif&quot;: " startLine="80" endOffset="2695" startColumn="10" endLine="80" endColumn="18" startOffset="2687" location="C:\Users\rober\Downloads\eclipse-escet-v5.0-win32.win32.x86_64\eclipse-escet-v5.0\workspace\CIFBenchmarks-5.0.0.v20241003-060816\sudoku\sudoku.cif"/>
                  </type>
                </reference>
              </left>
              <right xmi:type="expressions:AlgVariableExpression" xmi:id="875" variable="1081">
                <position xmi:type="position:Position" xmi:id="876" source="File &quot;C:\Users\rober\Downloads\eclipse-escet-v5.0-win32.win32.x86_64\eclipse-escet-v5.0\workspace\CIFBenchmarks-5.0.0.v20241003-060816\sudoku\sudoku.cif&quot;: " startLine="80" endOffset="2703" startColumn="22" endLine="80" endColumn="26" startOffset="2699" location="C:\Users\rober\Downloads\eclipse-escet-v5.0-win32.win32.x86_64\eclipse-escet-v5.0\workspace\CIFBenchmarks-5.0.0.v20241003-060816\sudoku\sudoku.cif"/>
                <type xmi:type="types:IntType" xmi:id="877">
                  <position xmi:type="position:Position" xmi:id="878" source="File &quot;C:\Users\rober\Downloads\eclipse-escet-v5.0-win32.win32.x86_64\eclipse-escet-v5.0\workspace\CIFBenchmarks-5.0.0.v20241003-060816\sudoku\sudoku.cif&quot;: " startLine="80" endOffset="2703" startColumn="22" endLine="80" endColumn="26" startOffset="2699" location="C:\Users\rober\Downloads\eclipse-escet-v5.0-win32.win32.x86_64\eclipse-escet-v5.0\workspace\CIFBenchmarks-5.0.0.v20241003-060816\sudoku\sudoku.cif"/>
                </type>
              </right>
            </left>
            <right xmi:type="expressions:BinaryExpression" xmi:id="879" operator="Equal">
              <position xmi:type="position:Position" xmi:id="880" source="File &quot;C:\Users\rober\Downloads\eclipse-escet-v5.0-win32.win32.x86_64\eclipse-escet-v5.0\workspace\CIFBenchmarks-5.0.0.v20241003-060816\sudoku\sudoku.cif&quot;: " startLine="80" endOffset="2718" startColumn="41" endLine="80" endColumn="41" startOffset="2718" location="C:\Users\rober\Downloads\eclipse-escet-v5.0-win32.win32.x86_64\eclipse-escet-v5.0\workspace\CIFBenchmarks-5.0.0.v20241003-060816\sudoku\sudoku.cif"/>
              <type xmi:type="types:BoolType" xmi:id="881">
                <position xmi:type="position:Position" xmi:id="882" source="File &quot;C:\Users\rober\Downloads\eclipse-escet-v5.0-win32.win32.x86_64\eclipse-escet-v5.0\workspace\CIFBenchmarks-5.0.0.v20241003-060816\sudoku\sudoku.cif&quot;: " startLine="80" endOffset="2718" startColumn="41" endLine="80" endColumn="41" startOffset="2718" location="C:\Users\rober\Downloads\eclipse-escet-v5.0-win32.win32.x86_64\eclipse-escet-v5.0\workspace\CIFBenchmarks-5.0.0.v20241003-060816\sudoku\sudoku.cif"/>
              </type>
              <left xmi:type="expressions:CompInstWrapExpression" xmi:id="883" instantiation="1097">
                <position xmi:type="position:Position" xmi:id="884" source="File &quot;C:\Users\rober\Downloads\eclipse-escet-v5.0-win32.win32.x86_64\eclipse-escet-v5.0\workspace\CIFBenchmarks-5.0.0.v20241003-060816\sudoku\sudoku.cif&quot;: " startLine="80" endOffset="2716" startColumn="31" endLine="80" endColumn="39" startOffset="2708" location="C:\Users\rober\Downloads\eclipse-escet-v5.0-win32.win32.x86_64\eclipse-escet-v5.0\workspace\CIFBenchmarks-5.0.0.v20241003-060816\sudoku\sudoku.cif"/>
                <type xmi:type="types:IntType" xmi:id="885" lower="0" upper="4">
                  <position xmi:type="position:Position" xmi:id="886" source="File &quot;C:\Users\rober\Downloads\eclipse-escet-v5.0-win32.win32.x86_64\eclipse-escet-v5.0\workspace\CIFBenchmarks-5.0.0.v20241003-060816\sudoku\sudoku.cif&quot;: " startLine="80" endOffset="2716" startColumn="31" endLine="80" endColumn="39" startOffset="2708" location="C:\Users\rober\Downloads\eclipse-escet-v5.0-win32.win32.x86_64\eclipse-escet-v5.0\workspace\CIFBenchmarks-5.0.0.v20241003-060816\sudoku\sudoku.cif"/>
                </type>
                <reference xmi:type="expressions:DiscVariableExpression" xmi:id="887" variable="15">
                  <position xmi:type="position:Position" xmi:id="888" source="File &quot;C:\Users\rober\Downloads\eclipse-escet-v5.0-win32.win32.x86_64\eclipse-escet-v5.0\workspace\CIFBenchmarks-5.0.0.v20241003-060816\sudoku\sudoku.cif&quot;: " startLine="80" endOffset="2716" startColumn="31" endLine="80" endColumn="39" startOffset="2708" location="C:\Users\rober\Downloads\eclipse-escet-v5.0-win32.win32.x86_64\eclipse-escet-v5.0\workspace\CIFBenchmarks-5.0.0.v20241003-060816\sudoku\sudoku.cif"/>
                  <type xmi:type="types:IntType" xmi:id="889" lower="0" upper="4">
                    <position xmi:type="position:Position" xmi:id="890" source="File &quot;C:\Users\rober\Downloads\eclipse-escet-v5.0-win32.win32.x86_64\eclipse-escet-v5.0\workspace\CIFBenchmarks-5.0.0.v20241003-060816\sudoku\sudoku.cif&quot;: " startLine="80" endOffset="2716" startColumn="31" endLine="80" endColumn="39" startOffset="2708" location="C:\Users\rober\Downloads\eclipse-escet-v5.0-win32.win32.x86_64\eclipse-escet-v5.0\workspace\CIFBenchmarks-5.0.0.v20241003-060816\sudoku\sudoku.cif"/>
                  </type>
                </reference>
              </left>
              <right xmi:type="expressions:AlgVariableExpression" xmi:id="891" variable="1081">
                <position xmi:type="position:Position" xmi:id="892" source="File &quot;C:\Users\rober\Downloads\eclipse-escet-v5.0-win32.win32.x86_64\eclipse-escet-v5.0\workspace\CIFBenchmarks-5.0.0.v20241003-060816\sudoku\sudoku.cif&quot;: " startLine="80" endOffset="2724" startColumn="43" endLine="80" endColumn="47" startOffset="2720" location="C:\Users\rober\Downloads\eclipse-escet-v5.0-win32.win32.x86_64\eclipse-escet-v5.0\workspace\CIFBenchmarks-5.0.0.v20241003-060816\sudoku\sudoku.cif"/>
                <type xmi:type="types:IntType" xmi:id="893">
                  <position xmi:type="position:Position" xmi:id="894" source="File &quot;C:\Users\rober\Downloads\eclipse-escet-v5.0-win32.win32.x86_64\eclipse-escet-v5.0\workspace\CIFBenchmarks-5.0.0.v20241003-060816\sudoku\sudoku.cif&quot;: " startLine="80" endOffset="2724" startColumn="43" endLine="80" endColumn="47" startOffset="2720" location="C:\Users\rober\Downloads\eclipse-escet-v5.0-win32.win32.x86_64\eclipse-escet-v5.0\workspace\CIFBenchmarks-5.0.0.v20241003-060816\sudoku\sudoku.cif"/>
                </type>
              </right>
            </right>
          </left>
          <right xmi:type="expressions:BinaryExpression" xmi:id="895" operator="Equal">
            <position xmi:type="position:Position" xmi:id="896" source="File &quot;C:\Users\rober\Downloads\eclipse-escet-v5.0-win32.win32.x86_64\eclipse-escet-v5.0\workspace\CIFBenchmarks-5.0.0.v20241003-060816\sudoku\sudoku.cif&quot;: " startLine="80" endOffset="2739" startColumn="62" endLine="80" endColumn="62" startOffset="2739" location="C:\Users\rober\Downloads\eclipse-escet-v5.0-win32.win32.x86_64\eclipse-escet-v5.0\workspace\CIFBenchmarks-5.0.0.v20241003-060816\sudoku\sudoku.cif"/>
            <type xmi:type="types:BoolType" xmi:id="897">
              <position xmi:type="position:Position" xmi:id="898" source="File &quot;C:\Users\rober\Downloads\eclipse-escet-v5.0-win32.win32.x86_64\eclipse-escet-v5.0\workspace\CIFBenchmarks-5.0.0.v20241003-060816\sudoku\sudoku.cif&quot;: " startLine="80" endOffset="2739" startColumn="62" endLine="80" endColumn="62" startOffset="2739" location="C:\Users\rober\Downloads\eclipse-escet-v5.0-win32.win32.x86_64\eclipse-escet-v5.0\workspace\CIFBenchmarks-5.0.0.v20241003-060816\sudoku\sudoku.cif"/>
            </type>
            <left xmi:type="expressions:CompInstWrapExpression" xmi:id="899" instantiation="1109">
              <position xmi:type="position:Position" xmi:id="900" source="File &quot;C:\Users\rober\Downloads\eclipse-escet-v5.0-win32.win32.x86_64\eclipse-escet-v5.0\workspace\CIFBenchmarks-5.0.0.v20241003-060816\sudoku\sudoku.cif&quot;: " startLine="80" endOffset="2737" startColumn="52" endLine="80" endColumn="60" startOffset="2729" location="C:\Users\rober\Downloads\eclipse-escet-v5.0-win32.win32.x86_64\eclipse-escet-v5.0\workspace\CIFBenchmarks-5.0.0.v20241003-060816\sudoku\sudoku.cif"/>
              <type xmi:type="types:IntType" xmi:id="901" lower="0" upper="4">
                <position xmi:type="position:Position" xmi:id="902" source="File &quot;C:\Users\rober\Downloads\eclipse-escet-v5.0-win32.win32.x86_64\eclipse-escet-v5.0\workspace\CIFBenchmarks-5.0.0.v20241003-060816\sudoku\sudoku.cif&quot;: " startLine="80" endOffset="2737" startColumn="52" endLine="80" endColumn="60" startOffset="2729" location="C:\Users\rober\Downloads\eclipse-escet-v5.0-win32.win32.x86_64\eclipse-escet-v5.0\workspace\CIFBenchmarks-5.0.0.v20241003-060816\sudoku\sudoku.cif"/>
              </type>
              <reference xmi:type="expressions:DiscVariableExpression" xmi:id="903" variable="15">
                <position xmi:type="position:Position" xmi:id="904" source="File &quot;C:\Users\rober\Downloads\eclipse-escet-v5.0-win32.win32.x86_64\eclipse-escet-v5.0\workspace\CIFBenchmarks-5.0.0.v20241003-060816\sudoku\sudoku.cif&quot;: " startLine="80" endOffset="2737" startColumn="52" endLine="80" endColumn="60" startOffset="2729" location="C:\Users\rober\Downloads\eclipse-escet-v5.0-win32.win32.x86_64\eclipse-escet-v5.0\workspace\CIFBenchmarks-5.0.0.v20241003-060816\sudoku\sudoku.cif"/>
                <type xmi:type="types:IntType" xmi:id="905" lower="0" upper="4">
                  <position xmi:type="position:Position" xmi:id="906" source="File &quot;C:\Users\rober\Downloads\eclipse-escet-v5.0-win32.win32.x86_64\eclipse-escet-v5.0\workspace\CIFBenchmarks-5.0.0.v20241003-060816\sudoku\sudoku.cif&quot;: " startLine="80" endOffset="2737" startColumn="52" endLine="80" endColumn="60" startOffset="2729" location="C:\Users\rober\Downloads\eclipse-escet-v5.0-win32.win32.x86_64\eclipse-escet-v5.0\workspace\CIFBenchmarks-5.0.0.v20241003-060816\sudoku\sudoku.cif"/>
                </type>
              </reference>
            </left>
            <right xmi:type="expressions:AlgVariableExpression" xmi:id="907" variable="1081">
              <position xmi:type="position:Position" xmi:id="908" source="File &quot;C:\Users\rober\Downloads\eclipse-escet-v5.0-win32.win32.x86_64\eclipse-escet-v5.0\workspace\CIFBenchmarks-5.0.0.v20241003-060816\sudoku\sudoku.cif&quot;: " startLine="80" endOffset="2745" startColumn="64" endLine="80" endColumn="68" startOffset="2741" location="C:\Users\rober\Downloads\eclipse-escet-v5.0-win32.win32.x86_64\eclipse-escet-v5.0\workspace\CIFBenchmarks-5.0.0.v20241003-060816\sudoku\sudoku.cif"/>
              <type xmi:type="types:IntType" xmi:id="909">
                <position xmi:type="position:Position" xmi:id="910" source="File &quot;C:\Users\rober\Downloads\eclipse-escet-v5.0-win32.win32.x86_64\eclipse-escet-v5.0\workspace\CIFBenchmarks-5.0.0.v20241003-060816\sudoku\sudoku.cif&quot;: " startLine="80" endOffset="2745" startColumn="64" endLine="80" endColumn="68" startOffset="2741" location="C:\Users\rober\Downloads\eclipse-escet-v5.0-win32.win32.x86_64\eclipse-escet-v5.0\workspace\CIFBenchmarks-5.0.0.v20241003-060816\sudoku\sudoku.cif"/>
              </type>
            </right>
          </right>
        </left>
        <right xmi:type="expressions:BinaryExpression" xmi:id="911" operator="Equal">
          <position xmi:type="position:Position" xmi:id="912" source="File &quot;C:\Users\rober\Downloads\eclipse-escet-v5.0-win32.win32.x86_64\eclipse-escet-v5.0\workspace\CIFBenchmarks-5.0.0.v20241003-060816\sudoku\sudoku.cif&quot;: " startLine="80" endOffset="2760" startColumn="83" endLine="80" endColumn="83" startOffset="2760" location="C:\Users\rober\Downloads\eclipse-escet-v5.0-win32.win32.x86_64\eclipse-escet-v5.0\workspace\CIFBenchmarks-5.0.0.v20241003-060816\sudoku\sudoku.cif"/>
          <type xmi:type="types:BoolType" xmi:id="913">
            <position xmi:type="position:Position" xmi:id="914" source="File &quot;C:\Users\rober\Downloads\eclipse-escet-v5.0-win32.win32.x86_64\eclipse-escet-v5.0\workspace\CIFBenchmarks-5.0.0.v20241003-060816\sudoku\sudoku.cif&quot;: " startLine="80" endOffset="2760" startColumn="83" endLine="80" endColumn="83" startOffset="2760" location="C:\Users\rober\Downloads\eclipse-escet-v5.0-win32.win32.x86_64\eclipse-escet-v5.0\workspace\CIFBenchmarks-5.0.0.v20241003-060816\sudoku\sudoku.cif"/>
          </type>
          <left xmi:type="expressions:CompInstWrapExpression" xmi:id="915" instantiation="1113">
            <position xmi:type="position:Position" xmi:id="916" source="File &quot;C:\Users\rober\Downloads\eclipse-escet-v5.0-win32.win32.x86_64\eclipse-escet-v5.0\workspace\CIFBenchmarks-5.0.0.v20241003-060816\sudoku\sudoku.cif&quot;: " startLine="80" endOffset="2758" startColumn="73" endLine="80" endColumn="81" startOffset="2750" location="C:\Users\rober\Downloads\eclipse-escet-v5.0-win32.win32.x86_64\eclipse-escet-v5.0\workspace\CIFBenchmarks-5.0.0.v20241003-060816\sudoku\sudoku.cif"/>
            <type xmi:type="types:IntType" xmi:id="917" lower="0" upper="4">
              <position xmi:type="position:Position" xmi:id="918" source="File &quot;C:\Users\rober\Downloads\eclipse-escet-v5.0-win32.win32.x86_64\eclipse-escet-v5.0\workspace\CIFBenchmarks-5.0.0.v20241003-060816\sudoku\sudoku.cif&quot;: " startLine="80" endOffset="2758" startColumn="73" endLine="80" endColumn="81" startOffset="2750" location="C:\Users\rober\Downloads\eclipse-escet-v5.0-win32.win32.x86_64\eclipse-escet-v5.0\workspace\CIFBenchmarks-5.0.0.v20241003-060816\sudoku\sudoku.cif"/>
            </type>
            <reference xmi:type="expressions:DiscVariableExpression" xmi:id="919" variable="15">
              <position xmi:type="position:Position" xmi:id="920" source="File &quot;C:\Users\rober\Downloads\eclipse-escet-v5.0-win32.win32.x86_64\eclipse-escet-v5.0\workspace\CIFBenchmarks-5.0.0.v20241003-060816\sudoku\sudoku.cif&quot;: " startLine="80" endOffset="2758" startColumn="73" endLine="80" endColumn="81" startOffset="2750" location="C:\Users\rober\Downloads\eclipse-escet-v5.0-win32.win32.x86_64\eclipse-escet-v5.0\workspace\CIFBenchmarks-5.0.0.v20241003-060816\sudoku\sudoku.cif"/>
              <type xmi:type="types:IntType" xmi:id="921" lower="0" upper="4">
                <position xmi:type="position:Position" xmi:id="922" source="File &quot;C:\Users\rober\Downloads\eclipse-escet-v5.0-win32.win32.x86_64\eclipse-escet-v5.0\workspace\CIFBenchmarks-5.0.0.v20241003-060816\sudoku\sudoku.cif&quot;: " startLine="80" endOffset="2758" startColumn="73" endLine="80" endColumn="81" startOffset="2750" location="C:\Users\rober\Downloads\eclipse-escet-v5.0-win32.win32.x86_64\eclipse-escet-v5.0\workspace\CIFBenchmarks-5.0.0.v20241003-060816\sudoku\sudoku.cif"/>
              </type>
            </reference>
          </left>
          <right xmi:type="expressions:AlgVariableExpression" xmi:id="923" variable="1081">
            <position xmi:type="position:Position" xmi:id="924" source="File &quot;C:\Users\rober\Downloads\eclipse-escet-v5.0-win32.win32.x86_64\eclipse-escet-v5.0\workspace\CIFBenchmarks-5.0.0.v20241003-060816\sudoku\sudoku.cif&quot;: " startLine="80" endOffset="2766" startColumn="85" endLine="80" endColumn="89" startOffset="2762" location="C:\Users\rober\Downloads\eclipse-escet-v5.0-win32.win32.x86_64\eclipse-escet-v5.0\workspace\CIFBenchmarks-5.0.0.v20241003-060816\sudoku\sudoku.cif"/>
            <type xmi:type="types:IntType" xmi:id="925">
              <position xmi:type="position:Position" xmi:id="926" source="File &quot;C:\Users\rober\Downloads\eclipse-escet-v5.0-win32.win32.x86_64\eclipse-escet-v5.0\workspace\CIFBenchmarks-5.0.0.v20241003-060816\sudoku\sudoku.cif&quot;: " startLine="80" endOffset="2766" startColumn="85" endLine="80" endColumn="89" startOffset="2762" location="C:\Users\rober\Downloads\eclipse-escet-v5.0-win32.win32.x86_64\eclipse-escet-v5.0\workspace\CIFBenchmarks-5.0.0.v20241003-060816\sudoku\sudoku.cif"/>
            </type>
          </right>
        </right>
      </markeds>
      <markeds xmi:type="expressions:BinaryExpression" xmi:id="927">
        <position xmi:type="position:Position" xmi:id="928" source="File &quot;C:\Users\rober\Downloads\eclipse-escet-v5.0-win32.win32.x86_64\eclipse-escet-v5.0\workspace\CIFBenchmarks-5.0.0.v20241003-060816\sudoku\sudoku.cif&quot;: " startLine="81" endOffset="2839" startColumn="70" endLine="81" endColumn="71" startOffset="2838" location="C:\Users\rober\Downloads\eclipse-escet-v5.0-win32.win32.x86_64\eclipse-escet-v5.0\workspace\CIFBenchmarks-5.0.0.v20241003-060816\sudoku\sudoku.cif"/>
        <type xmi:type="types:BoolType" xmi:id="929">
          <position xmi:type="position:Position" xmi:id="930" source="File &quot;C:\Users\rober\Downloads\eclipse-escet-v5.0-win32.win32.x86_64\eclipse-escet-v5.0\workspace\CIFBenchmarks-5.0.0.v20241003-060816\sudoku\sudoku.cif&quot;: " startLine="81" endOffset="2839" startColumn="70" endLine="81" endColumn="71" startOffset="2838" location="C:\Users\rober\Downloads\eclipse-escet-v5.0-win32.win32.x86_64\eclipse-escet-v5.0\workspace\CIFBenchmarks-5.0.0.v20241003-060816\sudoku\sudoku.cif"/>
        </type>
        <left xmi:type="expressions:BinaryExpression" xmi:id="931">
          <position xmi:type="position:Position" xmi:id="932" source="File &quot;C:\Users\rober\Downloads\eclipse-escet-v5.0-win32.win32.x86_64\eclipse-escet-v5.0\workspace\CIFBenchmarks-5.0.0.v20241003-060816\sudoku\sudoku.cif&quot;: " startLine="81" endOffset="2818" startColumn="49" endLine="81" endColumn="50" startOffset="2817" location="C:\Users\rober\Downloads\eclipse-escet-v5.0-win32.win32.x86_64\eclipse-escet-v5.0\workspace\CIFBenchmarks-5.0.0.v20241003-060816\sudoku\sudoku.cif"/>
          <type xmi:type="types:BoolType" xmi:id="933">
            <position xmi:type="position:Position" xmi:id="934" source="File &quot;C:\Users\rober\Downloads\eclipse-escet-v5.0-win32.win32.x86_64\eclipse-escet-v5.0\workspace\CIFBenchmarks-5.0.0.v20241003-060816\sudoku\sudoku.cif&quot;: " startLine="81" endOffset="2818" startColumn="49" endLine="81" endColumn="50" startOffset="2817" location="C:\Users\rober\Downloads\eclipse-escet-v5.0-win32.win32.x86_64\eclipse-escet-v5.0\workspace\CIFBenchmarks-5.0.0.v20241003-060816\sudoku\sudoku.cif"/>
          </type>
          <left xmi:type="expressions:BinaryExpression" xmi:id="935">
            <position xmi:type="position:Position" xmi:id="936" source="File &quot;C:\Users\rober\Downloads\eclipse-escet-v5.0-win32.win32.x86_64\eclipse-escet-v5.0\workspace\CIFBenchmarks-5.0.0.v20241003-060816\sudoku\sudoku.cif&quot;: " startLine="81" endOffset="2797" startColumn="28" endLine="81" endColumn="29" startOffset="2796" location="C:\Users\rober\Downloads\eclipse-escet-v5.0-win32.win32.x86_64\eclipse-escet-v5.0\workspace\CIFBenchmarks-5.0.0.v20241003-060816\sudoku\sudoku.cif"/>
            <type xmi:type="types:BoolType" xmi:id="937">
              <position xmi:type="position:Position" xmi:id="938" source="File &quot;C:\Users\rober\Downloads\eclipse-escet-v5.0-win32.win32.x86_64\eclipse-escet-v5.0\workspace\CIFBenchmarks-5.0.0.v20241003-060816\sudoku\sudoku.cif&quot;: " startLine="81" endOffset="2797" startColumn="28" endLine="81" endColumn="29" startOffset="2796" location="C:\Users\rober\Downloads\eclipse-escet-v5.0-win32.win32.x86_64\eclipse-escet-v5.0\workspace\CIFBenchmarks-5.0.0.v20241003-060816\sudoku\sudoku.cif"/>
            </type>
            <left xmi:type="expressions:BinaryExpression" xmi:id="939" operator="Equal">
              <position xmi:type="position:Position" xmi:id="940" source="File &quot;C:\Users\rober\Downloads\eclipse-escet-v5.0-win32.win32.x86_64\eclipse-escet-v5.0\workspace\CIFBenchmarks-5.0.0.v20241003-060816\sudoku\sudoku.cif&quot;: " startLine="81" endOffset="2788" startColumn="20" endLine="81" endColumn="20" startOffset="2788" location="C:\Users\rober\Downloads\eclipse-escet-v5.0-win32.win32.x86_64\eclipse-escet-v5.0\workspace\CIFBenchmarks-5.0.0.v20241003-060816\sudoku\sudoku.cif"/>
              <type xmi:type="types:BoolType" xmi:id="941">
                <position xmi:type="position:Position" xmi:id="942" source="File &quot;C:\Users\rober\Downloads\eclipse-escet-v5.0-win32.win32.x86_64\eclipse-escet-v5.0\workspace\CIFBenchmarks-5.0.0.v20241003-060816\sudoku\sudoku.cif&quot;: " startLine="81" endOffset="2788" startColumn="20" endLine="81" endColumn="20" startOffset="2788" location="C:\Users\rober\Downloads\eclipse-escet-v5.0-win32.win32.x86_64\eclipse-escet-v5.0\workspace\CIFBenchmarks-5.0.0.v20241003-060816\sudoku\sudoku.cif"/>
              </type>
              <left xmi:type="expressions:CompInstWrapExpression" xmi:id="943" instantiation="1117">
                <position xmi:type="position:Position" xmi:id="944" source="File &quot;C:\Users\rober\Downloads\eclipse-escet-v5.0-win32.win32.x86_64\eclipse-escet-v5.0\workspace\CIFBenchmarks-5.0.0.v20241003-060816\sudoku\sudoku.cif&quot;: " startLine="81" endOffset="2786" startColumn="10" endLine="81" endColumn="18" startOffset="2778" location="C:\Users\rober\Downloads\eclipse-escet-v5.0-win32.win32.x86_64\eclipse-escet-v5.0\workspace\CIFBenchmarks-5.0.0.v20241003-060816\sudoku\sudoku.cif"/>
                <type xmi:type="types:IntType" xmi:id="945" lower="0" upper="4">
                  <position xmi:type="position:Position" xmi:id="946" source="File &quot;C:\Users\rober\Downloads\eclipse-escet-v5.0-win32.win32.x86_64\eclipse-escet-v5.0\workspace\CIFBenchmarks-5.0.0.v20241003-060816\sudoku\sudoku.cif&quot;: " startLine="81" endOffset="2786" startColumn="10" endLine="81" endColumn="18" startOffset="2778" location="C:\Users\rober\Downloads\eclipse-escet-v5.0-win32.win32.x86_64\eclipse-escet-v5.0\workspace\CIFBenchmarks-5.0.0.v20241003-060816\sudoku\sudoku.cif"/>
                </type>
                <reference xmi:type="expressions:DiscVariableExpression" xmi:id="947" variable="15">
                  <position xmi:type="position:Position" xmi:id="948" source="File &quot;C:\Users\rober\Downloads\eclipse-escet-v5.0-win32.win32.x86_64\eclipse-escet-v5.0\workspace\CIFBenchmarks-5.0.0.v20241003-060816\sudoku\sudoku.cif&quot;: " startLine="81" endOffset="2786" startColumn="10" endLine="81" endColumn="18" startOffset="2778" location="C:\Users\rober\Downloads\eclipse-escet-v5.0-win32.win32.x86_64\eclipse-escet-v5.0\workspace\CIFBenchmarks-5.0.0.v20241003-060816\sudoku\sudoku.cif"/>
                  <type xmi:type="types:IntType" xmi:id="949" lower="0" upper="4">
                    <position xmi:type="position:Position" xmi:id="950" source="File &quot;C:\Users\rober\Downloads\eclipse-escet-v5.0-win32.win32.x86_64\eclipse-escet-v5.0\workspace\CIFBenchmarks-5.0.0.v20241003-060816\sudoku\sudoku.cif&quot;: " startLine="81" endOffset="2786" startColumn="10" endLine="81" endColumn="18" startOffset="2778" location="C:\Users\rober\Downloads\eclipse-escet-v5.0-win32.win32.x86_64\eclipse-escet-v5.0\workspace\CIFBenchmarks-5.0.0.v20241003-060816\sudoku\sudoku.cif"/>
                  </type>
                </reference>
              </left>
              <right xmi:type="expressions:AlgVariableExpression" xmi:id="951" variable="1081">
                <position xmi:type="position:Position" xmi:id="952" source="File &quot;C:\Users\rober\Downloads\eclipse-escet-v5.0-win32.win32.x86_64\eclipse-escet-v5.0\workspace\CIFBenchmarks-5.0.0.v20241003-060816\sudoku\sudoku.cif&quot;: " startLine="81" endOffset="2794" startColumn="22" endLine="81" endColumn="26" startOffset="2790" location="C:\Users\rober\Downloads\eclipse-escet-v5.0-win32.win32.x86_64\eclipse-escet-v5.0\workspace\CIFBenchmarks-5.0.0.v20241003-060816\sudoku\sudoku.cif"/>
                <type xmi:type="types:IntType" xmi:id="953">
                  <position xmi:type="position:Position" xmi:id="954" source="File &quot;C:\Users\rober\Downloads\eclipse-escet-v5.0-win32.win32.x86_64\eclipse-escet-v5.0\workspace\CIFBenchmarks-5.0.0.v20241003-060816\sudoku\sudoku.cif&quot;: " startLine="81" endOffset="2794" startColumn="22" endLine="81" endColumn="26" startOffset="2790" location="C:\Users\rober\Downloads\eclipse-escet-v5.0-win32.win32.x86_64\eclipse-escet-v5.0\workspace\CIFBenchmarks-5.0.0.v20241003-060816\sudoku\sudoku.cif"/>
                </type>
              </right>
            </left>
            <right xmi:type="expressions:BinaryExpression" xmi:id="955" operator="Equal">
              <position xmi:type="position:Position" xmi:id="956" source="File &quot;C:\Users\rober\Downloads\eclipse-escet-v5.0-win32.win32.x86_64\eclipse-escet-v5.0\workspace\CIFBenchmarks-5.0.0.v20241003-060816\sudoku\sudoku.cif&quot;: " startLine="81" endOffset="2809" startColumn="41" endLine="81" endColumn="41" startOffset="2809" location="C:\Users\rober\Downloads\eclipse-escet-v5.0-win32.win32.x86_64\eclipse-escet-v5.0\workspace\CIFBenchmarks-5.0.0.v20241003-060816\sudoku\sudoku.cif"/>
              <type xmi:type="types:BoolType" xmi:id="957">
                <position xmi:type="position:Position" xmi:id="958" source="File &quot;C:\Users\rober\Downloads\eclipse-escet-v5.0-win32.win32.x86_64\eclipse-escet-v5.0\workspace\CIFBenchmarks-5.0.0.v20241003-060816\sudoku\sudoku.cif&quot;: " startLine="81" endOffset="2809" startColumn="41" endLine="81" endColumn="41" startOffset="2809" location="C:\Users\rober\Downloads\eclipse-escet-v5.0-win32.win32.x86_64\eclipse-escet-v5.0\workspace\CIFBenchmarks-5.0.0.v20241003-060816\sudoku\sudoku.cif"/>
              </type>
              <left xmi:type="expressions:CompInstWrapExpression" xmi:id="959" instantiation="1121">
                <position xmi:type="position:Position" xmi:id="960" source="File &quot;C:\Users\rober\Downloads\eclipse-escet-v5.0-win32.win32.x86_64\eclipse-escet-v5.0\workspace\CIFBenchmarks-5.0.0.v20241003-060816\sudoku\sudoku.cif&quot;: " startLine="81" endOffset="2807" startColumn="31" endLine="81" endColumn="39" startOffset="2799" location="C:\Users\rober\Downloads\eclipse-escet-v5.0-win32.win32.x86_64\eclipse-escet-v5.0\workspace\CIFBenchmarks-5.0.0.v20241003-060816\sudoku\sudoku.cif"/>
                <type xmi:type="types:IntType" xmi:id="961" lower="0" upper="4">
                  <position xmi:type="position:Position" xmi:id="962" source="File &quot;C:\Users\rober\Downloads\eclipse-escet-v5.0-win32.win32.x86_64\eclipse-escet-v5.0\workspace\CIFBenchmarks-5.0.0.v20241003-060816\sudoku\sudoku.cif&quot;: " startLine="81" endOffset="2807" startColumn="31" endLine="81" endColumn="39" startOffset="2799" location="C:\Users\rober\Downloads\eclipse-escet-v5.0-win32.win32.x86_64\eclipse-escet-v5.0\workspace\CIFBenchmarks-5.0.0.v20241003-060816\sudoku\sudoku.cif"/>
                </type>
                <reference xmi:type="expressions:DiscVariableExpression" xmi:id="963" variable="15">
                  <position xmi:type="position:Position" xmi:id="964" source="File &quot;C:\Users\rober\Downloads\eclipse-escet-v5.0-win32.win32.x86_64\eclipse-escet-v5.0\workspace\CIFBenchmarks-5.0.0.v20241003-060816\sudoku\sudoku.cif&quot;: " startLine="81" endOffset="2807" startColumn="31" endLine="81" endColumn="39" startOffset="2799" location="C:\Users\rober\Downloads\eclipse-escet-v5.0-win32.win32.x86_64\eclipse-escet-v5.0\workspace\CIFBenchmarks-5.0.0.v20241003-060816\sudoku\sudoku.cif"/>
                  <type xmi:type="types:IntType" xmi:id="965" lower="0" upper="4">
                    <position xmi:type="position:Position" xmi:id="966" source="File &quot;C:\Users\rober\Downloads\eclipse-escet-v5.0-win32.win32.x86_64\eclipse-escet-v5.0\workspace\CIFBenchmarks-5.0.0.v20241003-060816\sudoku\sudoku.cif&quot;: " startLine="81" endOffset="2807" startColumn="31" endLine="81" endColumn="39" startOffset="2799" location="C:\Users\rober\Downloads\eclipse-escet-v5.0-win32.win32.x86_64\eclipse-escet-v5.0\workspace\CIFBenchmarks-5.0.0.v20241003-060816\sudoku\sudoku.cif"/>
                  </type>
                </reference>
              </left>
              <right xmi:type="expressions:AlgVariableExpression" xmi:id="967" variable="1081">
                <position xmi:type="position:Position" xmi:id="968" source="File &quot;C:\Users\rober\Downloads\eclipse-escet-v5.0-win32.win32.x86_64\eclipse-escet-v5.0\workspace\CIFBenchmarks-5.0.0.v20241003-060816\sudoku\sudoku.cif&quot;: " startLine="81" endOffset="2815" startColumn="43" endLine="81" endColumn="47" startOffset="2811" location="C:\Users\rober\Downloads\eclipse-escet-v5.0-win32.win32.x86_64\eclipse-escet-v5.0\workspace\CIFBenchmarks-5.0.0.v20241003-060816\sudoku\sudoku.cif"/>
                <type xmi:type="types:IntType" xmi:id="969">
                  <position xmi:type="position:Position" xmi:id="970" source="File &quot;C:\Users\rober\Downloads\eclipse-escet-v5.0-win32.win32.x86_64\eclipse-escet-v5.0\workspace\CIFBenchmarks-5.0.0.v20241003-060816\sudoku\sudoku.cif&quot;: " startLine="81" endOffset="2815" startColumn="43" endLine="81" endColumn="47" startOffset="2811" location="C:\Users\rober\Downloads\eclipse-escet-v5.0-win32.win32.x86_64\eclipse-escet-v5.0\workspace\CIFBenchmarks-5.0.0.v20241003-060816\sudoku\sudoku.cif"/>
                </type>
              </right>
            </right>
          </left>
          <right xmi:type="expressions:BinaryExpression" xmi:id="971" operator="Equal">
            <position xmi:type="position:Position" xmi:id="972" source="File &quot;C:\Users\rober\Downloads\eclipse-escet-v5.0-win32.win32.x86_64\eclipse-escet-v5.0\workspace\CIFBenchmarks-5.0.0.v20241003-060816\sudoku\sudoku.cif&quot;: " startLine="81" endOffset="2830" startColumn="62" endLine="81" endColumn="62" startOffset="2830" location="C:\Users\rober\Downloads\eclipse-escet-v5.0-win32.win32.x86_64\eclipse-escet-v5.0\workspace\CIFBenchmarks-5.0.0.v20241003-060816\sudoku\sudoku.cif"/>
            <type xmi:type="types:BoolType" xmi:id="973">
              <position xmi:type="position:Position" xmi:id="974" source="File &quot;C:\Users\rober\Downloads\eclipse-escet-v5.0-win32.win32.x86_64\eclipse-escet-v5.0\workspace\CIFBenchmarks-5.0.0.v20241003-060816\sudoku\sudoku.cif&quot;: " startLine="81" endOffset="2830" startColumn="62" endLine="81" endColumn="62" startOffset="2830" location="C:\Users\rober\Downloads\eclipse-escet-v5.0-win32.win32.x86_64\eclipse-escet-v5.0\workspace\CIFBenchmarks-5.0.0.v20241003-060816\sudoku\sudoku.cif"/>
            </type>
            <left xmi:type="expressions:CompInstWrapExpression" xmi:id="975" instantiation="1133">
              <position xmi:type="position:Position" xmi:id="976" source="File &quot;C:\Users\rober\Downloads\eclipse-escet-v5.0-win32.win32.x86_64\eclipse-escet-v5.0\workspace\CIFBenchmarks-5.0.0.v20241003-060816\sudoku\sudoku.cif&quot;: " startLine="81" endOffset="2828" startColumn="52" endLine="81" endColumn="60" startOffset="2820" location="C:\Users\rober\Downloads\eclipse-escet-v5.0-win32.win32.x86_64\eclipse-escet-v5.0\workspace\CIFBenchmarks-5.0.0.v20241003-060816\sudoku\sudoku.cif"/>
              <type xmi:type="types:IntType" xmi:id="977" lower="0" upper="4">
                <position xmi:type="position:Position" xmi:id="978" source="File &quot;C:\Users\rober\Downloads\eclipse-escet-v5.0-win32.win32.x86_64\eclipse-escet-v5.0\workspace\CIFBenchmarks-5.0.0.v20241003-060816\sudoku\sudoku.cif&quot;: " startLine="81" endOffset="2828" startColumn="52" endLine="81" endColumn="60" startOffset="2820" location="C:\Users\rober\Downloads\eclipse-escet-v5.0-win32.win32.x86_64\eclipse-escet-v5.0\workspace\CIFBenchmarks-5.0.0.v20241003-060816\sudoku\sudoku.cif"/>
              </type>
              <reference xmi:type="expressions:DiscVariableExpression" xmi:id="979" variable="15">
                <position xmi:type="position:Position" xmi:id="980" source="File &quot;C:\Users\rober\Downloads\eclipse-escet-v5.0-win32.win32.x86_64\eclipse-escet-v5.0\workspace\CIFBenchmarks-5.0.0.v20241003-060816\sudoku\sudoku.cif&quot;: " startLine="81" endOffset="2828" startColumn="52" endLine="81" endColumn="60" startOffset="2820" location="C:\Users\rober\Downloads\eclipse-escet-v5.0-win32.win32.x86_64\eclipse-escet-v5.0\workspace\CIFBenchmarks-5.0.0.v20241003-060816\sudoku\sudoku.cif"/>
                <type xmi:type="types:IntType" xmi:id="981" lower="0" upper="4">
                  <position xmi:type="position:Position" xmi:id="982" source="File &quot;C:\Users\rober\Downloads\eclipse-escet-v5.0-win32.win32.x86_64\eclipse-escet-v5.0\workspace\CIFBenchmarks-5.0.0.v20241003-060816\sudoku\sudoku.cif&quot;: " startLine="81" endOffset="2828" startColumn="52" endLine="81" endColumn="60" startOffset="2820" location="C:\Users\rober\Downloads\eclipse-escet-v5.0-win32.win32.x86_64\eclipse-escet-v5.0\workspace\CIFBenchmarks-5.0.0.v20241003-060816\sudoku\sudoku.cif"/>
                </type>
              </reference>
            </left>
            <right xmi:type="expressions:AlgVariableExpression" xmi:id="983" variable="1081">
              <position xmi:type="position:Position" xmi:id="984" source="File &quot;C:\Users\rober\Downloads\eclipse-escet-v5.0-win32.win32.x86_64\eclipse-escet-v5.0\workspace\CIFBenchmarks-5.0.0.v20241003-060816\sudoku\sudoku.cif&quot;: " startLine="81" endOffset="2836" startColumn="64" endLine="81" endColumn="68" startOffset="2832" location="C:\Users\rober\Downloads\eclipse-escet-v5.0-win32.win32.x86_64\eclipse-escet-v5.0\workspace\CIFBenchmarks-5.0.0.v20241003-060816\sudoku\sudoku.cif"/>
              <type xmi:type="types:IntType" xmi:id="985">
                <position xmi:type="position:Position" xmi:id="986" source="File &quot;C:\Users\rober\Downloads\eclipse-escet-v5.0-win32.win32.x86_64\eclipse-escet-v5.0\workspace\CIFBenchmarks-5.0.0.v20241003-060816\sudoku\sudoku.cif&quot;: " startLine="81" endOffset="2836" startColumn="64" endLine="81" endColumn="68" startOffset="2832" location="C:\Users\rober\Downloads\eclipse-escet-v5.0-win32.win32.x86_64\eclipse-escet-v5.0\workspace\CIFBenchmarks-5.0.0.v20241003-060816\sudoku\sudoku.cif"/>
              </type>
            </right>
          </right>
        </left>
        <right xmi:type="expressions:BinaryExpression" xmi:id="987" operator="Equal">
          <position xmi:type="position:Position" xmi:id="988" source="File &quot;C:\Users\rober\Downloads\eclipse-escet-v5.0-win32.win32.x86_64\eclipse-escet-v5.0\workspace\CIFBenchmarks-5.0.0.v20241003-060816\sudoku\sudoku.cif&quot;: " startLine="81" endOffset="2851" startColumn="83" endLine="81" endColumn="83" startOffset="2851" location="C:\Users\rober\Downloads\eclipse-escet-v5.0-win32.win32.x86_64\eclipse-escet-v5.0\workspace\CIFBenchmarks-5.0.0.v20241003-060816\sudoku\sudoku.cif"/>
          <type xmi:type="types:BoolType" xmi:id="989">
            <position xmi:type="position:Position" xmi:id="990" source="File &quot;C:\Users\rober\Downloads\eclipse-escet-v5.0-win32.win32.x86_64\eclipse-escet-v5.0\workspace\CIFBenchmarks-5.0.0.v20241003-060816\sudoku\sudoku.cif&quot;: " startLine="81" endOffset="2851" startColumn="83" endLine="81" endColumn="83" startOffset="2851" location="C:\Users\rober\Downloads\eclipse-escet-v5.0-win32.win32.x86_64\eclipse-escet-v5.0\workspace\CIFBenchmarks-5.0.0.v20241003-060816\sudoku\sudoku.cif"/>
          </type>
          <left xmi:type="expressions:CompInstWrapExpression" xmi:id="991" instantiation="1137">
            <position xmi:type="position:Position" xmi:id="992" source="File &quot;C:\Users\rober\Downloads\eclipse-escet-v5.0-win32.win32.x86_64\eclipse-escet-v5.0\workspace\CIFBenchmarks-5.0.0.v20241003-060816\sudoku\sudoku.cif&quot;: " startLine="81" endOffset="2849" startColumn="73" endLine="81" endColumn="81" startOffset="2841" location="C:\Users\rober\Downloads\eclipse-escet-v5.0-win32.win32.x86_64\eclipse-escet-v5.0\workspace\CIFBenchmarks-5.0.0.v20241003-060816\sudoku\sudoku.cif"/>
            <type xmi:type="types:IntType" xmi:id="993" lower="0" upper="4">
              <position xmi:type="position:Position" xmi:id="994" source="File &quot;C:\Users\rober\Downloads\eclipse-escet-v5.0-win32.win32.x86_64\eclipse-escet-v5.0\workspace\CIFBenchmarks-5.0.0.v20241003-060816\sudoku\sudoku.cif&quot;: " startLine="81" endOffset="2849" startColumn="73" endLine="81" endColumn="81" startOffset="2841" location="C:\Users\rober\Downloads\eclipse-escet-v5.0-win32.win32.x86_64\eclipse-escet-v5.0\workspace\CIFBenchmarks-5.0.0.v20241003-060816\sudoku\sudoku.cif"/>
            </type>
            <reference xmi:type="expressions:DiscVariableExpression" xmi:id="995" variable="15">
              <position xmi:type="position:Position" xmi:id="996" source="File &quot;C:\Users\rober\Downloads\eclipse-escet-v5.0-win32.win32.x86_64\eclipse-escet-v5.0\workspace\CIFBenchmarks-5.0.0.v20241003-060816\sudoku\sudoku.cif&quot;: " startLine="81" endOffset="2849" startColumn="73" endLine="81" endColumn="81" startOffset="2841" location="C:\Users\rober\Downloads\eclipse-escet-v5.0-win32.win32.x86_64\eclipse-escet-v5.0\workspace\CIFBenchmarks-5.0.0.v20241003-060816\sudoku\sudoku.cif"/>
              <type xmi:type="types:IntType" xmi:id="997" lower="0" upper="4">
                <position xmi:type="position:Position" xmi:id="998" source="File &quot;C:\Users\rober\Downloads\eclipse-escet-v5.0-win32.win32.x86_64\eclipse-escet-v5.0\workspace\CIFBenchmarks-5.0.0.v20241003-060816\sudoku\sudoku.cif&quot;: " startLine="81" endOffset="2849" startColumn="73" endLine="81" endColumn="81" startOffset="2841" location="C:\Users\rober\Downloads\eclipse-escet-v5.0-win32.win32.x86_64\eclipse-escet-v5.0\workspace\CIFBenchmarks-5.0.0.v20241003-060816\sudoku\sudoku.cif"/>
              </type>
            </reference>
          </left>
          <right xmi:type="expressions:AlgVariableExpression" xmi:id="999" variable="1081">
            <position xmi:type="position:Position" xmi:id="1000" source="File &quot;C:\Users\rober\Downloads\eclipse-escet-v5.0-win32.win32.x86_64\eclipse-escet-v5.0\workspace\CIFBenchmarks-5.0.0.v20241003-060816\sudoku\sudoku.cif&quot;: " startLine="81" endOffset="2857" startColumn="85" endLine="81" endColumn="89" startOffset="2853" location="C:\Users\rober\Downloads\eclipse-escet-v5.0-win32.win32.x86_64\eclipse-escet-v5.0\workspace\CIFBenchmarks-5.0.0.v20241003-060816\sudoku\sudoku.cif"/>
            <type xmi:type="types:IntType" xmi:id="1001">
              <position xmi:type="position:Position" xmi:id="1002" source="File &quot;C:\Users\rober\Downloads\eclipse-escet-v5.0-win32.win32.x86_64\eclipse-escet-v5.0\workspace\CIFBenchmarks-5.0.0.v20241003-060816\sudoku\sudoku.cif&quot;: " startLine="81" endOffset="2857" startColumn="85" endLine="81" endColumn="89" startOffset="2853" location="C:\Users\rober\Downloads\eclipse-escet-v5.0-win32.win32.x86_64\eclipse-escet-v5.0\workspace\CIFBenchmarks-5.0.0.v20241003-060816\sudoku\sudoku.cif"/>
            </type>
          </right>
        </right>
      </markeds>
      <markeds xmi:type="expressions:BinaryExpression" xmi:id="1003">
        <position xmi:type="position:Position" xmi:id="1004" source="File &quot;C:\Users\rober\Downloads\eclipse-escet-v5.0-win32.win32.x86_64\eclipse-escet-v5.0\workspace\CIFBenchmarks-5.0.0.v20241003-060816\sudoku\sudoku.cif&quot;: " startLine="82" endOffset="2930" startColumn="70" endLine="82" endColumn="71" startOffset="2929" location="C:\Users\rober\Downloads\eclipse-escet-v5.0-win32.win32.x86_64\eclipse-escet-v5.0\workspace\CIFBenchmarks-5.0.0.v20241003-060816\sudoku\sudoku.cif"/>
        <type xmi:type="types:BoolType" xmi:id="1005">
          <position xmi:type="position:Position" xmi:id="1006" source="File &quot;C:\Users\rober\Downloads\eclipse-escet-v5.0-win32.win32.x86_64\eclipse-escet-v5.0\workspace\CIFBenchmarks-5.0.0.v20241003-060816\sudoku\sudoku.cif&quot;: " startLine="82" endOffset="2930" startColumn="70" endLine="82" endColumn="71" startOffset="2929" location="C:\Users\rober\Downloads\eclipse-escet-v5.0-win32.win32.x86_64\eclipse-escet-v5.0\workspace\CIFBenchmarks-5.0.0.v20241003-060816\sudoku\sudoku.cif"/>
        </type>
        <left xmi:type="expressions:BinaryExpression" xmi:id="1007">
          <position xmi:type="position:Position" xmi:id="1008" source="File &quot;C:\Users\rober\Downloads\eclipse-escet-v5.0-win32.win32.x86_64\eclipse-escet-v5.0\workspace\CIFBenchmarks-5.0.0.v20241003-060816\sudoku\sudoku.cif&quot;: " startLine="82" endOffset="2909" startColumn="49" endLine="82" endColumn="50" startOffset="2908" location="C:\Users\rober\Downloads\eclipse-escet-v5.0-win32.win32.x86_64\eclipse-escet-v5.0\workspace\CIFBenchmarks-5.0.0.v20241003-060816\sudoku\sudoku.cif"/>
          <type xmi:type="types:BoolType" xmi:id="1009">
            <position xmi:type="position:Position" xmi:id="1010" source="File &quot;C:\Users\rober\Downloads\eclipse-escet-v5.0-win32.win32.x86_64\eclipse-escet-v5.0\workspace\CIFBenchmarks-5.0.0.v20241003-060816\sudoku\sudoku.cif&quot;: " startLine="82" endOffset="2909" startColumn="49" endLine="82" endColumn="50" startOffset="2908" location="C:\Users\rober\Downloads\eclipse-escet-v5.0-win32.win32.x86_64\eclipse-escet-v5.0\workspace\CIFBenchmarks-5.0.0.v20241003-060816\sudoku\sudoku.cif"/>
          </type>
          <left xmi:type="expressions:BinaryExpression" xmi:id="1011">
            <position xmi:type="position:Position" xmi:id="1012" source="File &quot;C:\Users\rober\Downloads\eclipse-escet-v5.0-win32.win32.x86_64\eclipse-escet-v5.0\workspace\CIFBenchmarks-5.0.0.v20241003-060816\sudoku\sudoku.cif&quot;: " startLine="82" endOffset="2888" startColumn="28" endLine="82" endColumn="29" startOffset="2887" location="C:\Users\rober\Downloads\eclipse-escet-v5.0-win32.win32.x86_64\eclipse-escet-v5.0\workspace\CIFBenchmarks-5.0.0.v20241003-060816\sudoku\sudoku.cif"/>
            <type xmi:type="types:BoolType" xmi:id="1013">
              <position xmi:type="position:Position" xmi:id="1014" source="File &quot;C:\Users\rober\Downloads\eclipse-escet-v5.0-win32.win32.x86_64\eclipse-escet-v5.0\workspace\CIFBenchmarks-5.0.0.v20241003-060816\sudoku\sudoku.cif&quot;: " startLine="82" endOffset="2888" startColumn="28" endLine="82" endColumn="29" startOffset="2887" location="C:\Users\rober\Downloads\eclipse-escet-v5.0-win32.win32.x86_64\eclipse-escet-v5.0\workspace\CIFBenchmarks-5.0.0.v20241003-060816\sudoku\sudoku.cif"/>
            </type>
            <left xmi:type="expressions:BinaryExpression" xmi:id="1015" operator="Equal">
              <position xmi:type="position:Position" xmi:id="1016" source="File &quot;C:\Users\rober\Downloads\eclipse-escet-v5.0-win32.win32.x86_64\eclipse-escet-v5.0\workspace\CIFBenchmarks-5.0.0.v20241003-060816\sudoku\sudoku.cif&quot;: " startLine="82" endOffset="2879" startColumn="20" endLine="82" endColumn="20" startOffset="2879" location="C:\Users\rober\Downloads\eclipse-escet-v5.0-win32.win32.x86_64\eclipse-escet-v5.0\workspace\CIFBenchmarks-5.0.0.v20241003-060816\sudoku\sudoku.cif"/>
              <type xmi:type="types:BoolType" xmi:id="1017">
                <position xmi:type="position:Position" xmi:id="1018" source="File &quot;C:\Users\rober\Downloads\eclipse-escet-v5.0-win32.win32.x86_64\eclipse-escet-v5.0\workspace\CIFBenchmarks-5.0.0.v20241003-060816\sudoku\sudoku.cif&quot;: " startLine="82" endOffset="2879" startColumn="20" endLine="82" endColumn="20" startOffset="2879" location="C:\Users\rober\Downloads\eclipse-escet-v5.0-win32.win32.x86_64\eclipse-escet-v5.0\workspace\CIFBenchmarks-5.0.0.v20241003-060816\sudoku\sudoku.cif"/>
              </type>
              <left xmi:type="expressions:CompInstWrapExpression" xmi:id="1019" instantiation="1125">
                <position xmi:type="position:Position" xmi:id="1020" source="File &quot;C:\Users\rober\Downloads\eclipse-escet-v5.0-win32.win32.x86_64\eclipse-escet-v5.0\workspace\CIFBenchmarks-5.0.0.v20241003-060816\sudoku\sudoku.cif&quot;: " startLine="82" endOffset="2877" startColumn="10" endLine="82" endColumn="18" startOffset="2869" location="C:\Users\rober\Downloads\eclipse-escet-v5.0-win32.win32.x86_64\eclipse-escet-v5.0\workspace\CIFBenchmarks-5.0.0.v20241003-060816\sudoku\sudoku.cif"/>
                <type xmi:type="types:IntType" xmi:id="1021" lower="0" upper="4">
                  <position xmi:type="position:Position" xmi:id="1022" source="File &quot;C:\Users\rober\Downloads\eclipse-escet-v5.0-win32.win32.x86_64\eclipse-escet-v5.0\workspace\CIFBenchmarks-5.0.0.v20241003-060816\sudoku\sudoku.cif&quot;: " startLine="82" endOffset="2877" startColumn="10" endLine="82" endColumn="18" startOffset="2869" location="C:\Users\rober\Downloads\eclipse-escet-v5.0-win32.win32.x86_64\eclipse-escet-v5.0\workspace\CIFBenchmarks-5.0.0.v20241003-060816\sudoku\sudoku.cif"/>
                </type>
                <reference xmi:type="expressions:DiscVariableExpression" xmi:id="1023" variable="15">
                  <position xmi:type="position:Position" xmi:id="1024" source="File &quot;C:\Users\rober\Downloads\eclipse-escet-v5.0-win32.win32.x86_64\eclipse-escet-v5.0\workspace\CIFBenchmarks-5.0.0.v20241003-060816\sudoku\sudoku.cif&quot;: " startLine="82" endOffset="2877" startColumn="10" endLine="82" endColumn="18" startOffset="2869" location="C:\Users\rober\Downloads\eclipse-escet-v5.0-win32.win32.x86_64\eclipse-escet-v5.0\workspace\CIFBenchmarks-5.0.0.v20241003-060816\sudoku\sudoku.cif"/>
                  <type xmi:type="types:IntType" xmi:id="1025" lower="0" upper="4">
                    <position xmi:type="position:Position" xmi:id="1026" source="File &quot;C:\Users\rober\Downloads\eclipse-escet-v5.0-win32.win32.x86_64\eclipse-escet-v5.0\workspace\CIFBenchmarks-5.0.0.v20241003-060816\sudoku\sudoku.cif&quot;: " startLine="82" endOffset="2877" startColumn="10" endLine="82" endColumn="18" startOffset="2869" location="C:\Users\rober\Downloads\eclipse-escet-v5.0-win32.win32.x86_64\eclipse-escet-v5.0\workspace\CIFBenchmarks-5.0.0.v20241003-060816\sudoku\sudoku.cif"/>
                  </type>
                </reference>
              </left>
              <right xmi:type="expressions:AlgVariableExpression" xmi:id="1027" variable="1081">
                <position xmi:type="position:Position" xmi:id="1028" source="File &quot;C:\Users\rober\Downloads\eclipse-escet-v5.0-win32.win32.x86_64\eclipse-escet-v5.0\workspace\CIFBenchmarks-5.0.0.v20241003-060816\sudoku\sudoku.cif&quot;: " startLine="82" endOffset="2885" startColumn="22" endLine="82" endColumn="26" startOffset="2881" location="C:\Users\rober\Downloads\eclipse-escet-v5.0-win32.win32.x86_64\eclipse-escet-v5.0\workspace\CIFBenchmarks-5.0.0.v20241003-060816\sudoku\sudoku.cif"/>
                <type xmi:type="types:IntType" xmi:id="1029">
                  <position xmi:type="position:Position" xmi:id="1030" source="File &quot;C:\Users\rober\Downloads\eclipse-escet-v5.0-win32.win32.x86_64\eclipse-escet-v5.0\workspace\CIFBenchmarks-5.0.0.v20241003-060816\sudoku\sudoku.cif&quot;: " startLine="82" endOffset="2885" startColumn="22" endLine="82" endColumn="26" startOffset="2881" location="C:\Users\rober\Downloads\eclipse-escet-v5.0-win32.win32.x86_64\eclipse-escet-v5.0\workspace\CIFBenchmarks-5.0.0.v20241003-060816\sudoku\sudoku.cif"/>
                </type>
              </right>
            </left>
            <right xmi:type="expressions:BinaryExpression" xmi:id="1031" operator="Equal">
              <position xmi:type="position:Position" xmi:id="1032" source="File &quot;C:\Users\rober\Downloads\eclipse-escet-v5.0-win32.win32.x86_64\eclipse-escet-v5.0\workspace\CIFBenchmarks-5.0.0.v20241003-060816\sudoku\sudoku.cif&quot;: " startLine="82" endOffset="2900" startColumn="41" endLine="82" endColumn="41" startOffset="2900" location="C:\Users\rober\Downloads\eclipse-escet-v5.0-win32.win32.x86_64\eclipse-escet-v5.0\workspace\CIFBenchmarks-5.0.0.v20241003-060816\sudoku\sudoku.cif"/>
              <type xmi:type="types:BoolType" xmi:id="1033">
                <position xmi:type="position:Position" xmi:id="1034" source="File &quot;C:\Users\rober\Downloads\eclipse-escet-v5.0-win32.win32.x86_64\eclipse-escet-v5.0\workspace\CIFBenchmarks-5.0.0.v20241003-060816\sudoku\sudoku.cif&quot;: " startLine="82" endOffset="2900" startColumn="41" endLine="82" endColumn="41" startOffset="2900" location="C:\Users\rober\Downloads\eclipse-escet-v5.0-win32.win32.x86_64\eclipse-escet-v5.0\workspace\CIFBenchmarks-5.0.0.v20241003-060816\sudoku\sudoku.cif"/>
              </type>
              <left xmi:type="expressions:CompInstWrapExpression" xmi:id="1035" instantiation="1129">
                <position xmi:type="position:Position" xmi:id="1036" source="File &quot;C:\Users\rober\Downloads\eclipse-escet-v5.0-win32.win32.x86_64\eclipse-escet-v5.0\workspace\CIFBenchmarks-5.0.0.v20241003-060816\sudoku\sudoku.cif&quot;: " startLine="82" endOffset="2898" startColumn="31" endLine="82" endColumn="39" startOffset="2890" location="C:\Users\rober\Downloads\eclipse-escet-v5.0-win32.win32.x86_64\eclipse-escet-v5.0\workspace\CIFBenchmarks-5.0.0.v20241003-060816\sudoku\sudoku.cif"/>
                <type xmi:type="types:IntType" xmi:id="1037" lower="0" upper="4">
                  <position xmi:type="position:Position" xmi:id="1038" source="File &quot;C:\Users\rober\Downloads\eclipse-escet-v5.0-win32.win32.x86_64\eclipse-escet-v5.0\workspace\CIFBenchmarks-5.0.0.v20241003-060816\sudoku\sudoku.cif&quot;: " startLine="82" endOffset="2898" startColumn="31" endLine="82" endColumn="39" startOffset="2890" location="C:\Users\rober\Downloads\eclipse-escet-v5.0-win32.win32.x86_64\eclipse-escet-v5.0\workspace\CIFBenchmarks-5.0.0.v20241003-060816\sudoku\sudoku.cif"/>
                </type>
                <reference xmi:type="expressions:DiscVariableExpression" xmi:id="1039" variable="15">
                  <position xmi:type="position:Position" xmi:id="1040" source="File &quot;C:\Users\rober\Downloads\eclipse-escet-v5.0-win32.win32.x86_64\eclipse-escet-v5.0\workspace\CIFBenchmarks-5.0.0.v20241003-060816\sudoku\sudoku.cif&quot;: " startLine="82" endOffset="2898" startColumn="31" endLine="82" endColumn="39" startOffset="2890" location="C:\Users\rober\Downloads\eclipse-escet-v5.0-win32.win32.x86_64\eclipse-escet-v5.0\workspace\CIFBenchmarks-5.0.0.v20241003-060816\sudoku\sudoku.cif"/>
                  <type xmi:type="types:IntType" xmi:id="1041" lower="0" upper="4">
                    <position xmi:type="position:Position" xmi:id="1042" source="File &quot;C:\Users\rober\Downloads\eclipse-escet-v5.0-win32.win32.x86_64\eclipse-escet-v5.0\workspace\CIFBenchmarks-5.0.0.v20241003-060816\sudoku\sudoku.cif&quot;: " startLine="82" endOffset="2898" startColumn="31" endLine="82" endColumn="39" startOffset="2890" location="C:\Users\rober\Downloads\eclipse-escet-v5.0-win32.win32.x86_64\eclipse-escet-v5.0\workspace\CIFBenchmarks-5.0.0.v20241003-060816\sudoku\sudoku.cif"/>
                  </type>
                </reference>
              </left>
              <right xmi:type="expressions:AlgVariableExpression" xmi:id="1043" variable="1081">
                <position xmi:type="position:Position" xmi:id="1044" source="File &quot;C:\Users\rober\Downloads\eclipse-escet-v5.0-win32.win32.x86_64\eclipse-escet-v5.0\workspace\CIFBenchmarks-5.0.0.v20241003-060816\sudoku\sudoku.cif&quot;: " startLine="82" endOffset="2906" startColumn="43" endLine="82" endColumn="47" startOffset="2902" location="C:\Users\rober\Downloads\eclipse-escet-v5.0-win32.win32.x86_64\eclipse-escet-v5.0\workspace\CIFBenchmarks-5.0.0.v20241003-060816\sudoku\sudoku.cif"/>
                <type xmi:type="types:IntType" xmi:id="1045">
                  <position xmi:type="position:Position" xmi:id="1046" source="File &quot;C:\Users\rober\Downloads\eclipse-escet-v5.0-win32.win32.x86_64\eclipse-escet-v5.0\workspace\CIFBenchmarks-5.0.0.v20241003-060816\sudoku\sudoku.cif&quot;: " startLine="82" endOffset="2906" startColumn="43" endLine="82" endColumn="47" startOffset="2902" location="C:\Users\rober\Downloads\eclipse-escet-v5.0-win32.win32.x86_64\eclipse-escet-v5.0\workspace\CIFBenchmarks-5.0.0.v20241003-060816\sudoku\sudoku.cif"/>
                </type>
              </right>
            </right>
          </left>
          <right xmi:type="expressions:BinaryExpression" xmi:id="1047" operator="Equal">
            <position xmi:type="position:Position" xmi:id="1048" source="File &quot;C:\Users\rober\Downloads\eclipse-escet-v5.0-win32.win32.x86_64\eclipse-escet-v5.0\workspace\CIFBenchmarks-5.0.0.v20241003-060816\sudoku\sudoku.cif&quot;: " startLine="82" endOffset="2921" startColumn="62" endLine="82" endColumn="62" startOffset="2921" location="C:\Users\rober\Downloads\eclipse-escet-v5.0-win32.win32.x86_64\eclipse-escet-v5.0\workspace\CIFBenchmarks-5.0.0.v20241003-060816\sudoku\sudoku.cif"/>
            <type xmi:type="types:BoolType" xmi:id="1049">
              <position xmi:type="position:Position" xmi:id="1050" source="File &quot;C:\Users\rober\Downloads\eclipse-escet-v5.0-win32.win32.x86_64\eclipse-escet-v5.0\workspace\CIFBenchmarks-5.0.0.v20241003-060816\sudoku\sudoku.cif&quot;: " startLine="82" endOffset="2921" startColumn="62" endLine="82" endColumn="62" startOffset="2921" location="C:\Users\rober\Downloads\eclipse-escet-v5.0-win32.win32.x86_64\eclipse-escet-v5.0\workspace\CIFBenchmarks-5.0.0.v20241003-060816\sudoku\sudoku.cif"/>
            </type>
            <left xmi:type="expressions:CompInstWrapExpression" xmi:id="1051" instantiation="1141">
              <position xmi:type="position:Position" xmi:id="1052" source="File &quot;C:\Users\rober\Downloads\eclipse-escet-v5.0-win32.win32.x86_64\eclipse-escet-v5.0\workspace\CIFBenchmarks-5.0.0.v20241003-060816\sudoku\sudoku.cif&quot;: " startLine="82" endOffset="2919" startColumn="52" endLine="82" endColumn="60" startOffset="2911" location="C:\Users\rober\Downloads\eclipse-escet-v5.0-win32.win32.x86_64\eclipse-escet-v5.0\workspace\CIFBenchmarks-5.0.0.v20241003-060816\sudoku\sudoku.cif"/>
              <type xmi:type="types:IntType" xmi:id="1053" lower="0" upper="4">
                <position xmi:type="position:Position" xmi:id="1054" source="File &quot;C:\Users\rober\Downloads\eclipse-escet-v5.0-win32.win32.x86_64\eclipse-escet-v5.0\workspace\CIFBenchmarks-5.0.0.v20241003-060816\sudoku\sudoku.cif&quot;: " startLine="82" endOffset="2919" startColumn="52" endLine="82" endColumn="60" startOffset="2911" location="C:\Users\rober\Downloads\eclipse-escet-v5.0-win32.win32.x86_64\eclipse-escet-v5.0\workspace\CIFBenchmarks-5.0.0.v20241003-060816\sudoku\sudoku.cif"/>
              </type>
              <reference xmi:type="expressions:DiscVariableExpression" xmi:id="1055" variable="15">
                <position xmi:type="position:Position" xmi:id="1056" source="File &quot;C:\Users\rober\Downloads\eclipse-escet-v5.0-win32.win32.x86_64\eclipse-escet-v5.0\workspace\CIFBenchmarks-5.0.0.v20241003-060816\sudoku\sudoku.cif&quot;: " startLine="82" endOffset="2919" startColumn="52" endLine="82" endColumn="60" startOffset="2911" location="C:\Users\rober\Downloads\eclipse-escet-v5.0-win32.win32.x86_64\eclipse-escet-v5.0\workspace\CIFBenchmarks-5.0.0.v20241003-060816\sudoku\sudoku.cif"/>
                <type xmi:type="types:IntType" xmi:id="1057" lower="0" upper="4">
                  <position xmi:type="position:Position" xmi:id="1058" source="File &quot;C:\Users\rober\Downloads\eclipse-escet-v5.0-win32.win32.x86_64\eclipse-escet-v5.0\workspace\CIFBenchmarks-5.0.0.v20241003-060816\sudoku\sudoku.cif&quot;: " startLine="82" endOffset="2919" startColumn="52" endLine="82" endColumn="60" startOffset="2911" location="C:\Users\rober\Downloads\eclipse-escet-v5.0-win32.win32.x86_64\eclipse-escet-v5.0\workspace\CIFBenchmarks-5.0.0.v20241003-060816\sudoku\sudoku.cif"/>
                </type>
              </reference>
            </left>
            <right xmi:type="expressions:AlgVariableExpression" xmi:id="1059" variable="1081">
              <position xmi:type="position:Position" xmi:id="1060" source="File &quot;C:\Users\rober\Downloads\eclipse-escet-v5.0-win32.win32.x86_64\eclipse-escet-v5.0\workspace\CIFBenchmarks-5.0.0.v20241003-060816\sudoku\sudoku.cif&quot;: " startLine="82" endOffset="2927" startColumn="64" endLine="82" endColumn="68" startOffset="2923" location="C:\Users\rober\Downloads\eclipse-escet-v5.0-win32.win32.x86_64\eclipse-escet-v5.0\workspace\CIFBenchmarks-5.0.0.v20241003-060816\sudoku\sudoku.cif"/>
              <type xmi:type="types:IntType" xmi:id="1061">
                <position xmi:type="position:Position" xmi:id="1062" source="File &quot;C:\Users\rober\Downloads\eclipse-escet-v5.0-win32.win32.x86_64\eclipse-escet-v5.0\workspace\CIFBenchmarks-5.0.0.v20241003-060816\sudoku\sudoku.cif&quot;: " startLine="82" endOffset="2927" startColumn="64" endLine="82" endColumn="68" startOffset="2923" location="C:\Users\rober\Downloads\eclipse-escet-v5.0-win32.win32.x86_64\eclipse-escet-v5.0\workspace\CIFBenchmarks-5.0.0.v20241003-060816\sudoku\sudoku.cif"/>
              </type>
            </right>
          </right>
        </left>
        <right xmi:type="expressions:BinaryExpression" xmi:id="1063" operator="Equal">
          <position xmi:type="position:Position" xmi:id="1064" source="File &quot;C:\Users\rober\Downloads\eclipse-escet-v5.0-win32.win32.x86_64\eclipse-escet-v5.0\workspace\CIFBenchmarks-5.0.0.v20241003-060816\sudoku\sudoku.cif&quot;: " startLine="82" endOffset="2942" startColumn="83" endLine="82" endColumn="83" startOffset="2942" location="C:\Users\rober\Downloads\eclipse-escet-v5.0-win32.win32.x86_64\eclipse-escet-v5.0\workspace\CIFBenchmarks-5.0.0.v20241003-060816\sudoku\sudoku.cif"/>
          <type xmi:type="types:BoolType" xmi:id="1065">
            <position xmi:type="position:Position" xmi:id="1066" source="File &quot;C:\Users\rober\Downloads\eclipse-escet-v5.0-win32.win32.x86_64\eclipse-escet-v5.0\workspace\CIFBenchmarks-5.0.0.v20241003-060816\sudoku\sudoku.cif&quot;: " startLine="82" endOffset="2942" startColumn="83" endLine="82" endColumn="83" startOffset="2942" location="C:\Users\rober\Downloads\eclipse-escet-v5.0-win32.win32.x86_64\eclipse-escet-v5.0\workspace\CIFBenchmarks-5.0.0.v20241003-060816\sudoku\sudoku.cif"/>
          </type>
          <left xmi:type="expressions:CompInstWrapExpression" xmi:id="1067" instantiation="1145">
            <position xmi:type="position:Position" xmi:id="1068" source="File &quot;C:\Users\rober\Downloads\eclipse-escet-v5.0-win32.win32.x86_64\eclipse-escet-v5.0\workspace\CIFBenchmarks-5.0.0.v20241003-060816\sudoku\sudoku.cif&quot;: " startLine="82" endOffset="2940" startColumn="73" endLine="82" endColumn="81" startOffset="2932" location="C:\Users\rober\Downloads\eclipse-escet-v5.0-win32.win32.x86_64\eclipse-escet-v5.0\workspace\CIFBenchmarks-5.0.0.v20241003-060816\sudoku\sudoku.cif"/>
            <type xmi:type="types:IntType" xmi:id="1069" lower="0" upper="4">
              <position xmi:type="position:Position" xmi:id="1070" source="File &quot;C:\Users\rober\Downloads\eclipse-escet-v5.0-win32.win32.x86_64\eclipse-escet-v5.0\workspace\CIFBenchmarks-5.0.0.v20241003-060816\sudoku\sudoku.cif&quot;: " startLine="82" endOffset="2940" startColumn="73" endLine="82" endColumn="81" startOffset="2932" location="C:\Users\rober\Downloads\eclipse-escet-v5.0-win32.win32.x86_64\eclipse-escet-v5.0\workspace\CIFBenchmarks-5.0.0.v20241003-060816\sudoku\sudoku.cif"/>
            </type>
            <reference xmi:type="expressions:DiscVariableExpression" xmi:id="1071" variable="15">
              <position xmi:type="position:Position" xmi:id="1072" source="File &quot;C:\Users\rober\Downloads\eclipse-escet-v5.0-win32.win32.x86_64\eclipse-escet-v5.0\workspace\CIFBenchmarks-5.0.0.v20241003-060816\sudoku\sudoku.cif&quot;: " startLine="82" endOffset="2940" startColumn="73" endLine="82" endColumn="81" startOffset="2932" location="C:\Users\rober\Downloads\eclipse-escet-v5.0-win32.win32.x86_64\eclipse-escet-v5.0\workspace\CIFBenchmarks-5.0.0.v20241003-060816\sudoku\sudoku.cif"/>
              <type xmi:type="types:IntType" xmi:id="1073" lower="0" upper="4">
                <position xmi:type="position:Position" xmi:id="1074" source="File &quot;C:\Users\rober\Downloads\eclipse-escet-v5.0-win32.win32.x86_64\eclipse-escet-v5.0\workspace\CIFBenchmarks-5.0.0.v20241003-060816\sudoku\sudoku.cif&quot;: " startLine="82" endOffset="2940" startColumn="73" endLine="82" endColumn="81" startOffset="2932" location="C:\Users\rober\Downloads\eclipse-escet-v5.0-win32.win32.x86_64\eclipse-escet-v5.0\workspace\CIFBenchmarks-5.0.0.v20241003-060816\sudoku\sudoku.cif"/>
              </type>
            </reference>
          </left>
          <right xmi:type="expressions:AlgVariableExpression" xmi:id="1075" variable="1081">
            <position xmi:type="position:Position" xmi:id="1076" source="File &quot;C:\Users\rober\Downloads\eclipse-escet-v5.0-win32.win32.x86_64\eclipse-escet-v5.0\workspace\CIFBenchmarks-5.0.0.v20241003-060816\sudoku\sudoku.cif&quot;: " startLine="82" endOffset="2948" startColumn="85" endLine="82" endColumn="89" startOffset="2944" location="C:\Users\rober\Downloads\eclipse-escet-v5.0-win32.win32.x86_64\eclipse-escet-v5.0\workspace\CIFBenchmarks-5.0.0.v20241003-060816\sudoku\sudoku.cif"/>
            <type xmi:type="types:IntType" xmi:id="1077">
              <position xmi:type="position:Position" xmi:id="1078" source="File &quot;C:\Users\rober\Downloads\eclipse-escet-v5.0-win32.win32.x86_64\eclipse-escet-v5.0\workspace\CIFBenchmarks-5.0.0.v20241003-060816\sudoku\sudoku.cif&quot;: " startLine="82" endOffset="2948" startColumn="85" endLine="82" endColumn="89" startOffset="2944" location="C:\Users\rober\Downloads\eclipse-escet-v5.0-win32.win32.x86_64\eclipse-escet-v5.0\workspace\CIFBenchmarks-5.0.0.v20241003-060816\sudoku\sudoku.cif"/>
            </type>
          </right>
        </right>
      </markeds>
    </body>
    <parameters xmi:type="cif:AlgParameter" xmi:id="1079">
      <position xmi:type="position:Position" xmi:id="1080" source="File &quot;C:\Users\rober\Downloads\eclipse-escet-v5.0-win32.win32.x86_64\eclipse-escet-v5.0\workspace\CIFBenchmarks-5.0.0.v20241003-060816\sudoku\sudoku.cif&quot;: " startLine="65" endOffset="1728" startColumn="31" endLine="65" endColumn="35" startOffset="1724" location="C:\Users\rober\Downloads\eclipse-escet-v5.0-win32.win32.x86_64\eclipse-escet-v5.0\workspace\CIFBenchmarks-5.0.0.v20241003-060816\sudoku\sudoku.cif"/>
      <variable xmi:type="declarations:AlgVariable" xmi:id="1081" name="Digit">
        <position xmi:type="position:Position" xmi:id="1082" source="File &quot;C:\Users\rober\Downloads\eclipse-escet-v5.0-win32.win32.x86_64\eclipse-escet-v5.0\workspace\CIFBenchmarks-5.0.0.v20241003-060816\sudoku\sudoku.cif&quot;: " startLine="65" endOffset="1728" startColumn="31" endLine="65" endColumn="35" startOffset="1724" location="C:\Users\rober\Downloads\eclipse-escet-v5.0-win32.win32.x86_64\eclipse-escet-v5.0\workspace\CIFBenchmarks-5.0.0.v20241003-060816\sudoku\sudoku.cif"/>
        <type xmi:type="types:IntType" xmi:id="1083">
          <position xmi:type="position:Position" xmi:id="1084" source="File &quot;C:\Users\rober\Downloads\eclipse-escet-v5.0-win32.win32.x86_64\eclipse-escet-v5.0\workspace\CIFBenchmarks-5.0.0.v20241003-060816\sudoku\sudoku.cif&quot;: " startLine="65" endOffset="1722" startColumn="27" endLine="65" endColumn="29" startOffset="1720" location="C:\Users\rober\Downloads\eclipse-escet-v5.0-win32.win32.x86_64\eclipse-escet-v5.0\workspace\CIFBenchmarks-5.0.0.v20241003-060816\sudoku\sudoku.cif"/>
        </type>
      </variable>
    </parameters>
  </definitions>
  <components xmi:type="cif:ComponentInst" xmi:id="1085" name="h11">
    <position xmi:type="position:Position" xmi:id="1086" source="File &quot;C:\Users\rober\Downloads\eclipse-escet-v5.0-win32.win32.x86_64\eclipse-escet-v5.0\workspace\CIFBenchmarks-5.0.0.v20241003-060816\sudoku\sudoku.cif&quot;: " startLine="42" endOffset="1432" startColumn="1" endLine="42" endColumn="3" startOffset="1430" location="C:\Users\rober\Downloads\eclipse-escet-v5.0-win32.win32.x86_64\eclipse-escet-v5.0\workspace\CIFBenchmarks-5.0.0.v20241003-060816\sudoku\sudoku.cif"/>
    <definition xmi:type="types:ComponentDefType" xmi:id="1087" definition="3">
      <position xmi:type="position:Position" xmi:id="1088" source="File &quot;C:\Users\rober\Downloads\eclipse-escet-v5.0-win32.win32.x86_64\eclipse-escet-v5.0\workspace\CIFBenchmarks-5.0.0.v20241003-060816\sudoku\sudoku.cif&quot;: " startLine="42" endOffset="1439" startColumn="7" endLine="42" endColumn="10" startOffset="1436" location="C:\Users\rober\Downloads\eclipse-escet-v5.0-win32.win32.x86_64\eclipse-escet-v5.0\workspace\CIFBenchmarks-5.0.0.v20241003-060816\sudoku\sudoku.cif"/>
    </definition>
  </components>
  <components xmi:type="cif:ComponentInst" xmi:id="1089" name="h12">
    <position xmi:type="position:Position" xmi:id="1090" source="File &quot;C:\Users\rober\Downloads\eclipse-escet-v5.0-win32.win32.x86_64\eclipse-escet-v5.0\workspace\CIFBenchmarks-5.0.0.v20241003-060816\sudoku\sudoku.cif&quot;: " startLine="43" endOffset="1446" startColumn="1" endLine="43" endColumn="3" startOffset="1444" location="C:\Users\rober\Downloads\eclipse-escet-v5.0-win32.win32.x86_64\eclipse-escet-v5.0\workspace\CIFBenchmarks-5.0.0.v20241003-060816\sudoku\sudoku.cif"/>
    <definition xmi:type="types:ComponentDefType" xmi:id="1091" definition="3">
      <position xmi:type="position:Position" xmi:id="1092" source="File &quot;C:\Users\rober\Downloads\eclipse-escet-v5.0-win32.win32.x86_64\eclipse-escet-v5.0\workspace\CIFBenchmarks-5.0.0.v20241003-060816\sudoku\sudoku.cif&quot;: " startLine="43" endOffset="1453" startColumn="7" endLine="43" endColumn="10" startOffset="1450" location="C:\Users\rober\Downloads\eclipse-escet-v5.0-win32.win32.x86_64\eclipse-escet-v5.0\workspace\CIFBenchmarks-5.0.0.v20241003-060816\sudoku\sudoku.cif"/>
    </definition>
  </components>
  <components xmi:type="cif:ComponentInst" xmi:id="1093" name="h13">
    <position xmi:type="position:Position" xmi:id="1094" source="File &quot;C:\Users\rober\Downloads\eclipse-escet-v5.0-win32.win32.x86_64\eclipse-escet-v5.0\workspace\CIFBenchmarks-5.0.0.v20241003-060816\sudoku\sudoku.cif&quot;: " startLine="44" endOffset="1460" startColumn="1" endLine="44" endColumn="3" startOffset="1458" location="C:\Users\rober\Downloads\eclipse-escet-v5.0-win32.win32.x86_64\eclipse-escet-v5.0\workspace\CIFBenchmarks-5.0.0.v20241003-060816\sudoku\sudoku.cif"/>
    <definition xmi:type="types:ComponentDefType" xmi:id="1095" definition="3">
      <position xmi:type="position:Position" xmi:id="1096" source="File &quot;C:\Users\rober\Downloads\eclipse-escet-v5.0-win32.win32.x86_64\eclipse-escet-v5.0\workspace\CIFBenchmarks-5.0.0.v20241003-060816\sudoku\sudoku.cif&quot;: " startLine="44" endOffset="1467" startColumn="7" endLine="44" endColumn="10" startOffset="1464" location="C:\Users\rober\Downloads\eclipse-escet-v5.0-win32.win32.x86_64\eclipse-escet-v5.0\workspace\CIFBenchmarks-5.0.0.v20241003-060816\sudoku\sudoku.cif"/>
    </definition>
  </components>
  <components xmi:type="cif:ComponentInst" xmi:id="1097" name="h14">
    <position xmi:type="position:Position" xmi:id="1098" source="File &quot;C:\Users\rober\Downloads\eclipse-escet-v5.0-win32.win32.x86_64\eclipse-escet-v5.0\workspace\CIFBenchmarks-5.0.0.v20241003-060816\sudoku\sudoku.cif&quot;: " startLine="45" endOffset="1474" startColumn="1" endLine="45" endColumn="3" startOffset="1472" location="C:\Users\rober\Downloads\eclipse-escet-v5.0-win32.win32.x86_64\eclipse-escet-v5.0\workspace\CIFBenchmarks-5.0.0.v20241003-060816\sudoku\sudoku.cif"/>
    <definition xmi:type="types:ComponentDefType" xmi:id="1099" definition="3">
      <position xmi:type="position:Position" xmi:id="1100" source="File &quot;C:\Users\rober\Downloads\eclipse-escet-v5.0-win32.win32.x86_64\eclipse-escet-v5.0\workspace\CIFBenchmarks-5.0.0.v20241003-060816\sudoku\sudoku.cif&quot;: " startLine="45" endOffset="1481" startColumn="7" endLine="45" endColumn="10" startOffset="1478" location="C:\Users\rober\Downloads\eclipse-escet-v5.0-win32.win32.x86_64\eclipse-escet-v5.0\workspace\CIFBenchmarks-5.0.0.v20241003-060816\sudoku\sudoku.cif"/>
    </definition>
  </components>
  <components xmi:type="cif:ComponentInst" xmi:id="1101" name="h21">
    <position xmi:type="position:Position" xmi:id="1102" source="File &quot;C:\Users\rober\Downloads\eclipse-escet-v5.0-win32.win32.x86_64\eclipse-escet-v5.0\workspace\CIFBenchmarks-5.0.0.v20241003-060816\sudoku\sudoku.cif&quot;: " startLine="48" endOffset="1501" startColumn="1" endLine="48" endColumn="3" startOffset="1499" location="C:\Users\rober\Downloads\eclipse-escet-v5.0-win32.win32.x86_64\eclipse-escet-v5.0\workspace\CIFBenchmarks-5.0.0.v20241003-060816\sudoku\sudoku.cif"/>
    <definition xmi:type="types:ComponentDefType" xmi:id="1103" definition="3">
      <position xmi:type="position:Position" xmi:id="1104" source="File &quot;C:\Users\rober\Downloads\eclipse-escet-v5.0-win32.win32.x86_64\eclipse-escet-v5.0\workspace\CIFBenchmarks-5.0.0.v20241003-060816\sudoku\sudoku.cif&quot;: " startLine="48" endOffset="1508" startColumn="7" endLine="48" endColumn="10" startOffset="1505" location="C:\Users\rober\Downloads\eclipse-escet-v5.0-win32.win32.x86_64\eclipse-escet-v5.0\workspace\CIFBenchmarks-5.0.0.v20241003-060816\sudoku\sudoku.cif"/>
    </definition>
  </components>
  <components xmi:type="cif:ComponentInst" xmi:id="1105" name="h22">
    <position xmi:type="position:Position" xmi:id="1106" source="File &quot;C:\Users\rober\Downloads\eclipse-escet-v5.0-win32.win32.x86_64\eclipse-escet-v5.0\workspace\CIFBenchmarks-5.0.0.v20241003-060816\sudoku\sudoku.cif&quot;: " startLine="49" endOffset="1515" startColumn="1" endLine="49" endColumn="3" startOffset="1513" location="C:\Users\rober\Downloads\eclipse-escet-v5.0-win32.win32.x86_64\eclipse-escet-v5.0\workspace\CIFBenchmarks-5.0.0.v20241003-060816\sudoku\sudoku.cif"/>
    <definition xmi:type="types:ComponentDefType" xmi:id="1107" definition="3">
      <position xmi:type="position:Position" xmi:id="1108" source="File &quot;C:\Users\rober\Downloads\eclipse-escet-v5.0-win32.win32.x86_64\eclipse-escet-v5.0\workspace\CIFBenchmarks-5.0.0.v20241003-060816\sudoku\sudoku.cif&quot;: " startLine="49" endOffset="1522" startColumn="7" endLine="49" endColumn="10" startOffset="1519" location="C:\Users\rober\Downloads\eclipse-escet-v5.0-win32.win32.x86_64\eclipse-escet-v5.0\workspace\CIFBenchmarks-5.0.0.v20241003-060816\sudoku\sudoku.cif"/>
    </definition>
  </components>
  <components xmi:type="cif:ComponentInst" xmi:id="1109" name="h23">
    <position xmi:type="position:Position" xmi:id="1110" source="File &quot;C:\Users\rober\Downloads\eclipse-escet-v5.0-win32.win32.x86_64\eclipse-escet-v5.0\workspace\CIFBenchmarks-5.0.0.v20241003-060816\sudoku\sudoku.cif&quot;: " startLine="50" endOffset="1529" startColumn="1" endLine="50" endColumn="3" startOffset="1527" location="C:\Users\rober\Downloads\eclipse-escet-v5.0-win32.win32.x86_64\eclipse-escet-v5.0\workspace\CIFBenchmarks-5.0.0.v20241003-060816\sudoku\sudoku.cif"/>
    <definition xmi:type="types:ComponentDefType" xmi:id="1111" definition="3">
      <position xmi:type="position:Position" xmi:id="1112" source="File &quot;C:\Users\rober\Downloads\eclipse-escet-v5.0-win32.win32.x86_64\eclipse-escet-v5.0\workspace\CIFBenchmarks-5.0.0.v20241003-060816\sudoku\sudoku.cif&quot;: " startLine="50" endOffset="1536" startColumn="7" endLine="50" endColumn="10" startOffset="1533" location="C:\Users\rober\Downloads\eclipse-escet-v5.0-win32.win32.x86_64\eclipse-escet-v5.0\workspace\CIFBenchmarks-5.0.0.v20241003-060816\sudoku\sudoku.cif"/>
    </definition>
  </components>
  <components xmi:type="cif:ComponentInst" xmi:id="1113" name="h24">
    <position xmi:type="position:Position" xmi:id="1114" source="File &quot;C:\Users\rober\Downloads\eclipse-escet-v5.0-win32.win32.x86_64\eclipse-escet-v5.0\workspace\CIFBenchmarks-5.0.0.v20241003-060816\sudoku\sudoku.cif&quot;: " startLine="51" endOffset="1543" startColumn="1" endLine="51" endColumn="3" startOffset="1541" location="C:\Users\rober\Downloads\eclipse-escet-v5.0-win32.win32.x86_64\eclipse-escet-v5.0\workspace\CIFBenchmarks-5.0.0.v20241003-060816\sudoku\sudoku.cif"/>
    <definition xmi:type="types:ComponentDefType" xmi:id="1115" definition="3">
      <position xmi:type="position:Position" xmi:id="1116" source="File &quot;C:\Users\rober\Downloads\eclipse-escet-v5.0-win32.win32.x86_64\eclipse-escet-v5.0\workspace\CIFBenchmarks-5.0.0.v20241003-060816\sudoku\sudoku.cif&quot;: " startLine="51" endOffset="1550" startColumn="7" endLine="51" endColumn="10" startOffset="1547" location="C:\Users\rober\Downloads\eclipse-escet-v5.0-win32.win32.x86_64\eclipse-escet-v5.0\workspace\CIFBenchmarks-5.0.0.v20241003-060816\sudoku\sudoku.cif"/>
    </definition>
  </components>
  <components xmi:type="cif:ComponentInst" xmi:id="1117" name="h31">
    <position xmi:type="position:Position" xmi:id="1118" source="File &quot;C:\Users\rober\Downloads\eclipse-escet-v5.0-win32.win32.x86_64\eclipse-escet-v5.0\workspace\CIFBenchmarks-5.0.0.v20241003-060816\sudoku\sudoku.cif&quot;: " startLine="54" endOffset="1570" startColumn="1" endLine="54" endColumn="3" startOffset="1568" location="C:\Users\rober\Downloads\eclipse-escet-v5.0-win32.win32.x86_64\eclipse-escet-v5.0\workspace\CIFBenchmarks-5.0.0.v20241003-060816\sudoku\sudoku.cif"/>
    <definition xmi:type="types:ComponentDefType" xmi:id="1119" definition="3">
      <position xmi:type="position:Position" xmi:id="1120" source="File &quot;C:\Users\rober\Downloads\eclipse-escet-v5.0-win32.win32.x86_64\eclipse-escet-v5.0\workspace\CIFBenchmarks-5.0.0.v20241003-060816\sudoku\sudoku.cif&quot;: " startLine="54" endOffset="1577" startColumn="7" endLine="54" endColumn="10" startOffset="1574" location="C:\Users\rober\Downloads\eclipse-escet-v5.0-win32.win32.x86_64\eclipse-escet-v5.0\workspace\CIFBenchmarks-5.0.0.v20241003-060816\sudoku\sudoku.cif"/>
    </definition>
  </components>
  <components xmi:type="cif:ComponentInst" xmi:id="1121" name="h32">
    <position xmi:type="position:Position" xmi:id="1122" source="File &quot;C:\Users\rober\Downloads\eclipse-escet-v5.0-win32.win32.x86_64\eclipse-escet-v5.0\workspace\CIFBenchmarks-5.0.0.v20241003-060816\sudoku\sudoku.cif&quot;: " startLine="55" endOffset="1584" startColumn="1" endLine="55" endColumn="3" startOffset="1582" location="C:\Users\rober\Downloads\eclipse-escet-v5.0-win32.win32.x86_64\eclipse-escet-v5.0\workspace\CIFBenchmarks-5.0.0.v20241003-060816\sudoku\sudoku.cif"/>
    <definition xmi:type="types:ComponentDefType" xmi:id="1123" definition="3">
      <position xmi:type="position:Position" xmi:id="1124" source="File &quot;C:\Users\rober\Downloads\eclipse-escet-v5.0-win32.win32.x86_64\eclipse-escet-v5.0\workspace\CIFBenchmarks-5.0.0.v20241003-060816\sudoku\sudoku.cif&quot;: " startLine="55" endOffset="1591" startColumn="7" endLine="55" endColumn="10" startOffset="1588" location="C:\Users\rober\Downloads\eclipse-escet-v5.0-win32.win32.x86_64\eclipse-escet-v5.0\workspace\CIFBenchmarks-5.0.0.v20241003-060816\sudoku\sudoku.cif"/>
    </definition>
  </components>
  <components xmi:type="cif:ComponentInst" xmi:id="1125" name="h33">
    <position xmi:type="position:Position" xmi:id="1126" source="File &quot;C:\Users\rober\Downloads\eclipse-escet-v5.0-win32.win32.x86_64\eclipse-escet-v5.0\workspace\CIFBenchmarks-5.0.0.v20241003-060816\sudoku\sudoku.cif&quot;: " startLine="56" endOffset="1598" startColumn="1" endLine="56" endColumn="3" startOffset="1596" location="C:\Users\rober\Downloads\eclipse-escet-v5.0-win32.win32.x86_64\eclipse-escet-v5.0\workspace\CIFBenchmarks-5.0.0.v20241003-060816\sudoku\sudoku.cif"/>
    <definition xmi:type="types:ComponentDefType" xmi:id="1127" definition="3">
      <position xmi:type="position:Position" xmi:id="1128" source="File &quot;C:\Users\rober\Downloads\eclipse-escet-v5.0-win32.win32.x86_64\eclipse-escet-v5.0\workspace\CIFBenchmarks-5.0.0.v20241003-060816\sudoku\sudoku.cif&quot;: " startLine="56" endOffset="1605" startColumn="7" endLine="56" endColumn="10" startOffset="1602" location="C:\Users\rober\Downloads\eclipse-escet-v5.0-win32.win32.x86_64\eclipse-escet-v5.0\workspace\CIFBenchmarks-5.0.0.v20241003-060816\sudoku\sudoku.cif"/>
    </definition>
  </components>
  <components xmi:type="cif:ComponentInst" xmi:id="1129" name="h34">
    <position xmi:type="position:Position" xmi:id="1130" source="File &quot;C:\Users\rober\Downloads\eclipse-escet-v5.0-win32.win32.x86_64\eclipse-escet-v5.0\workspace\CIFBenchmarks-5.0.0.v20241003-060816\sudoku\sudoku.cif&quot;: " startLine="57" endOffset="1612" startColumn="1" endLine="57" endColumn="3" startOffset="1610" location="C:\Users\rober\Downloads\eclipse-escet-v5.0-win32.win32.x86_64\eclipse-escet-v5.0\workspace\CIFBenchmarks-5.0.0.v20241003-060816\sudoku\sudoku.cif"/>
    <definition xmi:type="types:ComponentDefType" xmi:id="1131" definition="3">
      <position xmi:type="position:Position" xmi:id="1132" source="File &quot;C:\Users\rober\Downloads\eclipse-escet-v5.0-win32.win32.x86_64\eclipse-escet-v5.0\workspace\CIFBenchmarks-5.0.0.v20241003-060816\sudoku\sudoku.cif&quot;: " startLine="57" endOffset="1619" startColumn="7" endLine="57" endColumn="10" startOffset="1616" location="C:\Users\rober\Downloads\eclipse-escet-v5.0-win32.win32.x86_64\eclipse-escet-v5.0\workspace\CIFBenchmarks-5.0.0.v20241003-060816\sudoku\sudoku.cif"/>
    </definition>
  </components>
  <components xmi:type="cif:ComponentInst" xmi:id="1133" name="h41">
    <position xmi:type="position:Position" xmi:id="1134" source="File &quot;C:\Users\rober\Downloads\eclipse-escet-v5.0-win32.win32.x86_64\eclipse-escet-v5.0\workspace\CIFBenchmarks-5.0.0.v20241003-060816\sudoku\sudoku.cif&quot;: " startLine="60" endOffset="1639" startColumn="1" endLine="60" endColumn="3" startOffset="1637" location="C:\Users\rober\Downloads\eclipse-escet-v5.0-win32.win32.x86_64\eclipse-escet-v5.0\workspace\CIFBenchmarks-5.0.0.v20241003-060816\sudoku\sudoku.cif"/>
    <definition xmi:type="types:ComponentDefType" xmi:id="1135" definition="3">
      <position xmi:type="position:Position" xmi:id="1136" source="File &quot;C:\Users\rober\Downloads\eclipse-escet-v5.0-win32.win32.x86_64\eclipse-escet-v5.0\workspace\CIFBenchmarks-5.0.0.v20241003-060816\sudoku\sudoku.cif&quot;: " startLine="60" endOffset="1646" startColumn="7" endLine="60" endColumn="10" startOffset="1643" location="C:\Users\rober\Downloads\eclipse-escet-v5.0-win32.win32.x86_64\eclipse-escet-v5.0\workspace\CIFBenchmarks-5.0.0.v20241003-060816\sudoku\sudoku.cif"/>
    </definition>
  </components>
  <components xmi:type="cif:ComponentInst" xmi:id="1137" name="h42">
    <position xmi:type="position:Position" xmi:id="1138" source="File &quot;C:\Users\rober\Downloads\eclipse-escet-v5.0-win32.win32.x86_64\eclipse-escet-v5.0\workspace\CIFBenchmarks-5.0.0.v20241003-060816\sudoku\sudoku.cif&quot;: " startLine="61" endOffset="1653" startColumn="1" endLine="61" endColumn="3" startOffset="1651" location="C:\Users\rober\Downloads\eclipse-escet-v5.0-win32.win32.x86_64\eclipse-escet-v5.0\workspace\CIFBenchmarks-5.0.0.v20241003-060816\sudoku\sudoku.cif"/>
    <definition xmi:type="types:ComponentDefType" xmi:id="1139" definition="3">
      <position xmi:type="position:Position" xmi:id="1140" source="File &quot;C:\Users\rober\Downloads\eclipse-escet-v5.0-win32.win32.x86_64\eclipse-escet-v5.0\workspace\CIFBenchmarks-5.0.0.v20241003-060816\sudoku\sudoku.cif&quot;: " startLine="61" endOffset="1660" startColumn="7" endLine="61" endColumn="10" startOffset="1657" location="C:\Users\rober\Downloads\eclipse-escet-v5.0-win32.win32.x86_64\eclipse-escet-v5.0\workspace\CIFBenchmarks-5.0.0.v20241003-060816\sudoku\sudoku.cif"/>
    </definition>
  </components>
  <components xmi:type="cif:ComponentInst" xmi:id="1141" name="h43">
    <position xmi:type="position:Position" xmi:id="1142" source="File &quot;C:\Users\rober\Downloads\eclipse-escet-v5.0-win32.win32.x86_64\eclipse-escet-v5.0\workspace\CIFBenchmarks-5.0.0.v20241003-060816\sudoku\sudoku.cif&quot;: " startLine="62" endOffset="1667" startColumn="1" endLine="62" endColumn="3" startOffset="1665" location="C:\Users\rober\Downloads\eclipse-escet-v5.0-win32.win32.x86_64\eclipse-escet-v5.0\workspace\CIFBenchmarks-5.0.0.v20241003-060816\sudoku\sudoku.cif"/>
    <definition xmi:type="types:ComponentDefType" xmi:id="1143" definition="3">
      <position xmi:type="position:Position" xmi:id="1144" source="File &quot;C:\Users\rober\Downloads\eclipse-escet-v5.0-win32.win32.x86_64\eclipse-escet-v5.0\workspace\CIFBenchmarks-5.0.0.v20241003-060816\sudoku\sudoku.cif&quot;: " startLine="62" endOffset="1674" startColumn="7" endLine="62" endColumn="10" startOffset="1671" location="C:\Users\rober\Downloads\eclipse-escet-v5.0-win32.win32.x86_64\eclipse-escet-v5.0\workspace\CIFBenchmarks-5.0.0.v20241003-060816\sudoku\sudoku.cif"/>
    </definition>
  </components>
  <components xmi:type="cif:ComponentInst" xmi:id="1145" name="h44">
    <position xmi:type="position:Position" xmi:id="1146" source="File &quot;C:\Users\rober\Downloads\eclipse-escet-v5.0-win32.win32.x86_64\eclipse-escet-v5.0\workspace\CIFBenchmarks-5.0.0.v20241003-060816\sudoku\sudoku.cif&quot;: " startLine="63" endOffset="1681" startColumn="1" endLine="63" endColumn="3" startOffset="1679" location="C:\Users\rober\Downloads\eclipse-escet-v5.0-win32.win32.x86_64\eclipse-escet-v5.0\workspace\CIFBenchmarks-5.0.0.v20241003-060816\sudoku\sudoku.cif"/>
    <definition xmi:type="types:ComponentDefType" xmi:id="1147" definition="3">
      <position xmi:type="position:Position" xmi:id="1148" source="File &quot;C:\Users\rober\Downloads\eclipse-escet-v5.0-win32.win32.x86_64\eclipse-escet-v5.0\workspace\CIFBenchmarks-5.0.0.v20241003-060816\sudoku\sudoku.cif&quot;: " startLine="63" endOffset="1688" startColumn="7" endLine="63" endColumn="10" startOffset="1685" location="C:\Users\rober\Downloads\eclipse-escet-v5.0-win32.win32.x86_64\eclipse-escet-v5.0\workspace\CIFBenchmarks-5.0.0.v20241003-060816\sudoku\sudoku.cif"/>
    </definition>
  </components>
  <components xmi:type="cif:ComponentInst" xmi:id="1149" name="c1">
    <position xmi:type="position:Position" xmi:id="1150" source="File &quot;C:\Users\rober\Downloads\eclipse-escet-v5.0-win32.win32.x86_64\eclipse-escet-v5.0\workspace\CIFBenchmarks-5.0.0.v20241003-060816\sudoku\sudoku.cif&quot;: " startLine="85" endOffset="2957" startColumn="1" endLine="85" endColumn="2" startOffset="2956" location="C:\Users\rober\Downloads\eclipse-escet-v5.0-win32.win32.x86_64\eclipse-escet-v5.0\workspace\CIFBenchmarks-5.0.0.v20241003-060816\sudoku\sudoku.cif"/>
    <definition xmi:type="types:ComponentDefType" xmi:id="1151" definition="163">
      <position xmi:type="position:Position" xmi:id="1152" source="File &quot;C:\Users\rober\Downloads\eclipse-escet-v5.0-win32.win32.x86_64\eclipse-escet-v5.0\workspace\CIFBenchmarks-5.0.0.v20241003-060816\sudoku\sudoku.cif&quot;: " startLine="85" endOffset="2970" startColumn="5" endLine="85" endColumn="15" startOffset="2960" location="C:\Users\rober\Downloads\eclipse-escet-v5.0-win32.win32.x86_64\eclipse-escet-v5.0\workspace\CIFBenchmarks-5.0.0.v20241003-060816\sudoku\sudoku.cif"/>
    </definition>
    <arguments xmi:type="expressions:IntExpression" xmi:id="1153" value="1">
      <position xmi:type="position:Position" xmi:id="1154" source="File &quot;C:\Users\rober\Downloads\eclipse-escet-v5.0-win32.win32.x86_64\eclipse-escet-v5.0\workspace\CIFBenchmarks-5.0.0.v20241003-060816\sudoku\sudoku.cif&quot;: " startLine="85" endOffset="2972" startColumn="17" endLine="85" endColumn="17" startOffset="2972" location="C:\Users\rober\Downloads\eclipse-escet-v5.0-win32.win32.x86_64\eclipse-escet-v5.0\workspace\CIFBenchmarks-5.0.0.v20241003-060816\sudoku\sudoku.cif"/>
      <type xmi:type="types:IntType" xmi:id="1155" lower="1" upper="1">
        <position xmi:type="position:Position" xmi:id="1156" source="File &quot;C:\Users\rober\Downloads\eclipse-escet-v5.0-win32.win32.x86_64\eclipse-escet-v5.0\workspace\CIFBenchmarks-5.0.0.v20241003-060816\sudoku\sudoku.cif&quot;: " startLine="85" endOffset="2972" startColumn="17" endLine="85" endColumn="17" startOffset="2972" location="C:\Users\rober\Downloads\eclipse-escet-v5.0-win32.win32.x86_64\eclipse-escet-v5.0\workspace\CIFBenchmarks-5.0.0.v20241003-060816\sudoku\sudoku.cif"/>
      </type>
    </arguments>
  </components>
  <components xmi:type="cif:ComponentInst" xmi:id="1157" name="c2">
    <position xmi:type="position:Position" xmi:id="1158" source="File &quot;C:\Users\rober\Downloads\eclipse-escet-v5.0-win32.win32.x86_64\eclipse-escet-v5.0\workspace\CIFBenchmarks-5.0.0.v20241003-060816\sudoku\sudoku.cif&quot;: " startLine="86" endOffset="2977" startColumn="1" endLine="86" endColumn="2" startOffset="2976" location="C:\Users\rober\Downloads\eclipse-escet-v5.0-win32.win32.x86_64\eclipse-escet-v5.0\workspace\CIFBenchmarks-5.0.0.v20241003-060816\sudoku\sudoku.cif"/>
    <definition xmi:type="types:ComponentDefType" xmi:id="1159" definition="163">
      <position xmi:type="position:Position" xmi:id="1160" source="File &quot;C:\Users\rober\Downloads\eclipse-escet-v5.0-win32.win32.x86_64\eclipse-escet-v5.0\workspace\CIFBenchmarks-5.0.0.v20241003-060816\sudoku\sudoku.cif&quot;: " startLine="86" endOffset="2990" startColumn="5" endLine="86" endColumn="15" startOffset="2980" location="C:\Users\rober\Downloads\eclipse-escet-v5.0-win32.win32.x86_64\eclipse-escet-v5.0\workspace\CIFBenchmarks-5.0.0.v20241003-060816\sudoku\sudoku.cif"/>
    </definition>
    <arguments xmi:type="expressions:IntExpression" xmi:id="1161" value="2">
      <position xmi:type="position:Position" xmi:id="1162" source="File &quot;C:\Users\rober\Downloads\eclipse-escet-v5.0-win32.win32.x86_64\eclipse-escet-v5.0\workspace\CIFBenchmarks-5.0.0.v20241003-060816\sudoku\sudoku.cif&quot;: " startLine="86" endOffset="2992" startColumn="17" endLine="86" endColumn="17" startOffset="2992" location="C:\Users\rober\Downloads\eclipse-escet-v5.0-win32.win32.x86_64\eclipse-escet-v5.0\workspace\CIFBenchmarks-5.0.0.v20241003-060816\sudoku\sudoku.cif"/>
      <type xmi:type="types:IntType" xmi:id="1163" lower="2" upper="2">
        <position xmi:type="position:Position" xmi:id="1164" source="File &quot;C:\Users\rober\Downloads\eclipse-escet-v5.0-win32.win32.x86_64\eclipse-escet-v5.0\workspace\CIFBenchmarks-5.0.0.v20241003-060816\sudoku\sudoku.cif&quot;: " startLine="86" endOffset="2992" startColumn="17" endLine="86" endColumn="17" startOffset="2992" location="C:\Users\rober\Downloads\eclipse-escet-v5.0-win32.win32.x86_64\eclipse-escet-v5.0\workspace\CIFBenchmarks-5.0.0.v20241003-060816\sudoku\sudoku.cif"/>
      </type>
    </arguments>
  </components>
  <components xmi:type="cif:ComponentInst" xmi:id="1165" name="c3">
    <position xmi:type="position:Position" xmi:id="1166" source="File &quot;C:\Users\rober\Downloads\eclipse-escet-v5.0-win32.win32.x86_64\eclipse-escet-v5.0\workspace\CIFBenchmarks-5.0.0.v20241003-060816\sudoku\sudoku.cif&quot;: " startLine="87" endOffset="2997" startColumn="1" endLine="87" endColumn="2" startOffset="2996" location="C:\Users\rober\Downloads\eclipse-escet-v5.0-win32.win32.x86_64\eclipse-escet-v5.0\workspace\CIFBenchmarks-5.0.0.v20241003-060816\sudoku\sudoku.cif"/>
    <definition xmi:type="types:ComponentDefType" xmi:id="1167" definition="163">
      <position xmi:type="position:Position" xmi:id="1168" source="File &quot;C:\Users\rober\Downloads\eclipse-escet-v5.0-win32.win32.x86_64\eclipse-escet-v5.0\workspace\CIFBenchmarks-5.0.0.v20241003-060816\sudoku\sudoku.cif&quot;: " startLine="87" endOffset="3010" startColumn="5" endLine="87" endColumn="15" startOffset="3000" location="C:\Users\rober\Downloads\eclipse-escet-v5.0-win32.win32.x86_64\eclipse-escet-v5.0\workspace\CIFBenchmarks-5.0.0.v20241003-060816\sudoku\sudoku.cif"/>
    </definition>
    <arguments xmi:type="expressions:IntExpression" xmi:id="1169" value="3">
      <position xmi:type="position:Position" xmi:id="1170" source="File &quot;C:\Users\rober\Downloads\eclipse-escet-v5.0-win32.win32.x86_64\eclipse-escet-v5.0\workspace\CIFBenchmarks-5.0.0.v20241003-060816\sudoku\sudoku.cif&quot;: " startLine="87" endOffset="3012" startColumn="17" endLine="87" endColumn="17" startOffset="3012" location="C:\Users\rober\Downloads\eclipse-escet-v5.0-win32.win32.x86_64\eclipse-escet-v5.0\workspace\CIFBenchmarks-5.0.0.v20241003-060816\sudoku\sudoku.cif"/>
      <type xmi:type="types:IntType" xmi:id="1171" lower="3" upper="3">
        <position xmi:type="position:Position" xmi:id="1172" source="File &quot;C:\Users\rober\Downloads\eclipse-escet-v5.0-win32.win32.x86_64\eclipse-escet-v5.0\workspace\CIFBenchmarks-5.0.0.v20241003-060816\sudoku\sudoku.cif&quot;: " startLine="87" endOffset="3012" startColumn="17" endLine="87" endColumn="17" startOffset="3012" location="C:\Users\rober\Downloads\eclipse-escet-v5.0-win32.win32.x86_64\eclipse-escet-v5.0\workspace\CIFBenchmarks-5.0.0.v20241003-060816\sudoku\sudoku.cif"/>
      </type>
    </arguments>
  </components>
  <components xmi:type="cif:ComponentInst" xmi:id="1173" name="c4">
    <position xmi:type="position:Position" xmi:id="1174" source="File &quot;C:\Users\rober\Downloads\eclipse-escet-v5.0-win32.win32.x86_64\eclipse-escet-v5.0\workspace\CIFBenchmarks-5.0.0.v20241003-060816\sudoku\sudoku.cif&quot;: " startLine="88" endOffset="3017" startColumn="1" endLine="88" endColumn="2" startOffset="3016" location="C:\Users\rober\Downloads\eclipse-escet-v5.0-win32.win32.x86_64\eclipse-escet-v5.0\workspace\CIFBenchmarks-5.0.0.v20241003-060816\sudoku\sudoku.cif"/>
    <definition xmi:type="types:ComponentDefType" xmi:id="1175" definition="163">
      <position xmi:type="position:Position" xmi:id="1176" source="File &quot;C:\Users\rober\Downloads\eclipse-escet-v5.0-win32.win32.x86_64\eclipse-escet-v5.0\workspace\CIFBenchmarks-5.0.0.v20241003-060816\sudoku\sudoku.cif&quot;: " startLine="88" endOffset="3030" startColumn="5" endLine="88" endColumn="15" startOffset="3020" location="C:\Users\rober\Downloads\eclipse-escet-v5.0-win32.win32.x86_64\eclipse-escet-v5.0\workspace\CIFBenchmarks-5.0.0.v20241003-060816\sudoku\sudoku.cif"/>
    </definition>
    <arguments xmi:type="expressions:IntExpression" xmi:id="1177" value="4">
      <position xmi:type="position:Position" xmi:id="1178" source="File &quot;C:\Users\rober\Downloads\eclipse-escet-v5.0-win32.win32.x86_64\eclipse-escet-v5.0\workspace\CIFBenchmarks-5.0.0.v20241003-060816\sudoku\sudoku.cif&quot;: " startLine="88" endOffset="3032" startColumn="17" endLine="88" endColumn="17" startOffset="3032" location="C:\Users\rober\Downloads\eclipse-escet-v5.0-win32.win32.x86_64\eclipse-escet-v5.0\workspace\CIFBenchmarks-5.0.0.v20241003-060816\sudoku\sudoku.cif"/>
      <type xmi:type="types:IntType" xmi:id="1179" lower="4" upper="4">
        <position xmi:type="position:Position" xmi:id="1180" source="File &quot;C:\Users\rober\Downloads\eclipse-escet-v5.0-win32.win32.x86_64\eclipse-escet-v5.0\workspace\CIFBenchmarks-5.0.0.v20241003-060816\sudoku\sudoku.cif&quot;: " startLine="88" endOffset="3032" startColumn="17" endLine="88" endColumn="17" startOffset="3032" location="C:\Users\rober\Downloads\eclipse-escet-v5.0-win32.win32.x86_64\eclipse-escet-v5.0\workspace\CIFBenchmarks-5.0.0.v20241003-060816\sudoku\sudoku.cif"/>
      </type>
    </arguments>
  </components>
</cif:Specification>
`;
const eventMap = ['h11.c_1', 'h11.c_2', 'h11.c_3', 'h11.c_4', 'h12.c_1', 'h12.c_2', 'h12.c_3', 'h12.c_4', 'h13.c_1', 'h13.c_2', 'h13.c_3', 'h13.c_4', 'h14.c_1', 'h14.c_2', 'h14.c_3', 'h14.c_4', 'h21.c_1', 'h21.c_2', 'h21.c_3', 'h21.c_4', 'h22.c_1', 'h22.c_2', 'h22.c_3', 'h22.c_4', 'h23.c_1', 'h23.c_2', 'h23.c_3', 'h23.c_4', 'h24.c_1', 'h24.c_2', 'h24.c_3', 'h24.c_4', 'h31.c_1', 'h31.c_2', 'h31.c_3', 'h31.c_4', 'h32.c_1', 'h32.c_2', 'h32.c_3', 'h32.c_4', 'h33.c_1', 'h33.c_2', 'h33.c_3', 'h33.c_4', 'h34.c_1', 'h34.c_2', 'h34.c_3', 'h34.c_4', 'h41.c_1', 'h41.c_2', 'h41.c_3', 'h41.c_4', 'h42.c_1', 'h42.c_2', 'h42.c_3', 'h42.c_4', 'h43.c_1', 'h43.c_2', 'h43.c_3', 'h43.c_4', 'h44.c_1', 'h44.c_2', 'h44.c_3', 'h44.c_4'];
