const xml_largest_automata = `<?xml version="1.0" encoding="UTF-8"?>
<cif:Specification xmi:version="2.0" xmlns:xmi="http://www.omg.org/XMI" xmlns:xsi="http://www.w3.org/2001/XMLSchema-instance" xmlns:automata="http://eclipse.org/escet/cif/automata" xmlns:cif="http://eclipse.org/escet/cif" xmlns:declarations="http://eclipse.org/escet/cif/declarations" xmlns:expressions="http://eclipse.org/escet/cif/expressions" xmlns:position="http://eclipse.org/escet/position" xmlns:types="http://eclipse.org/escet/cif/types" xsi:schemaLocation="http://eclipse.org/escet/cif/automata http://eclipse.org/escet/cif#//automata http://eclipse.org/escet/cif/declarations http://eclipse.org/escet/cif#//declarations http://eclipse.org/escet/cif/expressions http://eclipse.org/escet/cif#//expressions http://eclipse.org/escet/cif/types http://eclipse.org/escet/cif#//types" xmi:id="1" name="specification">
  <position xmi:type="position:Position" xmi:id="2" source="File &quot;../data/tests\dev_transformed.cif&quot;: " startLine="1" startColumn="1" endLine="1" endColumn="1" location="C:\Users\rober\Documents\studie\afstuderen\development\simulator_via_code_generator\data\tests\dev_transformed.cif"/>
  <declarations xmi:type="declarations:Event" xmi:id="3" name="TRtoSUB_0_s" controllable="true">
    <position xmi:type="position:Position" xmi:id="4" source="File &quot;../data/tests\dev_transformed.cif&quot;: " startLine="1" endOffset="23" startColumn="14" endLine="1" endColumn="24" startOffset="13" location="C:\Users\rober\Documents\studie\afstuderen\development\simulator_via_code_generator\data\tests\dev_transformed.cif"/>
  </declarations>
  <declarations xmi:type="declarations:Event" xmi:id="5" name="SUBtoUR_0_s" controllable="true">
    <position xmi:type="position:Position" xmi:id="6" source="File &quot;../data/tests\dev_transformed.cif&quot;: " startLine="2" endOffset="50" startColumn="14" endLine="2" endColumn="24" startOffset="40" location="C:\Users\rober\Documents\studie\afstuderen\development\simulator_via_code_generator\data\tests\dev_transformed.cif"/>
  </declarations>
  <declarations xmi:type="declarations:Event" xmi:id="7" name="URtoSUB_0_s" controllable="true">
    <position xmi:type="position:Position" xmi:id="8" source="File &quot;../data/tests\dev_transformed.cif&quot;: " startLine="3" endOffset="77" startColumn="14" endLine="3" endColumn="24" startOffset="67" location="C:\Users\rober\Documents\studie\afstuderen\development\simulator_via_code_generator\data\tests\dev_transformed.cif"/>
  </declarations>
  <declarations xmi:type="declarations:Event" xmi:id="9" name="URtoDU_0_s" controllable="true">
    <position xmi:type="position:Position" xmi:id="10" source="File &quot;../data/tests\dev_transformed.cif&quot;: " startLine="4" endOffset="103" startColumn="14" endLine="4" endColumn="23" startOffset="94" location="C:\Users\rober\Documents\studie\afstuderen\development\simulator_via_code_generator\data\tests\dev_transformed.cif"/>
  </declarations>
  <declarations xmi:type="declarations:Event" xmi:id="11" name="URtoPA_0_s" controllable="true">
    <position xmi:type="position:Position" xmi:id="12" source="File &quot;../data/tests\dev_transformed.cif&quot;: " startLine="5" endOffset="129" startColumn="14" endLine="5" endColumn="23" startOffset="120" location="C:\Users\rober\Documents\studie\afstuderen\development\simulator_via_code_generator\data\tests\dev_transformed.cif"/>
  </declarations>
  <declarations xmi:type="declarations:Event" xmi:id="13" name="URtoCTC1_0_s" controllable="true">
    <position xmi:type="position:Position" xmi:id="14" source="File &quot;../data/tests\dev_transformed.cif&quot;: " startLine="6" endOffset="157" startColumn="14" endLine="6" endColumn="25" startOffset="146" location="C:\Users\rober\Documents\studie\afstuderen\development\simulator_via_code_generator\data\tests\dev_transformed.cif"/>
  </declarations>
  <declarations xmi:type="declarations:Event" xmi:id="15" name="PAtoUR_0_s" controllable="true">
    <position xmi:type="position:Position" xmi:id="16" source="File &quot;../data/tests\dev_transformed.cif&quot;: " startLine="7" endOffset="183" startColumn="14" endLine="7" endColumn="23" startOffset="174" location="C:\Users\rober\Documents\studie\afstuderen\development\simulator_via_code_generator\data\tests\dev_transformed.cif"/>
  </declarations>
  <declarations xmi:type="declarations:Event" xmi:id="17" name="PAtoLR_0_s" controllable="true">
    <position xmi:type="position:Position" xmi:id="18" source="File &quot;../data/tests\dev_transformed.cif&quot;: " startLine="8" endOffset="209" startColumn="14" endLine="8" endColumn="23" startOffset="200" location="C:\Users\rober\Documents\studie\afstuderen\development\simulator_via_code_generator\data\tests\dev_transformed.cif"/>
  </declarations>
  <declarations xmi:type="declarations:Event" xmi:id="19" name="LRtoDU_0_s" controllable="true">
    <position xmi:type="position:Position" xmi:id="20" source="File &quot;../data/tests\dev_transformed.cif&quot;: " startLine="9" endOffset="235" startColumn="14" endLine="9" endColumn="23" startOffset="226" location="C:\Users\rober\Documents\studie\afstuderen\development\simulator_via_code_generator\data\tests\dev_transformed.cif"/>
  </declarations>
  <declarations xmi:type="declarations:Event" xmi:id="21" name="LRtoPA_0_s" controllable="true">
    <position xmi:type="position:Position" xmi:id="22" source="File &quot;../data/tests\dev_transformed.cif&quot;: " startLine="10" endOffset="261" startColumn="14" endLine="10" endColumn="23" startOffset="252" location="C:\Users\rober\Documents\studie\afstuderen\development\simulator_via_code_generator\data\tests\dev_transformed.cif"/>
  </declarations>
  <declarations xmi:type="declarations:Event" xmi:id="23" name="LRtoCH0_0_s" controllable="true">
    <position xmi:type="position:Position" xmi:id="24" source="File &quot;../data/tests\dev_transformed.cif&quot;: " startLine="11" endOffset="288" startColumn="14" endLine="11" endColumn="24" startOffset="278" location="C:\Users\rober\Documents\studie\afstuderen\development\simulator_via_code_generator\data\tests\dev_transformed.cif"/>
  </declarations>
  <declarations xmi:type="declarations:Event" xmi:id="25" name="LRtoCH1_0_s" controllable="true">
    <position xmi:type="position:Position" xmi:id="26" source="File &quot;../data/tests\dev_transformed.cif&quot;: " startLine="12" endOffset="315" startColumn="14" endLine="12" endColumn="24" startOffset="305" location="C:\Users\rober\Documents\studie\afstuderen\development\simulator_via_code_generator\data\tests\dev_transformed.cif"/>
  </declarations>
  <declarations xmi:type="declarations:Event" xmi:id="27" name="LRtoCTC0_0_s" controllable="true">
    <position xmi:type="position:Position" xmi:id="28" source="File &quot;../data/tests\dev_transformed.cif&quot;: " startLine="13" endOffset="343" startColumn="14" endLine="13" endColumn="25" startOffset="332" location="C:\Users\rober\Documents\studie\afstuderen\development\simulator_via_code_generator\data\tests\dev_transformed.cif"/>
  </declarations>
  <declarations xmi:type="declarations:Event" xmi:id="29" name="DUtoUR_0_s" controllable="true">
    <position xmi:type="position:Position" xmi:id="30" source="File &quot;../data/tests\dev_transformed.cif&quot;: " startLine="14" endOffset="369" startColumn="14" endLine="14" endColumn="23" startOffset="360" location="C:\Users\rober\Documents\studie\afstuderen\development\simulator_via_code_generator\data\tests\dev_transformed.cif"/>
  </declarations>
  <declarations xmi:type="declarations:Event" xmi:id="31" name="DUtoLR_0_s" controllable="true">
    <position xmi:type="position:Position" xmi:id="32" source="File &quot;../data/tests\dev_transformed.cif&quot;: " startLine="15" endOffset="395" startColumn="14" endLine="15" endColumn="23" startOffset="386" location="C:\Users\rober\Documents\studie\afstuderen\development\simulator_via_code_generator\data\tests\dev_transformed.cif"/>
  </declarations>
  <declarations xmi:type="declarations:Event" xmi:id="33" name="DUtoTR_0_s" controllable="true">
    <position xmi:type="position:Position" xmi:id="34" source="File &quot;../data/tests\dev_transformed.cif&quot;: " startLine="16" endOffset="421" startColumn="14" endLine="16" endColumn="23" startOffset="412" location="C:\Users\rober\Documents\studie\afstuderen\development\simulator_via_code_generator\data\tests\dev_transformed.cif"/>
  </declarations>
  <declarations xmi:type="declarations:Event" xmi:id="35" name="CH0toLR_0_s" controllable="true">
    <position xmi:type="position:Position" xmi:id="36" source="File &quot;../data/tests\dev_transformed.cif&quot;: " startLine="17" endOffset="448" startColumn="14" endLine="17" endColumn="24" startOffset="438" location="C:\Users\rober\Documents\studie\afstuderen\development\simulator_via_code_generator\data\tests\dev_transformed.cif"/>
  </declarations>
  <declarations xmi:type="declarations:Event" xmi:id="37" name="CH0toUR_0_s" controllable="true">
    <position xmi:type="position:Position" xmi:id="38" source="File &quot;../data/tests\dev_transformed.cif&quot;: " startLine="18" endOffset="475" startColumn="14" endLine="18" endColumn="24" startOffset="465" location="C:\Users\rober\Documents\studie\afstuderen\development\simulator_via_code_generator\data\tests\dev_transformed.cif"/>
  </declarations>
  <declarations xmi:type="declarations:Event" xmi:id="39" name="CH1toLR_0_s" controllable="true">
    <position xmi:type="position:Position" xmi:id="40" source="File &quot;../data/tests\dev_transformed.cif&quot;: " startLine="19" endOffset="502" startColumn="14" endLine="19" endColumn="24" startOffset="492" location="C:\Users\rober\Documents\studie\afstuderen\development\simulator_via_code_generator\data\tests\dev_transformed.cif"/>
  </declarations>
  <declarations xmi:type="declarations:Event" xmi:id="41" name="CH1toUR_0_s" controllable="true">
    <position xmi:type="position:Position" xmi:id="42" source="File &quot;../data/tests\dev_transformed.cif&quot;: " startLine="20" endOffset="529" startColumn="14" endLine="20" endColumn="24" startOffset="519" location="C:\Users\rober\Documents\studie\afstuderen\development\simulator_via_code_generator\data\tests\dev_transformed.cif"/>
  </declarations>
  <declarations xmi:type="declarations:Event" xmi:id="43" name="CTC0toLR_0_s" controllable="true">
    <position xmi:type="position:Position" xmi:id="44" source="File &quot;../data/tests\dev_transformed.cif&quot;: " startLine="21" endOffset="557" startColumn="14" endLine="21" endColumn="25" startOffset="546" location="C:\Users\rober\Documents\studie\afstuderen\development\simulator_via_code_generator\data\tests\dev_transformed.cif"/>
  </declarations>
  <declarations xmi:type="declarations:Event" xmi:id="45" name="CTC1toUR_0_s" controllable="true">
    <position xmi:type="position:Position" xmi:id="46" source="File &quot;../data/tests\dev_transformed.cif&quot;: " startLine="22" endOffset="585" startColumn="14" endLine="22" endColumn="25" startOffset="574" location="C:\Users\rober\Documents\studie\afstuderen\development\simulator_via_code_generator\data\tests\dev_transformed.cif"/>
  </declarations>
  <declarations xmi:type="declarations:Event" xmi:id="47" name="SUB_Condition_0_s" controllable="true">
    <position xmi:type="position:Position" xmi:id="48" source="File &quot;../data/tests\dev_transformed.cif&quot;: " startLine="23" endOffset="618" startColumn="14" endLine="23" endColumn="30" startOffset="602" location="C:\Users\rober\Documents\studie\afstuderen\development\simulator_via_code_generator\data\tests\dev_transformed.cif"/>
  </declarations>
  <declarations xmi:type="declarations:Event" xmi:id="49" name="PA_Align_0_s" controllable="true">
    <position xmi:type="position:Position" xmi:id="50" source="File &quot;../data/tests\dev_transformed.cif&quot;: " startLine="24" endOffset="646" startColumn="14" endLine="24" endColumn="25" startOffset="635" location="C:\Users\rober\Documents\studie\afstuderen\development\simulator_via_code_generator\data\tests\dev_transformed.cif"/>
  </declarations>
  <declarations xmi:type="declarations:Event" xmi:id="51" name="CH0_Measure_0_s" controllable="true">
    <position xmi:type="position:Position" xmi:id="52" source="File &quot;../data/tests\dev_transformed.cif&quot;: " startLine="25" endOffset="677" startColumn="14" endLine="25" endColumn="28" startOffset="663" location="C:\Users\rober\Documents\studie\afstuderen\development\simulator_via_code_generator\data\tests\dev_transformed.cif"/>
  </declarations>
  <declarations xmi:type="declarations:Event" xmi:id="53" name="CH0_Expose_0_s" controllable="true">
    <position xmi:type="position:Position" xmi:id="54" source="File &quot;../data/tests\dev_transformed.cif&quot;: " startLine="26" endOffset="707" startColumn="14" endLine="26" endColumn="27" startOffset="694" location="C:\Users\rober\Documents\studie\afstuderen\development\simulator_via_code_generator\data\tests\dev_transformed.cif"/>
  </declarations>
  <declarations xmi:type="declarations:Event" xmi:id="55" name="CH1_Measure_0_s" controllable="true">
    <position xmi:type="position:Position" xmi:id="56" source="File &quot;../data/tests\dev_transformed.cif&quot;: " startLine="27" endOffset="738" startColumn="14" endLine="27" endColumn="28" startOffset="724" location="C:\Users\rober\Documents\studie\afstuderen\development\simulator_via_code_generator\data\tests\dev_transformed.cif"/>
  </declarations>
  <declarations xmi:type="declarations:Event" xmi:id="57" name="CH1_Expose_0_s" controllable="true">
    <position xmi:type="position:Position" xmi:id="58" source="File &quot;../data/tests\dev_transformed.cif&quot;: " startLine="28" endOffset="768" startColumn="14" endLine="28" endColumn="27" startOffset="755" location="C:\Users\rober\Documents\studie\afstuderen\development\simulator_via_code_generator\data\tests\dev_transformed.cif"/>
  </declarations>
  <declarations xmi:type="declarations:Event" xmi:id="59" name="TRtoSUB_0_e" controllable="false">
    <position xmi:type="position:Position" xmi:id="60" source="File &quot;../data/tests\dev_transformed.cif&quot;: " startLine="29" endOffset="797" startColumn="16" endLine="29" endColumn="26" startOffset="787" location="C:\Users\rober\Documents\studie\afstuderen\development\simulator_via_code_generator\data\tests\dev_transformed.cif"/>
  </declarations>
  <declarations xmi:type="declarations:Event" xmi:id="61" name="SUBtoUR_0_e" controllable="false">
    <position xmi:type="position:Position" xmi:id="62" source="File &quot;../data/tests\dev_transformed.cif&quot;: " startLine="30" endOffset="826" startColumn="16" endLine="30" endColumn="26" startOffset="816" location="C:\Users\rober\Documents\studie\afstuderen\development\simulator_via_code_generator\data\tests\dev_transformed.cif"/>
  </declarations>
  <declarations xmi:type="declarations:Event" xmi:id="63" name="URtoSUB_0_e" controllable="false">
    <position xmi:type="position:Position" xmi:id="64" source="File &quot;../data/tests\dev_transformed.cif&quot;: " startLine="31" endOffset="855" startColumn="16" endLine="31" endColumn="26" startOffset="845" location="C:\Users\rober\Documents\studie\afstuderen\development\simulator_via_code_generator\data\tests\dev_transformed.cif"/>
  </declarations>
  <declarations xmi:type="declarations:Event" xmi:id="65" name="URtoDU_0_e" controllable="false">
    <position xmi:type="position:Position" xmi:id="66" source="File &quot;../data/tests\dev_transformed.cif&quot;: " startLine="32" endOffset="883" startColumn="16" endLine="32" endColumn="25" startOffset="874" location="C:\Users\rober\Documents\studie\afstuderen\development\simulator_via_code_generator\data\tests\dev_transformed.cif"/>
  </declarations>
  <declarations xmi:type="declarations:Event" xmi:id="67" name="URtoPA_0_e" controllable="false">
    <position xmi:type="position:Position" xmi:id="68" source="File &quot;../data/tests\dev_transformed.cif&quot;: " startLine="33" endOffset="911" startColumn="16" endLine="33" endColumn="25" startOffset="902" location="C:\Users\rober\Documents\studie\afstuderen\development\simulator_via_code_generator\data\tests\dev_transformed.cif"/>
  </declarations>
  <declarations xmi:type="declarations:Event" xmi:id="69" name="URtoCTC1_0_e" controllable="false">
    <position xmi:type="position:Position" xmi:id="70" source="File &quot;../data/tests\dev_transformed.cif&quot;: " startLine="34" endOffset="941" startColumn="16" endLine="34" endColumn="27" startOffset="930" location="C:\Users\rober\Documents\studie\afstuderen\development\simulator_via_code_generator\data\tests\dev_transformed.cif"/>
  </declarations>
  <declarations xmi:type="declarations:Event" xmi:id="71" name="PAtoUR_0_e" controllable="false">
    <position xmi:type="position:Position" xmi:id="72" source="File &quot;../data/tests\dev_transformed.cif&quot;: " startLine="35" endOffset="969" startColumn="16" endLine="35" endColumn="25" startOffset="960" location="C:\Users\rober\Documents\studie\afstuderen\development\simulator_via_code_generator\data\tests\dev_transformed.cif"/>
  </declarations>
  <declarations xmi:type="declarations:Event" xmi:id="73" name="PAtoLR_0_e" controllable="false">
    <position xmi:type="position:Position" xmi:id="74" source="File &quot;../data/tests\dev_transformed.cif&quot;: " startLine="36" endOffset="997" startColumn="16" endLine="36" endColumn="25" startOffset="988" location="C:\Users\rober\Documents\studie\afstuderen\development\simulator_via_code_generator\data\tests\dev_transformed.cif"/>
  </declarations>
  <declarations xmi:type="declarations:Event" xmi:id="75" name="LRtoDU_0_e" controllable="false">
    <position xmi:type="position:Position" xmi:id="76" source="File &quot;../data/tests\dev_transformed.cif&quot;: " startLine="37" endOffset="1025" startColumn="16" endLine="37" endColumn="25" startOffset="1016" location="C:\Users\rober\Documents\studie\afstuderen\development\simulator_via_code_generator\data\tests\dev_transformed.cif"/>
  </declarations>
  <declarations xmi:type="declarations:Event" xmi:id="77" name="LRtoPA_0_e" controllable="false">
    <position xmi:type="position:Position" xmi:id="78" source="File &quot;../data/tests\dev_transformed.cif&quot;: " startLine="38" endOffset="1053" startColumn="16" endLine="38" endColumn="25" startOffset="1044" location="C:\Users\rober\Documents\studie\afstuderen\development\simulator_via_code_generator\data\tests\dev_transformed.cif"/>
  </declarations>
  <declarations xmi:type="declarations:Event" xmi:id="79" name="LRtoCH0_0_e" controllable="false">
    <position xmi:type="position:Position" xmi:id="80" source="File &quot;../data/tests\dev_transformed.cif&quot;: " startLine="39" endOffset="1082" startColumn="16" endLine="39" endColumn="26" startOffset="1072" location="C:\Users\rober\Documents\studie\afstuderen\development\simulator_via_code_generator\data\tests\dev_transformed.cif"/>
  </declarations>
  <declarations xmi:type="declarations:Event" xmi:id="81" name="LRtoCH1_0_e" controllable="false">
    <position xmi:type="position:Position" xmi:id="82" source="File &quot;../data/tests\dev_transformed.cif&quot;: " startLine="40" endOffset="1111" startColumn="16" endLine="40" endColumn="26" startOffset="1101" location="C:\Users\rober\Documents\studie\afstuderen\development\simulator_via_code_generator\data\tests\dev_transformed.cif"/>
  </declarations>
  <declarations xmi:type="declarations:Event" xmi:id="83" name="LRtoCTC0_0_e" controllable="false">
    <position xmi:type="position:Position" xmi:id="84" source="File &quot;../data/tests\dev_transformed.cif&quot;: " startLine="41" endOffset="1141" startColumn="16" endLine="41" endColumn="27" startOffset="1130" location="C:\Users\rober\Documents\studie\afstuderen\development\simulator_via_code_generator\data\tests\dev_transformed.cif"/>
  </declarations>
  <declarations xmi:type="declarations:Event" xmi:id="85" name="DUtoUR_0_e" controllable="false">
    <position xmi:type="position:Position" xmi:id="86" source="File &quot;../data/tests\dev_transformed.cif&quot;: " startLine="42" endOffset="1169" startColumn="16" endLine="42" endColumn="25" startOffset="1160" location="C:\Users\rober\Documents\studie\afstuderen\development\simulator_via_code_generator\data\tests\dev_transformed.cif"/>
  </declarations>
  <declarations xmi:type="declarations:Event" xmi:id="87" name="DUtoLR_0_e" controllable="false">
    <position xmi:type="position:Position" xmi:id="88" source="File &quot;../data/tests\dev_transformed.cif&quot;: " startLine="43" endOffset="1197" startColumn="16" endLine="43" endColumn="25" startOffset="1188" location="C:\Users\rober\Documents\studie\afstuderen\development\simulator_via_code_generator\data\tests\dev_transformed.cif"/>
  </declarations>
  <declarations xmi:type="declarations:Event" xmi:id="89" name="DUtoTR_0_e" controllable="false">
    <position xmi:type="position:Position" xmi:id="90" source="File &quot;../data/tests\dev_transformed.cif&quot;: " startLine="44" endOffset="1225" startColumn="16" endLine="44" endColumn="25" startOffset="1216" location="C:\Users\rober\Documents\studie\afstuderen\development\simulator_via_code_generator\data\tests\dev_transformed.cif"/>
  </declarations>
  <declarations xmi:type="declarations:Event" xmi:id="91" name="CH0toLR_0_e" controllable="false">
    <position xmi:type="position:Position" xmi:id="92" source="File &quot;../data/tests\dev_transformed.cif&quot;: " startLine="45" endOffset="1254" startColumn="16" endLine="45" endColumn="26" startOffset="1244" location="C:\Users\rober\Documents\studie\afstuderen\development\simulator_via_code_generator\data\tests\dev_transformed.cif"/>
  </declarations>
  <declarations xmi:type="declarations:Event" xmi:id="93" name="CH0toUR_0_e" controllable="false">
    <position xmi:type="position:Position" xmi:id="94" source="File &quot;../data/tests\dev_transformed.cif&quot;: " startLine="46" endOffset="1283" startColumn="16" endLine="46" endColumn="26" startOffset="1273" location="C:\Users\rober\Documents\studie\afstuderen\development\simulator_via_code_generator\data\tests\dev_transformed.cif"/>
  </declarations>
  <declarations xmi:type="declarations:Event" xmi:id="95" name="CH1toLR_0_e" controllable="false">
    <position xmi:type="position:Position" xmi:id="96" source="File &quot;../data/tests\dev_transformed.cif&quot;: " startLine="47" endOffset="1312" startColumn="16" endLine="47" endColumn="26" startOffset="1302" location="C:\Users\rober\Documents\studie\afstuderen\development\simulator_via_code_generator\data\tests\dev_transformed.cif"/>
  </declarations>
  <declarations xmi:type="declarations:Event" xmi:id="97" name="CH1toUR_0_e" controllable="false">
    <position xmi:type="position:Position" xmi:id="98" source="File &quot;../data/tests\dev_transformed.cif&quot;: " startLine="48" endOffset="1341" startColumn="16" endLine="48" endColumn="26" startOffset="1331" location="C:\Users\rober\Documents\studie\afstuderen\development\simulator_via_code_generator\data\tests\dev_transformed.cif"/>
  </declarations>
  <declarations xmi:type="declarations:Event" xmi:id="99" name="CTC0toLR_0_e" controllable="false">
    <position xmi:type="position:Position" xmi:id="100" source="File &quot;../data/tests\dev_transformed.cif&quot;: " startLine="49" endOffset="1371" startColumn="16" endLine="49" endColumn="27" startOffset="1360" location="C:\Users\rober\Documents\studie\afstuderen\development\simulator_via_code_generator\data\tests\dev_transformed.cif"/>
  </declarations>
  <declarations xmi:type="declarations:Event" xmi:id="101" name="CTC1toUR_0_e" controllable="false">
    <position xmi:type="position:Position" xmi:id="102" source="File &quot;../data/tests\dev_transformed.cif&quot;: " startLine="50" endOffset="1401" startColumn="16" endLine="50" endColumn="27" startOffset="1390" location="C:\Users\rober\Documents\studie\afstuderen\development\simulator_via_code_generator\data\tests\dev_transformed.cif"/>
  </declarations>
  <declarations xmi:type="declarations:Event" xmi:id="103" name="SUB_Condition_0_e" controllable="false">
    <position xmi:type="position:Position" xmi:id="104" source="File &quot;../data/tests\dev_transformed.cif&quot;: " startLine="51" endOffset="1436" startColumn="16" endLine="51" endColumn="32" startOffset="1420" location="C:\Users\rober\Documents\studie\afstuderen\development\simulator_via_code_generator\data\tests\dev_transformed.cif"/>
  </declarations>
  <declarations xmi:type="declarations:Event" xmi:id="105" name="PA_Align_0_e" controllable="false">
    <position xmi:type="position:Position" xmi:id="106" source="File &quot;../data/tests\dev_transformed.cif&quot;: " startLine="52" endOffset="1466" startColumn="16" endLine="52" endColumn="27" startOffset="1455" location="C:\Users\rober\Documents\studie\afstuderen\development\simulator_via_code_generator\data\tests\dev_transformed.cif"/>
  </declarations>
  <declarations xmi:type="declarations:Event" xmi:id="107" name="CH0_Measure_0_e" controllable="false">
    <position xmi:type="position:Position" xmi:id="108" source="File &quot;../data/tests\dev_transformed.cif&quot;: " startLine="53" endOffset="1499" startColumn="16" endLine="53" endColumn="30" startOffset="1485" location="C:\Users\rober\Documents\studie\afstuderen\development\simulator_via_code_generator\data\tests\dev_transformed.cif"/>
  </declarations>
  <declarations xmi:type="declarations:Event" xmi:id="109" name="CH0_Expose_0_e" controllable="false">
    <position xmi:type="position:Position" xmi:id="110" source="File &quot;../data/tests\dev_transformed.cif&quot;: " startLine="54" endOffset="1531" startColumn="16" endLine="54" endColumn="29" startOffset="1518" location="C:\Users\rober\Documents\studie\afstuderen\development\simulator_via_code_generator\data\tests\dev_transformed.cif"/>
  </declarations>
  <declarations xmi:type="declarations:Event" xmi:id="111" name="CH1_Measure_0_e" controllable="false">
    <position xmi:type="position:Position" xmi:id="112" source="File &quot;../data/tests\dev_transformed.cif&quot;: " startLine="55" endOffset="1564" startColumn="16" endLine="55" endColumn="30" startOffset="1550" location="C:\Users\rober\Documents\studie\afstuderen\development\simulator_via_code_generator\data\tests\dev_transformed.cif"/>
  </declarations>
  <declarations xmi:type="declarations:Event" xmi:id="113" name="CH1_Expose_0_e" controllable="false">
    <position xmi:type="position:Position" xmi:id="114" source="File &quot;../data/tests\dev_transformed.cif&quot;: " startLine="56" endOffset="1596" startColumn="16" endLine="56" endColumn="29" startOffset="1583" location="C:\Users\rober\Documents\studie\afstuderen\development\simulator_via_code_generator\data\tests\dev_transformed.cif"/>
  </declarations>
  <declarations xmi:type="declarations:Event" xmi:id="115" name="assignCH0_0" controllable="false">
    <position xmi:type="position:Position" xmi:id="116" source="File &quot;../data/tests\dev_transformed.cif&quot;: " startLine="57" endOffset="1625" startColumn="16" endLine="57" endColumn="26" startOffset="1615" location="C:\Users\rober\Documents\studie\afstuderen\development\simulator_via_code_generator\data\tests\dev_transformed.cif"/>
  </declarations>
  <declarations xmi:type="declarations:Event" xmi:id="117" name="assignCH1_0" controllable="false">
    <position xmi:type="position:Position" xmi:id="118" source="File &quot;../data/tests\dev_transformed.cif&quot;: " startLine="58" endOffset="1654" startColumn="16" endLine="58" endColumn="26" startOffset="1644" location="C:\Users\rober\Documents\studie\afstuderen\development\simulator_via_code_generator\data\tests\dev_transformed.cif"/>
  </declarations>
  <declarations xmi:type="declarations:Event" xmi:id="119" name="assignCH0orCH1_0" controllable="false">
    <position xmi:type="position:Position" xmi:id="120" source="File &quot;../data/tests\dev_transformed.cif&quot;: " startLine="59" endOffset="1688" startColumn="16" endLine="59" endColumn="31" startOffset="1673" location="C:\Users\rober\Documents\studie\afstuderen\development\simulator_via_code_generator\data\tests\dev_transformed.cif"/>
  </declarations>
  <declarations xmi:type="declarations:Event" xmi:id="121" name="TRtoSUB_2_s" controllable="true">
    <position xmi:type="position:Position" xmi:id="122" source="File &quot;../data/tests\dev_transformed.cif&quot;: " startLine="60" endOffset="1715" startColumn="14" endLine="60" endColumn="24" startOffset="1705" location="C:\Users\rober\Documents\studie\afstuderen\development\simulator_via_code_generator\data\tests\dev_transformed.cif"/>
  </declarations>
  <declarations xmi:type="declarations:Event" xmi:id="123" name="SUBtoUR_2_s" controllable="true">
    <position xmi:type="position:Position" xmi:id="124" source="File &quot;../data/tests\dev_transformed.cif&quot;: " startLine="61" endOffset="1742" startColumn="14" endLine="61" endColumn="24" startOffset="1732" location="C:\Users\rober\Documents\studie\afstuderen\development\simulator_via_code_generator\data\tests\dev_transformed.cif"/>
  </declarations>
  <declarations xmi:type="declarations:Event" xmi:id="125" name="URtoSUB_2_s" controllable="true">
    <position xmi:type="position:Position" xmi:id="126" source="File &quot;../data/tests\dev_transformed.cif&quot;: " startLine="62" endOffset="1769" startColumn="14" endLine="62" endColumn="24" startOffset="1759" location="C:\Users\rober\Documents\studie\afstuderen\development\simulator_via_code_generator\data\tests\dev_transformed.cif"/>
  </declarations>
  <declarations xmi:type="declarations:Event" xmi:id="127" name="URtoDU_2_s" controllable="true">
    <position xmi:type="position:Position" xmi:id="128" source="File &quot;../data/tests\dev_transformed.cif&quot;: " startLine="63" endOffset="1795" startColumn="14" endLine="63" endColumn="23" startOffset="1786" location="C:\Users\rober\Documents\studie\afstuderen\development\simulator_via_code_generator\data\tests\dev_transformed.cif"/>
  </declarations>
  <declarations xmi:type="declarations:Event" xmi:id="129" name="URtoPA_2_s" controllable="true">
    <position xmi:type="position:Position" xmi:id="130" source="File &quot;../data/tests\dev_transformed.cif&quot;: " startLine="64" endOffset="1821" startColumn="14" endLine="64" endColumn="23" startOffset="1812" location="C:\Users\rober\Documents\studie\afstuderen\development\simulator_via_code_generator\data\tests\dev_transformed.cif"/>
  </declarations>
  <declarations xmi:type="declarations:Event" xmi:id="131" name="URtoCTC1_2_s" controllable="true">
    <position xmi:type="position:Position" xmi:id="132" source="File &quot;../data/tests\dev_transformed.cif&quot;: " startLine="65" endOffset="1849" startColumn="14" endLine="65" endColumn="25" startOffset="1838" location="C:\Users\rober\Documents\studie\afstuderen\development\simulator_via_code_generator\data\tests\dev_transformed.cif"/>
  </declarations>
  <declarations xmi:type="declarations:Event" xmi:id="133" name="PAtoUR_2_s" controllable="true">
    <position xmi:type="position:Position" xmi:id="134" source="File &quot;../data/tests\dev_transformed.cif&quot;: " startLine="66" endOffset="1875" startColumn="14" endLine="66" endColumn="23" startOffset="1866" location="C:\Users\rober\Documents\studie\afstuderen\development\simulator_via_code_generator\data\tests\dev_transformed.cif"/>
  </declarations>
  <declarations xmi:type="declarations:Event" xmi:id="135" name="PAtoLR_2_s" controllable="true">
    <position xmi:type="position:Position" xmi:id="136" source="File &quot;../data/tests\dev_transformed.cif&quot;: " startLine="67" endOffset="1901" startColumn="14" endLine="67" endColumn="23" startOffset="1892" location="C:\Users\rober\Documents\studie\afstuderen\development\simulator_via_code_generator\data\tests\dev_transformed.cif"/>
  </declarations>
  <declarations xmi:type="declarations:Event" xmi:id="137" name="LRtoDU_2_s" controllable="true">
    <position xmi:type="position:Position" xmi:id="138" source="File &quot;../data/tests\dev_transformed.cif&quot;: " startLine="68" endOffset="1927" startColumn="14" endLine="68" endColumn="23" startOffset="1918" location="C:\Users\rober\Documents\studie\afstuderen\development\simulator_via_code_generator\data\tests\dev_transformed.cif"/>
  </declarations>
  <declarations xmi:type="declarations:Event" xmi:id="139" name="LRtoPA_2_s" controllable="true">
    <position xmi:type="position:Position" xmi:id="140" source="File &quot;../data/tests\dev_transformed.cif&quot;: " startLine="69" endOffset="1953" startColumn="14" endLine="69" endColumn="23" startOffset="1944" location="C:\Users\rober\Documents\studie\afstuderen\development\simulator_via_code_generator\data\tests\dev_transformed.cif"/>
  </declarations>
  <declarations xmi:type="declarations:Event" xmi:id="141" name="LRtoCH0_2_s" controllable="true">
    <position xmi:type="position:Position" xmi:id="142" source="File &quot;../data/tests\dev_transformed.cif&quot;: " startLine="70" endOffset="1980" startColumn="14" endLine="70" endColumn="24" startOffset="1970" location="C:\Users\rober\Documents\studie\afstuderen\development\simulator_via_code_generator\data\tests\dev_transformed.cif"/>
  </declarations>
  <declarations xmi:type="declarations:Event" xmi:id="143" name="LRtoCH1_2_s" controllable="true">
    <position xmi:type="position:Position" xmi:id="144" source="File &quot;../data/tests\dev_transformed.cif&quot;: " startLine="71" endOffset="2007" startColumn="14" endLine="71" endColumn="24" startOffset="1997" location="C:\Users\rober\Documents\studie\afstuderen\development\simulator_via_code_generator\data\tests\dev_transformed.cif"/>
  </declarations>
  <declarations xmi:type="declarations:Event" xmi:id="145" name="LRtoCTC0_2_s" controllable="true">
    <position xmi:type="position:Position" xmi:id="146" source="File &quot;../data/tests\dev_transformed.cif&quot;: " startLine="72" endOffset="2035" startColumn="14" endLine="72" endColumn="25" startOffset="2024" location="C:\Users\rober\Documents\studie\afstuderen\development\simulator_via_code_generator\data\tests\dev_transformed.cif"/>
  </declarations>
  <declarations xmi:type="declarations:Event" xmi:id="147" name="DUtoUR_2_s" controllable="true">
    <position xmi:type="position:Position" xmi:id="148" source="File &quot;../data/tests\dev_transformed.cif&quot;: " startLine="73" endOffset="2061" startColumn="14" endLine="73" endColumn="23" startOffset="2052" location="C:\Users\rober\Documents\studie\afstuderen\development\simulator_via_code_generator\data\tests\dev_transformed.cif"/>
  </declarations>
  <declarations xmi:type="declarations:Event" xmi:id="149" name="DUtoLR_2_s" controllable="true">
    <position xmi:type="position:Position" xmi:id="150" source="File &quot;../data/tests\dev_transformed.cif&quot;: " startLine="74" endOffset="2087" startColumn="14" endLine="74" endColumn="23" startOffset="2078" location="C:\Users\rober\Documents\studie\afstuderen\development\simulator_via_code_generator\data\tests\dev_transformed.cif"/>
  </declarations>
  <declarations xmi:type="declarations:Event" xmi:id="151" name="DUtoTR_2_s" controllable="true">
    <position xmi:type="position:Position" xmi:id="152" source="File &quot;../data/tests\dev_transformed.cif&quot;: " startLine="75" endOffset="2113" startColumn="14" endLine="75" endColumn="23" startOffset="2104" location="C:\Users\rober\Documents\studie\afstuderen\development\simulator_via_code_generator\data\tests\dev_transformed.cif"/>
  </declarations>
  <declarations xmi:type="declarations:Event" xmi:id="153" name="CH0toLR_2_s" controllable="true">
    <position xmi:type="position:Position" xmi:id="154" source="File &quot;../data/tests\dev_transformed.cif&quot;: " startLine="76" endOffset="2140" startColumn="14" endLine="76" endColumn="24" startOffset="2130" location="C:\Users\rober\Documents\studie\afstuderen\development\simulator_via_code_generator\data\tests\dev_transformed.cif"/>
  </declarations>
  <declarations xmi:type="declarations:Event" xmi:id="155" name="CH0toUR_2_s" controllable="true">
    <position xmi:type="position:Position" xmi:id="156" source="File &quot;../data/tests\dev_transformed.cif&quot;: " startLine="77" endOffset="2167" startColumn="14" endLine="77" endColumn="24" startOffset="2157" location="C:\Users\rober\Documents\studie\afstuderen\development\simulator_via_code_generator\data\tests\dev_transformed.cif"/>
  </declarations>
  <declarations xmi:type="declarations:Event" xmi:id="157" name="CH1toLR_2_s" controllable="true">
    <position xmi:type="position:Position" xmi:id="158" source="File &quot;../data/tests\dev_transformed.cif&quot;: " startLine="78" endOffset="2194" startColumn="14" endLine="78" endColumn="24" startOffset="2184" location="C:\Users\rober\Documents\studie\afstuderen\development\simulator_via_code_generator\data\tests\dev_transformed.cif"/>
  </declarations>
  <declarations xmi:type="declarations:Event" xmi:id="159" name="CH1toUR_2_s" controllable="true">
    <position xmi:type="position:Position" xmi:id="160" source="File &quot;../data/tests\dev_transformed.cif&quot;: " startLine="79" endOffset="2221" startColumn="14" endLine="79" endColumn="24" startOffset="2211" location="C:\Users\rober\Documents\studie\afstuderen\development\simulator_via_code_generator\data\tests\dev_transformed.cif"/>
  </declarations>
  <declarations xmi:type="declarations:Event" xmi:id="161" name="CTC0toLR_2_s" controllable="true">
    <position xmi:type="position:Position" xmi:id="162" source="File &quot;../data/tests\dev_transformed.cif&quot;: " startLine="80" endOffset="2249" startColumn="14" endLine="80" endColumn="25" startOffset="2238" location="C:\Users\rober\Documents\studie\afstuderen\development\simulator_via_code_generator\data\tests\dev_transformed.cif"/>
  </declarations>
  <declarations xmi:type="declarations:Event" xmi:id="163" name="CTC1toUR_2_s" controllable="true">
    <position xmi:type="position:Position" xmi:id="164" source="File &quot;../data/tests\dev_transformed.cif&quot;: " startLine="81" endOffset="2277" startColumn="14" endLine="81" endColumn="25" startOffset="2266" location="C:\Users\rober\Documents\studie\afstuderen\development\simulator_via_code_generator\data\tests\dev_transformed.cif"/>
  </declarations>
  <declarations xmi:type="declarations:Event" xmi:id="165" name="PA_Align_2_s" controllable="true">
    <position xmi:type="position:Position" xmi:id="166" source="File &quot;../data/tests\dev_transformed.cif&quot;: " startLine="82" endOffset="2305" startColumn="14" endLine="82" endColumn="25" startOffset="2294" location="C:\Users\rober\Documents\studie\afstuderen\development\simulator_via_code_generator\data\tests\dev_transformed.cif"/>
  </declarations>
  <declarations xmi:type="declarations:Event" xmi:id="167" name="TRtoSUB_2_e" controllable="false">
    <position xmi:type="position:Position" xmi:id="168" source="File &quot;../data/tests\dev_transformed.cif&quot;: " startLine="83" endOffset="2334" startColumn="16" endLine="83" endColumn="26" startOffset="2324" location="C:\Users\rober\Documents\studie\afstuderen\development\simulator_via_code_generator\data\tests\dev_transformed.cif"/>
  </declarations>
  <declarations xmi:type="declarations:Event" xmi:id="169" name="SUBtoUR_2_e" controllable="false">
    <position xmi:type="position:Position" xmi:id="170" source="File &quot;../data/tests\dev_transformed.cif&quot;: " startLine="84" endOffset="2363" startColumn="16" endLine="84" endColumn="26" startOffset="2353" location="C:\Users\rober\Documents\studie\afstuderen\development\simulator_via_code_generator\data\tests\dev_transformed.cif"/>
  </declarations>
  <declarations xmi:type="declarations:Event" xmi:id="171" name="URtoSUB_2_e" controllable="false">
    <position xmi:type="position:Position" xmi:id="172" source="File &quot;../data/tests\dev_transformed.cif&quot;: " startLine="85" endOffset="2392" startColumn="16" endLine="85" endColumn="26" startOffset="2382" location="C:\Users\rober\Documents\studie\afstuderen\development\simulator_via_code_generator\data\tests\dev_transformed.cif"/>
  </declarations>
  <declarations xmi:type="declarations:Event" xmi:id="173" name="URtoDU_2_e" controllable="false">
    <position xmi:type="position:Position" xmi:id="174" source="File &quot;../data/tests\dev_transformed.cif&quot;: " startLine="86" endOffset="2420" startColumn="16" endLine="86" endColumn="25" startOffset="2411" location="C:\Users\rober\Documents\studie\afstuderen\development\simulator_via_code_generator\data\tests\dev_transformed.cif"/>
  </declarations>
  <declarations xmi:type="declarations:Event" xmi:id="175" name="URtoPA_2_e" controllable="false">
    <position xmi:type="position:Position" xmi:id="176" source="File &quot;../data/tests\dev_transformed.cif&quot;: " startLine="87" endOffset="2448" startColumn="16" endLine="87" endColumn="25" startOffset="2439" location="C:\Users\rober\Documents\studie\afstuderen\development\simulator_via_code_generator\data\tests\dev_transformed.cif"/>
  </declarations>
  <declarations xmi:type="declarations:Event" xmi:id="177" name="URtoCTC1_2_e" controllable="false">
    <position xmi:type="position:Position" xmi:id="178" source="File &quot;../data/tests\dev_transformed.cif&quot;: " startLine="88" endOffset="2478" startColumn="16" endLine="88" endColumn="27" startOffset="2467" location="C:\Users\rober\Documents\studie\afstuderen\development\simulator_via_code_generator\data\tests\dev_transformed.cif"/>
  </declarations>
  <declarations xmi:type="declarations:Event" xmi:id="179" name="PAtoUR_2_e" controllable="false">
    <position xmi:type="position:Position" xmi:id="180" source="File &quot;../data/tests\dev_transformed.cif&quot;: " startLine="89" endOffset="2506" startColumn="16" endLine="89" endColumn="25" startOffset="2497" location="C:\Users\rober\Documents\studie\afstuderen\development\simulator_via_code_generator\data\tests\dev_transformed.cif"/>
  </declarations>
  <declarations xmi:type="declarations:Event" xmi:id="181" name="PAtoLR_2_e" controllable="false">
    <position xmi:type="position:Position" xmi:id="182" source="File &quot;../data/tests\dev_transformed.cif&quot;: " startLine="90" endOffset="2534" startColumn="16" endLine="90" endColumn="25" startOffset="2525" location="C:\Users\rober\Documents\studie\afstuderen\development\simulator_via_code_generator\data\tests\dev_transformed.cif"/>
  </declarations>
  <declarations xmi:type="declarations:Event" xmi:id="183" name="LRtoDU_2_e" controllable="false">
    <position xmi:type="position:Position" xmi:id="184" source="File &quot;../data/tests\dev_transformed.cif&quot;: " startLine="91" endOffset="2562" startColumn="16" endLine="91" endColumn="25" startOffset="2553" location="C:\Users\rober\Documents\studie\afstuderen\development\simulator_via_code_generator\data\tests\dev_transformed.cif"/>
  </declarations>
  <declarations xmi:type="declarations:Event" xmi:id="185" name="LRtoPA_2_e" controllable="false">
    <position xmi:type="position:Position" xmi:id="186" source="File &quot;../data/tests\dev_transformed.cif&quot;: " startLine="92" endOffset="2590" startColumn="16" endLine="92" endColumn="25" startOffset="2581" location="C:\Users\rober\Documents\studie\afstuderen\development\simulator_via_code_generator\data\tests\dev_transformed.cif"/>
  </declarations>
  <declarations xmi:type="declarations:Event" xmi:id="187" name="LRtoCH0_2_e" controllable="false">
    <position xmi:type="position:Position" xmi:id="188" source="File &quot;../data/tests\dev_transformed.cif&quot;: " startLine="93" endOffset="2619" startColumn="16" endLine="93" endColumn="26" startOffset="2609" location="C:\Users\rober\Documents\studie\afstuderen\development\simulator_via_code_generator\data\tests\dev_transformed.cif"/>
  </declarations>
  <declarations xmi:type="declarations:Event" xmi:id="189" name="LRtoCH1_2_e" controllable="false">
    <position xmi:type="position:Position" xmi:id="190" source="File &quot;../data/tests\dev_transformed.cif&quot;: " startLine="94" endOffset="2648" startColumn="16" endLine="94" endColumn="26" startOffset="2638" location="C:\Users\rober\Documents\studie\afstuderen\development\simulator_via_code_generator\data\tests\dev_transformed.cif"/>
  </declarations>
  <declarations xmi:type="declarations:Event" xmi:id="191" name="LRtoCTC0_2_e" controllable="false">
    <position xmi:type="position:Position" xmi:id="192" source="File &quot;../data/tests\dev_transformed.cif&quot;: " startLine="95" endOffset="2678" startColumn="16" endLine="95" endColumn="27" startOffset="2667" location="C:\Users\rober\Documents\studie\afstuderen\development\simulator_via_code_generator\data\tests\dev_transformed.cif"/>
  </declarations>
  <declarations xmi:type="declarations:Event" xmi:id="193" name="DUtoUR_2_e" controllable="false">
    <position xmi:type="position:Position" xmi:id="194" source="File &quot;../data/tests\dev_transformed.cif&quot;: " startLine="96" endOffset="2706" startColumn="16" endLine="96" endColumn="25" startOffset="2697" location="C:\Users\rober\Documents\studie\afstuderen\development\simulator_via_code_generator\data\tests\dev_transformed.cif"/>
  </declarations>
  <declarations xmi:type="declarations:Event" xmi:id="195" name="DUtoLR_2_e" controllable="false">
    <position xmi:type="position:Position" xmi:id="196" source="File &quot;../data/tests\dev_transformed.cif&quot;: " startLine="97" endOffset="2734" startColumn="16" endLine="97" endColumn="25" startOffset="2725" location="C:\Users\rober\Documents\studie\afstuderen\development\simulator_via_code_generator\data\tests\dev_transformed.cif"/>
  </declarations>
  <declarations xmi:type="declarations:Event" xmi:id="197" name="DUtoTR_2_e" controllable="false">
    <position xmi:type="position:Position" xmi:id="198" source="File &quot;../data/tests\dev_transformed.cif&quot;: " startLine="98" endOffset="2762" startColumn="16" endLine="98" endColumn="25" startOffset="2753" location="C:\Users\rober\Documents\studie\afstuderen\development\simulator_via_code_generator\data\tests\dev_transformed.cif"/>
  </declarations>
  <declarations xmi:type="declarations:Event" xmi:id="199" name="CH0toLR_2_e" controllable="false">
    <position xmi:type="position:Position" xmi:id="200" source="File &quot;../data/tests\dev_transformed.cif&quot;: " startLine="99" endOffset="2791" startColumn="16" endLine="99" endColumn="26" startOffset="2781" location="C:\Users\rober\Documents\studie\afstuderen\development\simulator_via_code_generator\data\tests\dev_transformed.cif"/>
  </declarations>
  <declarations xmi:type="declarations:Event" xmi:id="201" name="CH0toUR_2_e" controllable="false">
    <position xmi:type="position:Position" xmi:id="202" source="File &quot;../data/tests\dev_transformed.cif&quot;: " startLine="100" endOffset="2820" startColumn="16" endLine="100" endColumn="26" startOffset="2810" location="C:\Users\rober\Documents\studie\afstuderen\development\simulator_via_code_generator\data\tests\dev_transformed.cif"/>
  </declarations>
  <declarations xmi:type="declarations:Event" xmi:id="203" name="CH1toLR_2_e" controllable="false">
    <position xmi:type="position:Position" xmi:id="204" source="File &quot;../data/tests\dev_transformed.cif&quot;: " startLine="101" endOffset="2849" startColumn="16" endLine="101" endColumn="26" startOffset="2839" location="C:\Users\rober\Documents\studie\afstuderen\development\simulator_via_code_generator\data\tests\dev_transformed.cif"/>
  </declarations>
  <declarations xmi:type="declarations:Event" xmi:id="205" name="CH1toUR_2_e" controllable="false">
    <position xmi:type="position:Position" xmi:id="206" source="File &quot;../data/tests\dev_transformed.cif&quot;: " startLine="102" endOffset="2878" startColumn="16" endLine="102" endColumn="26" startOffset="2868" location="C:\Users\rober\Documents\studie\afstuderen\development\simulator_via_code_generator\data\tests\dev_transformed.cif"/>
  </declarations>
  <declarations xmi:type="declarations:Event" xmi:id="207" name="CTC0toLR_2_e" controllable="false">
    <position xmi:type="position:Position" xmi:id="208" source="File &quot;../data/tests\dev_transformed.cif&quot;: " startLine="103" endOffset="2908" startColumn="16" endLine="103" endColumn="27" startOffset="2897" location="C:\Users\rober\Documents\studie\afstuderen\development\simulator_via_code_generator\data\tests\dev_transformed.cif"/>
  </declarations>
  <declarations xmi:type="declarations:Event" xmi:id="209" name="CTC1toUR_2_e" controllable="false">
    <position xmi:type="position:Position" xmi:id="210" source="File &quot;../data/tests\dev_transformed.cif&quot;: " startLine="104" endOffset="2938" startColumn="16" endLine="104" endColumn="27" startOffset="2927" location="C:\Users\rober\Documents\studie\afstuderen\development\simulator_via_code_generator\data\tests\dev_transformed.cif"/>
  </declarations>
  <declarations xmi:type="declarations:Event" xmi:id="211" name="PA_Align_2_e" controllable="false">
    <position xmi:type="position:Position" xmi:id="212" source="File &quot;../data/tests\dev_transformed.cif&quot;: " startLine="105" endOffset="2968" startColumn="16" endLine="105" endColumn="27" startOffset="2957" location="C:\Users\rober\Documents\studie\afstuderen\development\simulator_via_code_generator\data\tests\dev_transformed.cif"/>
  </declarations>
  <declarations xmi:type="declarations:Event" xmi:id="213" name="TRtoSUB_1_s" controllable="true">
    <position xmi:type="position:Position" xmi:id="214" source="File &quot;../data/tests\dev_transformed.cif&quot;: " startLine="106" endOffset="2995" startColumn="14" endLine="106" endColumn="24" startOffset="2985" location="C:\Users\rober\Documents\studie\afstuderen\development\simulator_via_code_generator\data\tests\dev_transformed.cif"/>
  </declarations>
  <declarations xmi:type="declarations:Event" xmi:id="215" name="SUBtoUR_1_s" controllable="true">
    <position xmi:type="position:Position" xmi:id="216" source="File &quot;../data/tests\dev_transformed.cif&quot;: " startLine="107" endOffset="3022" startColumn="14" endLine="107" endColumn="24" startOffset="3012" location="C:\Users\rober\Documents\studie\afstuderen\development\simulator_via_code_generator\data\tests\dev_transformed.cif"/>
  </declarations>
  <declarations xmi:type="declarations:Event" xmi:id="217" name="URtoSUB_1_s" controllable="true">
    <position xmi:type="position:Position" xmi:id="218" source="File &quot;../data/tests\dev_transformed.cif&quot;: " startLine="108" endOffset="3049" startColumn="14" endLine="108" endColumn="24" startOffset="3039" location="C:\Users\rober\Documents\studie\afstuderen\development\simulator_via_code_generator\data\tests\dev_transformed.cif"/>
  </declarations>
  <declarations xmi:type="declarations:Event" xmi:id="219" name="URtoDU_1_s" controllable="true">
    <position xmi:type="position:Position" xmi:id="220" source="File &quot;../data/tests\dev_transformed.cif&quot;: " startLine="109" endOffset="3075" startColumn="14" endLine="109" endColumn="23" startOffset="3066" location="C:\Users\rober\Documents\studie\afstuderen\development\simulator_via_code_generator\data\tests\dev_transformed.cif"/>
  </declarations>
  <declarations xmi:type="declarations:Event" xmi:id="221" name="URtoPA_1_s" controllable="true">
    <position xmi:type="position:Position" xmi:id="222" source="File &quot;../data/tests\dev_transformed.cif&quot;: " startLine="110" endOffset="3101" startColumn="14" endLine="110" endColumn="23" startOffset="3092" location="C:\Users\rober\Documents\studie\afstuderen\development\simulator_via_code_generator\data\tests\dev_transformed.cif"/>
  </declarations>
  <declarations xmi:type="declarations:Event" xmi:id="223" name="URtoCTC1_1_s" controllable="true">
    <position xmi:type="position:Position" xmi:id="224" source="File &quot;../data/tests\dev_transformed.cif&quot;: " startLine="111" endOffset="3129" startColumn="14" endLine="111" endColumn="25" startOffset="3118" location="C:\Users\rober\Documents\studie\afstuderen\development\simulator_via_code_generator\data\tests\dev_transformed.cif"/>
  </declarations>
  <declarations xmi:type="declarations:Event" xmi:id="225" name="PAtoUR_1_s" controllable="true">
    <position xmi:type="position:Position" xmi:id="226" source="File &quot;../data/tests\dev_transformed.cif&quot;: " startLine="112" endOffset="3155" startColumn="14" endLine="112" endColumn="23" startOffset="3146" location="C:\Users\rober\Documents\studie\afstuderen\development\simulator_via_code_generator\data\tests\dev_transformed.cif"/>
  </declarations>
  <declarations xmi:type="declarations:Event" xmi:id="227" name="PAtoLR_1_s" controllable="true">
    <position xmi:type="position:Position" xmi:id="228" source="File &quot;../data/tests\dev_transformed.cif&quot;: " startLine="113" endOffset="3181" startColumn="14" endLine="113" endColumn="23" startOffset="3172" location="C:\Users\rober\Documents\studie\afstuderen\development\simulator_via_code_generator\data\tests\dev_transformed.cif"/>
  </declarations>
  <declarations xmi:type="declarations:Event" xmi:id="229" name="LRtoDU_1_s" controllable="true">
    <position xmi:type="position:Position" xmi:id="230" source="File &quot;../data/tests\dev_transformed.cif&quot;: " startLine="114" endOffset="3207" startColumn="14" endLine="114" endColumn="23" startOffset="3198" location="C:\Users\rober\Documents\studie\afstuderen\development\simulator_via_code_generator\data\tests\dev_transformed.cif"/>
  </declarations>
  <declarations xmi:type="declarations:Event" xmi:id="231" name="LRtoPA_1_s" controllable="true">
    <position xmi:type="position:Position" xmi:id="232" source="File &quot;../data/tests\dev_transformed.cif&quot;: " startLine="115" endOffset="3233" startColumn="14" endLine="115" endColumn="23" startOffset="3224" location="C:\Users\rober\Documents\studie\afstuderen\development\simulator_via_code_generator\data\tests\dev_transformed.cif"/>
  </declarations>
  <declarations xmi:type="declarations:Event" xmi:id="233" name="LRtoCH0_1_s" controllable="true">
    <position xmi:type="position:Position" xmi:id="234" source="File &quot;../data/tests\dev_transformed.cif&quot;: " startLine="116" endOffset="3260" startColumn="14" endLine="116" endColumn="24" startOffset="3250" location="C:\Users\rober\Documents\studie\afstuderen\development\simulator_via_code_generator\data\tests\dev_transformed.cif"/>
  </declarations>
  <declarations xmi:type="declarations:Event" xmi:id="235" name="LRtoCH1_1_s" controllable="true">
    <position xmi:type="position:Position" xmi:id="236" source="File &quot;../data/tests\dev_transformed.cif&quot;: " startLine="117" endOffset="3287" startColumn="14" endLine="117" endColumn="24" startOffset="3277" location="C:\Users\rober\Documents\studie\afstuderen\development\simulator_via_code_generator\data\tests\dev_transformed.cif"/>
  </declarations>
  <declarations xmi:type="declarations:Event" xmi:id="237" name="LRtoCTC0_1_s" controllable="true">
    <position xmi:type="position:Position" xmi:id="238" source="File &quot;../data/tests\dev_transformed.cif&quot;: " startLine="118" endOffset="3315" startColumn="14" endLine="118" endColumn="25" startOffset="3304" location="C:\Users\rober\Documents\studie\afstuderen\development\simulator_via_code_generator\data\tests\dev_transformed.cif"/>
  </declarations>
  <declarations xmi:type="declarations:Event" xmi:id="239" name="DUtoUR_1_s" controllable="true">
    <position xmi:type="position:Position" xmi:id="240" source="File &quot;../data/tests\dev_transformed.cif&quot;: " startLine="119" endOffset="3341" startColumn="14" endLine="119" endColumn="23" startOffset="3332" location="C:\Users\rober\Documents\studie\afstuderen\development\simulator_via_code_generator\data\tests\dev_transformed.cif"/>
  </declarations>
  <declarations xmi:type="declarations:Event" xmi:id="241" name="DUtoLR_1_s" controllable="true">
    <position xmi:type="position:Position" xmi:id="242" source="File &quot;../data/tests\dev_transformed.cif&quot;: " startLine="120" endOffset="3367" startColumn="14" endLine="120" endColumn="23" startOffset="3358" location="C:\Users\rober\Documents\studie\afstuderen\development\simulator_via_code_generator\data\tests\dev_transformed.cif"/>
  </declarations>
  <declarations xmi:type="declarations:Event" xmi:id="243" name="DUtoTR_1_s" controllable="true">
    <position xmi:type="position:Position" xmi:id="244" source="File &quot;../data/tests\dev_transformed.cif&quot;: " startLine="121" endOffset="3393" startColumn="14" endLine="121" endColumn="23" startOffset="3384" location="C:\Users\rober\Documents\studie\afstuderen\development\simulator_via_code_generator\data\tests\dev_transformed.cif"/>
  </declarations>
  <declarations xmi:type="declarations:Event" xmi:id="245" name="CH0toLR_1_s" controllable="true">
    <position xmi:type="position:Position" xmi:id="246" source="File &quot;../data/tests\dev_transformed.cif&quot;: " startLine="122" endOffset="3420" startColumn="14" endLine="122" endColumn="24" startOffset="3410" location="C:\Users\rober\Documents\studie\afstuderen\development\simulator_via_code_generator\data\tests\dev_transformed.cif"/>
  </declarations>
  <declarations xmi:type="declarations:Event" xmi:id="247" name="CH0toUR_1_s" controllable="true">
    <position xmi:type="position:Position" xmi:id="248" source="File &quot;../data/tests\dev_transformed.cif&quot;: " startLine="123" endOffset="3447" startColumn="14" endLine="123" endColumn="24" startOffset="3437" location="C:\Users\rober\Documents\studie\afstuderen\development\simulator_via_code_generator\data\tests\dev_transformed.cif"/>
  </declarations>
  <declarations xmi:type="declarations:Event" xmi:id="249" name="CH1toLR_1_s" controllable="true">
    <position xmi:type="position:Position" xmi:id="250" source="File &quot;../data/tests\dev_transformed.cif&quot;: " startLine="124" endOffset="3474" startColumn="14" endLine="124" endColumn="24" startOffset="3464" location="C:\Users\rober\Documents\studie\afstuderen\development\simulator_via_code_generator\data\tests\dev_transformed.cif"/>
  </declarations>
  <declarations xmi:type="declarations:Event" xmi:id="251" name="CH1toUR_1_s" controllable="true">
    <position xmi:type="position:Position" xmi:id="252" source="File &quot;../data/tests\dev_transformed.cif&quot;: " startLine="125" endOffset="3501" startColumn="14" endLine="125" endColumn="24" startOffset="3491" location="C:\Users\rober\Documents\studie\afstuderen\development\simulator_via_code_generator\data\tests\dev_transformed.cif"/>
  </declarations>
  <declarations xmi:type="declarations:Event" xmi:id="253" name="CTC0toLR_1_s" controllable="true">
    <position xmi:type="position:Position" xmi:id="254" source="File &quot;../data/tests\dev_transformed.cif&quot;: " startLine="126" endOffset="3529" startColumn="14" endLine="126" endColumn="25" startOffset="3518" location="C:\Users\rober\Documents\studie\afstuderen\development\simulator_via_code_generator\data\tests\dev_transformed.cif"/>
  </declarations>
  <declarations xmi:type="declarations:Event" xmi:id="255" name="CTC1toUR_1_s" controllable="true">
    <position xmi:type="position:Position" xmi:id="256" source="File &quot;../data/tests\dev_transformed.cif&quot;: " startLine="127" endOffset="3557" startColumn="14" endLine="127" endColumn="25" startOffset="3546" location="C:\Users\rober\Documents\studie\afstuderen\development\simulator_via_code_generator\data\tests\dev_transformed.cif"/>
  </declarations>
  <declarations xmi:type="declarations:Event" xmi:id="257" name="PA_Align_1_s" controllable="true">
    <position xmi:type="position:Position" xmi:id="258" source="File &quot;../data/tests\dev_transformed.cif&quot;: " startLine="128" endOffset="3585" startColumn="14" endLine="128" endColumn="25" startOffset="3574" location="C:\Users\rober\Documents\studie\afstuderen\development\simulator_via_code_generator\data\tests\dev_transformed.cif"/>
  </declarations>
  <declarations xmi:type="declarations:Event" xmi:id="259" name="TRtoSUB_1_e" controllable="false">
    <position xmi:type="position:Position" xmi:id="260" source="File &quot;../data/tests\dev_transformed.cif&quot;: " startLine="129" endOffset="3614" startColumn="16" endLine="129" endColumn="26" startOffset="3604" location="C:\Users\rober\Documents\studie\afstuderen\development\simulator_via_code_generator\data\tests\dev_transformed.cif"/>
  </declarations>
  <declarations xmi:type="declarations:Event" xmi:id="261" name="SUBtoUR_1_e" controllable="false">
    <position xmi:type="position:Position" xmi:id="262" source="File &quot;../data/tests\dev_transformed.cif&quot;: " startLine="130" endOffset="3643" startColumn="16" endLine="130" endColumn="26" startOffset="3633" location="C:\Users\rober\Documents\studie\afstuderen\development\simulator_via_code_generator\data\tests\dev_transformed.cif"/>
  </declarations>
  <declarations xmi:type="declarations:Event" xmi:id="263" name="URtoSUB_1_e" controllable="false">
    <position xmi:type="position:Position" xmi:id="264" source="File &quot;../data/tests\dev_transformed.cif&quot;: " startLine="131" endOffset="3672" startColumn="16" endLine="131" endColumn="26" startOffset="3662" location="C:\Users\rober\Documents\studie\afstuderen\development\simulator_via_code_generator\data\tests\dev_transformed.cif"/>
  </declarations>
  <declarations xmi:type="declarations:Event" xmi:id="265" name="URtoDU_1_e" controllable="false">
    <position xmi:type="position:Position" xmi:id="266" source="File &quot;../data/tests\dev_transformed.cif&quot;: " startLine="132" endOffset="3700" startColumn="16" endLine="132" endColumn="25" startOffset="3691" location="C:\Users\rober\Documents\studie\afstuderen\development\simulator_via_code_generator\data\tests\dev_transformed.cif"/>
  </declarations>
  <declarations xmi:type="declarations:Event" xmi:id="267" name="URtoPA_1_e" controllable="false">
    <position xmi:type="position:Position" xmi:id="268" source="File &quot;../data/tests\dev_transformed.cif&quot;: " startLine="133" endOffset="3728" startColumn="16" endLine="133" endColumn="25" startOffset="3719" location="C:\Users\rober\Documents\studie\afstuderen\development\simulator_via_code_generator\data\tests\dev_transformed.cif"/>
  </declarations>
  <declarations xmi:type="declarations:Event" xmi:id="269" name="URtoCTC1_1_e" controllable="false">
    <position xmi:type="position:Position" xmi:id="270" source="File &quot;../data/tests\dev_transformed.cif&quot;: " startLine="134" endOffset="3758" startColumn="16" endLine="134" endColumn="27" startOffset="3747" location="C:\Users\rober\Documents\studie\afstuderen\development\simulator_via_code_generator\data\tests\dev_transformed.cif"/>
  </declarations>
  <declarations xmi:type="declarations:Event" xmi:id="271" name="PAtoUR_1_e" controllable="false">
    <position xmi:type="position:Position" xmi:id="272" source="File &quot;../data/tests\dev_transformed.cif&quot;: " startLine="135" endOffset="3786" startColumn="16" endLine="135" endColumn="25" startOffset="3777" location="C:\Users\rober\Documents\studie\afstuderen\development\simulator_via_code_generator\data\tests\dev_transformed.cif"/>
  </declarations>
  <declarations xmi:type="declarations:Event" xmi:id="273" name="PAtoLR_1_e" controllable="false">
    <position xmi:type="position:Position" xmi:id="274" source="File &quot;../data/tests\dev_transformed.cif&quot;: " startLine="136" endOffset="3814" startColumn="16" endLine="136" endColumn="25" startOffset="3805" location="C:\Users\rober\Documents\studie\afstuderen\development\simulator_via_code_generator\data\tests\dev_transformed.cif"/>
  </declarations>
  <declarations xmi:type="declarations:Event" xmi:id="275" name="LRtoDU_1_e" controllable="false">
    <position xmi:type="position:Position" xmi:id="276" source="File &quot;../data/tests\dev_transformed.cif&quot;: " startLine="137" endOffset="3842" startColumn="16" endLine="137" endColumn="25" startOffset="3833" location="C:\Users\rober\Documents\studie\afstuderen\development\simulator_via_code_generator\data\tests\dev_transformed.cif"/>
  </declarations>
  <declarations xmi:type="declarations:Event" xmi:id="277" name="LRtoPA_1_e" controllable="false">
    <position xmi:type="position:Position" xmi:id="278" source="File &quot;../data/tests\dev_transformed.cif&quot;: " startLine="138" endOffset="3870" startColumn="16" endLine="138" endColumn="25" startOffset="3861" location="C:\Users\rober\Documents\studie\afstuderen\development\simulator_via_code_generator\data\tests\dev_transformed.cif"/>
  </declarations>
  <declarations xmi:type="declarations:Event" xmi:id="279" name="LRtoCH0_1_e" controllable="false">
    <position xmi:type="position:Position" xmi:id="280" source="File &quot;../data/tests\dev_transformed.cif&quot;: " startLine="139" endOffset="3899" startColumn="16" endLine="139" endColumn="26" startOffset="3889" location="C:\Users\rober\Documents\studie\afstuderen\development\simulator_via_code_generator\data\tests\dev_transformed.cif"/>
  </declarations>
  <declarations xmi:type="declarations:Event" xmi:id="281" name="LRtoCH1_1_e" controllable="false">
    <position xmi:type="position:Position" xmi:id="282" source="File &quot;../data/tests\dev_transformed.cif&quot;: " startLine="140" endOffset="3928" startColumn="16" endLine="140" endColumn="26" startOffset="3918" location="C:\Users\rober\Documents\studie\afstuderen\development\simulator_via_code_generator\data\tests\dev_transformed.cif"/>
  </declarations>
  <declarations xmi:type="declarations:Event" xmi:id="283" name="LRtoCTC0_1_e" controllable="false">
    <position xmi:type="position:Position" xmi:id="284" source="File &quot;../data/tests\dev_transformed.cif&quot;: " startLine="141" endOffset="3958" startColumn="16" endLine="141" endColumn="27" startOffset="3947" location="C:\Users\rober\Documents\studie\afstuderen\development\simulator_via_code_generator\data\tests\dev_transformed.cif"/>
  </declarations>
  <declarations xmi:type="declarations:Event" xmi:id="285" name="DUtoUR_1_e" controllable="false">
    <position xmi:type="position:Position" xmi:id="286" source="File &quot;../data/tests\dev_transformed.cif&quot;: " startLine="142" endOffset="3986" startColumn="16" endLine="142" endColumn="25" startOffset="3977" location="C:\Users\rober\Documents\studie\afstuderen\development\simulator_via_code_generator\data\tests\dev_transformed.cif"/>
  </declarations>
  <declarations xmi:type="declarations:Event" xmi:id="287" name="DUtoLR_1_e" controllable="false">
    <position xmi:type="position:Position" xmi:id="288" source="File &quot;../data/tests\dev_transformed.cif&quot;: " startLine="143" endOffset="4014" startColumn="16" endLine="143" endColumn="25" startOffset="4005" location="C:\Users\rober\Documents\studie\afstuderen\development\simulator_via_code_generator\data\tests\dev_transformed.cif"/>
  </declarations>
  <declarations xmi:type="declarations:Event" xmi:id="289" name="DUtoTR_1_e" controllable="false">
    <position xmi:type="position:Position" xmi:id="290" source="File &quot;../data/tests\dev_transformed.cif&quot;: " startLine="144" endOffset="4042" startColumn="16" endLine="144" endColumn="25" startOffset="4033" location="C:\Users\rober\Documents\studie\afstuderen\development\simulator_via_code_generator\data\tests\dev_transformed.cif"/>
  </declarations>
  <declarations xmi:type="declarations:Event" xmi:id="291" name="CH0toLR_1_e" controllable="false">
    <position xmi:type="position:Position" xmi:id="292" source="File &quot;../data/tests\dev_transformed.cif&quot;: " startLine="145" endOffset="4071" startColumn="16" endLine="145" endColumn="26" startOffset="4061" location="C:\Users\rober\Documents\studie\afstuderen\development\simulator_via_code_generator\data\tests\dev_transformed.cif"/>
  </declarations>
  <declarations xmi:type="declarations:Event" xmi:id="293" name="CH0toUR_1_e" controllable="false">
    <position xmi:type="position:Position" xmi:id="294" source="File &quot;../data/tests\dev_transformed.cif&quot;: " startLine="146" endOffset="4100" startColumn="16" endLine="146" endColumn="26" startOffset="4090" location="C:\Users\rober\Documents\studie\afstuderen\development\simulator_via_code_generator\data\tests\dev_transformed.cif"/>
  </declarations>
  <declarations xmi:type="declarations:Event" xmi:id="295" name="CH1toLR_1_e" controllable="false">
    <position xmi:type="position:Position" xmi:id="296" source="File &quot;../data/tests\dev_transformed.cif&quot;: " startLine="147" endOffset="4129" startColumn="16" endLine="147" endColumn="26" startOffset="4119" location="C:\Users\rober\Documents\studie\afstuderen\development\simulator_via_code_generator\data\tests\dev_transformed.cif"/>
  </declarations>
  <declarations xmi:type="declarations:Event" xmi:id="297" name="CH1toUR_1_e" controllable="false">
    <position xmi:type="position:Position" xmi:id="298" source="File &quot;../data/tests\dev_transformed.cif&quot;: " startLine="148" endOffset="4158" startColumn="16" endLine="148" endColumn="26" startOffset="4148" location="C:\Users\rober\Documents\studie\afstuderen\development\simulator_via_code_generator\data\tests\dev_transformed.cif"/>
  </declarations>
  <declarations xmi:type="declarations:Event" xmi:id="299" name="CTC0toLR_1_e" controllable="false">
    <position xmi:type="position:Position" xmi:id="300" source="File &quot;../data/tests\dev_transformed.cif&quot;: " startLine="149" endOffset="4188" startColumn="16" endLine="149" endColumn="27" startOffset="4177" location="C:\Users\rober\Documents\studie\afstuderen\development\simulator_via_code_generator\data\tests\dev_transformed.cif"/>
  </declarations>
  <declarations xmi:type="declarations:Event" xmi:id="301" name="CTC1toUR_1_e" controllable="false">
    <position xmi:type="position:Position" xmi:id="302" source="File &quot;../data/tests\dev_transformed.cif&quot;: " startLine="150" endOffset="4218" startColumn="16" endLine="150" endColumn="27" startOffset="4207" location="C:\Users\rober\Documents\studie\afstuderen\development\simulator_via_code_generator\data\tests\dev_transformed.cif"/>
  </declarations>
  <declarations xmi:type="declarations:Event" xmi:id="303" name="PA_Align_1_e" controllable="false">
    <position xmi:type="position:Position" xmi:id="304" source="File &quot;../data/tests\dev_transformed.cif&quot;: " startLine="151" endOffset="4248" startColumn="16" endLine="151" endColumn="27" startOffset="4237" location="C:\Users\rober\Documents\studie\afstuderen\development\simulator_via_code_generator\data\tests\dev_transformed.cif"/>
  </declarations>
  <components xmi:type="automata:Automaton" xmi:id="305" name="swalmen" kind="Plant">
    <position xmi:type="position:Position" xmi:id="306" source="File &quot;../data/tests\dev_transformed.cif&quot;: " startLine="152" endOffset="4274" startColumn="17" endLine="152" endColumn="23" startOffset="4268" location="C:\Users\rober\Documents\studie\afstuderen\development\simulator_via_code_generator\data\tests\dev_transformed.cif"/>
    <declarations xmi:type="declarations:Event" xmi:id="307" name="c_0" controllable="true">
      <position xmi:type="position:Position" xmi:id="308" source="File &quot;../data/tests\dev_transformed.cif&quot;: " startLine="153" endOffset="4295" startColumn="16" endLine="153" endColumn="18" startOffset="4293" location="C:\Users\rober\Documents\studie\afstuderen\development\simulator_via_code_generator\data\tests\dev_transformed.cif"/>
    </declarations>
    <declarations xmi:type="declarations:Event" xmi:id="309" name="c_1" controllable="true">
      <position xmi:type="position:Position" xmi:id="310" source="File &quot;../data/tests\dev_transformed.cif&quot;: " startLine="154" endOffset="4316" startColumn="16" endLine="154" endColumn="18" startOffset="4314" location="C:\Users\rober\Documents\studie\afstuderen\development\simulator_via_code_generator\data\tests\dev_transformed.cif"/>
    </declarations>
    <declarations xmi:type="declarations:Event" xmi:id="311" name="c_2" controllable="true">
      <position xmi:type="position:Position" xmi:id="312" source="File &quot;../data/tests\dev_transformed.cif&quot;: " startLine="155" endOffset="4337" startColumn="16" endLine="155" endColumn="18" startOffset="4335" location="C:\Users\rober\Documents\studie\afstuderen\development\simulator_via_code_generator\data\tests\dev_transformed.cif"/>
    </declarations>
    <declarations xmi:type="declarations:Event" xmi:id="313" name="c_3" controllable="true">
      <position xmi:type="position:Position" xmi:id="314" source="File &quot;../data/tests\dev_transformed.cif&quot;: " startLine="156" endOffset="4358" startColumn="16" endLine="156" endColumn="18" startOffset="4356" location="C:\Users\rober\Documents\studie\afstuderen\development\simulator_via_code_generator\data\tests\dev_transformed.cif"/>
    </declarations>
    <declarations xmi:type="declarations:Event" xmi:id="315" name="c_4" controllable="true">
      <position xmi:type="position:Position" xmi:id="316" source="File &quot;../data/tests\dev_transformed.cif&quot;: " startLine="157" endOffset="4379" startColumn="16" endLine="157" endColumn="18" startOffset="4377" location="C:\Users\rober\Documents\studie\afstuderen\development\simulator_via_code_generator\data\tests\dev_transformed.cif"/>
    </declarations>
    <declarations xmi:type="declarations:Event" xmi:id="317" name="c_5" controllable="true">
      <position xmi:type="position:Position" xmi:id="318" source="File &quot;../data/tests\dev_transformed.cif&quot;: " startLine="158" endOffset="4400" startColumn="16" endLine="158" endColumn="18" startOffset="4398" location="C:\Users\rober\Documents\studie\afstuderen\development\simulator_via_code_generator\data\tests\dev_transformed.cif"/>
    </declarations>
    <declarations xmi:type="declarations:Event" xmi:id="319" name="c_6" controllable="true">
      <position xmi:type="position:Position" xmi:id="320" source="File &quot;../data/tests\dev_transformed.cif&quot;: " startLine="159" endOffset="4421" startColumn="16" endLine="159" endColumn="18" startOffset="4419" location="C:\Users\rober\Documents\studie\afstuderen\development\simulator_via_code_generator\data\tests\dev_transformed.cif"/>
    </declarations>
    <declarations xmi:type="declarations:Event" xmi:id="321" name="c_7" controllable="true">
      <position xmi:type="position:Position" xmi:id="322" source="File &quot;../data/tests\dev_transformed.cif&quot;: " startLine="160" endOffset="4442" startColumn="16" endLine="160" endColumn="18" startOffset="4440" location="C:\Users\rober\Documents\studie\afstuderen\development\simulator_via_code_generator\data\tests\dev_transformed.cif"/>
    </declarations>
    <declarations xmi:type="declarations:Event" xmi:id="323" name="c_8" controllable="true">
      <position xmi:type="position:Position" xmi:id="324" source="File &quot;../data/tests\dev_transformed.cif&quot;: " startLine="161" endOffset="4463" startColumn="16" endLine="161" endColumn="18" startOffset="4461" location="C:\Users\rober\Documents\studie\afstuderen\development\simulator_via_code_generator\data\tests\dev_transformed.cif"/>
    </declarations>
    <locations xmi:type="automata:Location" xmi:id="325" name="s0">
      <position xmi:type="position:Position" xmi:id="326" source="File &quot;../data/tests\dev_transformed.cif&quot;: " startLine="162" endOffset="4479" startColumn="12" endLine="162" endColumn="13" startOffset="4478" location="C:\Users\rober\Documents\studie\afstuderen\development\simulator_via_code_generator\data\tests\dev_transformed.cif"/>
      <initials xmi:type="expressions:BoolExpression" xmi:id="327" value="true">
        <position xmi:type="position:Position" xmi:id="328" source="File &quot;../data/tests\dev_transformed.cif&quot;: " startLine="163" endOffset="4493" startColumn="5" endLine="163" endColumn="11" startOffset="4487" location="C:\Users\rober\Documents\studie\afstuderen\development\simulator_via_code_generator\data\tests\dev_transformed.cif"/>
        <type xmi:type="types:BoolType" xmi:id="329">
          <position xmi:type="position:Position" xmi:id="330" source="File &quot;../data/tests\dev_transformed.cif&quot;: " startLine="163" endOffset="4493" startColumn="5" endLine="163" endColumn="11" startOffset="4487" location="C:\Users\rober\Documents\studie\afstuderen\development\simulator_via_code_generator\data\tests\dev_transformed.cif"/>
        </type>
      </initials>
      <edges xmi:type="automata:Edge" xmi:id="331" target="399">
        <position xmi:type="position:Position" xmi:id="332" source="File &quot;../data/tests\dev_transformed.cif&quot;: " startLine="165" endOffset="4517" startColumn="5" endLine="165" endColumn="8" startOffset="4514" location="C:\Users\rober\Documents\studie\afstuderen\development\simulator_via_code_generator\data\tests\dev_transformed.cif"/>
        <events xmi:type="automata:EdgeEvent" xmi:id="333">
          <position xmi:type="position:Position" xmi:id="334" source="File &quot;../data/tests\dev_transformed.cif&quot;: " startLine="165" endOffset="4521" startColumn="10" endLine="165" endColumn="12" startOffset="4519" location="C:\Users\rober\Documents\studie\afstuderen\development\simulator_via_code_generator\data\tests\dev_transformed.cif"/>
          <event xmi:type="expressions:EventExpression" xmi:id="335" event="309">
            <position xmi:type="position:Position" xmi:id="336" source="File &quot;../data/tests\dev_transformed.cif&quot;: " startLine="165" endOffset="4521" startColumn="10" endLine="165" endColumn="12" startOffset="4519" location="C:\Users\rober\Documents\studie\afstuderen\development\simulator_via_code_generator\data\tests\dev_transformed.cif"/>
            <type xmi:type="types:BoolType" xmi:id="337">
              <position xmi:type="position:Position" xmi:id="338" source="File &quot;../data/tests\dev_transformed.cif&quot;: " startLine="165" endOffset="4521" startColumn="10" endLine="165" endColumn="12" startOffset="4519" location="C:\Users\rober\Documents\studie\afstuderen\development\simulator_via_code_generator\data\tests\dev_transformed.cif"/>
            </type>
          </event>
        </events>
      </edges>
      <edges xmi:type="automata:Edge" xmi:id="339" target="469">
        <position xmi:type="position:Position" xmi:id="340" source="File &quot;../data/tests\dev_transformed.cif&quot;: " startLine="166" endOffset="4540" startColumn="5" endLine="166" endColumn="8" startOffset="4537" location="C:\Users\rober\Documents\studie\afstuderen\development\simulator_via_code_generator\data\tests\dev_transformed.cif"/>
        <events xmi:type="automata:EdgeEvent" xmi:id="341">
          <position xmi:type="position:Position" xmi:id="342" source="File &quot;../data/tests\dev_transformed.cif&quot;: " startLine="166" endOffset="4544" startColumn="10" endLine="166" endColumn="12" startOffset="4542" location="C:\Users\rober\Documents\studie\afstuderen\development\simulator_via_code_generator\data\tests\dev_transformed.cif"/>
          <event xmi:type="expressions:EventExpression" xmi:id="343" event="311">
            <position xmi:type="position:Position" xmi:id="344" source="File &quot;../data/tests\dev_transformed.cif&quot;: " startLine="166" endOffset="4544" startColumn="10" endLine="166" endColumn="12" startOffset="4542" location="C:\Users\rober\Documents\studie\afstuderen\development\simulator_via_code_generator\data\tests\dev_transformed.cif"/>
            <type xmi:type="types:BoolType" xmi:id="345">
              <position xmi:type="position:Position" xmi:id="346" source="File &quot;../data/tests\dev_transformed.cif&quot;: " startLine="166" endOffset="4544" startColumn="10" endLine="166" endColumn="12" startOffset="4542" location="C:\Users\rober\Documents\studie\afstuderen\development\simulator_via_code_generator\data\tests\dev_transformed.cif"/>
            </type>
          </event>
        </events>
      </edges>
      <edges xmi:type="automata:Edge" xmi:id="347" target="539">
        <position xmi:type="position:Position" xmi:id="348" source="File &quot;../data/tests\dev_transformed.cif&quot;: " startLine="167" endOffset="4563" startColumn="5" endLine="167" endColumn="8" startOffset="4560" location="C:\Users\rober\Documents\studie\afstuderen\development\simulator_via_code_generator\data\tests\dev_transformed.cif"/>
        <events xmi:type="automata:EdgeEvent" xmi:id="349">
          <position xmi:type="position:Position" xmi:id="350" source="File &quot;../data/tests\dev_transformed.cif&quot;: " startLine="167" endOffset="4567" startColumn="10" endLine="167" endColumn="12" startOffset="4565" location="C:\Users\rober\Documents\studie\afstuderen\development\simulator_via_code_generator\data\tests\dev_transformed.cif"/>
          <event xmi:type="expressions:EventExpression" xmi:id="351" event="313">
            <position xmi:type="position:Position" xmi:id="352" source="File &quot;../data/tests\dev_transformed.cif&quot;: " startLine="167" endOffset="4567" startColumn="10" endLine="167" endColumn="12" startOffset="4565" location="C:\Users\rober\Documents\studie\afstuderen\development\simulator_via_code_generator\data\tests\dev_transformed.cif"/>
            <type xmi:type="types:BoolType" xmi:id="353">
              <position xmi:type="position:Position" xmi:id="354" source="File &quot;../data/tests\dev_transformed.cif&quot;: " startLine="167" endOffset="4567" startColumn="10" endLine="167" endColumn="12" startOffset="4565" location="C:\Users\rober\Documents\studie\afstuderen\development\simulator_via_code_generator\data\tests\dev_transformed.cif"/>
            </type>
          </event>
        </events>
      </edges>
      <edges xmi:type="automata:Edge" xmi:id="355" target="609">
        <position xmi:type="position:Position" xmi:id="356" source="File &quot;../data/tests\dev_transformed.cif&quot;: " startLine="168" endOffset="4586" startColumn="5" endLine="168" endColumn="8" startOffset="4583" location="C:\Users\rober\Documents\studie\afstuderen\development\simulator_via_code_generator\data\tests\dev_transformed.cif"/>
        <events xmi:type="automata:EdgeEvent" xmi:id="357">
          <position xmi:type="position:Position" xmi:id="358" source="File &quot;../data/tests\dev_transformed.cif&quot;: " startLine="168" endOffset="4590" startColumn="10" endLine="168" endColumn="12" startOffset="4588" location="C:\Users\rober\Documents\studie\afstuderen\development\simulator_via_code_generator\data\tests\dev_transformed.cif"/>
          <event xmi:type="expressions:EventExpression" xmi:id="359" event="315">
            <position xmi:type="position:Position" xmi:id="360" source="File &quot;../data/tests\dev_transformed.cif&quot;: " startLine="168" endOffset="4590" startColumn="10" endLine="168" endColumn="12" startOffset="4588" location="C:\Users\rober\Documents\studie\afstuderen\development\simulator_via_code_generator\data\tests\dev_transformed.cif"/>
            <type xmi:type="types:BoolType" xmi:id="361">
              <position xmi:type="position:Position" xmi:id="362" source="File &quot;../data/tests\dev_transformed.cif&quot;: " startLine="168" endOffset="4590" startColumn="10" endLine="168" endColumn="12" startOffset="4588" location="C:\Users\rober\Documents\studie\afstuderen\development\simulator_via_code_generator\data\tests\dev_transformed.cif"/>
            </type>
          </event>
        </events>
      </edges>
      <edges xmi:type="automata:Edge" xmi:id="363" target="679">
        <position xmi:type="position:Position" xmi:id="364" source="File &quot;../data/tests\dev_transformed.cif&quot;: " startLine="169" endOffset="4609" startColumn="5" endLine="169" endColumn="8" startOffset="4606" location="C:\Users\rober\Documents\studie\afstuderen\development\simulator_via_code_generator\data\tests\dev_transformed.cif"/>
        <events xmi:type="automata:EdgeEvent" xmi:id="365">
          <position xmi:type="position:Position" xmi:id="366" source="File &quot;../data/tests\dev_transformed.cif&quot;: " startLine="169" endOffset="4613" startColumn="10" endLine="169" endColumn="12" startOffset="4611" location="C:\Users\rober\Documents\studie\afstuderen\development\simulator_via_code_generator\data\tests\dev_transformed.cif"/>
          <event xmi:type="expressions:EventExpression" xmi:id="367" event="317">
            <position xmi:type="position:Position" xmi:id="368" source="File &quot;../data/tests\dev_transformed.cif&quot;: " startLine="169" endOffset="4613" startColumn="10" endLine="169" endColumn="12" startOffset="4611" location="C:\Users\rober\Documents\studie\afstuderen\development\simulator_via_code_generator\data\tests\dev_transformed.cif"/>
            <type xmi:type="types:BoolType" xmi:id="369">
              <position xmi:type="position:Position" xmi:id="370" source="File &quot;../data/tests\dev_transformed.cif&quot;: " startLine="169" endOffset="4613" startColumn="10" endLine="169" endColumn="12" startOffset="4611" location="C:\Users\rober\Documents\studie\afstuderen\development\simulator_via_code_generator\data\tests\dev_transformed.cif"/>
            </type>
          </event>
        </events>
      </edges>
      <edges xmi:type="automata:Edge" xmi:id="371" target="749">
        <position xmi:type="position:Position" xmi:id="372" source="File &quot;../data/tests\dev_transformed.cif&quot;: " startLine="170" endOffset="4632" startColumn="5" endLine="170" endColumn="8" startOffset="4629" location="C:\Users\rober\Documents\studie\afstuderen\development\simulator_via_code_generator\data\tests\dev_transformed.cif"/>
        <events xmi:type="automata:EdgeEvent" xmi:id="373">
          <position xmi:type="position:Position" xmi:id="374" source="File &quot;../data/tests\dev_transformed.cif&quot;: " startLine="170" endOffset="4636" startColumn="10" endLine="170" endColumn="12" startOffset="4634" location="C:\Users\rober\Documents\studie\afstuderen\development\simulator_via_code_generator\data\tests\dev_transformed.cif"/>
          <event xmi:type="expressions:EventExpression" xmi:id="375" event="319">
            <position xmi:type="position:Position" xmi:id="376" source="File &quot;../data/tests\dev_transformed.cif&quot;: " startLine="170" endOffset="4636" startColumn="10" endLine="170" endColumn="12" startOffset="4634" location="C:\Users\rober\Documents\studie\afstuderen\development\simulator_via_code_generator\data\tests\dev_transformed.cif"/>
            <type xmi:type="types:BoolType" xmi:id="377">
              <position xmi:type="position:Position" xmi:id="378" source="File &quot;../data/tests\dev_transformed.cif&quot;: " startLine="170" endOffset="4636" startColumn="10" endLine="170" endColumn="12" startOffset="4634" location="C:\Users\rober\Documents\studie\afstuderen\development\simulator_via_code_generator\data\tests\dev_transformed.cif"/>
            </type>
          </event>
        </events>
      </edges>
      <edges xmi:type="automata:Edge" xmi:id="379" target="819">
        <position xmi:type="position:Position" xmi:id="380" source="File &quot;../data/tests\dev_transformed.cif&quot;: " startLine="171" endOffset="4655" startColumn="5" endLine="171" endColumn="8" startOffset="4652" location="C:\Users\rober\Documents\studie\afstuderen\development\simulator_via_code_generator\data\tests\dev_transformed.cif"/>
        <events xmi:type="automata:EdgeEvent" xmi:id="381">
          <position xmi:type="position:Position" xmi:id="382" source="File &quot;../data/tests\dev_transformed.cif&quot;: " startLine="171" endOffset="4659" startColumn="10" endLine="171" endColumn="12" startOffset="4657" location="C:\Users\rober\Documents\studie\afstuderen\development\simulator_via_code_generator\data\tests\dev_transformed.cif"/>
          <event xmi:type="expressions:EventExpression" xmi:id="383" event="321">
            <position xmi:type="position:Position" xmi:id="384" source="File &quot;../data/tests\dev_transformed.cif&quot;: " startLine="171" endOffset="4659" startColumn="10" endLine="171" endColumn="12" startOffset="4657" location="C:\Users\rober\Documents\studie\afstuderen\development\simulator_via_code_generator\data\tests\dev_transformed.cif"/>
            <type xmi:type="types:BoolType" xmi:id="385">
              <position xmi:type="position:Position" xmi:id="386" source="File &quot;../data/tests\dev_transformed.cif&quot;: " startLine="171" endOffset="4659" startColumn="10" endLine="171" endColumn="12" startOffset="4657" location="C:\Users\rober\Documents\studie\afstuderen\development\simulator_via_code_generator\data\tests\dev_transformed.cif"/>
            </type>
          </event>
        </events>
      </edges>
      <edges xmi:type="automata:Edge" xmi:id="387" target="889">
        <position xmi:type="position:Position" xmi:id="388" source="File &quot;../data/tests\dev_transformed.cif&quot;: " startLine="172" endOffset="4678" startColumn="5" endLine="172" endColumn="8" startOffset="4675" location="C:\Users\rober\Documents\studie\afstuderen\development\simulator_via_code_generator\data\tests\dev_transformed.cif"/>
        <events xmi:type="automata:EdgeEvent" xmi:id="389">
          <position xmi:type="position:Position" xmi:id="390" source="File &quot;../data/tests\dev_transformed.cif&quot;: " startLine="172" endOffset="4682" startColumn="10" endLine="172" endColumn="12" startOffset="4680" location="C:\Users\rober\Documents\studie\afstuderen\development\simulator_via_code_generator\data\tests\dev_transformed.cif"/>
          <event xmi:type="expressions:EventExpression" xmi:id="391" event="323">
            <position xmi:type="position:Position" xmi:id="392" source="File &quot;../data/tests\dev_transformed.cif&quot;: " startLine="172" endOffset="4682" startColumn="10" endLine="172" endColumn="12" startOffset="4680" location="C:\Users\rober\Documents\studie\afstuderen\development\simulator_via_code_generator\data\tests\dev_transformed.cif"/>
            <type xmi:type="types:BoolType" xmi:id="393">
              <position xmi:type="position:Position" xmi:id="394" source="File &quot;../data/tests\dev_transformed.cif&quot;: " startLine="172" endOffset="4682" startColumn="10" endLine="172" endColumn="12" startOffset="4680" location="C:\Users\rober\Documents\studie\afstuderen\development\simulator_via_code_generator\data\tests\dev_transformed.cif"/>
            </type>
          </event>
        </events>
      </edges>
      <markeds xmi:type="expressions:BoolExpression" xmi:id="395" value="true">
        <position xmi:type="position:Position" xmi:id="396" source="File &quot;../data/tests\dev_transformed.cif&quot;: " startLine="164" endOffset="4506" startColumn="5" endLine="164" endColumn="10" startOffset="4501" location="C:\Users\rober\Documents\studie\afstuderen\development\simulator_via_code_generator\data\tests\dev_transformed.cif"/>
        <type xmi:type="types:BoolType" xmi:id="397">
          <position xmi:type="position:Position" xmi:id="398" source="File &quot;../data/tests\dev_transformed.cif&quot;: " startLine="164" endOffset="4506" startColumn="5" endLine="164" endColumn="10" startOffset="4501" location="C:\Users\rober\Documents\studie\afstuderen\development\simulator_via_code_generator\data\tests\dev_transformed.cif"/>
        </type>
      </markeds>
    </locations>
    <locations xmi:type="automata:Location" xmi:id="399" name="s1">
      <position xmi:type="position:Position" xmi:id="400" source="File &quot;../data/tests\dev_transformed.cif&quot;: " startLine="173" endOffset="4706" startColumn="12" endLine="173" endColumn="13" startOffset="4705" location="C:\Users\rober\Documents\studie\afstuderen\development\simulator_via_code_generator\data\tests\dev_transformed.cif"/>
      <edges xmi:type="automata:Edge" xmi:id="401" target="325">
        <position xmi:type="position:Position" xmi:id="402" source="File &quot;../data/tests\dev_transformed.cif&quot;: " startLine="175" endOffset="4730" startColumn="5" endLine="175" endColumn="8" startOffset="4727" location="C:\Users\rober\Documents\studie\afstuderen\development\simulator_via_code_generator\data\tests\dev_transformed.cif"/>
        <events xmi:type="automata:EdgeEvent" xmi:id="403">
          <position xmi:type="position:Position" xmi:id="404" source="File &quot;../data/tests\dev_transformed.cif&quot;: " startLine="175" endOffset="4734" startColumn="10" endLine="175" endColumn="12" startOffset="4732" location="C:\Users\rober\Documents\studie\afstuderen\development\simulator_via_code_generator\data\tests\dev_transformed.cif"/>
          <event xmi:type="expressions:EventExpression" xmi:id="405" event="307">
            <position xmi:type="position:Position" xmi:id="406" source="File &quot;../data/tests\dev_transformed.cif&quot;: " startLine="175" endOffset="4734" startColumn="10" endLine="175" endColumn="12" startOffset="4732" location="C:\Users\rober\Documents\studie\afstuderen\development\simulator_via_code_generator\data\tests\dev_transformed.cif"/>
            <type xmi:type="types:BoolType" xmi:id="407">
              <position xmi:type="position:Position" xmi:id="408" source="File &quot;../data/tests\dev_transformed.cif&quot;: " startLine="175" endOffset="4734" startColumn="10" endLine="175" endColumn="12" startOffset="4732" location="C:\Users\rober\Documents\studie\afstuderen\development\simulator_via_code_generator\data\tests\dev_transformed.cif"/>
            </type>
          </event>
        </events>
      </edges>
      <edges xmi:type="automata:Edge" xmi:id="409" target="469">
        <position xmi:type="position:Position" xmi:id="410" source="File &quot;../data/tests\dev_transformed.cif&quot;: " startLine="176" endOffset="4753" startColumn="5" endLine="176" endColumn="8" startOffset="4750" location="C:\Users\rober\Documents\studie\afstuderen\development\simulator_via_code_generator\data\tests\dev_transformed.cif"/>
        <events xmi:type="automata:EdgeEvent" xmi:id="411">
          <position xmi:type="position:Position" xmi:id="412" source="File &quot;../data/tests\dev_transformed.cif&quot;: " startLine="176" endOffset="4757" startColumn="10" endLine="176" endColumn="12" startOffset="4755" location="C:\Users\rober\Documents\studie\afstuderen\development\simulator_via_code_generator\data\tests\dev_transformed.cif"/>
          <event xmi:type="expressions:EventExpression" xmi:id="413" event="311">
            <position xmi:type="position:Position" xmi:id="414" source="File &quot;../data/tests\dev_transformed.cif&quot;: " startLine="176" endOffset="4757" startColumn="10" endLine="176" endColumn="12" startOffset="4755" location="C:\Users\rober\Documents\studie\afstuderen\development\simulator_via_code_generator\data\tests\dev_transformed.cif"/>
            <type xmi:type="types:BoolType" xmi:id="415">
              <position xmi:type="position:Position" xmi:id="416" source="File &quot;../data/tests\dev_transformed.cif&quot;: " startLine="176" endOffset="4757" startColumn="10" endLine="176" endColumn="12" startOffset="4755" location="C:\Users\rober\Documents\studie\afstuderen\development\simulator_via_code_generator\data\tests\dev_transformed.cif"/>
            </type>
          </event>
        </events>
      </edges>
      <edges xmi:type="automata:Edge" xmi:id="417" target="539">
        <position xmi:type="position:Position" xmi:id="418" source="File &quot;../data/tests\dev_transformed.cif&quot;: " startLine="177" endOffset="4776" startColumn="5" endLine="177" endColumn="8" startOffset="4773" location="C:\Users\rober\Documents\studie\afstuderen\development\simulator_via_code_generator\data\tests\dev_transformed.cif"/>
        <events xmi:type="automata:EdgeEvent" xmi:id="419">
          <position xmi:type="position:Position" xmi:id="420" source="File &quot;../data/tests\dev_transformed.cif&quot;: " startLine="177" endOffset="4780" startColumn="10" endLine="177" endColumn="12" startOffset="4778" location="C:\Users\rober\Documents\studie\afstuderen\development\simulator_via_code_generator\data\tests\dev_transformed.cif"/>
          <event xmi:type="expressions:EventExpression" xmi:id="421" event="313">
            <position xmi:type="position:Position" xmi:id="422" source="File &quot;../data/tests\dev_transformed.cif&quot;: " startLine="177" endOffset="4780" startColumn="10" endLine="177" endColumn="12" startOffset="4778" location="C:\Users\rober\Documents\studie\afstuderen\development\simulator_via_code_generator\data\tests\dev_transformed.cif"/>
            <type xmi:type="types:BoolType" xmi:id="423">
              <position xmi:type="position:Position" xmi:id="424" source="File &quot;../data/tests\dev_transformed.cif&quot;: " startLine="177" endOffset="4780" startColumn="10" endLine="177" endColumn="12" startOffset="4778" location="C:\Users\rober\Documents\studie\afstuderen\development\simulator_via_code_generator\data\tests\dev_transformed.cif"/>
            </type>
          </event>
        </events>
      </edges>
      <edges xmi:type="automata:Edge" xmi:id="425" target="609">
        <position xmi:type="position:Position" xmi:id="426" source="File &quot;../data/tests\dev_transformed.cif&quot;: " startLine="178" endOffset="4799" startColumn="5" endLine="178" endColumn="8" startOffset="4796" location="C:\Users\rober\Documents\studie\afstuderen\development\simulator_via_code_generator\data\tests\dev_transformed.cif"/>
        <events xmi:type="automata:EdgeEvent" xmi:id="427">
          <position xmi:type="position:Position" xmi:id="428" source="File &quot;../data/tests\dev_transformed.cif&quot;: " startLine="178" endOffset="4803" startColumn="10" endLine="178" endColumn="12" startOffset="4801" location="C:\Users\rober\Documents\studie\afstuderen\development\simulator_via_code_generator\data\tests\dev_transformed.cif"/>
          <event xmi:type="expressions:EventExpression" xmi:id="429" event="315">
            <position xmi:type="position:Position" xmi:id="430" source="File &quot;../data/tests\dev_transformed.cif&quot;: " startLine="178" endOffset="4803" startColumn="10" endLine="178" endColumn="12" startOffset="4801" location="C:\Users\rober\Documents\studie\afstuderen\development\simulator_via_code_generator\data\tests\dev_transformed.cif"/>
            <type xmi:type="types:BoolType" xmi:id="431">
              <position xmi:type="position:Position" xmi:id="432" source="File &quot;../data/tests\dev_transformed.cif&quot;: " startLine="178" endOffset="4803" startColumn="10" endLine="178" endColumn="12" startOffset="4801" location="C:\Users\rober\Documents\studie\afstuderen\development\simulator_via_code_generator\data\tests\dev_transformed.cif"/>
            </type>
          </event>
        </events>
      </edges>
      <edges xmi:type="automata:Edge" xmi:id="433" target="679">
        <position xmi:type="position:Position" xmi:id="434" source="File &quot;../data/tests\dev_transformed.cif&quot;: " startLine="179" endOffset="4822" startColumn="5" endLine="179" endColumn="8" startOffset="4819" location="C:\Users\rober\Documents\studie\afstuderen\development\simulator_via_code_generator\data\tests\dev_transformed.cif"/>
        <events xmi:type="automata:EdgeEvent" xmi:id="435">
          <position xmi:type="position:Position" xmi:id="436" source="File &quot;../data/tests\dev_transformed.cif&quot;: " startLine="179" endOffset="4826" startColumn="10" endLine="179" endColumn="12" startOffset="4824" location="C:\Users\rober\Documents\studie\afstuderen\development\simulator_via_code_generator\data\tests\dev_transformed.cif"/>
          <event xmi:type="expressions:EventExpression" xmi:id="437" event="317">
            <position xmi:type="position:Position" xmi:id="438" source="File &quot;../data/tests\dev_transformed.cif&quot;: " startLine="179" endOffset="4826" startColumn="10" endLine="179" endColumn="12" startOffset="4824" location="C:\Users\rober\Documents\studie\afstuderen\development\simulator_via_code_generator\data\tests\dev_transformed.cif"/>
            <type xmi:type="types:BoolType" xmi:id="439">
              <position xmi:type="position:Position" xmi:id="440" source="File &quot;../data/tests\dev_transformed.cif&quot;: " startLine="179" endOffset="4826" startColumn="10" endLine="179" endColumn="12" startOffset="4824" location="C:\Users\rober\Documents\studie\afstuderen\development\simulator_via_code_generator\data\tests\dev_transformed.cif"/>
            </type>
          </event>
        </events>
      </edges>
      <edges xmi:type="automata:Edge" xmi:id="441" target="749">
        <position xmi:type="position:Position" xmi:id="442" source="File &quot;../data/tests\dev_transformed.cif&quot;: " startLine="180" endOffset="4845" startColumn="5" endLine="180" endColumn="8" startOffset="4842" location="C:\Users\rober\Documents\studie\afstuderen\development\simulator_via_code_generator\data\tests\dev_transformed.cif"/>
        <events xmi:type="automata:EdgeEvent" xmi:id="443">
          <position xmi:type="position:Position" xmi:id="444" source="File &quot;../data/tests\dev_transformed.cif&quot;: " startLine="180" endOffset="4849" startColumn="10" endLine="180" endColumn="12" startOffset="4847" location="C:\Users\rober\Documents\studie\afstuderen\development\simulator_via_code_generator\data\tests\dev_transformed.cif"/>
          <event xmi:type="expressions:EventExpression" xmi:id="445" event="319">
            <position xmi:type="position:Position" xmi:id="446" source="File &quot;../data/tests\dev_transformed.cif&quot;: " startLine="180" endOffset="4849" startColumn="10" endLine="180" endColumn="12" startOffset="4847" location="C:\Users\rober\Documents\studie\afstuderen\development\simulator_via_code_generator\data\tests\dev_transformed.cif"/>
            <type xmi:type="types:BoolType" xmi:id="447">
              <position xmi:type="position:Position" xmi:id="448" source="File &quot;../data/tests\dev_transformed.cif&quot;: " startLine="180" endOffset="4849" startColumn="10" endLine="180" endColumn="12" startOffset="4847" location="C:\Users\rober\Documents\studie\afstuderen\development\simulator_via_code_generator\data\tests\dev_transformed.cif"/>
            </type>
          </event>
        </events>
      </edges>
      <edges xmi:type="automata:Edge" xmi:id="449" target="819">
        <position xmi:type="position:Position" xmi:id="450" source="File &quot;../data/tests\dev_transformed.cif&quot;: " startLine="181" endOffset="4868" startColumn="5" endLine="181" endColumn="8" startOffset="4865" location="C:\Users\rober\Documents\studie\afstuderen\development\simulator_via_code_generator\data\tests\dev_transformed.cif"/>
        <events xmi:type="automata:EdgeEvent" xmi:id="451">
          <position xmi:type="position:Position" xmi:id="452" source="File &quot;../data/tests\dev_transformed.cif&quot;: " startLine="181" endOffset="4872" startColumn="10" endLine="181" endColumn="12" startOffset="4870" location="C:\Users\rober\Documents\studie\afstuderen\development\simulator_via_code_generator\data\tests\dev_transformed.cif"/>
          <event xmi:type="expressions:EventExpression" xmi:id="453" event="321">
            <position xmi:type="position:Position" xmi:id="454" source="File &quot;../data/tests\dev_transformed.cif&quot;: " startLine="181" endOffset="4872" startColumn="10" endLine="181" endColumn="12" startOffset="4870" location="C:\Users\rober\Documents\studie\afstuderen\development\simulator_via_code_generator\data\tests\dev_transformed.cif"/>
            <type xmi:type="types:BoolType" xmi:id="455">
              <position xmi:type="position:Position" xmi:id="456" source="File &quot;../data/tests\dev_transformed.cif&quot;: " startLine="181" endOffset="4872" startColumn="10" endLine="181" endColumn="12" startOffset="4870" location="C:\Users\rober\Documents\studie\afstuderen\development\simulator_via_code_generator\data\tests\dev_transformed.cif"/>
            </type>
          </event>
        </events>
      </edges>
      <edges xmi:type="automata:Edge" xmi:id="457" target="889">
        <position xmi:type="position:Position" xmi:id="458" source="File &quot;../data/tests\dev_transformed.cif&quot;: " startLine="182" endOffset="4891" startColumn="5" endLine="182" endColumn="8" startOffset="4888" location="C:\Users\rober\Documents\studie\afstuderen\development\simulator_via_code_generator\data\tests\dev_transformed.cif"/>
        <events xmi:type="automata:EdgeEvent" xmi:id="459">
          <position xmi:type="position:Position" xmi:id="460" source="File &quot;../data/tests\dev_transformed.cif&quot;: " startLine="182" endOffset="4895" startColumn="10" endLine="182" endColumn="12" startOffset="4893" location="C:\Users\rober\Documents\studie\afstuderen\development\simulator_via_code_generator\data\tests\dev_transformed.cif"/>
          <event xmi:type="expressions:EventExpression" xmi:id="461" event="323">
            <position xmi:type="position:Position" xmi:id="462" source="File &quot;../data/tests\dev_transformed.cif&quot;: " startLine="182" endOffset="4895" startColumn="10" endLine="182" endColumn="12" startOffset="4893" location="C:\Users\rober\Documents\studie\afstuderen\development\simulator_via_code_generator\data\tests\dev_transformed.cif"/>
            <type xmi:type="types:BoolType" xmi:id="463">
              <position xmi:type="position:Position" xmi:id="464" source="File &quot;../data/tests\dev_transformed.cif&quot;: " startLine="182" endOffset="4895" startColumn="10" endLine="182" endColumn="12" startOffset="4893" location="C:\Users\rober\Documents\studie\afstuderen\development\simulator_via_code_generator\data\tests\dev_transformed.cif"/>
            </type>
          </event>
        </events>
      </edges>
      <markeds xmi:type="expressions:BoolExpression" xmi:id="465" value="true">
        <position xmi:type="position:Position" xmi:id="466" source="File &quot;../data/tests\dev_transformed.cif&quot;: " startLine="174" endOffset="4719" startColumn="5" endLine="174" endColumn="10" startOffset="4714" location="C:\Users\rober\Documents\studie\afstuderen\development\simulator_via_code_generator\data\tests\dev_transformed.cif"/>
        <type xmi:type="types:BoolType" xmi:id="467">
          <position xmi:type="position:Position" xmi:id="468" source="File &quot;../data/tests\dev_transformed.cif&quot;: " startLine="174" endOffset="4719" startColumn="5" endLine="174" endColumn="10" startOffset="4714" location="C:\Users\rober\Documents\studie\afstuderen\development\simulator_via_code_generator\data\tests\dev_transformed.cif"/>
        </type>
      </markeds>
    </locations>
    <locations xmi:type="automata:Location" xmi:id="469" name="s2">
      <position xmi:type="position:Position" xmi:id="470" source="File &quot;../data/tests\dev_transformed.cif&quot;: " startLine="183" endOffset="4919" startColumn="12" endLine="183" endColumn="13" startOffset="4918" location="C:\Users\rober\Documents\studie\afstuderen\development\simulator_via_code_generator\data\tests\dev_transformed.cif"/>
      <edges xmi:type="automata:Edge" xmi:id="471" target="325">
        <position xmi:type="position:Position" xmi:id="472" source="File &quot;../data/tests\dev_transformed.cif&quot;: " startLine="185" endOffset="4943" startColumn="5" endLine="185" endColumn="8" startOffset="4940" location="C:\Users\rober\Documents\studie\afstuderen\development\simulator_via_code_generator\data\tests\dev_transformed.cif"/>
        <events xmi:type="automata:EdgeEvent" xmi:id="473">
          <position xmi:type="position:Position" xmi:id="474" source="File &quot;../data/tests\dev_transformed.cif&quot;: " startLine="185" endOffset="4947" startColumn="10" endLine="185" endColumn="12" startOffset="4945" location="C:\Users\rober\Documents\studie\afstuderen\development\simulator_via_code_generator\data\tests\dev_transformed.cif"/>
          <event xmi:type="expressions:EventExpression" xmi:id="475" event="307">
            <position xmi:type="position:Position" xmi:id="476" source="File &quot;../data/tests\dev_transformed.cif&quot;: " startLine="185" endOffset="4947" startColumn="10" endLine="185" endColumn="12" startOffset="4945" location="C:\Users\rober\Documents\studie\afstuderen\development\simulator_via_code_generator\data\tests\dev_transformed.cif"/>
            <type xmi:type="types:BoolType" xmi:id="477">
              <position xmi:type="position:Position" xmi:id="478" source="File &quot;../data/tests\dev_transformed.cif&quot;: " startLine="185" endOffset="4947" startColumn="10" endLine="185" endColumn="12" startOffset="4945" location="C:\Users\rober\Documents\studie\afstuderen\development\simulator_via_code_generator\data\tests\dev_transformed.cif"/>
            </type>
          </event>
        </events>
      </edges>
      <edges xmi:type="automata:Edge" xmi:id="479" target="399">
        <position xmi:type="position:Position" xmi:id="480" source="File &quot;../data/tests\dev_transformed.cif&quot;: " startLine="186" endOffset="4966" startColumn="5" endLine="186" endColumn="8" startOffset="4963" location="C:\Users\rober\Documents\studie\afstuderen\development\simulator_via_code_generator\data\tests\dev_transformed.cif"/>
        <events xmi:type="automata:EdgeEvent" xmi:id="481">
          <position xmi:type="position:Position" xmi:id="482" source="File &quot;../data/tests\dev_transformed.cif&quot;: " startLine="186" endOffset="4970" startColumn="10" endLine="186" endColumn="12" startOffset="4968" location="C:\Users\rober\Documents\studie\afstuderen\development\simulator_via_code_generator\data\tests\dev_transformed.cif"/>
          <event xmi:type="expressions:EventExpression" xmi:id="483" event="309">
            <position xmi:type="position:Position" xmi:id="484" source="File &quot;../data/tests\dev_transformed.cif&quot;: " startLine="186" endOffset="4970" startColumn="10" endLine="186" endColumn="12" startOffset="4968" location="C:\Users\rober\Documents\studie\afstuderen\development\simulator_via_code_generator\data\tests\dev_transformed.cif"/>
            <type xmi:type="types:BoolType" xmi:id="485">
              <position xmi:type="position:Position" xmi:id="486" source="File &quot;../data/tests\dev_transformed.cif&quot;: " startLine="186" endOffset="4970" startColumn="10" endLine="186" endColumn="12" startOffset="4968" location="C:\Users\rober\Documents\studie\afstuderen\development\simulator_via_code_generator\data\tests\dev_transformed.cif"/>
            </type>
          </event>
        </events>
      </edges>
      <edges xmi:type="automata:Edge" xmi:id="487" target="539">
        <position xmi:type="position:Position" xmi:id="488" source="File &quot;../data/tests\dev_transformed.cif&quot;: " startLine="187" endOffset="4989" startColumn="5" endLine="187" endColumn="8" startOffset="4986" location="C:\Users\rober\Documents\studie\afstuderen\development\simulator_via_code_generator\data\tests\dev_transformed.cif"/>
        <events xmi:type="automata:EdgeEvent" xmi:id="489">
          <position xmi:type="position:Position" xmi:id="490" source="File &quot;../data/tests\dev_transformed.cif&quot;: " startLine="187" endOffset="4993" startColumn="10" endLine="187" endColumn="12" startOffset="4991" location="C:\Users\rober\Documents\studie\afstuderen\development\simulator_via_code_generator\data\tests\dev_transformed.cif"/>
          <event xmi:type="expressions:EventExpression" xmi:id="491" event="313">
            <position xmi:type="position:Position" xmi:id="492" source="File &quot;../data/tests\dev_transformed.cif&quot;: " startLine="187" endOffset="4993" startColumn="10" endLine="187" endColumn="12" startOffset="4991" location="C:\Users\rober\Documents\studie\afstuderen\development\simulator_via_code_generator\data\tests\dev_transformed.cif"/>
            <type xmi:type="types:BoolType" xmi:id="493">
              <position xmi:type="position:Position" xmi:id="494" source="File &quot;../data/tests\dev_transformed.cif&quot;: " startLine="187" endOffset="4993" startColumn="10" endLine="187" endColumn="12" startOffset="4991" location="C:\Users\rober\Documents\studie\afstuderen\development\simulator_via_code_generator\data\tests\dev_transformed.cif"/>
            </type>
          </event>
        </events>
      </edges>
      <edges xmi:type="automata:Edge" xmi:id="495" target="609">
        <position xmi:type="position:Position" xmi:id="496" source="File &quot;../data/tests\dev_transformed.cif&quot;: " startLine="188" endOffset="5012" startColumn="5" endLine="188" endColumn="8" startOffset="5009" location="C:\Users\rober\Documents\studie\afstuderen\development\simulator_via_code_generator\data\tests\dev_transformed.cif"/>
        <events xmi:type="automata:EdgeEvent" xmi:id="497">
          <position xmi:type="position:Position" xmi:id="498" source="File &quot;../data/tests\dev_transformed.cif&quot;: " startLine="188" endOffset="5016" startColumn="10" endLine="188" endColumn="12" startOffset="5014" location="C:\Users\rober\Documents\studie\afstuderen\development\simulator_via_code_generator\data\tests\dev_transformed.cif"/>
          <event xmi:type="expressions:EventExpression" xmi:id="499" event="315">
            <position xmi:type="position:Position" xmi:id="500" source="File &quot;../data/tests\dev_transformed.cif&quot;: " startLine="188" endOffset="5016" startColumn="10" endLine="188" endColumn="12" startOffset="5014" location="C:\Users\rober\Documents\studie\afstuderen\development\simulator_via_code_generator\data\tests\dev_transformed.cif"/>
            <type xmi:type="types:BoolType" xmi:id="501">
              <position xmi:type="position:Position" xmi:id="502" source="File &quot;../data/tests\dev_transformed.cif&quot;: " startLine="188" endOffset="5016" startColumn="10" endLine="188" endColumn="12" startOffset="5014" location="C:\Users\rober\Documents\studie\afstuderen\development\simulator_via_code_generator\data\tests\dev_transformed.cif"/>
            </type>
          </event>
        </events>
      </edges>
      <edges xmi:type="automata:Edge" xmi:id="503" target="679">
        <position xmi:type="position:Position" xmi:id="504" source="File &quot;../data/tests\dev_transformed.cif&quot;: " startLine="189" endOffset="5035" startColumn="5" endLine="189" endColumn="8" startOffset="5032" location="C:\Users\rober\Documents\studie\afstuderen\development\simulator_via_code_generator\data\tests\dev_transformed.cif"/>
        <events xmi:type="automata:EdgeEvent" xmi:id="505">
          <position xmi:type="position:Position" xmi:id="506" source="File &quot;../data/tests\dev_transformed.cif&quot;: " startLine="189" endOffset="5039" startColumn="10" endLine="189" endColumn="12" startOffset="5037" location="C:\Users\rober\Documents\studie\afstuderen\development\simulator_via_code_generator\data\tests\dev_transformed.cif"/>
          <event xmi:type="expressions:EventExpression" xmi:id="507" event="317">
            <position xmi:type="position:Position" xmi:id="508" source="File &quot;../data/tests\dev_transformed.cif&quot;: " startLine="189" endOffset="5039" startColumn="10" endLine="189" endColumn="12" startOffset="5037" location="C:\Users\rober\Documents\studie\afstuderen\development\simulator_via_code_generator\data\tests\dev_transformed.cif"/>
            <type xmi:type="types:BoolType" xmi:id="509">
              <position xmi:type="position:Position" xmi:id="510" source="File &quot;../data/tests\dev_transformed.cif&quot;: " startLine="189" endOffset="5039" startColumn="10" endLine="189" endColumn="12" startOffset="5037" location="C:\Users\rober\Documents\studie\afstuderen\development\simulator_via_code_generator\data\tests\dev_transformed.cif"/>
            </type>
          </event>
        </events>
      </edges>
      <edges xmi:type="automata:Edge" xmi:id="511" target="749">
        <position xmi:type="position:Position" xmi:id="512" source="File &quot;../data/tests\dev_transformed.cif&quot;: " startLine="190" endOffset="5058" startColumn="5" endLine="190" endColumn="8" startOffset="5055" location="C:\Users\rober\Documents\studie\afstuderen\development\simulator_via_code_generator\data\tests\dev_transformed.cif"/>
        <events xmi:type="automata:EdgeEvent" xmi:id="513">
          <position xmi:type="position:Position" xmi:id="514" source="File &quot;../data/tests\dev_transformed.cif&quot;: " startLine="190" endOffset="5062" startColumn="10" endLine="190" endColumn="12" startOffset="5060" location="C:\Users\rober\Documents\studie\afstuderen\development\simulator_via_code_generator\data\tests\dev_transformed.cif"/>
          <event xmi:type="expressions:EventExpression" xmi:id="515" event="319">
            <position xmi:type="position:Position" xmi:id="516" source="File &quot;../data/tests\dev_transformed.cif&quot;: " startLine="190" endOffset="5062" startColumn="10" endLine="190" endColumn="12" startOffset="5060" location="C:\Users\rober\Documents\studie\afstuderen\development\simulator_via_code_generator\data\tests\dev_transformed.cif"/>
            <type xmi:type="types:BoolType" xmi:id="517">
              <position xmi:type="position:Position" xmi:id="518" source="File &quot;../data/tests\dev_transformed.cif&quot;: " startLine="190" endOffset="5062" startColumn="10" endLine="190" endColumn="12" startOffset="5060" location="C:\Users\rober\Documents\studie\afstuderen\development\simulator_via_code_generator\data\tests\dev_transformed.cif"/>
            </type>
          </event>
        </events>
      </edges>
      <edges xmi:type="automata:Edge" xmi:id="519" target="819">
        <position xmi:type="position:Position" xmi:id="520" source="File &quot;../data/tests\dev_transformed.cif&quot;: " startLine="191" endOffset="5081" startColumn="5" endLine="191" endColumn="8" startOffset="5078" location="C:\Users\rober\Documents\studie\afstuderen\development\simulator_via_code_generator\data\tests\dev_transformed.cif"/>
        <events xmi:type="automata:EdgeEvent" xmi:id="521">
          <position xmi:type="position:Position" xmi:id="522" source="File &quot;../data/tests\dev_transformed.cif&quot;: " startLine="191" endOffset="5085" startColumn="10" endLine="191" endColumn="12" startOffset="5083" location="C:\Users\rober\Documents\studie\afstuderen\development\simulator_via_code_generator\data\tests\dev_transformed.cif"/>
          <event xmi:type="expressions:EventExpression" xmi:id="523" event="321">
            <position xmi:type="position:Position" xmi:id="524" source="File &quot;../data/tests\dev_transformed.cif&quot;: " startLine="191" endOffset="5085" startColumn="10" endLine="191" endColumn="12" startOffset="5083" location="C:\Users\rober\Documents\studie\afstuderen\development\simulator_via_code_generator\data\tests\dev_transformed.cif"/>
            <type xmi:type="types:BoolType" xmi:id="525">
              <position xmi:type="position:Position" xmi:id="526" source="File &quot;../data/tests\dev_transformed.cif&quot;: " startLine="191" endOffset="5085" startColumn="10" endLine="191" endColumn="12" startOffset="5083" location="C:\Users\rober\Documents\studie\afstuderen\development\simulator_via_code_generator\data\tests\dev_transformed.cif"/>
            </type>
          </event>
        </events>
      </edges>
      <edges xmi:type="automata:Edge" xmi:id="527" target="889">
        <position xmi:type="position:Position" xmi:id="528" source="File &quot;../data/tests\dev_transformed.cif&quot;: " startLine="192" endOffset="5104" startColumn="5" endLine="192" endColumn="8" startOffset="5101" location="C:\Users\rober\Documents\studie\afstuderen\development\simulator_via_code_generator\data\tests\dev_transformed.cif"/>
        <events xmi:type="automata:EdgeEvent" xmi:id="529">
          <position xmi:type="position:Position" xmi:id="530" source="File &quot;../data/tests\dev_transformed.cif&quot;: " startLine="192" endOffset="5108" startColumn="10" endLine="192" endColumn="12" startOffset="5106" location="C:\Users\rober\Documents\studie\afstuderen\development\simulator_via_code_generator\data\tests\dev_transformed.cif"/>
          <event xmi:type="expressions:EventExpression" xmi:id="531" event="323">
            <position xmi:type="position:Position" xmi:id="532" source="File &quot;../data/tests\dev_transformed.cif&quot;: " startLine="192" endOffset="5108" startColumn="10" endLine="192" endColumn="12" startOffset="5106" location="C:\Users\rober\Documents\studie\afstuderen\development\simulator_via_code_generator\data\tests\dev_transformed.cif"/>
            <type xmi:type="types:BoolType" xmi:id="533">
              <position xmi:type="position:Position" xmi:id="534" source="File &quot;../data/tests\dev_transformed.cif&quot;: " startLine="192" endOffset="5108" startColumn="10" endLine="192" endColumn="12" startOffset="5106" location="C:\Users\rober\Documents\studie\afstuderen\development\simulator_via_code_generator\data\tests\dev_transformed.cif"/>
            </type>
          </event>
        </events>
      </edges>
      <markeds xmi:type="expressions:BoolExpression" xmi:id="535" value="true">
        <position xmi:type="position:Position" xmi:id="536" source="File &quot;../data/tests\dev_transformed.cif&quot;: " startLine="184" endOffset="4932" startColumn="5" endLine="184" endColumn="10" startOffset="4927" location="C:\Users\rober\Documents\studie\afstuderen\development\simulator_via_code_generator\data\tests\dev_transformed.cif"/>
        <type xmi:type="types:BoolType" xmi:id="537">
          <position xmi:type="position:Position" xmi:id="538" source="File &quot;../data/tests\dev_transformed.cif&quot;: " startLine="184" endOffset="4932" startColumn="5" endLine="184" endColumn="10" startOffset="4927" location="C:\Users\rober\Documents\studie\afstuderen\development\simulator_via_code_generator\data\tests\dev_transformed.cif"/>
        </type>
      </markeds>
    </locations>
    <locations xmi:type="automata:Location" xmi:id="539" name="s3">
      <position xmi:type="position:Position" xmi:id="540" source="File &quot;../data/tests\dev_transformed.cif&quot;: " startLine="193" endOffset="5132" startColumn="12" endLine="193" endColumn="13" startOffset="5131" location="C:\Users\rober\Documents\studie\afstuderen\development\simulator_via_code_generator\data\tests\dev_transformed.cif"/>
      <edges xmi:type="automata:Edge" xmi:id="541" target="325">
        <position xmi:type="position:Position" xmi:id="542" source="File &quot;../data/tests\dev_transformed.cif&quot;: " startLine="195" endOffset="5156" startColumn="5" endLine="195" endColumn="8" startOffset="5153" location="C:\Users\rober\Documents\studie\afstuderen\development\simulator_via_code_generator\data\tests\dev_transformed.cif"/>
        <events xmi:type="automata:EdgeEvent" xmi:id="543">
          <position xmi:type="position:Position" xmi:id="544" source="File &quot;../data/tests\dev_transformed.cif&quot;: " startLine="195" endOffset="5160" startColumn="10" endLine="195" endColumn="12" startOffset="5158" location="C:\Users\rober\Documents\studie\afstuderen\development\simulator_via_code_generator\data\tests\dev_transformed.cif"/>
          <event xmi:type="expressions:EventExpression" xmi:id="545" event="307">
            <position xmi:type="position:Position" xmi:id="546" source="File &quot;../data/tests\dev_transformed.cif&quot;: " startLine="195" endOffset="5160" startColumn="10" endLine="195" endColumn="12" startOffset="5158" location="C:\Users\rober\Documents\studie\afstuderen\development\simulator_via_code_generator\data\tests\dev_transformed.cif"/>
            <type xmi:type="types:BoolType" xmi:id="547">
              <position xmi:type="position:Position" xmi:id="548" source="File &quot;../data/tests\dev_transformed.cif&quot;: " startLine="195" endOffset="5160" startColumn="10" endLine="195" endColumn="12" startOffset="5158" location="C:\Users\rober\Documents\studie\afstuderen\development\simulator_via_code_generator\data\tests\dev_transformed.cif"/>
            </type>
          </event>
        </events>
      </edges>
      <edges xmi:type="automata:Edge" xmi:id="549" target="399">
        <position xmi:type="position:Position" xmi:id="550" source="File &quot;../data/tests\dev_transformed.cif&quot;: " startLine="196" endOffset="5179" startColumn="5" endLine="196" endColumn="8" startOffset="5176" location="C:\Users\rober\Documents\studie\afstuderen\development\simulator_via_code_generator\data\tests\dev_transformed.cif"/>
        <events xmi:type="automata:EdgeEvent" xmi:id="551">
          <position xmi:type="position:Position" xmi:id="552" source="File &quot;../data/tests\dev_transformed.cif&quot;: " startLine="196" endOffset="5183" startColumn="10" endLine="196" endColumn="12" startOffset="5181" location="C:\Users\rober\Documents\studie\afstuderen\development\simulator_via_code_generator\data\tests\dev_transformed.cif"/>
          <event xmi:type="expressions:EventExpression" xmi:id="553" event="309">
            <position xmi:type="position:Position" xmi:id="554" source="File &quot;../data/tests\dev_transformed.cif&quot;: " startLine="196" endOffset="5183" startColumn="10" endLine="196" endColumn="12" startOffset="5181" location="C:\Users\rober\Documents\studie\afstuderen\development\simulator_via_code_generator\data\tests\dev_transformed.cif"/>
            <type xmi:type="types:BoolType" xmi:id="555">
              <position xmi:type="position:Position" xmi:id="556" source="File &quot;../data/tests\dev_transformed.cif&quot;: " startLine="196" endOffset="5183" startColumn="10" endLine="196" endColumn="12" startOffset="5181" location="C:\Users\rober\Documents\studie\afstuderen\development\simulator_via_code_generator\data\tests\dev_transformed.cif"/>
            </type>
          </event>
        </events>
      </edges>
      <edges xmi:type="automata:Edge" xmi:id="557" target="469">
        <position xmi:type="position:Position" xmi:id="558" source="File &quot;../data/tests\dev_transformed.cif&quot;: " startLine="197" endOffset="5202" startColumn="5" endLine="197" endColumn="8" startOffset="5199" location="C:\Users\rober\Documents\studie\afstuderen\development\simulator_via_code_generator\data\tests\dev_transformed.cif"/>
        <events xmi:type="automata:EdgeEvent" xmi:id="559">
          <position xmi:type="position:Position" xmi:id="560" source="File &quot;../data/tests\dev_transformed.cif&quot;: " startLine="197" endOffset="5206" startColumn="10" endLine="197" endColumn="12" startOffset="5204" location="C:\Users\rober\Documents\studie\afstuderen\development\simulator_via_code_generator\data\tests\dev_transformed.cif"/>
          <event xmi:type="expressions:EventExpression" xmi:id="561" event="311">
            <position xmi:type="position:Position" xmi:id="562" source="File &quot;../data/tests\dev_transformed.cif&quot;: " startLine="197" endOffset="5206" startColumn="10" endLine="197" endColumn="12" startOffset="5204" location="C:\Users\rober\Documents\studie\afstuderen\development\simulator_via_code_generator\data\tests\dev_transformed.cif"/>
            <type xmi:type="types:BoolType" xmi:id="563">
              <position xmi:type="position:Position" xmi:id="564" source="File &quot;../data/tests\dev_transformed.cif&quot;: " startLine="197" endOffset="5206" startColumn="10" endLine="197" endColumn="12" startOffset="5204" location="C:\Users\rober\Documents\studie\afstuderen\development\simulator_via_code_generator\data\tests\dev_transformed.cif"/>
            </type>
          </event>
        </events>
      </edges>
      <edges xmi:type="automata:Edge" xmi:id="565" target="609">
        <position xmi:type="position:Position" xmi:id="566" source="File &quot;../data/tests\dev_transformed.cif&quot;: " startLine="198" endOffset="5225" startColumn="5" endLine="198" endColumn="8" startOffset="5222" location="C:\Users\rober\Documents\studie\afstuderen\development\simulator_via_code_generator\data\tests\dev_transformed.cif"/>
        <events xmi:type="automata:EdgeEvent" xmi:id="567">
          <position xmi:type="position:Position" xmi:id="568" source="File &quot;../data/tests\dev_transformed.cif&quot;: " startLine="198" endOffset="5229" startColumn="10" endLine="198" endColumn="12" startOffset="5227" location="C:\Users\rober\Documents\studie\afstuderen\development\simulator_via_code_generator\data\tests\dev_transformed.cif"/>
          <event xmi:type="expressions:EventExpression" xmi:id="569" event="315">
            <position xmi:type="position:Position" xmi:id="570" source="File &quot;../data/tests\dev_transformed.cif&quot;: " startLine="198" endOffset="5229" startColumn="10" endLine="198" endColumn="12" startOffset="5227" location="C:\Users\rober\Documents\studie\afstuderen\development\simulator_via_code_generator\data\tests\dev_transformed.cif"/>
            <type xmi:type="types:BoolType" xmi:id="571">
              <position xmi:type="position:Position" xmi:id="572" source="File &quot;../data/tests\dev_transformed.cif&quot;: " startLine="198" endOffset="5229" startColumn="10" endLine="198" endColumn="12" startOffset="5227" location="C:\Users\rober\Documents\studie\afstuderen\development\simulator_via_code_generator\data\tests\dev_transformed.cif"/>
            </type>
          </event>
        </events>
      </edges>
      <edges xmi:type="automata:Edge" xmi:id="573" target="679">
        <position xmi:type="position:Position" xmi:id="574" source="File &quot;../data/tests\dev_transformed.cif&quot;: " startLine="199" endOffset="5248" startColumn="5" endLine="199" endColumn="8" startOffset="5245" location="C:\Users\rober\Documents\studie\afstuderen\development\simulator_via_code_generator\data\tests\dev_transformed.cif"/>
        <events xmi:type="automata:EdgeEvent" xmi:id="575">
          <position xmi:type="position:Position" xmi:id="576" source="File &quot;../data/tests\dev_transformed.cif&quot;: " startLine="199" endOffset="5252" startColumn="10" endLine="199" endColumn="12" startOffset="5250" location="C:\Users\rober\Documents\studie\afstuderen\development\simulator_via_code_generator\data\tests\dev_transformed.cif"/>
          <event xmi:type="expressions:EventExpression" xmi:id="577" event="317">
            <position xmi:type="position:Position" xmi:id="578" source="File &quot;../data/tests\dev_transformed.cif&quot;: " startLine="199" endOffset="5252" startColumn="10" endLine="199" endColumn="12" startOffset="5250" location="C:\Users\rober\Documents\studie\afstuderen\development\simulator_via_code_generator\data\tests\dev_transformed.cif"/>
            <type xmi:type="types:BoolType" xmi:id="579">
              <position xmi:type="position:Position" xmi:id="580" source="File &quot;../data/tests\dev_transformed.cif&quot;: " startLine="199" endOffset="5252" startColumn="10" endLine="199" endColumn="12" startOffset="5250" location="C:\Users\rober\Documents\studie\afstuderen\development\simulator_via_code_generator\data\tests\dev_transformed.cif"/>
            </type>
          </event>
        </events>
      </edges>
      <edges xmi:type="automata:Edge" xmi:id="581" target="749">
        <position xmi:type="position:Position" xmi:id="582" source="File &quot;../data/tests\dev_transformed.cif&quot;: " startLine="200" endOffset="5271" startColumn="5" endLine="200" endColumn="8" startOffset="5268" location="C:\Users\rober\Documents\studie\afstuderen\development\simulator_via_code_generator\data\tests\dev_transformed.cif"/>
        <events xmi:type="automata:EdgeEvent" xmi:id="583">
          <position xmi:type="position:Position" xmi:id="584" source="File &quot;../data/tests\dev_transformed.cif&quot;: " startLine="200" endOffset="5275" startColumn="10" endLine="200" endColumn="12" startOffset="5273" location="C:\Users\rober\Documents\studie\afstuderen\development\simulator_via_code_generator\data\tests\dev_transformed.cif"/>
          <event xmi:type="expressions:EventExpression" xmi:id="585" event="319">
            <position xmi:type="position:Position" xmi:id="586" source="File &quot;../data/tests\dev_transformed.cif&quot;: " startLine="200" endOffset="5275" startColumn="10" endLine="200" endColumn="12" startOffset="5273" location="C:\Users\rober\Documents\studie\afstuderen\development\simulator_via_code_generator\data\tests\dev_transformed.cif"/>
            <type xmi:type="types:BoolType" xmi:id="587">
              <position xmi:type="position:Position" xmi:id="588" source="File &quot;../data/tests\dev_transformed.cif&quot;: " startLine="200" endOffset="5275" startColumn="10" endLine="200" endColumn="12" startOffset="5273" location="C:\Users\rober\Documents\studie\afstuderen\development\simulator_via_code_generator\data\tests\dev_transformed.cif"/>
            </type>
          </event>
        </events>
      </edges>
      <edges xmi:type="automata:Edge" xmi:id="589" target="819">
        <position xmi:type="position:Position" xmi:id="590" source="File &quot;../data/tests\dev_transformed.cif&quot;: " startLine="201" endOffset="5294" startColumn="5" endLine="201" endColumn="8" startOffset="5291" location="C:\Users\rober\Documents\studie\afstuderen\development\simulator_via_code_generator\data\tests\dev_transformed.cif"/>
        <events xmi:type="automata:EdgeEvent" xmi:id="591">
          <position xmi:type="position:Position" xmi:id="592" source="File &quot;../data/tests\dev_transformed.cif&quot;: " startLine="201" endOffset="5298" startColumn="10" endLine="201" endColumn="12" startOffset="5296" location="C:\Users\rober\Documents\studie\afstuderen\development\simulator_via_code_generator\data\tests\dev_transformed.cif"/>
          <event xmi:type="expressions:EventExpression" xmi:id="593" event="321">
            <position xmi:type="position:Position" xmi:id="594" source="File &quot;../data/tests\dev_transformed.cif&quot;: " startLine="201" endOffset="5298" startColumn="10" endLine="201" endColumn="12" startOffset="5296" location="C:\Users\rober\Documents\studie\afstuderen\development\simulator_via_code_generator\data\tests\dev_transformed.cif"/>
            <type xmi:type="types:BoolType" xmi:id="595">
              <position xmi:type="position:Position" xmi:id="596" source="File &quot;../data/tests\dev_transformed.cif&quot;: " startLine="201" endOffset="5298" startColumn="10" endLine="201" endColumn="12" startOffset="5296" location="C:\Users\rober\Documents\studie\afstuderen\development\simulator_via_code_generator\data\tests\dev_transformed.cif"/>
            </type>
          </event>
        </events>
      </edges>
      <edges xmi:type="automata:Edge" xmi:id="597" target="889">
        <position xmi:type="position:Position" xmi:id="598" source="File &quot;../data/tests\dev_transformed.cif&quot;: " startLine="202" endOffset="5317" startColumn="5" endLine="202" endColumn="8" startOffset="5314" location="C:\Users\rober\Documents\studie\afstuderen\development\simulator_via_code_generator\data\tests\dev_transformed.cif"/>
        <events xmi:type="automata:EdgeEvent" xmi:id="599">
          <position xmi:type="position:Position" xmi:id="600" source="File &quot;../data/tests\dev_transformed.cif&quot;: " startLine="202" endOffset="5321" startColumn="10" endLine="202" endColumn="12" startOffset="5319" location="C:\Users\rober\Documents\studie\afstuderen\development\simulator_via_code_generator\data\tests\dev_transformed.cif"/>
          <event xmi:type="expressions:EventExpression" xmi:id="601" event="323">
            <position xmi:type="position:Position" xmi:id="602" source="File &quot;../data/tests\dev_transformed.cif&quot;: " startLine="202" endOffset="5321" startColumn="10" endLine="202" endColumn="12" startOffset="5319" location="C:\Users\rober\Documents\studie\afstuderen\development\simulator_via_code_generator\data\tests\dev_transformed.cif"/>
            <type xmi:type="types:BoolType" xmi:id="603">
              <position xmi:type="position:Position" xmi:id="604" source="File &quot;../data/tests\dev_transformed.cif&quot;: " startLine="202" endOffset="5321" startColumn="10" endLine="202" endColumn="12" startOffset="5319" location="C:\Users\rober\Documents\studie\afstuderen\development\simulator_via_code_generator\data\tests\dev_transformed.cif"/>
            </type>
          </event>
        </events>
      </edges>
      <markeds xmi:type="expressions:BoolExpression" xmi:id="605" value="true">
        <position xmi:type="position:Position" xmi:id="606" source="File &quot;../data/tests\dev_transformed.cif&quot;: " startLine="194" endOffset="5145" startColumn="5" endLine="194" endColumn="10" startOffset="5140" location="C:\Users\rober\Documents\studie\afstuderen\development\simulator_via_code_generator\data\tests\dev_transformed.cif"/>
        <type xmi:type="types:BoolType" xmi:id="607">
          <position xmi:type="position:Position" xmi:id="608" source="File &quot;../data/tests\dev_transformed.cif&quot;: " startLine="194" endOffset="5145" startColumn="5" endLine="194" endColumn="10" startOffset="5140" location="C:\Users\rober\Documents\studie\afstuderen\development\simulator_via_code_generator\data\tests\dev_transformed.cif"/>
        </type>
      </markeds>
    </locations>
    <locations xmi:type="automata:Location" xmi:id="609" name="s4">
      <position xmi:type="position:Position" xmi:id="610" source="File &quot;../data/tests\dev_transformed.cif&quot;: " startLine="203" endOffset="5345" startColumn="12" endLine="203" endColumn="13" startOffset="5344" location="C:\Users\rober\Documents\studie\afstuderen\development\simulator_via_code_generator\data\tests\dev_transformed.cif"/>
      <edges xmi:type="automata:Edge" xmi:id="611" target="325">
        <position xmi:type="position:Position" xmi:id="612" source="File &quot;../data/tests\dev_transformed.cif&quot;: " startLine="205" endOffset="5369" startColumn="5" endLine="205" endColumn="8" startOffset="5366" location="C:\Users\rober\Documents\studie\afstuderen\development\simulator_via_code_generator\data\tests\dev_transformed.cif"/>
        <events xmi:type="automata:EdgeEvent" xmi:id="613">
          <position xmi:type="position:Position" xmi:id="614" source="File &quot;../data/tests\dev_transformed.cif&quot;: " startLine="205" endOffset="5373" startColumn="10" endLine="205" endColumn="12" startOffset="5371" location="C:\Users\rober\Documents\studie\afstuderen\development\simulator_via_code_generator\data\tests\dev_transformed.cif"/>
          <event xmi:type="expressions:EventExpression" xmi:id="615" event="307">
            <position xmi:type="position:Position" xmi:id="616" source="File &quot;../data/tests\dev_transformed.cif&quot;: " startLine="205" endOffset="5373" startColumn="10" endLine="205" endColumn="12" startOffset="5371" location="C:\Users\rober\Documents\studie\afstuderen\development\simulator_via_code_generator\data\tests\dev_transformed.cif"/>
            <type xmi:type="types:BoolType" xmi:id="617">
              <position xmi:type="position:Position" xmi:id="618" source="File &quot;../data/tests\dev_transformed.cif&quot;: " startLine="205" endOffset="5373" startColumn="10" endLine="205" endColumn="12" startOffset="5371" location="C:\Users\rober\Documents\studie\afstuderen\development\simulator_via_code_generator\data\tests\dev_transformed.cif"/>
            </type>
          </event>
        </events>
      </edges>
      <edges xmi:type="automata:Edge" xmi:id="619" target="399">
        <position xmi:type="position:Position" xmi:id="620" source="File &quot;../data/tests\dev_transformed.cif&quot;: " startLine="206" endOffset="5392" startColumn="5" endLine="206" endColumn="8" startOffset="5389" location="C:\Users\rober\Documents\studie\afstuderen\development\simulator_via_code_generator\data\tests\dev_transformed.cif"/>
        <events xmi:type="automata:EdgeEvent" xmi:id="621">
          <position xmi:type="position:Position" xmi:id="622" source="File &quot;../data/tests\dev_transformed.cif&quot;: " startLine="206" endOffset="5396" startColumn="10" endLine="206" endColumn="12" startOffset="5394" location="C:\Users\rober\Documents\studie\afstuderen\development\simulator_via_code_generator\data\tests\dev_transformed.cif"/>
          <event xmi:type="expressions:EventExpression" xmi:id="623" event="309">
            <position xmi:type="position:Position" xmi:id="624" source="File &quot;../data/tests\dev_transformed.cif&quot;: " startLine="206" endOffset="5396" startColumn="10" endLine="206" endColumn="12" startOffset="5394" location="C:\Users\rober\Documents\studie\afstuderen\development\simulator_via_code_generator\data\tests\dev_transformed.cif"/>
            <type xmi:type="types:BoolType" xmi:id="625">
              <position xmi:type="position:Position" xmi:id="626" source="File &quot;../data/tests\dev_transformed.cif&quot;: " startLine="206" endOffset="5396" startColumn="10" endLine="206" endColumn="12" startOffset="5394" location="C:\Users\rober\Documents\studie\afstuderen\development\simulator_via_code_generator\data\tests\dev_transformed.cif"/>
            </type>
          </event>
        </events>
      </edges>
      <edges xmi:type="automata:Edge" xmi:id="627" target="469">
        <position xmi:type="position:Position" xmi:id="628" source="File &quot;../data/tests\dev_transformed.cif&quot;: " startLine="207" endOffset="5415" startColumn="5" endLine="207" endColumn="8" startOffset="5412" location="C:\Users\rober\Documents\studie\afstuderen\development\simulator_via_code_generator\data\tests\dev_transformed.cif"/>
        <events xmi:type="automata:EdgeEvent" xmi:id="629">
          <position xmi:type="position:Position" xmi:id="630" source="File &quot;../data/tests\dev_transformed.cif&quot;: " startLine="207" endOffset="5419" startColumn="10" endLine="207" endColumn="12" startOffset="5417" location="C:\Users\rober\Documents\studie\afstuderen\development\simulator_via_code_generator\data\tests\dev_transformed.cif"/>
          <event xmi:type="expressions:EventExpression" xmi:id="631" event="311">
            <position xmi:type="position:Position" xmi:id="632" source="File &quot;../data/tests\dev_transformed.cif&quot;: " startLine="207" endOffset="5419" startColumn="10" endLine="207" endColumn="12" startOffset="5417" location="C:\Users\rober\Documents\studie\afstuderen\development\simulator_via_code_generator\data\tests\dev_transformed.cif"/>
            <type xmi:type="types:BoolType" xmi:id="633">
              <position xmi:type="position:Position" xmi:id="634" source="File &quot;../data/tests\dev_transformed.cif&quot;: " startLine="207" endOffset="5419" startColumn="10" endLine="207" endColumn="12" startOffset="5417" location="C:\Users\rober\Documents\studie\afstuderen\development\simulator_via_code_generator\data\tests\dev_transformed.cif"/>
            </type>
          </event>
        </events>
      </edges>
      <edges xmi:type="automata:Edge" xmi:id="635" target="539">
        <position xmi:type="position:Position" xmi:id="636" source="File &quot;../data/tests\dev_transformed.cif&quot;: " startLine="208" endOffset="5438" startColumn="5" endLine="208" endColumn="8" startOffset="5435" location="C:\Users\rober\Documents\studie\afstuderen\development\simulator_via_code_generator\data\tests\dev_transformed.cif"/>
        <events xmi:type="automata:EdgeEvent" xmi:id="637">
          <position xmi:type="position:Position" xmi:id="638" source="File &quot;../data/tests\dev_transformed.cif&quot;: " startLine="208" endOffset="5442" startColumn="10" endLine="208" endColumn="12" startOffset="5440" location="C:\Users\rober\Documents\studie\afstuderen\development\simulator_via_code_generator\data\tests\dev_transformed.cif"/>
          <event xmi:type="expressions:EventExpression" xmi:id="639" event="313">
            <position xmi:type="position:Position" xmi:id="640" source="File &quot;../data/tests\dev_transformed.cif&quot;: " startLine="208" endOffset="5442" startColumn="10" endLine="208" endColumn="12" startOffset="5440" location="C:\Users\rober\Documents\studie\afstuderen\development\simulator_via_code_generator\data\tests\dev_transformed.cif"/>
            <type xmi:type="types:BoolType" xmi:id="641">
              <position xmi:type="position:Position" xmi:id="642" source="File &quot;../data/tests\dev_transformed.cif&quot;: " startLine="208" endOffset="5442" startColumn="10" endLine="208" endColumn="12" startOffset="5440" location="C:\Users\rober\Documents\studie\afstuderen\development\simulator_via_code_generator\data\tests\dev_transformed.cif"/>
            </type>
          </event>
        </events>
      </edges>
      <edges xmi:type="automata:Edge" xmi:id="643" target="679">
        <position xmi:type="position:Position" xmi:id="644" source="File &quot;../data/tests\dev_transformed.cif&quot;: " startLine="209" endOffset="5461" startColumn="5" endLine="209" endColumn="8" startOffset="5458" location="C:\Users\rober\Documents\studie\afstuderen\development\simulator_via_code_generator\data\tests\dev_transformed.cif"/>
        <events xmi:type="automata:EdgeEvent" xmi:id="645">
          <position xmi:type="position:Position" xmi:id="646" source="File &quot;../data/tests\dev_transformed.cif&quot;: " startLine="209" endOffset="5465" startColumn="10" endLine="209" endColumn="12" startOffset="5463" location="C:\Users\rober\Documents\studie\afstuderen\development\simulator_via_code_generator\data\tests\dev_transformed.cif"/>
          <event xmi:type="expressions:EventExpression" xmi:id="647" event="317">
            <position xmi:type="position:Position" xmi:id="648" source="File &quot;../data/tests\dev_transformed.cif&quot;: " startLine="209" endOffset="5465" startColumn="10" endLine="209" endColumn="12" startOffset="5463" location="C:\Users\rober\Documents\studie\afstuderen\development\simulator_via_code_generator\data\tests\dev_transformed.cif"/>
            <type xmi:type="types:BoolType" xmi:id="649">
              <position xmi:type="position:Position" xmi:id="650" source="File &quot;../data/tests\dev_transformed.cif&quot;: " startLine="209" endOffset="5465" startColumn="10" endLine="209" endColumn="12" startOffset="5463" location="C:\Users\rober\Documents\studie\afstuderen\development\simulator_via_code_generator\data\tests\dev_transformed.cif"/>
            </type>
          </event>
        </events>
      </edges>
      <edges xmi:type="automata:Edge" xmi:id="651" target="749">
        <position xmi:type="position:Position" xmi:id="652" source="File &quot;../data/tests\dev_transformed.cif&quot;: " startLine="210" endOffset="5484" startColumn="5" endLine="210" endColumn="8" startOffset="5481" location="C:\Users\rober\Documents\studie\afstuderen\development\simulator_via_code_generator\data\tests\dev_transformed.cif"/>
        <events xmi:type="automata:EdgeEvent" xmi:id="653">
          <position xmi:type="position:Position" xmi:id="654" source="File &quot;../data/tests\dev_transformed.cif&quot;: " startLine="210" endOffset="5488" startColumn="10" endLine="210" endColumn="12" startOffset="5486" location="C:\Users\rober\Documents\studie\afstuderen\development\simulator_via_code_generator\data\tests\dev_transformed.cif"/>
          <event xmi:type="expressions:EventExpression" xmi:id="655" event="319">
            <position xmi:type="position:Position" xmi:id="656" source="File &quot;../data/tests\dev_transformed.cif&quot;: " startLine="210" endOffset="5488" startColumn="10" endLine="210" endColumn="12" startOffset="5486" location="C:\Users\rober\Documents\studie\afstuderen\development\simulator_via_code_generator\data\tests\dev_transformed.cif"/>
            <type xmi:type="types:BoolType" xmi:id="657">
              <position xmi:type="position:Position" xmi:id="658" source="File &quot;../data/tests\dev_transformed.cif&quot;: " startLine="210" endOffset="5488" startColumn="10" endLine="210" endColumn="12" startOffset="5486" location="C:\Users\rober\Documents\studie\afstuderen\development\simulator_via_code_generator\data\tests\dev_transformed.cif"/>
            </type>
          </event>
        </events>
      </edges>
      <edges xmi:type="automata:Edge" xmi:id="659" target="819">
        <position xmi:type="position:Position" xmi:id="660" source="File &quot;../data/tests\dev_transformed.cif&quot;: " startLine="211" endOffset="5507" startColumn="5" endLine="211" endColumn="8" startOffset="5504" location="C:\Users\rober\Documents\studie\afstuderen\development\simulator_via_code_generator\data\tests\dev_transformed.cif"/>
        <events xmi:type="automata:EdgeEvent" xmi:id="661">
          <position xmi:type="position:Position" xmi:id="662" source="File &quot;../data/tests\dev_transformed.cif&quot;: " startLine="211" endOffset="5511" startColumn="10" endLine="211" endColumn="12" startOffset="5509" location="C:\Users\rober\Documents\studie\afstuderen\development\simulator_via_code_generator\data\tests\dev_transformed.cif"/>
          <event xmi:type="expressions:EventExpression" xmi:id="663" event="321">
            <position xmi:type="position:Position" xmi:id="664" source="File &quot;../data/tests\dev_transformed.cif&quot;: " startLine="211" endOffset="5511" startColumn="10" endLine="211" endColumn="12" startOffset="5509" location="C:\Users\rober\Documents\studie\afstuderen\development\simulator_via_code_generator\data\tests\dev_transformed.cif"/>
            <type xmi:type="types:BoolType" xmi:id="665">
              <position xmi:type="position:Position" xmi:id="666" source="File &quot;../data/tests\dev_transformed.cif&quot;: " startLine="211" endOffset="5511" startColumn="10" endLine="211" endColumn="12" startOffset="5509" location="C:\Users\rober\Documents\studie\afstuderen\development\simulator_via_code_generator\data\tests\dev_transformed.cif"/>
            </type>
          </event>
        </events>
      </edges>
      <edges xmi:type="automata:Edge" xmi:id="667" target="889">
        <position xmi:type="position:Position" xmi:id="668" source="File &quot;../data/tests\dev_transformed.cif&quot;: " startLine="212" endOffset="5530" startColumn="5" endLine="212" endColumn="8" startOffset="5527" location="C:\Users\rober\Documents\studie\afstuderen\development\simulator_via_code_generator\data\tests\dev_transformed.cif"/>
        <events xmi:type="automata:EdgeEvent" xmi:id="669">
          <position xmi:type="position:Position" xmi:id="670" source="File &quot;../data/tests\dev_transformed.cif&quot;: " startLine="212" endOffset="5534" startColumn="10" endLine="212" endColumn="12" startOffset="5532" location="C:\Users\rober\Documents\studie\afstuderen\development\simulator_via_code_generator\data\tests\dev_transformed.cif"/>
          <event xmi:type="expressions:EventExpression" xmi:id="671" event="323">
            <position xmi:type="position:Position" xmi:id="672" source="File &quot;../data/tests\dev_transformed.cif&quot;: " startLine="212" endOffset="5534" startColumn="10" endLine="212" endColumn="12" startOffset="5532" location="C:\Users\rober\Documents\studie\afstuderen\development\simulator_via_code_generator\data\tests\dev_transformed.cif"/>
            <type xmi:type="types:BoolType" xmi:id="673">
              <position xmi:type="position:Position" xmi:id="674" source="File &quot;../data/tests\dev_transformed.cif&quot;: " startLine="212" endOffset="5534" startColumn="10" endLine="212" endColumn="12" startOffset="5532" location="C:\Users\rober\Documents\studie\afstuderen\development\simulator_via_code_generator\data\tests\dev_transformed.cif"/>
            </type>
          </event>
        </events>
      </edges>
      <markeds xmi:type="expressions:BoolExpression" xmi:id="675" value="true">
        <position xmi:type="position:Position" xmi:id="676" source="File &quot;../data/tests\dev_transformed.cif&quot;: " startLine="204" endOffset="5358" startColumn="5" endLine="204" endColumn="10" startOffset="5353" location="C:\Users\rober\Documents\studie\afstuderen\development\simulator_via_code_generator\data\tests\dev_transformed.cif"/>
        <type xmi:type="types:BoolType" xmi:id="677">
          <position xmi:type="position:Position" xmi:id="678" source="File &quot;../data/tests\dev_transformed.cif&quot;: " startLine="204" endOffset="5358" startColumn="5" endLine="204" endColumn="10" startOffset="5353" location="C:\Users\rober\Documents\studie\afstuderen\development\simulator_via_code_generator\data\tests\dev_transformed.cif"/>
        </type>
      </markeds>
    </locations>
    <locations xmi:type="automata:Location" xmi:id="679" name="s5">
      <position xmi:type="position:Position" xmi:id="680" source="File &quot;../data/tests\dev_transformed.cif&quot;: " startLine="213" endOffset="5558" startColumn="12" endLine="213" endColumn="13" startOffset="5557" location="C:\Users\rober\Documents\studie\afstuderen\development\simulator_via_code_generator\data\tests\dev_transformed.cif"/>
      <edges xmi:type="automata:Edge" xmi:id="681" target="325">
        <position xmi:type="position:Position" xmi:id="682" source="File &quot;../data/tests\dev_transformed.cif&quot;: " startLine="215" endOffset="5582" startColumn="5" endLine="215" endColumn="8" startOffset="5579" location="C:\Users\rober\Documents\studie\afstuderen\development\simulator_via_code_generator\data\tests\dev_transformed.cif"/>
        <events xmi:type="automata:EdgeEvent" xmi:id="683">
          <position xmi:type="position:Position" xmi:id="684" source="File &quot;../data/tests\dev_transformed.cif&quot;: " startLine="215" endOffset="5586" startColumn="10" endLine="215" endColumn="12" startOffset="5584" location="C:\Users\rober\Documents\studie\afstuderen\development\simulator_via_code_generator\data\tests\dev_transformed.cif"/>
          <event xmi:type="expressions:EventExpression" xmi:id="685" event="307">
            <position xmi:type="position:Position" xmi:id="686" source="File &quot;../data/tests\dev_transformed.cif&quot;: " startLine="215" endOffset="5586" startColumn="10" endLine="215" endColumn="12" startOffset="5584" location="C:\Users\rober\Documents\studie\afstuderen\development\simulator_via_code_generator\data\tests\dev_transformed.cif"/>
            <type xmi:type="types:BoolType" xmi:id="687">
              <position xmi:type="position:Position" xmi:id="688" source="File &quot;../data/tests\dev_transformed.cif&quot;: " startLine="215" endOffset="5586" startColumn="10" endLine="215" endColumn="12" startOffset="5584" location="C:\Users\rober\Documents\studie\afstuderen\development\simulator_via_code_generator\data\tests\dev_transformed.cif"/>
            </type>
          </event>
        </events>
      </edges>
      <edges xmi:type="automata:Edge" xmi:id="689" target="399">
        <position xmi:type="position:Position" xmi:id="690" source="File &quot;../data/tests\dev_transformed.cif&quot;: " startLine="216" endOffset="5605" startColumn="5" endLine="216" endColumn="8" startOffset="5602" location="C:\Users\rober\Documents\studie\afstuderen\development\simulator_via_code_generator\data\tests\dev_transformed.cif"/>
        <events xmi:type="automata:EdgeEvent" xmi:id="691">
          <position xmi:type="position:Position" xmi:id="692" source="File &quot;../data/tests\dev_transformed.cif&quot;: " startLine="216" endOffset="5609" startColumn="10" endLine="216" endColumn="12" startOffset="5607" location="C:\Users\rober\Documents\studie\afstuderen\development\simulator_via_code_generator\data\tests\dev_transformed.cif"/>
          <event xmi:type="expressions:EventExpression" xmi:id="693" event="309">
            <position xmi:type="position:Position" xmi:id="694" source="File &quot;../data/tests\dev_transformed.cif&quot;: " startLine="216" endOffset="5609" startColumn="10" endLine="216" endColumn="12" startOffset="5607" location="C:\Users\rober\Documents\studie\afstuderen\development\simulator_via_code_generator\data\tests\dev_transformed.cif"/>
            <type xmi:type="types:BoolType" xmi:id="695">
              <position xmi:type="position:Position" xmi:id="696" source="File &quot;../data/tests\dev_transformed.cif&quot;: " startLine="216" endOffset="5609" startColumn="10" endLine="216" endColumn="12" startOffset="5607" location="C:\Users\rober\Documents\studie\afstuderen\development\simulator_via_code_generator\data\tests\dev_transformed.cif"/>
            </type>
          </event>
        </events>
      </edges>
      <edges xmi:type="automata:Edge" xmi:id="697" target="469">
        <position xmi:type="position:Position" xmi:id="698" source="File &quot;../data/tests\dev_transformed.cif&quot;: " startLine="217" endOffset="5628" startColumn="5" endLine="217" endColumn="8" startOffset="5625" location="C:\Users\rober\Documents\studie\afstuderen\development\simulator_via_code_generator\data\tests\dev_transformed.cif"/>
        <events xmi:type="automata:EdgeEvent" xmi:id="699">
          <position xmi:type="position:Position" xmi:id="700" source="File &quot;../data/tests\dev_transformed.cif&quot;: " startLine="217" endOffset="5632" startColumn="10" endLine="217" endColumn="12" startOffset="5630" location="C:\Users\rober\Documents\studie\afstuderen\development\simulator_via_code_generator\data\tests\dev_transformed.cif"/>
          <event xmi:type="expressions:EventExpression" xmi:id="701" event="311">
            <position xmi:type="position:Position" xmi:id="702" source="File &quot;../data/tests\dev_transformed.cif&quot;: " startLine="217" endOffset="5632" startColumn="10" endLine="217" endColumn="12" startOffset="5630" location="C:\Users\rober\Documents\studie\afstuderen\development\simulator_via_code_generator\data\tests\dev_transformed.cif"/>
            <type xmi:type="types:BoolType" xmi:id="703">
              <position xmi:type="position:Position" xmi:id="704" source="File &quot;../data/tests\dev_transformed.cif&quot;: " startLine="217" endOffset="5632" startColumn="10" endLine="217" endColumn="12" startOffset="5630" location="C:\Users\rober\Documents\studie\afstuderen\development\simulator_via_code_generator\data\tests\dev_transformed.cif"/>
            </type>
          </event>
        </events>
      </edges>
      <edges xmi:type="automata:Edge" xmi:id="705" target="539">
        <position xmi:type="position:Position" xmi:id="706" source="File &quot;../data/tests\dev_transformed.cif&quot;: " startLine="218" endOffset="5651" startColumn="5" endLine="218" endColumn="8" startOffset="5648" location="C:\Users\rober\Documents\studie\afstuderen\development\simulator_via_code_generator\data\tests\dev_transformed.cif"/>
        <events xmi:type="automata:EdgeEvent" xmi:id="707">
          <position xmi:type="position:Position" xmi:id="708" source="File &quot;../data/tests\dev_transformed.cif&quot;: " startLine="218" endOffset="5655" startColumn="10" endLine="218" endColumn="12" startOffset="5653" location="C:\Users\rober\Documents\studie\afstuderen\development\simulator_via_code_generator\data\tests\dev_transformed.cif"/>
          <event xmi:type="expressions:EventExpression" xmi:id="709" event="313">
            <position xmi:type="position:Position" xmi:id="710" source="File &quot;../data/tests\dev_transformed.cif&quot;: " startLine="218" endOffset="5655" startColumn="10" endLine="218" endColumn="12" startOffset="5653" location="C:\Users\rober\Documents\studie\afstuderen\development\simulator_via_code_generator\data\tests\dev_transformed.cif"/>
            <type xmi:type="types:BoolType" xmi:id="711">
              <position xmi:type="position:Position" xmi:id="712" source="File &quot;../data/tests\dev_transformed.cif&quot;: " startLine="218" endOffset="5655" startColumn="10" endLine="218" endColumn="12" startOffset="5653" location="C:\Users\rober\Documents\studie\afstuderen\development\simulator_via_code_generator\data\tests\dev_transformed.cif"/>
            </type>
          </event>
        </events>
      </edges>
      <edges xmi:type="automata:Edge" xmi:id="713" target="609">
        <position xmi:type="position:Position" xmi:id="714" source="File &quot;../data/tests\dev_transformed.cif&quot;: " startLine="219" endOffset="5674" startColumn="5" endLine="219" endColumn="8" startOffset="5671" location="C:\Users\rober\Documents\studie\afstuderen\development\simulator_via_code_generator\data\tests\dev_transformed.cif"/>
        <events xmi:type="automata:EdgeEvent" xmi:id="715">
          <position xmi:type="position:Position" xmi:id="716" source="File &quot;../data/tests\dev_transformed.cif&quot;: " startLine="219" endOffset="5678" startColumn="10" endLine="219" endColumn="12" startOffset="5676" location="C:\Users\rober\Documents\studie\afstuderen\development\simulator_via_code_generator\data\tests\dev_transformed.cif"/>
          <event xmi:type="expressions:EventExpression" xmi:id="717" event="315">
            <position xmi:type="position:Position" xmi:id="718" source="File &quot;../data/tests\dev_transformed.cif&quot;: " startLine="219" endOffset="5678" startColumn="10" endLine="219" endColumn="12" startOffset="5676" location="C:\Users\rober\Documents\studie\afstuderen\development\simulator_via_code_generator\data\tests\dev_transformed.cif"/>
            <type xmi:type="types:BoolType" xmi:id="719">
              <position xmi:type="position:Position" xmi:id="720" source="File &quot;../data/tests\dev_transformed.cif&quot;: " startLine="219" endOffset="5678" startColumn="10" endLine="219" endColumn="12" startOffset="5676" location="C:\Users\rober\Documents\studie\afstuderen\development\simulator_via_code_generator\data\tests\dev_transformed.cif"/>
            </type>
          </event>
        </events>
      </edges>
      <edges xmi:type="automata:Edge" xmi:id="721" target="749">
        <position xmi:type="position:Position" xmi:id="722" source="File &quot;../data/tests\dev_transformed.cif&quot;: " startLine="220" endOffset="5697" startColumn="5" endLine="220" endColumn="8" startOffset="5694" location="C:\Users\rober\Documents\studie\afstuderen\development\simulator_via_code_generator\data\tests\dev_transformed.cif"/>
        <events xmi:type="automata:EdgeEvent" xmi:id="723">
          <position xmi:type="position:Position" xmi:id="724" source="File &quot;../data/tests\dev_transformed.cif&quot;: " startLine="220" endOffset="5701" startColumn="10" endLine="220" endColumn="12" startOffset="5699" location="C:\Users\rober\Documents\studie\afstuderen\development\simulator_via_code_generator\data\tests\dev_transformed.cif"/>
          <event xmi:type="expressions:EventExpression" xmi:id="725" event="319">
            <position xmi:type="position:Position" xmi:id="726" source="File &quot;../data/tests\dev_transformed.cif&quot;: " startLine="220" endOffset="5701" startColumn="10" endLine="220" endColumn="12" startOffset="5699" location="C:\Users\rober\Documents\studie\afstuderen\development\simulator_via_code_generator\data\tests\dev_transformed.cif"/>
            <type xmi:type="types:BoolType" xmi:id="727">
              <position xmi:type="position:Position" xmi:id="728" source="File &quot;../data/tests\dev_transformed.cif&quot;: " startLine="220" endOffset="5701" startColumn="10" endLine="220" endColumn="12" startOffset="5699" location="C:\Users\rober\Documents\studie\afstuderen\development\simulator_via_code_generator\data\tests\dev_transformed.cif"/>
            </type>
          </event>
        </events>
      </edges>
      <edges xmi:type="automata:Edge" xmi:id="729" target="819">
        <position xmi:type="position:Position" xmi:id="730" source="File &quot;../data/tests\dev_transformed.cif&quot;: " startLine="221" endOffset="5720" startColumn="5" endLine="221" endColumn="8" startOffset="5717" location="C:\Users\rober\Documents\studie\afstuderen\development\simulator_via_code_generator\data\tests\dev_transformed.cif"/>
        <events xmi:type="automata:EdgeEvent" xmi:id="731">
          <position xmi:type="position:Position" xmi:id="732" source="File &quot;../data/tests\dev_transformed.cif&quot;: " startLine="221" endOffset="5724" startColumn="10" endLine="221" endColumn="12" startOffset="5722" location="C:\Users\rober\Documents\studie\afstuderen\development\simulator_via_code_generator\data\tests\dev_transformed.cif"/>
          <event xmi:type="expressions:EventExpression" xmi:id="733" event="321">
            <position xmi:type="position:Position" xmi:id="734" source="File &quot;../data/tests\dev_transformed.cif&quot;: " startLine="221" endOffset="5724" startColumn="10" endLine="221" endColumn="12" startOffset="5722" location="C:\Users\rober\Documents\studie\afstuderen\development\simulator_via_code_generator\data\tests\dev_transformed.cif"/>
            <type xmi:type="types:BoolType" xmi:id="735">
              <position xmi:type="position:Position" xmi:id="736" source="File &quot;../data/tests\dev_transformed.cif&quot;: " startLine="221" endOffset="5724" startColumn="10" endLine="221" endColumn="12" startOffset="5722" location="C:\Users\rober\Documents\studie\afstuderen\development\simulator_via_code_generator\data\tests\dev_transformed.cif"/>
            </type>
          </event>
        </events>
      </edges>
      <edges xmi:type="automata:Edge" xmi:id="737" target="889">
        <position xmi:type="position:Position" xmi:id="738" source="File &quot;../data/tests\dev_transformed.cif&quot;: " startLine="222" endOffset="5743" startColumn="5" endLine="222" endColumn="8" startOffset="5740" location="C:\Users\rober\Documents\studie\afstuderen\development\simulator_via_code_generator\data\tests\dev_transformed.cif"/>
        <events xmi:type="automata:EdgeEvent" xmi:id="739">
          <position xmi:type="position:Position" xmi:id="740" source="File &quot;../data/tests\dev_transformed.cif&quot;: " startLine="222" endOffset="5747" startColumn="10" endLine="222" endColumn="12" startOffset="5745" location="C:\Users\rober\Documents\studie\afstuderen\development\simulator_via_code_generator\data\tests\dev_transformed.cif"/>
          <event xmi:type="expressions:EventExpression" xmi:id="741" event="323">
            <position xmi:type="position:Position" xmi:id="742" source="File &quot;../data/tests\dev_transformed.cif&quot;: " startLine="222" endOffset="5747" startColumn="10" endLine="222" endColumn="12" startOffset="5745" location="C:\Users\rober\Documents\studie\afstuderen\development\simulator_via_code_generator\data\tests\dev_transformed.cif"/>
            <type xmi:type="types:BoolType" xmi:id="743">
              <position xmi:type="position:Position" xmi:id="744" source="File &quot;../data/tests\dev_transformed.cif&quot;: " startLine="222" endOffset="5747" startColumn="10" endLine="222" endColumn="12" startOffset="5745" location="C:\Users\rober\Documents\studie\afstuderen\development\simulator_via_code_generator\data\tests\dev_transformed.cif"/>
            </type>
          </event>
        </events>
      </edges>
      <markeds xmi:type="expressions:BoolExpression" xmi:id="745" value="true">
        <position xmi:type="position:Position" xmi:id="746" source="File &quot;../data/tests\dev_transformed.cif&quot;: " startLine="214" endOffset="5571" startColumn="5" endLine="214" endColumn="10" startOffset="5566" location="C:\Users\rober\Documents\studie\afstuderen\development\simulator_via_code_generator\data\tests\dev_transformed.cif"/>
        <type xmi:type="types:BoolType" xmi:id="747">
          <position xmi:type="position:Position" xmi:id="748" source="File &quot;../data/tests\dev_transformed.cif&quot;: " startLine="214" endOffset="5571" startColumn="5" endLine="214" endColumn="10" startOffset="5566" location="C:\Users\rober\Documents\studie\afstuderen\development\simulator_via_code_generator\data\tests\dev_transformed.cif"/>
        </type>
      </markeds>
    </locations>
    <locations xmi:type="automata:Location" xmi:id="749" name="s6">
      <position xmi:type="position:Position" xmi:id="750" source="File &quot;../data/tests\dev_transformed.cif&quot;: " startLine="223" endOffset="5771" startColumn="12" endLine="223" endColumn="13" startOffset="5770" location="C:\Users\rober\Documents\studie\afstuderen\development\simulator_via_code_generator\data\tests\dev_transformed.cif"/>
      <edges xmi:type="automata:Edge" xmi:id="751" target="325">
        <position xmi:type="position:Position" xmi:id="752" source="File &quot;../data/tests\dev_transformed.cif&quot;: " startLine="225" endOffset="5795" startColumn="5" endLine="225" endColumn="8" startOffset="5792" location="C:\Users\rober\Documents\studie\afstuderen\development\simulator_via_code_generator\data\tests\dev_transformed.cif"/>
        <events xmi:type="automata:EdgeEvent" xmi:id="753">
          <position xmi:type="position:Position" xmi:id="754" source="File &quot;../data/tests\dev_transformed.cif&quot;: " startLine="225" endOffset="5799" startColumn="10" endLine="225" endColumn="12" startOffset="5797" location="C:\Users\rober\Documents\studie\afstuderen\development\simulator_via_code_generator\data\tests\dev_transformed.cif"/>
          <event xmi:type="expressions:EventExpression" xmi:id="755" event="307">
            <position xmi:type="position:Position" xmi:id="756" source="File &quot;../data/tests\dev_transformed.cif&quot;: " startLine="225" endOffset="5799" startColumn="10" endLine="225" endColumn="12" startOffset="5797" location="C:\Users\rober\Documents\studie\afstuderen\development\simulator_via_code_generator\data\tests\dev_transformed.cif"/>
            <type xmi:type="types:BoolType" xmi:id="757">
              <position xmi:type="position:Position" xmi:id="758" source="File &quot;../data/tests\dev_transformed.cif&quot;: " startLine="225" endOffset="5799" startColumn="10" endLine="225" endColumn="12" startOffset="5797" location="C:\Users\rober\Documents\studie\afstuderen\development\simulator_via_code_generator\data\tests\dev_transformed.cif"/>
            </type>
          </event>
        </events>
      </edges>
      <edges xmi:type="automata:Edge" xmi:id="759" target="399">
        <position xmi:type="position:Position" xmi:id="760" source="File &quot;../data/tests\dev_transformed.cif&quot;: " startLine="226" endOffset="5818" startColumn="5" endLine="226" endColumn="8" startOffset="5815" location="C:\Users\rober\Documents\studie\afstuderen\development\simulator_via_code_generator\data\tests\dev_transformed.cif"/>
        <events xmi:type="automata:EdgeEvent" xmi:id="761">
          <position xmi:type="position:Position" xmi:id="762" source="File &quot;../data/tests\dev_transformed.cif&quot;: " startLine="226" endOffset="5822" startColumn="10" endLine="226" endColumn="12" startOffset="5820" location="C:\Users\rober\Documents\studie\afstuderen\development\simulator_via_code_generator\data\tests\dev_transformed.cif"/>
          <event xmi:type="expressions:EventExpression" xmi:id="763" event="309">
            <position xmi:type="position:Position" xmi:id="764" source="File &quot;../data/tests\dev_transformed.cif&quot;: " startLine="226" endOffset="5822" startColumn="10" endLine="226" endColumn="12" startOffset="5820" location="C:\Users\rober\Documents\studie\afstuderen\development\simulator_via_code_generator\data\tests\dev_transformed.cif"/>
            <type xmi:type="types:BoolType" xmi:id="765">
              <position xmi:type="position:Position" xmi:id="766" source="File &quot;../data/tests\dev_transformed.cif&quot;: " startLine="226" endOffset="5822" startColumn="10" endLine="226" endColumn="12" startOffset="5820" location="C:\Users\rober\Documents\studie\afstuderen\development\simulator_via_code_generator\data\tests\dev_transformed.cif"/>
            </type>
          </event>
        </events>
      </edges>
      <edges xmi:type="automata:Edge" xmi:id="767" target="469">
        <position xmi:type="position:Position" xmi:id="768" source="File &quot;../data/tests\dev_transformed.cif&quot;: " startLine="227" endOffset="5841" startColumn="5" endLine="227" endColumn="8" startOffset="5838" location="C:\Users\rober\Documents\studie\afstuderen\development\simulator_via_code_generator\data\tests\dev_transformed.cif"/>
        <events xmi:type="automata:EdgeEvent" xmi:id="769">
          <position xmi:type="position:Position" xmi:id="770" source="File &quot;../data/tests\dev_transformed.cif&quot;: " startLine="227" endOffset="5845" startColumn="10" endLine="227" endColumn="12" startOffset="5843" location="C:\Users\rober\Documents\studie\afstuderen\development\simulator_via_code_generator\data\tests\dev_transformed.cif"/>
          <event xmi:type="expressions:EventExpression" xmi:id="771" event="311">
            <position xmi:type="position:Position" xmi:id="772" source="File &quot;../data/tests\dev_transformed.cif&quot;: " startLine="227" endOffset="5845" startColumn="10" endLine="227" endColumn="12" startOffset="5843" location="C:\Users\rober\Documents\studie\afstuderen\development\simulator_via_code_generator\data\tests\dev_transformed.cif"/>
            <type xmi:type="types:BoolType" xmi:id="773">
              <position xmi:type="position:Position" xmi:id="774" source="File &quot;../data/tests\dev_transformed.cif&quot;: " startLine="227" endOffset="5845" startColumn="10" endLine="227" endColumn="12" startOffset="5843" location="C:\Users\rober\Documents\studie\afstuderen\development\simulator_via_code_generator\data\tests\dev_transformed.cif"/>
            </type>
          </event>
        </events>
      </edges>
      <edges xmi:type="automata:Edge" xmi:id="775" target="539">
        <position xmi:type="position:Position" xmi:id="776" source="File &quot;../data/tests\dev_transformed.cif&quot;: " startLine="228" endOffset="5864" startColumn="5" endLine="228" endColumn="8" startOffset="5861" location="C:\Users\rober\Documents\studie\afstuderen\development\simulator_via_code_generator\data\tests\dev_transformed.cif"/>
        <events xmi:type="automata:EdgeEvent" xmi:id="777">
          <position xmi:type="position:Position" xmi:id="778" source="File &quot;../data/tests\dev_transformed.cif&quot;: " startLine="228" endOffset="5868" startColumn="10" endLine="228" endColumn="12" startOffset="5866" location="C:\Users\rober\Documents\studie\afstuderen\development\simulator_via_code_generator\data\tests\dev_transformed.cif"/>
          <event xmi:type="expressions:EventExpression" xmi:id="779" event="313">
            <position xmi:type="position:Position" xmi:id="780" source="File &quot;../data/tests\dev_transformed.cif&quot;: " startLine="228" endOffset="5868" startColumn="10" endLine="228" endColumn="12" startOffset="5866" location="C:\Users\rober\Documents\studie\afstuderen\development\simulator_via_code_generator\data\tests\dev_transformed.cif"/>
            <type xmi:type="types:BoolType" xmi:id="781">
              <position xmi:type="position:Position" xmi:id="782" source="File &quot;../data/tests\dev_transformed.cif&quot;: " startLine="228" endOffset="5868" startColumn="10" endLine="228" endColumn="12" startOffset="5866" location="C:\Users\rober\Documents\studie\afstuderen\development\simulator_via_code_generator\data\tests\dev_transformed.cif"/>
            </type>
          </event>
        </events>
      </edges>
      <edges xmi:type="automata:Edge" xmi:id="783" target="609">
        <position xmi:type="position:Position" xmi:id="784" source="File &quot;../data/tests\dev_transformed.cif&quot;: " startLine="229" endOffset="5887" startColumn="5" endLine="229" endColumn="8" startOffset="5884" location="C:\Users\rober\Documents\studie\afstuderen\development\simulator_via_code_generator\data\tests\dev_transformed.cif"/>
        <events xmi:type="automata:EdgeEvent" xmi:id="785">
          <position xmi:type="position:Position" xmi:id="786" source="File &quot;../data/tests\dev_transformed.cif&quot;: " startLine="229" endOffset="5891" startColumn="10" endLine="229" endColumn="12" startOffset="5889" location="C:\Users\rober\Documents\studie\afstuderen\development\simulator_via_code_generator\data\tests\dev_transformed.cif"/>
          <event xmi:type="expressions:EventExpression" xmi:id="787" event="315">
            <position xmi:type="position:Position" xmi:id="788" source="File &quot;../data/tests\dev_transformed.cif&quot;: " startLine="229" endOffset="5891" startColumn="10" endLine="229" endColumn="12" startOffset="5889" location="C:\Users\rober\Documents\studie\afstuderen\development\simulator_via_code_generator\data\tests\dev_transformed.cif"/>
            <type xmi:type="types:BoolType" xmi:id="789">
              <position xmi:type="position:Position" xmi:id="790" source="File &quot;../data/tests\dev_transformed.cif&quot;: " startLine="229" endOffset="5891" startColumn="10" endLine="229" endColumn="12" startOffset="5889" location="C:\Users\rober\Documents\studie\afstuderen\development\simulator_via_code_generator\data\tests\dev_transformed.cif"/>
            </type>
          </event>
        </events>
      </edges>
      <edges xmi:type="automata:Edge" xmi:id="791" target="679">
        <position xmi:type="position:Position" xmi:id="792" source="File &quot;../data/tests\dev_transformed.cif&quot;: " startLine="230" endOffset="5910" startColumn="5" endLine="230" endColumn="8" startOffset="5907" location="C:\Users\rober\Documents\studie\afstuderen\development\simulator_via_code_generator\data\tests\dev_transformed.cif"/>
        <events xmi:type="automata:EdgeEvent" xmi:id="793">
          <position xmi:type="position:Position" xmi:id="794" source="File &quot;../data/tests\dev_transformed.cif&quot;: " startLine="230" endOffset="5914" startColumn="10" endLine="230" endColumn="12" startOffset="5912" location="C:\Users\rober\Documents\studie\afstuderen\development\simulator_via_code_generator\data\tests\dev_transformed.cif"/>
          <event xmi:type="expressions:EventExpression" xmi:id="795" event="317">
            <position xmi:type="position:Position" xmi:id="796" source="File &quot;../data/tests\dev_transformed.cif&quot;: " startLine="230" endOffset="5914" startColumn="10" endLine="230" endColumn="12" startOffset="5912" location="C:\Users\rober\Documents\studie\afstuderen\development\simulator_via_code_generator\data\tests\dev_transformed.cif"/>
            <type xmi:type="types:BoolType" xmi:id="797">
              <position xmi:type="position:Position" xmi:id="798" source="File &quot;../data/tests\dev_transformed.cif&quot;: " startLine="230" endOffset="5914" startColumn="10" endLine="230" endColumn="12" startOffset="5912" location="C:\Users\rober\Documents\studie\afstuderen\development\simulator_via_code_generator\data\tests\dev_transformed.cif"/>
            </type>
          </event>
        </events>
      </edges>
      <edges xmi:type="automata:Edge" xmi:id="799" target="819">
        <position xmi:type="position:Position" xmi:id="800" source="File &quot;../data/tests\dev_transformed.cif&quot;: " startLine="231" endOffset="5933" startColumn="5" endLine="231" endColumn="8" startOffset="5930" location="C:\Users\rober\Documents\studie\afstuderen\development\simulator_via_code_generator\data\tests\dev_transformed.cif"/>
        <events xmi:type="automata:EdgeEvent" xmi:id="801">
          <position xmi:type="position:Position" xmi:id="802" source="File &quot;../data/tests\dev_transformed.cif&quot;: " startLine="231" endOffset="5937" startColumn="10" endLine="231" endColumn="12" startOffset="5935" location="C:\Users\rober\Documents\studie\afstuderen\development\simulator_via_code_generator\data\tests\dev_transformed.cif"/>
          <event xmi:type="expressions:EventExpression" xmi:id="803" event="321">
            <position xmi:type="position:Position" xmi:id="804" source="File &quot;../data/tests\dev_transformed.cif&quot;: " startLine="231" endOffset="5937" startColumn="10" endLine="231" endColumn="12" startOffset="5935" location="C:\Users\rober\Documents\studie\afstuderen\development\simulator_via_code_generator\data\tests\dev_transformed.cif"/>
            <type xmi:type="types:BoolType" xmi:id="805">
              <position xmi:type="position:Position" xmi:id="806" source="File &quot;../data/tests\dev_transformed.cif&quot;: " startLine="231" endOffset="5937" startColumn="10" endLine="231" endColumn="12" startOffset="5935" location="C:\Users\rober\Documents\studie\afstuderen\development\simulator_via_code_generator\data\tests\dev_transformed.cif"/>
            </type>
          </event>
        </events>
      </edges>
      <edges xmi:type="automata:Edge" xmi:id="807" target="889">
        <position xmi:type="position:Position" xmi:id="808" source="File &quot;../data/tests\dev_transformed.cif&quot;: " startLine="232" endOffset="5956" startColumn="5" endLine="232" endColumn="8" startOffset="5953" location="C:\Users\rober\Documents\studie\afstuderen\development\simulator_via_code_generator\data\tests\dev_transformed.cif"/>
        <events xmi:type="automata:EdgeEvent" xmi:id="809">
          <position xmi:type="position:Position" xmi:id="810" source="File &quot;../data/tests\dev_transformed.cif&quot;: " startLine="232" endOffset="5960" startColumn="10" endLine="232" endColumn="12" startOffset="5958" location="C:\Users\rober\Documents\studie\afstuderen\development\simulator_via_code_generator\data\tests\dev_transformed.cif"/>
          <event xmi:type="expressions:EventExpression" xmi:id="811" event="323">
            <position xmi:type="position:Position" xmi:id="812" source="File &quot;../data/tests\dev_transformed.cif&quot;: " startLine="232" endOffset="5960" startColumn="10" endLine="232" endColumn="12" startOffset="5958" location="C:\Users\rober\Documents\studie\afstuderen\development\simulator_via_code_generator\data\tests\dev_transformed.cif"/>
            <type xmi:type="types:BoolType" xmi:id="813">
              <position xmi:type="position:Position" xmi:id="814" source="File &quot;../data/tests\dev_transformed.cif&quot;: " startLine="232" endOffset="5960" startColumn="10" endLine="232" endColumn="12" startOffset="5958" location="C:\Users\rober\Documents\studie\afstuderen\development\simulator_via_code_generator\data\tests\dev_transformed.cif"/>
            </type>
          </event>
        </events>
      </edges>
      <markeds xmi:type="expressions:BoolExpression" xmi:id="815" value="true">
        <position xmi:type="position:Position" xmi:id="816" source="File &quot;../data/tests\dev_transformed.cif&quot;: " startLine="224" endOffset="5784" startColumn="5" endLine="224" endColumn="10" startOffset="5779" location="C:\Users\rober\Documents\studie\afstuderen\development\simulator_via_code_generator\data\tests\dev_transformed.cif"/>
        <type xmi:type="types:BoolType" xmi:id="817">
          <position xmi:type="position:Position" xmi:id="818" source="File &quot;../data/tests\dev_transformed.cif&quot;: " startLine="224" endOffset="5784" startColumn="5" endLine="224" endColumn="10" startOffset="5779" location="C:\Users\rober\Documents\studie\afstuderen\development\simulator_via_code_generator\data\tests\dev_transformed.cif"/>
        </type>
      </markeds>
    </locations>
    <locations xmi:type="automata:Location" xmi:id="819" name="s7">
      <position xmi:type="position:Position" xmi:id="820" source="File &quot;../data/tests\dev_transformed.cif&quot;: " startLine="233" endOffset="5984" startColumn="12" endLine="233" endColumn="13" startOffset="5983" location="C:\Users\rober\Documents\studie\afstuderen\development\simulator_via_code_generator\data\tests\dev_transformed.cif"/>
      <edges xmi:type="automata:Edge" xmi:id="821" target="325">
        <position xmi:type="position:Position" xmi:id="822" source="File &quot;../data/tests\dev_transformed.cif&quot;: " startLine="235" endOffset="6008" startColumn="5" endLine="235" endColumn="8" startOffset="6005" location="C:\Users\rober\Documents\studie\afstuderen\development\simulator_via_code_generator\data\tests\dev_transformed.cif"/>
        <events xmi:type="automata:EdgeEvent" xmi:id="823">
          <position xmi:type="position:Position" xmi:id="824" source="File &quot;../data/tests\dev_transformed.cif&quot;: " startLine="235" endOffset="6012" startColumn="10" endLine="235" endColumn="12" startOffset="6010" location="C:\Users\rober\Documents\studie\afstuderen\development\simulator_via_code_generator\data\tests\dev_transformed.cif"/>
          <event xmi:type="expressions:EventExpression" xmi:id="825" event="307">
            <position xmi:type="position:Position" xmi:id="826" source="File &quot;../data/tests\dev_transformed.cif&quot;: " startLine="235" endOffset="6012" startColumn="10" endLine="235" endColumn="12" startOffset="6010" location="C:\Users\rober\Documents\studie\afstuderen\development\simulator_via_code_generator\data\tests\dev_transformed.cif"/>
            <type xmi:type="types:BoolType" xmi:id="827">
              <position xmi:type="position:Position" xmi:id="828" source="File &quot;../data/tests\dev_transformed.cif&quot;: " startLine="235" endOffset="6012" startColumn="10" endLine="235" endColumn="12" startOffset="6010" location="C:\Users\rober\Documents\studie\afstuderen\development\simulator_via_code_generator\data\tests\dev_transformed.cif"/>
            </type>
          </event>
        </events>
      </edges>
      <edges xmi:type="automata:Edge" xmi:id="829" target="399">
        <position xmi:type="position:Position" xmi:id="830" source="File &quot;../data/tests\dev_transformed.cif&quot;: " startLine="236" endOffset="6031" startColumn="5" endLine="236" endColumn="8" startOffset="6028" location="C:\Users\rober\Documents\studie\afstuderen\development\simulator_via_code_generator\data\tests\dev_transformed.cif"/>
        <events xmi:type="automata:EdgeEvent" xmi:id="831">
          <position xmi:type="position:Position" xmi:id="832" source="File &quot;../data/tests\dev_transformed.cif&quot;: " startLine="236" endOffset="6035" startColumn="10" endLine="236" endColumn="12" startOffset="6033" location="C:\Users\rober\Documents\studie\afstuderen\development\simulator_via_code_generator\data\tests\dev_transformed.cif"/>
          <event xmi:type="expressions:EventExpression" xmi:id="833" event="309">
            <position xmi:type="position:Position" xmi:id="834" source="File &quot;../data/tests\dev_transformed.cif&quot;: " startLine="236" endOffset="6035" startColumn="10" endLine="236" endColumn="12" startOffset="6033" location="C:\Users\rober\Documents\studie\afstuderen\development\simulator_via_code_generator\data\tests\dev_transformed.cif"/>
            <type xmi:type="types:BoolType" xmi:id="835">
              <position xmi:type="position:Position" xmi:id="836" source="File &quot;../data/tests\dev_transformed.cif&quot;: " startLine="236" endOffset="6035" startColumn="10" endLine="236" endColumn="12" startOffset="6033" location="C:\Users\rober\Documents\studie\afstuderen\development\simulator_via_code_generator\data\tests\dev_transformed.cif"/>
            </type>
          </event>
        </events>
      </edges>
      <edges xmi:type="automata:Edge" xmi:id="837" target="469">
        <position xmi:type="position:Position" xmi:id="838" source="File &quot;../data/tests\dev_transformed.cif&quot;: " startLine="237" endOffset="6054" startColumn="5" endLine="237" endColumn="8" startOffset="6051" location="C:\Users\rober\Documents\studie\afstuderen\development\simulator_via_code_generator\data\tests\dev_transformed.cif"/>
        <events xmi:type="automata:EdgeEvent" xmi:id="839">
          <position xmi:type="position:Position" xmi:id="840" source="File &quot;../data/tests\dev_transformed.cif&quot;: " startLine="237" endOffset="6058" startColumn="10" endLine="237" endColumn="12" startOffset="6056" location="C:\Users\rober\Documents\studie\afstuderen\development\simulator_via_code_generator\data\tests\dev_transformed.cif"/>
          <event xmi:type="expressions:EventExpression" xmi:id="841" event="311">
            <position xmi:type="position:Position" xmi:id="842" source="File &quot;../data/tests\dev_transformed.cif&quot;: " startLine="237" endOffset="6058" startColumn="10" endLine="237" endColumn="12" startOffset="6056" location="C:\Users\rober\Documents\studie\afstuderen\development\simulator_via_code_generator\data\tests\dev_transformed.cif"/>
            <type xmi:type="types:BoolType" xmi:id="843">
              <position xmi:type="position:Position" xmi:id="844" source="File &quot;../data/tests\dev_transformed.cif&quot;: " startLine="237" endOffset="6058" startColumn="10" endLine="237" endColumn="12" startOffset="6056" location="C:\Users\rober\Documents\studie\afstuderen\development\simulator_via_code_generator\data\tests\dev_transformed.cif"/>
            </type>
          </event>
        </events>
      </edges>
      <edges xmi:type="automata:Edge" xmi:id="845" target="539">
        <position xmi:type="position:Position" xmi:id="846" source="File &quot;../data/tests\dev_transformed.cif&quot;: " startLine="238" endOffset="6077" startColumn="5" endLine="238" endColumn="8" startOffset="6074" location="C:\Users\rober\Documents\studie\afstuderen\development\simulator_via_code_generator\data\tests\dev_transformed.cif"/>
        <events xmi:type="automata:EdgeEvent" xmi:id="847">
          <position xmi:type="position:Position" xmi:id="848" source="File &quot;../data/tests\dev_transformed.cif&quot;: " startLine="238" endOffset="6081" startColumn="10" endLine="238" endColumn="12" startOffset="6079" location="C:\Users\rober\Documents\studie\afstuderen\development\simulator_via_code_generator\data\tests\dev_transformed.cif"/>
          <event xmi:type="expressions:EventExpression" xmi:id="849" event="313">
            <position xmi:type="position:Position" xmi:id="850" source="File &quot;../data/tests\dev_transformed.cif&quot;: " startLine="238" endOffset="6081" startColumn="10" endLine="238" endColumn="12" startOffset="6079" location="C:\Users\rober\Documents\studie\afstuderen\development\simulator_via_code_generator\data\tests\dev_transformed.cif"/>
            <type xmi:type="types:BoolType" xmi:id="851">
              <position xmi:type="position:Position" xmi:id="852" source="File &quot;../data/tests\dev_transformed.cif&quot;: " startLine="238" endOffset="6081" startColumn="10" endLine="238" endColumn="12" startOffset="6079" location="C:\Users\rober\Documents\studie\afstuderen\development\simulator_via_code_generator\data\tests\dev_transformed.cif"/>
            </type>
          </event>
        </events>
      </edges>
      <edges xmi:type="automata:Edge" xmi:id="853" target="609">
        <position xmi:type="position:Position" xmi:id="854" source="File &quot;../data/tests\dev_transformed.cif&quot;: " startLine="239" endOffset="6100" startColumn="5" endLine="239" endColumn="8" startOffset="6097" location="C:\Users\rober\Documents\studie\afstuderen\development\simulator_via_code_generator\data\tests\dev_transformed.cif"/>
        <events xmi:type="automata:EdgeEvent" xmi:id="855">
          <position xmi:type="position:Position" xmi:id="856" source="File &quot;../data/tests\dev_transformed.cif&quot;: " startLine="239" endOffset="6104" startColumn="10" endLine="239" endColumn="12" startOffset="6102" location="C:\Users\rober\Documents\studie\afstuderen\development\simulator_via_code_generator\data\tests\dev_transformed.cif"/>
          <event xmi:type="expressions:EventExpression" xmi:id="857" event="315">
            <position xmi:type="position:Position" xmi:id="858" source="File &quot;../data/tests\dev_transformed.cif&quot;: " startLine="239" endOffset="6104" startColumn="10" endLine="239" endColumn="12" startOffset="6102" location="C:\Users\rober\Documents\studie\afstuderen\development\simulator_via_code_generator\data\tests\dev_transformed.cif"/>
            <type xmi:type="types:BoolType" xmi:id="859">
              <position xmi:type="position:Position" xmi:id="860" source="File &quot;../data/tests\dev_transformed.cif&quot;: " startLine="239" endOffset="6104" startColumn="10" endLine="239" endColumn="12" startOffset="6102" location="C:\Users\rober\Documents\studie\afstuderen\development\simulator_via_code_generator\data\tests\dev_transformed.cif"/>
            </type>
          </event>
        </events>
      </edges>
      <edges xmi:type="automata:Edge" xmi:id="861" target="679">
        <position xmi:type="position:Position" xmi:id="862" source="File &quot;../data/tests\dev_transformed.cif&quot;: " startLine="240" endOffset="6123" startColumn="5" endLine="240" endColumn="8" startOffset="6120" location="C:\Users\rober\Documents\studie\afstuderen\development\simulator_via_code_generator\data\tests\dev_transformed.cif"/>
        <events xmi:type="automata:EdgeEvent" xmi:id="863">
          <position xmi:type="position:Position" xmi:id="864" source="File &quot;../data/tests\dev_transformed.cif&quot;: " startLine="240" endOffset="6127" startColumn="10" endLine="240" endColumn="12" startOffset="6125" location="C:\Users\rober\Documents\studie\afstuderen\development\simulator_via_code_generator\data\tests\dev_transformed.cif"/>
          <event xmi:type="expressions:EventExpression" xmi:id="865" event="317">
            <position xmi:type="position:Position" xmi:id="866" source="File &quot;../data/tests\dev_transformed.cif&quot;: " startLine="240" endOffset="6127" startColumn="10" endLine="240" endColumn="12" startOffset="6125" location="C:\Users\rober\Documents\studie\afstuderen\development\simulator_via_code_generator\data\tests\dev_transformed.cif"/>
            <type xmi:type="types:BoolType" xmi:id="867">
              <position xmi:type="position:Position" xmi:id="868" source="File &quot;../data/tests\dev_transformed.cif&quot;: " startLine="240" endOffset="6127" startColumn="10" endLine="240" endColumn="12" startOffset="6125" location="C:\Users\rober\Documents\studie\afstuderen\development\simulator_via_code_generator\data\tests\dev_transformed.cif"/>
            </type>
          </event>
        </events>
      </edges>
      <edges xmi:type="automata:Edge" xmi:id="869" target="749">
        <position xmi:type="position:Position" xmi:id="870" source="File &quot;../data/tests\dev_transformed.cif&quot;: " startLine="241" endOffset="6146" startColumn="5" endLine="241" endColumn="8" startOffset="6143" location="C:\Users\rober\Documents\studie\afstuderen\development\simulator_via_code_generator\data\tests\dev_transformed.cif"/>
        <events xmi:type="automata:EdgeEvent" xmi:id="871">
          <position xmi:type="position:Position" xmi:id="872" source="File &quot;../data/tests\dev_transformed.cif&quot;: " startLine="241" endOffset="6150" startColumn="10" endLine="241" endColumn="12" startOffset="6148" location="C:\Users\rober\Documents\studie\afstuderen\development\simulator_via_code_generator\data\tests\dev_transformed.cif"/>
          <event xmi:type="expressions:EventExpression" xmi:id="873" event="319">
            <position xmi:type="position:Position" xmi:id="874" source="File &quot;../data/tests\dev_transformed.cif&quot;: " startLine="241" endOffset="6150" startColumn="10" endLine="241" endColumn="12" startOffset="6148" location="C:\Users\rober\Documents\studie\afstuderen\development\simulator_via_code_generator\data\tests\dev_transformed.cif"/>
            <type xmi:type="types:BoolType" xmi:id="875">
              <position xmi:type="position:Position" xmi:id="876" source="File &quot;../data/tests\dev_transformed.cif&quot;: " startLine="241" endOffset="6150" startColumn="10" endLine="241" endColumn="12" startOffset="6148" location="C:\Users\rober\Documents\studie\afstuderen\development\simulator_via_code_generator\data\tests\dev_transformed.cif"/>
            </type>
          </event>
        </events>
      </edges>
      <edges xmi:type="automata:Edge" xmi:id="877" target="889">
        <position xmi:type="position:Position" xmi:id="878" source="File &quot;../data/tests\dev_transformed.cif&quot;: " startLine="242" endOffset="6169" startColumn="5" endLine="242" endColumn="8" startOffset="6166" location="C:\Users\rober\Documents\studie\afstuderen\development\simulator_via_code_generator\data\tests\dev_transformed.cif"/>
        <events xmi:type="automata:EdgeEvent" xmi:id="879">
          <position xmi:type="position:Position" xmi:id="880" source="File &quot;../data/tests\dev_transformed.cif&quot;: " startLine="242" endOffset="6173" startColumn="10" endLine="242" endColumn="12" startOffset="6171" location="C:\Users\rober\Documents\studie\afstuderen\development\simulator_via_code_generator\data\tests\dev_transformed.cif"/>
          <event xmi:type="expressions:EventExpression" xmi:id="881" event="323">
            <position xmi:type="position:Position" xmi:id="882" source="File &quot;../data/tests\dev_transformed.cif&quot;: " startLine="242" endOffset="6173" startColumn="10" endLine="242" endColumn="12" startOffset="6171" location="C:\Users\rober\Documents\studie\afstuderen\development\simulator_via_code_generator\data\tests\dev_transformed.cif"/>
            <type xmi:type="types:BoolType" xmi:id="883">
              <position xmi:type="position:Position" xmi:id="884" source="File &quot;../data/tests\dev_transformed.cif&quot;: " startLine="242" endOffset="6173" startColumn="10" endLine="242" endColumn="12" startOffset="6171" location="C:\Users\rober\Documents\studie\afstuderen\development\simulator_via_code_generator\data\tests\dev_transformed.cif"/>
            </type>
          </event>
        </events>
      </edges>
      <markeds xmi:type="expressions:BoolExpression" xmi:id="885" value="true">
        <position xmi:type="position:Position" xmi:id="886" source="File &quot;../data/tests\dev_transformed.cif&quot;: " startLine="234" endOffset="5997" startColumn="5" endLine="234" endColumn="10" startOffset="5992" location="C:\Users\rober\Documents\studie\afstuderen\development\simulator_via_code_generator\data\tests\dev_transformed.cif"/>
        <type xmi:type="types:BoolType" xmi:id="887">
          <position xmi:type="position:Position" xmi:id="888" source="File &quot;../data/tests\dev_transformed.cif&quot;: " startLine="234" endOffset="5997" startColumn="5" endLine="234" endColumn="10" startOffset="5992" location="C:\Users\rober\Documents\studie\afstuderen\development\simulator_via_code_generator\data\tests\dev_transformed.cif"/>
        </type>
      </markeds>
    </locations>
    <locations xmi:type="automata:Location" xmi:id="889" name="s8">
      <position xmi:type="position:Position" xmi:id="890" source="File &quot;../data/tests\dev_transformed.cif&quot;: " startLine="243" endOffset="6197" startColumn="12" endLine="243" endColumn="13" startOffset="6196" location="C:\Users\rober\Documents\studie\afstuderen\development\simulator_via_code_generator\data\tests\dev_transformed.cif"/>
      <edges xmi:type="automata:Edge" xmi:id="891" target="325">
        <position xmi:type="position:Position" xmi:id="892" source="File &quot;../data/tests\dev_transformed.cif&quot;: " startLine="245" endOffset="6221" startColumn="5" endLine="245" endColumn="8" startOffset="6218" location="C:\Users\rober\Documents\studie\afstuderen\development\simulator_via_code_generator\data\tests\dev_transformed.cif"/>
        <events xmi:type="automata:EdgeEvent" xmi:id="893">
          <position xmi:type="position:Position" xmi:id="894" source="File &quot;../data/tests\dev_transformed.cif&quot;: " startLine="245" endOffset="6225" startColumn="10" endLine="245" endColumn="12" startOffset="6223" location="C:\Users\rober\Documents\studie\afstuderen\development\simulator_via_code_generator\data\tests\dev_transformed.cif"/>
          <event xmi:type="expressions:EventExpression" xmi:id="895" event="307">
            <position xmi:type="position:Position" xmi:id="896" source="File &quot;../data/tests\dev_transformed.cif&quot;: " startLine="245" endOffset="6225" startColumn="10" endLine="245" endColumn="12" startOffset="6223" location="C:\Users\rober\Documents\studie\afstuderen\development\simulator_via_code_generator\data\tests\dev_transformed.cif"/>
            <type xmi:type="types:BoolType" xmi:id="897">
              <position xmi:type="position:Position" xmi:id="898" source="File &quot;../data/tests\dev_transformed.cif&quot;: " startLine="245" endOffset="6225" startColumn="10" endLine="245" endColumn="12" startOffset="6223" location="C:\Users\rober\Documents\studie\afstuderen\development\simulator_via_code_generator\data\tests\dev_transformed.cif"/>
            </type>
          </event>
        </events>
      </edges>
      <edges xmi:type="automata:Edge" xmi:id="899" target="399">
        <position xmi:type="position:Position" xmi:id="900" source="File &quot;../data/tests\dev_transformed.cif&quot;: " startLine="246" endOffset="6244" startColumn="5" endLine="246" endColumn="8" startOffset="6241" location="C:\Users\rober\Documents\studie\afstuderen\development\simulator_via_code_generator\data\tests\dev_transformed.cif"/>
        <events xmi:type="automata:EdgeEvent" xmi:id="901">
          <position xmi:type="position:Position" xmi:id="902" source="File &quot;../data/tests\dev_transformed.cif&quot;: " startLine="246" endOffset="6248" startColumn="10" endLine="246" endColumn="12" startOffset="6246" location="C:\Users\rober\Documents\studie\afstuderen\development\simulator_via_code_generator\data\tests\dev_transformed.cif"/>
          <event xmi:type="expressions:EventExpression" xmi:id="903" event="309">
            <position xmi:type="position:Position" xmi:id="904" source="File &quot;../data/tests\dev_transformed.cif&quot;: " startLine="246" endOffset="6248" startColumn="10" endLine="246" endColumn="12" startOffset="6246" location="C:\Users\rober\Documents\studie\afstuderen\development\simulator_via_code_generator\data\tests\dev_transformed.cif"/>
            <type xmi:type="types:BoolType" xmi:id="905">
              <position xmi:type="position:Position" xmi:id="906" source="File &quot;../data/tests\dev_transformed.cif&quot;: " startLine="246" endOffset="6248" startColumn="10" endLine="246" endColumn="12" startOffset="6246" location="C:\Users\rober\Documents\studie\afstuderen\development\simulator_via_code_generator\data\tests\dev_transformed.cif"/>
            </type>
          </event>
        </events>
      </edges>
      <edges xmi:type="automata:Edge" xmi:id="907" target="469">
        <position xmi:type="position:Position" xmi:id="908" source="File &quot;../data/tests\dev_transformed.cif&quot;: " startLine="247" endOffset="6267" startColumn="5" endLine="247" endColumn="8" startOffset="6264" location="C:\Users\rober\Documents\studie\afstuderen\development\simulator_via_code_generator\data\tests\dev_transformed.cif"/>
        <events xmi:type="automata:EdgeEvent" xmi:id="909">
          <position xmi:type="position:Position" xmi:id="910" source="File &quot;../data/tests\dev_transformed.cif&quot;: " startLine="247" endOffset="6271" startColumn="10" endLine="247" endColumn="12" startOffset="6269" location="C:\Users\rober\Documents\studie\afstuderen\development\simulator_via_code_generator\data\tests\dev_transformed.cif"/>
          <event xmi:type="expressions:EventExpression" xmi:id="911" event="311">
            <position xmi:type="position:Position" xmi:id="912" source="File &quot;../data/tests\dev_transformed.cif&quot;: " startLine="247" endOffset="6271" startColumn="10" endLine="247" endColumn="12" startOffset="6269" location="C:\Users\rober\Documents\studie\afstuderen\development\simulator_via_code_generator\data\tests\dev_transformed.cif"/>
            <type xmi:type="types:BoolType" xmi:id="913">
              <position xmi:type="position:Position" xmi:id="914" source="File &quot;../data/tests\dev_transformed.cif&quot;: " startLine="247" endOffset="6271" startColumn="10" endLine="247" endColumn="12" startOffset="6269" location="C:\Users\rober\Documents\studie\afstuderen\development\simulator_via_code_generator\data\tests\dev_transformed.cif"/>
            </type>
          </event>
        </events>
      </edges>
      <edges xmi:type="automata:Edge" xmi:id="915" target="539">
        <position xmi:type="position:Position" xmi:id="916" source="File &quot;../data/tests\dev_transformed.cif&quot;: " startLine="248" endOffset="6290" startColumn="5" endLine="248" endColumn="8" startOffset="6287" location="C:\Users\rober\Documents\studie\afstuderen\development\simulator_via_code_generator\data\tests\dev_transformed.cif"/>
        <events xmi:type="automata:EdgeEvent" xmi:id="917">
          <position xmi:type="position:Position" xmi:id="918" source="File &quot;../data/tests\dev_transformed.cif&quot;: " startLine="248" endOffset="6294" startColumn="10" endLine="248" endColumn="12" startOffset="6292" location="C:\Users\rober\Documents\studie\afstuderen\development\simulator_via_code_generator\data\tests\dev_transformed.cif"/>
          <event xmi:type="expressions:EventExpression" xmi:id="919" event="313">
            <position xmi:type="position:Position" xmi:id="920" source="File &quot;../data/tests\dev_transformed.cif&quot;: " startLine="248" endOffset="6294" startColumn="10" endLine="248" endColumn="12" startOffset="6292" location="C:\Users\rober\Documents\studie\afstuderen\development\simulator_via_code_generator\data\tests\dev_transformed.cif"/>
            <type xmi:type="types:BoolType" xmi:id="921">
              <position xmi:type="position:Position" xmi:id="922" source="File &quot;../data/tests\dev_transformed.cif&quot;: " startLine="248" endOffset="6294" startColumn="10" endLine="248" endColumn="12" startOffset="6292" location="C:\Users\rober\Documents\studie\afstuderen\development\simulator_via_code_generator\data\tests\dev_transformed.cif"/>
            </type>
          </event>
        </events>
      </edges>
      <edges xmi:type="automata:Edge" xmi:id="923" target="609">
        <position xmi:type="position:Position" xmi:id="924" source="File &quot;../data/tests\dev_transformed.cif&quot;: " startLine="249" endOffset="6313" startColumn="5" endLine="249" endColumn="8" startOffset="6310" location="C:\Users\rober\Documents\studie\afstuderen\development\simulator_via_code_generator\data\tests\dev_transformed.cif"/>
        <events xmi:type="automata:EdgeEvent" xmi:id="925">
          <position xmi:type="position:Position" xmi:id="926" source="File &quot;../data/tests\dev_transformed.cif&quot;: " startLine="249" endOffset="6317" startColumn="10" endLine="249" endColumn="12" startOffset="6315" location="C:\Users\rober\Documents\studie\afstuderen\development\simulator_via_code_generator\data\tests\dev_transformed.cif"/>
          <event xmi:type="expressions:EventExpression" xmi:id="927" event="315">
            <position xmi:type="position:Position" xmi:id="928" source="File &quot;../data/tests\dev_transformed.cif&quot;: " startLine="249" endOffset="6317" startColumn="10" endLine="249" endColumn="12" startOffset="6315" location="C:\Users\rober\Documents\studie\afstuderen\development\simulator_via_code_generator\data\tests\dev_transformed.cif"/>
            <type xmi:type="types:BoolType" xmi:id="929">
              <position xmi:type="position:Position" xmi:id="930" source="File &quot;../data/tests\dev_transformed.cif&quot;: " startLine="249" endOffset="6317" startColumn="10" endLine="249" endColumn="12" startOffset="6315" location="C:\Users\rober\Documents\studie\afstuderen\development\simulator_via_code_generator\data\tests\dev_transformed.cif"/>
            </type>
          </event>
        </events>
      </edges>
      <edges xmi:type="automata:Edge" xmi:id="931" target="679">
        <position xmi:type="position:Position" xmi:id="932" source="File &quot;../data/tests\dev_transformed.cif&quot;: " startLine="250" endOffset="6336" startColumn="5" endLine="250" endColumn="8" startOffset="6333" location="C:\Users\rober\Documents\studie\afstuderen\development\simulator_via_code_generator\data\tests\dev_transformed.cif"/>
        <events xmi:type="automata:EdgeEvent" xmi:id="933">
          <position xmi:type="position:Position" xmi:id="934" source="File &quot;../data/tests\dev_transformed.cif&quot;: " startLine="250" endOffset="6340" startColumn="10" endLine="250" endColumn="12" startOffset="6338" location="C:\Users\rober\Documents\studie\afstuderen\development\simulator_via_code_generator\data\tests\dev_transformed.cif"/>
          <event xmi:type="expressions:EventExpression" xmi:id="935" event="317">
            <position xmi:type="position:Position" xmi:id="936" source="File &quot;../data/tests\dev_transformed.cif&quot;: " startLine="250" endOffset="6340" startColumn="10" endLine="250" endColumn="12" startOffset="6338" location="C:\Users\rober\Documents\studie\afstuderen\development\simulator_via_code_generator\data\tests\dev_transformed.cif"/>
            <type xmi:type="types:BoolType" xmi:id="937">
              <position xmi:type="position:Position" xmi:id="938" source="File &quot;../data/tests\dev_transformed.cif&quot;: " startLine="250" endOffset="6340" startColumn="10" endLine="250" endColumn="12" startOffset="6338" location="C:\Users\rober\Documents\studie\afstuderen\development\simulator_via_code_generator\data\tests\dev_transformed.cif"/>
            </type>
          </event>
        </events>
      </edges>
      <edges xmi:type="automata:Edge" xmi:id="939" target="749">
        <position xmi:type="position:Position" xmi:id="940" source="File &quot;../data/tests\dev_transformed.cif&quot;: " startLine="251" endOffset="6359" startColumn="5" endLine="251" endColumn="8" startOffset="6356" location="C:\Users\rober\Documents\studie\afstuderen\development\simulator_via_code_generator\data\tests\dev_transformed.cif"/>
        <events xmi:type="automata:EdgeEvent" xmi:id="941">
          <position xmi:type="position:Position" xmi:id="942" source="File &quot;../data/tests\dev_transformed.cif&quot;: " startLine="251" endOffset="6363" startColumn="10" endLine="251" endColumn="12" startOffset="6361" location="C:\Users\rober\Documents\studie\afstuderen\development\simulator_via_code_generator\data\tests\dev_transformed.cif"/>
          <event xmi:type="expressions:EventExpression" xmi:id="943" event="319">
            <position xmi:type="position:Position" xmi:id="944" source="File &quot;../data/tests\dev_transformed.cif&quot;: " startLine="251" endOffset="6363" startColumn="10" endLine="251" endColumn="12" startOffset="6361" location="C:\Users\rober\Documents\studie\afstuderen\development\simulator_via_code_generator\data\tests\dev_transformed.cif"/>
            <type xmi:type="types:BoolType" xmi:id="945">
              <position xmi:type="position:Position" xmi:id="946" source="File &quot;../data/tests\dev_transformed.cif&quot;: " startLine="251" endOffset="6363" startColumn="10" endLine="251" endColumn="12" startOffset="6361" location="C:\Users\rober\Documents\studie\afstuderen\development\simulator_via_code_generator\data\tests\dev_transformed.cif"/>
            </type>
          </event>
        </events>
      </edges>
      <edges xmi:type="automata:Edge" xmi:id="947" target="819">
        <position xmi:type="position:Position" xmi:id="948" source="File &quot;../data/tests\dev_transformed.cif&quot;: " startLine="252" endOffset="6382" startColumn="5" endLine="252" endColumn="8" startOffset="6379" location="C:\Users\rober\Documents\studie\afstuderen\development\simulator_via_code_generator\data\tests\dev_transformed.cif"/>
        <events xmi:type="automata:EdgeEvent" xmi:id="949">
          <position xmi:type="position:Position" xmi:id="950" source="File &quot;../data/tests\dev_transformed.cif&quot;: " startLine="252" endOffset="6386" startColumn="10" endLine="252" endColumn="12" startOffset="6384" location="C:\Users\rober\Documents\studie\afstuderen\development\simulator_via_code_generator\data\tests\dev_transformed.cif"/>
          <event xmi:type="expressions:EventExpression" xmi:id="951" event="321">
            <position xmi:type="position:Position" xmi:id="952" source="File &quot;../data/tests\dev_transformed.cif&quot;: " startLine="252" endOffset="6386" startColumn="10" endLine="252" endColumn="12" startOffset="6384" location="C:\Users\rober\Documents\studie\afstuderen\development\simulator_via_code_generator\data\tests\dev_transformed.cif"/>
            <type xmi:type="types:BoolType" xmi:id="953">
              <position xmi:type="position:Position" xmi:id="954" source="File &quot;../data/tests\dev_transformed.cif&quot;: " startLine="252" endOffset="6386" startColumn="10" endLine="252" endColumn="12" startOffset="6384" location="C:\Users\rober\Documents\studie\afstuderen\development\simulator_via_code_generator\data\tests\dev_transformed.cif"/>
            </type>
          </event>
        </events>
      </edges>
      <markeds xmi:type="expressions:BoolExpression" xmi:id="955" value="true">
        <position xmi:type="position:Position" xmi:id="956" source="File &quot;../data/tests\dev_transformed.cif&quot;: " startLine="244" endOffset="6210" startColumn="5" endLine="244" endColumn="10" startOffset="6205" location="C:\Users\rober\Documents\studie\afstuderen\development\simulator_via_code_generator\data\tests\dev_transformed.cif"/>
        <type xmi:type="types:BoolType" xmi:id="957">
          <position xmi:type="position:Position" xmi:id="958" source="File &quot;../data/tests\dev_transformed.cif&quot;: " startLine="244" endOffset="6210" startColumn="5" endLine="244" endColumn="10" startOffset="6205" location="C:\Users\rober\Documents\studie\afstuderen\development\simulator_via_code_generator\data\tests\dev_transformed.cif"/>
        </type>
      </markeds>
    </locations>
  </components>
  <components xmi:type="automata:Automaton" xmi:id="959" name="WaferPlant_0" kind="Plant">
    <position xmi:type="position:Position" xmi:id="960" source="File &quot;../data/tests\dev_transformed.cif&quot;: " startLine="254" endOffset="6430" startColumn="17" endLine="254" endColumn="28" startOffset="6419" location="C:\Users\rober\Documents\studie\afstuderen\development\simulator_via_code_generator\data\tests\dev_transformed.cif"/>
    <locations xmi:type="automata:Location" xmi:id="961" name="TR">
      <position xmi:type="position:Position" xmi:id="962" source="File &quot;../data/tests\dev_transformed.cif&quot;: " startLine="255" endOffset="6446" startColumn="12" endLine="255" endColumn="13" startOffset="6445" location="C:\Users\rober\Documents\studie\afstuderen\development\simulator_via_code_generator\data\tests\dev_transformed.cif"/>
      <initials xmi:type="expressions:BoolExpression" xmi:id="963" value="true">
        <position xmi:type="position:Position" xmi:id="964" source="File &quot;../data/tests\dev_transformed.cif&quot;: " startLine="256" endOffset="6460" startColumn="5" endLine="256" endColumn="11" startOffset="6454" location="C:\Users\rober\Documents\studie\afstuderen\development\simulator_via_code_generator\data\tests\dev_transformed.cif"/>
        <type xmi:type="types:BoolType" xmi:id="965">
          <position xmi:type="position:Position" xmi:id="966" source="File &quot;../data/tests\dev_transformed.cif&quot;: " startLine="256" endOffset="6460" startColumn="5" endLine="256" endColumn="11" startOffset="6454" location="C:\Users\rober\Documents\studie\afstuderen\development\simulator_via_code_generator\data\tests\dev_transformed.cif"/>
        </type>
      </initials>
      <edges xmi:type="automata:Edge" xmi:id="967" target="1329">
        <position xmi:type="position:Position" xmi:id="968" source="File &quot;../data/tests\dev_transformed.cif&quot;: " startLine="258" endOffset="6484" startColumn="5" endLine="258" endColumn="8" startOffset="6481" location="C:\Users\rober\Documents\studie\afstuderen\development\simulator_via_code_generator\data\tests\dev_transformed.cif"/>
        <events xmi:type="automata:EdgeEvent" xmi:id="969">
          <position xmi:type="position:Position" xmi:id="970" source="File &quot;../data/tests\dev_transformed.cif&quot;: " startLine="258" endOffset="6496" startColumn="10" endLine="258" endColumn="20" startOffset="6486" location="C:\Users\rober\Documents\studie\afstuderen\development\simulator_via_code_generator\data\tests\dev_transformed.cif"/>
          <event xmi:type="expressions:EventExpression" xmi:id="971" event="3">
            <position xmi:type="position:Position" xmi:id="972" source="File &quot;../data/tests\dev_transformed.cif&quot;: " startLine="258" endOffset="6496" startColumn="10" endLine="258" endColumn="20" startOffset="6486" location="C:\Users\rober\Documents\studie\afstuderen\development\simulator_via_code_generator\data\tests\dev_transformed.cif"/>
            <type xmi:type="types:BoolType" xmi:id="973">
              <position xmi:type="position:Position" xmi:id="974" source="File &quot;../data/tests\dev_transformed.cif&quot;: " startLine="258" endOffset="6496" startColumn="10" endLine="258" endColumn="20" startOffset="6486" location="C:\Users\rober\Documents\studie\afstuderen\development\simulator_via_code_generator\data\tests\dev_transformed.cif"/>
            </type>
          </event>
        </events>
      </edges>
      <edges xmi:type="automata:Edge" xmi:id="975">
        <position xmi:type="position:Position" xmi:id="976" source="File &quot;../data/tests\dev_transformed.cif&quot;: " startLine="259" endOffset="6520" startColumn="5" endLine="259" endColumn="8" startOffset="6517" location="C:\Users\rober\Documents\studie\afstuderen\development\simulator_via_code_generator\data\tests\dev_transformed.cif"/>
        <events xmi:type="automata:EdgeEvent" xmi:id="977">
          <position xmi:type="position:Position" xmi:id="978" source="File &quot;../data/tests\dev_transformed.cif&quot;: " startLine="259" endOffset="6532" startColumn="10" endLine="259" endColumn="20" startOffset="6522" location="C:\Users\rober\Documents\studie\afstuderen\development\simulator_via_code_generator\data\tests\dev_transformed.cif"/>
          <event xmi:type="expressions:EventExpression" xmi:id="979" event="115">
            <position xmi:type="position:Position" xmi:id="980" source="File &quot;../data/tests\dev_transformed.cif&quot;: " startLine="259" endOffset="6532" startColumn="10" endLine="259" endColumn="20" startOffset="6522" location="C:\Users\rober\Documents\studie\afstuderen\development\simulator_via_code_generator\data\tests\dev_transformed.cif"/>
            <type xmi:type="types:BoolType" xmi:id="981">
              <position xmi:type="position:Position" xmi:id="982" source="File &quot;../data/tests\dev_transformed.cif&quot;: " startLine="259" endOffset="6532" startColumn="10" endLine="259" endColumn="20" startOffset="6522" location="C:\Users\rober\Documents\studie\afstuderen\development\simulator_via_code_generator\data\tests\dev_transformed.cif"/>
            </type>
          </event>
        </events>
        <events xmi:type="automata:EdgeEvent" xmi:id="983">
          <position xmi:type="position:Position" xmi:id="984" source="File &quot;../data/tests\dev_transformed.cif&quot;: " startLine="259" endOffset="6545" startColumn="23" endLine="259" endColumn="33" startOffset="6535" location="C:\Users\rober\Documents\studie\afstuderen\development\simulator_via_code_generator\data\tests\dev_transformed.cif"/>
          <event xmi:type="expressions:EventExpression" xmi:id="985" event="117">
            <position xmi:type="position:Position" xmi:id="986" source="File &quot;../data/tests\dev_transformed.cif&quot;: " startLine="259" endOffset="6545" startColumn="23" endLine="259" endColumn="33" startOffset="6535" location="C:\Users\rober\Documents\studie\afstuderen\development\simulator_via_code_generator\data\tests\dev_transformed.cif"/>
            <type xmi:type="types:BoolType" xmi:id="987">
              <position xmi:type="position:Position" xmi:id="988" source="File &quot;../data/tests\dev_transformed.cif&quot;: " startLine="259" endOffset="6545" startColumn="23" endLine="259" endColumn="33" startOffset="6535" location="C:\Users\rober\Documents\studie\afstuderen\development\simulator_via_code_generator\data\tests\dev_transformed.cif"/>
            </type>
          </event>
        </events>
        <events xmi:type="automata:EdgeEvent" xmi:id="989">
          <position xmi:type="position:Position" xmi:id="990" source="File &quot;../data/tests\dev_transformed.cif&quot;: " startLine="259" endOffset="6563" startColumn="36" endLine="259" endColumn="51" startOffset="6548" location="C:\Users\rober\Documents\studie\afstuderen\development\simulator_via_code_generator\data\tests\dev_transformed.cif"/>
          <event xmi:type="expressions:EventExpression" xmi:id="991" event="119">
            <position xmi:type="position:Position" xmi:id="992" source="File &quot;../data/tests\dev_transformed.cif&quot;: " startLine="259" endOffset="6563" startColumn="36" endLine="259" endColumn="51" startOffset="6548" location="C:\Users\rober\Documents\studie\afstuderen\development\simulator_via_code_generator\data\tests\dev_transformed.cif"/>
            <type xmi:type="types:BoolType" xmi:id="993">
              <position xmi:type="position:Position" xmi:id="994" source="File &quot;../data/tests\dev_transformed.cif&quot;: " startLine="259" endOffset="6563" startColumn="36" endLine="259" endColumn="51" startOffset="6548" location="C:\Users\rober\Documents\studie\afstuderen\development\simulator_via_code_generator\data\tests\dev_transformed.cif"/>
            </type>
          </event>
        </events>
      </edges>
      <markeds xmi:type="expressions:BoolExpression" xmi:id="995" value="true">
        <position xmi:type="position:Position" xmi:id="996" source="File &quot;../data/tests\dev_transformed.cif&quot;: " startLine="257" endOffset="6473" startColumn="5" endLine="257" endColumn="10" startOffset="6468" location="C:\Users\rober\Documents\studie\afstuderen\development\simulator_via_code_generator\data\tests\dev_transformed.cif"/>
        <type xmi:type="types:BoolType" xmi:id="997">
          <position xmi:type="position:Position" xmi:id="998" source="File &quot;../data/tests\dev_transformed.cif&quot;: " startLine="257" endOffset="6473" startColumn="5" endLine="257" endColumn="10" startOffset="6468" location="C:\Users\rober\Documents\studie\afstuderen\development\simulator_via_code_generator\data\tests\dev_transformed.cif"/>
        </type>
      </markeds>
    </locations>
    <locations xmi:type="automata:Location" xmi:id="999" name="SUB">
      <position xmi:type="position:Position" xmi:id="1000" source="File &quot;../data/tests\dev_transformed.cif&quot;: " startLine="260" endOffset="6580" startColumn="12" endLine="260" endColumn="14" startOffset="6578" location="C:\Users\rober\Documents\studie\afstuderen\development\simulator_via_code_generator\data\tests\dev_transformed.cif"/>
      <edges xmi:type="automata:Edge" xmi:id="1001" target="1339">
        <position xmi:type="position:Position" xmi:id="1002" source="File &quot;../data/tests\dev_transformed.cif&quot;: " startLine="262" endOffset="6604" startColumn="5" endLine="262" endColumn="8" startOffset="6601" location="C:\Users\rober\Documents\studie\afstuderen\development\simulator_via_code_generator\data\tests\dev_transformed.cif"/>
        <events xmi:type="automata:EdgeEvent" xmi:id="1003">
          <position xmi:type="position:Position" xmi:id="1004" source="File &quot;../data/tests\dev_transformed.cif&quot;: " startLine="262" endOffset="6616" startColumn="10" endLine="262" endColumn="20" startOffset="6606" location="C:\Users\rober\Documents\studie\afstuderen\development\simulator_via_code_generator\data\tests\dev_transformed.cif"/>
          <event xmi:type="expressions:EventExpression" xmi:id="1005" event="5">
            <position xmi:type="position:Position" xmi:id="1006" source="File &quot;../data/tests\dev_transformed.cif&quot;: " startLine="262" endOffset="6616" startColumn="10" endLine="262" endColumn="20" startOffset="6606" location="C:\Users\rober\Documents\studie\afstuderen\development\simulator_via_code_generator\data\tests\dev_transformed.cif"/>
            <type xmi:type="types:BoolType" xmi:id="1007">
              <position xmi:type="position:Position" xmi:id="1008" source="File &quot;../data/tests\dev_transformed.cif&quot;: " startLine="262" endOffset="6616" startColumn="10" endLine="262" endColumn="20" startOffset="6606" location="C:\Users\rober\Documents\studie\afstuderen\development\simulator_via_code_generator\data\tests\dev_transformed.cif"/>
            </type>
          </event>
        </events>
      </edges>
      <edges xmi:type="automata:Edge" xmi:id="1009" target="1269">
        <position xmi:type="position:Position" xmi:id="1010" source="File &quot;../data/tests\dev_transformed.cif&quot;: " startLine="263" endOffset="6640" startColumn="5" endLine="263" endColumn="8" startOffset="6637" location="C:\Users\rober\Documents\studie\afstuderen\development\simulator_via_code_generator\data\tests\dev_transformed.cif"/>
        <events xmi:type="automata:EdgeEvent" xmi:id="1011">
          <position xmi:type="position:Position" xmi:id="1012" source="File &quot;../data/tests\dev_transformed.cif&quot;: " startLine="263" endOffset="6658" startColumn="10" endLine="263" endColumn="26" startOffset="6642" location="C:\Users\rober\Documents\studie\afstuderen\development\simulator_via_code_generator\data\tests\dev_transformed.cif"/>
          <event xmi:type="expressions:EventExpression" xmi:id="1013" event="47">
            <position xmi:type="position:Position" xmi:id="1014" source="File &quot;../data/tests\dev_transformed.cif&quot;: " startLine="263" endOffset="6658" startColumn="10" endLine="263" endColumn="26" startOffset="6642" location="C:\Users\rober\Documents\studie\afstuderen\development\simulator_via_code_generator\data\tests\dev_transformed.cif"/>
            <type xmi:type="types:BoolType" xmi:id="1015">
              <position xmi:type="position:Position" xmi:id="1016" source="File &quot;../data/tests\dev_transformed.cif&quot;: " startLine="263" endOffset="6658" startColumn="10" endLine="263" endColumn="26" startOffset="6642" location="C:\Users\rober\Documents\studie\afstuderen\development\simulator_via_code_generator\data\tests\dev_transformed.cif"/>
            </type>
          </event>
        </events>
      </edges>
      <markeds xmi:type="expressions:BoolExpression" xmi:id="1017" value="true">
        <position xmi:type="position:Position" xmi:id="1018" source="File &quot;../data/tests\dev_transformed.cif&quot;: " startLine="261" endOffset="6593" startColumn="5" endLine="261" endColumn="10" startOffset="6588" location="C:\Users\rober\Documents\studie\afstuderen\development\simulator_via_code_generator\data\tests\dev_transformed.cif"/>
        <type xmi:type="types:BoolType" xmi:id="1019">
          <position xmi:type="position:Position" xmi:id="1020" source="File &quot;../data/tests\dev_transformed.cif&quot;: " startLine="261" endOffset="6593" startColumn="5" endLine="261" endColumn="10" startOffset="6588" location="C:\Users\rober\Documents\studie\afstuderen\development\simulator_via_code_generator\data\tests\dev_transformed.cif"/>
        </type>
      </markeds>
    </locations>
    <locations xmi:type="automata:Location" xmi:id="1021" name="UR">
      <position xmi:type="position:Position" xmi:id="1022" source="File &quot;../data/tests\dev_transformed.cif&quot;: " startLine="264" endOffset="6700" startColumn="12" endLine="264" endColumn="13" startOffset="6699" location="C:\Users\rober\Documents\studie\afstuderen\development\simulator_via_code_generator\data\tests\dev_transformed.cif"/>
      <edges xmi:type="automata:Edge" xmi:id="1023" target="1349">
        <position xmi:type="position:Position" xmi:id="1024" source="File &quot;../data/tests\dev_transformed.cif&quot;: " startLine="266" endOffset="6724" startColumn="5" endLine="266" endColumn="8" startOffset="6721" location="C:\Users\rober\Documents\studie\afstuderen\development\simulator_via_code_generator\data\tests\dev_transformed.cif"/>
        <events xmi:type="automata:EdgeEvent" xmi:id="1025">
          <position xmi:type="position:Position" xmi:id="1026" source="File &quot;../data/tests\dev_transformed.cif&quot;: " startLine="266" endOffset="6736" startColumn="10" endLine="266" endColumn="20" startOffset="6726" location="C:\Users\rober\Documents\studie\afstuderen\development\simulator_via_code_generator\data\tests\dev_transformed.cif"/>
          <event xmi:type="expressions:EventExpression" xmi:id="1027" event="7">
            <position xmi:type="position:Position" xmi:id="1028" source="File &quot;../data/tests\dev_transformed.cif&quot;: " startLine="266" endOffset="6736" startColumn="10" endLine="266" endColumn="20" startOffset="6726" location="C:\Users\rober\Documents\studie\afstuderen\development\simulator_via_code_generator\data\tests\dev_transformed.cif"/>
            <type xmi:type="types:BoolType" xmi:id="1029">
              <position xmi:type="position:Position" xmi:id="1030" source="File &quot;../data/tests\dev_transformed.cif&quot;: " startLine="266" endOffset="6736" startColumn="10" endLine="266" endColumn="20" startOffset="6726" location="C:\Users\rober\Documents\studie\afstuderen\development\simulator_via_code_generator\data\tests\dev_transformed.cif"/>
            </type>
          </event>
        </events>
      </edges>
      <edges xmi:type="automata:Edge" xmi:id="1031" target="1359">
        <position xmi:type="position:Position" xmi:id="1032" source="File &quot;../data/tests\dev_transformed.cif&quot;: " startLine="267" endOffset="6760" startColumn="5" endLine="267" endColumn="8" startOffset="6757" location="C:\Users\rober\Documents\studie\afstuderen\development\simulator_via_code_generator\data\tests\dev_transformed.cif"/>
        <events xmi:type="automata:EdgeEvent" xmi:id="1033">
          <position xmi:type="position:Position" xmi:id="1034" source="File &quot;../data/tests\dev_transformed.cif&quot;: " startLine="267" endOffset="6771" startColumn="10" endLine="267" endColumn="19" startOffset="6762" location="C:\Users\rober\Documents\studie\afstuderen\development\simulator_via_code_generator\data\tests\dev_transformed.cif"/>
          <event xmi:type="expressions:EventExpression" xmi:id="1035" event="9">
            <position xmi:type="position:Position" xmi:id="1036" source="File &quot;../data/tests\dev_transformed.cif&quot;: " startLine="267" endOffset="6771" startColumn="10" endLine="267" endColumn="19" startOffset="6762" location="C:\Users\rober\Documents\studie\afstuderen\development\simulator_via_code_generator\data\tests\dev_transformed.cif"/>
            <type xmi:type="types:BoolType" xmi:id="1037">
              <position xmi:type="position:Position" xmi:id="1038" source="File &quot;../data/tests\dev_transformed.cif&quot;: " startLine="267" endOffset="6771" startColumn="10" endLine="267" endColumn="19" startOffset="6762" location="C:\Users\rober\Documents\studie\afstuderen\development\simulator_via_code_generator\data\tests\dev_transformed.cif"/>
            </type>
          </event>
        </events>
      </edges>
      <edges xmi:type="automata:Edge" xmi:id="1039" target="1369">
        <position xmi:type="position:Position" xmi:id="1040" source="File &quot;../data/tests\dev_transformed.cif&quot;: " startLine="268" endOffset="6794" startColumn="5" endLine="268" endColumn="8" startOffset="6791" location="C:\Users\rober\Documents\studie\afstuderen\development\simulator_via_code_generator\data\tests\dev_transformed.cif"/>
        <events xmi:type="automata:EdgeEvent" xmi:id="1041">
          <position xmi:type="position:Position" xmi:id="1042" source="File &quot;../data/tests\dev_transformed.cif&quot;: " startLine="268" endOffset="6805" startColumn="10" endLine="268" endColumn="19" startOffset="6796" location="C:\Users\rober\Documents\studie\afstuderen\development\simulator_via_code_generator\data\tests\dev_transformed.cif"/>
          <event xmi:type="expressions:EventExpression" xmi:id="1043" event="11">
            <position xmi:type="position:Position" xmi:id="1044" source="File &quot;../data/tests\dev_transformed.cif&quot;: " startLine="268" endOffset="6805" startColumn="10" endLine="268" endColumn="19" startOffset="6796" location="C:\Users\rober\Documents\studie\afstuderen\development\simulator_via_code_generator\data\tests\dev_transformed.cif"/>
            <type xmi:type="types:BoolType" xmi:id="1045">
              <position xmi:type="position:Position" xmi:id="1046" source="File &quot;../data/tests\dev_transformed.cif&quot;: " startLine="268" endOffset="6805" startColumn="10" endLine="268" endColumn="19" startOffset="6796" location="C:\Users\rober\Documents\studie\afstuderen\development\simulator_via_code_generator\data\tests\dev_transformed.cif"/>
            </type>
          </event>
        </events>
      </edges>
      <edges xmi:type="automata:Edge" xmi:id="1047" target="1379">
        <position xmi:type="position:Position" xmi:id="1048" source="File &quot;../data/tests\dev_transformed.cif&quot;: " startLine="269" endOffset="6828" startColumn="5" endLine="269" endColumn="8" startOffset="6825" location="C:\Users\rober\Documents\studie\afstuderen\development\simulator_via_code_generator\data\tests\dev_transformed.cif"/>
        <events xmi:type="automata:EdgeEvent" xmi:id="1049">
          <position xmi:type="position:Position" xmi:id="1050" source="File &quot;../data/tests\dev_transformed.cif&quot;: " startLine="269" endOffset="6841" startColumn="10" endLine="269" endColumn="21" startOffset="6830" location="C:\Users\rober\Documents\studie\afstuderen\development\simulator_via_code_generator\data\tests\dev_transformed.cif"/>
          <event xmi:type="expressions:EventExpression" xmi:id="1051" event="13">
            <position xmi:type="position:Position" xmi:id="1052" source="File &quot;../data/tests\dev_transformed.cif&quot;: " startLine="269" endOffset="6841" startColumn="10" endLine="269" endColumn="21" startOffset="6830" location="C:\Users\rober\Documents\studie\afstuderen\development\simulator_via_code_generator\data\tests\dev_transformed.cif"/>
            <type xmi:type="types:BoolType" xmi:id="1053">
              <position xmi:type="position:Position" xmi:id="1054" source="File &quot;../data/tests\dev_transformed.cif&quot;: " startLine="269" endOffset="6841" startColumn="10" endLine="269" endColumn="21" startOffset="6830" location="C:\Users\rober\Documents\studie\afstuderen\development\simulator_via_code_generator\data\tests\dev_transformed.cif"/>
            </type>
          </event>
        </events>
      </edges>
      <markeds xmi:type="expressions:BoolExpression" xmi:id="1055" value="true">
        <position xmi:type="position:Position" xmi:id="1056" source="File &quot;../data/tests\dev_transformed.cif&quot;: " startLine="265" endOffset="6713" startColumn="5" endLine="265" endColumn="10" startOffset="6708" location="C:\Users\rober\Documents\studie\afstuderen\development\simulator_via_code_generator\data\tests\dev_transformed.cif"/>
        <type xmi:type="types:BoolType" xmi:id="1057">
          <position xmi:type="position:Position" xmi:id="1058" source="File &quot;../data/tests\dev_transformed.cif&quot;: " startLine="265" endOffset="6713" startColumn="5" endLine="265" endColumn="10" startOffset="6708" location="C:\Users\rober\Documents\studie\afstuderen\development\simulator_via_code_generator\data\tests\dev_transformed.cif"/>
        </type>
      </markeds>
    </locations>
    <locations xmi:type="automata:Location" xmi:id="1059" name="PA">
      <position xmi:type="position:Position" xmi:id="1060" source="File &quot;../data/tests\dev_transformed.cif&quot;: " startLine="270" endOffset="6871" startColumn="12" endLine="270" endColumn="13" startOffset="6870" location="C:\Users\rober\Documents\studie\afstuderen\development\simulator_via_code_generator\data\tests\dev_transformed.cif"/>
      <edges xmi:type="automata:Edge" xmi:id="1061" target="1389">
        <position xmi:type="position:Position" xmi:id="1062" source="File &quot;../data/tests\dev_transformed.cif&quot;: " startLine="272" endOffset="6895" startColumn="5" endLine="272" endColumn="8" startOffset="6892" location="C:\Users\rober\Documents\studie\afstuderen\development\simulator_via_code_generator\data\tests\dev_transformed.cif"/>
        <events xmi:type="automata:EdgeEvent" xmi:id="1063">
          <position xmi:type="position:Position" xmi:id="1064" source="File &quot;../data/tests\dev_transformed.cif&quot;: " startLine="272" endOffset="6906" startColumn="10" endLine="272" endColumn="19" startOffset="6897" location="C:\Users\rober\Documents\studie\afstuderen\development\simulator_via_code_generator\data\tests\dev_transformed.cif"/>
          <event xmi:type="expressions:EventExpression" xmi:id="1065" event="15">
            <position xmi:type="position:Position" xmi:id="1066" source="File &quot;../data/tests\dev_transformed.cif&quot;: " startLine="272" endOffset="6906" startColumn="10" endLine="272" endColumn="19" startOffset="6897" location="C:\Users\rober\Documents\studie\afstuderen\development\simulator_via_code_generator\data\tests\dev_transformed.cif"/>
            <type xmi:type="types:BoolType" xmi:id="1067">
              <position xmi:type="position:Position" xmi:id="1068" source="File &quot;../data/tests\dev_transformed.cif&quot;: " startLine="272" endOffset="6906" startColumn="10" endLine="272" endColumn="19" startOffset="6897" location="C:\Users\rober\Documents\studie\afstuderen\development\simulator_via_code_generator\data\tests\dev_transformed.cif"/>
            </type>
          </event>
        </events>
      </edges>
      <edges xmi:type="automata:Edge" xmi:id="1069" target="1399">
        <position xmi:type="position:Position" xmi:id="1070" source="File &quot;../data/tests\dev_transformed.cif&quot;: " startLine="273" endOffset="6929" startColumn="5" endLine="273" endColumn="8" startOffset="6926" location="C:\Users\rober\Documents\studie\afstuderen\development\simulator_via_code_generator\data\tests\dev_transformed.cif"/>
        <events xmi:type="automata:EdgeEvent" xmi:id="1071">
          <position xmi:type="position:Position" xmi:id="1072" source="File &quot;../data/tests\dev_transformed.cif&quot;: " startLine="273" endOffset="6940" startColumn="10" endLine="273" endColumn="19" startOffset="6931" location="C:\Users\rober\Documents\studie\afstuderen\development\simulator_via_code_generator\data\tests\dev_transformed.cif"/>
          <event xmi:type="expressions:EventExpression" xmi:id="1073" event="17">
            <position xmi:type="position:Position" xmi:id="1074" source="File &quot;../data/tests\dev_transformed.cif&quot;: " startLine="273" endOffset="6940" startColumn="10" endLine="273" endColumn="19" startOffset="6931" location="C:\Users\rober\Documents\studie\afstuderen\development\simulator_via_code_generator\data\tests\dev_transformed.cif"/>
            <type xmi:type="types:BoolType" xmi:id="1075">
              <position xmi:type="position:Position" xmi:id="1076" source="File &quot;../data/tests\dev_transformed.cif&quot;: " startLine="273" endOffset="6940" startColumn="10" endLine="273" endColumn="19" startOffset="6931" location="C:\Users\rober\Documents\studie\afstuderen\development\simulator_via_code_generator\data\tests\dev_transformed.cif"/>
            </type>
          </event>
        </events>
      </edges>
      <edges xmi:type="automata:Edge" xmi:id="1077" target="1279">
        <position xmi:type="position:Position" xmi:id="1078" source="File &quot;../data/tests\dev_transformed.cif&quot;: " startLine="274" endOffset="6963" startColumn="5" endLine="274" endColumn="8" startOffset="6960" location="C:\Users\rober\Documents\studie\afstuderen\development\simulator_via_code_generator\data\tests\dev_transformed.cif"/>
        <events xmi:type="automata:EdgeEvent" xmi:id="1079">
          <position xmi:type="position:Position" xmi:id="1080" source="File &quot;../data/tests\dev_transformed.cif&quot;: " startLine="274" endOffset="6976" startColumn="10" endLine="274" endColumn="21" startOffset="6965" location="C:\Users\rober\Documents\studie\afstuderen\development\simulator_via_code_generator\data\tests\dev_transformed.cif"/>
          <event xmi:type="expressions:EventExpression" xmi:id="1081" event="49">
            <position xmi:type="position:Position" xmi:id="1082" source="File &quot;../data/tests\dev_transformed.cif&quot;: " startLine="274" endOffset="6976" startColumn="10" endLine="274" endColumn="21" startOffset="6965" location="C:\Users\rober\Documents\studie\afstuderen\development\simulator_via_code_generator\data\tests\dev_transformed.cif"/>
            <type xmi:type="types:BoolType" xmi:id="1083">
              <position xmi:type="position:Position" xmi:id="1084" source="File &quot;../data/tests\dev_transformed.cif&quot;: " startLine="274" endOffset="6976" startColumn="10" endLine="274" endColumn="21" startOffset="6965" location="C:\Users\rober\Documents\studie\afstuderen\development\simulator_via_code_generator\data\tests\dev_transformed.cif"/>
            </type>
          </event>
        </events>
      </edges>
      <markeds xmi:type="expressions:BoolExpression" xmi:id="1085" value="true">
        <position xmi:type="position:Position" xmi:id="1086" source="File &quot;../data/tests\dev_transformed.cif&quot;: " startLine="271" endOffset="6884" startColumn="5" endLine="271" endColumn="10" startOffset="6879" location="C:\Users\rober\Documents\studie\afstuderen\development\simulator_via_code_generator\data\tests\dev_transformed.cif"/>
        <type xmi:type="types:BoolType" xmi:id="1087">
          <position xmi:type="position:Position" xmi:id="1088" source="File &quot;../data/tests\dev_transformed.cif&quot;: " startLine="271" endOffset="6884" startColumn="5" endLine="271" endColumn="10" startOffset="6879" location="C:\Users\rober\Documents\studie\afstuderen\development\simulator_via_code_generator\data\tests\dev_transformed.cif"/>
        </type>
      </markeds>
    </locations>
    <locations xmi:type="automata:Location" xmi:id="1089" name="LR">
      <position xmi:type="position:Position" xmi:id="1090" source="File &quot;../data/tests\dev_transformed.cif&quot;: " startLine="275" endOffset="7013" startColumn="12" endLine="275" endColumn="13" startOffset="7012" location="C:\Users\rober\Documents\studie\afstuderen\development\simulator_via_code_generator\data\tests\dev_transformed.cif"/>
      <edges xmi:type="automata:Edge" xmi:id="1091" target="1409">
        <position xmi:type="position:Position" xmi:id="1092" source="File &quot;../data/tests\dev_transformed.cif&quot;: " startLine="277" endOffset="7037" startColumn="5" endLine="277" endColumn="8" startOffset="7034" location="C:\Users\rober\Documents\studie\afstuderen\development\simulator_via_code_generator\data\tests\dev_transformed.cif"/>
        <events xmi:type="automata:EdgeEvent" xmi:id="1093">
          <position xmi:type="position:Position" xmi:id="1094" source="File &quot;../data/tests\dev_transformed.cif&quot;: " startLine="277" endOffset="7048" startColumn="10" endLine="277" endColumn="19" startOffset="7039" location="C:\Users\rober\Documents\studie\afstuderen\development\simulator_via_code_generator\data\tests\dev_transformed.cif"/>
          <event xmi:type="expressions:EventExpression" xmi:id="1095" event="19">
            <position xmi:type="position:Position" xmi:id="1096" source="File &quot;../data/tests\dev_transformed.cif&quot;: " startLine="277" endOffset="7048" startColumn="10" endLine="277" endColumn="19" startOffset="7039" location="C:\Users\rober\Documents\studie\afstuderen\development\simulator_via_code_generator\data\tests\dev_transformed.cif"/>
            <type xmi:type="types:BoolType" xmi:id="1097">
              <position xmi:type="position:Position" xmi:id="1098" source="File &quot;../data/tests\dev_transformed.cif&quot;: " startLine="277" endOffset="7048" startColumn="10" endLine="277" endColumn="19" startOffset="7039" location="C:\Users\rober\Documents\studie\afstuderen\development\simulator_via_code_generator\data\tests\dev_transformed.cif"/>
            </type>
          </event>
        </events>
      </edges>
      <edges xmi:type="automata:Edge" xmi:id="1099" target="1419">
        <position xmi:type="position:Position" xmi:id="1100" source="File &quot;../data/tests\dev_transformed.cif&quot;: " startLine="278" endOffset="7071" startColumn="5" endLine="278" endColumn="8" startOffset="7068" location="C:\Users\rober\Documents\studie\afstuderen\development\simulator_via_code_generator\data\tests\dev_transformed.cif"/>
        <events xmi:type="automata:EdgeEvent" xmi:id="1101">
          <position xmi:type="position:Position" xmi:id="1102" source="File &quot;../data/tests\dev_transformed.cif&quot;: " startLine="278" endOffset="7082" startColumn="10" endLine="278" endColumn="19" startOffset="7073" location="C:\Users\rober\Documents\studie\afstuderen\development\simulator_via_code_generator\data\tests\dev_transformed.cif"/>
          <event xmi:type="expressions:EventExpression" xmi:id="1103" event="21">
            <position xmi:type="position:Position" xmi:id="1104" source="File &quot;../data/tests\dev_transformed.cif&quot;: " startLine="278" endOffset="7082" startColumn="10" endLine="278" endColumn="19" startOffset="7073" location="C:\Users\rober\Documents\studie\afstuderen\development\simulator_via_code_generator\data\tests\dev_transformed.cif"/>
            <type xmi:type="types:BoolType" xmi:id="1105">
              <position xmi:type="position:Position" xmi:id="1106" source="File &quot;../data/tests\dev_transformed.cif&quot;: " startLine="278" endOffset="7082" startColumn="10" endLine="278" endColumn="19" startOffset="7073" location="C:\Users\rober\Documents\studie\afstuderen\development\simulator_via_code_generator\data\tests\dev_transformed.cif"/>
            </type>
          </event>
        </events>
      </edges>
      <edges xmi:type="automata:Edge" xmi:id="1107" target="1429">
        <position xmi:type="position:Position" xmi:id="1108" source="File &quot;../data/tests\dev_transformed.cif&quot;: " startLine="279" endOffset="7105" startColumn="5" endLine="279" endColumn="8" startOffset="7102" location="C:\Users\rober\Documents\studie\afstuderen\development\simulator_via_code_generator\data\tests\dev_transformed.cif"/>
        <events xmi:type="automata:EdgeEvent" xmi:id="1109">
          <position xmi:type="position:Position" xmi:id="1110" source="File &quot;../data/tests\dev_transformed.cif&quot;: " startLine="279" endOffset="7117" startColumn="10" endLine="279" endColumn="20" startOffset="7107" location="C:\Users\rober\Documents\studie\afstuderen\development\simulator_via_code_generator\data\tests\dev_transformed.cif"/>
          <event xmi:type="expressions:EventExpression" xmi:id="1111" event="23">
            <position xmi:type="position:Position" xmi:id="1112" source="File &quot;../data/tests\dev_transformed.cif&quot;: " startLine="279" endOffset="7117" startColumn="10" endLine="279" endColumn="20" startOffset="7107" location="C:\Users\rober\Documents\studie\afstuderen\development\simulator_via_code_generator\data\tests\dev_transformed.cif"/>
            <type xmi:type="types:BoolType" xmi:id="1113">
              <position xmi:type="position:Position" xmi:id="1114" source="File &quot;../data/tests\dev_transformed.cif&quot;: " startLine="279" endOffset="7117" startColumn="10" endLine="279" endColumn="20" startOffset="7107" location="C:\Users\rober\Documents\studie\afstuderen\development\simulator_via_code_generator\data\tests\dev_transformed.cif"/>
            </type>
          </event>
        </events>
      </edges>
      <edges xmi:type="automata:Edge" xmi:id="1115" target="1439">
        <position xmi:type="position:Position" xmi:id="1116" source="File &quot;../data/tests\dev_transformed.cif&quot;: " startLine="280" endOffset="7141" startColumn="5" endLine="280" endColumn="8" startOffset="7138" location="C:\Users\rober\Documents\studie\afstuderen\development\simulator_via_code_generator\data\tests\dev_transformed.cif"/>
        <events xmi:type="automata:EdgeEvent" xmi:id="1117">
          <position xmi:type="position:Position" xmi:id="1118" source="File &quot;../data/tests\dev_transformed.cif&quot;: " startLine="280" endOffset="7153" startColumn="10" endLine="280" endColumn="20" startOffset="7143" location="C:\Users\rober\Documents\studie\afstuderen\development\simulator_via_code_generator\data\tests\dev_transformed.cif"/>
          <event xmi:type="expressions:EventExpression" xmi:id="1119" event="25">
            <position xmi:type="position:Position" xmi:id="1120" source="File &quot;../data/tests\dev_transformed.cif&quot;: " startLine="280" endOffset="7153" startColumn="10" endLine="280" endColumn="20" startOffset="7143" location="C:\Users\rober\Documents\studie\afstuderen\development\simulator_via_code_generator\data\tests\dev_transformed.cif"/>
            <type xmi:type="types:BoolType" xmi:id="1121">
              <position xmi:type="position:Position" xmi:id="1122" source="File &quot;../data/tests\dev_transformed.cif&quot;: " startLine="280" endOffset="7153" startColumn="10" endLine="280" endColumn="20" startOffset="7143" location="C:\Users\rober\Documents\studie\afstuderen\development\simulator_via_code_generator\data\tests\dev_transformed.cif"/>
            </type>
          </event>
        </events>
      </edges>
      <edges xmi:type="automata:Edge" xmi:id="1123" target="1449">
        <position xmi:type="position:Position" xmi:id="1124" source="File &quot;../data/tests\dev_transformed.cif&quot;: " startLine="281" endOffset="7177" startColumn="5" endLine="281" endColumn="8" startOffset="7174" location="C:\Users\rober\Documents\studie\afstuderen\development\simulator_via_code_generator\data\tests\dev_transformed.cif"/>
        <events xmi:type="automata:EdgeEvent" xmi:id="1125">
          <position xmi:type="position:Position" xmi:id="1126" source="File &quot;../data/tests\dev_transformed.cif&quot;: " startLine="281" endOffset="7190" startColumn="10" endLine="281" endColumn="21" startOffset="7179" location="C:\Users\rober\Documents\studie\afstuderen\development\simulator_via_code_generator\data\tests\dev_transformed.cif"/>
          <event xmi:type="expressions:EventExpression" xmi:id="1127" event="27">
            <position xmi:type="position:Position" xmi:id="1128" source="File &quot;../data/tests\dev_transformed.cif&quot;: " startLine="281" endOffset="7190" startColumn="10" endLine="281" endColumn="21" startOffset="7179" location="C:\Users\rober\Documents\studie\afstuderen\development\simulator_via_code_generator\data\tests\dev_transformed.cif"/>
            <type xmi:type="types:BoolType" xmi:id="1129">
              <position xmi:type="position:Position" xmi:id="1130" source="File &quot;../data/tests\dev_transformed.cif&quot;: " startLine="281" endOffset="7190" startColumn="10" endLine="281" endColumn="21" startOffset="7179" location="C:\Users\rober\Documents\studie\afstuderen\development\simulator_via_code_generator\data\tests\dev_transformed.cif"/>
            </type>
          </event>
        </events>
      </edges>
      <markeds xmi:type="expressions:BoolExpression" xmi:id="1131" value="true">
        <position xmi:type="position:Position" xmi:id="1132" source="File &quot;../data/tests\dev_transformed.cif&quot;: " startLine="276" endOffset="7026" startColumn="5" endLine="276" endColumn="10" startOffset="7021" location="C:\Users\rober\Documents\studie\afstuderen\development\simulator_via_code_generator\data\tests\dev_transformed.cif"/>
        <type xmi:type="types:BoolType" xmi:id="1133">
          <position xmi:type="position:Position" xmi:id="1134" source="File &quot;../data/tests\dev_transformed.cif&quot;: " startLine="276" endOffset="7026" startColumn="5" endLine="276" endColumn="10" startOffset="7021" location="C:\Users\rober\Documents\studie\afstuderen\development\simulator_via_code_generator\data\tests\dev_transformed.cif"/>
        </type>
      </markeds>
    </locations>
    <locations xmi:type="automata:Location" xmi:id="1135" name="DU">
      <position xmi:type="position:Position" xmi:id="1136" source="File &quot;../data/tests\dev_transformed.cif&quot;: " startLine="282" endOffset="7220" startColumn="12" endLine="282" endColumn="13" startOffset="7219" location="C:\Users\rober\Documents\studie\afstuderen\development\simulator_via_code_generator\data\tests\dev_transformed.cif"/>
      <edges xmi:type="automata:Edge" xmi:id="1137" target="1459">
        <position xmi:type="position:Position" xmi:id="1138" source="File &quot;../data/tests\dev_transformed.cif&quot;: " startLine="284" endOffset="7244" startColumn="5" endLine="284" endColumn="8" startOffset="7241" location="C:\Users\rober\Documents\studie\afstuderen\development\simulator_via_code_generator\data\tests\dev_transformed.cif"/>
        <events xmi:type="automata:EdgeEvent" xmi:id="1139">
          <position xmi:type="position:Position" xmi:id="1140" source="File &quot;../data/tests\dev_transformed.cif&quot;: " startLine="284" endOffset="7255" startColumn="10" endLine="284" endColumn="19" startOffset="7246" location="C:\Users\rober\Documents\studie\afstuderen\development\simulator_via_code_generator\data\tests\dev_transformed.cif"/>
          <event xmi:type="expressions:EventExpression" xmi:id="1141" event="29">
            <position xmi:type="position:Position" xmi:id="1142" source="File &quot;../data/tests\dev_transformed.cif&quot;: " startLine="284" endOffset="7255" startColumn="10" endLine="284" endColumn="19" startOffset="7246" location="C:\Users\rober\Documents\studie\afstuderen\development\simulator_via_code_generator\data\tests\dev_transformed.cif"/>
            <type xmi:type="types:BoolType" xmi:id="1143">
              <position xmi:type="position:Position" xmi:id="1144" source="File &quot;../data/tests\dev_transformed.cif&quot;: " startLine="284" endOffset="7255" startColumn="10" endLine="284" endColumn="19" startOffset="7246" location="C:\Users\rober\Documents\studie\afstuderen\development\simulator_via_code_generator\data\tests\dev_transformed.cif"/>
            </type>
          </event>
        </events>
      </edges>
      <edges xmi:type="automata:Edge" xmi:id="1145" target="1469">
        <position xmi:type="position:Position" xmi:id="1146" source="File &quot;../data/tests\dev_transformed.cif&quot;: " startLine="285" endOffset="7278" startColumn="5" endLine="285" endColumn="8" startOffset="7275" location="C:\Users\rober\Documents\studie\afstuderen\development\simulator_via_code_generator\data\tests\dev_transformed.cif"/>
        <events xmi:type="automata:EdgeEvent" xmi:id="1147">
          <position xmi:type="position:Position" xmi:id="1148" source="File &quot;../data/tests\dev_transformed.cif&quot;: " startLine="285" endOffset="7289" startColumn="10" endLine="285" endColumn="19" startOffset="7280" location="C:\Users\rober\Documents\studie\afstuderen\development\simulator_via_code_generator\data\tests\dev_transformed.cif"/>
          <event xmi:type="expressions:EventExpression" xmi:id="1149" event="31">
            <position xmi:type="position:Position" xmi:id="1150" source="File &quot;../data/tests\dev_transformed.cif&quot;: " startLine="285" endOffset="7289" startColumn="10" endLine="285" endColumn="19" startOffset="7280" location="C:\Users\rober\Documents\studie\afstuderen\development\simulator_via_code_generator\data\tests\dev_transformed.cif"/>
            <type xmi:type="types:BoolType" xmi:id="1151">
              <position xmi:type="position:Position" xmi:id="1152" source="File &quot;../data/tests\dev_transformed.cif&quot;: " startLine="285" endOffset="7289" startColumn="10" endLine="285" endColumn="19" startOffset="7280" location="C:\Users\rober\Documents\studie\afstuderen\development\simulator_via_code_generator\data\tests\dev_transformed.cif"/>
            </type>
          </event>
        </events>
      </edges>
      <edges xmi:type="automata:Edge" xmi:id="1153" target="1479">
        <position xmi:type="position:Position" xmi:id="1154" source="File &quot;../data/tests\dev_transformed.cif&quot;: " startLine="286" endOffset="7312" startColumn="5" endLine="286" endColumn="8" startOffset="7309" location="C:\Users\rober\Documents\studie\afstuderen\development\simulator_via_code_generator\data\tests\dev_transformed.cif"/>
        <events xmi:type="automata:EdgeEvent" xmi:id="1155">
          <position xmi:type="position:Position" xmi:id="1156" source="File &quot;../data/tests\dev_transformed.cif&quot;: " startLine="286" endOffset="7323" startColumn="10" endLine="286" endColumn="19" startOffset="7314" location="C:\Users\rober\Documents\studie\afstuderen\development\simulator_via_code_generator\data\tests\dev_transformed.cif"/>
          <event xmi:type="expressions:EventExpression" xmi:id="1157" event="33">
            <position xmi:type="position:Position" xmi:id="1158" source="File &quot;../data/tests\dev_transformed.cif&quot;: " startLine="286" endOffset="7323" startColumn="10" endLine="286" endColumn="19" startOffset="7314" location="C:\Users\rober\Documents\studie\afstuderen\development\simulator_via_code_generator\data\tests\dev_transformed.cif"/>
            <type xmi:type="types:BoolType" xmi:id="1159">
              <position xmi:type="position:Position" xmi:id="1160" source="File &quot;../data/tests\dev_transformed.cif&quot;: " startLine="286" endOffset="7323" startColumn="10" endLine="286" endColumn="19" startOffset="7314" location="C:\Users\rober\Documents\studie\afstuderen\development\simulator_via_code_generator\data\tests\dev_transformed.cif"/>
            </type>
          </event>
        </events>
      </edges>
      <markeds xmi:type="expressions:BoolExpression" xmi:id="1161" value="true">
        <position xmi:type="position:Position" xmi:id="1162" source="File &quot;../data/tests\dev_transformed.cif&quot;: " startLine="283" endOffset="7233" startColumn="5" endLine="283" endColumn="10" startOffset="7228" location="C:\Users\rober\Documents\studie\afstuderen\development\simulator_via_code_generator\data\tests\dev_transformed.cif"/>
        <type xmi:type="types:BoolType" xmi:id="1163">
          <position xmi:type="position:Position" xmi:id="1164" source="File &quot;../data/tests\dev_transformed.cif&quot;: " startLine="283" endOffset="7233" startColumn="5" endLine="283" endColumn="10" startOffset="7228" location="C:\Users\rober\Documents\studie\afstuderen\development\simulator_via_code_generator\data\tests\dev_transformed.cif"/>
        </type>
      </markeds>
    </locations>
    <locations xmi:type="automata:Location" xmi:id="1165" name="CH0">
      <position xmi:type="position:Position" xmi:id="1166" source="File &quot;../data/tests\dev_transformed.cif&quot;: " startLine="287" endOffset="7352" startColumn="12" endLine="287" endColumn="14" startOffset="7350" location="C:\Users\rober\Documents\studie\afstuderen\development\simulator_via_code_generator\data\tests\dev_transformed.cif"/>
      <edges xmi:type="automata:Edge" xmi:id="1167" target="1489">
        <position xmi:type="position:Position" xmi:id="1168" source="File &quot;../data/tests\dev_transformed.cif&quot;: " startLine="289" endOffset="7376" startColumn="5" endLine="289" endColumn="8" startOffset="7373" location="C:\Users\rober\Documents\studie\afstuderen\development\simulator_via_code_generator\data\tests\dev_transformed.cif"/>
        <events xmi:type="automata:EdgeEvent" xmi:id="1169">
          <position xmi:type="position:Position" xmi:id="1170" source="File &quot;../data/tests\dev_transformed.cif&quot;: " startLine="289" endOffset="7388" startColumn="10" endLine="289" endColumn="20" startOffset="7378" location="C:\Users\rober\Documents\studie\afstuderen\development\simulator_via_code_generator\data\tests\dev_transformed.cif"/>
          <event xmi:type="expressions:EventExpression" xmi:id="1171" event="35">
            <position xmi:type="position:Position" xmi:id="1172" source="File &quot;../data/tests\dev_transformed.cif&quot;: " startLine="289" endOffset="7388" startColumn="10" endLine="289" endColumn="20" startOffset="7378" location="C:\Users\rober\Documents\studie\afstuderen\development\simulator_via_code_generator\data\tests\dev_transformed.cif"/>
            <type xmi:type="types:BoolType" xmi:id="1173">
              <position xmi:type="position:Position" xmi:id="1174" source="File &quot;../data/tests\dev_transformed.cif&quot;: " startLine="289" endOffset="7388" startColumn="10" endLine="289" endColumn="20" startOffset="7378" location="C:\Users\rober\Documents\studie\afstuderen\development\simulator_via_code_generator\data\tests\dev_transformed.cif"/>
            </type>
          </event>
        </events>
      </edges>
      <edges xmi:type="automata:Edge" xmi:id="1175" target="1499">
        <position xmi:type="position:Position" xmi:id="1176" source="File &quot;../data/tests\dev_transformed.cif&quot;: " startLine="290" endOffset="7412" startColumn="5" endLine="290" endColumn="8" startOffset="7409" location="C:\Users\rober\Documents\studie\afstuderen\development\simulator_via_code_generator\data\tests\dev_transformed.cif"/>
        <events xmi:type="automata:EdgeEvent" xmi:id="1177">
          <position xmi:type="position:Position" xmi:id="1178" source="File &quot;../data/tests\dev_transformed.cif&quot;: " startLine="290" endOffset="7424" startColumn="10" endLine="290" endColumn="20" startOffset="7414" location="C:\Users\rober\Documents\studie\afstuderen\development\simulator_via_code_generator\data\tests\dev_transformed.cif"/>
          <event xmi:type="expressions:EventExpression" xmi:id="1179" event="37">
            <position xmi:type="position:Position" xmi:id="1180" source="File &quot;../data/tests\dev_transformed.cif&quot;: " startLine="290" endOffset="7424" startColumn="10" endLine="290" endColumn="20" startOffset="7414" location="C:\Users\rober\Documents\studie\afstuderen\development\simulator_via_code_generator\data\tests\dev_transformed.cif"/>
            <type xmi:type="types:BoolType" xmi:id="1181">
              <position xmi:type="position:Position" xmi:id="1182" source="File &quot;../data/tests\dev_transformed.cif&quot;: " startLine="290" endOffset="7424" startColumn="10" endLine="290" endColumn="20" startOffset="7414" location="C:\Users\rober\Documents\studie\afstuderen\development\simulator_via_code_generator\data\tests\dev_transformed.cif"/>
            </type>
          </event>
        </events>
      </edges>
      <edges xmi:type="automata:Edge" xmi:id="1183" target="1289">
        <position xmi:type="position:Position" xmi:id="1184" source="File &quot;../data/tests\dev_transformed.cif&quot;: " startLine="291" endOffset="7448" startColumn="5" endLine="291" endColumn="8" startOffset="7445" location="C:\Users\rober\Documents\studie\afstuderen\development\simulator_via_code_generator\data\tests\dev_transformed.cif"/>
        <events xmi:type="automata:EdgeEvent" xmi:id="1185">
          <position xmi:type="position:Position" xmi:id="1186" source="File &quot;../data/tests\dev_transformed.cif&quot;: " startLine="291" endOffset="7464" startColumn="10" endLine="291" endColumn="24" startOffset="7450" location="C:\Users\rober\Documents\studie\afstuderen\development\simulator_via_code_generator\data\tests\dev_transformed.cif"/>
          <event xmi:type="expressions:EventExpression" xmi:id="1187" event="51">
            <position xmi:type="position:Position" xmi:id="1188" source="File &quot;../data/tests\dev_transformed.cif&quot;: " startLine="291" endOffset="7464" startColumn="10" endLine="291" endColumn="24" startOffset="7450" location="C:\Users\rober\Documents\studie\afstuderen\development\simulator_via_code_generator\data\tests\dev_transformed.cif"/>
            <type xmi:type="types:BoolType" xmi:id="1189">
              <position xmi:type="position:Position" xmi:id="1190" source="File &quot;../data/tests\dev_transformed.cif&quot;: " startLine="291" endOffset="7464" startColumn="10" endLine="291" endColumn="24" startOffset="7450" location="C:\Users\rober\Documents\studie\afstuderen\development\simulator_via_code_generator\data\tests\dev_transformed.cif"/>
            </type>
          </event>
        </events>
      </edges>
      <edges xmi:type="automata:Edge" xmi:id="1191" target="1299">
        <position xmi:type="position:Position" xmi:id="1192" source="File &quot;../data/tests\dev_transformed.cif&quot;: " startLine="292" endOffset="7499" startColumn="5" endLine="292" endColumn="8" startOffset="7496" location="C:\Users\rober\Documents\studie\afstuderen\development\simulator_via_code_generator\data\tests\dev_transformed.cif"/>
        <events xmi:type="automata:EdgeEvent" xmi:id="1193">
          <position xmi:type="position:Position" xmi:id="1194" source="File &quot;../data/tests\dev_transformed.cif&quot;: " startLine="292" endOffset="7514" startColumn="10" endLine="292" endColumn="23" startOffset="7501" location="C:\Users\rober\Documents\studie\afstuderen\development\simulator_via_code_generator\data\tests\dev_transformed.cif"/>
          <event xmi:type="expressions:EventExpression" xmi:id="1195" event="53">
            <position xmi:type="position:Position" xmi:id="1196" source="File &quot;../data/tests\dev_transformed.cif&quot;: " startLine="292" endOffset="7514" startColumn="10" endLine="292" endColumn="23" startOffset="7501" location="C:\Users\rober\Documents\studie\afstuderen\development\simulator_via_code_generator\data\tests\dev_transformed.cif"/>
            <type xmi:type="types:BoolType" xmi:id="1197">
              <position xmi:type="position:Position" xmi:id="1198" source="File &quot;../data/tests\dev_transformed.cif&quot;: " startLine="292" endOffset="7514" startColumn="10" endLine="292" endColumn="23" startOffset="7501" location="C:\Users\rober\Documents\studie\afstuderen\development\simulator_via_code_generator\data\tests\dev_transformed.cif"/>
            </type>
          </event>
        </events>
      </edges>
      <markeds xmi:type="expressions:BoolExpression" xmi:id="1199" value="true">
        <position xmi:type="position:Position" xmi:id="1200" source="File &quot;../data/tests\dev_transformed.cif&quot;: " startLine="288" endOffset="7365" startColumn="5" endLine="288" endColumn="10" startOffset="7360" location="C:\Users\rober\Documents\studie\afstuderen\development\simulator_via_code_generator\data\tests\dev_transformed.cif"/>
        <type xmi:type="types:BoolType" xmi:id="1201">
          <position xmi:type="position:Position" xmi:id="1202" source="File &quot;../data/tests\dev_transformed.cif&quot;: " startLine="288" endOffset="7365" startColumn="5" endLine="288" endColumn="10" startOffset="7360" location="C:\Users\rober\Documents\studie\afstuderen\development\simulator_via_code_generator\data\tests\dev_transformed.cif"/>
        </type>
      </markeds>
    </locations>
    <locations xmi:type="automata:Location" xmi:id="1203" name="CH1">
      <position xmi:type="position:Position" xmi:id="1204" source="File &quot;../data/tests\dev_transformed.cif&quot;: " startLine="293" endOffset="7554" startColumn="12" endLine="293" endColumn="14" startOffset="7552" location="C:\Users\rober\Documents\studie\afstuderen\development\simulator_via_code_generator\data\tests\dev_transformed.cif"/>
      <edges xmi:type="automata:Edge" xmi:id="1205" target="1509">
        <position xmi:type="position:Position" xmi:id="1206" source="File &quot;../data/tests\dev_transformed.cif&quot;: " startLine="295" endOffset="7578" startColumn="5" endLine="295" endColumn="8" startOffset="7575" location="C:\Users\rober\Documents\studie\afstuderen\development\simulator_via_code_generator\data\tests\dev_transformed.cif"/>
        <events xmi:type="automata:EdgeEvent" xmi:id="1207">
          <position xmi:type="position:Position" xmi:id="1208" source="File &quot;../data/tests\dev_transformed.cif&quot;: " startLine="295" endOffset="7590" startColumn="10" endLine="295" endColumn="20" startOffset="7580" location="C:\Users\rober\Documents\studie\afstuderen\development\simulator_via_code_generator\data\tests\dev_transformed.cif"/>
          <event xmi:type="expressions:EventExpression" xmi:id="1209" event="39">
            <position xmi:type="position:Position" xmi:id="1210" source="File &quot;../data/tests\dev_transformed.cif&quot;: " startLine="295" endOffset="7590" startColumn="10" endLine="295" endColumn="20" startOffset="7580" location="C:\Users\rober\Documents\studie\afstuderen\development\simulator_via_code_generator\data\tests\dev_transformed.cif"/>
            <type xmi:type="types:BoolType" xmi:id="1211">
              <position xmi:type="position:Position" xmi:id="1212" source="File &quot;../data/tests\dev_transformed.cif&quot;: " startLine="295" endOffset="7590" startColumn="10" endLine="295" endColumn="20" startOffset="7580" location="C:\Users\rober\Documents\studie\afstuderen\development\simulator_via_code_generator\data\tests\dev_transformed.cif"/>
            </type>
          </event>
        </events>
      </edges>
      <edges xmi:type="automata:Edge" xmi:id="1213" target="1519">
        <position xmi:type="position:Position" xmi:id="1214" source="File &quot;../data/tests\dev_transformed.cif&quot;: " startLine="296" endOffset="7614" startColumn="5" endLine="296" endColumn="8" startOffset="7611" location="C:\Users\rober\Documents\studie\afstuderen\development\simulator_via_code_generator\data\tests\dev_transformed.cif"/>
        <events xmi:type="automata:EdgeEvent" xmi:id="1215">
          <position xmi:type="position:Position" xmi:id="1216" source="File &quot;../data/tests\dev_transformed.cif&quot;: " startLine="296" endOffset="7626" startColumn="10" endLine="296" endColumn="20" startOffset="7616" location="C:\Users\rober\Documents\studie\afstuderen\development\simulator_via_code_generator\data\tests\dev_transformed.cif"/>
          <event xmi:type="expressions:EventExpression" xmi:id="1217" event="41">
            <position xmi:type="position:Position" xmi:id="1218" source="File &quot;../data/tests\dev_transformed.cif&quot;: " startLine="296" endOffset="7626" startColumn="10" endLine="296" endColumn="20" startOffset="7616" location="C:\Users\rober\Documents\studie\afstuderen\development\simulator_via_code_generator\data\tests\dev_transformed.cif"/>
            <type xmi:type="types:BoolType" xmi:id="1219">
              <position xmi:type="position:Position" xmi:id="1220" source="File &quot;../data/tests\dev_transformed.cif&quot;: " startLine="296" endOffset="7626" startColumn="10" endLine="296" endColumn="20" startOffset="7616" location="C:\Users\rober\Documents\studie\afstuderen\development\simulator_via_code_generator\data\tests\dev_transformed.cif"/>
            </type>
          </event>
        </events>
      </edges>
      <edges xmi:type="automata:Edge" xmi:id="1221" target="1309">
        <position xmi:type="position:Position" xmi:id="1222" source="File &quot;../data/tests\dev_transformed.cif&quot;: " startLine="297" endOffset="7650" startColumn="5" endLine="297" endColumn="8" startOffset="7647" location="C:\Users\rober\Documents\studie\afstuderen\development\simulator_via_code_generator\data\tests\dev_transformed.cif"/>
        <events xmi:type="automata:EdgeEvent" xmi:id="1223">
          <position xmi:type="position:Position" xmi:id="1224" source="File &quot;../data/tests\dev_transformed.cif&quot;: " startLine="297" endOffset="7666" startColumn="10" endLine="297" endColumn="24" startOffset="7652" location="C:\Users\rober\Documents\studie\afstuderen\development\simulator_via_code_generator\data\tests\dev_transformed.cif"/>
          <event xmi:type="expressions:EventExpression" xmi:id="1225" event="55">
            <position xmi:type="position:Position" xmi:id="1226" source="File &quot;../data/tests\dev_transformed.cif&quot;: " startLine="297" endOffset="7666" startColumn="10" endLine="297" endColumn="24" startOffset="7652" location="C:\Users\rober\Documents\studie\afstuderen\development\simulator_via_code_generator\data\tests\dev_transformed.cif"/>
            <type xmi:type="types:BoolType" xmi:id="1227">
              <position xmi:type="position:Position" xmi:id="1228" source="File &quot;../data/tests\dev_transformed.cif&quot;: " startLine="297" endOffset="7666" startColumn="10" endLine="297" endColumn="24" startOffset="7652" location="C:\Users\rober\Documents\studie\afstuderen\development\simulator_via_code_generator\data\tests\dev_transformed.cif"/>
            </type>
          </event>
        </events>
      </edges>
      <edges xmi:type="automata:Edge" xmi:id="1229" target="1319">
        <position xmi:type="position:Position" xmi:id="1230" source="File &quot;../data/tests\dev_transformed.cif&quot;: " startLine="298" endOffset="7701" startColumn="5" endLine="298" endColumn="8" startOffset="7698" location="C:\Users\rober\Documents\studie\afstuderen\development\simulator_via_code_generator\data\tests\dev_transformed.cif"/>
        <events xmi:type="automata:EdgeEvent" xmi:id="1231">
          <position xmi:type="position:Position" xmi:id="1232" source="File &quot;../data/tests\dev_transformed.cif&quot;: " startLine="298" endOffset="7716" startColumn="10" endLine="298" endColumn="23" startOffset="7703" location="C:\Users\rober\Documents\studie\afstuderen\development\simulator_via_code_generator\data\tests\dev_transformed.cif"/>
          <event xmi:type="expressions:EventExpression" xmi:id="1233" event="57">
            <position xmi:type="position:Position" xmi:id="1234" source="File &quot;../data/tests\dev_transformed.cif&quot;: " startLine="298" endOffset="7716" startColumn="10" endLine="298" endColumn="23" startOffset="7703" location="C:\Users\rober\Documents\studie\afstuderen\development\simulator_via_code_generator\data\tests\dev_transformed.cif"/>
            <type xmi:type="types:BoolType" xmi:id="1235">
              <position xmi:type="position:Position" xmi:id="1236" source="File &quot;../data/tests\dev_transformed.cif&quot;: " startLine="298" endOffset="7716" startColumn="10" endLine="298" endColumn="23" startOffset="7703" location="C:\Users\rober\Documents\studie\afstuderen\development\simulator_via_code_generator\data\tests\dev_transformed.cif"/>
            </type>
          </event>
        </events>
      </edges>
      <markeds xmi:type="expressions:BoolExpression" xmi:id="1237" value="true">
        <position xmi:type="position:Position" xmi:id="1238" source="File &quot;../data/tests\dev_transformed.cif&quot;: " startLine="294" endOffset="7567" startColumn="5" endLine="294" endColumn="10" startOffset="7562" location="C:\Users\rober\Documents\studie\afstuderen\development\simulator_via_code_generator\data\tests\dev_transformed.cif"/>
        <type xmi:type="types:BoolType" xmi:id="1239">
          <position xmi:type="position:Position" xmi:id="1240" source="File &quot;../data/tests\dev_transformed.cif&quot;: " startLine="294" endOffset="7567" startColumn="5" endLine="294" endColumn="10" startOffset="7562" location="C:\Users\rober\Documents\studie\afstuderen\development\simulator_via_code_generator\data\tests\dev_transformed.cif"/>
        </type>
      </markeds>
    </locations>
    <locations xmi:type="automata:Location" xmi:id="1241" name="CTC0">
      <position xmi:type="position:Position" xmi:id="1242" source="File &quot;../data/tests\dev_transformed.cif&quot;: " startLine="299" endOffset="7757" startColumn="12" endLine="299" endColumn="15" startOffset="7754" location="C:\Users\rober\Documents\studie\afstuderen\development\simulator_via_code_generator\data\tests\dev_transformed.cif"/>
      <edges xmi:type="automata:Edge" xmi:id="1243" target="1529">
        <position xmi:type="position:Position" xmi:id="1244" source="File &quot;../data/tests\dev_transformed.cif&quot;: " startLine="301" endOffset="7781" startColumn="5" endLine="301" endColumn="8" startOffset="7778" location="C:\Users\rober\Documents\studie\afstuderen\development\simulator_via_code_generator\data\tests\dev_transformed.cif"/>
        <events xmi:type="automata:EdgeEvent" xmi:id="1245">
          <position xmi:type="position:Position" xmi:id="1246" source="File &quot;../data/tests\dev_transformed.cif&quot;: " startLine="301" endOffset="7794" startColumn="10" endLine="301" endColumn="21" startOffset="7783" location="C:\Users\rober\Documents\studie\afstuderen\development\simulator_via_code_generator\data\tests\dev_transformed.cif"/>
          <event xmi:type="expressions:EventExpression" xmi:id="1247" event="43">
            <position xmi:type="position:Position" xmi:id="1248" source="File &quot;../data/tests\dev_transformed.cif&quot;: " startLine="301" endOffset="7794" startColumn="10" endLine="301" endColumn="21" startOffset="7783" location="C:\Users\rober\Documents\studie\afstuderen\development\simulator_via_code_generator\data\tests\dev_transformed.cif"/>
            <type xmi:type="types:BoolType" xmi:id="1249">
              <position xmi:type="position:Position" xmi:id="1250" source="File &quot;../data/tests\dev_transformed.cif&quot;: " startLine="301" endOffset="7794" startColumn="10" endLine="301" endColumn="21" startOffset="7783" location="C:\Users\rober\Documents\studie\afstuderen\development\simulator_via_code_generator\data\tests\dev_transformed.cif"/>
            </type>
          </event>
        </events>
      </edges>
      <markeds xmi:type="expressions:BoolExpression" xmi:id="1251" value="true">
        <position xmi:type="position:Position" xmi:id="1252" source="File &quot;../data/tests\dev_transformed.cif&quot;: " startLine="300" endOffset="7770" startColumn="5" endLine="300" endColumn="10" startOffset="7765" location="C:\Users\rober\Documents\studie\afstuderen\development\simulator_via_code_generator\data\tests\dev_transformed.cif"/>
        <type xmi:type="types:BoolType" xmi:id="1253">
          <position xmi:type="position:Position" xmi:id="1254" source="File &quot;../data/tests\dev_transformed.cif&quot;: " startLine="300" endOffset="7770" startColumn="5" endLine="300" endColumn="10" startOffset="7765" location="C:\Users\rober\Documents\studie\afstuderen\development\simulator_via_code_generator\data\tests\dev_transformed.cif"/>
        </type>
      </markeds>
    </locations>
    <locations xmi:type="automata:Location" xmi:id="1255" name="CTC1">
      <position xmi:type="position:Position" xmi:id="1256" source="File &quot;../data/tests\dev_transformed.cif&quot;: " startLine="302" endOffset="7826" startColumn="12" endLine="302" endColumn="15" startOffset="7823" location="C:\Users\rober\Documents\studie\afstuderen\development\simulator_via_code_generator\data\tests\dev_transformed.cif"/>
      <edges xmi:type="automata:Edge" xmi:id="1257" target="1539">
        <position xmi:type="position:Position" xmi:id="1258" source="File &quot;../data/tests\dev_transformed.cif&quot;: " startLine="304" endOffset="7850" startColumn="5" endLine="304" endColumn="8" startOffset="7847" location="C:\Users\rober\Documents\studie\afstuderen\development\simulator_via_code_generator\data\tests\dev_transformed.cif"/>
        <events xmi:type="automata:EdgeEvent" xmi:id="1259">
          <position xmi:type="position:Position" xmi:id="1260" source="File &quot;../data/tests\dev_transformed.cif&quot;: " startLine="304" endOffset="7863" startColumn="10" endLine="304" endColumn="21" startOffset="7852" location="C:\Users\rober\Documents\studie\afstuderen\development\simulator_via_code_generator\data\tests\dev_transformed.cif"/>
          <event xmi:type="expressions:EventExpression" xmi:id="1261" event="45">
            <position xmi:type="position:Position" xmi:id="1262" source="File &quot;../data/tests\dev_transformed.cif&quot;: " startLine="304" endOffset="7863" startColumn="10" endLine="304" endColumn="21" startOffset="7852" location="C:\Users\rober\Documents\studie\afstuderen\development\simulator_via_code_generator\data\tests\dev_transformed.cif"/>
            <type xmi:type="types:BoolType" xmi:id="1263">
              <position xmi:type="position:Position" xmi:id="1264" source="File &quot;../data/tests\dev_transformed.cif&quot;: " startLine="304" endOffset="7863" startColumn="10" endLine="304" endColumn="21" startOffset="7852" location="C:\Users\rober\Documents\studie\afstuderen\development\simulator_via_code_generator\data\tests\dev_transformed.cif"/>
            </type>
          </event>
        </events>
      </edges>
      <markeds xmi:type="expressions:BoolExpression" xmi:id="1265" value="true">
        <position xmi:type="position:Position" xmi:id="1266" source="File &quot;../data/tests\dev_transformed.cif&quot;: " startLine="303" endOffset="7839" startColumn="5" endLine="303" endColumn="10" startOffset="7834" location="C:\Users\rober\Documents\studie\afstuderen\development\simulator_via_code_generator\data\tests\dev_transformed.cif"/>
        <type xmi:type="types:BoolType" xmi:id="1267">
          <position xmi:type="position:Position" xmi:id="1268" source="File &quot;../data/tests\dev_transformed.cif&quot;: " startLine="303" endOffset="7839" startColumn="5" endLine="303" endColumn="10" startOffset="7834" location="C:\Users\rober\Documents\studie\afstuderen\development\simulator_via_code_generator\data\tests\dev_transformed.cif"/>
        </type>
      </markeds>
    </locations>
    <locations xmi:type="automata:Location" xmi:id="1269" name="SUB_ConditionRunning">
      <position xmi:type="position:Position" xmi:id="1270" source="File &quot;../data/tests\dev_transformed.cif&quot;: " startLine="305" endOffset="7911" startColumn="12" endLine="305" endColumn="31" startOffset="7892" location="C:\Users\rober\Documents\studie\afstuderen\development\simulator_via_code_generator\data\tests\dev_transformed.cif"/>
      <edges xmi:type="automata:Edge" xmi:id="1271" target="999">
        <position xmi:type="position:Position" xmi:id="1272" source="File &quot;../data/tests\dev_transformed.cif&quot;: " startLine="306" endOffset="7922" startColumn="5" endLine="306" endColumn="8" startOffset="7919" location="C:\Users\rober\Documents\studie\afstuderen\development\simulator_via_code_generator\data\tests\dev_transformed.cif"/>
        <events xmi:type="automata:EdgeEvent" xmi:id="1273">
          <position xmi:type="position:Position" xmi:id="1274" source="File &quot;../data/tests\dev_transformed.cif&quot;: " startLine="306" endOffset="7940" startColumn="10" endLine="306" endColumn="26" startOffset="7924" location="C:\Users\rober\Documents\studie\afstuderen\development\simulator_via_code_generator\data\tests\dev_transformed.cif"/>
          <event xmi:type="expressions:EventExpression" xmi:id="1275" event="103">
            <position xmi:type="position:Position" xmi:id="1276" source="File &quot;../data/tests\dev_transformed.cif&quot;: " startLine="306" endOffset="7940" startColumn="10" endLine="306" endColumn="26" startOffset="7924" location="C:\Users\rober\Documents\studie\afstuderen\development\simulator_via_code_generator\data\tests\dev_transformed.cif"/>
            <type xmi:type="types:BoolType" xmi:id="1277">
              <position xmi:type="position:Position" xmi:id="1278" source="File &quot;../data/tests\dev_transformed.cif&quot;: " startLine="306" endOffset="7940" startColumn="10" endLine="306" endColumn="26" startOffset="7924" location="C:\Users\rober\Documents\studie\afstuderen\development\simulator_via_code_generator\data\tests\dev_transformed.cif"/>
            </type>
          </event>
        </events>
      </edges>
    </locations>
    <locations xmi:type="automata:Location" xmi:id="1279" name="PA_AlignRunning">
      <position xmi:type="position:Position" xmi:id="1280" source="File &quot;../data/tests\dev_transformed.cif&quot;: " startLine="307" endOffset="7978" startColumn="12" endLine="307" endColumn="26" startOffset="7964" location="C:\Users\rober\Documents\studie\afstuderen\development\simulator_via_code_generator\data\tests\dev_transformed.cif"/>
      <edges xmi:type="automata:Edge" xmi:id="1281" target="1059">
        <position xmi:type="position:Position" xmi:id="1282" source="File &quot;../data/tests\dev_transformed.cif&quot;: " startLine="308" endOffset="7989" startColumn="5" endLine="308" endColumn="8" startOffset="7986" location="C:\Users\rober\Documents\studie\afstuderen\development\simulator_via_code_generator\data\tests\dev_transformed.cif"/>
        <events xmi:type="automata:EdgeEvent" xmi:id="1283">
          <position xmi:type="position:Position" xmi:id="1284" source="File &quot;../data/tests\dev_transformed.cif&quot;: " startLine="308" endOffset="8002" startColumn="10" endLine="308" endColumn="21" startOffset="7991" location="C:\Users\rober\Documents\studie\afstuderen\development\simulator_via_code_generator\data\tests\dev_transformed.cif"/>
          <event xmi:type="expressions:EventExpression" xmi:id="1285" event="105">
            <position xmi:type="position:Position" xmi:id="1286" source="File &quot;../data/tests\dev_transformed.cif&quot;: " startLine="308" endOffset="8002" startColumn="10" endLine="308" endColumn="21" startOffset="7991" location="C:\Users\rober\Documents\studie\afstuderen\development\simulator_via_code_generator\data\tests\dev_transformed.cif"/>
            <type xmi:type="types:BoolType" xmi:id="1287">
              <position xmi:type="position:Position" xmi:id="1288" source="File &quot;../data/tests\dev_transformed.cif&quot;: " startLine="308" endOffset="8002" startColumn="10" endLine="308" endColumn="21" startOffset="7991" location="C:\Users\rober\Documents\studie\afstuderen\development\simulator_via_code_generator\data\tests\dev_transformed.cif"/>
            </type>
          </event>
        </events>
      </edges>
    </locations>
    <locations xmi:type="automata:Location" xmi:id="1289" name="CH0_MeasureRunning">
      <position xmi:type="position:Position" xmi:id="1290" source="File &quot;../data/tests\dev_transformed.cif&quot;: " startLine="309" endOffset="8042" startColumn="12" endLine="309" endColumn="29" startOffset="8025" location="C:\Users\rober\Documents\studie\afstuderen\development\simulator_via_code_generator\data\tests\dev_transformed.cif"/>
      <edges xmi:type="automata:Edge" xmi:id="1291" target="1165">
        <position xmi:type="position:Position" xmi:id="1292" source="File &quot;../data/tests\dev_transformed.cif&quot;: " startLine="310" endOffset="8053" startColumn="5" endLine="310" endColumn="8" startOffset="8050" location="C:\Users\rober\Documents\studie\afstuderen\development\simulator_via_code_generator\data\tests\dev_transformed.cif"/>
        <events xmi:type="automata:EdgeEvent" xmi:id="1293">
          <position xmi:type="position:Position" xmi:id="1294" source="File &quot;../data/tests\dev_transformed.cif&quot;: " startLine="310" endOffset="8069" startColumn="10" endLine="310" endColumn="24" startOffset="8055" location="C:\Users\rober\Documents\studie\afstuderen\development\simulator_via_code_generator\data\tests\dev_transformed.cif"/>
          <event xmi:type="expressions:EventExpression" xmi:id="1295" event="107">
            <position xmi:type="position:Position" xmi:id="1296" source="File &quot;../data/tests\dev_transformed.cif&quot;: " startLine="310" endOffset="8069" startColumn="10" endLine="310" endColumn="24" startOffset="8055" location="C:\Users\rober\Documents\studie\afstuderen\development\simulator_via_code_generator\data\tests\dev_transformed.cif"/>
            <type xmi:type="types:BoolType" xmi:id="1297">
              <position xmi:type="position:Position" xmi:id="1298" source="File &quot;../data/tests\dev_transformed.cif&quot;: " startLine="310" endOffset="8069" startColumn="10" endLine="310" endColumn="24" startOffset="8055" location="C:\Users\rober\Documents\studie\afstuderen\development\simulator_via_code_generator\data\tests\dev_transformed.cif"/>
            </type>
          </event>
        </events>
      </edges>
    </locations>
    <locations xmi:type="automata:Location" xmi:id="1299" name="CH0_ExposeRunning">
      <position xmi:type="position:Position" xmi:id="1300" source="File &quot;../data/tests\dev_transformed.cif&quot;: " startLine="311" endOffset="8109" startColumn="12" endLine="311" endColumn="28" startOffset="8093" location="C:\Users\rober\Documents\studie\afstuderen\development\simulator_via_code_generator\data\tests\dev_transformed.cif"/>
      <edges xmi:type="automata:Edge" xmi:id="1301" target="1165">
        <position xmi:type="position:Position" xmi:id="1302" source="File &quot;../data/tests\dev_transformed.cif&quot;: " startLine="312" endOffset="8120" startColumn="5" endLine="312" endColumn="8" startOffset="8117" location="C:\Users\rober\Documents\studie\afstuderen\development\simulator_via_code_generator\data\tests\dev_transformed.cif"/>
        <events xmi:type="automata:EdgeEvent" xmi:id="1303">
          <position xmi:type="position:Position" xmi:id="1304" source="File &quot;../data/tests\dev_transformed.cif&quot;: " startLine="312" endOffset="8135" startColumn="10" endLine="312" endColumn="23" startOffset="8122" location="C:\Users\rober\Documents\studie\afstuderen\development\simulator_via_code_generator\data\tests\dev_transformed.cif"/>
          <event xmi:type="expressions:EventExpression" xmi:id="1305" event="109">
            <position xmi:type="position:Position" xmi:id="1306" source="File &quot;../data/tests\dev_transformed.cif&quot;: " startLine="312" endOffset="8135" startColumn="10" endLine="312" endColumn="23" startOffset="8122" location="C:\Users\rober\Documents\studie\afstuderen\development\simulator_via_code_generator\data\tests\dev_transformed.cif"/>
            <type xmi:type="types:BoolType" xmi:id="1307">
              <position xmi:type="position:Position" xmi:id="1308" source="File &quot;../data/tests\dev_transformed.cif&quot;: " startLine="312" endOffset="8135" startColumn="10" endLine="312" endColumn="23" startOffset="8122" location="C:\Users\rober\Documents\studie\afstuderen\development\simulator_via_code_generator\data\tests\dev_transformed.cif"/>
            </type>
          </event>
        </events>
      </edges>
    </locations>
    <locations xmi:type="automata:Location" xmi:id="1309" name="CH1_MeasureRunning">
      <position xmi:type="position:Position" xmi:id="1310" source="File &quot;../data/tests\dev_transformed.cif&quot;: " startLine="313" endOffset="8176" startColumn="12" endLine="313" endColumn="29" startOffset="8159" location="C:\Users\rober\Documents\studie\afstuderen\development\simulator_via_code_generator\data\tests\dev_transformed.cif"/>
      <edges xmi:type="automata:Edge" xmi:id="1311" target="1203">
        <position xmi:type="position:Position" xmi:id="1312" source="File &quot;../data/tests\dev_transformed.cif&quot;: " startLine="314" endOffset="8187" startColumn="5" endLine="314" endColumn="8" startOffset="8184" location="C:\Users\rober\Documents\studie\afstuderen\development\simulator_via_code_generator\data\tests\dev_transformed.cif"/>
        <events xmi:type="automata:EdgeEvent" xmi:id="1313">
          <position xmi:type="position:Position" xmi:id="1314" source="File &quot;../data/tests\dev_transformed.cif&quot;: " startLine="314" endOffset="8203" startColumn="10" endLine="314" endColumn="24" startOffset="8189" location="C:\Users\rober\Documents\studie\afstuderen\development\simulator_via_code_generator\data\tests\dev_transformed.cif"/>
          <event xmi:type="expressions:EventExpression" xmi:id="1315" event="111">
            <position xmi:type="position:Position" xmi:id="1316" source="File &quot;../data/tests\dev_transformed.cif&quot;: " startLine="314" endOffset="8203" startColumn="10" endLine="314" endColumn="24" startOffset="8189" location="C:\Users\rober\Documents\studie\afstuderen\development\simulator_via_code_generator\data\tests\dev_transformed.cif"/>
            <type xmi:type="types:BoolType" xmi:id="1317">
              <position xmi:type="position:Position" xmi:id="1318" source="File &quot;../data/tests\dev_transformed.cif&quot;: " startLine="314" endOffset="8203" startColumn="10" endLine="314" endColumn="24" startOffset="8189" location="C:\Users\rober\Documents\studie\afstuderen\development\simulator_via_code_generator\data\tests\dev_transformed.cif"/>
            </type>
          </event>
        </events>
      </edges>
    </locations>
    <locations xmi:type="automata:Location" xmi:id="1319" name="CH1_ExposeRunning">
      <position xmi:type="position:Position" xmi:id="1320" source="File &quot;../data/tests\dev_transformed.cif&quot;: " startLine="315" endOffset="8243" startColumn="12" endLine="315" endColumn="28" startOffset="8227" location="C:\Users\rober\Documents\studie\afstuderen\development\simulator_via_code_generator\data\tests\dev_transformed.cif"/>
      <edges xmi:type="automata:Edge" xmi:id="1321" target="1203">
        <position xmi:type="position:Position" xmi:id="1322" source="File &quot;../data/tests\dev_transformed.cif&quot;: " startLine="316" endOffset="8254" startColumn="5" endLine="316" endColumn="8" startOffset="8251" location="C:\Users\rober\Documents\studie\afstuderen\development\simulator_via_code_generator\data\tests\dev_transformed.cif"/>
        <events xmi:type="automata:EdgeEvent" xmi:id="1323">
          <position xmi:type="position:Position" xmi:id="1324" source="File &quot;../data/tests\dev_transformed.cif&quot;: " startLine="316" endOffset="8269" startColumn="10" endLine="316" endColumn="23" startOffset="8256" location="C:\Users\rober\Documents\studie\afstuderen\development\simulator_via_code_generator\data\tests\dev_transformed.cif"/>
          <event xmi:type="expressions:EventExpression" xmi:id="1325" event="113">
            <position xmi:type="position:Position" xmi:id="1326" source="File &quot;../data/tests\dev_transformed.cif&quot;: " startLine="316" endOffset="8269" startColumn="10" endLine="316" endColumn="23" startOffset="8256" location="C:\Users\rober\Documents\studie\afstuderen\development\simulator_via_code_generator\data\tests\dev_transformed.cif"/>
            <type xmi:type="types:BoolType" xmi:id="1327">
              <position xmi:type="position:Position" xmi:id="1328" source="File &quot;../data/tests\dev_transformed.cif&quot;: " startLine="316" endOffset="8269" startColumn="10" endLine="316" endColumn="23" startOffset="8256" location="C:\Users\rober\Documents\studie\afstuderen\development\simulator_via_code_generator\data\tests\dev_transformed.cif"/>
            </type>
          </event>
        </events>
      </edges>
    </locations>
    <locations xmi:type="automata:Location" xmi:id="1329" name="TRtoSUB">
      <position xmi:type="position:Position" xmi:id="1330" source="File &quot;../data/tests\dev_transformed.cif&quot;: " startLine="317" endOffset="8299" startColumn="12" endLine="317" endColumn="18" startOffset="8293" location="C:\Users\rober\Documents\studie\afstuderen\development\simulator_via_code_generator\data\tests\dev_transformed.cif"/>
      <edges xmi:type="automata:Edge" xmi:id="1331" target="999">
        <position xmi:type="position:Position" xmi:id="1332" source="File &quot;../data/tests\dev_transformed.cif&quot;: " startLine="318" endOffset="8310" startColumn="5" endLine="318" endColumn="8" startOffset="8307" location="C:\Users\rober\Documents\studie\afstuderen\development\simulator_via_code_generator\data\tests\dev_transformed.cif"/>
        <events xmi:type="automata:EdgeEvent" xmi:id="1333">
          <position xmi:type="position:Position" xmi:id="1334" source="File &quot;../data/tests\dev_transformed.cif&quot;: " startLine="318" endOffset="8322" startColumn="10" endLine="318" endColumn="20" startOffset="8312" location="C:\Users\rober\Documents\studie\afstuderen\development\simulator_via_code_generator\data\tests\dev_transformed.cif"/>
          <event xmi:type="expressions:EventExpression" xmi:id="1335" event="59">
            <position xmi:type="position:Position" xmi:id="1336" source="File &quot;../data/tests\dev_transformed.cif&quot;: " startLine="318" endOffset="8322" startColumn="10" endLine="318" endColumn="20" startOffset="8312" location="C:\Users\rober\Documents\studie\afstuderen\development\simulator_via_code_generator\data\tests\dev_transformed.cif"/>
            <type xmi:type="types:BoolType" xmi:id="1337">
              <position xmi:type="position:Position" xmi:id="1338" source="File &quot;../data/tests\dev_transformed.cif&quot;: " startLine="318" endOffset="8322" startColumn="10" endLine="318" endColumn="20" startOffset="8312" location="C:\Users\rober\Documents\studie\afstuderen\development\simulator_via_code_generator\data\tests\dev_transformed.cif"/>
            </type>
          </event>
        </events>
      </edges>
    </locations>
    <locations xmi:type="automata:Location" xmi:id="1339" name="SUBtoUR">
      <position xmi:type="position:Position" xmi:id="1340" source="File &quot;../data/tests\dev_transformed.cif&quot;: " startLine="319" endOffset="8352" startColumn="12" endLine="319" endColumn="18" startOffset="8346" location="C:\Users\rober\Documents\studie\afstuderen\development\simulator_via_code_generator\data\tests\dev_transformed.cif"/>
      <edges xmi:type="automata:Edge" xmi:id="1341" target="1021">
        <position xmi:type="position:Position" xmi:id="1342" source="File &quot;../data/tests\dev_transformed.cif&quot;: " startLine="320" endOffset="8363" startColumn="5" endLine="320" endColumn="8" startOffset="8360" location="C:\Users\rober\Documents\studie\afstuderen\development\simulator_via_code_generator\data\tests\dev_transformed.cif"/>
        <events xmi:type="automata:EdgeEvent" xmi:id="1343">
          <position xmi:type="position:Position" xmi:id="1344" source="File &quot;../data/tests\dev_transformed.cif&quot;: " startLine="320" endOffset="8375" startColumn="10" endLine="320" endColumn="20" startOffset="8365" location="C:\Users\rober\Documents\studie\afstuderen\development\simulator_via_code_generator\data\tests\dev_transformed.cif"/>
          <event xmi:type="expressions:EventExpression" xmi:id="1345" event="61">
            <position xmi:type="position:Position" xmi:id="1346" source="File &quot;../data/tests\dev_transformed.cif&quot;: " startLine="320" endOffset="8375" startColumn="10" endLine="320" endColumn="20" startOffset="8365" location="C:\Users\rober\Documents\studie\afstuderen\development\simulator_via_code_generator\data\tests\dev_transformed.cif"/>
            <type xmi:type="types:BoolType" xmi:id="1347">
              <position xmi:type="position:Position" xmi:id="1348" source="File &quot;../data/tests\dev_transformed.cif&quot;: " startLine="320" endOffset="8375" startColumn="10" endLine="320" endColumn="20" startOffset="8365" location="C:\Users\rober\Documents\studie\afstuderen\development\simulator_via_code_generator\data\tests\dev_transformed.cif"/>
            </type>
          </event>
        </events>
      </edges>
    </locations>
    <locations xmi:type="automata:Location" xmi:id="1349" name="URtoSUB">
      <position xmi:type="position:Position" xmi:id="1350" source="File &quot;../data/tests\dev_transformed.cif&quot;: " startLine="321" endOffset="8404" startColumn="12" endLine="321" endColumn="18" startOffset="8398" location="C:\Users\rober\Documents\studie\afstuderen\development\simulator_via_code_generator\data\tests\dev_transformed.cif"/>
      <edges xmi:type="automata:Edge" xmi:id="1351" target="999">
        <position xmi:type="position:Position" xmi:id="1352" source="File &quot;../data/tests\dev_transformed.cif&quot;: " startLine="322" endOffset="8415" startColumn="5" endLine="322" endColumn="8" startOffset="8412" location="C:\Users\rober\Documents\studie\afstuderen\development\simulator_via_code_generator\data\tests\dev_transformed.cif"/>
        <events xmi:type="automata:EdgeEvent" xmi:id="1353">
          <position xmi:type="position:Position" xmi:id="1354" source="File &quot;../data/tests\dev_transformed.cif&quot;: " startLine="322" endOffset="8427" startColumn="10" endLine="322" endColumn="20" startOffset="8417" location="C:\Users\rober\Documents\studie\afstuderen\development\simulator_via_code_generator\data\tests\dev_transformed.cif"/>
          <event xmi:type="expressions:EventExpression" xmi:id="1355" event="63">
            <position xmi:type="position:Position" xmi:id="1356" source="File &quot;../data/tests\dev_transformed.cif&quot;: " startLine="322" endOffset="8427" startColumn="10" endLine="322" endColumn="20" startOffset="8417" location="C:\Users\rober\Documents\studie\afstuderen\development\simulator_via_code_generator\data\tests\dev_transformed.cif"/>
            <type xmi:type="types:BoolType" xmi:id="1357">
              <position xmi:type="position:Position" xmi:id="1358" source="File &quot;../data/tests\dev_transformed.cif&quot;: " startLine="322" endOffset="8427" startColumn="10" endLine="322" endColumn="20" startOffset="8417" location="C:\Users\rober\Documents\studie\afstuderen\development\simulator_via_code_generator\data\tests\dev_transformed.cif"/>
            </type>
          </event>
        </events>
      </edges>
    </locations>
    <locations xmi:type="automata:Location" xmi:id="1359" name="URtoDU">
      <position xmi:type="position:Position" xmi:id="1360" source="File &quot;../data/tests\dev_transformed.cif&quot;: " startLine="323" endOffset="8456" startColumn="12" endLine="323" endColumn="17" startOffset="8451" location="C:\Users\rober\Documents\studie\afstuderen\development\simulator_via_code_generator\data\tests\dev_transformed.cif"/>
      <edges xmi:type="automata:Edge" xmi:id="1361" target="1135">
        <position xmi:type="position:Position" xmi:id="1362" source="File &quot;../data/tests\dev_transformed.cif&quot;: " startLine="324" endOffset="8467" startColumn="5" endLine="324" endColumn="8" startOffset="8464" location="C:\Users\rober\Documents\studie\afstuderen\development\simulator_via_code_generator\data\tests\dev_transformed.cif"/>
        <events xmi:type="automata:EdgeEvent" xmi:id="1363">
          <position xmi:type="position:Position" xmi:id="1364" source="File &quot;../data/tests\dev_transformed.cif&quot;: " startLine="324" endOffset="8478" startColumn="10" endLine="324" endColumn="19" startOffset="8469" location="C:\Users\rober\Documents\studie\afstuderen\development\simulator_via_code_generator\data\tests\dev_transformed.cif"/>
          <event xmi:type="expressions:EventExpression" xmi:id="1365" event="65">
            <position xmi:type="position:Position" xmi:id="1366" source="File &quot;../data/tests\dev_transformed.cif&quot;: " startLine="324" endOffset="8478" startColumn="10" endLine="324" endColumn="19" startOffset="8469" location="C:\Users\rober\Documents\studie\afstuderen\development\simulator_via_code_generator\data\tests\dev_transformed.cif"/>
            <type xmi:type="types:BoolType" xmi:id="1367">
              <position xmi:type="position:Position" xmi:id="1368" source="File &quot;../data/tests\dev_transformed.cif&quot;: " startLine="324" endOffset="8478" startColumn="10" endLine="324" endColumn="19" startOffset="8469" location="C:\Users\rober\Documents\studie\afstuderen\development\simulator_via_code_generator\data\tests\dev_transformed.cif"/>
            </type>
          </event>
        </events>
      </edges>
    </locations>
    <locations xmi:type="automata:Location" xmi:id="1369" name="URtoPA">
      <position xmi:type="position:Position" xmi:id="1370" source="File &quot;../data/tests\dev_transformed.cif&quot;: " startLine="325" endOffset="8506" startColumn="12" endLine="325" endColumn="17" startOffset="8501" location="C:\Users\rober\Documents\studie\afstuderen\development\simulator_via_code_generator\data\tests\dev_transformed.cif"/>
      <edges xmi:type="automata:Edge" xmi:id="1371" target="1059">
        <position xmi:type="position:Position" xmi:id="1372" source="File &quot;../data/tests\dev_transformed.cif&quot;: " startLine="326" endOffset="8517" startColumn="5" endLine="326" endColumn="8" startOffset="8514" location="C:\Users\rober\Documents\studie\afstuderen\development\simulator_via_code_generator\data\tests\dev_transformed.cif"/>
        <events xmi:type="automata:EdgeEvent" xmi:id="1373">
          <position xmi:type="position:Position" xmi:id="1374" source="File &quot;../data/tests\dev_transformed.cif&quot;: " startLine="326" endOffset="8528" startColumn="10" endLine="326" endColumn="19" startOffset="8519" location="C:\Users\rober\Documents\studie\afstuderen\development\simulator_via_code_generator\data\tests\dev_transformed.cif"/>
          <event xmi:type="expressions:EventExpression" xmi:id="1375" event="67">
            <position xmi:type="position:Position" xmi:id="1376" source="File &quot;../data/tests\dev_transformed.cif&quot;: " startLine="326" endOffset="8528" startColumn="10" endLine="326" endColumn="19" startOffset="8519" location="C:\Users\rober\Documents\studie\afstuderen\development\simulator_via_code_generator\data\tests\dev_transformed.cif"/>
            <type xmi:type="types:BoolType" xmi:id="1377">
              <position xmi:type="position:Position" xmi:id="1378" source="File &quot;../data/tests\dev_transformed.cif&quot;: " startLine="326" endOffset="8528" startColumn="10" endLine="326" endColumn="19" startOffset="8519" location="C:\Users\rober\Documents\studie\afstuderen\development\simulator_via_code_generator\data\tests\dev_transformed.cif"/>
            </type>
          </event>
        </events>
      </edges>
    </locations>
    <locations xmi:type="automata:Location" xmi:id="1379" name="URtoCTC1">
      <position xmi:type="position:Position" xmi:id="1380" source="File &quot;../data/tests\dev_transformed.cif&quot;: " startLine="327" endOffset="8558" startColumn="12" endLine="327" endColumn="19" startOffset="8551" location="C:\Users\rober\Documents\studie\afstuderen\development\simulator_via_code_generator\data\tests\dev_transformed.cif"/>
      <edges xmi:type="automata:Edge" xmi:id="1381" target="1255">
        <position xmi:type="position:Position" xmi:id="1382" source="File &quot;../data/tests\dev_transformed.cif&quot;: " startLine="328" endOffset="8569" startColumn="5" endLine="328" endColumn="8" startOffset="8566" location="C:\Users\rober\Documents\studie\afstuderen\development\simulator_via_code_generator\data\tests\dev_transformed.cif"/>
        <events xmi:type="automata:EdgeEvent" xmi:id="1383">
          <position xmi:type="position:Position" xmi:id="1384" source="File &quot;../data/tests\dev_transformed.cif&quot;: " startLine="328" endOffset="8582" startColumn="10" endLine="328" endColumn="21" startOffset="8571" location="C:\Users\rober\Documents\studie\afstuderen\development\simulator_via_code_generator\data\tests\dev_transformed.cif"/>
          <event xmi:type="expressions:EventExpression" xmi:id="1385" event="69">
            <position xmi:type="position:Position" xmi:id="1386" source="File &quot;../data/tests\dev_transformed.cif&quot;: " startLine="328" endOffset="8582" startColumn="10" endLine="328" endColumn="21" startOffset="8571" location="C:\Users\rober\Documents\studie\afstuderen\development\simulator_via_code_generator\data\tests\dev_transformed.cif"/>
            <type xmi:type="types:BoolType" xmi:id="1387">
              <position xmi:type="position:Position" xmi:id="1388" source="File &quot;../data/tests\dev_transformed.cif&quot;: " startLine="328" endOffset="8582" startColumn="10" endLine="328" endColumn="21" startOffset="8571" location="C:\Users\rober\Documents\studie\afstuderen\development\simulator_via_code_generator\data\tests\dev_transformed.cif"/>
            </type>
          </event>
        </events>
      </edges>
    </locations>
    <locations xmi:type="automata:Location" xmi:id="1389" name="PAtoUR">
      <position xmi:type="position:Position" xmi:id="1390" source="File &quot;../data/tests\dev_transformed.cif&quot;: " startLine="329" endOffset="8612" startColumn="12" endLine="329" endColumn="17" startOffset="8607" location="C:\Users\rober\Documents\studie\afstuderen\development\simulator_via_code_generator\data\tests\dev_transformed.cif"/>
      <edges xmi:type="automata:Edge" xmi:id="1391" target="1021">
        <position xmi:type="position:Position" xmi:id="1392" source="File &quot;../data/tests\dev_transformed.cif&quot;: " startLine="330" endOffset="8623" startColumn="5" endLine="330" endColumn="8" startOffset="8620" location="C:\Users\rober\Documents\studie\afstuderen\development\simulator_via_code_generator\data\tests\dev_transformed.cif"/>
        <events xmi:type="automata:EdgeEvent" xmi:id="1393">
          <position xmi:type="position:Position" xmi:id="1394" source="File &quot;../data/tests\dev_transformed.cif&quot;: " startLine="330" endOffset="8634" startColumn="10" endLine="330" endColumn="19" startOffset="8625" location="C:\Users\rober\Documents\studie\afstuderen\development\simulator_via_code_generator\data\tests\dev_transformed.cif"/>
          <event xmi:type="expressions:EventExpression" xmi:id="1395" event="71">
            <position xmi:type="position:Position" xmi:id="1396" source="File &quot;../data/tests\dev_transformed.cif&quot;: " startLine="330" endOffset="8634" startColumn="10" endLine="330" endColumn="19" startOffset="8625" location="C:\Users\rober\Documents\studie\afstuderen\development\simulator_via_code_generator\data\tests\dev_transformed.cif"/>
            <type xmi:type="types:BoolType" xmi:id="1397">
              <position xmi:type="position:Position" xmi:id="1398" source="File &quot;../data/tests\dev_transformed.cif&quot;: " startLine="330" endOffset="8634" startColumn="10" endLine="330" endColumn="19" startOffset="8625" location="C:\Users\rober\Documents\studie\afstuderen\development\simulator_via_code_generator\data\tests\dev_transformed.cif"/>
            </type>
          </event>
        </events>
      </edges>
    </locations>
    <locations xmi:type="automata:Location" xmi:id="1399" name="PAtoLR">
      <position xmi:type="position:Position" xmi:id="1400" source="File &quot;../data/tests\dev_transformed.cif&quot;: " startLine="331" endOffset="8662" startColumn="12" endLine="331" endColumn="17" startOffset="8657" location="C:\Users\rober\Documents\studie\afstuderen\development\simulator_via_code_generator\data\tests\dev_transformed.cif"/>
      <edges xmi:type="automata:Edge" xmi:id="1401" target="1089">
        <position xmi:type="position:Position" xmi:id="1402" source="File &quot;../data/tests\dev_transformed.cif&quot;: " startLine="332" endOffset="8673" startColumn="5" endLine="332" endColumn="8" startOffset="8670" location="C:\Users\rober\Documents\studie\afstuderen\development\simulator_via_code_generator\data\tests\dev_transformed.cif"/>
        <events xmi:type="automata:EdgeEvent" xmi:id="1403">
          <position xmi:type="position:Position" xmi:id="1404" source="File &quot;../data/tests\dev_transformed.cif&quot;: " startLine="332" endOffset="8684" startColumn="10" endLine="332" endColumn="19" startOffset="8675" location="C:\Users\rober\Documents\studie\afstuderen\development\simulator_via_code_generator\data\tests\dev_transformed.cif"/>
          <event xmi:type="expressions:EventExpression" xmi:id="1405" event="73">
            <position xmi:type="position:Position" xmi:id="1406" source="File &quot;../data/tests\dev_transformed.cif&quot;: " startLine="332" endOffset="8684" startColumn="10" endLine="332" endColumn="19" startOffset="8675" location="C:\Users\rober\Documents\studie\afstuderen\development\simulator_via_code_generator\data\tests\dev_transformed.cif"/>
            <type xmi:type="types:BoolType" xmi:id="1407">
              <position xmi:type="position:Position" xmi:id="1408" source="File &quot;../data/tests\dev_transformed.cif&quot;: " startLine="332" endOffset="8684" startColumn="10" endLine="332" endColumn="19" startOffset="8675" location="C:\Users\rober\Documents\studie\afstuderen\development\simulator_via_code_generator\data\tests\dev_transformed.cif"/>
            </type>
          </event>
        </events>
      </edges>
    </locations>
    <locations xmi:type="automata:Location" xmi:id="1409" name="LRtoDU">
      <position xmi:type="position:Position" xmi:id="1410" source="File &quot;../data/tests\dev_transformed.cif&quot;: " startLine="333" endOffset="8712" startColumn="12" endLine="333" endColumn="17" startOffset="8707" location="C:\Users\rober\Documents\studie\afstuderen\development\simulator_via_code_generator\data\tests\dev_transformed.cif"/>
      <edges xmi:type="automata:Edge" xmi:id="1411" target="1135">
        <position xmi:type="position:Position" xmi:id="1412" source="File &quot;../data/tests\dev_transformed.cif&quot;: " startLine="334" endOffset="8723" startColumn="5" endLine="334" endColumn="8" startOffset="8720" location="C:\Users\rober\Documents\studie\afstuderen\development\simulator_via_code_generator\data\tests\dev_transformed.cif"/>
        <events xmi:type="automata:EdgeEvent" xmi:id="1413">
          <position xmi:type="position:Position" xmi:id="1414" source="File &quot;../data/tests\dev_transformed.cif&quot;: " startLine="334" endOffset="8734" startColumn="10" endLine="334" endColumn="19" startOffset="8725" location="C:\Users\rober\Documents\studie\afstuderen\development\simulator_via_code_generator\data\tests\dev_transformed.cif"/>
          <event xmi:type="expressions:EventExpression" xmi:id="1415" event="75">
            <position xmi:type="position:Position" xmi:id="1416" source="File &quot;../data/tests\dev_transformed.cif&quot;: " startLine="334" endOffset="8734" startColumn="10" endLine="334" endColumn="19" startOffset="8725" location="C:\Users\rober\Documents\studie\afstuderen\development\simulator_via_code_generator\data\tests\dev_transformed.cif"/>
            <type xmi:type="types:BoolType" xmi:id="1417">
              <position xmi:type="position:Position" xmi:id="1418" source="File &quot;../data/tests\dev_transformed.cif&quot;: " startLine="334" endOffset="8734" startColumn="10" endLine="334" endColumn="19" startOffset="8725" location="C:\Users\rober\Documents\studie\afstuderen\development\simulator_via_code_generator\data\tests\dev_transformed.cif"/>
            </type>
          </event>
        </events>
      </edges>
    </locations>
    <locations xmi:type="automata:Location" xmi:id="1419" name="LRtoPA">
      <position xmi:type="position:Position" xmi:id="1420" source="File &quot;../data/tests\dev_transformed.cif&quot;: " startLine="335" endOffset="8762" startColumn="12" endLine="335" endColumn="17" startOffset="8757" location="C:\Users\rober\Documents\studie\afstuderen\development\simulator_via_code_generator\data\tests\dev_transformed.cif"/>
      <edges xmi:type="automata:Edge" xmi:id="1421" target="1059">
        <position xmi:type="position:Position" xmi:id="1422" source="File &quot;../data/tests\dev_transformed.cif&quot;: " startLine="336" endOffset="8773" startColumn="5" endLine="336" endColumn="8" startOffset="8770" location="C:\Users\rober\Documents\studie\afstuderen\development\simulator_via_code_generator\data\tests\dev_transformed.cif"/>
        <events xmi:type="automata:EdgeEvent" xmi:id="1423">
          <position xmi:type="position:Position" xmi:id="1424" source="File &quot;../data/tests\dev_transformed.cif&quot;: " startLine="336" endOffset="8784" startColumn="10" endLine="336" endColumn="19" startOffset="8775" location="C:\Users\rober\Documents\studie\afstuderen\development\simulator_via_code_generator\data\tests\dev_transformed.cif"/>
          <event xmi:type="expressions:EventExpression" xmi:id="1425" event="77">
            <position xmi:type="position:Position" xmi:id="1426" source="File &quot;../data/tests\dev_transformed.cif&quot;: " startLine="336" endOffset="8784" startColumn="10" endLine="336" endColumn="19" startOffset="8775" location="C:\Users\rober\Documents\studie\afstuderen\development\simulator_via_code_generator\data\tests\dev_transformed.cif"/>
            <type xmi:type="types:BoolType" xmi:id="1427">
              <position xmi:type="position:Position" xmi:id="1428" source="File &quot;../data/tests\dev_transformed.cif&quot;: " startLine="336" endOffset="8784" startColumn="10" endLine="336" endColumn="19" startOffset="8775" location="C:\Users\rober\Documents\studie\afstuderen\development\simulator_via_code_generator\data\tests\dev_transformed.cif"/>
            </type>
          </event>
        </events>
      </edges>
    </locations>
    <locations xmi:type="automata:Location" xmi:id="1429" name="LRtoCH0">
      <position xmi:type="position:Position" xmi:id="1430" source="File &quot;../data/tests\dev_transformed.cif&quot;: " startLine="337" endOffset="8813" startColumn="12" endLine="337" endColumn="18" startOffset="8807" location="C:\Users\rober\Documents\studie\afstuderen\development\simulator_via_code_generator\data\tests\dev_transformed.cif"/>
      <edges xmi:type="automata:Edge" xmi:id="1431" target="1165">
        <position xmi:type="position:Position" xmi:id="1432" source="File &quot;../data/tests\dev_transformed.cif&quot;: " startLine="338" endOffset="8824" startColumn="5" endLine="338" endColumn="8" startOffset="8821" location="C:\Users\rober\Documents\studie\afstuderen\development\simulator_via_code_generator\data\tests\dev_transformed.cif"/>
        <events xmi:type="automata:EdgeEvent" xmi:id="1433">
          <position xmi:type="position:Position" xmi:id="1434" source="File &quot;../data/tests\dev_transformed.cif&quot;: " startLine="338" endOffset="8836" startColumn="10" endLine="338" endColumn="20" startOffset="8826" location="C:\Users\rober\Documents\studie\afstuderen\development\simulator_via_code_generator\data\tests\dev_transformed.cif"/>
          <event xmi:type="expressions:EventExpression" xmi:id="1435" event="79">
            <position xmi:type="position:Position" xmi:id="1436" source="File &quot;../data/tests\dev_transformed.cif&quot;: " startLine="338" endOffset="8836" startColumn="10" endLine="338" endColumn="20" startOffset="8826" location="C:\Users\rober\Documents\studie\afstuderen\development\simulator_via_code_generator\data\tests\dev_transformed.cif"/>
            <type xmi:type="types:BoolType" xmi:id="1437">
              <position xmi:type="position:Position" xmi:id="1438" source="File &quot;../data/tests\dev_transformed.cif&quot;: " startLine="338" endOffset="8836" startColumn="10" endLine="338" endColumn="20" startOffset="8826" location="C:\Users\rober\Documents\studie\afstuderen\development\simulator_via_code_generator\data\tests\dev_transformed.cif"/>
            </type>
          </event>
        </events>
      </edges>
    </locations>
    <locations xmi:type="automata:Location" xmi:id="1439" name="LRtoCH1">
      <position xmi:type="position:Position" xmi:id="1440" source="File &quot;../data/tests\dev_transformed.cif&quot;: " startLine="339" endOffset="8866" startColumn="12" endLine="339" endColumn="18" startOffset="8860" location="C:\Users\rober\Documents\studie\afstuderen\development\simulator_via_code_generator\data\tests\dev_transformed.cif"/>
      <edges xmi:type="automata:Edge" xmi:id="1441" target="1203">
        <position xmi:type="position:Position" xmi:id="1442" source="File &quot;../data/tests\dev_transformed.cif&quot;: " startLine="340" endOffset="8877" startColumn="5" endLine="340" endColumn="8" startOffset="8874" location="C:\Users\rober\Documents\studie\afstuderen\development\simulator_via_code_generator\data\tests\dev_transformed.cif"/>
        <events xmi:type="automata:EdgeEvent" xmi:id="1443">
          <position xmi:type="position:Position" xmi:id="1444" source="File &quot;../data/tests\dev_transformed.cif&quot;: " startLine="340" endOffset="8889" startColumn="10" endLine="340" endColumn="20" startOffset="8879" location="C:\Users\rober\Documents\studie\afstuderen\development\simulator_via_code_generator\data\tests\dev_transformed.cif"/>
          <event xmi:type="expressions:EventExpression" xmi:id="1445" event="81">
            <position xmi:type="position:Position" xmi:id="1446" source="File &quot;../data/tests\dev_transformed.cif&quot;: " startLine="340" endOffset="8889" startColumn="10" endLine="340" endColumn="20" startOffset="8879" location="C:\Users\rober\Documents\studie\afstuderen\development\simulator_via_code_generator\data\tests\dev_transformed.cif"/>
            <type xmi:type="types:BoolType" xmi:id="1447">
              <position xmi:type="position:Position" xmi:id="1448" source="File &quot;../data/tests\dev_transformed.cif&quot;: " startLine="340" endOffset="8889" startColumn="10" endLine="340" endColumn="20" startOffset="8879" location="C:\Users\rober\Documents\studie\afstuderen\development\simulator_via_code_generator\data\tests\dev_transformed.cif"/>
            </type>
          </event>
        </events>
      </edges>
    </locations>
    <locations xmi:type="automata:Location" xmi:id="1449" name="LRtoCTC0">
      <position xmi:type="position:Position" xmi:id="1450" source="File &quot;../data/tests\dev_transformed.cif&quot;: " startLine="341" endOffset="8920" startColumn="12" endLine="341" endColumn="19" startOffset="8913" location="C:\Users\rober\Documents\studie\afstuderen\development\simulator_via_code_generator\data\tests\dev_transformed.cif"/>
      <edges xmi:type="automata:Edge" xmi:id="1451" target="1241">
        <position xmi:type="position:Position" xmi:id="1452" source="File &quot;../data/tests\dev_transformed.cif&quot;: " startLine="342" endOffset="8931" startColumn="5" endLine="342" endColumn="8" startOffset="8928" location="C:\Users\rober\Documents\studie\afstuderen\development\simulator_via_code_generator\data\tests\dev_transformed.cif"/>
        <events xmi:type="automata:EdgeEvent" xmi:id="1453">
          <position xmi:type="position:Position" xmi:id="1454" source="File &quot;../data/tests\dev_transformed.cif&quot;: " startLine="342" endOffset="8944" startColumn="10" endLine="342" endColumn="21" startOffset="8933" location="C:\Users\rober\Documents\studie\afstuderen\development\simulator_via_code_generator\data\tests\dev_transformed.cif"/>
          <event xmi:type="expressions:EventExpression" xmi:id="1455" event="83">
            <position xmi:type="position:Position" xmi:id="1456" source="File &quot;../data/tests\dev_transformed.cif&quot;: " startLine="342" endOffset="8944" startColumn="10" endLine="342" endColumn="21" startOffset="8933" location="C:\Users\rober\Documents\studie\afstuderen\development\simulator_via_code_generator\data\tests\dev_transformed.cif"/>
            <type xmi:type="types:BoolType" xmi:id="1457">
              <position xmi:type="position:Position" xmi:id="1458" source="File &quot;../data/tests\dev_transformed.cif&quot;: " startLine="342" endOffset="8944" startColumn="10" endLine="342" endColumn="21" startOffset="8933" location="C:\Users\rober\Documents\studie\afstuderen\development\simulator_via_code_generator\data\tests\dev_transformed.cif"/>
            </type>
          </event>
        </events>
      </edges>
    </locations>
    <locations xmi:type="automata:Location" xmi:id="1459" name="DUtoUR">
      <position xmi:type="position:Position" xmi:id="1460" source="File &quot;../data/tests\dev_transformed.cif&quot;: " startLine="343" endOffset="8974" startColumn="12" endLine="343" endColumn="17" startOffset="8969" location="C:\Users\rober\Documents\studie\afstuderen\development\simulator_via_code_generator\data\tests\dev_transformed.cif"/>
      <edges xmi:type="automata:Edge" xmi:id="1461" target="1021">
        <position xmi:type="position:Position" xmi:id="1462" source="File &quot;../data/tests\dev_transformed.cif&quot;: " startLine="344" endOffset="8985" startColumn="5" endLine="344" endColumn="8" startOffset="8982" location="C:\Users\rober\Documents\studie\afstuderen\development\simulator_via_code_generator\data\tests\dev_transformed.cif"/>
        <events xmi:type="automata:EdgeEvent" xmi:id="1463">
          <position xmi:type="position:Position" xmi:id="1464" source="File &quot;../data/tests\dev_transformed.cif&quot;: " startLine="344" endOffset="8996" startColumn="10" endLine="344" endColumn="19" startOffset="8987" location="C:\Users\rober\Documents\studie\afstuderen\development\simulator_via_code_generator\data\tests\dev_transformed.cif"/>
          <event xmi:type="expressions:EventExpression" xmi:id="1465" event="85">
            <position xmi:type="position:Position" xmi:id="1466" source="File &quot;../data/tests\dev_transformed.cif&quot;: " startLine="344" endOffset="8996" startColumn="10" endLine="344" endColumn="19" startOffset="8987" location="C:\Users\rober\Documents\studie\afstuderen\development\simulator_via_code_generator\data\tests\dev_transformed.cif"/>
            <type xmi:type="types:BoolType" xmi:id="1467">
              <position xmi:type="position:Position" xmi:id="1468" source="File &quot;../data/tests\dev_transformed.cif&quot;: " startLine="344" endOffset="8996" startColumn="10" endLine="344" endColumn="19" startOffset="8987" location="C:\Users\rober\Documents\studie\afstuderen\development\simulator_via_code_generator\data\tests\dev_transformed.cif"/>
            </type>
          </event>
        </events>
      </edges>
    </locations>
    <locations xmi:type="automata:Location" xmi:id="1469" name="DUtoLR">
      <position xmi:type="position:Position" xmi:id="1470" source="File &quot;../data/tests\dev_transformed.cif&quot;: " startLine="345" endOffset="9024" startColumn="12" endLine="345" endColumn="17" startOffset="9019" location="C:\Users\rober\Documents\studie\afstuderen\development\simulator_via_code_generator\data\tests\dev_transformed.cif"/>
      <edges xmi:type="automata:Edge" xmi:id="1471" target="1089">
        <position xmi:type="position:Position" xmi:id="1472" source="File &quot;../data/tests\dev_transformed.cif&quot;: " startLine="346" endOffset="9035" startColumn="5" endLine="346" endColumn="8" startOffset="9032" location="C:\Users\rober\Documents\studie\afstuderen\development\simulator_via_code_generator\data\tests\dev_transformed.cif"/>
        <events xmi:type="automata:EdgeEvent" xmi:id="1473">
          <position xmi:type="position:Position" xmi:id="1474" source="File &quot;../data/tests\dev_transformed.cif&quot;: " startLine="346" endOffset="9046" startColumn="10" endLine="346" endColumn="19" startOffset="9037" location="C:\Users\rober\Documents\studie\afstuderen\development\simulator_via_code_generator\data\tests\dev_transformed.cif"/>
          <event xmi:type="expressions:EventExpression" xmi:id="1475" event="87">
            <position xmi:type="position:Position" xmi:id="1476" source="File &quot;../data/tests\dev_transformed.cif&quot;: " startLine="346" endOffset="9046" startColumn="10" endLine="346" endColumn="19" startOffset="9037" location="C:\Users\rober\Documents\studie\afstuderen\development\simulator_via_code_generator\data\tests\dev_transformed.cif"/>
            <type xmi:type="types:BoolType" xmi:id="1477">
              <position xmi:type="position:Position" xmi:id="1478" source="File &quot;../data/tests\dev_transformed.cif&quot;: " startLine="346" endOffset="9046" startColumn="10" endLine="346" endColumn="19" startOffset="9037" location="C:\Users\rober\Documents\studie\afstuderen\development\simulator_via_code_generator\data\tests\dev_transformed.cif"/>
            </type>
          </event>
        </events>
      </edges>
    </locations>
    <locations xmi:type="automata:Location" xmi:id="1479" name="DUtoTR">
      <position xmi:type="position:Position" xmi:id="1480" source="File &quot;../data/tests\dev_transformed.cif&quot;: " startLine="347" endOffset="9074" startColumn="12" endLine="347" endColumn="17" startOffset="9069" location="C:\Users\rober\Documents\studie\afstuderen\development\simulator_via_code_generator\data\tests\dev_transformed.cif"/>
      <edges xmi:type="automata:Edge" xmi:id="1481" target="961">
        <position xmi:type="position:Position" xmi:id="1482" source="File &quot;../data/tests\dev_transformed.cif&quot;: " startLine="348" endOffset="9085" startColumn="5" endLine="348" endColumn="8" startOffset="9082" location="C:\Users\rober\Documents\studie\afstuderen\development\simulator_via_code_generator\data\tests\dev_transformed.cif"/>
        <events xmi:type="automata:EdgeEvent" xmi:id="1483">
          <position xmi:type="position:Position" xmi:id="1484" source="File &quot;../data/tests\dev_transformed.cif&quot;: " startLine="348" endOffset="9096" startColumn="10" endLine="348" endColumn="19" startOffset="9087" location="C:\Users\rober\Documents\studie\afstuderen\development\simulator_via_code_generator\data\tests\dev_transformed.cif"/>
          <event xmi:type="expressions:EventExpression" xmi:id="1485" event="89">
            <position xmi:type="position:Position" xmi:id="1486" source="File &quot;../data/tests\dev_transformed.cif&quot;: " startLine="348" endOffset="9096" startColumn="10" endLine="348" endColumn="19" startOffset="9087" location="C:\Users\rober\Documents\studie\afstuderen\development\simulator_via_code_generator\data\tests\dev_transformed.cif"/>
            <type xmi:type="types:BoolType" xmi:id="1487">
              <position xmi:type="position:Position" xmi:id="1488" source="File &quot;../data/tests\dev_transformed.cif&quot;: " startLine="348" endOffset="9096" startColumn="10" endLine="348" endColumn="19" startOffset="9087" location="C:\Users\rober\Documents\studie\afstuderen\development\simulator_via_code_generator\data\tests\dev_transformed.cif"/>
            </type>
          </event>
        </events>
      </edges>
    </locations>
    <locations xmi:type="automata:Location" xmi:id="1489" name="CH0toLR">
      <position xmi:type="position:Position" xmi:id="1490" source="File &quot;../data/tests\dev_transformed.cif&quot;: " startLine="349" endOffset="9125" startColumn="12" endLine="349" endColumn="18" startOffset="9119" location="C:\Users\rober\Documents\studie\afstuderen\development\simulator_via_code_generator\data\tests\dev_transformed.cif"/>
      <edges xmi:type="automata:Edge" xmi:id="1491" target="1089">
        <position xmi:type="position:Position" xmi:id="1492" source="File &quot;../data/tests\dev_transformed.cif&quot;: " startLine="350" endOffset="9136" startColumn="5" endLine="350" endColumn="8" startOffset="9133" location="C:\Users\rober\Documents\studie\afstuderen\development\simulator_via_code_generator\data\tests\dev_transformed.cif"/>
        <events xmi:type="automata:EdgeEvent" xmi:id="1493">
          <position xmi:type="position:Position" xmi:id="1494" source="File &quot;../data/tests\dev_transformed.cif&quot;: " startLine="350" endOffset="9148" startColumn="10" endLine="350" endColumn="20" startOffset="9138" location="C:\Users\rober\Documents\studie\afstuderen\development\simulator_via_code_generator\data\tests\dev_transformed.cif"/>
          <event xmi:type="expressions:EventExpression" xmi:id="1495" event="91">
            <position xmi:type="position:Position" xmi:id="1496" source="File &quot;../data/tests\dev_transformed.cif&quot;: " startLine="350" endOffset="9148" startColumn="10" endLine="350" endColumn="20" startOffset="9138" location="C:\Users\rober\Documents\studie\afstuderen\development\simulator_via_code_generator\data\tests\dev_transformed.cif"/>
            <type xmi:type="types:BoolType" xmi:id="1497">
              <position xmi:type="position:Position" xmi:id="1498" source="File &quot;../data/tests\dev_transformed.cif&quot;: " startLine="350" endOffset="9148" startColumn="10" endLine="350" endColumn="20" startOffset="9138" location="C:\Users\rober\Documents\studie\afstuderen\development\simulator_via_code_generator\data\tests\dev_transformed.cif"/>
            </type>
          </event>
        </events>
      </edges>
    </locations>
    <locations xmi:type="automata:Location" xmi:id="1499" name="CH0toUR">
      <position xmi:type="position:Position" xmi:id="1500" source="File &quot;../data/tests\dev_transformed.cif&quot;: " startLine="351" endOffset="9177" startColumn="12" endLine="351" endColumn="18" startOffset="9171" location="C:\Users\rober\Documents\studie\afstuderen\development\simulator_via_code_generator\data\tests\dev_transformed.cif"/>
      <edges xmi:type="automata:Edge" xmi:id="1501" target="1021">
        <position xmi:type="position:Position" xmi:id="1502" source="File &quot;../data/tests\dev_transformed.cif&quot;: " startLine="352" endOffset="9188" startColumn="5" endLine="352" endColumn="8" startOffset="9185" location="C:\Users\rober\Documents\studie\afstuderen\development\simulator_via_code_generator\data\tests\dev_transformed.cif"/>
        <events xmi:type="automata:EdgeEvent" xmi:id="1503">
          <position xmi:type="position:Position" xmi:id="1504" source="File &quot;../data/tests\dev_transformed.cif&quot;: " startLine="352" endOffset="9200" startColumn="10" endLine="352" endColumn="20" startOffset="9190" location="C:\Users\rober\Documents\studie\afstuderen\development\simulator_via_code_generator\data\tests\dev_transformed.cif"/>
          <event xmi:type="expressions:EventExpression" xmi:id="1505" event="93">
            <position xmi:type="position:Position" xmi:id="1506" source="File &quot;../data/tests\dev_transformed.cif&quot;: " startLine="352" endOffset="9200" startColumn="10" endLine="352" endColumn="20" startOffset="9190" location="C:\Users\rober\Documents\studie\afstuderen\development\simulator_via_code_generator\data\tests\dev_transformed.cif"/>
            <type xmi:type="types:BoolType" xmi:id="1507">
              <position xmi:type="position:Position" xmi:id="1508" source="File &quot;../data/tests\dev_transformed.cif&quot;: " startLine="352" endOffset="9200" startColumn="10" endLine="352" endColumn="20" startOffset="9190" location="C:\Users\rober\Documents\studie\afstuderen\development\simulator_via_code_generator\data\tests\dev_transformed.cif"/>
            </type>
          </event>
        </events>
      </edges>
    </locations>
    <locations xmi:type="automata:Location" xmi:id="1509" name="CH1toLR">
      <position xmi:type="position:Position" xmi:id="1510" source="File &quot;../data/tests\dev_transformed.cif&quot;: " startLine="353" endOffset="9229" startColumn="12" endLine="353" endColumn="18" startOffset="9223" location="C:\Users\rober\Documents\studie\afstuderen\development\simulator_via_code_generator\data\tests\dev_transformed.cif"/>
      <edges xmi:type="automata:Edge" xmi:id="1511" target="1089">
        <position xmi:type="position:Position" xmi:id="1512" source="File &quot;../data/tests\dev_transformed.cif&quot;: " startLine="354" endOffset="9240" startColumn="5" endLine="354" endColumn="8" startOffset="9237" location="C:\Users\rober\Documents\studie\afstuderen\development\simulator_via_code_generator\data\tests\dev_transformed.cif"/>
        <events xmi:type="automata:EdgeEvent" xmi:id="1513">
          <position xmi:type="position:Position" xmi:id="1514" source="File &quot;../data/tests\dev_transformed.cif&quot;: " startLine="354" endOffset="9252" startColumn="10" endLine="354" endColumn="20" startOffset="9242" location="C:\Users\rober\Documents\studie\afstuderen\development\simulator_via_code_generator\data\tests\dev_transformed.cif"/>
          <event xmi:type="expressions:EventExpression" xmi:id="1515" event="95">
            <position xmi:type="position:Position" xmi:id="1516" source="File &quot;../data/tests\dev_transformed.cif&quot;: " startLine="354" endOffset="9252" startColumn="10" endLine="354" endColumn="20" startOffset="9242" location="C:\Users\rober\Documents\studie\afstuderen\development\simulator_via_code_generator\data\tests\dev_transformed.cif"/>
            <type xmi:type="types:BoolType" xmi:id="1517">
              <position xmi:type="position:Position" xmi:id="1518" source="File &quot;../data/tests\dev_transformed.cif&quot;: " startLine="354" endOffset="9252" startColumn="10" endLine="354" endColumn="20" startOffset="9242" location="C:\Users\rober\Documents\studie\afstuderen\development\simulator_via_code_generator\data\tests\dev_transformed.cif"/>
            </type>
          </event>
        </events>
      </edges>
    </locations>
    <locations xmi:type="automata:Location" xmi:id="1519" name="CH1toUR">
      <position xmi:type="position:Position" xmi:id="1520" source="File &quot;../data/tests\dev_transformed.cif&quot;: " startLine="355" endOffset="9281" startColumn="12" endLine="355" endColumn="18" startOffset="9275" location="C:\Users\rober\Documents\studie\afstuderen\development\simulator_via_code_generator\data\tests\dev_transformed.cif"/>
      <edges xmi:type="automata:Edge" xmi:id="1521" target="1021">
        <position xmi:type="position:Position" xmi:id="1522" source="File &quot;../data/tests\dev_transformed.cif&quot;: " startLine="356" endOffset="9292" startColumn="5" endLine="356" endColumn="8" startOffset="9289" location="C:\Users\rober\Documents\studie\afstuderen\development\simulator_via_code_generator\data\tests\dev_transformed.cif"/>
        <events xmi:type="automata:EdgeEvent" xmi:id="1523">
          <position xmi:type="position:Position" xmi:id="1524" source="File &quot;../data/tests\dev_transformed.cif&quot;: " startLine="356" endOffset="9304" startColumn="10" endLine="356" endColumn="20" startOffset="9294" location="C:\Users\rober\Documents\studie\afstuderen\development\simulator_via_code_generator\data\tests\dev_transformed.cif"/>
          <event xmi:type="expressions:EventExpression" xmi:id="1525" event="97">
            <position xmi:type="position:Position" xmi:id="1526" source="File &quot;../data/tests\dev_transformed.cif&quot;: " startLine="356" endOffset="9304" startColumn="10" endLine="356" endColumn="20" startOffset="9294" location="C:\Users\rober\Documents\studie\afstuderen\development\simulator_via_code_generator\data\tests\dev_transformed.cif"/>
            <type xmi:type="types:BoolType" xmi:id="1527">
              <position xmi:type="position:Position" xmi:id="1528" source="File &quot;../data/tests\dev_transformed.cif&quot;: " startLine="356" endOffset="9304" startColumn="10" endLine="356" endColumn="20" startOffset="9294" location="C:\Users\rober\Documents\studie\afstuderen\development\simulator_via_code_generator\data\tests\dev_transformed.cif"/>
            </type>
          </event>
        </events>
      </edges>
    </locations>
    <locations xmi:type="automata:Location" xmi:id="1529" name="CTC0toLR">
      <position xmi:type="position:Position" xmi:id="1530" source="File &quot;../data/tests\dev_transformed.cif&quot;: " startLine="357" endOffset="9334" startColumn="12" endLine="357" endColumn="19" startOffset="9327" location="C:\Users\rober\Documents\studie\afstuderen\development\simulator_via_code_generator\data\tests\dev_transformed.cif"/>
      <edges xmi:type="automata:Edge" xmi:id="1531" target="1089">
        <position xmi:type="position:Position" xmi:id="1532" source="File &quot;../data/tests\dev_transformed.cif&quot;: " startLine="358" endOffset="9345" startColumn="5" endLine="358" endColumn="8" startOffset="9342" location="C:\Users\rober\Documents\studie\afstuderen\development\simulator_via_code_generator\data\tests\dev_transformed.cif"/>
        <events xmi:type="automata:EdgeEvent" xmi:id="1533">
          <position xmi:type="position:Position" xmi:id="1534" source="File &quot;../data/tests\dev_transformed.cif&quot;: " startLine="358" endOffset="9358" startColumn="10" endLine="358" endColumn="21" startOffset="9347" location="C:\Users\rober\Documents\studie\afstuderen\development\simulator_via_code_generator\data\tests\dev_transformed.cif"/>
          <event xmi:type="expressions:EventExpression" xmi:id="1535" event="99">
            <position xmi:type="position:Position" xmi:id="1536" source="File &quot;../data/tests\dev_transformed.cif&quot;: " startLine="358" endOffset="9358" startColumn="10" endLine="358" endColumn="21" startOffset="9347" location="C:\Users\rober\Documents\studie\afstuderen\development\simulator_via_code_generator\data\tests\dev_transformed.cif"/>
            <type xmi:type="types:BoolType" xmi:id="1537">
              <position xmi:type="position:Position" xmi:id="1538" source="File &quot;../data/tests\dev_transformed.cif&quot;: " startLine="358" endOffset="9358" startColumn="10" endLine="358" endColumn="21" startOffset="9347" location="C:\Users\rober\Documents\studie\afstuderen\development\simulator_via_code_generator\data\tests\dev_transformed.cif"/>
            </type>
          </event>
        </events>
      </edges>
    </locations>
    <locations xmi:type="automata:Location" xmi:id="1539" name="CTC1toUR">
      <position xmi:type="position:Position" xmi:id="1540" source="File &quot;../data/tests\dev_transformed.cif&quot;: " startLine="359" endOffset="9388" startColumn="12" endLine="359" endColumn="19" startOffset="9381" location="C:\Users\rober\Documents\studie\afstuderen\development\simulator_via_code_generator\data\tests\dev_transformed.cif"/>
      <edges xmi:type="automata:Edge" xmi:id="1541" target="1021">
        <position xmi:type="position:Position" xmi:id="1542" source="File &quot;../data/tests\dev_transformed.cif&quot;: " startLine="360" endOffset="9399" startColumn="5" endLine="360" endColumn="8" startOffset="9396" location="C:\Users\rober\Documents\studie\afstuderen\development\simulator_via_code_generator\data\tests\dev_transformed.cif"/>
        <events xmi:type="automata:EdgeEvent" xmi:id="1543">
          <position xmi:type="position:Position" xmi:id="1544" source="File &quot;../data/tests\dev_transformed.cif&quot;: " startLine="360" endOffset="9412" startColumn="10" endLine="360" endColumn="21" startOffset="9401" location="C:\Users\rober\Documents\studie\afstuderen\development\simulator_via_code_generator\data\tests\dev_transformed.cif"/>
          <event xmi:type="expressions:EventExpression" xmi:id="1545" event="101">
            <position xmi:type="position:Position" xmi:id="1546" source="File &quot;../data/tests\dev_transformed.cif&quot;: " startLine="360" endOffset="9412" startColumn="10" endLine="360" endColumn="21" startOffset="9401" location="C:\Users\rober\Documents\studie\afstuderen\development\simulator_via_code_generator\data\tests\dev_transformed.cif"/>
            <type xmi:type="types:BoolType" xmi:id="1547">
              <position xmi:type="position:Position" xmi:id="1548" source="File &quot;../data/tests\dev_transformed.cif&quot;: " startLine="360" endOffset="9412" startColumn="10" endLine="360" endColumn="21" startOffset="9401" location="C:\Users\rober\Documents\studie\afstuderen\development\simulator_via_code_generator\data\tests\dev_transformed.cif"/>
            </type>
          </event>
        </events>
      </edges>
    </locations>
  </components>
  <components xmi:type="automata:Automaton" xmi:id="1549" name="WaferPlant_2" kind="Plant">
    <position xmi:type="position:Position" xmi:id="1550" source="File &quot;../data/tests\dev_transformed.cif&quot;: " startLine="362" endOffset="9456" startColumn="17" endLine="362" endColumn="28" startOffset="9445" location="C:\Users\rober\Documents\studie\afstuderen\development\simulator_via_code_generator\data\tests\dev_transformed.cif"/>
    <locations xmi:type="automata:Location" xmi:id="1551" name="TR">
      <position xmi:type="position:Position" xmi:id="1552" source="File &quot;../data/tests\dev_transformed.cif&quot;: " startLine="363" endOffset="9472" startColumn="12" endLine="363" endColumn="13" startOffset="9471" location="C:\Users\rober\Documents\studie\afstuderen\development\simulator_via_code_generator\data\tests\dev_transformed.cif"/>
      <edges xmi:type="automata:Edge" xmi:id="1553" target="1809">
        <position xmi:type="position:Position" xmi:id="1554" source="File &quot;../data/tests\dev_transformed.cif&quot;: " startLine="365" endOffset="9496" startColumn="5" endLine="365" endColumn="8" startOffset="9493" location="C:\Users\rober\Documents\studie\afstuderen\development\simulator_via_code_generator\data\tests\dev_transformed.cif"/>
        <events xmi:type="automata:EdgeEvent" xmi:id="1555">
          <position xmi:type="position:Position" xmi:id="1556" source="File &quot;../data/tests\dev_transformed.cif&quot;: " startLine="365" endOffset="9508" startColumn="10" endLine="365" endColumn="20" startOffset="9498" location="C:\Users\rober\Documents\studie\afstuderen\development\simulator_via_code_generator\data\tests\dev_transformed.cif"/>
          <event xmi:type="expressions:EventExpression" xmi:id="1557" event="121">
            <position xmi:type="position:Position" xmi:id="1558" source="File &quot;../data/tests\dev_transformed.cif&quot;: " startLine="365" endOffset="9508" startColumn="10" endLine="365" endColumn="20" startOffset="9498" location="C:\Users\rober\Documents\studie\afstuderen\development\simulator_via_code_generator\data\tests\dev_transformed.cif"/>
            <type xmi:type="types:BoolType" xmi:id="1559">
              <position xmi:type="position:Position" xmi:id="1560" source="File &quot;../data/tests\dev_transformed.cif&quot;: " startLine="365" endOffset="9508" startColumn="10" endLine="365" endColumn="20" startOffset="9498" location="C:\Users\rober\Documents\studie\afstuderen\development\simulator_via_code_generator\data\tests\dev_transformed.cif"/>
            </type>
          </event>
        </events>
      </edges>
      <markeds xmi:type="expressions:BoolExpression" xmi:id="1561" value="true">
        <position xmi:type="position:Position" xmi:id="1562" source="File &quot;../data/tests\dev_transformed.cif&quot;: " startLine="364" endOffset="9485" startColumn="5" endLine="364" endColumn="10" startOffset="9480" location="C:\Users\rober\Documents\studie\afstuderen\development\simulator_via_code_generator\data\tests\dev_transformed.cif"/>
        <type xmi:type="types:BoolType" xmi:id="1563">
          <position xmi:type="position:Position" xmi:id="1564" source="File &quot;../data/tests\dev_transformed.cif&quot;: " startLine="364" endOffset="9485" startColumn="5" endLine="364" endColumn="10" startOffset="9480" location="C:\Users\rober\Documents\studie\afstuderen\development\simulator_via_code_generator\data\tests\dev_transformed.cif"/>
        </type>
      </markeds>
    </locations>
    <locations xmi:type="automata:Location" xmi:id="1565" name="SUB">
      <position xmi:type="position:Position" xmi:id="1566" source="File &quot;../data/tests\dev_transformed.cif&quot;: " startLine="366" endOffset="9538" startColumn="12" endLine="366" endColumn="14" startOffset="9536" location="C:\Users\rober\Documents\studie\afstuderen\development\simulator_via_code_generator\data\tests\dev_transformed.cif"/>
      <edges xmi:type="automata:Edge" xmi:id="1567" target="1819">
        <position xmi:type="position:Position" xmi:id="1568" source="File &quot;../data/tests\dev_transformed.cif&quot;: " startLine="368" endOffset="9562" startColumn="5" endLine="368" endColumn="8" startOffset="9559" location="C:\Users\rober\Documents\studie\afstuderen\development\simulator_via_code_generator\data\tests\dev_transformed.cif"/>
        <events xmi:type="automata:EdgeEvent" xmi:id="1569">
          <position xmi:type="position:Position" xmi:id="1570" source="File &quot;../data/tests\dev_transformed.cif&quot;: " startLine="368" endOffset="9574" startColumn="10" endLine="368" endColumn="20" startOffset="9564" location="C:\Users\rober\Documents\studie\afstuderen\development\simulator_via_code_generator\data\tests\dev_transformed.cif"/>
          <event xmi:type="expressions:EventExpression" xmi:id="1571" event="123">
            <position xmi:type="position:Position" xmi:id="1572" source="File &quot;../data/tests\dev_transformed.cif&quot;: " startLine="368" endOffset="9574" startColumn="10" endLine="368" endColumn="20" startOffset="9564" location="C:\Users\rober\Documents\studie\afstuderen\development\simulator_via_code_generator\data\tests\dev_transformed.cif"/>
            <type xmi:type="types:BoolType" xmi:id="1573">
              <position xmi:type="position:Position" xmi:id="1574" source="File &quot;../data/tests\dev_transformed.cif&quot;: " startLine="368" endOffset="9574" startColumn="10" endLine="368" endColumn="20" startOffset="9564" location="C:\Users\rober\Documents\studie\afstuderen\development\simulator_via_code_generator\data\tests\dev_transformed.cif"/>
            </type>
          </event>
        </events>
      </edges>
      <markeds xmi:type="expressions:BoolExpression" xmi:id="1575" value="true">
        <position xmi:type="position:Position" xmi:id="1576" source="File &quot;../data/tests\dev_transformed.cif&quot;: " startLine="367" endOffset="9551" startColumn="5" endLine="367" endColumn="10" startOffset="9546" location="C:\Users\rober\Documents\studie\afstuderen\development\simulator_via_code_generator\data\tests\dev_transformed.cif"/>
        <type xmi:type="types:BoolType" xmi:id="1577">
          <position xmi:type="position:Position" xmi:id="1578" source="File &quot;../data/tests\dev_transformed.cif&quot;: " startLine="367" endOffset="9551" startColumn="5" endLine="367" endColumn="10" startOffset="9546" location="C:\Users\rober\Documents\studie\afstuderen\development\simulator_via_code_generator\data\tests\dev_transformed.cif"/>
        </type>
      </markeds>
    </locations>
    <locations xmi:type="automata:Location" xmi:id="1579" name="UR">
      <position xmi:type="position:Position" xmi:id="1580" source="File &quot;../data/tests\dev_transformed.cif&quot;: " startLine="369" endOffset="9603" startColumn="12" endLine="369" endColumn="13" startOffset="9602" location="C:\Users\rober\Documents\studie\afstuderen\development\simulator_via_code_generator\data\tests\dev_transformed.cif"/>
      <edges xmi:type="automata:Edge" xmi:id="1581" target="1829">
        <position xmi:type="position:Position" xmi:id="1582" source="File &quot;../data/tests\dev_transformed.cif&quot;: " startLine="371" endOffset="9627" startColumn="5" endLine="371" endColumn="8" startOffset="9624" location="C:\Users\rober\Documents\studie\afstuderen\development\simulator_via_code_generator\data\tests\dev_transformed.cif"/>
        <events xmi:type="automata:EdgeEvent" xmi:id="1583">
          <position xmi:type="position:Position" xmi:id="1584" source="File &quot;../data/tests\dev_transformed.cif&quot;: " startLine="371" endOffset="9639" startColumn="10" endLine="371" endColumn="20" startOffset="9629" location="C:\Users\rober\Documents\studie\afstuderen\development\simulator_via_code_generator\data\tests\dev_transformed.cif"/>
          <event xmi:type="expressions:EventExpression" xmi:id="1585" event="125">
            <position xmi:type="position:Position" xmi:id="1586" source="File &quot;../data/tests\dev_transformed.cif&quot;: " startLine="371" endOffset="9639" startColumn="10" endLine="371" endColumn="20" startOffset="9629" location="C:\Users\rober\Documents\studie\afstuderen\development\simulator_via_code_generator\data\tests\dev_transformed.cif"/>
            <type xmi:type="types:BoolType" xmi:id="1587">
              <position xmi:type="position:Position" xmi:id="1588" source="File &quot;../data/tests\dev_transformed.cif&quot;: " startLine="371" endOffset="9639" startColumn="10" endLine="371" endColumn="20" startOffset="9629" location="C:\Users\rober\Documents\studie\afstuderen\development\simulator_via_code_generator\data\tests\dev_transformed.cif"/>
            </type>
          </event>
        </events>
      </edges>
      <edges xmi:type="automata:Edge" xmi:id="1589" target="1839">
        <position xmi:type="position:Position" xmi:id="1590" source="File &quot;../data/tests\dev_transformed.cif&quot;: " startLine="372" endOffset="9663" startColumn="5" endLine="372" endColumn="8" startOffset="9660" location="C:\Users\rober\Documents\studie\afstuderen\development\simulator_via_code_generator\data\tests\dev_transformed.cif"/>
        <events xmi:type="automata:EdgeEvent" xmi:id="1591">
          <position xmi:type="position:Position" xmi:id="1592" source="File &quot;../data/tests\dev_transformed.cif&quot;: " startLine="372" endOffset="9674" startColumn="10" endLine="372" endColumn="19" startOffset="9665" location="C:\Users\rober\Documents\studie\afstuderen\development\simulator_via_code_generator\data\tests\dev_transformed.cif"/>
          <event xmi:type="expressions:EventExpression" xmi:id="1593" event="127">
            <position xmi:type="position:Position" xmi:id="1594" source="File &quot;../data/tests\dev_transformed.cif&quot;: " startLine="372" endOffset="9674" startColumn="10" endLine="372" endColumn="19" startOffset="9665" location="C:\Users\rober\Documents\studie\afstuderen\development\simulator_via_code_generator\data\tests\dev_transformed.cif"/>
            <type xmi:type="types:BoolType" xmi:id="1595">
              <position xmi:type="position:Position" xmi:id="1596" source="File &quot;../data/tests\dev_transformed.cif&quot;: " startLine="372" endOffset="9674" startColumn="10" endLine="372" endColumn="19" startOffset="9665" location="C:\Users\rober\Documents\studie\afstuderen\development\simulator_via_code_generator\data\tests\dev_transformed.cif"/>
            </type>
          </event>
        </events>
      </edges>
      <edges xmi:type="automata:Edge" xmi:id="1597" target="1849">
        <position xmi:type="position:Position" xmi:id="1598" source="File &quot;../data/tests\dev_transformed.cif&quot;: " startLine="373" endOffset="9697" startColumn="5" endLine="373" endColumn="8" startOffset="9694" location="C:\Users\rober\Documents\studie\afstuderen\development\simulator_via_code_generator\data\tests\dev_transformed.cif"/>
        <events xmi:type="automata:EdgeEvent" xmi:id="1599">
          <position xmi:type="position:Position" xmi:id="1600" source="File &quot;../data/tests\dev_transformed.cif&quot;: " startLine="373" endOffset="9708" startColumn="10" endLine="373" endColumn="19" startOffset="9699" location="C:\Users\rober\Documents\studie\afstuderen\development\simulator_via_code_generator\data\tests\dev_transformed.cif"/>
          <event xmi:type="expressions:EventExpression" xmi:id="1601" event="129">
            <position xmi:type="position:Position" xmi:id="1602" source="File &quot;../data/tests\dev_transformed.cif&quot;: " startLine="373" endOffset="9708" startColumn="10" endLine="373" endColumn="19" startOffset="9699" location="C:\Users\rober\Documents\studie\afstuderen\development\simulator_via_code_generator\data\tests\dev_transformed.cif"/>
            <type xmi:type="types:BoolType" xmi:id="1603">
              <position xmi:type="position:Position" xmi:id="1604" source="File &quot;../data/tests\dev_transformed.cif&quot;: " startLine="373" endOffset="9708" startColumn="10" endLine="373" endColumn="19" startOffset="9699" location="C:\Users\rober\Documents\studie\afstuderen\development\simulator_via_code_generator\data\tests\dev_transformed.cif"/>
            </type>
          </event>
        </events>
      </edges>
      <edges xmi:type="automata:Edge" xmi:id="1605" target="1859">
        <position xmi:type="position:Position" xmi:id="1606" source="File &quot;../data/tests\dev_transformed.cif&quot;: " startLine="374" endOffset="9731" startColumn="5" endLine="374" endColumn="8" startOffset="9728" location="C:\Users\rober\Documents\studie\afstuderen\development\simulator_via_code_generator\data\tests\dev_transformed.cif"/>
        <events xmi:type="automata:EdgeEvent" xmi:id="1607">
          <position xmi:type="position:Position" xmi:id="1608" source="File &quot;../data/tests\dev_transformed.cif&quot;: " startLine="374" endOffset="9744" startColumn="10" endLine="374" endColumn="21" startOffset="9733" location="C:\Users\rober\Documents\studie\afstuderen\development\simulator_via_code_generator\data\tests\dev_transformed.cif"/>
          <event xmi:type="expressions:EventExpression" xmi:id="1609" event="131">
            <position xmi:type="position:Position" xmi:id="1610" source="File &quot;../data/tests\dev_transformed.cif&quot;: " startLine="374" endOffset="9744" startColumn="10" endLine="374" endColumn="21" startOffset="9733" location="C:\Users\rober\Documents\studie\afstuderen\development\simulator_via_code_generator\data\tests\dev_transformed.cif"/>
            <type xmi:type="types:BoolType" xmi:id="1611">
              <position xmi:type="position:Position" xmi:id="1612" source="File &quot;../data/tests\dev_transformed.cif&quot;: " startLine="374" endOffset="9744" startColumn="10" endLine="374" endColumn="21" startOffset="9733" location="C:\Users\rober\Documents\studie\afstuderen\development\simulator_via_code_generator\data\tests\dev_transformed.cif"/>
            </type>
          </event>
        </events>
      </edges>
      <markeds xmi:type="expressions:BoolExpression" xmi:id="1613" value="true">
        <position xmi:type="position:Position" xmi:id="1614" source="File &quot;../data/tests\dev_transformed.cif&quot;: " startLine="370" endOffset="9616" startColumn="5" endLine="370" endColumn="10" startOffset="9611" location="C:\Users\rober\Documents\studie\afstuderen\development\simulator_via_code_generator\data\tests\dev_transformed.cif"/>
        <type xmi:type="types:BoolType" xmi:id="1615">
          <position xmi:type="position:Position" xmi:id="1616" source="File &quot;../data/tests\dev_transformed.cif&quot;: " startLine="370" endOffset="9616" startColumn="5" endLine="370" endColumn="10" startOffset="9611" location="C:\Users\rober\Documents\studie\afstuderen\development\simulator_via_code_generator\data\tests\dev_transformed.cif"/>
        </type>
      </markeds>
    </locations>
    <locations xmi:type="automata:Location" xmi:id="1617" name="PA">
      <position xmi:type="position:Position" xmi:id="1618" source="File &quot;../data/tests\dev_transformed.cif&quot;: " startLine="375" endOffset="9774" startColumn="12" endLine="375" endColumn="13" startOffset="9773" location="C:\Users\rober\Documents\studie\afstuderen\development\simulator_via_code_generator\data\tests\dev_transformed.cif"/>
      <edges xmi:type="automata:Edge" xmi:id="1619" target="1869">
        <position xmi:type="position:Position" xmi:id="1620" source="File &quot;../data/tests\dev_transformed.cif&quot;: " startLine="377" endOffset="9798" startColumn="5" endLine="377" endColumn="8" startOffset="9795" location="C:\Users\rober\Documents\studie\afstuderen\development\simulator_via_code_generator\data\tests\dev_transformed.cif"/>
        <events xmi:type="automata:EdgeEvent" xmi:id="1621">
          <position xmi:type="position:Position" xmi:id="1622" source="File &quot;../data/tests\dev_transformed.cif&quot;: " startLine="377" endOffset="9809" startColumn="10" endLine="377" endColumn="19" startOffset="9800" location="C:\Users\rober\Documents\studie\afstuderen\development\simulator_via_code_generator\data\tests\dev_transformed.cif"/>
          <event xmi:type="expressions:EventExpression" xmi:id="1623" event="133">
            <position xmi:type="position:Position" xmi:id="1624" source="File &quot;../data/tests\dev_transformed.cif&quot;: " startLine="377" endOffset="9809" startColumn="10" endLine="377" endColumn="19" startOffset="9800" location="C:\Users\rober\Documents\studie\afstuderen\development\simulator_via_code_generator\data\tests\dev_transformed.cif"/>
            <type xmi:type="types:BoolType" xmi:id="1625">
              <position xmi:type="position:Position" xmi:id="1626" source="File &quot;../data/tests\dev_transformed.cif&quot;: " startLine="377" endOffset="9809" startColumn="10" endLine="377" endColumn="19" startOffset="9800" location="C:\Users\rober\Documents\studie\afstuderen\development\simulator_via_code_generator\data\tests\dev_transformed.cif"/>
            </type>
          </event>
        </events>
      </edges>
      <edges xmi:type="automata:Edge" xmi:id="1627" target="1879">
        <position xmi:type="position:Position" xmi:id="1628" source="File &quot;../data/tests\dev_transformed.cif&quot;: " startLine="378" endOffset="9832" startColumn="5" endLine="378" endColumn="8" startOffset="9829" location="C:\Users\rober\Documents\studie\afstuderen\development\simulator_via_code_generator\data\tests\dev_transformed.cif"/>
        <events xmi:type="automata:EdgeEvent" xmi:id="1629">
          <position xmi:type="position:Position" xmi:id="1630" source="File &quot;../data/tests\dev_transformed.cif&quot;: " startLine="378" endOffset="9843" startColumn="10" endLine="378" endColumn="19" startOffset="9834" location="C:\Users\rober\Documents\studie\afstuderen\development\simulator_via_code_generator\data\tests\dev_transformed.cif"/>
          <event xmi:type="expressions:EventExpression" xmi:id="1631" event="135">
            <position xmi:type="position:Position" xmi:id="1632" source="File &quot;../data/tests\dev_transformed.cif&quot;: " startLine="378" endOffset="9843" startColumn="10" endLine="378" endColumn="19" startOffset="9834" location="C:\Users\rober\Documents\studie\afstuderen\development\simulator_via_code_generator\data\tests\dev_transformed.cif"/>
            <type xmi:type="types:BoolType" xmi:id="1633">
              <position xmi:type="position:Position" xmi:id="1634" source="File &quot;../data/tests\dev_transformed.cif&quot;: " startLine="378" endOffset="9843" startColumn="10" endLine="378" endColumn="19" startOffset="9834" location="C:\Users\rober\Documents\studie\afstuderen\development\simulator_via_code_generator\data\tests\dev_transformed.cif"/>
            </type>
          </event>
        </events>
      </edges>
      <edges xmi:type="automata:Edge" xmi:id="1635" target="1799">
        <position xmi:type="position:Position" xmi:id="1636" source="File &quot;../data/tests\dev_transformed.cif&quot;: " startLine="379" endOffset="9866" startColumn="5" endLine="379" endColumn="8" startOffset="9863" location="C:\Users\rober\Documents\studie\afstuderen\development\simulator_via_code_generator\data\tests\dev_transformed.cif"/>
        <events xmi:type="automata:EdgeEvent" xmi:id="1637">
          <position xmi:type="position:Position" xmi:id="1638" source="File &quot;../data/tests\dev_transformed.cif&quot;: " startLine="379" endOffset="9879" startColumn="10" endLine="379" endColumn="21" startOffset="9868" location="C:\Users\rober\Documents\studie\afstuderen\development\simulator_via_code_generator\data\tests\dev_transformed.cif"/>
          <event xmi:type="expressions:EventExpression" xmi:id="1639" event="165">
            <position xmi:type="position:Position" xmi:id="1640" source="File &quot;../data/tests\dev_transformed.cif&quot;: " startLine="379" endOffset="9879" startColumn="10" endLine="379" endColumn="21" startOffset="9868" location="C:\Users\rober\Documents\studie\afstuderen\development\simulator_via_code_generator\data\tests\dev_transformed.cif"/>
            <type xmi:type="types:BoolType" xmi:id="1641">
              <position xmi:type="position:Position" xmi:id="1642" source="File &quot;../data/tests\dev_transformed.cif&quot;: " startLine="379" endOffset="9879" startColumn="10" endLine="379" endColumn="21" startOffset="9868" location="C:\Users\rober\Documents\studie\afstuderen\development\simulator_via_code_generator\data\tests\dev_transformed.cif"/>
            </type>
          </event>
        </events>
      </edges>
      <markeds xmi:type="expressions:BoolExpression" xmi:id="1643" value="true">
        <position xmi:type="position:Position" xmi:id="1644" source="File &quot;../data/tests\dev_transformed.cif&quot;: " startLine="376" endOffset="9787" startColumn="5" endLine="376" endColumn="10" startOffset="9782" location="C:\Users\rober\Documents\studie\afstuderen\development\simulator_via_code_generator\data\tests\dev_transformed.cif"/>
        <type xmi:type="types:BoolType" xmi:id="1645">
          <position xmi:type="position:Position" xmi:id="1646" source="File &quot;../data/tests\dev_transformed.cif&quot;: " startLine="376" endOffset="9787" startColumn="5" endLine="376" endColumn="10" startOffset="9782" location="C:\Users\rober\Documents\studie\afstuderen\development\simulator_via_code_generator\data\tests\dev_transformed.cif"/>
        </type>
      </markeds>
    </locations>
    <locations xmi:type="automata:Location" xmi:id="1647" name="LR">
      <position xmi:type="position:Position" xmi:id="1648" source="File &quot;../data/tests\dev_transformed.cif&quot;: " startLine="380" endOffset="9916" startColumn="12" endLine="380" endColumn="13" startOffset="9915" location="C:\Users\rober\Documents\studie\afstuderen\development\simulator_via_code_generator\data\tests\dev_transformed.cif"/>
      <edges xmi:type="automata:Edge" xmi:id="1649" target="1889">
        <position xmi:type="position:Position" xmi:id="1650" source="File &quot;../data/tests\dev_transformed.cif&quot;: " startLine="382" endOffset="9940" startColumn="5" endLine="382" endColumn="8" startOffset="9937" location="C:\Users\rober\Documents\studie\afstuderen\development\simulator_via_code_generator\data\tests\dev_transformed.cif"/>
        <events xmi:type="automata:EdgeEvent" xmi:id="1651">
          <position xmi:type="position:Position" xmi:id="1652" source="File &quot;../data/tests\dev_transformed.cif&quot;: " startLine="382" endOffset="9951" startColumn="10" endLine="382" endColumn="19" startOffset="9942" location="C:\Users\rober\Documents\studie\afstuderen\development\simulator_via_code_generator\data\tests\dev_transformed.cif"/>
          <event xmi:type="expressions:EventExpression" xmi:id="1653" event="137">
            <position xmi:type="position:Position" xmi:id="1654" source="File &quot;../data/tests\dev_transformed.cif&quot;: " startLine="382" endOffset="9951" startColumn="10" endLine="382" endColumn="19" startOffset="9942" location="C:\Users\rober\Documents\studie\afstuderen\development\simulator_via_code_generator\data\tests\dev_transformed.cif"/>
            <type xmi:type="types:BoolType" xmi:id="1655">
              <position xmi:type="position:Position" xmi:id="1656" source="File &quot;../data/tests\dev_transformed.cif&quot;: " startLine="382" endOffset="9951" startColumn="10" endLine="382" endColumn="19" startOffset="9942" location="C:\Users\rober\Documents\studie\afstuderen\development\simulator_via_code_generator\data\tests\dev_transformed.cif"/>
            </type>
          </event>
        </events>
      </edges>
      <edges xmi:type="automata:Edge" xmi:id="1657" target="1899">
        <position xmi:type="position:Position" xmi:id="1658" source="File &quot;../data/tests\dev_transformed.cif&quot;: " startLine="383" endOffset="9974" startColumn="5" endLine="383" endColumn="8" startOffset="9971" location="C:\Users\rober\Documents\studie\afstuderen\development\simulator_via_code_generator\data\tests\dev_transformed.cif"/>
        <events xmi:type="automata:EdgeEvent" xmi:id="1659">
          <position xmi:type="position:Position" xmi:id="1660" source="File &quot;../data/tests\dev_transformed.cif&quot;: " startLine="383" endOffset="9985" startColumn="10" endLine="383" endColumn="19" startOffset="9976" location="C:\Users\rober\Documents\studie\afstuderen\development\simulator_via_code_generator\data\tests\dev_transformed.cif"/>
          <event xmi:type="expressions:EventExpression" xmi:id="1661" event="139">
            <position xmi:type="position:Position" xmi:id="1662" source="File &quot;../data/tests\dev_transformed.cif&quot;: " startLine="383" endOffset="9985" startColumn="10" endLine="383" endColumn="19" startOffset="9976" location="C:\Users\rober\Documents\studie\afstuderen\development\simulator_via_code_generator\data\tests\dev_transformed.cif"/>
            <type xmi:type="types:BoolType" xmi:id="1663">
              <position xmi:type="position:Position" xmi:id="1664" source="File &quot;../data/tests\dev_transformed.cif&quot;: " startLine="383" endOffset="9985" startColumn="10" endLine="383" endColumn="19" startOffset="9976" location="C:\Users\rober\Documents\studie\afstuderen\development\simulator_via_code_generator\data\tests\dev_transformed.cif"/>
            </type>
          </event>
        </events>
      </edges>
      <edges xmi:type="automata:Edge" xmi:id="1665" target="1909">
        <position xmi:type="position:Position" xmi:id="1666" source="File &quot;../data/tests\dev_transformed.cif&quot;: " startLine="384" endOffset="10008" startColumn="5" endLine="384" endColumn="8" startOffset="10005" location="C:\Users\rober\Documents\studie\afstuderen\development\simulator_via_code_generator\data\tests\dev_transformed.cif"/>
        <events xmi:type="automata:EdgeEvent" xmi:id="1667">
          <position xmi:type="position:Position" xmi:id="1668" source="File &quot;../data/tests\dev_transformed.cif&quot;: " startLine="384" endOffset="10020" startColumn="10" endLine="384" endColumn="20" startOffset="10010" location="C:\Users\rober\Documents\studie\afstuderen\development\simulator_via_code_generator\data\tests\dev_transformed.cif"/>
          <event xmi:type="expressions:EventExpression" xmi:id="1669" event="141">
            <position xmi:type="position:Position" xmi:id="1670" source="File &quot;../data/tests\dev_transformed.cif&quot;: " startLine="384" endOffset="10020" startColumn="10" endLine="384" endColumn="20" startOffset="10010" location="C:\Users\rober\Documents\studie\afstuderen\development\simulator_via_code_generator\data\tests\dev_transformed.cif"/>
            <type xmi:type="types:BoolType" xmi:id="1671">
              <position xmi:type="position:Position" xmi:id="1672" source="File &quot;../data/tests\dev_transformed.cif&quot;: " startLine="384" endOffset="10020" startColumn="10" endLine="384" endColumn="20" startOffset="10010" location="C:\Users\rober\Documents\studie\afstuderen\development\simulator_via_code_generator\data\tests\dev_transformed.cif"/>
            </type>
          </event>
        </events>
      </edges>
      <edges xmi:type="automata:Edge" xmi:id="1673" target="1919">
        <position xmi:type="position:Position" xmi:id="1674" source="File &quot;../data/tests\dev_transformed.cif&quot;: " startLine="385" endOffset="10044" startColumn="5" endLine="385" endColumn="8" startOffset="10041" location="C:\Users\rober\Documents\studie\afstuderen\development\simulator_via_code_generator\data\tests\dev_transformed.cif"/>
        <events xmi:type="automata:EdgeEvent" xmi:id="1675">
          <position xmi:type="position:Position" xmi:id="1676" source="File &quot;../data/tests\dev_transformed.cif&quot;: " startLine="385" endOffset="10056" startColumn="10" endLine="385" endColumn="20" startOffset="10046" location="C:\Users\rober\Documents\studie\afstuderen\development\simulator_via_code_generator\data\tests\dev_transformed.cif"/>
          <event xmi:type="expressions:EventExpression" xmi:id="1677" event="143">
            <position xmi:type="position:Position" xmi:id="1678" source="File &quot;../data/tests\dev_transformed.cif&quot;: " startLine="385" endOffset="10056" startColumn="10" endLine="385" endColumn="20" startOffset="10046" location="C:\Users\rober\Documents\studie\afstuderen\development\simulator_via_code_generator\data\tests\dev_transformed.cif"/>
            <type xmi:type="types:BoolType" xmi:id="1679">
              <position xmi:type="position:Position" xmi:id="1680" source="File &quot;../data/tests\dev_transformed.cif&quot;: " startLine="385" endOffset="10056" startColumn="10" endLine="385" endColumn="20" startOffset="10046" location="C:\Users\rober\Documents\studie\afstuderen\development\simulator_via_code_generator\data\tests\dev_transformed.cif"/>
            </type>
          </event>
        </events>
      </edges>
      <edges xmi:type="automata:Edge" xmi:id="1681" target="1929">
        <position xmi:type="position:Position" xmi:id="1682" source="File &quot;../data/tests\dev_transformed.cif&quot;: " startLine="386" endOffset="10080" startColumn="5" endLine="386" endColumn="8" startOffset="10077" location="C:\Users\rober\Documents\studie\afstuderen\development\simulator_via_code_generator\data\tests\dev_transformed.cif"/>
        <events xmi:type="automata:EdgeEvent" xmi:id="1683">
          <position xmi:type="position:Position" xmi:id="1684" source="File &quot;../data/tests\dev_transformed.cif&quot;: " startLine="386" endOffset="10093" startColumn="10" endLine="386" endColumn="21" startOffset="10082" location="C:\Users\rober\Documents\studie\afstuderen\development\simulator_via_code_generator\data\tests\dev_transformed.cif"/>
          <event xmi:type="expressions:EventExpression" xmi:id="1685" event="145">
            <position xmi:type="position:Position" xmi:id="1686" source="File &quot;../data/tests\dev_transformed.cif&quot;: " startLine="386" endOffset="10093" startColumn="10" endLine="386" endColumn="21" startOffset="10082" location="C:\Users\rober\Documents\studie\afstuderen\development\simulator_via_code_generator\data\tests\dev_transformed.cif"/>
            <type xmi:type="types:BoolType" xmi:id="1687">
              <position xmi:type="position:Position" xmi:id="1688" source="File &quot;../data/tests\dev_transformed.cif&quot;: " startLine="386" endOffset="10093" startColumn="10" endLine="386" endColumn="21" startOffset="10082" location="C:\Users\rober\Documents\studie\afstuderen\development\simulator_via_code_generator\data\tests\dev_transformed.cif"/>
            </type>
          </event>
        </events>
      </edges>
      <markeds xmi:type="expressions:BoolExpression" xmi:id="1689" value="true">
        <position xmi:type="position:Position" xmi:id="1690" source="File &quot;../data/tests\dev_transformed.cif&quot;: " startLine="381" endOffset="9929" startColumn="5" endLine="381" endColumn="10" startOffset="9924" location="C:\Users\rober\Documents\studie\afstuderen\development\simulator_via_code_generator\data\tests\dev_transformed.cif"/>
        <type xmi:type="types:BoolType" xmi:id="1691">
          <position xmi:type="position:Position" xmi:id="1692" source="File &quot;../data/tests\dev_transformed.cif&quot;: " startLine="381" endOffset="9929" startColumn="5" endLine="381" endColumn="10" startOffset="9924" location="C:\Users\rober\Documents\studie\afstuderen\development\simulator_via_code_generator\data\tests\dev_transformed.cif"/>
        </type>
      </markeds>
    </locations>
    <locations xmi:type="automata:Location" xmi:id="1693" name="DU">
      <position xmi:type="position:Position" xmi:id="1694" source="File &quot;../data/tests\dev_transformed.cif&quot;: " startLine="387" endOffset="10123" startColumn="12" endLine="387" endColumn="13" startOffset="10122" location="C:\Users\rober\Documents\studie\afstuderen\development\simulator_via_code_generator\data\tests\dev_transformed.cif"/>
      <edges xmi:type="automata:Edge" xmi:id="1695" target="1939">
        <position xmi:type="position:Position" xmi:id="1696" source="File &quot;../data/tests\dev_transformed.cif&quot;: " startLine="389" endOffset="10147" startColumn="5" endLine="389" endColumn="8" startOffset="10144" location="C:\Users\rober\Documents\studie\afstuderen\development\simulator_via_code_generator\data\tests\dev_transformed.cif"/>
        <events xmi:type="automata:EdgeEvent" xmi:id="1697">
          <position xmi:type="position:Position" xmi:id="1698" source="File &quot;../data/tests\dev_transformed.cif&quot;: " startLine="389" endOffset="10158" startColumn="10" endLine="389" endColumn="19" startOffset="10149" location="C:\Users\rober\Documents\studie\afstuderen\development\simulator_via_code_generator\data\tests\dev_transformed.cif"/>
          <event xmi:type="expressions:EventExpression" xmi:id="1699" event="147">
            <position xmi:type="position:Position" xmi:id="1700" source="File &quot;../data/tests\dev_transformed.cif&quot;: " startLine="389" endOffset="10158" startColumn="10" endLine="389" endColumn="19" startOffset="10149" location="C:\Users\rober\Documents\studie\afstuderen\development\simulator_via_code_generator\data\tests\dev_transformed.cif"/>
            <type xmi:type="types:BoolType" xmi:id="1701">
              <position xmi:type="position:Position" xmi:id="1702" source="File &quot;../data/tests\dev_transformed.cif&quot;: " startLine="389" endOffset="10158" startColumn="10" endLine="389" endColumn="19" startOffset="10149" location="C:\Users\rober\Documents\studie\afstuderen\development\simulator_via_code_generator\data\tests\dev_transformed.cif"/>
            </type>
          </event>
        </events>
      </edges>
      <edges xmi:type="automata:Edge" xmi:id="1703" target="1949">
        <position xmi:type="position:Position" xmi:id="1704" source="File &quot;../data/tests\dev_transformed.cif&quot;: " startLine="390" endOffset="10181" startColumn="5" endLine="390" endColumn="8" startOffset="10178" location="C:\Users\rober\Documents\studie\afstuderen\development\simulator_via_code_generator\data\tests\dev_transformed.cif"/>
        <events xmi:type="automata:EdgeEvent" xmi:id="1705">
          <position xmi:type="position:Position" xmi:id="1706" source="File &quot;../data/tests\dev_transformed.cif&quot;: " startLine="390" endOffset="10192" startColumn="10" endLine="390" endColumn="19" startOffset="10183" location="C:\Users\rober\Documents\studie\afstuderen\development\simulator_via_code_generator\data\tests\dev_transformed.cif"/>
          <event xmi:type="expressions:EventExpression" xmi:id="1707" event="149">
            <position xmi:type="position:Position" xmi:id="1708" source="File &quot;../data/tests\dev_transformed.cif&quot;: " startLine="390" endOffset="10192" startColumn="10" endLine="390" endColumn="19" startOffset="10183" location="C:\Users\rober\Documents\studie\afstuderen\development\simulator_via_code_generator\data\tests\dev_transformed.cif"/>
            <type xmi:type="types:BoolType" xmi:id="1709">
              <position xmi:type="position:Position" xmi:id="1710" source="File &quot;../data/tests\dev_transformed.cif&quot;: " startLine="390" endOffset="10192" startColumn="10" endLine="390" endColumn="19" startOffset="10183" location="C:\Users\rober\Documents\studie\afstuderen\development\simulator_via_code_generator\data\tests\dev_transformed.cif"/>
            </type>
          </event>
        </events>
      </edges>
      <edges xmi:type="automata:Edge" xmi:id="1711" target="1959">
        <position xmi:type="position:Position" xmi:id="1712" source="File &quot;../data/tests\dev_transformed.cif&quot;: " startLine="391" endOffset="10215" startColumn="5" endLine="391" endColumn="8" startOffset="10212" location="C:\Users\rober\Documents\studie\afstuderen\development\simulator_via_code_generator\data\tests\dev_transformed.cif"/>
        <events xmi:type="automata:EdgeEvent" xmi:id="1713">
          <position xmi:type="position:Position" xmi:id="1714" source="File &quot;../data/tests\dev_transformed.cif&quot;: " startLine="391" endOffset="10226" startColumn="10" endLine="391" endColumn="19" startOffset="10217" location="C:\Users\rober\Documents\studie\afstuderen\development\simulator_via_code_generator\data\tests\dev_transformed.cif"/>
          <event xmi:type="expressions:EventExpression" xmi:id="1715" event="151">
            <position xmi:type="position:Position" xmi:id="1716" source="File &quot;../data/tests\dev_transformed.cif&quot;: " startLine="391" endOffset="10226" startColumn="10" endLine="391" endColumn="19" startOffset="10217" location="C:\Users\rober\Documents\studie\afstuderen\development\simulator_via_code_generator\data\tests\dev_transformed.cif"/>
            <type xmi:type="types:BoolType" xmi:id="1717">
              <position xmi:type="position:Position" xmi:id="1718" source="File &quot;../data/tests\dev_transformed.cif&quot;: " startLine="391" endOffset="10226" startColumn="10" endLine="391" endColumn="19" startOffset="10217" location="C:\Users\rober\Documents\studie\afstuderen\development\simulator_via_code_generator\data\tests\dev_transformed.cif"/>
            </type>
          </event>
        </events>
      </edges>
      <markeds xmi:type="expressions:BoolExpression" xmi:id="1719" value="true">
        <position xmi:type="position:Position" xmi:id="1720" source="File &quot;../data/tests\dev_transformed.cif&quot;: " startLine="388" endOffset="10136" startColumn="5" endLine="388" endColumn="10" startOffset="10131" location="C:\Users\rober\Documents\studie\afstuderen\development\simulator_via_code_generator\data\tests\dev_transformed.cif"/>
        <type xmi:type="types:BoolType" xmi:id="1721">
          <position xmi:type="position:Position" xmi:id="1722" source="File &quot;../data/tests\dev_transformed.cif&quot;: " startLine="388" endOffset="10136" startColumn="5" endLine="388" endColumn="10" startOffset="10131" location="C:\Users\rober\Documents\studie\afstuderen\development\simulator_via_code_generator\data\tests\dev_transformed.cif"/>
        </type>
      </markeds>
    </locations>
    <locations xmi:type="automata:Location" xmi:id="1723" name="CH0">
      <position xmi:type="position:Position" xmi:id="1724" source="File &quot;../data/tests\dev_transformed.cif&quot;: " startLine="392" endOffset="10255" startColumn="12" endLine="392" endColumn="14" startOffset="10253" location="C:\Users\rober\Documents\studie\afstuderen\development\simulator_via_code_generator\data\tests\dev_transformed.cif"/>
      <edges xmi:type="automata:Edge" xmi:id="1725" target="1969">
        <position xmi:type="position:Position" xmi:id="1726" source="File &quot;../data/tests\dev_transformed.cif&quot;: " startLine="394" endOffset="10279" startColumn="5" endLine="394" endColumn="8" startOffset="10276" location="C:\Users\rober\Documents\studie\afstuderen\development\simulator_via_code_generator\data\tests\dev_transformed.cif"/>
        <events xmi:type="automata:EdgeEvent" xmi:id="1727">
          <position xmi:type="position:Position" xmi:id="1728" source="File &quot;../data/tests\dev_transformed.cif&quot;: " startLine="394" endOffset="10291" startColumn="10" endLine="394" endColumn="20" startOffset="10281" location="C:\Users\rober\Documents\studie\afstuderen\development\simulator_via_code_generator\data\tests\dev_transformed.cif"/>
          <event xmi:type="expressions:EventExpression" xmi:id="1729" event="153">
            <position xmi:type="position:Position" xmi:id="1730" source="File &quot;../data/tests\dev_transformed.cif&quot;: " startLine="394" endOffset="10291" startColumn="10" endLine="394" endColumn="20" startOffset="10281" location="C:\Users\rober\Documents\studie\afstuderen\development\simulator_via_code_generator\data\tests\dev_transformed.cif"/>
            <type xmi:type="types:BoolType" xmi:id="1731">
              <position xmi:type="position:Position" xmi:id="1732" source="File &quot;../data/tests\dev_transformed.cif&quot;: " startLine="394" endOffset="10291" startColumn="10" endLine="394" endColumn="20" startOffset="10281" location="C:\Users\rober\Documents\studie\afstuderen\development\simulator_via_code_generator\data\tests\dev_transformed.cif"/>
            </type>
          </event>
        </events>
      </edges>
      <edges xmi:type="automata:Edge" xmi:id="1733" target="1979">
        <position xmi:type="position:Position" xmi:id="1734" source="File &quot;../data/tests\dev_transformed.cif&quot;: " startLine="395" endOffset="10315" startColumn="5" endLine="395" endColumn="8" startOffset="10312" location="C:\Users\rober\Documents\studie\afstuderen\development\simulator_via_code_generator\data\tests\dev_transformed.cif"/>
        <events xmi:type="automata:EdgeEvent" xmi:id="1735">
          <position xmi:type="position:Position" xmi:id="1736" source="File &quot;../data/tests\dev_transformed.cif&quot;: " startLine="395" endOffset="10327" startColumn="10" endLine="395" endColumn="20" startOffset="10317" location="C:\Users\rober\Documents\studie\afstuderen\development\simulator_via_code_generator\data\tests\dev_transformed.cif"/>
          <event xmi:type="expressions:EventExpression" xmi:id="1737" event="155">
            <position xmi:type="position:Position" xmi:id="1738" source="File &quot;../data/tests\dev_transformed.cif&quot;: " startLine="395" endOffset="10327" startColumn="10" endLine="395" endColumn="20" startOffset="10317" location="C:\Users\rober\Documents\studie\afstuderen\development\simulator_via_code_generator\data\tests\dev_transformed.cif"/>
            <type xmi:type="types:BoolType" xmi:id="1739">
              <position xmi:type="position:Position" xmi:id="1740" source="File &quot;../data/tests\dev_transformed.cif&quot;: " startLine="395" endOffset="10327" startColumn="10" endLine="395" endColumn="20" startOffset="10317" location="C:\Users\rober\Documents\studie\afstuderen\development\simulator_via_code_generator\data\tests\dev_transformed.cif"/>
            </type>
          </event>
        </events>
      </edges>
      <markeds xmi:type="expressions:BoolExpression" xmi:id="1741" value="true">
        <position xmi:type="position:Position" xmi:id="1742" source="File &quot;../data/tests\dev_transformed.cif&quot;: " startLine="393" endOffset="10268" startColumn="5" endLine="393" endColumn="10" startOffset="10263" location="C:\Users\rober\Documents\studie\afstuderen\development\simulator_via_code_generator\data\tests\dev_transformed.cif"/>
        <type xmi:type="types:BoolType" xmi:id="1743">
          <position xmi:type="position:Position" xmi:id="1744" source="File &quot;../data/tests\dev_transformed.cif&quot;: " startLine="393" endOffset="10268" startColumn="5" endLine="393" endColumn="10" startOffset="10263" location="C:\Users\rober\Documents\studie\afstuderen\development\simulator_via_code_generator\data\tests\dev_transformed.cif"/>
        </type>
      </markeds>
    </locations>
    <locations xmi:type="automata:Location" xmi:id="1745" name="CH1">
      <position xmi:type="position:Position" xmi:id="1746" source="File &quot;../data/tests\dev_transformed.cif&quot;: " startLine="396" endOffset="10357" startColumn="12" endLine="396" endColumn="14" startOffset="10355" location="C:\Users\rober\Documents\studie\afstuderen\development\simulator_via_code_generator\data\tests\dev_transformed.cif"/>
      <initials xmi:type="expressions:BoolExpression" xmi:id="1747" value="true">
        <position xmi:type="position:Position" xmi:id="1748" source="File &quot;../data/tests\dev_transformed.cif&quot;: " startLine="397" endOffset="10371" startColumn="5" endLine="397" endColumn="11" startOffset="10365" location="C:\Users\rober\Documents\studie\afstuderen\development\simulator_via_code_generator\data\tests\dev_transformed.cif"/>
        <type xmi:type="types:BoolType" xmi:id="1749">
          <position xmi:type="position:Position" xmi:id="1750" source="File &quot;../data/tests\dev_transformed.cif&quot;: " startLine="397" endOffset="10371" startColumn="5" endLine="397" endColumn="11" startOffset="10365" location="C:\Users\rober\Documents\studie\afstuderen\development\simulator_via_code_generator\data\tests\dev_transformed.cif"/>
        </type>
      </initials>
      <edges xmi:type="automata:Edge" xmi:id="1751" target="1989">
        <position xmi:type="position:Position" xmi:id="1752" source="File &quot;../data/tests\dev_transformed.cif&quot;: " startLine="399" endOffset="10395" startColumn="5" endLine="399" endColumn="8" startOffset="10392" location="C:\Users\rober\Documents\studie\afstuderen\development\simulator_via_code_generator\data\tests\dev_transformed.cif"/>
        <events xmi:type="automata:EdgeEvent" xmi:id="1753">
          <position xmi:type="position:Position" xmi:id="1754" source="File &quot;../data/tests\dev_transformed.cif&quot;: " startLine="399" endOffset="10407" startColumn="10" endLine="399" endColumn="20" startOffset="10397" location="C:\Users\rober\Documents\studie\afstuderen\development\simulator_via_code_generator\data\tests\dev_transformed.cif"/>
          <event xmi:type="expressions:EventExpression" xmi:id="1755" event="157">
            <position xmi:type="position:Position" xmi:id="1756" source="File &quot;../data/tests\dev_transformed.cif&quot;: " startLine="399" endOffset="10407" startColumn="10" endLine="399" endColumn="20" startOffset="10397" location="C:\Users\rober\Documents\studie\afstuderen\development\simulator_via_code_generator\data\tests\dev_transformed.cif"/>
            <type xmi:type="types:BoolType" xmi:id="1757">
              <position xmi:type="position:Position" xmi:id="1758" source="File &quot;../data/tests\dev_transformed.cif&quot;: " startLine="399" endOffset="10407" startColumn="10" endLine="399" endColumn="20" startOffset="10397" location="C:\Users\rober\Documents\studie\afstuderen\development\simulator_via_code_generator\data\tests\dev_transformed.cif"/>
            </type>
          </event>
        </events>
      </edges>
      <edges xmi:type="automata:Edge" xmi:id="1759" target="1999">
        <position xmi:type="position:Position" xmi:id="1760" source="File &quot;../data/tests\dev_transformed.cif&quot;: " startLine="400" endOffset="10431" startColumn="5" endLine="400" endColumn="8" startOffset="10428" location="C:\Users\rober\Documents\studie\afstuderen\development\simulator_via_code_generator\data\tests\dev_transformed.cif"/>
        <events xmi:type="automata:EdgeEvent" xmi:id="1761">
          <position xmi:type="position:Position" xmi:id="1762" source="File &quot;../data/tests\dev_transformed.cif&quot;: " startLine="400" endOffset="10443" startColumn="10" endLine="400" endColumn="20" startOffset="10433" location="C:\Users\rober\Documents\studie\afstuderen\development\simulator_via_code_generator\data\tests\dev_transformed.cif"/>
          <event xmi:type="expressions:EventExpression" xmi:id="1763" event="159">
            <position xmi:type="position:Position" xmi:id="1764" source="File &quot;../data/tests\dev_transformed.cif&quot;: " startLine="400" endOffset="10443" startColumn="10" endLine="400" endColumn="20" startOffset="10433" location="C:\Users\rober\Documents\studie\afstuderen\development\simulator_via_code_generator\data\tests\dev_transformed.cif"/>
            <type xmi:type="types:BoolType" xmi:id="1765">
              <position xmi:type="position:Position" xmi:id="1766" source="File &quot;../data/tests\dev_transformed.cif&quot;: " startLine="400" endOffset="10443" startColumn="10" endLine="400" endColumn="20" startOffset="10433" location="C:\Users\rober\Documents\studie\afstuderen\development\simulator_via_code_generator\data\tests\dev_transformed.cif"/>
            </type>
          </event>
        </events>
      </edges>
      <markeds xmi:type="expressions:BoolExpression" xmi:id="1767" value="true">
        <position xmi:type="position:Position" xmi:id="1768" source="File &quot;../data/tests\dev_transformed.cif&quot;: " startLine="398" endOffset="10384" startColumn="5" endLine="398" endColumn="10" startOffset="10379" location="C:\Users\rober\Documents\studie\afstuderen\development\simulator_via_code_generator\data\tests\dev_transformed.cif"/>
        <type xmi:type="types:BoolType" xmi:id="1769">
          <position xmi:type="position:Position" xmi:id="1770" source="File &quot;../data/tests\dev_transformed.cif&quot;: " startLine="398" endOffset="10384" startColumn="5" endLine="398" endColumn="10" startOffset="10379" location="C:\Users\rober\Documents\studie\afstuderen\development\simulator_via_code_generator\data\tests\dev_transformed.cif"/>
        </type>
      </markeds>
    </locations>
    <locations xmi:type="automata:Location" xmi:id="1771" name="CTC0">
      <position xmi:type="position:Position" xmi:id="1772" source="File &quot;../data/tests\dev_transformed.cif&quot;: " startLine="401" endOffset="10474" startColumn="12" endLine="401" endColumn="15" startOffset="10471" location="C:\Users\rober\Documents\studie\afstuderen\development\simulator_via_code_generator\data\tests\dev_transformed.cif"/>
      <edges xmi:type="automata:Edge" xmi:id="1773" target="2009">
        <position xmi:type="position:Position" xmi:id="1774" source="File &quot;../data/tests\dev_transformed.cif&quot;: " startLine="403" endOffset="10498" startColumn="5" endLine="403" endColumn="8" startOffset="10495" location="C:\Users\rober\Documents\studie\afstuderen\development\simulator_via_code_generator\data\tests\dev_transformed.cif"/>
        <events xmi:type="automata:EdgeEvent" xmi:id="1775">
          <position xmi:type="position:Position" xmi:id="1776" source="File &quot;../data/tests\dev_transformed.cif&quot;: " startLine="403" endOffset="10511" startColumn="10" endLine="403" endColumn="21" startOffset="10500" location="C:\Users\rober\Documents\studie\afstuderen\development\simulator_via_code_generator\data\tests\dev_transformed.cif"/>
          <event xmi:type="expressions:EventExpression" xmi:id="1777" event="161">
            <position xmi:type="position:Position" xmi:id="1778" source="File &quot;../data/tests\dev_transformed.cif&quot;: " startLine="403" endOffset="10511" startColumn="10" endLine="403" endColumn="21" startOffset="10500" location="C:\Users\rober\Documents\studie\afstuderen\development\simulator_via_code_generator\data\tests\dev_transformed.cif"/>
            <type xmi:type="types:BoolType" xmi:id="1779">
              <position xmi:type="position:Position" xmi:id="1780" source="File &quot;../data/tests\dev_transformed.cif&quot;: " startLine="403" endOffset="10511" startColumn="10" endLine="403" endColumn="21" startOffset="10500" location="C:\Users\rober\Documents\studie\afstuderen\development\simulator_via_code_generator\data\tests\dev_transformed.cif"/>
            </type>
          </event>
        </events>
      </edges>
      <markeds xmi:type="expressions:BoolExpression" xmi:id="1781" value="true">
        <position xmi:type="position:Position" xmi:id="1782" source="File &quot;../data/tests\dev_transformed.cif&quot;: " startLine="402" endOffset="10487" startColumn="5" endLine="402" endColumn="10" startOffset="10482" location="C:\Users\rober\Documents\studie\afstuderen\development\simulator_via_code_generator\data\tests\dev_transformed.cif"/>
        <type xmi:type="types:BoolType" xmi:id="1783">
          <position xmi:type="position:Position" xmi:id="1784" source="File &quot;../data/tests\dev_transformed.cif&quot;: " startLine="402" endOffset="10487" startColumn="5" endLine="402" endColumn="10" startOffset="10482" location="C:\Users\rober\Documents\studie\afstuderen\development\simulator_via_code_generator\data\tests\dev_transformed.cif"/>
        </type>
      </markeds>
    </locations>
    <locations xmi:type="automata:Location" xmi:id="1785" name="CTC1">
      <position xmi:type="position:Position" xmi:id="1786" source="File &quot;../data/tests\dev_transformed.cif&quot;: " startLine="404" endOffset="10543" startColumn="12" endLine="404" endColumn="15" startOffset="10540" location="C:\Users\rober\Documents\studie\afstuderen\development\simulator_via_code_generator\data\tests\dev_transformed.cif"/>
      <edges xmi:type="automata:Edge" xmi:id="1787" target="2019">
        <position xmi:type="position:Position" xmi:id="1788" source="File &quot;../data/tests\dev_transformed.cif&quot;: " startLine="406" endOffset="10567" startColumn="5" endLine="406" endColumn="8" startOffset="10564" location="C:\Users\rober\Documents\studie\afstuderen\development\simulator_via_code_generator\data\tests\dev_transformed.cif"/>
        <events xmi:type="automata:EdgeEvent" xmi:id="1789">
          <position xmi:type="position:Position" xmi:id="1790" source="File &quot;../data/tests\dev_transformed.cif&quot;: " startLine="406" endOffset="10580" startColumn="10" endLine="406" endColumn="21" startOffset="10569" location="C:\Users\rober\Documents\studie\afstuderen\development\simulator_via_code_generator\data\tests\dev_transformed.cif"/>
          <event xmi:type="expressions:EventExpression" xmi:id="1791" event="163">
            <position xmi:type="position:Position" xmi:id="1792" source="File &quot;../data/tests\dev_transformed.cif&quot;: " startLine="406" endOffset="10580" startColumn="10" endLine="406" endColumn="21" startOffset="10569" location="C:\Users\rober\Documents\studie\afstuderen\development\simulator_via_code_generator\data\tests\dev_transformed.cif"/>
            <type xmi:type="types:BoolType" xmi:id="1793">
              <position xmi:type="position:Position" xmi:id="1794" source="File &quot;../data/tests\dev_transformed.cif&quot;: " startLine="406" endOffset="10580" startColumn="10" endLine="406" endColumn="21" startOffset="10569" location="C:\Users\rober\Documents\studie\afstuderen\development\simulator_via_code_generator\data\tests\dev_transformed.cif"/>
            </type>
          </event>
        </events>
      </edges>
      <markeds xmi:type="expressions:BoolExpression" xmi:id="1795" value="true">
        <position xmi:type="position:Position" xmi:id="1796" source="File &quot;../data/tests\dev_transformed.cif&quot;: " startLine="405" endOffset="10556" startColumn="5" endLine="405" endColumn="10" startOffset="10551" location="C:\Users\rober\Documents\studie\afstuderen\development\simulator_via_code_generator\data\tests\dev_transformed.cif"/>
        <type xmi:type="types:BoolType" xmi:id="1797">
          <position xmi:type="position:Position" xmi:id="1798" source="File &quot;../data/tests\dev_transformed.cif&quot;: " startLine="405" endOffset="10556" startColumn="5" endLine="405" endColumn="10" startOffset="10551" location="C:\Users\rober\Documents\studie\afstuderen\development\simulator_via_code_generator\data\tests\dev_transformed.cif"/>
        </type>
      </markeds>
    </locations>
    <locations xmi:type="automata:Location" xmi:id="1799" name="PA_AlignRunning">
      <position xmi:type="position:Position" xmi:id="1800" source="File &quot;../data/tests\dev_transformed.cif&quot;: " startLine="407" endOffset="10623" startColumn="12" endLine="407" endColumn="26" startOffset="10609" location="C:\Users\rober\Documents\studie\afstuderen\development\simulator_via_code_generator\data\tests\dev_transformed.cif"/>
      <edges xmi:type="automata:Edge" xmi:id="1801" target="1617">
        <position xmi:type="position:Position" xmi:id="1802" source="File &quot;../data/tests\dev_transformed.cif&quot;: " startLine="408" endOffset="10634" startColumn="5" endLine="408" endColumn="8" startOffset="10631" location="C:\Users\rober\Documents\studie\afstuderen\development\simulator_via_code_generator\data\tests\dev_transformed.cif"/>
        <events xmi:type="automata:EdgeEvent" xmi:id="1803">
          <position xmi:type="position:Position" xmi:id="1804" source="File &quot;../data/tests\dev_transformed.cif&quot;: " startLine="408" endOffset="10647" startColumn="10" endLine="408" endColumn="21" startOffset="10636" location="C:\Users\rober\Documents\studie\afstuderen\development\simulator_via_code_generator\data\tests\dev_transformed.cif"/>
          <event xmi:type="expressions:EventExpression" xmi:id="1805" event="211">
            <position xmi:type="position:Position" xmi:id="1806" source="File &quot;../data/tests\dev_transformed.cif&quot;: " startLine="408" endOffset="10647" startColumn="10" endLine="408" endColumn="21" startOffset="10636" location="C:\Users\rober\Documents\studie\afstuderen\development\simulator_via_code_generator\data\tests\dev_transformed.cif"/>
            <type xmi:type="types:BoolType" xmi:id="1807">
              <position xmi:type="position:Position" xmi:id="1808" source="File &quot;../data/tests\dev_transformed.cif&quot;: " startLine="408" endOffset="10647" startColumn="10" endLine="408" endColumn="21" startOffset="10636" location="C:\Users\rober\Documents\studie\afstuderen\development\simulator_via_code_generator\data\tests\dev_transformed.cif"/>
            </type>
          </event>
        </events>
      </edges>
    </locations>
    <locations xmi:type="automata:Location" xmi:id="1809" name="TRtoSUB">
      <position xmi:type="position:Position" xmi:id="1810" source="File &quot;../data/tests\dev_transformed.cif&quot;: " startLine="409" endOffset="10676" startColumn="12" endLine="409" endColumn="18" startOffset="10670" location="C:\Users\rober\Documents\studie\afstuderen\development\simulator_via_code_generator\data\tests\dev_transformed.cif"/>
      <edges xmi:type="automata:Edge" xmi:id="1811" target="1565">
        <position xmi:type="position:Position" xmi:id="1812" source="File &quot;../data/tests\dev_transformed.cif&quot;: " startLine="410" endOffset="10687" startColumn="5" endLine="410" endColumn="8" startOffset="10684" location="C:\Users\rober\Documents\studie\afstuderen\development\simulator_via_code_generator\data\tests\dev_transformed.cif"/>
        <events xmi:type="automata:EdgeEvent" xmi:id="1813">
          <position xmi:type="position:Position" xmi:id="1814" source="File &quot;../data/tests\dev_transformed.cif&quot;: " startLine="410" endOffset="10699" startColumn="10" endLine="410" endColumn="20" startOffset="10689" location="C:\Users\rober\Documents\studie\afstuderen\development\simulator_via_code_generator\data\tests\dev_transformed.cif"/>
          <event xmi:type="expressions:EventExpression" xmi:id="1815" event="167">
            <position xmi:type="position:Position" xmi:id="1816" source="File &quot;../data/tests\dev_transformed.cif&quot;: " startLine="410" endOffset="10699" startColumn="10" endLine="410" endColumn="20" startOffset="10689" location="C:\Users\rober\Documents\studie\afstuderen\development\simulator_via_code_generator\data\tests\dev_transformed.cif"/>
            <type xmi:type="types:BoolType" xmi:id="1817">
              <position xmi:type="position:Position" xmi:id="1818" source="File &quot;../data/tests\dev_transformed.cif&quot;: " startLine="410" endOffset="10699" startColumn="10" endLine="410" endColumn="20" startOffset="10689" location="C:\Users\rober\Documents\studie\afstuderen\development\simulator_via_code_generator\data\tests\dev_transformed.cif"/>
            </type>
          </event>
        </events>
      </edges>
    </locations>
    <locations xmi:type="automata:Location" xmi:id="1819" name="SUBtoUR">
      <position xmi:type="position:Position" xmi:id="1820" source="File &quot;../data/tests\dev_transformed.cif&quot;: " startLine="411" endOffset="10729" startColumn="12" endLine="411" endColumn="18" startOffset="10723" location="C:\Users\rober\Documents\studie\afstuderen\development\simulator_via_code_generator\data\tests\dev_transformed.cif"/>
      <edges xmi:type="automata:Edge" xmi:id="1821" target="1579">
        <position xmi:type="position:Position" xmi:id="1822" source="File &quot;../data/tests\dev_transformed.cif&quot;: " startLine="412" endOffset="10740" startColumn="5" endLine="412" endColumn="8" startOffset="10737" location="C:\Users\rober\Documents\studie\afstuderen\development\simulator_via_code_generator\data\tests\dev_transformed.cif"/>
        <events xmi:type="automata:EdgeEvent" xmi:id="1823">
          <position xmi:type="position:Position" xmi:id="1824" source="File &quot;../data/tests\dev_transformed.cif&quot;: " startLine="412" endOffset="10752" startColumn="10" endLine="412" endColumn="20" startOffset="10742" location="C:\Users\rober\Documents\studie\afstuderen\development\simulator_via_code_generator\data\tests\dev_transformed.cif"/>
          <event xmi:type="expressions:EventExpression" xmi:id="1825" event="169">
            <position xmi:type="position:Position" xmi:id="1826" source="File &quot;../data/tests\dev_transformed.cif&quot;: " startLine="412" endOffset="10752" startColumn="10" endLine="412" endColumn="20" startOffset="10742" location="C:\Users\rober\Documents\studie\afstuderen\development\simulator_via_code_generator\data\tests\dev_transformed.cif"/>
            <type xmi:type="types:BoolType" xmi:id="1827">
              <position xmi:type="position:Position" xmi:id="1828" source="File &quot;../data/tests\dev_transformed.cif&quot;: " startLine="412" endOffset="10752" startColumn="10" endLine="412" endColumn="20" startOffset="10742" location="C:\Users\rober\Documents\studie\afstuderen\development\simulator_via_code_generator\data\tests\dev_transformed.cif"/>
            </type>
          </event>
        </events>
      </edges>
    </locations>
    <locations xmi:type="automata:Location" xmi:id="1829" name="URtoSUB">
      <position xmi:type="position:Position" xmi:id="1830" source="File &quot;../data/tests\dev_transformed.cif&quot;: " startLine="413" endOffset="10781" startColumn="12" endLine="413" endColumn="18" startOffset="10775" location="C:\Users\rober\Documents\studie\afstuderen\development\simulator_via_code_generator\data\tests\dev_transformed.cif"/>
      <edges xmi:type="automata:Edge" xmi:id="1831" target="1565">
        <position xmi:type="position:Position" xmi:id="1832" source="File &quot;../data/tests\dev_transformed.cif&quot;: " startLine="414" endOffset="10792" startColumn="5" endLine="414" endColumn="8" startOffset="10789" location="C:\Users\rober\Documents\studie\afstuderen\development\simulator_via_code_generator\data\tests\dev_transformed.cif"/>
        <events xmi:type="automata:EdgeEvent" xmi:id="1833">
          <position xmi:type="position:Position" xmi:id="1834" source="File &quot;../data/tests\dev_transformed.cif&quot;: " startLine="414" endOffset="10804" startColumn="10" endLine="414" endColumn="20" startOffset="10794" location="C:\Users\rober\Documents\studie\afstuderen\development\simulator_via_code_generator\data\tests\dev_transformed.cif"/>
          <event xmi:type="expressions:EventExpression" xmi:id="1835" event="171">
            <position xmi:type="position:Position" xmi:id="1836" source="File &quot;../data/tests\dev_transformed.cif&quot;: " startLine="414" endOffset="10804" startColumn="10" endLine="414" endColumn="20" startOffset="10794" location="C:\Users\rober\Documents\studie\afstuderen\development\simulator_via_code_generator\data\tests\dev_transformed.cif"/>
            <type xmi:type="types:BoolType" xmi:id="1837">
              <position xmi:type="position:Position" xmi:id="1838" source="File &quot;../data/tests\dev_transformed.cif&quot;: " startLine="414" endOffset="10804" startColumn="10" endLine="414" endColumn="20" startOffset="10794" location="C:\Users\rober\Documents\studie\afstuderen\development\simulator_via_code_generator\data\tests\dev_transformed.cif"/>
            </type>
          </event>
        </events>
      </edges>
    </locations>
    <locations xmi:type="automata:Location" xmi:id="1839" name="URtoDU">
      <position xmi:type="position:Position" xmi:id="1840" source="File &quot;../data/tests\dev_transformed.cif&quot;: " startLine="415" endOffset="10833" startColumn="12" endLine="415" endColumn="17" startOffset="10828" location="C:\Users\rober\Documents\studie\afstuderen\development\simulator_via_code_generator\data\tests\dev_transformed.cif"/>
      <edges xmi:type="automata:Edge" xmi:id="1841" target="1693">
        <position xmi:type="position:Position" xmi:id="1842" source="File &quot;../data/tests\dev_transformed.cif&quot;: " startLine="416" endOffset="10844" startColumn="5" endLine="416" endColumn="8" startOffset="10841" location="C:\Users\rober\Documents\studie\afstuderen\development\simulator_via_code_generator\data\tests\dev_transformed.cif"/>
        <events xmi:type="automata:EdgeEvent" xmi:id="1843">
          <position xmi:type="position:Position" xmi:id="1844" source="File &quot;../data/tests\dev_transformed.cif&quot;: " startLine="416" endOffset="10855" startColumn="10" endLine="416" endColumn="19" startOffset="10846" location="C:\Users\rober\Documents\studie\afstuderen\development\simulator_via_code_generator\data\tests\dev_transformed.cif"/>
          <event xmi:type="expressions:EventExpression" xmi:id="1845" event="173">
            <position xmi:type="position:Position" xmi:id="1846" source="File &quot;../data/tests\dev_transformed.cif&quot;: " startLine="416" endOffset="10855" startColumn="10" endLine="416" endColumn="19" startOffset="10846" location="C:\Users\rober\Documents\studie\afstuderen\development\simulator_via_code_generator\data\tests\dev_transformed.cif"/>
            <type xmi:type="types:BoolType" xmi:id="1847">
              <position xmi:type="position:Position" xmi:id="1848" source="File &quot;../data/tests\dev_transformed.cif&quot;: " startLine="416" endOffset="10855" startColumn="10" endLine="416" endColumn="19" startOffset="10846" location="C:\Users\rober\Documents\studie\afstuderen\development\simulator_via_code_generator\data\tests\dev_transformed.cif"/>
            </type>
          </event>
        </events>
      </edges>
    </locations>
    <locations xmi:type="automata:Location" xmi:id="1849" name="URtoPA">
      <position xmi:type="position:Position" xmi:id="1850" source="File &quot;../data/tests\dev_transformed.cif&quot;: " startLine="417" endOffset="10883" startColumn="12" endLine="417" endColumn="17" startOffset="10878" location="C:\Users\rober\Documents\studie\afstuderen\development\simulator_via_code_generator\data\tests\dev_transformed.cif"/>
      <edges xmi:type="automata:Edge" xmi:id="1851" target="1617">
        <position xmi:type="position:Position" xmi:id="1852" source="File &quot;../data/tests\dev_transformed.cif&quot;: " startLine="418" endOffset="10894" startColumn="5" endLine="418" endColumn="8" startOffset="10891" location="C:\Users\rober\Documents\studie\afstuderen\development\simulator_via_code_generator\data\tests\dev_transformed.cif"/>
        <events xmi:type="automata:EdgeEvent" xmi:id="1853">
          <position xmi:type="position:Position" xmi:id="1854" source="File &quot;../data/tests\dev_transformed.cif&quot;: " startLine="418" endOffset="10905" startColumn="10" endLine="418" endColumn="19" startOffset="10896" location="C:\Users\rober\Documents\studie\afstuderen\development\simulator_via_code_generator\data\tests\dev_transformed.cif"/>
          <event xmi:type="expressions:EventExpression" xmi:id="1855" event="175">
            <position xmi:type="position:Position" xmi:id="1856" source="File &quot;../data/tests\dev_transformed.cif&quot;: " startLine="418" endOffset="10905" startColumn="10" endLine="418" endColumn="19" startOffset="10896" location="C:\Users\rober\Documents\studie\afstuderen\development\simulator_via_code_generator\data\tests\dev_transformed.cif"/>
            <type xmi:type="types:BoolType" xmi:id="1857">
              <position xmi:type="position:Position" xmi:id="1858" source="File &quot;../data/tests\dev_transformed.cif&quot;: " startLine="418" endOffset="10905" startColumn="10" endLine="418" endColumn="19" startOffset="10896" location="C:\Users\rober\Documents\studie\afstuderen\development\simulator_via_code_generator\data\tests\dev_transformed.cif"/>
            </type>
          </event>
        </events>
      </edges>
    </locations>
    <locations xmi:type="automata:Location" xmi:id="1859" name="URtoCTC1">
      <position xmi:type="position:Position" xmi:id="1860" source="File &quot;../data/tests\dev_transformed.cif&quot;: " startLine="419" endOffset="10935" startColumn="12" endLine="419" endColumn="19" startOffset="10928" location="C:\Users\rober\Documents\studie\afstuderen\development\simulator_via_code_generator\data\tests\dev_transformed.cif"/>
      <edges xmi:type="automata:Edge" xmi:id="1861" target="1785">
        <position xmi:type="position:Position" xmi:id="1862" source="File &quot;../data/tests\dev_transformed.cif&quot;: " startLine="420" endOffset="10946" startColumn="5" endLine="420" endColumn="8" startOffset="10943" location="C:\Users\rober\Documents\studie\afstuderen\development\simulator_via_code_generator\data\tests\dev_transformed.cif"/>
        <events xmi:type="automata:EdgeEvent" xmi:id="1863">
          <position xmi:type="position:Position" xmi:id="1864" source="File &quot;../data/tests\dev_transformed.cif&quot;: " startLine="420" endOffset="10959" startColumn="10" endLine="420" endColumn="21" startOffset="10948" location="C:\Users\rober\Documents\studie\afstuderen\development\simulator_via_code_generator\data\tests\dev_transformed.cif"/>
          <event xmi:type="expressions:EventExpression" xmi:id="1865" event="177">
            <position xmi:type="position:Position" xmi:id="1866" source="File &quot;../data/tests\dev_transformed.cif&quot;: " startLine="420" endOffset="10959" startColumn="10" endLine="420" endColumn="21" startOffset="10948" location="C:\Users\rober\Documents\studie\afstuderen\development\simulator_via_code_generator\data\tests\dev_transformed.cif"/>
            <type xmi:type="types:BoolType" xmi:id="1867">
              <position xmi:type="position:Position" xmi:id="1868" source="File &quot;../data/tests\dev_transformed.cif&quot;: " startLine="420" endOffset="10959" startColumn="10" endLine="420" endColumn="21" startOffset="10948" location="C:\Users\rober\Documents\studie\afstuderen\development\simulator_via_code_generator\data\tests\dev_transformed.cif"/>
            </type>
          </event>
        </events>
      </edges>
    </locations>
    <locations xmi:type="automata:Location" xmi:id="1869" name="PAtoUR">
      <position xmi:type="position:Position" xmi:id="1870" source="File &quot;../data/tests\dev_transformed.cif&quot;: " startLine="421" endOffset="10989" startColumn="12" endLine="421" endColumn="17" startOffset="10984" location="C:\Users\rober\Documents\studie\afstuderen\development\simulator_via_code_generator\data\tests\dev_transformed.cif"/>
      <edges xmi:type="automata:Edge" xmi:id="1871" target="1579">
        <position xmi:type="position:Position" xmi:id="1872" source="File &quot;../data/tests\dev_transformed.cif&quot;: " startLine="422" endOffset="11000" startColumn="5" endLine="422" endColumn="8" startOffset="10997" location="C:\Users\rober\Documents\studie\afstuderen\development\simulator_via_code_generator\data\tests\dev_transformed.cif"/>
        <events xmi:type="automata:EdgeEvent" xmi:id="1873">
          <position xmi:type="position:Position" xmi:id="1874" source="File &quot;../data/tests\dev_transformed.cif&quot;: " startLine="422" endOffset="11011" startColumn="10" endLine="422" endColumn="19" startOffset="11002" location="C:\Users\rober\Documents\studie\afstuderen\development\simulator_via_code_generator\data\tests\dev_transformed.cif"/>
          <event xmi:type="expressions:EventExpression" xmi:id="1875" event="179">
            <position xmi:type="position:Position" xmi:id="1876" source="File &quot;../data/tests\dev_transformed.cif&quot;: " startLine="422" endOffset="11011" startColumn="10" endLine="422" endColumn="19" startOffset="11002" location="C:\Users\rober\Documents\studie\afstuderen\development\simulator_via_code_generator\data\tests\dev_transformed.cif"/>
            <type xmi:type="types:BoolType" xmi:id="1877">
              <position xmi:type="position:Position" xmi:id="1878" source="File &quot;../data/tests\dev_transformed.cif&quot;: " startLine="422" endOffset="11011" startColumn="10" endLine="422" endColumn="19" startOffset="11002" location="C:\Users\rober\Documents\studie\afstuderen\development\simulator_via_code_generator\data\tests\dev_transformed.cif"/>
            </type>
          </event>
        </events>
      </edges>
    </locations>
    <locations xmi:type="automata:Location" xmi:id="1879" name="PAtoLR">
      <position xmi:type="position:Position" xmi:id="1880" source="File &quot;../data/tests\dev_transformed.cif&quot;: " startLine="423" endOffset="11039" startColumn="12" endLine="423" endColumn="17" startOffset="11034" location="C:\Users\rober\Documents\studie\afstuderen\development\simulator_via_code_generator\data\tests\dev_transformed.cif"/>
      <edges xmi:type="automata:Edge" xmi:id="1881" target="1647">
        <position xmi:type="position:Position" xmi:id="1882" source="File &quot;../data/tests\dev_transformed.cif&quot;: " startLine="424" endOffset="11050" startColumn="5" endLine="424" endColumn="8" startOffset="11047" location="C:\Users\rober\Documents\studie\afstuderen\development\simulator_via_code_generator\data\tests\dev_transformed.cif"/>
        <events xmi:type="automata:EdgeEvent" xmi:id="1883">
          <position xmi:type="position:Position" xmi:id="1884" source="File &quot;../data/tests\dev_transformed.cif&quot;: " startLine="424" endOffset="11061" startColumn="10" endLine="424" endColumn="19" startOffset="11052" location="C:\Users\rober\Documents\studie\afstuderen\development\simulator_via_code_generator\data\tests\dev_transformed.cif"/>
          <event xmi:type="expressions:EventExpression" xmi:id="1885" event="181">
            <position xmi:type="position:Position" xmi:id="1886" source="File &quot;../data/tests\dev_transformed.cif&quot;: " startLine="424" endOffset="11061" startColumn="10" endLine="424" endColumn="19" startOffset="11052" location="C:\Users\rober\Documents\studie\afstuderen\development\simulator_via_code_generator\data\tests\dev_transformed.cif"/>
            <type xmi:type="types:BoolType" xmi:id="1887">
              <position xmi:type="position:Position" xmi:id="1888" source="File &quot;../data/tests\dev_transformed.cif&quot;: " startLine="424" endOffset="11061" startColumn="10" endLine="424" endColumn="19" startOffset="11052" location="C:\Users\rober\Documents\studie\afstuderen\development\simulator_via_code_generator\data\tests\dev_transformed.cif"/>
            </type>
          </event>
        </events>
      </edges>
    </locations>
    <locations xmi:type="automata:Location" xmi:id="1889" name="LRtoDU">
      <position xmi:type="position:Position" xmi:id="1890" source="File &quot;../data/tests\dev_transformed.cif&quot;: " startLine="425" endOffset="11089" startColumn="12" endLine="425" endColumn="17" startOffset="11084" location="C:\Users\rober\Documents\studie\afstuderen\development\simulator_via_code_generator\data\tests\dev_transformed.cif"/>
      <edges xmi:type="automata:Edge" xmi:id="1891" target="1693">
        <position xmi:type="position:Position" xmi:id="1892" source="File &quot;../data/tests\dev_transformed.cif&quot;: " startLine="426" endOffset="11100" startColumn="5" endLine="426" endColumn="8" startOffset="11097" location="C:\Users\rober\Documents\studie\afstuderen\development\simulator_via_code_generator\data\tests\dev_transformed.cif"/>
        <events xmi:type="automata:EdgeEvent" xmi:id="1893">
          <position xmi:type="position:Position" xmi:id="1894" source="File &quot;../data/tests\dev_transformed.cif&quot;: " startLine="426" endOffset="11111" startColumn="10" endLine="426" endColumn="19" startOffset="11102" location="C:\Users\rober\Documents\studie\afstuderen\development\simulator_via_code_generator\data\tests\dev_transformed.cif"/>
          <event xmi:type="expressions:EventExpression" xmi:id="1895" event="183">
            <position xmi:type="position:Position" xmi:id="1896" source="File &quot;../data/tests\dev_transformed.cif&quot;: " startLine="426" endOffset="11111" startColumn="10" endLine="426" endColumn="19" startOffset="11102" location="C:\Users\rober\Documents\studie\afstuderen\development\simulator_via_code_generator\data\tests\dev_transformed.cif"/>
            <type xmi:type="types:BoolType" xmi:id="1897">
              <position xmi:type="position:Position" xmi:id="1898" source="File &quot;../data/tests\dev_transformed.cif&quot;: " startLine="426" endOffset="11111" startColumn="10" endLine="426" endColumn="19" startOffset="11102" location="C:\Users\rober\Documents\studie\afstuderen\development\simulator_via_code_generator\data\tests\dev_transformed.cif"/>
            </type>
          </event>
        </events>
      </edges>
    </locations>
    <locations xmi:type="automata:Location" xmi:id="1899" name="LRtoPA">
      <position xmi:type="position:Position" xmi:id="1900" source="File &quot;../data/tests\dev_transformed.cif&quot;: " startLine="427" endOffset="11139" startColumn="12" endLine="427" endColumn="17" startOffset="11134" location="C:\Users\rober\Documents\studie\afstuderen\development\simulator_via_code_generator\data\tests\dev_transformed.cif"/>
      <edges xmi:type="automata:Edge" xmi:id="1901" target="1617">
        <position xmi:type="position:Position" xmi:id="1902" source="File &quot;../data/tests\dev_transformed.cif&quot;: " startLine="428" endOffset="11150" startColumn="5" endLine="428" endColumn="8" startOffset="11147" location="C:\Users\rober\Documents\studie\afstuderen\development\simulator_via_code_generator\data\tests\dev_transformed.cif"/>
        <events xmi:type="automata:EdgeEvent" xmi:id="1903">
          <position xmi:type="position:Position" xmi:id="1904" source="File &quot;../data/tests\dev_transformed.cif&quot;: " startLine="428" endOffset="11161" startColumn="10" endLine="428" endColumn="19" startOffset="11152" location="C:\Users\rober\Documents\studie\afstuderen\development\simulator_via_code_generator\data\tests\dev_transformed.cif"/>
          <event xmi:type="expressions:EventExpression" xmi:id="1905" event="185">
            <position xmi:type="position:Position" xmi:id="1906" source="File &quot;../data/tests\dev_transformed.cif&quot;: " startLine="428" endOffset="11161" startColumn="10" endLine="428" endColumn="19" startOffset="11152" location="C:\Users\rober\Documents\studie\afstuderen\development\simulator_via_code_generator\data\tests\dev_transformed.cif"/>
            <type xmi:type="types:BoolType" xmi:id="1907">
              <position xmi:type="position:Position" xmi:id="1908" source="File &quot;../data/tests\dev_transformed.cif&quot;: " startLine="428" endOffset="11161" startColumn="10" endLine="428" endColumn="19" startOffset="11152" location="C:\Users\rober\Documents\studie\afstuderen\development\simulator_via_code_generator\data\tests\dev_transformed.cif"/>
            </type>
          </event>
        </events>
      </edges>
    </locations>
    <locations xmi:type="automata:Location" xmi:id="1909" name="LRtoCH0">
      <position xmi:type="position:Position" xmi:id="1910" source="File &quot;../data/tests\dev_transformed.cif&quot;: " startLine="429" endOffset="11190" startColumn="12" endLine="429" endColumn="18" startOffset="11184" location="C:\Users\rober\Documents\studie\afstuderen\development\simulator_via_code_generator\data\tests\dev_transformed.cif"/>
      <edges xmi:type="automata:Edge" xmi:id="1911" target="1723">
        <position xmi:type="position:Position" xmi:id="1912" source="File &quot;../data/tests\dev_transformed.cif&quot;: " startLine="430" endOffset="11201" startColumn="5" endLine="430" endColumn="8" startOffset="11198" location="C:\Users\rober\Documents\studie\afstuderen\development\simulator_via_code_generator\data\tests\dev_transformed.cif"/>
        <events xmi:type="automata:EdgeEvent" xmi:id="1913">
          <position xmi:type="position:Position" xmi:id="1914" source="File &quot;../data/tests\dev_transformed.cif&quot;: " startLine="430" endOffset="11213" startColumn="10" endLine="430" endColumn="20" startOffset="11203" location="C:\Users\rober\Documents\studie\afstuderen\development\simulator_via_code_generator\data\tests\dev_transformed.cif"/>
          <event xmi:type="expressions:EventExpression" xmi:id="1915" event="187">
            <position xmi:type="position:Position" xmi:id="1916" source="File &quot;../data/tests\dev_transformed.cif&quot;: " startLine="430" endOffset="11213" startColumn="10" endLine="430" endColumn="20" startOffset="11203" location="C:\Users\rober\Documents\studie\afstuderen\development\simulator_via_code_generator\data\tests\dev_transformed.cif"/>
            <type xmi:type="types:BoolType" xmi:id="1917">
              <position xmi:type="position:Position" xmi:id="1918" source="File &quot;../data/tests\dev_transformed.cif&quot;: " startLine="430" endOffset="11213" startColumn="10" endLine="430" endColumn="20" startOffset="11203" location="C:\Users\rober\Documents\studie\afstuderen\development\simulator_via_code_generator\data\tests\dev_transformed.cif"/>
            </type>
          </event>
        </events>
      </edges>
    </locations>
    <locations xmi:type="automata:Location" xmi:id="1919" name="LRtoCH1">
      <position xmi:type="position:Position" xmi:id="1920" source="File &quot;../data/tests\dev_transformed.cif&quot;: " startLine="431" endOffset="11243" startColumn="12" endLine="431" endColumn="18" startOffset="11237" location="C:\Users\rober\Documents\studie\afstuderen\development\simulator_via_code_generator\data\tests\dev_transformed.cif"/>
      <edges xmi:type="automata:Edge" xmi:id="1921" target="1745">
        <position xmi:type="position:Position" xmi:id="1922" source="File &quot;../data/tests\dev_transformed.cif&quot;: " startLine="432" endOffset="11254" startColumn="5" endLine="432" endColumn="8" startOffset="11251" location="C:\Users\rober\Documents\studie\afstuderen\development\simulator_via_code_generator\data\tests\dev_transformed.cif"/>
        <events xmi:type="automata:EdgeEvent" xmi:id="1923">
          <position xmi:type="position:Position" xmi:id="1924" source="File &quot;../data/tests\dev_transformed.cif&quot;: " startLine="432" endOffset="11266" startColumn="10" endLine="432" endColumn="20" startOffset="11256" location="C:\Users\rober\Documents\studie\afstuderen\development\simulator_via_code_generator\data\tests\dev_transformed.cif"/>
          <event xmi:type="expressions:EventExpression" xmi:id="1925" event="189">
            <position xmi:type="position:Position" xmi:id="1926" source="File &quot;../data/tests\dev_transformed.cif&quot;: " startLine="432" endOffset="11266" startColumn="10" endLine="432" endColumn="20" startOffset="11256" location="C:\Users\rober\Documents\studie\afstuderen\development\simulator_via_code_generator\data\tests\dev_transformed.cif"/>
            <type xmi:type="types:BoolType" xmi:id="1927">
              <position xmi:type="position:Position" xmi:id="1928" source="File &quot;../data/tests\dev_transformed.cif&quot;: " startLine="432" endOffset="11266" startColumn="10" endLine="432" endColumn="20" startOffset="11256" location="C:\Users\rober\Documents\studie\afstuderen\development\simulator_via_code_generator\data\tests\dev_transformed.cif"/>
            </type>
          </event>
        </events>
      </edges>
    </locations>
    <locations xmi:type="automata:Location" xmi:id="1929" name="LRtoCTC0">
      <position xmi:type="position:Position" xmi:id="1930" source="File &quot;../data/tests\dev_transformed.cif&quot;: " startLine="433" endOffset="11297" startColumn="12" endLine="433" endColumn="19" startOffset="11290" location="C:\Users\rober\Documents\studie\afstuderen\development\simulator_via_code_generator\data\tests\dev_transformed.cif"/>
      <edges xmi:type="automata:Edge" xmi:id="1931" target="1771">
        <position xmi:type="position:Position" xmi:id="1932" source="File &quot;../data/tests\dev_transformed.cif&quot;: " startLine="434" endOffset="11308" startColumn="5" endLine="434" endColumn="8" startOffset="11305" location="C:\Users\rober\Documents\studie\afstuderen\development\simulator_via_code_generator\data\tests\dev_transformed.cif"/>
        <events xmi:type="automata:EdgeEvent" xmi:id="1933">
          <position xmi:type="position:Position" xmi:id="1934" source="File &quot;../data/tests\dev_transformed.cif&quot;: " startLine="434" endOffset="11321" startColumn="10" endLine="434" endColumn="21" startOffset="11310" location="C:\Users\rober\Documents\studie\afstuderen\development\simulator_via_code_generator\data\tests\dev_transformed.cif"/>
          <event xmi:type="expressions:EventExpression" xmi:id="1935" event="191">
            <position xmi:type="position:Position" xmi:id="1936" source="File &quot;../data/tests\dev_transformed.cif&quot;: " startLine="434" endOffset="11321" startColumn="10" endLine="434" endColumn="21" startOffset="11310" location="C:\Users\rober\Documents\studie\afstuderen\development\simulator_via_code_generator\data\tests\dev_transformed.cif"/>
            <type xmi:type="types:BoolType" xmi:id="1937">
              <position xmi:type="position:Position" xmi:id="1938" source="File &quot;../data/tests\dev_transformed.cif&quot;: " startLine="434" endOffset="11321" startColumn="10" endLine="434" endColumn="21" startOffset="11310" location="C:\Users\rober\Documents\studie\afstuderen\development\simulator_via_code_generator\data\tests\dev_transformed.cif"/>
            </type>
          </event>
        </events>
      </edges>
    </locations>
    <locations xmi:type="automata:Location" xmi:id="1939" name="DUtoUR">
      <position xmi:type="position:Position" xmi:id="1940" source="File &quot;../data/tests\dev_transformed.cif&quot;: " startLine="435" endOffset="11351" startColumn="12" endLine="435" endColumn="17" startOffset="11346" location="C:\Users\rober\Documents\studie\afstuderen\development\simulator_via_code_generator\data\tests\dev_transformed.cif"/>
      <edges xmi:type="automata:Edge" xmi:id="1941" target="1579">
        <position xmi:type="position:Position" xmi:id="1942" source="File &quot;../data/tests\dev_transformed.cif&quot;: " startLine="436" endOffset="11362" startColumn="5" endLine="436" endColumn="8" startOffset="11359" location="C:\Users\rober\Documents\studie\afstuderen\development\simulator_via_code_generator\data\tests\dev_transformed.cif"/>
        <events xmi:type="automata:EdgeEvent" xmi:id="1943">
          <position xmi:type="position:Position" xmi:id="1944" source="File &quot;../data/tests\dev_transformed.cif&quot;: " startLine="436" endOffset="11373" startColumn="10" endLine="436" endColumn="19" startOffset="11364" location="C:\Users\rober\Documents\studie\afstuderen\development\simulator_via_code_generator\data\tests\dev_transformed.cif"/>
          <event xmi:type="expressions:EventExpression" xmi:id="1945" event="193">
            <position xmi:type="position:Position" xmi:id="1946" source="File &quot;../data/tests\dev_transformed.cif&quot;: " startLine="436" endOffset="11373" startColumn="10" endLine="436" endColumn="19" startOffset="11364" location="C:\Users\rober\Documents\studie\afstuderen\development\simulator_via_code_generator\data\tests\dev_transformed.cif"/>
            <type xmi:type="types:BoolType" xmi:id="1947">
              <position xmi:type="position:Position" xmi:id="1948" source="File &quot;../data/tests\dev_transformed.cif&quot;: " startLine="436" endOffset="11373" startColumn="10" endLine="436" endColumn="19" startOffset="11364" location="C:\Users\rober\Documents\studie\afstuderen\development\simulator_via_code_generator\data\tests\dev_transformed.cif"/>
            </type>
          </event>
        </events>
      </edges>
    </locations>
    <locations xmi:type="automata:Location" xmi:id="1949" name="DUtoLR">
      <position xmi:type="position:Position" xmi:id="1950" source="File &quot;../data/tests\dev_transformed.cif&quot;: " startLine="437" endOffset="11401" startColumn="12" endLine="437" endColumn="17" startOffset="11396" location="C:\Users\rober\Documents\studie\afstuderen\development\simulator_via_code_generator\data\tests\dev_transformed.cif"/>
      <edges xmi:type="automata:Edge" xmi:id="1951" target="1647">
        <position xmi:type="position:Position" xmi:id="1952" source="File &quot;../data/tests\dev_transformed.cif&quot;: " startLine="438" endOffset="11412" startColumn="5" endLine="438" endColumn="8" startOffset="11409" location="C:\Users\rober\Documents\studie\afstuderen\development\simulator_via_code_generator\data\tests\dev_transformed.cif"/>
        <events xmi:type="automata:EdgeEvent" xmi:id="1953">
          <position xmi:type="position:Position" xmi:id="1954" source="File &quot;../data/tests\dev_transformed.cif&quot;: " startLine="438" endOffset="11423" startColumn="10" endLine="438" endColumn="19" startOffset="11414" location="C:\Users\rober\Documents\studie\afstuderen\development\simulator_via_code_generator\data\tests\dev_transformed.cif"/>
          <event xmi:type="expressions:EventExpression" xmi:id="1955" event="195">
            <position xmi:type="position:Position" xmi:id="1956" source="File &quot;../data/tests\dev_transformed.cif&quot;: " startLine="438" endOffset="11423" startColumn="10" endLine="438" endColumn="19" startOffset="11414" location="C:\Users\rober\Documents\studie\afstuderen\development\simulator_via_code_generator\data\tests\dev_transformed.cif"/>
            <type xmi:type="types:BoolType" xmi:id="1957">
              <position xmi:type="position:Position" xmi:id="1958" source="File &quot;../data/tests\dev_transformed.cif&quot;: " startLine="438" endOffset="11423" startColumn="10" endLine="438" endColumn="19" startOffset="11414" location="C:\Users\rober\Documents\studie\afstuderen\development\simulator_via_code_generator\data\tests\dev_transformed.cif"/>
            </type>
          </event>
        </events>
      </edges>
    </locations>
    <locations xmi:type="automata:Location" xmi:id="1959" name="DUtoTR">
      <position xmi:type="position:Position" xmi:id="1960" source="File &quot;../data/tests\dev_transformed.cif&quot;: " startLine="439" endOffset="11451" startColumn="12" endLine="439" endColumn="17" startOffset="11446" location="C:\Users\rober\Documents\studie\afstuderen\development\simulator_via_code_generator\data\tests\dev_transformed.cif"/>
      <edges xmi:type="automata:Edge" xmi:id="1961" target="1551">
        <position xmi:type="position:Position" xmi:id="1962" source="File &quot;../data/tests\dev_transformed.cif&quot;: " startLine="440" endOffset="11462" startColumn="5" endLine="440" endColumn="8" startOffset="11459" location="C:\Users\rober\Documents\studie\afstuderen\development\simulator_via_code_generator\data\tests\dev_transformed.cif"/>
        <events xmi:type="automata:EdgeEvent" xmi:id="1963">
          <position xmi:type="position:Position" xmi:id="1964" source="File &quot;../data/tests\dev_transformed.cif&quot;: " startLine="440" endOffset="11473" startColumn="10" endLine="440" endColumn="19" startOffset="11464" location="C:\Users\rober\Documents\studie\afstuderen\development\simulator_via_code_generator\data\tests\dev_transformed.cif"/>
          <event xmi:type="expressions:EventExpression" xmi:id="1965" event="197">
            <position xmi:type="position:Position" xmi:id="1966" source="File &quot;../data/tests\dev_transformed.cif&quot;: " startLine="440" endOffset="11473" startColumn="10" endLine="440" endColumn="19" startOffset="11464" location="C:\Users\rober\Documents\studie\afstuderen\development\simulator_via_code_generator\data\tests\dev_transformed.cif"/>
            <type xmi:type="types:BoolType" xmi:id="1967">
              <position xmi:type="position:Position" xmi:id="1968" source="File &quot;../data/tests\dev_transformed.cif&quot;: " startLine="440" endOffset="11473" startColumn="10" endLine="440" endColumn="19" startOffset="11464" location="C:\Users\rober\Documents\studie\afstuderen\development\simulator_via_code_generator\data\tests\dev_transformed.cif"/>
            </type>
          </event>
        </events>
      </edges>
    </locations>
    <locations xmi:type="automata:Location" xmi:id="1969" name="CH0toLR">
      <position xmi:type="position:Position" xmi:id="1970" source="File &quot;../data/tests\dev_transformed.cif&quot;: " startLine="441" endOffset="11502" startColumn="12" endLine="441" endColumn="18" startOffset="11496" location="C:\Users\rober\Documents\studie\afstuderen\development\simulator_via_code_generator\data\tests\dev_transformed.cif"/>
      <edges xmi:type="automata:Edge" xmi:id="1971" target="1647">
        <position xmi:type="position:Position" xmi:id="1972" source="File &quot;../data/tests\dev_transformed.cif&quot;: " startLine="442" endOffset="11513" startColumn="5" endLine="442" endColumn="8" startOffset="11510" location="C:\Users\rober\Documents\studie\afstuderen\development\simulator_via_code_generator\data\tests\dev_transformed.cif"/>
        <events xmi:type="automata:EdgeEvent" xmi:id="1973">
          <position xmi:type="position:Position" xmi:id="1974" source="File &quot;../data/tests\dev_transformed.cif&quot;: " startLine="442" endOffset="11525" startColumn="10" endLine="442" endColumn="20" startOffset="11515" location="C:\Users\rober\Documents\studie\afstuderen\development\simulator_via_code_generator\data\tests\dev_transformed.cif"/>
          <event xmi:type="expressions:EventExpression" xmi:id="1975" event="199">
            <position xmi:type="position:Position" xmi:id="1976" source="File &quot;../data/tests\dev_transformed.cif&quot;: " startLine="442" endOffset="11525" startColumn="10" endLine="442" endColumn="20" startOffset="11515" location="C:\Users\rober\Documents\studie\afstuderen\development\simulator_via_code_generator\data\tests\dev_transformed.cif"/>
            <type xmi:type="types:BoolType" xmi:id="1977">
              <position xmi:type="position:Position" xmi:id="1978" source="File &quot;../data/tests\dev_transformed.cif&quot;: " startLine="442" endOffset="11525" startColumn="10" endLine="442" endColumn="20" startOffset="11515" location="C:\Users\rober\Documents\studie\afstuderen\development\simulator_via_code_generator\data\tests\dev_transformed.cif"/>
            </type>
          </event>
        </events>
      </edges>
    </locations>
    <locations xmi:type="automata:Location" xmi:id="1979" name="CH0toUR">
      <position xmi:type="position:Position" xmi:id="1980" source="File &quot;../data/tests\dev_transformed.cif&quot;: " startLine="443" endOffset="11554" startColumn="12" endLine="443" endColumn="18" startOffset="11548" location="C:\Users\rober\Documents\studie\afstuderen\development\simulator_via_code_generator\data\tests\dev_transformed.cif"/>
      <edges xmi:type="automata:Edge" xmi:id="1981" target="1579">
        <position xmi:type="position:Position" xmi:id="1982" source="File &quot;../data/tests\dev_transformed.cif&quot;: " startLine="444" endOffset="11565" startColumn="5" endLine="444" endColumn="8" startOffset="11562" location="C:\Users\rober\Documents\studie\afstuderen\development\simulator_via_code_generator\data\tests\dev_transformed.cif"/>
        <events xmi:type="automata:EdgeEvent" xmi:id="1983">
          <position xmi:type="position:Position" xmi:id="1984" source="File &quot;../data/tests\dev_transformed.cif&quot;: " startLine="444" endOffset="11577" startColumn="10" endLine="444" endColumn="20" startOffset="11567" location="C:\Users\rober\Documents\studie\afstuderen\development\simulator_via_code_generator\data\tests\dev_transformed.cif"/>
          <event xmi:type="expressions:EventExpression" xmi:id="1985" event="201">
            <position xmi:type="position:Position" xmi:id="1986" source="File &quot;../data/tests\dev_transformed.cif&quot;: " startLine="444" endOffset="11577" startColumn="10" endLine="444" endColumn="20" startOffset="11567" location="C:\Users\rober\Documents\studie\afstuderen\development\simulator_via_code_generator\data\tests\dev_transformed.cif"/>
            <type xmi:type="types:BoolType" xmi:id="1987">
              <position xmi:type="position:Position" xmi:id="1988" source="File &quot;../data/tests\dev_transformed.cif&quot;: " startLine="444" endOffset="11577" startColumn="10" endLine="444" endColumn="20" startOffset="11567" location="C:\Users\rober\Documents\studie\afstuderen\development\simulator_via_code_generator\data\tests\dev_transformed.cif"/>
            </type>
          </event>
        </events>
      </edges>
    </locations>
    <locations xmi:type="automata:Location" xmi:id="1989" name="CH1toLR">
      <position xmi:type="position:Position" xmi:id="1990" source="File &quot;../data/tests\dev_transformed.cif&quot;: " startLine="445" endOffset="11606" startColumn="12" endLine="445" endColumn="18" startOffset="11600" location="C:\Users\rober\Documents\studie\afstuderen\development\simulator_via_code_generator\data\tests\dev_transformed.cif"/>
      <edges xmi:type="automata:Edge" xmi:id="1991" target="1647">
        <position xmi:type="position:Position" xmi:id="1992" source="File &quot;../data/tests\dev_transformed.cif&quot;: " startLine="446" endOffset="11617" startColumn="5" endLine="446" endColumn="8" startOffset="11614" location="C:\Users\rober\Documents\studie\afstuderen\development\simulator_via_code_generator\data\tests\dev_transformed.cif"/>
        <events xmi:type="automata:EdgeEvent" xmi:id="1993">
          <position xmi:type="position:Position" xmi:id="1994" source="File &quot;../data/tests\dev_transformed.cif&quot;: " startLine="446" endOffset="11629" startColumn="10" endLine="446" endColumn="20" startOffset="11619" location="C:\Users\rober\Documents\studie\afstuderen\development\simulator_via_code_generator\data\tests\dev_transformed.cif"/>
          <event xmi:type="expressions:EventExpression" xmi:id="1995" event="203">
            <position xmi:type="position:Position" xmi:id="1996" source="File &quot;../data/tests\dev_transformed.cif&quot;: " startLine="446" endOffset="11629" startColumn="10" endLine="446" endColumn="20" startOffset="11619" location="C:\Users\rober\Documents\studie\afstuderen\development\simulator_via_code_generator\data\tests\dev_transformed.cif"/>
            <type xmi:type="types:BoolType" xmi:id="1997">
              <position xmi:type="position:Position" xmi:id="1998" source="File &quot;../data/tests\dev_transformed.cif&quot;: " startLine="446" endOffset="11629" startColumn="10" endLine="446" endColumn="20" startOffset="11619" location="C:\Users\rober\Documents\studie\afstuderen\development\simulator_via_code_generator\data\tests\dev_transformed.cif"/>
            </type>
          </event>
        </events>
      </edges>
    </locations>
    <locations xmi:type="automata:Location" xmi:id="1999" name="CH1toUR">
      <position xmi:type="position:Position" xmi:id="2000" source="File &quot;../data/tests\dev_transformed.cif&quot;: " startLine="447" endOffset="11658" startColumn="12" endLine="447" endColumn="18" startOffset="11652" location="C:\Users\rober\Documents\studie\afstuderen\development\simulator_via_code_generator\data\tests\dev_transformed.cif"/>
      <edges xmi:type="automata:Edge" xmi:id="2001" target="1579">
        <position xmi:type="position:Position" xmi:id="2002" source="File &quot;../data/tests\dev_transformed.cif&quot;: " startLine="448" endOffset="11669" startColumn="5" endLine="448" endColumn="8" startOffset="11666" location="C:\Users\rober\Documents\studie\afstuderen\development\simulator_via_code_generator\data\tests\dev_transformed.cif"/>
        <events xmi:type="automata:EdgeEvent" xmi:id="2003">
          <position xmi:type="position:Position" xmi:id="2004" source="File &quot;../data/tests\dev_transformed.cif&quot;: " startLine="448" endOffset="11681" startColumn="10" endLine="448" endColumn="20" startOffset="11671" location="C:\Users\rober\Documents\studie\afstuderen\development\simulator_via_code_generator\data\tests\dev_transformed.cif"/>
          <event xmi:type="expressions:EventExpression" xmi:id="2005" event="205">
            <position xmi:type="position:Position" xmi:id="2006" source="File &quot;../data/tests\dev_transformed.cif&quot;: " startLine="448" endOffset="11681" startColumn="10" endLine="448" endColumn="20" startOffset="11671" location="C:\Users\rober\Documents\studie\afstuderen\development\simulator_via_code_generator\data\tests\dev_transformed.cif"/>
            <type xmi:type="types:BoolType" xmi:id="2007">
              <position xmi:type="position:Position" xmi:id="2008" source="File &quot;../data/tests\dev_transformed.cif&quot;: " startLine="448" endOffset="11681" startColumn="10" endLine="448" endColumn="20" startOffset="11671" location="C:\Users\rober\Documents\studie\afstuderen\development\simulator_via_code_generator\data\tests\dev_transformed.cif"/>
            </type>
          </event>
        </events>
      </edges>
    </locations>
    <locations xmi:type="automata:Location" xmi:id="2009" name="CTC0toLR">
      <position xmi:type="position:Position" xmi:id="2010" source="File &quot;../data/tests\dev_transformed.cif&quot;: " startLine="449" endOffset="11711" startColumn="12" endLine="449" endColumn="19" startOffset="11704" location="C:\Users\rober\Documents\studie\afstuderen\development\simulator_via_code_generator\data\tests\dev_transformed.cif"/>
      <edges xmi:type="automata:Edge" xmi:id="2011" target="1647">
        <position xmi:type="position:Position" xmi:id="2012" source="File &quot;../data/tests\dev_transformed.cif&quot;: " startLine="450" endOffset="11722" startColumn="5" endLine="450" endColumn="8" startOffset="11719" location="C:\Users\rober\Documents\studie\afstuderen\development\simulator_via_code_generator\data\tests\dev_transformed.cif"/>
        <events xmi:type="automata:EdgeEvent" xmi:id="2013">
          <position xmi:type="position:Position" xmi:id="2014" source="File &quot;../data/tests\dev_transformed.cif&quot;: " startLine="450" endOffset="11735" startColumn="10" endLine="450" endColumn="21" startOffset="11724" location="C:\Users\rober\Documents\studie\afstuderen\development\simulator_via_code_generator\data\tests\dev_transformed.cif"/>
          <event xmi:type="expressions:EventExpression" xmi:id="2015" event="207">
            <position xmi:type="position:Position" xmi:id="2016" source="File &quot;../data/tests\dev_transformed.cif&quot;: " startLine="450" endOffset="11735" startColumn="10" endLine="450" endColumn="21" startOffset="11724" location="C:\Users\rober\Documents\studie\afstuderen\development\simulator_via_code_generator\data\tests\dev_transformed.cif"/>
            <type xmi:type="types:BoolType" xmi:id="2017">
              <position xmi:type="position:Position" xmi:id="2018" source="File &quot;../data/tests\dev_transformed.cif&quot;: " startLine="450" endOffset="11735" startColumn="10" endLine="450" endColumn="21" startOffset="11724" location="C:\Users\rober\Documents\studie\afstuderen\development\simulator_via_code_generator\data\tests\dev_transformed.cif"/>
            </type>
          </event>
        </events>
      </edges>
    </locations>
    <locations xmi:type="automata:Location" xmi:id="2019" name="CTC1toUR">
      <position xmi:type="position:Position" xmi:id="2020" source="File &quot;../data/tests\dev_transformed.cif&quot;: " startLine="451" endOffset="11765" startColumn="12" endLine="451" endColumn="19" startOffset="11758" location="C:\Users\rober\Documents\studie\afstuderen\development\simulator_via_code_generator\data\tests\dev_transformed.cif"/>
      <edges xmi:type="automata:Edge" xmi:id="2021" target="1579">
        <position xmi:type="position:Position" xmi:id="2022" source="File &quot;../data/tests\dev_transformed.cif&quot;: " startLine="452" endOffset="11776" startColumn="5" endLine="452" endColumn="8" startOffset="11773" location="C:\Users\rober\Documents\studie\afstuderen\development\simulator_via_code_generator\data\tests\dev_transformed.cif"/>
        <events xmi:type="automata:EdgeEvent" xmi:id="2023">
          <position xmi:type="position:Position" xmi:id="2024" source="File &quot;../data/tests\dev_transformed.cif&quot;: " startLine="452" endOffset="11789" startColumn="10" endLine="452" endColumn="21" startOffset="11778" location="C:\Users\rober\Documents\studie\afstuderen\development\simulator_via_code_generator\data\tests\dev_transformed.cif"/>
          <event xmi:type="expressions:EventExpression" xmi:id="2025" event="209">
            <position xmi:type="position:Position" xmi:id="2026" source="File &quot;../data/tests\dev_transformed.cif&quot;: " startLine="452" endOffset="11789" startColumn="10" endLine="452" endColumn="21" startOffset="11778" location="C:\Users\rober\Documents\studie\afstuderen\development\simulator_via_code_generator\data\tests\dev_transformed.cif"/>
            <type xmi:type="types:BoolType" xmi:id="2027">
              <position xmi:type="position:Position" xmi:id="2028" source="File &quot;../data/tests\dev_transformed.cif&quot;: " startLine="452" endOffset="11789" startColumn="10" endLine="452" endColumn="21" startOffset="11778" location="C:\Users\rober\Documents\studie\afstuderen\development\simulator_via_code_generator\data\tests\dev_transformed.cif"/>
            </type>
          </event>
        </events>
      </edges>
    </locations>
  </components>
  <components xmi:type="automata:Automaton" xmi:id="2029" name="WaferPlant_1" kind="Plant">
    <position xmi:type="position:Position" xmi:id="2030" source="File &quot;../data/tests\dev_transformed.cif&quot;: " startLine="454" endOffset="11833" startColumn="17" endLine="454" endColumn="28" startOffset="11822" location="C:\Users\rober\Documents\studie\afstuderen\development\simulator_via_code_generator\data\tests\dev_transformed.cif"/>
    <locations xmi:type="automata:Location" xmi:id="2031" name="TR">
      <position xmi:type="position:Position" xmi:id="2032" source="File &quot;../data/tests\dev_transformed.cif&quot;: " startLine="455" endOffset="11849" startColumn="12" endLine="455" endColumn="13" startOffset="11848" location="C:\Users\rober\Documents\studie\afstuderen\development\simulator_via_code_generator\data\tests\dev_transformed.cif"/>
      <edges xmi:type="automata:Edge" xmi:id="2033" target="2289">
        <position xmi:type="position:Position" xmi:id="2034" source="File &quot;../data/tests\dev_transformed.cif&quot;: " startLine="457" endOffset="11873" startColumn="5" endLine="457" endColumn="8" startOffset="11870" location="C:\Users\rober\Documents\studie\afstuderen\development\simulator_via_code_generator\data\tests\dev_transformed.cif"/>
        <events xmi:type="automata:EdgeEvent" xmi:id="2035">
          <position xmi:type="position:Position" xmi:id="2036" source="File &quot;../data/tests\dev_transformed.cif&quot;: " startLine="457" endOffset="11885" startColumn="10" endLine="457" endColumn="20" startOffset="11875" location="C:\Users\rober\Documents\studie\afstuderen\development\simulator_via_code_generator\data\tests\dev_transformed.cif"/>
          <event xmi:type="expressions:EventExpression" xmi:id="2037" event="213">
            <position xmi:type="position:Position" xmi:id="2038" source="File &quot;../data/tests\dev_transformed.cif&quot;: " startLine="457" endOffset="11885" startColumn="10" endLine="457" endColumn="20" startOffset="11875" location="C:\Users\rober\Documents\studie\afstuderen\development\simulator_via_code_generator\data\tests\dev_transformed.cif"/>
            <type xmi:type="types:BoolType" xmi:id="2039">
              <position xmi:type="position:Position" xmi:id="2040" source="File &quot;../data/tests\dev_transformed.cif&quot;: " startLine="457" endOffset="11885" startColumn="10" endLine="457" endColumn="20" startOffset="11875" location="C:\Users\rober\Documents\studie\afstuderen\development\simulator_via_code_generator\data\tests\dev_transformed.cif"/>
            </type>
          </event>
        </events>
      </edges>
      <markeds xmi:type="expressions:BoolExpression" xmi:id="2041" value="true">
        <position xmi:type="position:Position" xmi:id="2042" source="File &quot;../data/tests\dev_transformed.cif&quot;: " startLine="456" endOffset="11862" startColumn="5" endLine="456" endColumn="10" startOffset="11857" location="C:\Users\rober\Documents\studie\afstuderen\development\simulator_via_code_generator\data\tests\dev_transformed.cif"/>
        <type xmi:type="types:BoolType" xmi:id="2043">
          <position xmi:type="position:Position" xmi:id="2044" source="File &quot;../data/tests\dev_transformed.cif&quot;: " startLine="456" endOffset="11862" startColumn="5" endLine="456" endColumn="10" startOffset="11857" location="C:\Users\rober\Documents\studie\afstuderen\development\simulator_via_code_generator\data\tests\dev_transformed.cif"/>
        </type>
      </markeds>
    </locations>
    <locations xmi:type="automata:Location" xmi:id="2045" name="SUB">
      <position xmi:type="position:Position" xmi:id="2046" source="File &quot;../data/tests\dev_transformed.cif&quot;: " startLine="458" endOffset="11915" startColumn="12" endLine="458" endColumn="14" startOffset="11913" location="C:\Users\rober\Documents\studie\afstuderen\development\simulator_via_code_generator\data\tests\dev_transformed.cif"/>
      <edges xmi:type="automata:Edge" xmi:id="2047" target="2299">
        <position xmi:type="position:Position" xmi:id="2048" source="File &quot;../data/tests\dev_transformed.cif&quot;: " startLine="460" endOffset="11939" startColumn="5" endLine="460" endColumn="8" startOffset="11936" location="C:\Users\rober\Documents\studie\afstuderen\development\simulator_via_code_generator\data\tests\dev_transformed.cif"/>
        <events xmi:type="automata:EdgeEvent" xmi:id="2049">
          <position xmi:type="position:Position" xmi:id="2050" source="File &quot;../data/tests\dev_transformed.cif&quot;: " startLine="460" endOffset="11951" startColumn="10" endLine="460" endColumn="20" startOffset="11941" location="C:\Users\rober\Documents\studie\afstuderen\development\simulator_via_code_generator\data\tests\dev_transformed.cif"/>
          <event xmi:type="expressions:EventExpression" xmi:id="2051" event="215">
            <position xmi:type="position:Position" xmi:id="2052" source="File &quot;../data/tests\dev_transformed.cif&quot;: " startLine="460" endOffset="11951" startColumn="10" endLine="460" endColumn="20" startOffset="11941" location="C:\Users\rober\Documents\studie\afstuderen\development\simulator_via_code_generator\data\tests\dev_transformed.cif"/>
            <type xmi:type="types:BoolType" xmi:id="2053">
              <position xmi:type="position:Position" xmi:id="2054" source="File &quot;../data/tests\dev_transformed.cif&quot;: " startLine="460" endOffset="11951" startColumn="10" endLine="460" endColumn="20" startOffset="11941" location="C:\Users\rober\Documents\studie\afstuderen\development\simulator_via_code_generator\data\tests\dev_transformed.cif"/>
            </type>
          </event>
        </events>
      </edges>
      <markeds xmi:type="expressions:BoolExpression" xmi:id="2055" value="true">
        <position xmi:type="position:Position" xmi:id="2056" source="File &quot;../data/tests\dev_transformed.cif&quot;: " startLine="459" endOffset="11928" startColumn="5" endLine="459" endColumn="10" startOffset="11923" location="C:\Users\rober\Documents\studie\afstuderen\development\simulator_via_code_generator\data\tests\dev_transformed.cif"/>
        <type xmi:type="types:BoolType" xmi:id="2057">
          <position xmi:type="position:Position" xmi:id="2058" source="File &quot;../data/tests\dev_transformed.cif&quot;: " startLine="459" endOffset="11928" startColumn="5" endLine="459" endColumn="10" startOffset="11923" location="C:\Users\rober\Documents\studie\afstuderen\development\simulator_via_code_generator\data\tests\dev_transformed.cif"/>
        </type>
      </markeds>
    </locations>
    <locations xmi:type="automata:Location" xmi:id="2059" name="UR">
      <position xmi:type="position:Position" xmi:id="2060" source="File &quot;../data/tests\dev_transformed.cif&quot;: " startLine="461" endOffset="11980" startColumn="12" endLine="461" endColumn="13" startOffset="11979" location="C:\Users\rober\Documents\studie\afstuderen\development\simulator_via_code_generator\data\tests\dev_transformed.cif"/>
      <edges xmi:type="automata:Edge" xmi:id="2061" target="2309">
        <position xmi:type="position:Position" xmi:id="2062" source="File &quot;../data/tests\dev_transformed.cif&quot;: " startLine="463" endOffset="12004" startColumn="5" endLine="463" endColumn="8" startOffset="12001" location="C:\Users\rober\Documents\studie\afstuderen\development\simulator_via_code_generator\data\tests\dev_transformed.cif"/>
        <events xmi:type="automata:EdgeEvent" xmi:id="2063">
          <position xmi:type="position:Position" xmi:id="2064" source="File &quot;../data/tests\dev_transformed.cif&quot;: " startLine="463" endOffset="12016" startColumn="10" endLine="463" endColumn="20" startOffset="12006" location="C:\Users\rober\Documents\studie\afstuderen\development\simulator_via_code_generator\data\tests\dev_transformed.cif"/>
          <event xmi:type="expressions:EventExpression" xmi:id="2065" event="217">
            <position xmi:type="position:Position" xmi:id="2066" source="File &quot;../data/tests\dev_transformed.cif&quot;: " startLine="463" endOffset="12016" startColumn="10" endLine="463" endColumn="20" startOffset="12006" location="C:\Users\rober\Documents\studie\afstuderen\development\simulator_via_code_generator\data\tests\dev_transformed.cif"/>
            <type xmi:type="types:BoolType" xmi:id="2067">
              <position xmi:type="position:Position" xmi:id="2068" source="File &quot;../data/tests\dev_transformed.cif&quot;: " startLine="463" endOffset="12016" startColumn="10" endLine="463" endColumn="20" startOffset="12006" location="C:\Users\rober\Documents\studie\afstuderen\development\simulator_via_code_generator\data\tests\dev_transformed.cif"/>
            </type>
          </event>
        </events>
      </edges>
      <edges xmi:type="automata:Edge" xmi:id="2069" target="2319">
        <position xmi:type="position:Position" xmi:id="2070" source="File &quot;../data/tests\dev_transformed.cif&quot;: " startLine="464" endOffset="12040" startColumn="5" endLine="464" endColumn="8" startOffset="12037" location="C:\Users\rober\Documents\studie\afstuderen\development\simulator_via_code_generator\data\tests\dev_transformed.cif"/>
        <events xmi:type="automata:EdgeEvent" xmi:id="2071">
          <position xmi:type="position:Position" xmi:id="2072" source="File &quot;../data/tests\dev_transformed.cif&quot;: " startLine="464" endOffset="12051" startColumn="10" endLine="464" endColumn="19" startOffset="12042" location="C:\Users\rober\Documents\studie\afstuderen\development\simulator_via_code_generator\data\tests\dev_transformed.cif"/>
          <event xmi:type="expressions:EventExpression" xmi:id="2073" event="219">
            <position xmi:type="position:Position" xmi:id="2074" source="File &quot;../data/tests\dev_transformed.cif&quot;: " startLine="464" endOffset="12051" startColumn="10" endLine="464" endColumn="19" startOffset="12042" location="C:\Users\rober\Documents\studie\afstuderen\development\simulator_via_code_generator\data\tests\dev_transformed.cif"/>
            <type xmi:type="types:BoolType" xmi:id="2075">
              <position xmi:type="position:Position" xmi:id="2076" source="File &quot;../data/tests\dev_transformed.cif&quot;: " startLine="464" endOffset="12051" startColumn="10" endLine="464" endColumn="19" startOffset="12042" location="C:\Users\rober\Documents\studie\afstuderen\development\simulator_via_code_generator\data\tests\dev_transformed.cif"/>
            </type>
          </event>
        </events>
      </edges>
      <edges xmi:type="automata:Edge" xmi:id="2077" target="2329">
        <position xmi:type="position:Position" xmi:id="2078" source="File &quot;../data/tests\dev_transformed.cif&quot;: " startLine="465" endOffset="12074" startColumn="5" endLine="465" endColumn="8" startOffset="12071" location="C:\Users\rober\Documents\studie\afstuderen\development\simulator_via_code_generator\data\tests\dev_transformed.cif"/>
        <events xmi:type="automata:EdgeEvent" xmi:id="2079">
          <position xmi:type="position:Position" xmi:id="2080" source="File &quot;../data/tests\dev_transformed.cif&quot;: " startLine="465" endOffset="12085" startColumn="10" endLine="465" endColumn="19" startOffset="12076" location="C:\Users\rober\Documents\studie\afstuderen\development\simulator_via_code_generator\data\tests\dev_transformed.cif"/>
          <event xmi:type="expressions:EventExpression" xmi:id="2081" event="221">
            <position xmi:type="position:Position" xmi:id="2082" source="File &quot;../data/tests\dev_transformed.cif&quot;: " startLine="465" endOffset="12085" startColumn="10" endLine="465" endColumn="19" startOffset="12076" location="C:\Users\rober\Documents\studie\afstuderen\development\simulator_via_code_generator\data\tests\dev_transformed.cif"/>
            <type xmi:type="types:BoolType" xmi:id="2083">
              <position xmi:type="position:Position" xmi:id="2084" source="File &quot;../data/tests\dev_transformed.cif&quot;: " startLine="465" endOffset="12085" startColumn="10" endLine="465" endColumn="19" startOffset="12076" location="C:\Users\rober\Documents\studie\afstuderen\development\simulator_via_code_generator\data\tests\dev_transformed.cif"/>
            </type>
          </event>
        </events>
      </edges>
      <edges xmi:type="automata:Edge" xmi:id="2085" target="2339">
        <position xmi:type="position:Position" xmi:id="2086" source="File &quot;../data/tests\dev_transformed.cif&quot;: " startLine="466" endOffset="12108" startColumn="5" endLine="466" endColumn="8" startOffset="12105" location="C:\Users\rober\Documents\studie\afstuderen\development\simulator_via_code_generator\data\tests\dev_transformed.cif"/>
        <events xmi:type="automata:EdgeEvent" xmi:id="2087">
          <position xmi:type="position:Position" xmi:id="2088" source="File &quot;../data/tests\dev_transformed.cif&quot;: " startLine="466" endOffset="12121" startColumn="10" endLine="466" endColumn="21" startOffset="12110" location="C:\Users\rober\Documents\studie\afstuderen\development\simulator_via_code_generator\data\tests\dev_transformed.cif"/>
          <event xmi:type="expressions:EventExpression" xmi:id="2089" event="223">
            <position xmi:type="position:Position" xmi:id="2090" source="File &quot;../data/tests\dev_transformed.cif&quot;: " startLine="466" endOffset="12121" startColumn="10" endLine="466" endColumn="21" startOffset="12110" location="C:\Users\rober\Documents\studie\afstuderen\development\simulator_via_code_generator\data\tests\dev_transformed.cif"/>
            <type xmi:type="types:BoolType" xmi:id="2091">
              <position xmi:type="position:Position" xmi:id="2092" source="File &quot;../data/tests\dev_transformed.cif&quot;: " startLine="466" endOffset="12121" startColumn="10" endLine="466" endColumn="21" startOffset="12110" location="C:\Users\rober\Documents\studie\afstuderen\development\simulator_via_code_generator\data\tests\dev_transformed.cif"/>
            </type>
          </event>
        </events>
      </edges>
      <markeds xmi:type="expressions:BoolExpression" xmi:id="2093" value="true">
        <position xmi:type="position:Position" xmi:id="2094" source="File &quot;../data/tests\dev_transformed.cif&quot;: " startLine="462" endOffset="11993" startColumn="5" endLine="462" endColumn="10" startOffset="11988" location="C:\Users\rober\Documents\studie\afstuderen\development\simulator_via_code_generator\data\tests\dev_transformed.cif"/>
        <type xmi:type="types:BoolType" xmi:id="2095">
          <position xmi:type="position:Position" xmi:id="2096" source="File &quot;../data/tests\dev_transformed.cif&quot;: " startLine="462" endOffset="11993" startColumn="5" endLine="462" endColumn="10" startOffset="11988" location="C:\Users\rober\Documents\studie\afstuderen\development\simulator_via_code_generator\data\tests\dev_transformed.cif"/>
        </type>
      </markeds>
    </locations>
    <locations xmi:type="automata:Location" xmi:id="2097" name="PA">
      <position xmi:type="position:Position" xmi:id="2098" source="File &quot;../data/tests\dev_transformed.cif&quot;: " startLine="467" endOffset="12151" startColumn="12" endLine="467" endColumn="13" startOffset="12150" location="C:\Users\rober\Documents\studie\afstuderen\development\simulator_via_code_generator\data\tests\dev_transformed.cif"/>
      <edges xmi:type="automata:Edge" xmi:id="2099" target="2349">
        <position xmi:type="position:Position" xmi:id="2100" source="File &quot;../data/tests\dev_transformed.cif&quot;: " startLine="469" endOffset="12175" startColumn="5" endLine="469" endColumn="8" startOffset="12172" location="C:\Users\rober\Documents\studie\afstuderen\development\simulator_via_code_generator\data\tests\dev_transformed.cif"/>
        <events xmi:type="automata:EdgeEvent" xmi:id="2101">
          <position xmi:type="position:Position" xmi:id="2102" source="File &quot;../data/tests\dev_transformed.cif&quot;: " startLine="469" endOffset="12186" startColumn="10" endLine="469" endColumn="19" startOffset="12177" location="C:\Users\rober\Documents\studie\afstuderen\development\simulator_via_code_generator\data\tests\dev_transformed.cif"/>
          <event xmi:type="expressions:EventExpression" xmi:id="2103" event="225">
            <position xmi:type="position:Position" xmi:id="2104" source="File &quot;../data/tests\dev_transformed.cif&quot;: " startLine="469" endOffset="12186" startColumn="10" endLine="469" endColumn="19" startOffset="12177" location="C:\Users\rober\Documents\studie\afstuderen\development\simulator_via_code_generator\data\tests\dev_transformed.cif"/>
            <type xmi:type="types:BoolType" xmi:id="2105">
              <position xmi:type="position:Position" xmi:id="2106" source="File &quot;../data/tests\dev_transformed.cif&quot;: " startLine="469" endOffset="12186" startColumn="10" endLine="469" endColumn="19" startOffset="12177" location="C:\Users\rober\Documents\studie\afstuderen\development\simulator_via_code_generator\data\tests\dev_transformed.cif"/>
            </type>
          </event>
        </events>
      </edges>
      <edges xmi:type="automata:Edge" xmi:id="2107" target="2359">
        <position xmi:type="position:Position" xmi:id="2108" source="File &quot;../data/tests\dev_transformed.cif&quot;: " startLine="470" endOffset="12209" startColumn="5" endLine="470" endColumn="8" startOffset="12206" location="C:\Users\rober\Documents\studie\afstuderen\development\simulator_via_code_generator\data\tests\dev_transformed.cif"/>
        <events xmi:type="automata:EdgeEvent" xmi:id="2109">
          <position xmi:type="position:Position" xmi:id="2110" source="File &quot;../data/tests\dev_transformed.cif&quot;: " startLine="470" endOffset="12220" startColumn="10" endLine="470" endColumn="19" startOffset="12211" location="C:\Users\rober\Documents\studie\afstuderen\development\simulator_via_code_generator\data\tests\dev_transformed.cif"/>
          <event xmi:type="expressions:EventExpression" xmi:id="2111" event="227">
            <position xmi:type="position:Position" xmi:id="2112" source="File &quot;../data/tests\dev_transformed.cif&quot;: " startLine="470" endOffset="12220" startColumn="10" endLine="470" endColumn="19" startOffset="12211" location="C:\Users\rober\Documents\studie\afstuderen\development\simulator_via_code_generator\data\tests\dev_transformed.cif"/>
            <type xmi:type="types:BoolType" xmi:id="2113">
              <position xmi:type="position:Position" xmi:id="2114" source="File &quot;../data/tests\dev_transformed.cif&quot;: " startLine="470" endOffset="12220" startColumn="10" endLine="470" endColumn="19" startOffset="12211" location="C:\Users\rober\Documents\studie\afstuderen\development\simulator_via_code_generator\data\tests\dev_transformed.cif"/>
            </type>
          </event>
        </events>
      </edges>
      <edges xmi:type="automata:Edge" xmi:id="2115" target="2279">
        <position xmi:type="position:Position" xmi:id="2116" source="File &quot;../data/tests\dev_transformed.cif&quot;: " startLine="471" endOffset="12243" startColumn="5" endLine="471" endColumn="8" startOffset="12240" location="C:\Users\rober\Documents\studie\afstuderen\development\simulator_via_code_generator\data\tests\dev_transformed.cif"/>
        <events xmi:type="automata:EdgeEvent" xmi:id="2117">
          <position xmi:type="position:Position" xmi:id="2118" source="File &quot;../data/tests\dev_transformed.cif&quot;: " startLine="471" endOffset="12256" startColumn="10" endLine="471" endColumn="21" startOffset="12245" location="C:\Users\rober\Documents\studie\afstuderen\development\simulator_via_code_generator\data\tests\dev_transformed.cif"/>
          <event xmi:type="expressions:EventExpression" xmi:id="2119" event="257">
            <position xmi:type="position:Position" xmi:id="2120" source="File &quot;../data/tests\dev_transformed.cif&quot;: " startLine="471" endOffset="12256" startColumn="10" endLine="471" endColumn="21" startOffset="12245" location="C:\Users\rober\Documents\studie\afstuderen\development\simulator_via_code_generator\data\tests\dev_transformed.cif"/>
            <type xmi:type="types:BoolType" xmi:id="2121">
              <position xmi:type="position:Position" xmi:id="2122" source="File &quot;../data/tests\dev_transformed.cif&quot;: " startLine="471" endOffset="12256" startColumn="10" endLine="471" endColumn="21" startOffset="12245" location="C:\Users\rober\Documents\studie\afstuderen\development\simulator_via_code_generator\data\tests\dev_transformed.cif"/>
            </type>
          </event>
        </events>
      </edges>
      <markeds xmi:type="expressions:BoolExpression" xmi:id="2123" value="true">
        <position xmi:type="position:Position" xmi:id="2124" source="File &quot;../data/tests\dev_transformed.cif&quot;: " startLine="468" endOffset="12164" startColumn="5" endLine="468" endColumn="10" startOffset="12159" location="C:\Users\rober\Documents\studie\afstuderen\development\simulator_via_code_generator\data\tests\dev_transformed.cif"/>
        <type xmi:type="types:BoolType" xmi:id="2125">
          <position xmi:type="position:Position" xmi:id="2126" source="File &quot;../data/tests\dev_transformed.cif&quot;: " startLine="468" endOffset="12164" startColumn="5" endLine="468" endColumn="10" startOffset="12159" location="C:\Users\rober\Documents\studie\afstuderen\development\simulator_via_code_generator\data\tests\dev_transformed.cif"/>
        </type>
      </markeds>
    </locations>
    <locations xmi:type="automata:Location" xmi:id="2127" name="LR">
      <position xmi:type="position:Position" xmi:id="2128" source="File &quot;../data/tests\dev_transformed.cif&quot;: " startLine="472" endOffset="12293" startColumn="12" endLine="472" endColumn="13" startOffset="12292" location="C:\Users\rober\Documents\studie\afstuderen\development\simulator_via_code_generator\data\tests\dev_transformed.cif"/>
      <edges xmi:type="automata:Edge" xmi:id="2129" target="2369">
        <position xmi:type="position:Position" xmi:id="2130" source="File &quot;../data/tests\dev_transformed.cif&quot;: " startLine="474" endOffset="12317" startColumn="5" endLine="474" endColumn="8" startOffset="12314" location="C:\Users\rober\Documents\studie\afstuderen\development\simulator_via_code_generator\data\tests\dev_transformed.cif"/>
        <events xmi:type="automata:EdgeEvent" xmi:id="2131">
          <position xmi:type="position:Position" xmi:id="2132" source="File &quot;../data/tests\dev_transformed.cif&quot;: " startLine="474" endOffset="12328" startColumn="10" endLine="474" endColumn="19" startOffset="12319" location="C:\Users\rober\Documents\studie\afstuderen\development\simulator_via_code_generator\data\tests\dev_transformed.cif"/>
          <event xmi:type="expressions:EventExpression" xmi:id="2133" event="229">
            <position xmi:type="position:Position" xmi:id="2134" source="File &quot;../data/tests\dev_transformed.cif&quot;: " startLine="474" endOffset="12328" startColumn="10" endLine="474" endColumn="19" startOffset="12319" location="C:\Users\rober\Documents\studie\afstuderen\development\simulator_via_code_generator\data\tests\dev_transformed.cif"/>
            <type xmi:type="types:BoolType" xmi:id="2135">
              <position xmi:type="position:Position" xmi:id="2136" source="File &quot;../data/tests\dev_transformed.cif&quot;: " startLine="474" endOffset="12328" startColumn="10" endLine="474" endColumn="19" startOffset="12319" location="C:\Users\rober\Documents\studie\afstuderen\development\simulator_via_code_generator\data\tests\dev_transformed.cif"/>
            </type>
          </event>
        </events>
      </edges>
      <edges xmi:type="automata:Edge" xmi:id="2137" target="2379">
        <position xmi:type="position:Position" xmi:id="2138" source="File &quot;../data/tests\dev_transformed.cif&quot;: " startLine="475" endOffset="12351" startColumn="5" endLine="475" endColumn="8" startOffset="12348" location="C:\Users\rober\Documents\studie\afstuderen\development\simulator_via_code_generator\data\tests\dev_transformed.cif"/>
        <events xmi:type="automata:EdgeEvent" xmi:id="2139">
          <position xmi:type="position:Position" xmi:id="2140" source="File &quot;../data/tests\dev_transformed.cif&quot;: " startLine="475" endOffset="12362" startColumn="10" endLine="475" endColumn="19" startOffset="12353" location="C:\Users\rober\Documents\studie\afstuderen\development\simulator_via_code_generator\data\tests\dev_transformed.cif"/>
          <event xmi:type="expressions:EventExpression" xmi:id="2141" event="231">
            <position xmi:type="position:Position" xmi:id="2142" source="File &quot;../data/tests\dev_transformed.cif&quot;: " startLine="475" endOffset="12362" startColumn="10" endLine="475" endColumn="19" startOffset="12353" location="C:\Users\rober\Documents\studie\afstuderen\development\simulator_via_code_generator\data\tests\dev_transformed.cif"/>
            <type xmi:type="types:BoolType" xmi:id="2143">
              <position xmi:type="position:Position" xmi:id="2144" source="File &quot;../data/tests\dev_transformed.cif&quot;: " startLine="475" endOffset="12362" startColumn="10" endLine="475" endColumn="19" startOffset="12353" location="C:\Users\rober\Documents\studie\afstuderen\development\simulator_via_code_generator\data\tests\dev_transformed.cif"/>
            </type>
          </event>
        </events>
      </edges>
      <edges xmi:type="automata:Edge" xmi:id="2145" target="2389">
        <position xmi:type="position:Position" xmi:id="2146" source="File &quot;../data/tests\dev_transformed.cif&quot;: " startLine="476" endOffset="12385" startColumn="5" endLine="476" endColumn="8" startOffset="12382" location="C:\Users\rober\Documents\studie\afstuderen\development\simulator_via_code_generator\data\tests\dev_transformed.cif"/>
        <events xmi:type="automata:EdgeEvent" xmi:id="2147">
          <position xmi:type="position:Position" xmi:id="2148" source="File &quot;../data/tests\dev_transformed.cif&quot;: " startLine="476" endOffset="12397" startColumn="10" endLine="476" endColumn="20" startOffset="12387" location="C:\Users\rober\Documents\studie\afstuderen\development\simulator_via_code_generator\data\tests\dev_transformed.cif"/>
          <event xmi:type="expressions:EventExpression" xmi:id="2149" event="233">
            <position xmi:type="position:Position" xmi:id="2150" source="File &quot;../data/tests\dev_transformed.cif&quot;: " startLine="476" endOffset="12397" startColumn="10" endLine="476" endColumn="20" startOffset="12387" location="C:\Users\rober\Documents\studie\afstuderen\development\simulator_via_code_generator\data\tests\dev_transformed.cif"/>
            <type xmi:type="types:BoolType" xmi:id="2151">
              <position xmi:type="position:Position" xmi:id="2152" source="File &quot;../data/tests\dev_transformed.cif&quot;: " startLine="476" endOffset="12397" startColumn="10" endLine="476" endColumn="20" startOffset="12387" location="C:\Users\rober\Documents\studie\afstuderen\development\simulator_via_code_generator\data\tests\dev_transformed.cif"/>
            </type>
          </event>
        </events>
      </edges>
      <edges xmi:type="automata:Edge" xmi:id="2153" target="2399">
        <position xmi:type="position:Position" xmi:id="2154" source="File &quot;../data/tests\dev_transformed.cif&quot;: " startLine="477" endOffset="12421" startColumn="5" endLine="477" endColumn="8" startOffset="12418" location="C:\Users\rober\Documents\studie\afstuderen\development\simulator_via_code_generator\data\tests\dev_transformed.cif"/>
        <events xmi:type="automata:EdgeEvent" xmi:id="2155">
          <position xmi:type="position:Position" xmi:id="2156" source="File &quot;../data/tests\dev_transformed.cif&quot;: " startLine="477" endOffset="12433" startColumn="10" endLine="477" endColumn="20" startOffset="12423" location="C:\Users\rober\Documents\studie\afstuderen\development\simulator_via_code_generator\data\tests\dev_transformed.cif"/>
          <event xmi:type="expressions:EventExpression" xmi:id="2157" event="235">
            <position xmi:type="position:Position" xmi:id="2158" source="File &quot;../data/tests\dev_transformed.cif&quot;: " startLine="477" endOffset="12433" startColumn="10" endLine="477" endColumn="20" startOffset="12423" location="C:\Users\rober\Documents\studie\afstuderen\development\simulator_via_code_generator\data\tests\dev_transformed.cif"/>
            <type xmi:type="types:BoolType" xmi:id="2159">
              <position xmi:type="position:Position" xmi:id="2160" source="File &quot;../data/tests\dev_transformed.cif&quot;: " startLine="477" endOffset="12433" startColumn="10" endLine="477" endColumn="20" startOffset="12423" location="C:\Users\rober\Documents\studie\afstuderen\development\simulator_via_code_generator\data\tests\dev_transformed.cif"/>
            </type>
          </event>
        </events>
      </edges>
      <edges xmi:type="automata:Edge" xmi:id="2161" target="2409">
        <position xmi:type="position:Position" xmi:id="2162" source="File &quot;../data/tests\dev_transformed.cif&quot;: " startLine="478" endOffset="12457" startColumn="5" endLine="478" endColumn="8" startOffset="12454" location="C:\Users\rober\Documents\studie\afstuderen\development\simulator_via_code_generator\data\tests\dev_transformed.cif"/>
        <events xmi:type="automata:EdgeEvent" xmi:id="2163">
          <position xmi:type="position:Position" xmi:id="2164" source="File &quot;../data/tests\dev_transformed.cif&quot;: " startLine="478" endOffset="12470" startColumn="10" endLine="478" endColumn="21" startOffset="12459" location="C:\Users\rober\Documents\studie\afstuderen\development\simulator_via_code_generator\data\tests\dev_transformed.cif"/>
          <event xmi:type="expressions:EventExpression" xmi:id="2165" event="237">
            <position xmi:type="position:Position" xmi:id="2166" source="File &quot;../data/tests\dev_transformed.cif&quot;: " startLine="478" endOffset="12470" startColumn="10" endLine="478" endColumn="21" startOffset="12459" location="C:\Users\rober\Documents\studie\afstuderen\development\simulator_via_code_generator\data\tests\dev_transformed.cif"/>
            <type xmi:type="types:BoolType" xmi:id="2167">
              <position xmi:type="position:Position" xmi:id="2168" source="File &quot;../data/tests\dev_transformed.cif&quot;: " startLine="478" endOffset="12470" startColumn="10" endLine="478" endColumn="21" startOffset="12459" location="C:\Users\rober\Documents\studie\afstuderen\development\simulator_via_code_generator\data\tests\dev_transformed.cif"/>
            </type>
          </event>
        </events>
      </edges>
      <markeds xmi:type="expressions:BoolExpression" xmi:id="2169" value="true">
        <position xmi:type="position:Position" xmi:id="2170" source="File &quot;../data/tests\dev_transformed.cif&quot;: " startLine="473" endOffset="12306" startColumn="5" endLine="473" endColumn="10" startOffset="12301" location="C:\Users\rober\Documents\studie\afstuderen\development\simulator_via_code_generator\data\tests\dev_transformed.cif"/>
        <type xmi:type="types:BoolType" xmi:id="2171">
          <position xmi:type="position:Position" xmi:id="2172" source="File &quot;../data/tests\dev_transformed.cif&quot;: " startLine="473" endOffset="12306" startColumn="5" endLine="473" endColumn="10" startOffset="12301" location="C:\Users\rober\Documents\studie\afstuderen\development\simulator_via_code_generator\data\tests\dev_transformed.cif"/>
        </type>
      </markeds>
    </locations>
    <locations xmi:type="automata:Location" xmi:id="2173" name="DU">
      <position xmi:type="position:Position" xmi:id="2174" source="File &quot;../data/tests\dev_transformed.cif&quot;: " startLine="479" endOffset="12500" startColumn="12" endLine="479" endColumn="13" startOffset="12499" location="C:\Users\rober\Documents\studie\afstuderen\development\simulator_via_code_generator\data\tests\dev_transformed.cif"/>
      <edges xmi:type="automata:Edge" xmi:id="2175" target="2419">
        <position xmi:type="position:Position" xmi:id="2176" source="File &quot;../data/tests\dev_transformed.cif&quot;: " startLine="481" endOffset="12524" startColumn="5" endLine="481" endColumn="8" startOffset="12521" location="C:\Users\rober\Documents\studie\afstuderen\development\simulator_via_code_generator\data\tests\dev_transformed.cif"/>
        <events xmi:type="automata:EdgeEvent" xmi:id="2177">
          <position xmi:type="position:Position" xmi:id="2178" source="File &quot;../data/tests\dev_transformed.cif&quot;: " startLine="481" endOffset="12535" startColumn="10" endLine="481" endColumn="19" startOffset="12526" location="C:\Users\rober\Documents\studie\afstuderen\development\simulator_via_code_generator\data\tests\dev_transformed.cif"/>
          <event xmi:type="expressions:EventExpression" xmi:id="2179" event="239">
            <position xmi:type="position:Position" xmi:id="2180" source="File &quot;../data/tests\dev_transformed.cif&quot;: " startLine="481" endOffset="12535" startColumn="10" endLine="481" endColumn="19" startOffset="12526" location="C:\Users\rober\Documents\studie\afstuderen\development\simulator_via_code_generator\data\tests\dev_transformed.cif"/>
            <type xmi:type="types:BoolType" xmi:id="2181">
              <position xmi:type="position:Position" xmi:id="2182" source="File &quot;../data/tests\dev_transformed.cif&quot;: " startLine="481" endOffset="12535" startColumn="10" endLine="481" endColumn="19" startOffset="12526" location="C:\Users\rober\Documents\studie\afstuderen\development\simulator_via_code_generator\data\tests\dev_transformed.cif"/>
            </type>
          </event>
        </events>
      </edges>
      <edges xmi:type="automata:Edge" xmi:id="2183" target="2429">
        <position xmi:type="position:Position" xmi:id="2184" source="File &quot;../data/tests\dev_transformed.cif&quot;: " startLine="482" endOffset="12558" startColumn="5" endLine="482" endColumn="8" startOffset="12555" location="C:\Users\rober\Documents\studie\afstuderen\development\simulator_via_code_generator\data\tests\dev_transformed.cif"/>
        <events xmi:type="automata:EdgeEvent" xmi:id="2185">
          <position xmi:type="position:Position" xmi:id="2186" source="File &quot;../data/tests\dev_transformed.cif&quot;: " startLine="482" endOffset="12569" startColumn="10" endLine="482" endColumn="19" startOffset="12560" location="C:\Users\rober\Documents\studie\afstuderen\development\simulator_via_code_generator\data\tests\dev_transformed.cif"/>
          <event xmi:type="expressions:EventExpression" xmi:id="2187" event="241">
            <position xmi:type="position:Position" xmi:id="2188" source="File &quot;../data/tests\dev_transformed.cif&quot;: " startLine="482" endOffset="12569" startColumn="10" endLine="482" endColumn="19" startOffset="12560" location="C:\Users\rober\Documents\studie\afstuderen\development\simulator_via_code_generator\data\tests\dev_transformed.cif"/>
            <type xmi:type="types:BoolType" xmi:id="2189">
              <position xmi:type="position:Position" xmi:id="2190" source="File &quot;../data/tests\dev_transformed.cif&quot;: " startLine="482" endOffset="12569" startColumn="10" endLine="482" endColumn="19" startOffset="12560" location="C:\Users\rober\Documents\studie\afstuderen\development\simulator_via_code_generator\data\tests\dev_transformed.cif"/>
            </type>
          </event>
        </events>
      </edges>
      <edges xmi:type="automata:Edge" xmi:id="2191" target="2439">
        <position xmi:type="position:Position" xmi:id="2192" source="File &quot;../data/tests\dev_transformed.cif&quot;: " startLine="483" endOffset="12592" startColumn="5" endLine="483" endColumn="8" startOffset="12589" location="C:\Users\rober\Documents\studie\afstuderen\development\simulator_via_code_generator\data\tests\dev_transformed.cif"/>
        <events xmi:type="automata:EdgeEvent" xmi:id="2193">
          <position xmi:type="position:Position" xmi:id="2194" source="File &quot;../data/tests\dev_transformed.cif&quot;: " startLine="483" endOffset="12603" startColumn="10" endLine="483" endColumn="19" startOffset="12594" location="C:\Users\rober\Documents\studie\afstuderen\development\simulator_via_code_generator\data\tests\dev_transformed.cif"/>
          <event xmi:type="expressions:EventExpression" xmi:id="2195" event="243">
            <position xmi:type="position:Position" xmi:id="2196" source="File &quot;../data/tests\dev_transformed.cif&quot;: " startLine="483" endOffset="12603" startColumn="10" endLine="483" endColumn="19" startOffset="12594" location="C:\Users\rober\Documents\studie\afstuderen\development\simulator_via_code_generator\data\tests\dev_transformed.cif"/>
            <type xmi:type="types:BoolType" xmi:id="2197">
              <position xmi:type="position:Position" xmi:id="2198" source="File &quot;../data/tests\dev_transformed.cif&quot;: " startLine="483" endOffset="12603" startColumn="10" endLine="483" endColumn="19" startOffset="12594" location="C:\Users\rober\Documents\studie\afstuderen\development\simulator_via_code_generator\data\tests\dev_transformed.cif"/>
            </type>
          </event>
        </events>
      </edges>
      <markeds xmi:type="expressions:BoolExpression" xmi:id="2199" value="true">
        <position xmi:type="position:Position" xmi:id="2200" source="File &quot;../data/tests\dev_transformed.cif&quot;: " startLine="480" endOffset="12513" startColumn="5" endLine="480" endColumn="10" startOffset="12508" location="C:\Users\rober\Documents\studie\afstuderen\development\simulator_via_code_generator\data\tests\dev_transformed.cif"/>
        <type xmi:type="types:BoolType" xmi:id="2201">
          <position xmi:type="position:Position" xmi:id="2202" source="File &quot;../data/tests\dev_transformed.cif&quot;: " startLine="480" endOffset="12513" startColumn="5" endLine="480" endColumn="10" startOffset="12508" location="C:\Users\rober\Documents\studie\afstuderen\development\simulator_via_code_generator\data\tests\dev_transformed.cif"/>
        </type>
      </markeds>
    </locations>
    <locations xmi:type="automata:Location" xmi:id="2203" name="CH0">
      <position xmi:type="position:Position" xmi:id="2204" source="File &quot;../data/tests\dev_transformed.cif&quot;: " startLine="484" endOffset="12632" startColumn="12" endLine="484" endColumn="14" startOffset="12630" location="C:\Users\rober\Documents\studie\afstuderen\development\simulator_via_code_generator\data\tests\dev_transformed.cif"/>
      <initials xmi:type="expressions:BoolExpression" xmi:id="2205" value="true">
        <position xmi:type="position:Position" xmi:id="2206" source="File &quot;../data/tests\dev_transformed.cif&quot;: " startLine="485" endOffset="12646" startColumn="5" endLine="485" endColumn="11" startOffset="12640" location="C:\Users\rober\Documents\studie\afstuderen\development\simulator_via_code_generator\data\tests\dev_transformed.cif"/>
        <type xmi:type="types:BoolType" xmi:id="2207">
          <position xmi:type="position:Position" xmi:id="2208" source="File &quot;../data/tests\dev_transformed.cif&quot;: " startLine="485" endOffset="12646" startColumn="5" endLine="485" endColumn="11" startOffset="12640" location="C:\Users\rober\Documents\studie\afstuderen\development\simulator_via_code_generator\data\tests\dev_transformed.cif"/>
        </type>
      </initials>
      <edges xmi:type="automata:Edge" xmi:id="2209" target="2449">
        <position xmi:type="position:Position" xmi:id="2210" source="File &quot;../data/tests\dev_transformed.cif&quot;: " startLine="487" endOffset="12670" startColumn="5" endLine="487" endColumn="8" startOffset="12667" location="C:\Users\rober\Documents\studie\afstuderen\development\simulator_via_code_generator\data\tests\dev_transformed.cif"/>
        <events xmi:type="automata:EdgeEvent" xmi:id="2211">
          <position xmi:type="position:Position" xmi:id="2212" source="File &quot;../data/tests\dev_transformed.cif&quot;: " startLine="487" endOffset="12682" startColumn="10" endLine="487" endColumn="20" startOffset="12672" location="C:\Users\rober\Documents\studie\afstuderen\development\simulator_via_code_generator\data\tests\dev_transformed.cif"/>
          <event xmi:type="expressions:EventExpression" xmi:id="2213" event="245">
            <position xmi:type="position:Position" xmi:id="2214" source="File &quot;../data/tests\dev_transformed.cif&quot;: " startLine="487" endOffset="12682" startColumn="10" endLine="487" endColumn="20" startOffset="12672" location="C:\Users\rober\Documents\studie\afstuderen\development\simulator_via_code_generator\data\tests\dev_transformed.cif"/>
            <type xmi:type="types:BoolType" xmi:id="2215">
              <position xmi:type="position:Position" xmi:id="2216" source="File &quot;../data/tests\dev_transformed.cif&quot;: " startLine="487" endOffset="12682" startColumn="10" endLine="487" endColumn="20" startOffset="12672" location="C:\Users\rober\Documents\studie\afstuderen\development\simulator_via_code_generator\data\tests\dev_transformed.cif"/>
            </type>
          </event>
        </events>
      </edges>
      <edges xmi:type="automata:Edge" xmi:id="2217" target="2459">
        <position xmi:type="position:Position" xmi:id="2218" source="File &quot;../data/tests\dev_transformed.cif&quot;: " startLine="488" endOffset="12706" startColumn="5" endLine="488" endColumn="8" startOffset="12703" location="C:\Users\rober\Documents\studie\afstuderen\development\simulator_via_code_generator\data\tests\dev_transformed.cif"/>
        <events xmi:type="automata:EdgeEvent" xmi:id="2219">
          <position xmi:type="position:Position" xmi:id="2220" source="File &quot;../data/tests\dev_transformed.cif&quot;: " startLine="488" endOffset="12718" startColumn="10" endLine="488" endColumn="20" startOffset="12708" location="C:\Users\rober\Documents\studie\afstuderen\development\simulator_via_code_generator\data\tests\dev_transformed.cif"/>
          <event xmi:type="expressions:EventExpression" xmi:id="2221" event="247">
            <position xmi:type="position:Position" xmi:id="2222" source="File &quot;../data/tests\dev_transformed.cif&quot;: " startLine="488" endOffset="12718" startColumn="10" endLine="488" endColumn="20" startOffset="12708" location="C:\Users\rober\Documents\studie\afstuderen\development\simulator_via_code_generator\data\tests\dev_transformed.cif"/>
            <type xmi:type="types:BoolType" xmi:id="2223">
              <position xmi:type="position:Position" xmi:id="2224" source="File &quot;../data/tests\dev_transformed.cif&quot;: " startLine="488" endOffset="12718" startColumn="10" endLine="488" endColumn="20" startOffset="12708" location="C:\Users\rober\Documents\studie\afstuderen\development\simulator_via_code_generator\data\tests\dev_transformed.cif"/>
            </type>
          </event>
        </events>
      </edges>
      <markeds xmi:type="expressions:BoolExpression" xmi:id="2225" value="true">
        <position xmi:type="position:Position" xmi:id="2226" source="File &quot;../data/tests\dev_transformed.cif&quot;: " startLine="486" endOffset="12659" startColumn="5" endLine="486" endColumn="10" startOffset="12654" location="C:\Users\rober\Documents\studie\afstuderen\development\simulator_via_code_generator\data\tests\dev_transformed.cif"/>
        <type xmi:type="types:BoolType" xmi:id="2227">
          <position xmi:type="position:Position" xmi:id="2228" source="File &quot;../data/tests\dev_transformed.cif&quot;: " startLine="486" endOffset="12659" startColumn="5" endLine="486" endColumn="10" startOffset="12654" location="C:\Users\rober\Documents\studie\afstuderen\development\simulator_via_code_generator\data\tests\dev_transformed.cif"/>
        </type>
      </markeds>
    </locations>
    <locations xmi:type="automata:Location" xmi:id="2229" name="CH1">
      <position xmi:type="position:Position" xmi:id="2230" source="File &quot;../data/tests\dev_transformed.cif&quot;: " startLine="489" endOffset="12748" startColumn="12" endLine="489" endColumn="14" startOffset="12746" location="C:\Users\rober\Documents\studie\afstuderen\development\simulator_via_code_generator\data\tests\dev_transformed.cif"/>
      <edges xmi:type="automata:Edge" xmi:id="2231" target="2469">
        <position xmi:type="position:Position" xmi:id="2232" source="File &quot;../data/tests\dev_transformed.cif&quot;: " startLine="491" endOffset="12772" startColumn="5" endLine="491" endColumn="8" startOffset="12769" location="C:\Users\rober\Documents\studie\afstuderen\development\simulator_via_code_generator\data\tests\dev_transformed.cif"/>
        <events xmi:type="automata:EdgeEvent" xmi:id="2233">
          <position xmi:type="position:Position" xmi:id="2234" source="File &quot;../data/tests\dev_transformed.cif&quot;: " startLine="491" endOffset="12784" startColumn="10" endLine="491" endColumn="20" startOffset="12774" location="C:\Users\rober\Documents\studie\afstuderen\development\simulator_via_code_generator\data\tests\dev_transformed.cif"/>
          <event xmi:type="expressions:EventExpression" xmi:id="2235" event="249">
            <position xmi:type="position:Position" xmi:id="2236" source="File &quot;../data/tests\dev_transformed.cif&quot;: " startLine="491" endOffset="12784" startColumn="10" endLine="491" endColumn="20" startOffset="12774" location="C:\Users\rober\Documents\studie\afstuderen\development\simulator_via_code_generator\data\tests\dev_transformed.cif"/>
            <type xmi:type="types:BoolType" xmi:id="2237">
              <position xmi:type="position:Position" xmi:id="2238" source="File &quot;../data/tests\dev_transformed.cif&quot;: " startLine="491" endOffset="12784" startColumn="10" endLine="491" endColumn="20" startOffset="12774" location="C:\Users\rober\Documents\studie\afstuderen\development\simulator_via_code_generator\data\tests\dev_transformed.cif"/>
            </type>
          </event>
        </events>
      </edges>
      <edges xmi:type="automata:Edge" xmi:id="2239" target="2479">
        <position xmi:type="position:Position" xmi:id="2240" source="File &quot;../data/tests\dev_transformed.cif&quot;: " startLine="492" endOffset="12808" startColumn="5" endLine="492" endColumn="8" startOffset="12805" location="C:\Users\rober\Documents\studie\afstuderen\development\simulator_via_code_generator\data\tests\dev_transformed.cif"/>
        <events xmi:type="automata:EdgeEvent" xmi:id="2241">
          <position xmi:type="position:Position" xmi:id="2242" source="File &quot;../data/tests\dev_transformed.cif&quot;: " startLine="492" endOffset="12820" startColumn="10" endLine="492" endColumn="20" startOffset="12810" location="C:\Users\rober\Documents\studie\afstuderen\development\simulator_via_code_generator\data\tests\dev_transformed.cif"/>
          <event xmi:type="expressions:EventExpression" xmi:id="2243" event="251">
            <position xmi:type="position:Position" xmi:id="2244" source="File &quot;../data/tests\dev_transformed.cif&quot;: " startLine="492" endOffset="12820" startColumn="10" endLine="492" endColumn="20" startOffset="12810" location="C:\Users\rober\Documents\studie\afstuderen\development\simulator_via_code_generator\data\tests\dev_transformed.cif"/>
            <type xmi:type="types:BoolType" xmi:id="2245">
              <position xmi:type="position:Position" xmi:id="2246" source="File &quot;../data/tests\dev_transformed.cif&quot;: " startLine="492" endOffset="12820" startColumn="10" endLine="492" endColumn="20" startOffset="12810" location="C:\Users\rober\Documents\studie\afstuderen\development\simulator_via_code_generator\data\tests\dev_transformed.cif"/>
            </type>
          </event>
        </events>
      </edges>
      <markeds xmi:type="expressions:BoolExpression" xmi:id="2247" value="true">
        <position xmi:type="position:Position" xmi:id="2248" source="File &quot;../data/tests\dev_transformed.cif&quot;: " startLine="490" endOffset="12761" startColumn="5" endLine="490" endColumn="10" startOffset="12756" location="C:\Users\rober\Documents\studie\afstuderen\development\simulator_via_code_generator\data\tests\dev_transformed.cif"/>
        <type xmi:type="types:BoolType" xmi:id="2249">
          <position xmi:type="position:Position" xmi:id="2250" source="File &quot;../data/tests\dev_transformed.cif&quot;: " startLine="490" endOffset="12761" startColumn="5" endLine="490" endColumn="10" startOffset="12756" location="C:\Users\rober\Documents\studie\afstuderen\development\simulator_via_code_generator\data\tests\dev_transformed.cif"/>
        </type>
      </markeds>
    </locations>
    <locations xmi:type="automata:Location" xmi:id="2251" name="CTC0">
      <position xmi:type="position:Position" xmi:id="2252" source="File &quot;../data/tests\dev_transformed.cif&quot;: " startLine="493" endOffset="12851" startColumn="12" endLine="493" endColumn="15" startOffset="12848" location="C:\Users\rober\Documents\studie\afstuderen\development\simulator_via_code_generator\data\tests\dev_transformed.cif"/>
      <edges xmi:type="automata:Edge" xmi:id="2253" target="2489">
        <position xmi:type="position:Position" xmi:id="2254" source="File &quot;../data/tests\dev_transformed.cif&quot;: " startLine="495" endOffset="12875" startColumn="5" endLine="495" endColumn="8" startOffset="12872" location="C:\Users\rober\Documents\studie\afstuderen\development\simulator_via_code_generator\data\tests\dev_transformed.cif"/>
        <events xmi:type="automata:EdgeEvent" xmi:id="2255">
          <position xmi:type="position:Position" xmi:id="2256" source="File &quot;../data/tests\dev_transformed.cif&quot;: " startLine="495" endOffset="12888" startColumn="10" endLine="495" endColumn="21" startOffset="12877" location="C:\Users\rober\Documents\studie\afstuderen\development\simulator_via_code_generator\data\tests\dev_transformed.cif"/>
          <event xmi:type="expressions:EventExpression" xmi:id="2257" event="253">
            <position xmi:type="position:Position" xmi:id="2258" source="File &quot;../data/tests\dev_transformed.cif&quot;: " startLine="495" endOffset="12888" startColumn="10" endLine="495" endColumn="21" startOffset="12877" location="C:\Users\rober\Documents\studie\afstuderen\development\simulator_via_code_generator\data\tests\dev_transformed.cif"/>
            <type xmi:type="types:BoolType" xmi:id="2259">
              <position xmi:type="position:Position" xmi:id="2260" source="File &quot;../data/tests\dev_transformed.cif&quot;: " startLine="495" endOffset="12888" startColumn="10" endLine="495" endColumn="21" startOffset="12877" location="C:\Users\rober\Documents\studie\afstuderen\development\simulator_via_code_generator\data\tests\dev_transformed.cif"/>
            </type>
          </event>
        </events>
      </edges>
      <markeds xmi:type="expressions:BoolExpression" xmi:id="2261" value="true">
        <position xmi:type="position:Position" xmi:id="2262" source="File &quot;../data/tests\dev_transformed.cif&quot;: " startLine="494" endOffset="12864" startColumn="5" endLine="494" endColumn="10" startOffset="12859" location="C:\Users\rober\Documents\studie\afstuderen\development\simulator_via_code_generator\data\tests\dev_transformed.cif"/>
        <type xmi:type="types:BoolType" xmi:id="2263">
          <position xmi:type="position:Position" xmi:id="2264" source="File &quot;../data/tests\dev_transformed.cif&quot;: " startLine="494" endOffset="12864" startColumn="5" endLine="494" endColumn="10" startOffset="12859" location="C:\Users\rober\Documents\studie\afstuderen\development\simulator_via_code_generator\data\tests\dev_transformed.cif"/>
        </type>
      </markeds>
    </locations>
    <locations xmi:type="automata:Location" xmi:id="2265" name="CTC1">
      <position xmi:type="position:Position" xmi:id="2266" source="File &quot;../data/tests\dev_transformed.cif&quot;: " startLine="496" endOffset="12920" startColumn="12" endLine="496" endColumn="15" startOffset="12917" location="C:\Users\rober\Documents\studie\afstuderen\development\simulator_via_code_generator\data\tests\dev_transformed.cif"/>
      <edges xmi:type="automata:Edge" xmi:id="2267" target="2499">
        <position xmi:type="position:Position" xmi:id="2268" source="File &quot;../data/tests\dev_transformed.cif&quot;: " startLine="498" endOffset="12944" startColumn="5" endLine="498" endColumn="8" startOffset="12941" location="C:\Users\rober\Documents\studie\afstuderen\development\simulator_via_code_generator\data\tests\dev_transformed.cif"/>
        <events xmi:type="automata:EdgeEvent" xmi:id="2269">
          <position xmi:type="position:Position" xmi:id="2270" source="File &quot;../data/tests\dev_transformed.cif&quot;: " startLine="498" endOffset="12957" startColumn="10" endLine="498" endColumn="21" startOffset="12946" location="C:\Users\rober\Documents\studie\afstuderen\development\simulator_via_code_generator\data\tests\dev_transformed.cif"/>
          <event xmi:type="expressions:EventExpression" xmi:id="2271" event="255">
            <position xmi:type="position:Position" xmi:id="2272" source="File &quot;../data/tests\dev_transformed.cif&quot;: " startLine="498" endOffset="12957" startColumn="10" endLine="498" endColumn="21" startOffset="12946" location="C:\Users\rober\Documents\studie\afstuderen\development\simulator_via_code_generator\data\tests\dev_transformed.cif"/>
            <type xmi:type="types:BoolType" xmi:id="2273">
              <position xmi:type="position:Position" xmi:id="2274" source="File &quot;../data/tests\dev_transformed.cif&quot;: " startLine="498" endOffset="12957" startColumn="10" endLine="498" endColumn="21" startOffset="12946" location="C:\Users\rober\Documents\studie\afstuderen\development\simulator_via_code_generator\data\tests\dev_transformed.cif"/>
            </type>
          </event>
        </events>
      </edges>
      <markeds xmi:type="expressions:BoolExpression" xmi:id="2275" value="true">
        <position xmi:type="position:Position" xmi:id="2276" source="File &quot;../data/tests\dev_transformed.cif&quot;: " startLine="497" endOffset="12933" startColumn="5" endLine="497" endColumn="10" startOffset="12928" location="C:\Users\rober\Documents\studie\afstuderen\development\simulator_via_code_generator\data\tests\dev_transformed.cif"/>
        <type xmi:type="types:BoolType" xmi:id="2277">
          <position xmi:type="position:Position" xmi:id="2278" source="File &quot;../data/tests\dev_transformed.cif&quot;: " startLine="497" endOffset="12933" startColumn="5" endLine="497" endColumn="10" startOffset="12928" location="C:\Users\rober\Documents\studie\afstuderen\development\simulator_via_code_generator\data\tests\dev_transformed.cif"/>
        </type>
      </markeds>
    </locations>
    <locations xmi:type="automata:Location" xmi:id="2279" name="PA_AlignRunning">
      <position xmi:type="position:Position" xmi:id="2280" source="File &quot;../data/tests\dev_transformed.cif&quot;: " startLine="499" endOffset="13000" startColumn="12" endLine="499" endColumn="26" startOffset="12986" location="C:\Users\rober\Documents\studie\afstuderen\development\simulator_via_code_generator\data\tests\dev_transformed.cif"/>
      <edges xmi:type="automata:Edge" xmi:id="2281" target="2097">
        <position xmi:type="position:Position" xmi:id="2282" source="File &quot;../data/tests\dev_transformed.cif&quot;: " startLine="500" endOffset="13011" startColumn="5" endLine="500" endColumn="8" startOffset="13008" location="C:\Users\rober\Documents\studie\afstuderen\development\simulator_via_code_generator\data\tests\dev_transformed.cif"/>
        <events xmi:type="automata:EdgeEvent" xmi:id="2283">
          <position xmi:type="position:Position" xmi:id="2284" source="File &quot;../data/tests\dev_transformed.cif&quot;: " startLine="500" endOffset="13024" startColumn="10" endLine="500" endColumn="21" startOffset="13013" location="C:\Users\rober\Documents\studie\afstuderen\development\simulator_via_code_generator\data\tests\dev_transformed.cif"/>
          <event xmi:type="expressions:EventExpression" xmi:id="2285" event="303">
            <position xmi:type="position:Position" xmi:id="2286" source="File &quot;../data/tests\dev_transformed.cif&quot;: " startLine="500" endOffset="13024" startColumn="10" endLine="500" endColumn="21" startOffset="13013" location="C:\Users\rober\Documents\studie\afstuderen\development\simulator_via_code_generator\data\tests\dev_transformed.cif"/>
            <type xmi:type="types:BoolType" xmi:id="2287">
              <position xmi:type="position:Position" xmi:id="2288" source="File &quot;../data/tests\dev_transformed.cif&quot;: " startLine="500" endOffset="13024" startColumn="10" endLine="500" endColumn="21" startOffset="13013" location="C:\Users\rober\Documents\studie\afstuderen\development\simulator_via_code_generator\data\tests\dev_transformed.cif"/>
            </type>
          </event>
        </events>
      </edges>
    </locations>
    <locations xmi:type="automata:Location" xmi:id="2289" name="TRtoSUB">
      <position xmi:type="position:Position" xmi:id="2290" source="File &quot;../data/tests\dev_transformed.cif&quot;: " startLine="501" endOffset="13053" startColumn="12" endLine="501" endColumn="18" startOffset="13047" location="C:\Users\rober\Documents\studie\afstuderen\development\simulator_via_code_generator\data\tests\dev_transformed.cif"/>
      <edges xmi:type="automata:Edge" xmi:id="2291" target="2045">
        <position xmi:type="position:Position" xmi:id="2292" source="File &quot;../data/tests\dev_transformed.cif&quot;: " startLine="502" endOffset="13064" startColumn="5" endLine="502" endColumn="8" startOffset="13061" location="C:\Users\rober\Documents\studie\afstuderen\development\simulator_via_code_generator\data\tests\dev_transformed.cif"/>
        <events xmi:type="automata:EdgeEvent" xmi:id="2293">
          <position xmi:type="position:Position" xmi:id="2294" source="File &quot;../data/tests\dev_transformed.cif&quot;: " startLine="502" endOffset="13076" startColumn="10" endLine="502" endColumn="20" startOffset="13066" location="C:\Users\rober\Documents\studie\afstuderen\development\simulator_via_code_generator\data\tests\dev_transformed.cif"/>
          <event xmi:type="expressions:EventExpression" xmi:id="2295" event="259">
            <position xmi:type="position:Position" xmi:id="2296" source="File &quot;../data/tests\dev_transformed.cif&quot;: " startLine="502" endOffset="13076" startColumn="10" endLine="502" endColumn="20" startOffset="13066" location="C:\Users\rober\Documents\studie\afstuderen\development\simulator_via_code_generator\data\tests\dev_transformed.cif"/>
            <type xmi:type="types:BoolType" xmi:id="2297">
              <position xmi:type="position:Position" xmi:id="2298" source="File &quot;../data/tests\dev_transformed.cif&quot;: " startLine="502" endOffset="13076" startColumn="10" endLine="502" endColumn="20" startOffset="13066" location="C:\Users\rober\Documents\studie\afstuderen\development\simulator_via_code_generator\data\tests\dev_transformed.cif"/>
            </type>
          </event>
        </events>
      </edges>
    </locations>
    <locations xmi:type="automata:Location" xmi:id="2299" name="SUBtoUR">
      <position xmi:type="position:Position" xmi:id="2300" source="File &quot;../data/tests\dev_transformed.cif&quot;: " startLine="503" endOffset="13106" startColumn="12" endLine="503" endColumn="18" startOffset="13100" location="C:\Users\rober\Documents\studie\afstuderen\development\simulator_via_code_generator\data\tests\dev_transformed.cif"/>
      <edges xmi:type="automata:Edge" xmi:id="2301" target="2059">
        <position xmi:type="position:Position" xmi:id="2302" source="File &quot;../data/tests\dev_transformed.cif&quot;: " startLine="504" endOffset="13117" startColumn="5" endLine="504" endColumn="8" startOffset="13114" location="C:\Users\rober\Documents\studie\afstuderen\development\simulator_via_code_generator\data\tests\dev_transformed.cif"/>
        <events xmi:type="automata:EdgeEvent" xmi:id="2303">
          <position xmi:type="position:Position" xmi:id="2304" source="File &quot;../data/tests\dev_transformed.cif&quot;: " startLine="504" endOffset="13129" startColumn="10" endLine="504" endColumn="20" startOffset="13119" location="C:\Users\rober\Documents\studie\afstuderen\development\simulator_via_code_generator\data\tests\dev_transformed.cif"/>
          <event xmi:type="expressions:EventExpression" xmi:id="2305" event="261">
            <position xmi:type="position:Position" xmi:id="2306" source="File &quot;../data/tests\dev_transformed.cif&quot;: " startLine="504" endOffset="13129" startColumn="10" endLine="504" endColumn="20" startOffset="13119" location="C:\Users\rober\Documents\studie\afstuderen\development\simulator_via_code_generator\data\tests\dev_transformed.cif"/>
            <type xmi:type="types:BoolType" xmi:id="2307">
              <position xmi:type="position:Position" xmi:id="2308" source="File &quot;../data/tests\dev_transformed.cif&quot;: " startLine="504" endOffset="13129" startColumn="10" endLine="504" endColumn="20" startOffset="13119" location="C:\Users\rober\Documents\studie\afstuderen\development\simulator_via_code_generator\data\tests\dev_transformed.cif"/>
            </type>
          </event>
        </events>
      </edges>
    </locations>
    <locations xmi:type="automata:Location" xmi:id="2309" name="URtoSUB">
      <position xmi:type="position:Position" xmi:id="2310" source="File &quot;../data/tests\dev_transformed.cif&quot;: " startLine="505" endOffset="13158" startColumn="12" endLine="505" endColumn="18" startOffset="13152" location="C:\Users\rober\Documents\studie\afstuderen\development\simulator_via_code_generator\data\tests\dev_transformed.cif"/>
      <edges xmi:type="automata:Edge" xmi:id="2311" target="2045">
        <position xmi:type="position:Position" xmi:id="2312" source="File &quot;../data/tests\dev_transformed.cif&quot;: " startLine="506" endOffset="13169" startColumn="5" endLine="506" endColumn="8" startOffset="13166" location="C:\Users\rober\Documents\studie\afstuderen\development\simulator_via_code_generator\data\tests\dev_transformed.cif"/>
        <events xmi:type="automata:EdgeEvent" xmi:id="2313">
          <position xmi:type="position:Position" xmi:id="2314" source="File &quot;../data/tests\dev_transformed.cif&quot;: " startLine="506" endOffset="13181" startColumn="10" endLine="506" endColumn="20" startOffset="13171" location="C:\Users\rober\Documents\studie\afstuderen\development\simulator_via_code_generator\data\tests\dev_transformed.cif"/>
          <event xmi:type="expressions:EventExpression" xmi:id="2315" event="263">
            <position xmi:type="position:Position" xmi:id="2316" source="File &quot;../data/tests\dev_transformed.cif&quot;: " startLine="506" endOffset="13181" startColumn="10" endLine="506" endColumn="20" startOffset="13171" location="C:\Users\rober\Documents\studie\afstuderen\development\simulator_via_code_generator\data\tests\dev_transformed.cif"/>
            <type xmi:type="types:BoolType" xmi:id="2317">
              <position xmi:type="position:Position" xmi:id="2318" source="File &quot;../data/tests\dev_transformed.cif&quot;: " startLine="506" endOffset="13181" startColumn="10" endLine="506" endColumn="20" startOffset="13171" location="C:\Users\rober\Documents\studie\afstuderen\development\simulator_via_code_generator\data\tests\dev_transformed.cif"/>
            </type>
          </event>
        </events>
      </edges>
    </locations>
    <locations xmi:type="automata:Location" xmi:id="2319" name="URtoDU">
      <position xmi:type="position:Position" xmi:id="2320" source="File &quot;../data/tests\dev_transformed.cif&quot;: " startLine="507" endOffset="13210" startColumn="12" endLine="507" endColumn="17" startOffset="13205" location="C:\Users\rober\Documents\studie\afstuderen\development\simulator_via_code_generator\data\tests\dev_transformed.cif"/>
      <edges xmi:type="automata:Edge" xmi:id="2321" target="2173">
        <position xmi:type="position:Position" xmi:id="2322" source="File &quot;../data/tests\dev_transformed.cif&quot;: " startLine="508" endOffset="13221" startColumn="5" endLine="508" endColumn="8" startOffset="13218" location="C:\Users\rober\Documents\studie\afstuderen\development\simulator_via_code_generator\data\tests\dev_transformed.cif"/>
        <events xmi:type="automata:EdgeEvent" xmi:id="2323">
          <position xmi:type="position:Position" xmi:id="2324" source="File &quot;../data/tests\dev_transformed.cif&quot;: " startLine="508" endOffset="13232" startColumn="10" endLine="508" endColumn="19" startOffset="13223" location="C:\Users\rober\Documents\studie\afstuderen\development\simulator_via_code_generator\data\tests\dev_transformed.cif"/>
          <event xmi:type="expressions:EventExpression" xmi:id="2325" event="265">
            <position xmi:type="position:Position" xmi:id="2326" source="File &quot;../data/tests\dev_transformed.cif&quot;: " startLine="508" endOffset="13232" startColumn="10" endLine="508" endColumn="19" startOffset="13223" location="C:\Users\rober\Documents\studie\afstuderen\development\simulator_via_code_generator\data\tests\dev_transformed.cif"/>
            <type xmi:type="types:BoolType" xmi:id="2327">
              <position xmi:type="position:Position" xmi:id="2328" source="File &quot;../data/tests\dev_transformed.cif&quot;: " startLine="508" endOffset="13232" startColumn="10" endLine="508" endColumn="19" startOffset="13223" location="C:\Users\rober\Documents\studie\afstuderen\development\simulator_via_code_generator\data\tests\dev_transformed.cif"/>
            </type>
          </event>
        </events>
      </edges>
    </locations>
    <locations xmi:type="automata:Location" xmi:id="2329" name="URtoPA">
      <position xmi:type="position:Position" xmi:id="2330" source="File &quot;../data/tests\dev_transformed.cif&quot;: " startLine="509" endOffset="13260" startColumn="12" endLine="509" endColumn="17" startOffset="13255" location="C:\Users\rober\Documents\studie\afstuderen\development\simulator_via_code_generator\data\tests\dev_transformed.cif"/>
      <edges xmi:type="automata:Edge" xmi:id="2331" target="2097">
        <position xmi:type="position:Position" xmi:id="2332" source="File &quot;../data/tests\dev_transformed.cif&quot;: " startLine="510" endOffset="13271" startColumn="5" endLine="510" endColumn="8" startOffset="13268" location="C:\Users\rober\Documents\studie\afstuderen\development\simulator_via_code_generator\data\tests\dev_transformed.cif"/>
        <events xmi:type="automata:EdgeEvent" xmi:id="2333">
          <position xmi:type="position:Position" xmi:id="2334" source="File &quot;../data/tests\dev_transformed.cif&quot;: " startLine="510" endOffset="13282" startColumn="10" endLine="510" endColumn="19" startOffset="13273" location="C:\Users\rober\Documents\studie\afstuderen\development\simulator_via_code_generator\data\tests\dev_transformed.cif"/>
          <event xmi:type="expressions:EventExpression" xmi:id="2335" event="267">
            <position xmi:type="position:Position" xmi:id="2336" source="File &quot;../data/tests\dev_transformed.cif&quot;: " startLine="510" endOffset="13282" startColumn="10" endLine="510" endColumn="19" startOffset="13273" location="C:\Users\rober\Documents\studie\afstuderen\development\simulator_via_code_generator\data\tests\dev_transformed.cif"/>
            <type xmi:type="types:BoolType" xmi:id="2337">
              <position xmi:type="position:Position" xmi:id="2338" source="File &quot;../data/tests\dev_transformed.cif&quot;: " startLine="510" endOffset="13282" startColumn="10" endLine="510" endColumn="19" startOffset="13273" location="C:\Users\rober\Documents\studie\afstuderen\development\simulator_via_code_generator\data\tests\dev_transformed.cif"/>
            </type>
          </event>
        </events>
      </edges>
    </locations>
    <locations xmi:type="automata:Location" xmi:id="2339" name="URtoCTC1">
      <position xmi:type="position:Position" xmi:id="2340" source="File &quot;../data/tests\dev_transformed.cif&quot;: " startLine="511" endOffset="13312" startColumn="12" endLine="511" endColumn="19" startOffset="13305" location="C:\Users\rober\Documents\studie\afstuderen\development\simulator_via_code_generator\data\tests\dev_transformed.cif"/>
      <edges xmi:type="automata:Edge" xmi:id="2341" target="2265">
        <position xmi:type="position:Position" xmi:id="2342" source="File &quot;../data/tests\dev_transformed.cif&quot;: " startLine="512" endOffset="13323" startColumn="5" endLine="512" endColumn="8" startOffset="13320" location="C:\Users\rober\Documents\studie\afstuderen\development\simulator_via_code_generator\data\tests\dev_transformed.cif"/>
        <events xmi:type="automata:EdgeEvent" xmi:id="2343">
          <position xmi:type="position:Position" xmi:id="2344" source="File &quot;../data/tests\dev_transformed.cif&quot;: " startLine="512" endOffset="13336" startColumn="10" endLine="512" endColumn="21" startOffset="13325" location="C:\Users\rober\Documents\studie\afstuderen\development\simulator_via_code_generator\data\tests\dev_transformed.cif"/>
          <event xmi:type="expressions:EventExpression" xmi:id="2345" event="269">
            <position xmi:type="position:Position" xmi:id="2346" source="File &quot;../data/tests\dev_transformed.cif&quot;: " startLine="512" endOffset="13336" startColumn="10" endLine="512" endColumn="21" startOffset="13325" location="C:\Users\rober\Documents\studie\afstuderen\development\simulator_via_code_generator\data\tests\dev_transformed.cif"/>
            <type xmi:type="types:BoolType" xmi:id="2347">
              <position xmi:type="position:Position" xmi:id="2348" source="File &quot;../data/tests\dev_transformed.cif&quot;: " startLine="512" endOffset="13336" startColumn="10" endLine="512" endColumn="21" startOffset="13325" location="C:\Users\rober\Documents\studie\afstuderen\development\simulator_via_code_generator\data\tests\dev_transformed.cif"/>
            </type>
          </event>
        </events>
      </edges>
    </locations>
    <locations xmi:type="automata:Location" xmi:id="2349" name="PAtoUR">
      <position xmi:type="position:Position" xmi:id="2350" source="File &quot;../data/tests\dev_transformed.cif&quot;: " startLine="513" endOffset="13366" startColumn="12" endLine="513" endColumn="17" startOffset="13361" location="C:\Users\rober\Documents\studie\afstuderen\development\simulator_via_code_generator\data\tests\dev_transformed.cif"/>
      <edges xmi:type="automata:Edge" xmi:id="2351" target="2059">
        <position xmi:type="position:Position" xmi:id="2352" source="File &quot;../data/tests\dev_transformed.cif&quot;: " startLine="514" endOffset="13377" startColumn="5" endLine="514" endColumn="8" startOffset="13374" location="C:\Users\rober\Documents\studie\afstuderen\development\simulator_via_code_generator\data\tests\dev_transformed.cif"/>
        <events xmi:type="automata:EdgeEvent" xmi:id="2353">
          <position xmi:type="position:Position" xmi:id="2354" source="File &quot;../data/tests\dev_transformed.cif&quot;: " startLine="514" endOffset="13388" startColumn="10" endLine="514" endColumn="19" startOffset="13379" location="C:\Users\rober\Documents\studie\afstuderen\development\simulator_via_code_generator\data\tests\dev_transformed.cif"/>
          <event xmi:type="expressions:EventExpression" xmi:id="2355" event="271">
            <position xmi:type="position:Position" xmi:id="2356" source="File &quot;../data/tests\dev_transformed.cif&quot;: " startLine="514" endOffset="13388" startColumn="10" endLine="514" endColumn="19" startOffset="13379" location="C:\Users\rober\Documents\studie\afstuderen\development\simulator_via_code_generator\data\tests\dev_transformed.cif"/>
            <type xmi:type="types:BoolType" xmi:id="2357">
              <position xmi:type="position:Position" xmi:id="2358" source="File &quot;../data/tests\dev_transformed.cif&quot;: " startLine="514" endOffset="13388" startColumn="10" endLine="514" endColumn="19" startOffset="13379" location="C:\Users\rober\Documents\studie\afstuderen\development\simulator_via_code_generator\data\tests\dev_transformed.cif"/>
            </type>
          </event>
        </events>
      </edges>
    </locations>
    <locations xmi:type="automata:Location" xmi:id="2359" name="PAtoLR">
      <position xmi:type="position:Position" xmi:id="2360" source="File &quot;../data/tests\dev_transformed.cif&quot;: " startLine="515" endOffset="13416" startColumn="12" endLine="515" endColumn="17" startOffset="13411" location="C:\Users\rober\Documents\studie\afstuderen\development\simulator_via_code_generator\data\tests\dev_transformed.cif"/>
      <edges xmi:type="automata:Edge" xmi:id="2361" target="2127">
        <position xmi:type="position:Position" xmi:id="2362" source="File &quot;../data/tests\dev_transformed.cif&quot;: " startLine="516" endOffset="13427" startColumn="5" endLine="516" endColumn="8" startOffset="13424" location="C:\Users\rober\Documents\studie\afstuderen\development\simulator_via_code_generator\data\tests\dev_transformed.cif"/>
        <events xmi:type="automata:EdgeEvent" xmi:id="2363">
          <position xmi:type="position:Position" xmi:id="2364" source="File &quot;../data/tests\dev_transformed.cif&quot;: " startLine="516" endOffset="13438" startColumn="10" endLine="516" endColumn="19" startOffset="13429" location="C:\Users\rober\Documents\studie\afstuderen\development\simulator_via_code_generator\data\tests\dev_transformed.cif"/>
          <event xmi:type="expressions:EventExpression" xmi:id="2365" event="273">
            <position xmi:type="position:Position" xmi:id="2366" source="File &quot;../data/tests\dev_transformed.cif&quot;: " startLine="516" endOffset="13438" startColumn="10" endLine="516" endColumn="19" startOffset="13429" location="C:\Users\rober\Documents\studie\afstuderen\development\simulator_via_code_generator\data\tests\dev_transformed.cif"/>
            <type xmi:type="types:BoolType" xmi:id="2367">
              <position xmi:type="position:Position" xmi:id="2368" source="File &quot;../data/tests\dev_transformed.cif&quot;: " startLine="516" endOffset="13438" startColumn="10" endLine="516" endColumn="19" startOffset="13429" location="C:\Users\rober\Documents\studie\afstuderen\development\simulator_via_code_generator\data\tests\dev_transformed.cif"/>
            </type>
          </event>
        </events>
      </edges>
    </locations>
    <locations xmi:type="automata:Location" xmi:id="2369" name="LRtoDU">
      <position xmi:type="position:Position" xmi:id="2370" source="File &quot;../data/tests\dev_transformed.cif&quot;: " startLine="517" endOffset="13466" startColumn="12" endLine="517" endColumn="17" startOffset="13461" location="C:\Users\rober\Documents\studie\afstuderen\development\simulator_via_code_generator\data\tests\dev_transformed.cif"/>
      <edges xmi:type="automata:Edge" xmi:id="2371" target="2173">
        <position xmi:type="position:Position" xmi:id="2372" source="File &quot;../data/tests\dev_transformed.cif&quot;: " startLine="518" endOffset="13477" startColumn="5" endLine="518" endColumn="8" startOffset="13474" location="C:\Users\rober\Documents\studie\afstuderen\development\simulator_via_code_generator\data\tests\dev_transformed.cif"/>
        <events xmi:type="automata:EdgeEvent" xmi:id="2373">
          <position xmi:type="position:Position" xmi:id="2374" source="File &quot;../data/tests\dev_transformed.cif&quot;: " startLine="518" endOffset="13488" startColumn="10" endLine="518" endColumn="19" startOffset="13479" location="C:\Users\rober\Documents\studie\afstuderen\development\simulator_via_code_generator\data\tests\dev_transformed.cif"/>
          <event xmi:type="expressions:EventExpression" xmi:id="2375" event="275">
            <position xmi:type="position:Position" xmi:id="2376" source="File &quot;../data/tests\dev_transformed.cif&quot;: " startLine="518" endOffset="13488" startColumn="10" endLine="518" endColumn="19" startOffset="13479" location="C:\Users\rober\Documents\studie\afstuderen\development\simulator_via_code_generator\data\tests\dev_transformed.cif"/>
            <type xmi:type="types:BoolType" xmi:id="2377">
              <position xmi:type="position:Position" xmi:id="2378" source="File &quot;../data/tests\dev_transformed.cif&quot;: " startLine="518" endOffset="13488" startColumn="10" endLine="518" endColumn="19" startOffset="13479" location="C:\Users\rober\Documents\studie\afstuderen\development\simulator_via_code_generator\data\tests\dev_transformed.cif"/>
            </type>
          </event>
        </events>
      </edges>
    </locations>
    <locations xmi:type="automata:Location" xmi:id="2379" name="LRtoPA">
      <position xmi:type="position:Position" xmi:id="2380" source="File &quot;../data/tests\dev_transformed.cif&quot;: " startLine="519" endOffset="13516" startColumn="12" endLine="519" endColumn="17" startOffset="13511" location="C:\Users\rober\Documents\studie\afstuderen\development\simulator_via_code_generator\data\tests\dev_transformed.cif"/>
      <edges xmi:type="automata:Edge" xmi:id="2381" target="2097">
        <position xmi:type="position:Position" xmi:id="2382" source="File &quot;../data/tests\dev_transformed.cif&quot;: " startLine="520" endOffset="13527" startColumn="5" endLine="520" endColumn="8" startOffset="13524" location="C:\Users\rober\Documents\studie\afstuderen\development\simulator_via_code_generator\data\tests\dev_transformed.cif"/>
        <events xmi:type="automata:EdgeEvent" xmi:id="2383">
          <position xmi:type="position:Position" xmi:id="2384" source="File &quot;../data/tests\dev_transformed.cif&quot;: " startLine="520" endOffset="13538" startColumn="10" endLine="520" endColumn="19" startOffset="13529" location="C:\Users\rober\Documents\studie\afstuderen\development\simulator_via_code_generator\data\tests\dev_transformed.cif"/>
          <event xmi:type="expressions:EventExpression" xmi:id="2385" event="277">
            <position xmi:type="position:Position" xmi:id="2386" source="File &quot;../data/tests\dev_transformed.cif&quot;: " startLine="520" endOffset="13538" startColumn="10" endLine="520" endColumn="19" startOffset="13529" location="C:\Users\rober\Documents\studie\afstuderen\development\simulator_via_code_generator\data\tests\dev_transformed.cif"/>
            <type xmi:type="types:BoolType" xmi:id="2387">
              <position xmi:type="position:Position" xmi:id="2388" source="File &quot;../data/tests\dev_transformed.cif&quot;: " startLine="520" endOffset="13538" startColumn="10" endLine="520" endColumn="19" startOffset="13529" location="C:\Users\rober\Documents\studie\afstuderen\development\simulator_via_code_generator\data\tests\dev_transformed.cif"/>
            </type>
          </event>
        </events>
      </edges>
    </locations>
    <locations xmi:type="automata:Location" xmi:id="2389" name="LRtoCH0">
      <position xmi:type="position:Position" xmi:id="2390" source="File &quot;../data/tests\dev_transformed.cif&quot;: " startLine="521" endOffset="13567" startColumn="12" endLine="521" endColumn="18" startOffset="13561" location="C:\Users\rober\Documents\studie\afstuderen\development\simulator_via_code_generator\data\tests\dev_transformed.cif"/>
      <edges xmi:type="automata:Edge" xmi:id="2391" target="2203">
        <position xmi:type="position:Position" xmi:id="2392" source="File &quot;../data/tests\dev_transformed.cif&quot;: " startLine="522" endOffset="13578" startColumn="5" endLine="522" endColumn="8" startOffset="13575" location="C:\Users\rober\Documents\studie\afstuderen\development\simulator_via_code_generator\data\tests\dev_transformed.cif"/>
        <events xmi:type="automata:EdgeEvent" xmi:id="2393">
          <position xmi:type="position:Position" xmi:id="2394" source="File &quot;../data/tests\dev_transformed.cif&quot;: " startLine="522" endOffset="13590" startColumn="10" endLine="522" endColumn="20" startOffset="13580" location="C:\Users\rober\Documents\studie\afstuderen\development\simulator_via_code_generator\data\tests\dev_transformed.cif"/>
          <event xmi:type="expressions:EventExpression" xmi:id="2395" event="279">
            <position xmi:type="position:Position" xmi:id="2396" source="File &quot;../data/tests\dev_transformed.cif&quot;: " startLine="522" endOffset="13590" startColumn="10" endLine="522" endColumn="20" startOffset="13580" location="C:\Users\rober\Documents\studie\afstuderen\development\simulator_via_code_generator\data\tests\dev_transformed.cif"/>
            <type xmi:type="types:BoolType" xmi:id="2397">
              <position xmi:type="position:Position" xmi:id="2398" source="File &quot;../data/tests\dev_transformed.cif&quot;: " startLine="522" endOffset="13590" startColumn="10" endLine="522" endColumn="20" startOffset="13580" location="C:\Users\rober\Documents\studie\afstuderen\development\simulator_via_code_generator\data\tests\dev_transformed.cif"/>
            </type>
          </event>
        </events>
      </edges>
    </locations>
    <locations xmi:type="automata:Location" xmi:id="2399" name="LRtoCH1">
      <position xmi:type="position:Position" xmi:id="2400" source="File &quot;../data/tests\dev_transformed.cif&quot;: " startLine="523" endOffset="13620" startColumn="12" endLine="523" endColumn="18" startOffset="13614" location="C:\Users\rober\Documents\studie\afstuderen\development\simulator_via_code_generator\data\tests\dev_transformed.cif"/>
      <edges xmi:type="automata:Edge" xmi:id="2401" target="2229">
        <position xmi:type="position:Position" xmi:id="2402" source="File &quot;../data/tests\dev_transformed.cif&quot;: " startLine="524" endOffset="13631" startColumn="5" endLine="524" endColumn="8" startOffset="13628" location="C:\Users\rober\Documents\studie\afstuderen\development\simulator_via_code_generator\data\tests\dev_transformed.cif"/>
        <events xmi:type="automata:EdgeEvent" xmi:id="2403">
          <position xmi:type="position:Position" xmi:id="2404" source="File &quot;../data/tests\dev_transformed.cif&quot;: " startLine="524" endOffset="13643" startColumn="10" endLine="524" endColumn="20" startOffset="13633" location="C:\Users\rober\Documents\studie\afstuderen\development\simulator_via_code_generator\data\tests\dev_transformed.cif"/>
          <event xmi:type="expressions:EventExpression" xmi:id="2405" event="281">
            <position xmi:type="position:Position" xmi:id="2406" source="File &quot;../data/tests\dev_transformed.cif&quot;: " startLine="524" endOffset="13643" startColumn="10" endLine="524" endColumn="20" startOffset="13633" location="C:\Users\rober\Documents\studie\afstuderen\development\simulator_via_code_generator\data\tests\dev_transformed.cif"/>
            <type xmi:type="types:BoolType" xmi:id="2407">
              <position xmi:type="position:Position" xmi:id="2408" source="File &quot;../data/tests\dev_transformed.cif&quot;: " startLine="524" endOffset="13643" startColumn="10" endLine="524" endColumn="20" startOffset="13633" location="C:\Users\rober\Documents\studie\afstuderen\development\simulator_via_code_generator\data\tests\dev_transformed.cif"/>
            </type>
          </event>
        </events>
      </edges>
    </locations>
    <locations xmi:type="automata:Location" xmi:id="2409" name="LRtoCTC0">
      <position xmi:type="position:Position" xmi:id="2410" source="File &quot;../data/tests\dev_transformed.cif&quot;: " startLine="525" endOffset="13674" startColumn="12" endLine="525" endColumn="19" startOffset="13667" location="C:\Users\rober\Documents\studie\afstuderen\development\simulator_via_code_generator\data\tests\dev_transformed.cif"/>
      <edges xmi:type="automata:Edge" xmi:id="2411" target="2251">
        <position xmi:type="position:Position" xmi:id="2412" source="File &quot;../data/tests\dev_transformed.cif&quot;: " startLine="526" endOffset="13685" startColumn="5" endLine="526" endColumn="8" startOffset="13682" location="C:\Users\rober\Documents\studie\afstuderen\development\simulator_via_code_generator\data\tests\dev_transformed.cif"/>
        <events xmi:type="automata:EdgeEvent" xmi:id="2413">
          <position xmi:type="position:Position" xmi:id="2414" source="File &quot;../data/tests\dev_transformed.cif&quot;: " startLine="526" endOffset="13698" startColumn="10" endLine="526" endColumn="21" startOffset="13687" location="C:\Users\rober\Documents\studie\afstuderen\development\simulator_via_code_generator\data\tests\dev_transformed.cif"/>
          <event xmi:type="expressions:EventExpression" xmi:id="2415" event="283">
            <position xmi:type="position:Position" xmi:id="2416" source="File &quot;../data/tests\dev_transformed.cif&quot;: " startLine="526" endOffset="13698" startColumn="10" endLine="526" endColumn="21" startOffset="13687" location="C:\Users\rober\Documents\studie\afstuderen\development\simulator_via_code_generator\data\tests\dev_transformed.cif"/>
            <type xmi:type="types:BoolType" xmi:id="2417">
              <position xmi:type="position:Position" xmi:id="2418" source="File &quot;../data/tests\dev_transformed.cif&quot;: " startLine="526" endOffset="13698" startColumn="10" endLine="526" endColumn="21" startOffset="13687" location="C:\Users\rober\Documents\studie\afstuderen\development\simulator_via_code_generator\data\tests\dev_transformed.cif"/>
            </type>
          </event>
        </events>
      </edges>
    </locations>
    <locations xmi:type="automata:Location" xmi:id="2419" name="DUtoUR">
      <position xmi:type="position:Position" xmi:id="2420" source="File &quot;../data/tests\dev_transformed.cif&quot;: " startLine="527" endOffset="13728" startColumn="12" endLine="527" endColumn="17" startOffset="13723" location="C:\Users\rober\Documents\studie\afstuderen\development\simulator_via_code_generator\data\tests\dev_transformed.cif"/>
      <edges xmi:type="automata:Edge" xmi:id="2421" target="2059">
        <position xmi:type="position:Position" xmi:id="2422" source="File &quot;../data/tests\dev_transformed.cif&quot;: " startLine="528" endOffset="13739" startColumn="5" endLine="528" endColumn="8" startOffset="13736" location="C:\Users\rober\Documents\studie\afstuderen\development\simulator_via_code_generator\data\tests\dev_transformed.cif"/>
        <events xmi:type="automata:EdgeEvent" xmi:id="2423">
          <position xmi:type="position:Position" xmi:id="2424" source="File &quot;../data/tests\dev_transformed.cif&quot;: " startLine="528" endOffset="13750" startColumn="10" endLine="528" endColumn="19" startOffset="13741" location="C:\Users\rober\Documents\studie\afstuderen\development\simulator_via_code_generator\data\tests\dev_transformed.cif"/>
          <event xmi:type="expressions:EventExpression" xmi:id="2425" event="285">
            <position xmi:type="position:Position" xmi:id="2426" source="File &quot;../data/tests\dev_transformed.cif&quot;: " startLine="528" endOffset="13750" startColumn="10" endLine="528" endColumn="19" startOffset="13741" location="C:\Users\rober\Documents\studie\afstuderen\development\simulator_via_code_generator\data\tests\dev_transformed.cif"/>
            <type xmi:type="types:BoolType" xmi:id="2427">
              <position xmi:type="position:Position" xmi:id="2428" source="File &quot;../data/tests\dev_transformed.cif&quot;: " startLine="528" endOffset="13750" startColumn="10" endLine="528" endColumn="19" startOffset="13741" location="C:\Users\rober\Documents\studie\afstuderen\development\simulator_via_code_generator\data\tests\dev_transformed.cif"/>
            </type>
          </event>
        </events>
      </edges>
    </locations>
    <locations xmi:type="automata:Location" xmi:id="2429" name="DUtoLR">
      <position xmi:type="position:Position" xmi:id="2430" source="File &quot;../data/tests\dev_transformed.cif&quot;: " startLine="529" endOffset="13778" startColumn="12" endLine="529" endColumn="17" startOffset="13773" location="C:\Users\rober\Documents\studie\afstuderen\development\simulator_via_code_generator\data\tests\dev_transformed.cif"/>
      <edges xmi:type="automata:Edge" xmi:id="2431" target="2127">
        <position xmi:type="position:Position" xmi:id="2432" source="File &quot;../data/tests\dev_transformed.cif&quot;: " startLine="530" endOffset="13789" startColumn="5" endLine="530" endColumn="8" startOffset="13786" location="C:\Users\rober\Documents\studie\afstuderen\development\simulator_via_code_generator\data\tests\dev_transformed.cif"/>
        <events xmi:type="automata:EdgeEvent" xmi:id="2433">
          <position xmi:type="position:Position" xmi:id="2434" source="File &quot;../data/tests\dev_transformed.cif&quot;: " startLine="530" endOffset="13800" startColumn="10" endLine="530" endColumn="19" startOffset="13791" location="C:\Users\rober\Documents\studie\afstuderen\development\simulator_via_code_generator\data\tests\dev_transformed.cif"/>
          <event xmi:type="expressions:EventExpression" xmi:id="2435" event="287">
            <position xmi:type="position:Position" xmi:id="2436" source="File &quot;../data/tests\dev_transformed.cif&quot;: " startLine="530" endOffset="13800" startColumn="10" endLine="530" endColumn="19" startOffset="13791" location="C:\Users\rober\Documents\studie\afstuderen\development\simulator_via_code_generator\data\tests\dev_transformed.cif"/>
            <type xmi:type="types:BoolType" xmi:id="2437">
              <position xmi:type="position:Position" xmi:id="2438" source="File &quot;../data/tests\dev_transformed.cif&quot;: " startLine="530" endOffset="13800" startColumn="10" endLine="530" endColumn="19" startOffset="13791" location="C:\Users\rober\Documents\studie\afstuderen\development\simulator_via_code_generator\data\tests\dev_transformed.cif"/>
            </type>
          </event>
        </events>
      </edges>
    </locations>
    <locations xmi:type="automata:Location" xmi:id="2439" name="DUtoTR">
      <position xmi:type="position:Position" xmi:id="2440" source="File &quot;../data/tests\dev_transformed.cif&quot;: " startLine="531" endOffset="13828" startColumn="12" endLine="531" endColumn="17" startOffset="13823" location="C:\Users\rober\Documents\studie\afstuderen\development\simulator_via_code_generator\data\tests\dev_transformed.cif"/>
      <edges xmi:type="automata:Edge" xmi:id="2441" target="2031">
        <position xmi:type="position:Position" xmi:id="2442" source="File &quot;../data/tests\dev_transformed.cif&quot;: " startLine="532" endOffset="13839" startColumn="5" endLine="532" endColumn="8" startOffset="13836" location="C:\Users\rober\Documents\studie\afstuderen\development\simulator_via_code_generator\data\tests\dev_transformed.cif"/>
        <events xmi:type="automata:EdgeEvent" xmi:id="2443">
          <position xmi:type="position:Position" xmi:id="2444" source="File &quot;../data/tests\dev_transformed.cif&quot;: " startLine="532" endOffset="13850" startColumn="10" endLine="532" endColumn="19" startOffset="13841" location="C:\Users\rober\Documents\studie\afstuderen\development\simulator_via_code_generator\data\tests\dev_transformed.cif"/>
          <event xmi:type="expressions:EventExpression" xmi:id="2445" event="289">
            <position xmi:type="position:Position" xmi:id="2446" source="File &quot;../data/tests\dev_transformed.cif&quot;: " startLine="532" endOffset="13850" startColumn="10" endLine="532" endColumn="19" startOffset="13841" location="C:\Users\rober\Documents\studie\afstuderen\development\simulator_via_code_generator\data\tests\dev_transformed.cif"/>
            <type xmi:type="types:BoolType" xmi:id="2447">
              <position xmi:type="position:Position" xmi:id="2448" source="File &quot;../data/tests\dev_transformed.cif&quot;: " startLine="532" endOffset="13850" startColumn="10" endLine="532" endColumn="19" startOffset="13841" location="C:\Users\rober\Documents\studie\afstuderen\development\simulator_via_code_generator\data\tests\dev_transformed.cif"/>
            </type>
          </event>
        </events>
      </edges>
    </locations>
    <locations xmi:type="automata:Location" xmi:id="2449" name="CH0toLR">
      <position xmi:type="position:Position" xmi:id="2450" source="File &quot;../data/tests\dev_transformed.cif&quot;: " startLine="533" endOffset="13879" startColumn="12" endLine="533" endColumn="18" startOffset="13873" location="C:\Users\rober\Documents\studie\afstuderen\development\simulator_via_code_generator\data\tests\dev_transformed.cif"/>
      <edges xmi:type="automata:Edge" xmi:id="2451" target="2127">
        <position xmi:type="position:Position" xmi:id="2452" source="File &quot;../data/tests\dev_transformed.cif&quot;: " startLine="534" endOffset="13890" startColumn="5" endLine="534" endColumn="8" startOffset="13887" location="C:\Users\rober\Documents\studie\afstuderen\development\simulator_via_code_generator\data\tests\dev_transformed.cif"/>
        <events xmi:type="automata:EdgeEvent" xmi:id="2453">
          <position xmi:type="position:Position" xmi:id="2454" source="File &quot;../data/tests\dev_transformed.cif&quot;: " startLine="534" endOffset="13902" startColumn="10" endLine="534" endColumn="20" startOffset="13892" location="C:\Users\rober\Documents\studie\afstuderen\development\simulator_via_code_generator\data\tests\dev_transformed.cif"/>
          <event xmi:type="expressions:EventExpression" xmi:id="2455" event="291">
            <position xmi:type="position:Position" xmi:id="2456" source="File &quot;../data/tests\dev_transformed.cif&quot;: " startLine="534" endOffset="13902" startColumn="10" endLine="534" endColumn="20" startOffset="13892" location="C:\Users\rober\Documents\studie\afstuderen\development\simulator_via_code_generator\data\tests\dev_transformed.cif"/>
            <type xmi:type="types:BoolType" xmi:id="2457">
              <position xmi:type="position:Position" xmi:id="2458" source="File &quot;../data/tests\dev_transformed.cif&quot;: " startLine="534" endOffset="13902" startColumn="10" endLine="534" endColumn="20" startOffset="13892" location="C:\Users\rober\Documents\studie\afstuderen\development\simulator_via_code_generator\data\tests\dev_transformed.cif"/>
            </type>
          </event>
        </events>
      </edges>
    </locations>
    <locations xmi:type="automata:Location" xmi:id="2459" name="CH0toUR">
      <position xmi:type="position:Position" xmi:id="2460" source="File &quot;../data/tests\dev_transformed.cif&quot;: " startLine="535" endOffset="13931" startColumn="12" endLine="535" endColumn="18" startOffset="13925" location="C:\Users\rober\Documents\studie\afstuderen\development\simulator_via_code_generator\data\tests\dev_transformed.cif"/>
      <edges xmi:type="automata:Edge" xmi:id="2461" target="2059">
        <position xmi:type="position:Position" xmi:id="2462" source="File &quot;../data/tests\dev_transformed.cif&quot;: " startLine="536" endOffset="13942" startColumn="5" endLine="536" endColumn="8" startOffset="13939" location="C:\Users\rober\Documents\studie\afstuderen\development\simulator_via_code_generator\data\tests\dev_transformed.cif"/>
        <events xmi:type="automata:EdgeEvent" xmi:id="2463">
          <position xmi:type="position:Position" xmi:id="2464" source="File &quot;../data/tests\dev_transformed.cif&quot;: " startLine="536" endOffset="13954" startColumn="10" endLine="536" endColumn="20" startOffset="13944" location="C:\Users\rober\Documents\studie\afstuderen\development\simulator_via_code_generator\data\tests\dev_transformed.cif"/>
          <event xmi:type="expressions:EventExpression" xmi:id="2465" event="293">
            <position xmi:type="position:Position" xmi:id="2466" source="File &quot;../data/tests\dev_transformed.cif&quot;: " startLine="536" endOffset="13954" startColumn="10" endLine="536" endColumn="20" startOffset="13944" location="C:\Users\rober\Documents\studie\afstuderen\development\simulator_via_code_generator\data\tests\dev_transformed.cif"/>
            <type xmi:type="types:BoolType" xmi:id="2467">
              <position xmi:type="position:Position" xmi:id="2468" source="File &quot;../data/tests\dev_transformed.cif&quot;: " startLine="536" endOffset="13954" startColumn="10" endLine="536" endColumn="20" startOffset="13944" location="C:\Users\rober\Documents\studie\afstuderen\development\simulator_via_code_generator\data\tests\dev_transformed.cif"/>
            </type>
          </event>
        </events>
      </edges>
    </locations>
    <locations xmi:type="automata:Location" xmi:id="2469" name="CH1toLR">
      <position xmi:type="position:Position" xmi:id="2470" source="File &quot;../data/tests\dev_transformed.cif&quot;: " startLine="537" endOffset="13983" startColumn="12" endLine="537" endColumn="18" startOffset="13977" location="C:\Users\rober\Documents\studie\afstuderen\development\simulator_via_code_generator\data\tests\dev_transformed.cif"/>
      <edges xmi:type="automata:Edge" xmi:id="2471" target="2127">
        <position xmi:type="position:Position" xmi:id="2472" source="File &quot;../data/tests\dev_transformed.cif&quot;: " startLine="538" endOffset="13994" startColumn="5" endLine="538" endColumn="8" startOffset="13991" location="C:\Users\rober\Documents\studie\afstuderen\development\simulator_via_code_generator\data\tests\dev_transformed.cif"/>
        <events xmi:type="automata:EdgeEvent" xmi:id="2473">
          <position xmi:type="position:Position" xmi:id="2474" source="File &quot;../data/tests\dev_transformed.cif&quot;: " startLine="538" endOffset="14006" startColumn="10" endLine="538" endColumn="20" startOffset="13996" location="C:\Users\rober\Documents\studie\afstuderen\development\simulator_via_code_generator\data\tests\dev_transformed.cif"/>
          <event xmi:type="expressions:EventExpression" xmi:id="2475" event="295">
            <position xmi:type="position:Position" xmi:id="2476" source="File &quot;../data/tests\dev_transformed.cif&quot;: " startLine="538" endOffset="14006" startColumn="10" endLine="538" endColumn="20" startOffset="13996" location="C:\Users\rober\Documents\studie\afstuderen\development\simulator_via_code_generator\data\tests\dev_transformed.cif"/>
            <type xmi:type="types:BoolType" xmi:id="2477">
              <position xmi:type="position:Position" xmi:id="2478" source="File &quot;../data/tests\dev_transformed.cif&quot;: " startLine="538" endOffset="14006" startColumn="10" endLine="538" endColumn="20" startOffset="13996" location="C:\Users\rober\Documents\studie\afstuderen\development\simulator_via_code_generator\data\tests\dev_transformed.cif"/>
            </type>
          </event>
        </events>
      </edges>
    </locations>
    <locations xmi:type="automata:Location" xmi:id="2479" name="CH1toUR">
      <position xmi:type="position:Position" xmi:id="2480" source="File &quot;../data/tests\dev_transformed.cif&quot;: " startLine="539" endOffset="14035" startColumn="12" endLine="539" endColumn="18" startOffset="14029" location="C:\Users\rober\Documents\studie\afstuderen\development\simulator_via_code_generator\data\tests\dev_transformed.cif"/>
      <edges xmi:type="automata:Edge" xmi:id="2481" target="2059">
        <position xmi:type="position:Position" xmi:id="2482" source="File &quot;../data/tests\dev_transformed.cif&quot;: " startLine="540" endOffset="14046" startColumn="5" endLine="540" endColumn="8" startOffset="14043" location="C:\Users\rober\Documents\studie\afstuderen\development\simulator_via_code_generator\data\tests\dev_transformed.cif"/>
        <events xmi:type="automata:EdgeEvent" xmi:id="2483">
          <position xmi:type="position:Position" xmi:id="2484" source="File &quot;../data/tests\dev_transformed.cif&quot;: " startLine="540" endOffset="14058" startColumn="10" endLine="540" endColumn="20" startOffset="14048" location="C:\Users\rober\Documents\studie\afstuderen\development\simulator_via_code_generator\data\tests\dev_transformed.cif"/>
          <event xmi:type="expressions:EventExpression" xmi:id="2485" event="297">
            <position xmi:type="position:Position" xmi:id="2486" source="File &quot;../data/tests\dev_transformed.cif&quot;: " startLine="540" endOffset="14058" startColumn="10" endLine="540" endColumn="20" startOffset="14048" location="C:\Users\rober\Documents\studie\afstuderen\development\simulator_via_code_generator\data\tests\dev_transformed.cif"/>
            <type xmi:type="types:BoolType" xmi:id="2487">
              <position xmi:type="position:Position" xmi:id="2488" source="File &quot;../data/tests\dev_transformed.cif&quot;: " startLine="540" endOffset="14058" startColumn="10" endLine="540" endColumn="20" startOffset="14048" location="C:\Users\rober\Documents\studie\afstuderen\development\simulator_via_code_generator\data\tests\dev_transformed.cif"/>
            </type>
          </event>
        </events>
      </edges>
    </locations>
    <locations xmi:type="automata:Location" xmi:id="2489" name="CTC0toLR">
      <position xmi:type="position:Position" xmi:id="2490" source="File &quot;../data/tests\dev_transformed.cif&quot;: " startLine="541" endOffset="14088" startColumn="12" endLine="541" endColumn="19" startOffset="14081" location="C:\Users\rober\Documents\studie\afstuderen\development\simulator_via_code_generator\data\tests\dev_transformed.cif"/>
      <edges xmi:type="automata:Edge" xmi:id="2491" target="2127">
        <position xmi:type="position:Position" xmi:id="2492" source="File &quot;../data/tests\dev_transformed.cif&quot;: " startLine="542" endOffset="14099" startColumn="5" endLine="542" endColumn="8" startOffset="14096" location="C:\Users\rober\Documents\studie\afstuderen\development\simulator_via_code_generator\data\tests\dev_transformed.cif"/>
        <events xmi:type="automata:EdgeEvent" xmi:id="2493">
          <position xmi:type="position:Position" xmi:id="2494" source="File &quot;../data/tests\dev_transformed.cif&quot;: " startLine="542" endOffset="14112" startColumn="10" endLine="542" endColumn="21" startOffset="14101" location="C:\Users\rober\Documents\studie\afstuderen\development\simulator_via_code_generator\data\tests\dev_transformed.cif"/>
          <event xmi:type="expressions:EventExpression" xmi:id="2495" event="299">
            <position xmi:type="position:Position" xmi:id="2496" source="File &quot;../data/tests\dev_transformed.cif&quot;: " startLine="542" endOffset="14112" startColumn="10" endLine="542" endColumn="21" startOffset="14101" location="C:\Users\rober\Documents\studie\afstuderen\development\simulator_via_code_generator\data\tests\dev_transformed.cif"/>
            <type xmi:type="types:BoolType" xmi:id="2497">
              <position xmi:type="position:Position" xmi:id="2498" source="File &quot;../data/tests\dev_transformed.cif&quot;: " startLine="542" endOffset="14112" startColumn="10" endLine="542" endColumn="21" startOffset="14101" location="C:\Users\rober\Documents\studie\afstuderen\development\simulator_via_code_generator\data\tests\dev_transformed.cif"/>
            </type>
          </event>
        </events>
      </edges>
    </locations>
    <locations xmi:type="automata:Location" xmi:id="2499" name="CTC1toUR">
      <position xmi:type="position:Position" xmi:id="2500" source="File &quot;../data/tests\dev_transformed.cif&quot;: " startLine="543" endOffset="14142" startColumn="12" endLine="543" endColumn="19" startOffset="14135" location="C:\Users\rober\Documents\studie\afstuderen\development\simulator_via_code_generator\data\tests\dev_transformed.cif"/>
      <edges xmi:type="automata:Edge" xmi:id="2501" target="2059">
        <position xmi:type="position:Position" xmi:id="2502" source="File &quot;../data/tests\dev_transformed.cif&quot;: " startLine="544" endOffset="14153" startColumn="5" endLine="544" endColumn="8" startOffset="14150" location="C:\Users\rober\Documents\studie\afstuderen\development\simulator_via_code_generator\data\tests\dev_transformed.cif"/>
        <events xmi:type="automata:EdgeEvent" xmi:id="2503">
          <position xmi:type="position:Position" xmi:id="2504" source="File &quot;../data/tests\dev_transformed.cif&quot;: " startLine="544" endOffset="14166" startColumn="10" endLine="544" endColumn="21" startOffset="14155" location="C:\Users\rober\Documents\studie\afstuderen\development\simulator_via_code_generator\data\tests\dev_transformed.cif"/>
          <event xmi:type="expressions:EventExpression" xmi:id="2505" event="301">
            <position xmi:type="position:Position" xmi:id="2506" source="File &quot;../data/tests\dev_transformed.cif&quot;: " startLine="544" endOffset="14166" startColumn="10" endLine="544" endColumn="21" startOffset="14155" location="C:\Users\rober\Documents\studie\afstuderen\development\simulator_via_code_generator\data\tests\dev_transformed.cif"/>
            <type xmi:type="types:BoolType" xmi:id="2507">
              <position xmi:type="position:Position" xmi:id="2508" source="File &quot;../data/tests\dev_transformed.cif&quot;: " startLine="544" endOffset="14166" startColumn="10" endLine="544" endColumn="21" startOffset="14155" location="C:\Users\rober\Documents\studie\afstuderen\development\simulator_via_code_generator\data\tests\dev_transformed.cif"/>
            </type>
          </event>
        </events>
      </edges>
    </locations>
  </components>
</cif:Specification>
`;
const eventMap = ['assignCH0_0', 'assignCH0orCH1_0', 'assignCH1_0', 'CH0_Expose_0_e', 'CH0_Measure_0_e', 'CH0toLR_0_e', 'CH0toLR_1_e', 'CH0toLR_2_e', 'CH0toUR_0_e', 'CH0toUR_1_e', 'CH0toUR_2_e', 'CH1_Expose_0_e', 'CH1_Measure_0_e', 'CH1toLR_0_e', 'CH1toLR_1_e', 'CH1toLR_2_e', 'CH1toUR_0_e', 'CH1toUR_1_e', 'CH1toUR_2_e', 'CTC0toLR_0_e', 'CTC0toLR_1_e', 'CTC0toLR_2_e', 'CTC1toUR_0_e', 'CTC1toUR_1_e', 'CTC1toUR_2_e', 'DUtoLR_0_e', 'DUtoLR_1_e', 'DUtoLR_2_e', 'DUtoTR_0_e', 'DUtoTR_1_e', 'DUtoTR_2_e', 'DUtoUR_0_e', 'DUtoUR_1_e', 'DUtoUR_2_e', 'LRtoCH0_0_e', 'LRtoCH0_1_e', 'LRtoCH0_2_e', 'LRtoCH1_0_e', 'LRtoCH1_1_e', 'LRtoCH1_2_e', 'LRtoCTC0_0_e', 'LRtoCTC0_1_e', 'LRtoCTC0_2_e', 'LRtoDU_0_e', 'LRtoDU_1_e', 'LRtoDU_2_e', 'LRtoPA_0_e', 'LRtoPA_1_e', 'LRtoPA_2_e', 'PA_Align_0_e', 'PA_Align_1_e', 'PA_Align_2_e', 'PAtoLR_0_e', 'PAtoLR_1_e', 'PAtoLR_2_e', 'PAtoUR_0_e', 'PAtoUR_1_e', 'PAtoUR_2_e', 'SUB_Condition_0_e', 'SUBtoUR_0_e', 'SUBtoUR_1_e', 'SUBtoUR_2_e', 'TRtoSUB_0_e', 'TRtoSUB_1_e', 'TRtoSUB_2_e', 'URtoCTC1_0_e', 'URtoCTC1_1_e', 'URtoCTC1_2_e', 'URtoDU_0_e', 'URtoDU_1_e', 'URtoDU_2_e', 'URtoPA_0_e', 'URtoPA_1_e', 'URtoPA_2_e', 'URtoSUB_0_e', 'URtoSUB_1_e', 'URtoSUB_2_e', 'CH0_Expose_0_s', 'CH0_Measure_0_s', 'CH0toLR_0_s', 'CH0toLR_1_s', 'CH0toLR_2_s', 'CH0toUR_0_s', 'CH0toUR_1_s', 'CH0toUR_2_s', 'CH1_Expose_0_s', 'CH1_Measure_0_s', 'CH1toLR_0_s', 'CH1toLR_1_s', 'CH1toLR_2_s', 'CH1toUR_0_s', 'CH1toUR_1_s', 'CH1toUR_2_s', 'CTC0toLR_0_s', 'CTC0toLR_1_s', 'CTC0toLR_2_s', 'CTC1toUR_0_s', 'CTC1toUR_1_s', 'CTC1toUR_2_s', 'DUtoLR_0_s', 'DUtoLR_1_s', 'DUtoLR_2_s', 'DUtoTR_0_s', 'DUtoTR_1_s', 'DUtoTR_2_s', 'DUtoUR_0_s', 'DUtoUR_1_s', 'DUtoUR_2_s', 'LRtoCH0_0_s', 'LRtoCH0_1_s', 'LRtoCH0_2_s', 'LRtoCH1_0_s', 'LRtoCH1_1_s', 'LRtoCH1_2_s', 'LRtoCTC0_0_s', 'LRtoCTC0_1_s', 'LRtoCTC0_2_s', 'LRtoDU_0_s', 'LRtoDU_1_s', 'LRtoDU_2_s', 'LRtoPA_0_s', 'LRtoPA_1_s', 'LRtoPA_2_s', 'PA_Align_0_s', 'PA_Align_1_s', 'PA_Align_2_s', 'PAtoLR_0_s', 'PAtoLR_1_s', 'PAtoLR_2_s', 'PAtoUR_0_s', 'PAtoUR_1_s', 'PAtoUR_2_s', 'SUB_Condition_0_s', 'SUBtoUR_0_s', 'SUBtoUR_1_s', 'SUBtoUR_2_s', 'swalmen.c_0', 'swalmen.c_1', 'swalmen.c_2', 'swalmen.c_3', 'swalmen.c_4', 'swalmen.c_5', 'swalmen.c_6', 'swalmen.c_7', 'swalmen.c_8', 'TRtoSUB_0_s', 'TRtoSUB_1_s', 'TRtoSUB_2_s', 'URtoCTC1_0_s', 'URtoCTC1_1_s', 'URtoCTC1_2_s', 'URtoDU_0_s', 'URtoDU_1_s', 'URtoDU_2_s', 'URtoPA_0_s', 'URtoPA_1_s', 'URtoPA_2_s', 'URtoSUB_0_s', 'URtoSUB_1_s', 'URtoSUB_2_s'];
