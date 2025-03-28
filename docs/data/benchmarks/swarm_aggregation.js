const xml_swarm_aggregation = `<?xml version="1.0" encoding="UTF-8"?>
<cif:Specification xmi:version="2.0" xmlns:xmi="http://www.omg.org/XMI" xmlns:xsi="http://www.w3.org/2001/XMLSchema-instance" xmlns:automata="http://eclipse.org/escet/cif/automata" xmlns:cif="http://eclipse.org/escet/cif" xmlns:declarations="http://eclipse.org/escet/cif/declarations" xmlns:expressions="http://eclipse.org/escet/cif/expressions" xmlns:position="http://eclipse.org/escet/position" xmlns:types="http://eclipse.org/escet/cif/types" xsi:schemaLocation="http://eclipse.org/escet/cif/automata http://eclipse.org/escet/cif#//automata http://eclipse.org/escet/cif/declarations http://eclipse.org/escet/cif#//declarations http://eclipse.org/escet/cif/expressions http://eclipse.org/escet/cif#//expressions http://eclipse.org/escet/cif/types http://eclipse.org/escet/cif#//types" xmi:id="1" name="specification">
  <position xmi:type="position:Position" xmi:id="2" source="File &quot;C:\Users\rober\Downloads\eclipse-escet-v5.0-win32.win32.x86_64\eclipse-escet-v5.0\workspace\CIFBenchmarks-5.0.0.v20241003-060816\swarm\swarm_aggregation.cif&quot;: " startLine="1" startColumn="1" endLine="1" endColumn="1" location="C:\Users\rober\Downloads\eclipse-escet-v5.0-win32.win32.x86_64\eclipse-escet-v5.0\workspace\CIFBenchmarks-5.0.0.v20241003-060816\swarm\swarm_aggregation.cif"/>
  <declarations xmi:type="declarations:Event" xmi:id="3" name="S0" controllable="false">
    <position xmi:type="position:Position" xmi:id="4" source="File &quot;C:\Users\rober\Downloads\eclipse-escet-v5.0-win32.win32.x86_64\eclipse-escet-v5.0\workspace\CIFBenchmarks-5.0.0.v20241003-060816\swarm\swarm_aggregation.cif&quot;: " startLine="22" endOffset="1043" startColumn="16" endLine="22" endColumn="17" startOffset="1042" location="C:\Users\rober\Downloads\eclipse-escet-v5.0-win32.win32.x86_64\eclipse-escet-v5.0\workspace\CIFBenchmarks-5.0.0.v20241003-060816\swarm\swarm_aggregation.cif"/>
  </declarations>
  <declarations xmi:type="declarations:Event" xmi:id="5" name="S1" controllable="false">
    <position xmi:type="position:Position" xmi:id="6" source="File &quot;C:\Users\rober\Downloads\eclipse-escet-v5.0-win32.win32.x86_64\eclipse-escet-v5.0\workspace\CIFBenchmarks-5.0.0.v20241003-060816\swarm\swarm_aggregation.cif&quot;: " startLine="22" endOffset="1047" startColumn="20" endLine="22" endColumn="21" startOffset="1046" location="C:\Users\rober\Downloads\eclipse-escet-v5.0-win32.win32.x86_64\eclipse-escet-v5.0\workspace\CIFBenchmarks-5.0.0.v20241003-060816\swarm\swarm_aggregation.cif"/>
  </declarations>
  <declarations xmi:type="declarations:Event" xmi:id="7" name="V0" controllable="true">
    <position xmi:type="position:Position" xmi:id="8" source="File &quot;C:\Users\rober\Downloads\eclipse-escet-v5.0-win32.win32.x86_64\eclipse-escet-v5.0\workspace\CIFBenchmarks-5.0.0.v20241003-060816\swarm\swarm_aggregation.cif&quot;: " startLine="30" endOffset="1150" startColumn="14" endLine="30" endColumn="15" startOffset="1149" location="C:\Users\rober\Downloads\eclipse-escet-v5.0-win32.win32.x86_64\eclipse-escet-v5.0\workspace\CIFBenchmarks-5.0.0.v20241003-060816\swarm\swarm_aggregation.cif"/>
  </declarations>
  <declarations xmi:type="declarations:Event" xmi:id="9" name="V1" controllable="true">
    <position xmi:type="position:Position" xmi:id="10" source="File &quot;C:\Users\rober\Downloads\eclipse-escet-v5.0-win32.win32.x86_64\eclipse-escet-v5.0\workspace\CIFBenchmarks-5.0.0.v20241003-060816\swarm\swarm_aggregation.cif&quot;: " startLine="30" endOffset="1154" startColumn="18" endLine="30" endColumn="19" startOffset="1153" location="C:\Users\rober\Downloads\eclipse-escet-v5.0-win32.win32.x86_64\eclipse-escet-v5.0\workspace\CIFBenchmarks-5.0.0.v20241003-060816\swarm\swarm_aggregation.cif"/>
  </declarations>
  <components xmi:type="automata:Automaton" xmi:id="11" name="BinarySensor" kind="Plant">
    <position xmi:type="position:Position" xmi:id="12" source="File &quot;C:\Users\rober\Downloads\eclipse-escet-v5.0-win32.win32.x86_64\eclipse-escet-v5.0\workspace\CIFBenchmarks-5.0.0.v20241003-060816\swarm\swarm_aggregation.cif&quot;: " startLine="24" endOffset="1068" startColumn="7" endLine="24" endColumn="18" startOffset="1057" location="C:\Users\rober\Downloads\eclipse-escet-v5.0-win32.win32.x86_64\eclipse-escet-v5.0\workspace\CIFBenchmarks-5.0.0.v20241003-060816\swarm\swarm_aggregation.cif"/>
    <locations xmi:type="automata:Location" xmi:id="13" name="q1">
      <position xmi:type="position:Position" xmi:id="14" source="File &quot;C:\Users\rober\Downloads\eclipse-escet-v5.0-win32.win32.x86_64\eclipse-escet-v5.0\workspace\CIFBenchmarks-5.0.0.v20241003-060816\swarm\swarm_aggregation.cif&quot;: " startLine="25" endOffset="1090" startColumn="12" endLine="25" endColumn="13" startOffset="1089" location="C:\Users\rober\Downloads\eclipse-escet-v5.0-win32.win32.x86_64\eclipse-escet-v5.0\workspace\CIFBenchmarks-5.0.0.v20241003-060816\swarm\swarm_aggregation.cif"/>
      <initials xmi:type="expressions:BoolExpression" xmi:id="15" value="true">
        <position xmi:type="position:Position" xmi:id="16" source="File &quot;C:\Users\rober\Downloads\eclipse-escet-v5.0-win32.win32.x86_64\eclipse-escet-v5.0\workspace\CIFBenchmarks-5.0.0.v20241003-060816\swarm\swarm_aggregation.cif&quot;: " startLine="26" endOffset="1103" startColumn="5" endLine="26" endColumn="11" startOffset="1097" location="C:\Users\rober\Downloads\eclipse-escet-v5.0-win32.win32.x86_64\eclipse-escet-v5.0\workspace\CIFBenchmarks-5.0.0.v20241003-060816\swarm\swarm_aggregation.cif"/>
        <type xmi:type="types:BoolType" xmi:id="17">
          <position xmi:type="position:Position" xmi:id="18" source="File &quot;C:\Users\rober\Downloads\eclipse-escet-v5.0-win32.win32.x86_64\eclipse-escet-v5.0\workspace\CIFBenchmarks-5.0.0.v20241003-060816\swarm\swarm_aggregation.cif&quot;: " startLine="26" endOffset="1103" startColumn="5" endLine="26" endColumn="11" startOffset="1097" location="C:\Users\rober\Downloads\eclipse-escet-v5.0-win32.win32.x86_64\eclipse-escet-v5.0\workspace\CIFBenchmarks-5.0.0.v20241003-060816\swarm\swarm_aggregation.cif"/>
        </type>
      </initials>
      <edges xmi:type="automata:Edge" xmi:id="19">
        <position xmi:type="position:Position" xmi:id="20" source="File &quot;C:\Users\rober\Downloads\eclipse-escet-v5.0-win32.win32.x86_64\eclipse-escet-v5.0\workspace\CIFBenchmarks-5.0.0.v20241003-060816\swarm\swarm_aggregation.cif&quot;: " startLine="27" endOffset="1121" startColumn="5" endLine="27" endColumn="8" startOffset="1118" location="C:\Users\rober\Downloads\eclipse-escet-v5.0-win32.win32.x86_64\eclipse-escet-v5.0\workspace\CIFBenchmarks-5.0.0.v20241003-060816\swarm\swarm_aggregation.cif"/>
        <events xmi:type="automata:EdgeEvent" xmi:id="21">
          <position xmi:type="position:Position" xmi:id="22" source="File &quot;C:\Users\rober\Downloads\eclipse-escet-v5.0-win32.win32.x86_64\eclipse-escet-v5.0\workspace\CIFBenchmarks-5.0.0.v20241003-060816\swarm\swarm_aggregation.cif&quot;: " startLine="27" endOffset="1124" startColumn="10" endLine="27" endColumn="11" startOffset="1123" location="C:\Users\rober\Downloads\eclipse-escet-v5.0-win32.win32.x86_64\eclipse-escet-v5.0\workspace\CIFBenchmarks-5.0.0.v20241003-060816\swarm\swarm_aggregation.cif"/>
          <event xmi:type="expressions:EventExpression" xmi:id="23" event="3">
            <position xmi:type="position:Position" xmi:id="24" source="File &quot;C:\Users\rober\Downloads\eclipse-escet-v5.0-win32.win32.x86_64\eclipse-escet-v5.0\workspace\CIFBenchmarks-5.0.0.v20241003-060816\swarm\swarm_aggregation.cif&quot;: " startLine="27" endOffset="1124" startColumn="10" endLine="27" endColumn="11" startOffset="1123" location="C:\Users\rober\Downloads\eclipse-escet-v5.0-win32.win32.x86_64\eclipse-escet-v5.0\workspace\CIFBenchmarks-5.0.0.v20241003-060816\swarm\swarm_aggregation.cif"/>
            <type xmi:type="types:BoolType" xmi:id="25">
              <position xmi:type="position:Position" xmi:id="26" source="File &quot;C:\Users\rober\Downloads\eclipse-escet-v5.0-win32.win32.x86_64\eclipse-escet-v5.0\workspace\CIFBenchmarks-5.0.0.v20241003-060816\swarm\swarm_aggregation.cif&quot;: " startLine="27" endOffset="1124" startColumn="10" endLine="27" endColumn="11" startOffset="1123" location="C:\Users\rober\Downloads\eclipse-escet-v5.0-win32.win32.x86_64\eclipse-escet-v5.0\workspace\CIFBenchmarks-5.0.0.v20241003-060816\swarm\swarm_aggregation.cif"/>
            </type>
          </event>
        </events>
        <events xmi:type="automata:EdgeEvent" xmi:id="27">
          <position xmi:type="position:Position" xmi:id="28" source="File &quot;C:\Users\rober\Downloads\eclipse-escet-v5.0-win32.win32.x86_64\eclipse-escet-v5.0\workspace\CIFBenchmarks-5.0.0.v20241003-060816\swarm\swarm_aggregation.cif&quot;: " startLine="27" endOffset="1128" startColumn="14" endLine="27" endColumn="15" startOffset="1127" location="C:\Users\rober\Downloads\eclipse-escet-v5.0-win32.win32.x86_64\eclipse-escet-v5.0\workspace\CIFBenchmarks-5.0.0.v20241003-060816\swarm\swarm_aggregation.cif"/>
          <event xmi:type="expressions:EventExpression" xmi:id="29" event="5">
            <position xmi:type="position:Position" xmi:id="30" source="File &quot;C:\Users\rober\Downloads\eclipse-escet-v5.0-win32.win32.x86_64\eclipse-escet-v5.0\workspace\CIFBenchmarks-5.0.0.v20241003-060816\swarm\swarm_aggregation.cif&quot;: " startLine="27" endOffset="1128" startColumn="14" endLine="27" endColumn="15" startOffset="1127" location="C:\Users\rober\Downloads\eclipse-escet-v5.0-win32.win32.x86_64\eclipse-escet-v5.0\workspace\CIFBenchmarks-5.0.0.v20241003-060816\swarm\swarm_aggregation.cif"/>
            <type xmi:type="types:BoolType" xmi:id="31">
              <position xmi:type="position:Position" xmi:id="32" source="File &quot;C:\Users\rober\Downloads\eclipse-escet-v5.0-win32.win32.x86_64\eclipse-escet-v5.0\workspace\CIFBenchmarks-5.0.0.v20241003-060816\swarm\swarm_aggregation.cif&quot;: " startLine="27" endOffset="1128" startColumn="14" endLine="27" endColumn="15" startOffset="1127" location="C:\Users\rober\Downloads\eclipse-escet-v5.0-win32.win32.x86_64\eclipse-escet-v5.0\workspace\CIFBenchmarks-5.0.0.v20241003-060816\swarm\swarm_aggregation.cif"/>
            </type>
          </event>
        </events>
      </edges>
      <markeds xmi:type="expressions:BoolExpression" xmi:id="33" value="true">
        <position xmi:type="position:Position" xmi:id="34" source="File &quot;C:\Users\rober\Downloads\eclipse-escet-v5.0-win32.win32.x86_64\eclipse-escet-v5.0\workspace\CIFBenchmarks-5.0.0.v20241003-060816\swarm\swarm_aggregation.cif&quot;: " startLine="26" endOffset="1111" startColumn="14" endLine="26" endColumn="19" startOffset="1106" location="C:\Users\rober\Downloads\eclipse-escet-v5.0-win32.win32.x86_64\eclipse-escet-v5.0\workspace\CIFBenchmarks-5.0.0.v20241003-060816\swarm\swarm_aggregation.cif"/>
        <type xmi:type="types:BoolType" xmi:id="35">
          <position xmi:type="position:Position" xmi:id="36" source="File &quot;C:\Users\rober\Downloads\eclipse-escet-v5.0-win32.win32.x86_64\eclipse-escet-v5.0\workspace\CIFBenchmarks-5.0.0.v20241003-060816\swarm\swarm_aggregation.cif&quot;: " startLine="26" endOffset="1111" startColumn="14" endLine="26" endColumn="19" startOffset="1106" location="C:\Users\rober\Downloads\eclipse-escet-v5.0-win32.win32.x86_64\eclipse-escet-v5.0\workspace\CIFBenchmarks-5.0.0.v20241003-060816\swarm\swarm_aggregation.cif"/>
        </type>
      </markeds>
    </locations>
  </components>
  <components xmi:type="automata:Automaton" xmi:id="37" name="Movement" kind="Plant">
    <position xmi:type="position:Position" xmi:id="38" source="File &quot;C:\Users\rober\Downloads\eclipse-escet-v5.0-win32.win32.x86_64\eclipse-escet-v5.0\workspace\CIFBenchmarks-5.0.0.v20241003-060816\swarm\swarm_aggregation.cif&quot;: " startLine="32" endOffset="1171" startColumn="7" endLine="32" endColumn="14" startOffset="1164" location="C:\Users\rober\Downloads\eclipse-escet-v5.0-win32.win32.x86_64\eclipse-escet-v5.0\workspace\CIFBenchmarks-5.0.0.v20241003-060816\swarm\swarm_aggregation.cif"/>
    <locations xmi:type="automata:Location" xmi:id="39" name="q1">
      <position xmi:type="position:Position" xmi:id="40" source="File &quot;C:\Users\rober\Downloads\eclipse-escet-v5.0-win32.win32.x86_64\eclipse-escet-v5.0\workspace\CIFBenchmarks-5.0.0.v20241003-060816\swarm\swarm_aggregation.cif&quot;: " startLine="33" endOffset="1193" startColumn="12" endLine="33" endColumn="13" startOffset="1192" location="C:\Users\rober\Downloads\eclipse-escet-v5.0-win32.win32.x86_64\eclipse-escet-v5.0\workspace\CIFBenchmarks-5.0.0.v20241003-060816\swarm\swarm_aggregation.cif"/>
      <initials xmi:type="expressions:BoolExpression" xmi:id="41" value="true">
        <position xmi:type="position:Position" xmi:id="42" source="File &quot;C:\Users\rober\Downloads\eclipse-escet-v5.0-win32.win32.x86_64\eclipse-escet-v5.0\workspace\CIFBenchmarks-5.0.0.v20241003-060816\swarm\swarm_aggregation.cif&quot;: " startLine="34" endOffset="1206" startColumn="5" endLine="34" endColumn="11" startOffset="1200" location="C:\Users\rober\Downloads\eclipse-escet-v5.0-win32.win32.x86_64\eclipse-escet-v5.0\workspace\CIFBenchmarks-5.0.0.v20241003-060816\swarm\swarm_aggregation.cif"/>
        <type xmi:type="types:BoolType" xmi:id="43">
          <position xmi:type="position:Position" xmi:id="44" source="File &quot;C:\Users\rober\Downloads\eclipse-escet-v5.0-win32.win32.x86_64\eclipse-escet-v5.0\workspace\CIFBenchmarks-5.0.0.v20241003-060816\swarm\swarm_aggregation.cif&quot;: " startLine="34" endOffset="1206" startColumn="5" endLine="34" endColumn="11" startOffset="1200" location="C:\Users\rober\Downloads\eclipse-escet-v5.0-win32.win32.x86_64\eclipse-escet-v5.0\workspace\CIFBenchmarks-5.0.0.v20241003-060816\swarm\swarm_aggregation.cif"/>
        </type>
      </initials>
      <edges xmi:type="automata:Edge" xmi:id="45">
        <position xmi:type="position:Position" xmi:id="46" source="File &quot;C:\Users\rober\Downloads\eclipse-escet-v5.0-win32.win32.x86_64\eclipse-escet-v5.0\workspace\CIFBenchmarks-5.0.0.v20241003-060816\swarm\swarm_aggregation.cif&quot;: " startLine="35" endOffset="1224" startColumn="5" endLine="35" endColumn="8" startOffset="1221" location="C:\Users\rober\Downloads\eclipse-escet-v5.0-win32.win32.x86_64\eclipse-escet-v5.0\workspace\CIFBenchmarks-5.0.0.v20241003-060816\swarm\swarm_aggregation.cif"/>
        <events xmi:type="automata:EdgeEvent" xmi:id="47">
          <position xmi:type="position:Position" xmi:id="48" source="File &quot;C:\Users\rober\Downloads\eclipse-escet-v5.0-win32.win32.x86_64\eclipse-escet-v5.0\workspace\CIFBenchmarks-5.0.0.v20241003-060816\swarm\swarm_aggregation.cif&quot;: " startLine="35" endOffset="1227" startColumn="10" endLine="35" endColumn="11" startOffset="1226" location="C:\Users\rober\Downloads\eclipse-escet-v5.0-win32.win32.x86_64\eclipse-escet-v5.0\workspace\CIFBenchmarks-5.0.0.v20241003-060816\swarm\swarm_aggregation.cif"/>
          <event xmi:type="expressions:EventExpression" xmi:id="49" event="7">
            <position xmi:type="position:Position" xmi:id="50" source="File &quot;C:\Users\rober\Downloads\eclipse-escet-v5.0-win32.win32.x86_64\eclipse-escet-v5.0\workspace\CIFBenchmarks-5.0.0.v20241003-060816\swarm\swarm_aggregation.cif&quot;: " startLine="35" endOffset="1227" startColumn="10" endLine="35" endColumn="11" startOffset="1226" location="C:\Users\rober\Downloads\eclipse-escet-v5.0-win32.win32.x86_64\eclipse-escet-v5.0\workspace\CIFBenchmarks-5.0.0.v20241003-060816\swarm\swarm_aggregation.cif"/>
            <type xmi:type="types:BoolType" xmi:id="51">
              <position xmi:type="position:Position" xmi:id="52" source="File &quot;C:\Users\rober\Downloads\eclipse-escet-v5.0-win32.win32.x86_64\eclipse-escet-v5.0\workspace\CIFBenchmarks-5.0.0.v20241003-060816\swarm\swarm_aggregation.cif&quot;: " startLine="35" endOffset="1227" startColumn="10" endLine="35" endColumn="11" startOffset="1226" location="C:\Users\rober\Downloads\eclipse-escet-v5.0-win32.win32.x86_64\eclipse-escet-v5.0\workspace\CIFBenchmarks-5.0.0.v20241003-060816\swarm\swarm_aggregation.cif"/>
            </type>
          </event>
        </events>
        <events xmi:type="automata:EdgeEvent" xmi:id="53">
          <position xmi:type="position:Position" xmi:id="54" source="File &quot;C:\Users\rober\Downloads\eclipse-escet-v5.0-win32.win32.x86_64\eclipse-escet-v5.0\workspace\CIFBenchmarks-5.0.0.v20241003-060816\swarm\swarm_aggregation.cif&quot;: " startLine="35" endOffset="1231" startColumn="14" endLine="35" endColumn="15" startOffset="1230" location="C:\Users\rober\Downloads\eclipse-escet-v5.0-win32.win32.x86_64\eclipse-escet-v5.0\workspace\CIFBenchmarks-5.0.0.v20241003-060816\swarm\swarm_aggregation.cif"/>
          <event xmi:type="expressions:EventExpression" xmi:id="55" event="9">
            <position xmi:type="position:Position" xmi:id="56" source="File &quot;C:\Users\rober\Downloads\eclipse-escet-v5.0-win32.win32.x86_64\eclipse-escet-v5.0\workspace\CIFBenchmarks-5.0.0.v20241003-060816\swarm\swarm_aggregation.cif&quot;: " startLine="35" endOffset="1231" startColumn="14" endLine="35" endColumn="15" startOffset="1230" location="C:\Users\rober\Downloads\eclipse-escet-v5.0-win32.win32.x86_64\eclipse-escet-v5.0\workspace\CIFBenchmarks-5.0.0.v20241003-060816\swarm\swarm_aggregation.cif"/>
            <type xmi:type="types:BoolType" xmi:id="57">
              <position xmi:type="position:Position" xmi:id="58" source="File &quot;C:\Users\rober\Downloads\eclipse-escet-v5.0-win32.win32.x86_64\eclipse-escet-v5.0\workspace\CIFBenchmarks-5.0.0.v20241003-060816\swarm\swarm_aggregation.cif&quot;: " startLine="35" endOffset="1231" startColumn="14" endLine="35" endColumn="15" startOffset="1230" location="C:\Users\rober\Downloads\eclipse-escet-v5.0-win32.win32.x86_64\eclipse-escet-v5.0\workspace\CIFBenchmarks-5.0.0.v20241003-060816\swarm\swarm_aggregation.cif"/>
            </type>
          </event>
        </events>
      </edges>
      <markeds xmi:type="expressions:BoolExpression" xmi:id="59" value="true">
        <position xmi:type="position:Position" xmi:id="60" source="File &quot;C:\Users\rober\Downloads\eclipse-escet-v5.0-win32.win32.x86_64\eclipse-escet-v5.0\workspace\CIFBenchmarks-5.0.0.v20241003-060816\swarm\swarm_aggregation.cif&quot;: " startLine="34" endOffset="1214" startColumn="14" endLine="34" endColumn="19" startOffset="1209" location="C:\Users\rober\Downloads\eclipse-escet-v5.0-win32.win32.x86_64\eclipse-escet-v5.0\workspace\CIFBenchmarks-5.0.0.v20241003-060816\swarm\swarm_aggregation.cif"/>
        <type xmi:type="types:BoolType" xmi:id="61">
          <position xmi:type="position:Position" xmi:id="62" source="File &quot;C:\Users\rober\Downloads\eclipse-escet-v5.0-win32.win32.x86_64\eclipse-escet-v5.0\workspace\CIFBenchmarks-5.0.0.v20241003-060816\swarm\swarm_aggregation.cif&quot;: " startLine="34" endOffset="1214" startColumn="14" endLine="34" endColumn="19" startOffset="1209" location="C:\Users\rober\Downloads\eclipse-escet-v5.0-win32.win32.x86_64\eclipse-escet-v5.0\workspace\CIFBenchmarks-5.0.0.v20241003-060816\swarm\swarm_aggregation.cif"/>
        </type>
      </markeds>
    </locations>
  </components>
  <components xmi:type="automata:Automaton" xmi:id="63" name="NoRobotPerceived" kind="Requirement">
    <position xmi:type="position:Position" xmi:id="64" source="File &quot;C:\Users\rober\Downloads\eclipse-escet-v5.0-win32.win32.x86_64\eclipse-escet-v5.0\workspace\CIFBenchmarks-5.0.0.v20241003-060816\swarm\swarm_aggregation.cif&quot;: " startLine="40" endOffset="1284" startColumn="13" endLine="40" endColumn="28" startOffset="1269" location="C:\Users\rober\Downloads\eclipse-escet-v5.0-win32.win32.x86_64\eclipse-escet-v5.0\workspace\CIFBenchmarks-5.0.0.v20241003-060816\swarm\swarm_aggregation.cif"/>
    <locations xmi:type="automata:Location" xmi:id="65" name="q1">
      <position xmi:type="position:Position" xmi:id="66" source="File &quot;C:\Users\rober\Downloads\eclipse-escet-v5.0-win32.win32.x86_64\eclipse-escet-v5.0\workspace\CIFBenchmarks-5.0.0.v20241003-060816\swarm\swarm_aggregation.cif&quot;: " startLine="41" endOffset="1306" startColumn="12" endLine="41" endColumn="13" startOffset="1305" location="C:\Users\rober\Downloads\eclipse-escet-v5.0-win32.win32.x86_64\eclipse-escet-v5.0\workspace\CIFBenchmarks-5.0.0.v20241003-060816\swarm\swarm_aggregation.cif"/>
      <initials xmi:type="expressions:BoolExpression" xmi:id="67" value="true">
        <position xmi:type="position:Position" xmi:id="68" source="File &quot;C:\Users\rober\Downloads\eclipse-escet-v5.0-win32.win32.x86_64\eclipse-escet-v5.0\workspace\CIFBenchmarks-5.0.0.v20241003-060816\swarm\swarm_aggregation.cif&quot;: " startLine="42" endOffset="1319" startColumn="5" endLine="42" endColumn="11" startOffset="1313" location="C:\Users\rober\Downloads\eclipse-escet-v5.0-win32.win32.x86_64\eclipse-escet-v5.0\workspace\CIFBenchmarks-5.0.0.v20241003-060816\swarm\swarm_aggregation.cif"/>
        <type xmi:type="types:BoolType" xmi:id="69">
          <position xmi:type="position:Position" xmi:id="70" source="File &quot;C:\Users\rober\Downloads\eclipse-escet-v5.0-win32.win32.x86_64\eclipse-escet-v5.0\workspace\CIFBenchmarks-5.0.0.v20241003-060816\swarm\swarm_aggregation.cif&quot;: " startLine="42" endOffset="1319" startColumn="5" endLine="42" endColumn="11" startOffset="1313" location="C:\Users\rober\Downloads\eclipse-escet-v5.0-win32.win32.x86_64\eclipse-escet-v5.0\workspace\CIFBenchmarks-5.0.0.v20241003-060816\swarm\swarm_aggregation.cif"/>
        </type>
      </initials>
      <edges xmi:type="automata:Edge" xmi:id="71" target="91">
        <position xmi:type="position:Position" xmi:id="72" source="File &quot;C:\Users\rober\Downloads\eclipse-escet-v5.0-win32.win32.x86_64\eclipse-escet-v5.0\workspace\CIFBenchmarks-5.0.0.v20241003-060816\swarm\swarm_aggregation.cif&quot;: " startLine="43" endOffset="1337" startColumn="5" endLine="43" endColumn="8" startOffset="1334" location="C:\Users\rober\Downloads\eclipse-escet-v5.0-win32.win32.x86_64\eclipse-escet-v5.0\workspace\CIFBenchmarks-5.0.0.v20241003-060816\swarm\swarm_aggregation.cif"/>
        <events xmi:type="automata:EdgeEvent" xmi:id="73">
          <position xmi:type="position:Position" xmi:id="74" source="File &quot;C:\Users\rober\Downloads\eclipse-escet-v5.0-win32.win32.x86_64\eclipse-escet-v5.0\workspace\CIFBenchmarks-5.0.0.v20241003-060816\swarm\swarm_aggregation.cif&quot;: " startLine="43" endOffset="1340" startColumn="10" endLine="43" endColumn="11" startOffset="1339" location="C:\Users\rober\Downloads\eclipse-escet-v5.0-win32.win32.x86_64\eclipse-escet-v5.0\workspace\CIFBenchmarks-5.0.0.v20241003-060816\swarm\swarm_aggregation.cif"/>
          <event xmi:type="expressions:EventExpression" xmi:id="75" event="3">
            <position xmi:type="position:Position" xmi:id="76" source="File &quot;C:\Users\rober\Downloads\eclipse-escet-v5.0-win32.win32.x86_64\eclipse-escet-v5.0\workspace\CIFBenchmarks-5.0.0.v20241003-060816\swarm\swarm_aggregation.cif&quot;: " startLine="43" endOffset="1340" startColumn="10" endLine="43" endColumn="11" startOffset="1339" location="C:\Users\rober\Downloads\eclipse-escet-v5.0-win32.win32.x86_64\eclipse-escet-v5.0\workspace\CIFBenchmarks-5.0.0.v20241003-060816\swarm\swarm_aggregation.cif"/>
            <type xmi:type="types:BoolType" xmi:id="77">
              <position xmi:type="position:Position" xmi:id="78" source="File &quot;C:\Users\rober\Downloads\eclipse-escet-v5.0-win32.win32.x86_64\eclipse-escet-v5.0\workspace\CIFBenchmarks-5.0.0.v20241003-060816\swarm\swarm_aggregation.cif&quot;: " startLine="43" endOffset="1340" startColumn="10" endLine="43" endColumn="11" startOffset="1339" location="C:\Users\rober\Downloads\eclipse-escet-v5.0-win32.win32.x86_64\eclipse-escet-v5.0\workspace\CIFBenchmarks-5.0.0.v20241003-060816\swarm\swarm_aggregation.cif"/>
            </type>
          </event>
        </events>
      </edges>
      <edges xmi:type="automata:Edge" xmi:id="79">
        <position xmi:type="position:Position" xmi:id="80" source="File &quot;C:\Users\rober\Downloads\eclipse-escet-v5.0-win32.win32.x86_64\eclipse-escet-v5.0\workspace\CIFBenchmarks-5.0.0.v20241003-060816\swarm\swarm_aggregation.cif&quot;: " startLine="44" endOffset="1358" startColumn="5" endLine="44" endColumn="8" startOffset="1355" location="C:\Users\rober\Downloads\eclipse-escet-v5.0-win32.win32.x86_64\eclipse-escet-v5.0\workspace\CIFBenchmarks-5.0.0.v20241003-060816\swarm\swarm_aggregation.cif"/>
        <events xmi:type="automata:EdgeEvent" xmi:id="81">
          <position xmi:type="position:Position" xmi:id="82" source="File &quot;C:\Users\rober\Downloads\eclipse-escet-v5.0-win32.win32.x86_64\eclipse-escet-v5.0\workspace\CIFBenchmarks-5.0.0.v20241003-060816\swarm\swarm_aggregation.cif&quot;: " startLine="44" endOffset="1361" startColumn="10" endLine="44" endColumn="11" startOffset="1360" location="C:\Users\rober\Downloads\eclipse-escet-v5.0-win32.win32.x86_64\eclipse-escet-v5.0\workspace\CIFBenchmarks-5.0.0.v20241003-060816\swarm\swarm_aggregation.cif"/>
          <event xmi:type="expressions:EventExpression" xmi:id="83" event="5">
            <position xmi:type="position:Position" xmi:id="84" source="File &quot;C:\Users\rober\Downloads\eclipse-escet-v5.0-win32.win32.x86_64\eclipse-escet-v5.0\workspace\CIFBenchmarks-5.0.0.v20241003-060816\swarm\swarm_aggregation.cif&quot;: " startLine="44" endOffset="1361" startColumn="10" endLine="44" endColumn="11" startOffset="1360" location="C:\Users\rober\Downloads\eclipse-escet-v5.0-win32.win32.x86_64\eclipse-escet-v5.0\workspace\CIFBenchmarks-5.0.0.v20241003-060816\swarm\swarm_aggregation.cif"/>
            <type xmi:type="types:BoolType" xmi:id="85">
              <position xmi:type="position:Position" xmi:id="86" source="File &quot;C:\Users\rober\Downloads\eclipse-escet-v5.0-win32.win32.x86_64\eclipse-escet-v5.0\workspace\CIFBenchmarks-5.0.0.v20241003-060816\swarm\swarm_aggregation.cif&quot;: " startLine="44" endOffset="1361" startColumn="10" endLine="44" endColumn="11" startOffset="1360" location="C:\Users\rober\Downloads\eclipse-escet-v5.0-win32.win32.x86_64\eclipse-escet-v5.0\workspace\CIFBenchmarks-5.0.0.v20241003-060816\swarm\swarm_aggregation.cif"/>
            </type>
          </event>
        </events>
      </edges>
      <markeds xmi:type="expressions:BoolExpression" xmi:id="87" value="true">
        <position xmi:type="position:Position" xmi:id="88" source="File &quot;C:\Users\rober\Downloads\eclipse-escet-v5.0-win32.win32.x86_64\eclipse-escet-v5.0\workspace\CIFBenchmarks-5.0.0.v20241003-060816\swarm\swarm_aggregation.cif&quot;: " startLine="42" endOffset="1327" startColumn="14" endLine="42" endColumn="19" startOffset="1322" location="C:\Users\rober\Downloads\eclipse-escet-v5.0-win32.win32.x86_64\eclipse-escet-v5.0\workspace\CIFBenchmarks-5.0.0.v20241003-060816\swarm\swarm_aggregation.cif"/>
        <type xmi:type="types:BoolType" xmi:id="89">
          <position xmi:type="position:Position" xmi:id="90" source="File &quot;C:\Users\rober\Downloads\eclipse-escet-v5.0-win32.win32.x86_64\eclipse-escet-v5.0\workspace\CIFBenchmarks-5.0.0.v20241003-060816\swarm\swarm_aggregation.cif&quot;: " startLine="42" endOffset="1327" startColumn="14" endLine="42" endColumn="19" startOffset="1322" location="C:\Users\rober\Downloads\eclipse-escet-v5.0-win32.win32.x86_64\eclipse-escet-v5.0\workspace\CIFBenchmarks-5.0.0.v20241003-060816\swarm\swarm_aggregation.cif"/>
        </type>
      </markeds>
    </locations>
    <locations xmi:type="automata:Location" xmi:id="91" name="q2">
      <position xmi:type="position:Position" xmi:id="92" source="File &quot;C:\Users\rober\Downloads\eclipse-escet-v5.0-win32.win32.x86_64\eclipse-escet-v5.0\workspace\CIFBenchmarks-5.0.0.v20241003-060816\swarm\swarm_aggregation.cif&quot;: " startLine="46" endOffset="1377" startColumn="12" endLine="46" endColumn="13" startOffset="1376" location="C:\Users\rober\Downloads\eclipse-escet-v5.0-win32.win32.x86_64\eclipse-escet-v5.0\workspace\CIFBenchmarks-5.0.0.v20241003-060816\swarm\swarm_aggregation.cif"/>
      <edges xmi:type="automata:Edge" xmi:id="93" target="65">
        <position xmi:type="position:Position" xmi:id="94" source="File &quot;C:\Users\rober\Downloads\eclipse-escet-v5.0-win32.win32.x86_64\eclipse-escet-v5.0\workspace\CIFBenchmarks-5.0.0.v20241003-060816\swarm\swarm_aggregation.cif&quot;: " startLine="48" endOffset="1399" startColumn="5" endLine="48" endColumn="8" startOffset="1396" location="C:\Users\rober\Downloads\eclipse-escet-v5.0-win32.win32.x86_64\eclipse-escet-v5.0\workspace\CIFBenchmarks-5.0.0.v20241003-060816\swarm\swarm_aggregation.cif"/>
        <events xmi:type="automata:EdgeEvent" xmi:id="95">
          <position xmi:type="position:Position" xmi:id="96" source="File &quot;C:\Users\rober\Downloads\eclipse-escet-v5.0-win32.win32.x86_64\eclipse-escet-v5.0\workspace\CIFBenchmarks-5.0.0.v20241003-060816\swarm\swarm_aggregation.cif&quot;: " startLine="48" endOffset="1402" startColumn="10" endLine="48" endColumn="11" startOffset="1401" location="C:\Users\rober\Downloads\eclipse-escet-v5.0-win32.win32.x86_64\eclipse-escet-v5.0\workspace\CIFBenchmarks-5.0.0.v20241003-060816\swarm\swarm_aggregation.cif"/>
          <event xmi:type="expressions:EventExpression" xmi:id="97" event="5">
            <position xmi:type="position:Position" xmi:id="98" source="File &quot;C:\Users\rober\Downloads\eclipse-escet-v5.0-win32.win32.x86_64\eclipse-escet-v5.0\workspace\CIFBenchmarks-5.0.0.v20241003-060816\swarm\swarm_aggregation.cif&quot;: " startLine="48" endOffset="1402" startColumn="10" endLine="48" endColumn="11" startOffset="1401" location="C:\Users\rober\Downloads\eclipse-escet-v5.0-win32.win32.x86_64\eclipse-escet-v5.0\workspace\CIFBenchmarks-5.0.0.v20241003-060816\swarm\swarm_aggregation.cif"/>
            <type xmi:type="types:BoolType" xmi:id="99">
              <position xmi:type="position:Position" xmi:id="100" source="File &quot;C:\Users\rober\Downloads\eclipse-escet-v5.0-win32.win32.x86_64\eclipse-escet-v5.0\workspace\CIFBenchmarks-5.0.0.v20241003-060816\swarm\swarm_aggregation.cif&quot;: " startLine="48" endOffset="1402" startColumn="10" endLine="48" endColumn="11" startOffset="1401" location="C:\Users\rober\Downloads\eclipse-escet-v5.0-win32.win32.x86_64\eclipse-escet-v5.0\workspace\CIFBenchmarks-5.0.0.v20241003-060816\swarm\swarm_aggregation.cif"/>
            </type>
          </event>
        </events>
      </edges>
      <edges xmi:type="automata:Edge" xmi:id="101" target="65">
        <position xmi:type="position:Position" xmi:id="102" source="File &quot;C:\Users\rober\Downloads\eclipse-escet-v5.0-win32.win32.x86_64\eclipse-escet-v5.0\workspace\CIFBenchmarks-5.0.0.v20241003-060816\swarm\swarm_aggregation.cif&quot;: " startLine="49" endOffset="1420" startColumn="5" endLine="49" endColumn="8" startOffset="1417" location="C:\Users\rober\Downloads\eclipse-escet-v5.0-win32.win32.x86_64\eclipse-escet-v5.0\workspace\CIFBenchmarks-5.0.0.v20241003-060816\swarm\swarm_aggregation.cif"/>
        <events xmi:type="automata:EdgeEvent" xmi:id="103">
          <position xmi:type="position:Position" xmi:id="104" source="File &quot;C:\Users\rober\Downloads\eclipse-escet-v5.0-win32.win32.x86_64\eclipse-escet-v5.0\workspace\CIFBenchmarks-5.0.0.v20241003-060816\swarm\swarm_aggregation.cif&quot;: " startLine="49" endOffset="1423" startColumn="10" endLine="49" endColumn="11" startOffset="1422" location="C:\Users\rober\Downloads\eclipse-escet-v5.0-win32.win32.x86_64\eclipse-escet-v5.0\workspace\CIFBenchmarks-5.0.0.v20241003-060816\swarm\swarm_aggregation.cif"/>
          <event xmi:type="expressions:EventExpression" xmi:id="105" event="7">
            <position xmi:type="position:Position" xmi:id="106" source="File &quot;C:\Users\rober\Downloads\eclipse-escet-v5.0-win32.win32.x86_64\eclipse-escet-v5.0\workspace\CIFBenchmarks-5.0.0.v20241003-060816\swarm\swarm_aggregation.cif&quot;: " startLine="49" endOffset="1423" startColumn="10" endLine="49" endColumn="11" startOffset="1422" location="C:\Users\rober\Downloads\eclipse-escet-v5.0-win32.win32.x86_64\eclipse-escet-v5.0\workspace\CIFBenchmarks-5.0.0.v20241003-060816\swarm\swarm_aggregation.cif"/>
            <type xmi:type="types:BoolType" xmi:id="107">
              <position xmi:type="position:Position" xmi:id="108" source="File &quot;C:\Users\rober\Downloads\eclipse-escet-v5.0-win32.win32.x86_64\eclipse-escet-v5.0\workspace\CIFBenchmarks-5.0.0.v20241003-060816\swarm\swarm_aggregation.cif&quot;: " startLine="49" endOffset="1423" startColumn="10" endLine="49" endColumn="11" startOffset="1422" location="C:\Users\rober\Downloads\eclipse-escet-v5.0-win32.win32.x86_64\eclipse-escet-v5.0\workspace\CIFBenchmarks-5.0.0.v20241003-060816\swarm\swarm_aggregation.cif"/>
            </type>
          </event>
        </events>
      </edges>
      <edges xmi:type="automata:Edge" xmi:id="109">
        <position xmi:type="position:Position" xmi:id="110" source="File &quot;C:\Users\rober\Downloads\eclipse-escet-v5.0-win32.win32.x86_64\eclipse-escet-v5.0\workspace\CIFBenchmarks-5.0.0.v20241003-060816\swarm\swarm_aggregation.cif&quot;: " startLine="50" endOffset="1441" startColumn="5" endLine="50" endColumn="8" startOffset="1438" location="C:\Users\rober\Downloads\eclipse-escet-v5.0-win32.win32.x86_64\eclipse-escet-v5.0\workspace\CIFBenchmarks-5.0.0.v20241003-060816\swarm\swarm_aggregation.cif"/>
        <events xmi:type="automata:EdgeEvent" xmi:id="111">
          <position xmi:type="position:Position" xmi:id="112" source="File &quot;C:\Users\rober\Downloads\eclipse-escet-v5.0-win32.win32.x86_64\eclipse-escet-v5.0\workspace\CIFBenchmarks-5.0.0.v20241003-060816\swarm\swarm_aggregation.cif&quot;: " startLine="50" endOffset="1444" startColumn="10" endLine="50" endColumn="11" startOffset="1443" location="C:\Users\rober\Downloads\eclipse-escet-v5.0-win32.win32.x86_64\eclipse-escet-v5.0\workspace\CIFBenchmarks-5.0.0.v20241003-060816\swarm\swarm_aggregation.cif"/>
          <event xmi:type="expressions:EventExpression" xmi:id="113" event="3">
            <position xmi:type="position:Position" xmi:id="114" source="File &quot;C:\Users\rober\Downloads\eclipse-escet-v5.0-win32.win32.x86_64\eclipse-escet-v5.0\workspace\CIFBenchmarks-5.0.0.v20241003-060816\swarm\swarm_aggregation.cif&quot;: " startLine="50" endOffset="1444" startColumn="10" endLine="50" endColumn="11" startOffset="1443" location="C:\Users\rober\Downloads\eclipse-escet-v5.0-win32.win32.x86_64\eclipse-escet-v5.0\workspace\CIFBenchmarks-5.0.0.v20241003-060816\swarm\swarm_aggregation.cif"/>
            <type xmi:type="types:BoolType" xmi:id="115">
              <position xmi:type="position:Position" xmi:id="116" source="File &quot;C:\Users\rober\Downloads\eclipse-escet-v5.0-win32.win32.x86_64\eclipse-escet-v5.0\workspace\CIFBenchmarks-5.0.0.v20241003-060816\swarm\swarm_aggregation.cif&quot;: " startLine="50" endOffset="1444" startColumn="10" endLine="50" endColumn="11" startOffset="1443" location="C:\Users\rober\Downloads\eclipse-escet-v5.0-win32.win32.x86_64\eclipse-escet-v5.0\workspace\CIFBenchmarks-5.0.0.v20241003-060816\swarm\swarm_aggregation.cif"/>
            </type>
          </event>
        </events>
      </edges>
      <markeds xmi:type="expressions:BoolExpression" xmi:id="117" value="true">
        <position xmi:type="position:Position" xmi:id="118" source="File &quot;C:\Users\rober\Downloads\eclipse-escet-v5.0-win32.win32.x86_64\eclipse-escet-v5.0\workspace\CIFBenchmarks-5.0.0.v20241003-060816\swarm\swarm_aggregation.cif&quot;: " startLine="47" endOffset="1389" startColumn="5" endLine="47" endColumn="10" startOffset="1384" location="C:\Users\rober\Downloads\eclipse-escet-v5.0-win32.win32.x86_64\eclipse-escet-v5.0\workspace\CIFBenchmarks-5.0.0.v20241003-060816\swarm\swarm_aggregation.cif"/>
        <type xmi:type="types:BoolType" xmi:id="119">
          <position xmi:type="position:Position" xmi:id="120" source="File &quot;C:\Users\rober\Downloads\eclipse-escet-v5.0-win32.win32.x86_64\eclipse-escet-v5.0\workspace\CIFBenchmarks-5.0.0.v20241003-060816\swarm\swarm_aggregation.cif&quot;: " startLine="47" endOffset="1389" startColumn="5" endLine="47" endColumn="10" startOffset="1384" location="C:\Users\rober\Downloads\eclipse-escet-v5.0-win32.win32.x86_64\eclipse-escet-v5.0\workspace\CIFBenchmarks-5.0.0.v20241003-060816\swarm\swarm_aggregation.cif"/>
        </type>
      </markeds>
    </locations>
  </components>
  <components xmi:type="automata:Automaton" xmi:id="121" name="RobotPerceived" kind="Requirement">
    <position xmi:type="position:Position" xmi:id="122" source="File &quot;C:\Users\rober\Downloads\eclipse-escet-v5.0-win32.win32.x86_64\eclipse-escet-v5.0\workspace\CIFBenchmarks-5.0.0.v20241003-060816\swarm\swarm_aggregation.cif&quot;: " startLine="53" endOffset="1477" startColumn="13" endLine="53" endColumn="26" startOffset="1464" location="C:\Users\rober\Downloads\eclipse-escet-v5.0-win32.win32.x86_64\eclipse-escet-v5.0\workspace\CIFBenchmarks-5.0.0.v20241003-060816\swarm\swarm_aggregation.cif"/>
    <locations xmi:type="automata:Location" xmi:id="123" name="q1">
      <position xmi:type="position:Position" xmi:id="124" source="File &quot;C:\Users\rober\Downloads\eclipse-escet-v5.0-win32.win32.x86_64\eclipse-escet-v5.0\workspace\CIFBenchmarks-5.0.0.v20241003-060816\swarm\swarm_aggregation.cif&quot;: " startLine="54" endOffset="1499" startColumn="12" endLine="54" endColumn="13" startOffset="1498" location="C:\Users\rober\Downloads\eclipse-escet-v5.0-win32.win32.x86_64\eclipse-escet-v5.0\workspace\CIFBenchmarks-5.0.0.v20241003-060816\swarm\swarm_aggregation.cif"/>
      <initials xmi:type="expressions:BoolExpression" xmi:id="125" value="true">
        <position xmi:type="position:Position" xmi:id="126" source="File &quot;C:\Users\rober\Downloads\eclipse-escet-v5.0-win32.win32.x86_64\eclipse-escet-v5.0\workspace\CIFBenchmarks-5.0.0.v20241003-060816\swarm\swarm_aggregation.cif&quot;: " startLine="55" endOffset="1512" startColumn="5" endLine="55" endColumn="11" startOffset="1506" location="C:\Users\rober\Downloads\eclipse-escet-v5.0-win32.win32.x86_64\eclipse-escet-v5.0\workspace\CIFBenchmarks-5.0.0.v20241003-060816\swarm\swarm_aggregation.cif"/>
        <type xmi:type="types:BoolType" xmi:id="127">
          <position xmi:type="position:Position" xmi:id="128" source="File &quot;C:\Users\rober\Downloads\eclipse-escet-v5.0-win32.win32.x86_64\eclipse-escet-v5.0\workspace\CIFBenchmarks-5.0.0.v20241003-060816\swarm\swarm_aggregation.cif&quot;: " startLine="55" endOffset="1512" startColumn="5" endLine="55" endColumn="11" startOffset="1506" location="C:\Users\rober\Downloads\eclipse-escet-v5.0-win32.win32.x86_64\eclipse-escet-v5.0\workspace\CIFBenchmarks-5.0.0.v20241003-060816\swarm\swarm_aggregation.cif"/>
        </type>
      </initials>
      <edges xmi:type="automata:Edge" xmi:id="129" target="149">
        <position xmi:type="position:Position" xmi:id="130" source="File &quot;C:\Users\rober\Downloads\eclipse-escet-v5.0-win32.win32.x86_64\eclipse-escet-v5.0\workspace\CIFBenchmarks-5.0.0.v20241003-060816\swarm\swarm_aggregation.cif&quot;: " startLine="56" endOffset="1530" startColumn="5" endLine="56" endColumn="8" startOffset="1527" location="C:\Users\rober\Downloads\eclipse-escet-v5.0-win32.win32.x86_64\eclipse-escet-v5.0\workspace\CIFBenchmarks-5.0.0.v20241003-060816\swarm\swarm_aggregation.cif"/>
        <events xmi:type="automata:EdgeEvent" xmi:id="131">
          <position xmi:type="position:Position" xmi:id="132" source="File &quot;C:\Users\rober\Downloads\eclipse-escet-v5.0-win32.win32.x86_64\eclipse-escet-v5.0\workspace\CIFBenchmarks-5.0.0.v20241003-060816\swarm\swarm_aggregation.cif&quot;: " startLine="56" endOffset="1533" startColumn="10" endLine="56" endColumn="11" startOffset="1532" location="C:\Users\rober\Downloads\eclipse-escet-v5.0-win32.win32.x86_64\eclipse-escet-v5.0\workspace\CIFBenchmarks-5.0.0.v20241003-060816\swarm\swarm_aggregation.cif"/>
          <event xmi:type="expressions:EventExpression" xmi:id="133" event="5">
            <position xmi:type="position:Position" xmi:id="134" source="File &quot;C:\Users\rober\Downloads\eclipse-escet-v5.0-win32.win32.x86_64\eclipse-escet-v5.0\workspace\CIFBenchmarks-5.0.0.v20241003-060816\swarm\swarm_aggregation.cif&quot;: " startLine="56" endOffset="1533" startColumn="10" endLine="56" endColumn="11" startOffset="1532" location="C:\Users\rober\Downloads\eclipse-escet-v5.0-win32.win32.x86_64\eclipse-escet-v5.0\workspace\CIFBenchmarks-5.0.0.v20241003-060816\swarm\swarm_aggregation.cif"/>
            <type xmi:type="types:BoolType" xmi:id="135">
              <position xmi:type="position:Position" xmi:id="136" source="File &quot;C:\Users\rober\Downloads\eclipse-escet-v5.0-win32.win32.x86_64\eclipse-escet-v5.0\workspace\CIFBenchmarks-5.0.0.v20241003-060816\swarm\swarm_aggregation.cif&quot;: " startLine="56" endOffset="1533" startColumn="10" endLine="56" endColumn="11" startOffset="1532" location="C:\Users\rober\Downloads\eclipse-escet-v5.0-win32.win32.x86_64\eclipse-escet-v5.0\workspace\CIFBenchmarks-5.0.0.v20241003-060816\swarm\swarm_aggregation.cif"/>
            </type>
          </event>
        </events>
      </edges>
      <edges xmi:type="automata:Edge" xmi:id="137">
        <position xmi:type="position:Position" xmi:id="138" source="File &quot;C:\Users\rober\Downloads\eclipse-escet-v5.0-win32.win32.x86_64\eclipse-escet-v5.0\workspace\CIFBenchmarks-5.0.0.v20241003-060816\swarm\swarm_aggregation.cif&quot;: " startLine="57" endOffset="1551" startColumn="5" endLine="57" endColumn="8" startOffset="1548" location="C:\Users\rober\Downloads\eclipse-escet-v5.0-win32.win32.x86_64\eclipse-escet-v5.0\workspace\CIFBenchmarks-5.0.0.v20241003-060816\swarm\swarm_aggregation.cif"/>
        <events xmi:type="automata:EdgeEvent" xmi:id="139">
          <position xmi:type="position:Position" xmi:id="140" source="File &quot;C:\Users\rober\Downloads\eclipse-escet-v5.0-win32.win32.x86_64\eclipse-escet-v5.0\workspace\CIFBenchmarks-5.0.0.v20241003-060816\swarm\swarm_aggregation.cif&quot;: " startLine="57" endOffset="1554" startColumn="10" endLine="57" endColumn="11" startOffset="1553" location="C:\Users\rober\Downloads\eclipse-escet-v5.0-win32.win32.x86_64\eclipse-escet-v5.0\workspace\CIFBenchmarks-5.0.0.v20241003-060816\swarm\swarm_aggregation.cif"/>
          <event xmi:type="expressions:EventExpression" xmi:id="141" event="3">
            <position xmi:type="position:Position" xmi:id="142" source="File &quot;C:\Users\rober\Downloads\eclipse-escet-v5.0-win32.win32.x86_64\eclipse-escet-v5.0\workspace\CIFBenchmarks-5.0.0.v20241003-060816\swarm\swarm_aggregation.cif&quot;: " startLine="57" endOffset="1554" startColumn="10" endLine="57" endColumn="11" startOffset="1553" location="C:\Users\rober\Downloads\eclipse-escet-v5.0-win32.win32.x86_64\eclipse-escet-v5.0\workspace\CIFBenchmarks-5.0.0.v20241003-060816\swarm\swarm_aggregation.cif"/>
            <type xmi:type="types:BoolType" xmi:id="143">
              <position xmi:type="position:Position" xmi:id="144" source="File &quot;C:\Users\rober\Downloads\eclipse-escet-v5.0-win32.win32.x86_64\eclipse-escet-v5.0\workspace\CIFBenchmarks-5.0.0.v20241003-060816\swarm\swarm_aggregation.cif&quot;: " startLine="57" endOffset="1554" startColumn="10" endLine="57" endColumn="11" startOffset="1553" location="C:\Users\rober\Downloads\eclipse-escet-v5.0-win32.win32.x86_64\eclipse-escet-v5.0\workspace\CIFBenchmarks-5.0.0.v20241003-060816\swarm\swarm_aggregation.cif"/>
            </type>
          </event>
        </events>
      </edges>
      <markeds xmi:type="expressions:BoolExpression" xmi:id="145" value="true">
        <position xmi:type="position:Position" xmi:id="146" source="File &quot;C:\Users\rober\Downloads\eclipse-escet-v5.0-win32.win32.x86_64\eclipse-escet-v5.0\workspace\CIFBenchmarks-5.0.0.v20241003-060816\swarm\swarm_aggregation.cif&quot;: " startLine="55" endOffset="1520" startColumn="14" endLine="55" endColumn="19" startOffset="1515" location="C:\Users\rober\Downloads\eclipse-escet-v5.0-win32.win32.x86_64\eclipse-escet-v5.0\workspace\CIFBenchmarks-5.0.0.v20241003-060816\swarm\swarm_aggregation.cif"/>
        <type xmi:type="types:BoolType" xmi:id="147">
          <position xmi:type="position:Position" xmi:id="148" source="File &quot;C:\Users\rober\Downloads\eclipse-escet-v5.0-win32.win32.x86_64\eclipse-escet-v5.0\workspace\CIFBenchmarks-5.0.0.v20241003-060816\swarm\swarm_aggregation.cif&quot;: " startLine="55" endOffset="1520" startColumn="14" endLine="55" endColumn="19" startOffset="1515" location="C:\Users\rober\Downloads\eclipse-escet-v5.0-win32.win32.x86_64\eclipse-escet-v5.0\workspace\CIFBenchmarks-5.0.0.v20241003-060816\swarm\swarm_aggregation.cif"/>
        </type>
      </markeds>
    </locations>
    <locations xmi:type="automata:Location" xmi:id="149" name="q2">
      <position xmi:type="position:Position" xmi:id="150" source="File &quot;C:\Users\rober\Downloads\eclipse-escet-v5.0-win32.win32.x86_64\eclipse-escet-v5.0\workspace\CIFBenchmarks-5.0.0.v20241003-060816\swarm\swarm_aggregation.cif&quot;: " startLine="59" endOffset="1570" startColumn="12" endLine="59" endColumn="13" startOffset="1569" location="C:\Users\rober\Downloads\eclipse-escet-v5.0-win32.win32.x86_64\eclipse-escet-v5.0\workspace\CIFBenchmarks-5.0.0.v20241003-060816\swarm\swarm_aggregation.cif"/>
      <edges xmi:type="automata:Edge" xmi:id="151" target="123">
        <position xmi:type="position:Position" xmi:id="152" source="File &quot;C:\Users\rober\Downloads\eclipse-escet-v5.0-win32.win32.x86_64\eclipse-escet-v5.0\workspace\CIFBenchmarks-5.0.0.v20241003-060816\swarm\swarm_aggregation.cif&quot;: " startLine="61" endOffset="1592" startColumn="5" endLine="61" endColumn="8" startOffset="1589" location="C:\Users\rober\Downloads\eclipse-escet-v5.0-win32.win32.x86_64\eclipse-escet-v5.0\workspace\CIFBenchmarks-5.0.0.v20241003-060816\swarm\swarm_aggregation.cif"/>
        <events xmi:type="automata:EdgeEvent" xmi:id="153">
          <position xmi:type="position:Position" xmi:id="154" source="File &quot;C:\Users\rober\Downloads\eclipse-escet-v5.0-win32.win32.x86_64\eclipse-escet-v5.0\workspace\CIFBenchmarks-5.0.0.v20241003-060816\swarm\swarm_aggregation.cif&quot;: " startLine="61" endOffset="1595" startColumn="10" endLine="61" endColumn="11" startOffset="1594" location="C:\Users\rober\Downloads\eclipse-escet-v5.0-win32.win32.x86_64\eclipse-escet-v5.0\workspace\CIFBenchmarks-5.0.0.v20241003-060816\swarm\swarm_aggregation.cif"/>
          <event xmi:type="expressions:EventExpression" xmi:id="155" event="3">
            <position xmi:type="position:Position" xmi:id="156" source="File &quot;C:\Users\rober\Downloads\eclipse-escet-v5.0-win32.win32.x86_64\eclipse-escet-v5.0\workspace\CIFBenchmarks-5.0.0.v20241003-060816\swarm\swarm_aggregation.cif&quot;: " startLine="61" endOffset="1595" startColumn="10" endLine="61" endColumn="11" startOffset="1594" location="C:\Users\rober\Downloads\eclipse-escet-v5.0-win32.win32.x86_64\eclipse-escet-v5.0\workspace\CIFBenchmarks-5.0.0.v20241003-060816\swarm\swarm_aggregation.cif"/>
            <type xmi:type="types:BoolType" xmi:id="157">
              <position xmi:type="position:Position" xmi:id="158" source="File &quot;C:\Users\rober\Downloads\eclipse-escet-v5.0-win32.win32.x86_64\eclipse-escet-v5.0\workspace\CIFBenchmarks-5.0.0.v20241003-060816\swarm\swarm_aggregation.cif&quot;: " startLine="61" endOffset="1595" startColumn="10" endLine="61" endColumn="11" startOffset="1594" location="C:\Users\rober\Downloads\eclipse-escet-v5.0-win32.win32.x86_64\eclipse-escet-v5.0\workspace\CIFBenchmarks-5.0.0.v20241003-060816\swarm\swarm_aggregation.cif"/>
            </type>
          </event>
        </events>
      </edges>
      <edges xmi:type="automata:Edge" xmi:id="159" target="123">
        <position xmi:type="position:Position" xmi:id="160" source="File &quot;C:\Users\rober\Downloads\eclipse-escet-v5.0-win32.win32.x86_64\eclipse-escet-v5.0\workspace\CIFBenchmarks-5.0.0.v20241003-060816\swarm\swarm_aggregation.cif&quot;: " startLine="62" endOffset="1613" startColumn="5" endLine="62" endColumn="8" startOffset="1610" location="C:\Users\rober\Downloads\eclipse-escet-v5.0-win32.win32.x86_64\eclipse-escet-v5.0\workspace\CIFBenchmarks-5.0.0.v20241003-060816\swarm\swarm_aggregation.cif"/>
        <events xmi:type="automata:EdgeEvent" xmi:id="161">
          <position xmi:type="position:Position" xmi:id="162" source="File &quot;C:\Users\rober\Downloads\eclipse-escet-v5.0-win32.win32.x86_64\eclipse-escet-v5.0\workspace\CIFBenchmarks-5.0.0.v20241003-060816\swarm\swarm_aggregation.cif&quot;: " startLine="62" endOffset="1616" startColumn="10" endLine="62" endColumn="11" startOffset="1615" location="C:\Users\rober\Downloads\eclipse-escet-v5.0-win32.win32.x86_64\eclipse-escet-v5.0\workspace\CIFBenchmarks-5.0.0.v20241003-060816\swarm\swarm_aggregation.cif"/>
          <event xmi:type="expressions:EventExpression" xmi:id="163" event="9">
            <position xmi:type="position:Position" xmi:id="164" source="File &quot;C:\Users\rober\Downloads\eclipse-escet-v5.0-win32.win32.x86_64\eclipse-escet-v5.0\workspace\CIFBenchmarks-5.0.0.v20241003-060816\swarm\swarm_aggregation.cif&quot;: " startLine="62" endOffset="1616" startColumn="10" endLine="62" endColumn="11" startOffset="1615" location="C:\Users\rober\Downloads\eclipse-escet-v5.0-win32.win32.x86_64\eclipse-escet-v5.0\workspace\CIFBenchmarks-5.0.0.v20241003-060816\swarm\swarm_aggregation.cif"/>
            <type xmi:type="types:BoolType" xmi:id="165">
              <position xmi:type="position:Position" xmi:id="166" source="File &quot;C:\Users\rober\Downloads\eclipse-escet-v5.0-win32.win32.x86_64\eclipse-escet-v5.0\workspace\CIFBenchmarks-5.0.0.v20241003-060816\swarm\swarm_aggregation.cif&quot;: " startLine="62" endOffset="1616" startColumn="10" endLine="62" endColumn="11" startOffset="1615" location="C:\Users\rober\Downloads\eclipse-escet-v5.0-win32.win32.x86_64\eclipse-escet-v5.0\workspace\CIFBenchmarks-5.0.0.v20241003-060816\swarm\swarm_aggregation.cif"/>
            </type>
          </event>
        </events>
      </edges>
      <edges xmi:type="automata:Edge" xmi:id="167">
        <position xmi:type="position:Position" xmi:id="168" source="File &quot;C:\Users\rober\Downloads\eclipse-escet-v5.0-win32.win32.x86_64\eclipse-escet-v5.0\workspace\CIFBenchmarks-5.0.0.v20241003-060816\swarm\swarm_aggregation.cif&quot;: " startLine="63" endOffset="1634" startColumn="5" endLine="63" endColumn="8" startOffset="1631" location="C:\Users\rober\Downloads\eclipse-escet-v5.0-win32.win32.x86_64\eclipse-escet-v5.0\workspace\CIFBenchmarks-5.0.0.v20241003-060816\swarm\swarm_aggregation.cif"/>
        <events xmi:type="automata:EdgeEvent" xmi:id="169">
          <position xmi:type="position:Position" xmi:id="170" source="File &quot;C:\Users\rober\Downloads\eclipse-escet-v5.0-win32.win32.x86_64\eclipse-escet-v5.0\workspace\CIFBenchmarks-5.0.0.v20241003-060816\swarm\swarm_aggregation.cif&quot;: " startLine="63" endOffset="1637" startColumn="10" endLine="63" endColumn="11" startOffset="1636" location="C:\Users\rober\Downloads\eclipse-escet-v5.0-win32.win32.x86_64\eclipse-escet-v5.0\workspace\CIFBenchmarks-5.0.0.v20241003-060816\swarm\swarm_aggregation.cif"/>
          <event xmi:type="expressions:EventExpression" xmi:id="171" event="5">
            <position xmi:type="position:Position" xmi:id="172" source="File &quot;C:\Users\rober\Downloads\eclipse-escet-v5.0-win32.win32.x86_64\eclipse-escet-v5.0\workspace\CIFBenchmarks-5.0.0.v20241003-060816\swarm\swarm_aggregation.cif&quot;: " startLine="63" endOffset="1637" startColumn="10" endLine="63" endColumn="11" startOffset="1636" location="C:\Users\rober\Downloads\eclipse-escet-v5.0-win32.win32.x86_64\eclipse-escet-v5.0\workspace\CIFBenchmarks-5.0.0.v20241003-060816\swarm\swarm_aggregation.cif"/>
            <type xmi:type="types:BoolType" xmi:id="173">
              <position xmi:type="position:Position" xmi:id="174" source="File &quot;C:\Users\rober\Downloads\eclipse-escet-v5.0-win32.win32.x86_64\eclipse-escet-v5.0\workspace\CIFBenchmarks-5.0.0.v20241003-060816\swarm\swarm_aggregation.cif&quot;: " startLine="63" endOffset="1637" startColumn="10" endLine="63" endColumn="11" startOffset="1636" location="C:\Users\rober\Downloads\eclipse-escet-v5.0-win32.win32.x86_64\eclipse-escet-v5.0\workspace\CIFBenchmarks-5.0.0.v20241003-060816\swarm\swarm_aggregation.cif"/>
            </type>
          </event>
        </events>
      </edges>
      <markeds xmi:type="expressions:BoolExpression" xmi:id="175" value="true">
        <position xmi:type="position:Position" xmi:id="176" source="File &quot;C:\Users\rober\Downloads\eclipse-escet-v5.0-win32.win32.x86_64\eclipse-escet-v5.0\workspace\CIFBenchmarks-5.0.0.v20241003-060816\swarm\swarm_aggregation.cif&quot;: " startLine="60" endOffset="1582" startColumn="5" endLine="60" endColumn="10" startOffset="1577" location="C:\Users\rober\Downloads\eclipse-escet-v5.0-win32.win32.x86_64\eclipse-escet-v5.0\workspace\CIFBenchmarks-5.0.0.v20241003-060816\swarm\swarm_aggregation.cif"/>
        <type xmi:type="types:BoolType" xmi:id="177">
          <position xmi:type="position:Position" xmi:id="178" source="File &quot;C:\Users\rober\Downloads\eclipse-escet-v5.0-win32.win32.x86_64\eclipse-escet-v5.0\workspace\CIFBenchmarks-5.0.0.v20241003-060816\swarm\swarm_aggregation.cif&quot;: " startLine="60" endOffset="1582" startColumn="5" endLine="60" endColumn="10" startOffset="1577" location="C:\Users\rober\Downloads\eclipse-escet-v5.0-win32.win32.x86_64\eclipse-escet-v5.0\workspace\CIFBenchmarks-5.0.0.v20241003-060816\swarm\swarm_aggregation.cif"/>
        </type>
      </markeds>
    </locations>
  </components>
  <components xmi:type="automata:Automaton" xmi:id="179" name="AlternateV0" kind="Requirement">
    <position xmi:type="position:Position" xmi:id="180" source="File &quot;C:\Users\rober\Downloads\eclipse-escet-v5.0-win32.win32.x86_64\eclipse-escet-v5.0\workspace\CIFBenchmarks-5.0.0.v20241003-060816\swarm\swarm_aggregation.cif&quot;: " startLine="66" endOffset="1667" startColumn="13" endLine="66" endColumn="23" startOffset="1657" location="C:\Users\rober\Downloads\eclipse-escet-v5.0-win32.win32.x86_64\eclipse-escet-v5.0\workspace\CIFBenchmarks-5.0.0.v20241003-060816\swarm\swarm_aggregation.cif"/>
    <locations xmi:type="automata:Location" xmi:id="181" name="q1">
      <position xmi:type="position:Position" xmi:id="182" source="File &quot;C:\Users\rober\Downloads\eclipse-escet-v5.0-win32.win32.x86_64\eclipse-escet-v5.0\workspace\CIFBenchmarks-5.0.0.v20241003-060816\swarm\swarm_aggregation.cif&quot;: " startLine="67" endOffset="1689" startColumn="12" endLine="67" endColumn="13" startOffset="1688" location="C:\Users\rober\Downloads\eclipse-escet-v5.0-win32.win32.x86_64\eclipse-escet-v5.0\workspace\CIFBenchmarks-5.0.0.v20241003-060816\swarm\swarm_aggregation.cif"/>
      <initials xmi:type="expressions:BoolExpression" xmi:id="183" value="true">
        <position xmi:type="position:Position" xmi:id="184" source="File &quot;C:\Users\rober\Downloads\eclipse-escet-v5.0-win32.win32.x86_64\eclipse-escet-v5.0\workspace\CIFBenchmarks-5.0.0.v20241003-060816\swarm\swarm_aggregation.cif&quot;: " startLine="68" endOffset="1702" startColumn="5" endLine="68" endColumn="11" startOffset="1696" location="C:\Users\rober\Downloads\eclipse-escet-v5.0-win32.win32.x86_64\eclipse-escet-v5.0\workspace\CIFBenchmarks-5.0.0.v20241003-060816\swarm\swarm_aggregation.cif"/>
        <type xmi:type="types:BoolType" xmi:id="185">
          <position xmi:type="position:Position" xmi:id="186" source="File &quot;C:\Users\rober\Downloads\eclipse-escet-v5.0-win32.win32.x86_64\eclipse-escet-v5.0\workspace\CIFBenchmarks-5.0.0.v20241003-060816\swarm\swarm_aggregation.cif&quot;: " startLine="68" endOffset="1702" startColumn="5" endLine="68" endColumn="11" startOffset="1696" location="C:\Users\rober\Downloads\eclipse-escet-v5.0-win32.win32.x86_64\eclipse-escet-v5.0\workspace\CIFBenchmarks-5.0.0.v20241003-060816\swarm\swarm_aggregation.cif"/>
        </type>
      </initials>
      <edges xmi:type="automata:Edge" xmi:id="187" target="207">
        <position xmi:type="position:Position" xmi:id="188" source="File &quot;C:\Users\rober\Downloads\eclipse-escet-v5.0-win32.win32.x86_64\eclipse-escet-v5.0\workspace\CIFBenchmarks-5.0.0.v20241003-060816\swarm\swarm_aggregation.cif&quot;: " startLine="69" endOffset="1720" startColumn="5" endLine="69" endColumn="8" startOffset="1717" location="C:\Users\rober\Downloads\eclipse-escet-v5.0-win32.win32.x86_64\eclipse-escet-v5.0\workspace\CIFBenchmarks-5.0.0.v20241003-060816\swarm\swarm_aggregation.cif"/>
        <events xmi:type="automata:EdgeEvent" xmi:id="189">
          <position xmi:type="position:Position" xmi:id="190" source="File &quot;C:\Users\rober\Downloads\eclipse-escet-v5.0-win32.win32.x86_64\eclipse-escet-v5.0\workspace\CIFBenchmarks-5.0.0.v20241003-060816\swarm\swarm_aggregation.cif&quot;: " startLine="69" endOffset="1723" startColumn="10" endLine="69" endColumn="11" startOffset="1722" location="C:\Users\rober\Downloads\eclipse-escet-v5.0-win32.win32.x86_64\eclipse-escet-v5.0\workspace\CIFBenchmarks-5.0.0.v20241003-060816\swarm\swarm_aggregation.cif"/>
          <event xmi:type="expressions:EventExpression" xmi:id="191" event="7">
            <position xmi:type="position:Position" xmi:id="192" source="File &quot;C:\Users\rober\Downloads\eclipse-escet-v5.0-win32.win32.x86_64\eclipse-escet-v5.0\workspace\CIFBenchmarks-5.0.0.v20241003-060816\swarm\swarm_aggregation.cif&quot;: " startLine="69" endOffset="1723" startColumn="10" endLine="69" endColumn="11" startOffset="1722" location="C:\Users\rober\Downloads\eclipse-escet-v5.0-win32.win32.x86_64\eclipse-escet-v5.0\workspace\CIFBenchmarks-5.0.0.v20241003-060816\swarm\swarm_aggregation.cif"/>
            <type xmi:type="types:BoolType" xmi:id="193">
              <position xmi:type="position:Position" xmi:id="194" source="File &quot;C:\Users\rober\Downloads\eclipse-escet-v5.0-win32.win32.x86_64\eclipse-escet-v5.0\workspace\CIFBenchmarks-5.0.0.v20241003-060816\swarm\swarm_aggregation.cif&quot;: " startLine="69" endOffset="1723" startColumn="10" endLine="69" endColumn="11" startOffset="1722" location="C:\Users\rober\Downloads\eclipse-escet-v5.0-win32.win32.x86_64\eclipse-escet-v5.0\workspace\CIFBenchmarks-5.0.0.v20241003-060816\swarm\swarm_aggregation.cif"/>
            </type>
          </event>
        </events>
      </edges>
      <edges xmi:type="automata:Edge" xmi:id="195">
        <position xmi:type="position:Position" xmi:id="196" source="File &quot;C:\Users\rober\Downloads\eclipse-escet-v5.0-win32.win32.x86_64\eclipse-escet-v5.0\workspace\CIFBenchmarks-5.0.0.v20241003-060816\swarm\swarm_aggregation.cif&quot;: " startLine="70" endOffset="1741" startColumn="5" endLine="70" endColumn="8" startOffset="1738" location="C:\Users\rober\Downloads\eclipse-escet-v5.0-win32.win32.x86_64\eclipse-escet-v5.0\workspace\CIFBenchmarks-5.0.0.v20241003-060816\swarm\swarm_aggregation.cif"/>
        <events xmi:type="automata:EdgeEvent" xmi:id="197">
          <position xmi:type="position:Position" xmi:id="198" source="File &quot;C:\Users\rober\Downloads\eclipse-escet-v5.0-win32.win32.x86_64\eclipse-escet-v5.0\workspace\CIFBenchmarks-5.0.0.v20241003-060816\swarm\swarm_aggregation.cif&quot;: " startLine="70" endOffset="1744" startColumn="10" endLine="70" endColumn="11" startOffset="1743" location="C:\Users\rober\Downloads\eclipse-escet-v5.0-win32.win32.x86_64\eclipse-escet-v5.0\workspace\CIFBenchmarks-5.0.0.v20241003-060816\swarm\swarm_aggregation.cif"/>
          <event xmi:type="expressions:EventExpression" xmi:id="199" event="9">
            <position xmi:type="position:Position" xmi:id="200" source="File &quot;C:\Users\rober\Downloads\eclipse-escet-v5.0-win32.win32.x86_64\eclipse-escet-v5.0\workspace\CIFBenchmarks-5.0.0.v20241003-060816\swarm\swarm_aggregation.cif&quot;: " startLine="70" endOffset="1744" startColumn="10" endLine="70" endColumn="11" startOffset="1743" location="C:\Users\rober\Downloads\eclipse-escet-v5.0-win32.win32.x86_64\eclipse-escet-v5.0\workspace\CIFBenchmarks-5.0.0.v20241003-060816\swarm\swarm_aggregation.cif"/>
            <type xmi:type="types:BoolType" xmi:id="201">
              <position xmi:type="position:Position" xmi:id="202" source="File &quot;C:\Users\rober\Downloads\eclipse-escet-v5.0-win32.win32.x86_64\eclipse-escet-v5.0\workspace\CIFBenchmarks-5.0.0.v20241003-060816\swarm\swarm_aggregation.cif&quot;: " startLine="70" endOffset="1744" startColumn="10" endLine="70" endColumn="11" startOffset="1743" location="C:\Users\rober\Downloads\eclipse-escet-v5.0-win32.win32.x86_64\eclipse-escet-v5.0\workspace\CIFBenchmarks-5.0.0.v20241003-060816\swarm\swarm_aggregation.cif"/>
            </type>
          </event>
        </events>
      </edges>
      <markeds xmi:type="expressions:BoolExpression" xmi:id="203" value="true">
        <position xmi:type="position:Position" xmi:id="204" source="File &quot;C:\Users\rober\Downloads\eclipse-escet-v5.0-win32.win32.x86_64\eclipse-escet-v5.0\workspace\CIFBenchmarks-5.0.0.v20241003-060816\swarm\swarm_aggregation.cif&quot;: " startLine="68" endOffset="1710" startColumn="14" endLine="68" endColumn="19" startOffset="1705" location="C:\Users\rober\Downloads\eclipse-escet-v5.0-win32.win32.x86_64\eclipse-escet-v5.0\workspace\CIFBenchmarks-5.0.0.v20241003-060816\swarm\swarm_aggregation.cif"/>
        <type xmi:type="types:BoolType" xmi:id="205">
          <position xmi:type="position:Position" xmi:id="206" source="File &quot;C:\Users\rober\Downloads\eclipse-escet-v5.0-win32.win32.x86_64\eclipse-escet-v5.0\workspace\CIFBenchmarks-5.0.0.v20241003-060816\swarm\swarm_aggregation.cif&quot;: " startLine="68" endOffset="1710" startColumn="14" endLine="68" endColumn="19" startOffset="1705" location="C:\Users\rober\Downloads\eclipse-escet-v5.0-win32.win32.x86_64\eclipse-escet-v5.0\workspace\CIFBenchmarks-5.0.0.v20241003-060816\swarm\swarm_aggregation.cif"/>
        </type>
      </markeds>
    </locations>
    <locations xmi:type="automata:Location" xmi:id="207" name="q2">
      <position xmi:type="position:Position" xmi:id="208" source="File &quot;C:\Users\rober\Downloads\eclipse-escet-v5.0-win32.win32.x86_64\eclipse-escet-v5.0\workspace\CIFBenchmarks-5.0.0.v20241003-060816\swarm\swarm_aggregation.cif&quot;: " startLine="72" endOffset="1760" startColumn="12" endLine="72" endColumn="13" startOffset="1759" location="C:\Users\rober\Downloads\eclipse-escet-v5.0-win32.win32.x86_64\eclipse-escet-v5.0\workspace\CIFBenchmarks-5.0.0.v20241003-060816\swarm\swarm_aggregation.cif"/>
      <edges xmi:type="automata:Edge" xmi:id="209" target="181">
        <position xmi:type="position:Position" xmi:id="210" source="File &quot;C:\Users\rober\Downloads\eclipse-escet-v5.0-win32.win32.x86_64\eclipse-escet-v5.0\workspace\CIFBenchmarks-5.0.0.v20241003-060816\swarm\swarm_aggregation.cif&quot;: " startLine="74" endOffset="1782" startColumn="5" endLine="74" endColumn="8" startOffset="1779" location="C:\Users\rober\Downloads\eclipse-escet-v5.0-win32.win32.x86_64\eclipse-escet-v5.0\workspace\CIFBenchmarks-5.0.0.v20241003-060816\swarm\swarm_aggregation.cif"/>
        <events xmi:type="automata:EdgeEvent" xmi:id="211">
          <position xmi:type="position:Position" xmi:id="212" source="File &quot;C:\Users\rober\Downloads\eclipse-escet-v5.0-win32.win32.x86_64\eclipse-escet-v5.0\workspace\CIFBenchmarks-5.0.0.v20241003-060816\swarm\swarm_aggregation.cif&quot;: " startLine="74" endOffset="1785" startColumn="10" endLine="74" endColumn="11" startOffset="1784" location="C:\Users\rober\Downloads\eclipse-escet-v5.0-win32.win32.x86_64\eclipse-escet-v5.0\workspace\CIFBenchmarks-5.0.0.v20241003-060816\swarm\swarm_aggregation.cif"/>
          <event xmi:type="expressions:EventExpression" xmi:id="213" event="9">
            <position xmi:type="position:Position" xmi:id="214" source="File &quot;C:\Users\rober\Downloads\eclipse-escet-v5.0-win32.win32.x86_64\eclipse-escet-v5.0\workspace\CIFBenchmarks-5.0.0.v20241003-060816\swarm\swarm_aggregation.cif&quot;: " startLine="74" endOffset="1785" startColumn="10" endLine="74" endColumn="11" startOffset="1784" location="C:\Users\rober\Downloads\eclipse-escet-v5.0-win32.win32.x86_64\eclipse-escet-v5.0\workspace\CIFBenchmarks-5.0.0.v20241003-060816\swarm\swarm_aggregation.cif"/>
            <type xmi:type="types:BoolType" xmi:id="215">
              <position xmi:type="position:Position" xmi:id="216" source="File &quot;C:\Users\rober\Downloads\eclipse-escet-v5.0-win32.win32.x86_64\eclipse-escet-v5.0\workspace\CIFBenchmarks-5.0.0.v20241003-060816\swarm\swarm_aggregation.cif&quot;: " startLine="74" endOffset="1785" startColumn="10" endLine="74" endColumn="11" startOffset="1784" location="C:\Users\rober\Downloads\eclipse-escet-v5.0-win32.win32.x86_64\eclipse-escet-v5.0\workspace\CIFBenchmarks-5.0.0.v20241003-060816\swarm\swarm_aggregation.cif"/>
            </type>
          </event>
        </events>
      </edges>
      <markeds xmi:type="expressions:BoolExpression" xmi:id="217" value="true">
        <position xmi:type="position:Position" xmi:id="218" source="File &quot;C:\Users\rober\Downloads\eclipse-escet-v5.0-win32.win32.x86_64\eclipse-escet-v5.0\workspace\CIFBenchmarks-5.0.0.v20241003-060816\swarm\swarm_aggregation.cif&quot;: " startLine="73" endOffset="1772" startColumn="5" endLine="73" endColumn="10" startOffset="1767" location="C:\Users\rober\Downloads\eclipse-escet-v5.0-win32.win32.x86_64\eclipse-escet-v5.0\workspace\CIFBenchmarks-5.0.0.v20241003-060816\swarm\swarm_aggregation.cif"/>
        <type xmi:type="types:BoolType" xmi:id="219">
          <position xmi:type="position:Position" xmi:id="220" source="File &quot;C:\Users\rober\Downloads\eclipse-escet-v5.0-win32.win32.x86_64\eclipse-escet-v5.0\workspace\CIFBenchmarks-5.0.0.v20241003-060816\swarm\swarm_aggregation.cif&quot;: " startLine="73" endOffset="1772" startColumn="5" endLine="73" endColumn="10" startOffset="1767" location="C:\Users\rober\Downloads\eclipse-escet-v5.0-win32.win32.x86_64\eclipse-escet-v5.0\workspace\CIFBenchmarks-5.0.0.v20241003-060816\swarm\swarm_aggregation.cif"/>
        </type>
      </markeds>
    </locations>
  </components>
  <components xmi:type="automata:Automaton" xmi:id="221" name="AlternateV1" kind="Requirement">
    <position xmi:type="position:Position" xmi:id="222" source="File &quot;C:\Users\rober\Downloads\eclipse-escet-v5.0-win32.win32.x86_64\eclipse-escet-v5.0\workspace\CIFBenchmarks-5.0.0.v20241003-060816\swarm\swarm_aggregation.cif&quot;: " startLine="77" endOffset="1823" startColumn="13" endLine="77" endColumn="23" startOffset="1813" location="C:\Users\rober\Downloads\eclipse-escet-v5.0-win32.win32.x86_64\eclipse-escet-v5.0\workspace\CIFBenchmarks-5.0.0.v20241003-060816\swarm\swarm_aggregation.cif"/>
    <locations xmi:type="automata:Location" xmi:id="223" name="q1">
      <position xmi:type="position:Position" xmi:id="224" source="File &quot;C:\Users\rober\Downloads\eclipse-escet-v5.0-win32.win32.x86_64\eclipse-escet-v5.0\workspace\CIFBenchmarks-5.0.0.v20241003-060816\swarm\swarm_aggregation.cif&quot;: " startLine="78" endOffset="1845" startColumn="12" endLine="78" endColumn="13" startOffset="1844" location="C:\Users\rober\Downloads\eclipse-escet-v5.0-win32.win32.x86_64\eclipse-escet-v5.0\workspace\CIFBenchmarks-5.0.0.v20241003-060816\swarm\swarm_aggregation.cif"/>
      <initials xmi:type="expressions:BoolExpression" xmi:id="225" value="true">
        <position xmi:type="position:Position" xmi:id="226" source="File &quot;C:\Users\rober\Downloads\eclipse-escet-v5.0-win32.win32.x86_64\eclipse-escet-v5.0\workspace\CIFBenchmarks-5.0.0.v20241003-060816\swarm\swarm_aggregation.cif&quot;: " startLine="79" endOffset="1858" startColumn="5" endLine="79" endColumn="11" startOffset="1852" location="C:\Users\rober\Downloads\eclipse-escet-v5.0-win32.win32.x86_64\eclipse-escet-v5.0\workspace\CIFBenchmarks-5.0.0.v20241003-060816\swarm\swarm_aggregation.cif"/>
        <type xmi:type="types:BoolType" xmi:id="227">
          <position xmi:type="position:Position" xmi:id="228" source="File &quot;C:\Users\rober\Downloads\eclipse-escet-v5.0-win32.win32.x86_64\eclipse-escet-v5.0\workspace\CIFBenchmarks-5.0.0.v20241003-060816\swarm\swarm_aggregation.cif&quot;: " startLine="79" endOffset="1858" startColumn="5" endLine="79" endColumn="11" startOffset="1852" location="C:\Users\rober\Downloads\eclipse-escet-v5.0-win32.win32.x86_64\eclipse-escet-v5.0\workspace\CIFBenchmarks-5.0.0.v20241003-060816\swarm\swarm_aggregation.cif"/>
        </type>
      </initials>
      <edges xmi:type="automata:Edge" xmi:id="229" target="249">
        <position xmi:type="position:Position" xmi:id="230" source="File &quot;C:\Users\rober\Downloads\eclipse-escet-v5.0-win32.win32.x86_64\eclipse-escet-v5.0\workspace\CIFBenchmarks-5.0.0.v20241003-060816\swarm\swarm_aggregation.cif&quot;: " startLine="80" endOffset="1876" startColumn="5" endLine="80" endColumn="8" startOffset="1873" location="C:\Users\rober\Downloads\eclipse-escet-v5.0-win32.win32.x86_64\eclipse-escet-v5.0\workspace\CIFBenchmarks-5.0.0.v20241003-060816\swarm\swarm_aggregation.cif"/>
        <events xmi:type="automata:EdgeEvent" xmi:id="231">
          <position xmi:type="position:Position" xmi:id="232" source="File &quot;C:\Users\rober\Downloads\eclipse-escet-v5.0-win32.win32.x86_64\eclipse-escet-v5.0\workspace\CIFBenchmarks-5.0.0.v20241003-060816\swarm\swarm_aggregation.cif&quot;: " startLine="80" endOffset="1879" startColumn="10" endLine="80" endColumn="11" startOffset="1878" location="C:\Users\rober\Downloads\eclipse-escet-v5.0-win32.win32.x86_64\eclipse-escet-v5.0\workspace\CIFBenchmarks-5.0.0.v20241003-060816\swarm\swarm_aggregation.cif"/>
          <event xmi:type="expressions:EventExpression" xmi:id="233" event="9">
            <position xmi:type="position:Position" xmi:id="234" source="File &quot;C:\Users\rober\Downloads\eclipse-escet-v5.0-win32.win32.x86_64\eclipse-escet-v5.0\workspace\CIFBenchmarks-5.0.0.v20241003-060816\swarm\swarm_aggregation.cif&quot;: " startLine="80" endOffset="1879" startColumn="10" endLine="80" endColumn="11" startOffset="1878" location="C:\Users\rober\Downloads\eclipse-escet-v5.0-win32.win32.x86_64\eclipse-escet-v5.0\workspace\CIFBenchmarks-5.0.0.v20241003-060816\swarm\swarm_aggregation.cif"/>
            <type xmi:type="types:BoolType" xmi:id="235">
              <position xmi:type="position:Position" xmi:id="236" source="File &quot;C:\Users\rober\Downloads\eclipse-escet-v5.0-win32.win32.x86_64\eclipse-escet-v5.0\workspace\CIFBenchmarks-5.0.0.v20241003-060816\swarm\swarm_aggregation.cif&quot;: " startLine="80" endOffset="1879" startColumn="10" endLine="80" endColumn="11" startOffset="1878" location="C:\Users\rober\Downloads\eclipse-escet-v5.0-win32.win32.x86_64\eclipse-escet-v5.0\workspace\CIFBenchmarks-5.0.0.v20241003-060816\swarm\swarm_aggregation.cif"/>
            </type>
          </event>
        </events>
      </edges>
      <edges xmi:type="automata:Edge" xmi:id="237">
        <position xmi:type="position:Position" xmi:id="238" source="File &quot;C:\Users\rober\Downloads\eclipse-escet-v5.0-win32.win32.x86_64\eclipse-escet-v5.0\workspace\CIFBenchmarks-5.0.0.v20241003-060816\swarm\swarm_aggregation.cif&quot;: " startLine="81" endOffset="1897" startColumn="5" endLine="81" endColumn="8" startOffset="1894" location="C:\Users\rober\Downloads\eclipse-escet-v5.0-win32.win32.x86_64\eclipse-escet-v5.0\workspace\CIFBenchmarks-5.0.0.v20241003-060816\swarm\swarm_aggregation.cif"/>
        <events xmi:type="automata:EdgeEvent" xmi:id="239">
          <position xmi:type="position:Position" xmi:id="240" source="File &quot;C:\Users\rober\Downloads\eclipse-escet-v5.0-win32.win32.x86_64\eclipse-escet-v5.0\workspace\CIFBenchmarks-5.0.0.v20241003-060816\swarm\swarm_aggregation.cif&quot;: " startLine="81" endOffset="1900" startColumn="10" endLine="81" endColumn="11" startOffset="1899" location="C:\Users\rober\Downloads\eclipse-escet-v5.0-win32.win32.x86_64\eclipse-escet-v5.0\workspace\CIFBenchmarks-5.0.0.v20241003-060816\swarm\swarm_aggregation.cif"/>
          <event xmi:type="expressions:EventExpression" xmi:id="241" event="7">
            <position xmi:type="position:Position" xmi:id="242" source="File &quot;C:\Users\rober\Downloads\eclipse-escet-v5.0-win32.win32.x86_64\eclipse-escet-v5.0\workspace\CIFBenchmarks-5.0.0.v20241003-060816\swarm\swarm_aggregation.cif&quot;: " startLine="81" endOffset="1900" startColumn="10" endLine="81" endColumn="11" startOffset="1899" location="C:\Users\rober\Downloads\eclipse-escet-v5.0-win32.win32.x86_64\eclipse-escet-v5.0\workspace\CIFBenchmarks-5.0.0.v20241003-060816\swarm\swarm_aggregation.cif"/>
            <type xmi:type="types:BoolType" xmi:id="243">
              <position xmi:type="position:Position" xmi:id="244" source="File &quot;C:\Users\rober\Downloads\eclipse-escet-v5.0-win32.win32.x86_64\eclipse-escet-v5.0\workspace\CIFBenchmarks-5.0.0.v20241003-060816\swarm\swarm_aggregation.cif&quot;: " startLine="81" endOffset="1900" startColumn="10" endLine="81" endColumn="11" startOffset="1899" location="C:\Users\rober\Downloads\eclipse-escet-v5.0-win32.win32.x86_64\eclipse-escet-v5.0\workspace\CIFBenchmarks-5.0.0.v20241003-060816\swarm\swarm_aggregation.cif"/>
            </type>
          </event>
        </events>
      </edges>
      <markeds xmi:type="expressions:BoolExpression" xmi:id="245" value="true">
        <position xmi:type="position:Position" xmi:id="246" source="File &quot;C:\Users\rober\Downloads\eclipse-escet-v5.0-win32.win32.x86_64\eclipse-escet-v5.0\workspace\CIFBenchmarks-5.0.0.v20241003-060816\swarm\swarm_aggregation.cif&quot;: " startLine="79" endOffset="1866" startColumn="14" endLine="79" endColumn="19" startOffset="1861" location="C:\Users\rober\Downloads\eclipse-escet-v5.0-win32.win32.x86_64\eclipse-escet-v5.0\workspace\CIFBenchmarks-5.0.0.v20241003-060816\swarm\swarm_aggregation.cif"/>
        <type xmi:type="types:BoolType" xmi:id="247">
          <position xmi:type="position:Position" xmi:id="248" source="File &quot;C:\Users\rober\Downloads\eclipse-escet-v5.0-win32.win32.x86_64\eclipse-escet-v5.0\workspace\CIFBenchmarks-5.0.0.v20241003-060816\swarm\swarm_aggregation.cif&quot;: " startLine="79" endOffset="1866" startColumn="14" endLine="79" endColumn="19" startOffset="1861" location="C:\Users\rober\Downloads\eclipse-escet-v5.0-win32.win32.x86_64\eclipse-escet-v5.0\workspace\CIFBenchmarks-5.0.0.v20241003-060816\swarm\swarm_aggregation.cif"/>
        </type>
      </markeds>
    </locations>
    <locations xmi:type="automata:Location" xmi:id="249" name="q2">
      <position xmi:type="position:Position" xmi:id="250" source="File &quot;C:\Users\rober\Downloads\eclipse-escet-v5.0-win32.win32.x86_64\eclipse-escet-v5.0\workspace\CIFBenchmarks-5.0.0.v20241003-060816\swarm\swarm_aggregation.cif&quot;: " startLine="83" endOffset="1916" startColumn="12" endLine="83" endColumn="13" startOffset="1915" location="C:\Users\rober\Downloads\eclipse-escet-v5.0-win32.win32.x86_64\eclipse-escet-v5.0\workspace\CIFBenchmarks-5.0.0.v20241003-060816\swarm\swarm_aggregation.cif"/>
      <edges xmi:type="automata:Edge" xmi:id="251" target="223">
        <position xmi:type="position:Position" xmi:id="252" source="File &quot;C:\Users\rober\Downloads\eclipse-escet-v5.0-win32.win32.x86_64\eclipse-escet-v5.0\workspace\CIFBenchmarks-5.0.0.v20241003-060816\swarm\swarm_aggregation.cif&quot;: " startLine="85" endOffset="1938" startColumn="5" endLine="85" endColumn="8" startOffset="1935" location="C:\Users\rober\Downloads\eclipse-escet-v5.0-win32.win32.x86_64\eclipse-escet-v5.0\workspace\CIFBenchmarks-5.0.0.v20241003-060816\swarm\swarm_aggregation.cif"/>
        <events xmi:type="automata:EdgeEvent" xmi:id="253">
          <position xmi:type="position:Position" xmi:id="254" source="File &quot;C:\Users\rober\Downloads\eclipse-escet-v5.0-win32.win32.x86_64\eclipse-escet-v5.0\workspace\CIFBenchmarks-5.0.0.v20241003-060816\swarm\swarm_aggregation.cif&quot;: " startLine="85" endOffset="1941" startColumn="10" endLine="85" endColumn="11" startOffset="1940" location="C:\Users\rober\Downloads\eclipse-escet-v5.0-win32.win32.x86_64\eclipse-escet-v5.0\workspace\CIFBenchmarks-5.0.0.v20241003-060816\swarm\swarm_aggregation.cif"/>
          <event xmi:type="expressions:EventExpression" xmi:id="255" event="7">
            <position xmi:type="position:Position" xmi:id="256" source="File &quot;C:\Users\rober\Downloads\eclipse-escet-v5.0-win32.win32.x86_64\eclipse-escet-v5.0\workspace\CIFBenchmarks-5.0.0.v20241003-060816\swarm\swarm_aggregation.cif&quot;: " startLine="85" endOffset="1941" startColumn="10" endLine="85" endColumn="11" startOffset="1940" location="C:\Users\rober\Downloads\eclipse-escet-v5.0-win32.win32.x86_64\eclipse-escet-v5.0\workspace\CIFBenchmarks-5.0.0.v20241003-060816\swarm\swarm_aggregation.cif"/>
            <type xmi:type="types:BoolType" xmi:id="257">
              <position xmi:type="position:Position" xmi:id="258" source="File &quot;C:\Users\rober\Downloads\eclipse-escet-v5.0-win32.win32.x86_64\eclipse-escet-v5.0\workspace\CIFBenchmarks-5.0.0.v20241003-060816\swarm\swarm_aggregation.cif&quot;: " startLine="85" endOffset="1941" startColumn="10" endLine="85" endColumn="11" startOffset="1940" location="C:\Users\rober\Downloads\eclipse-escet-v5.0-win32.win32.x86_64\eclipse-escet-v5.0\workspace\CIFBenchmarks-5.0.0.v20241003-060816\swarm\swarm_aggregation.cif"/>
            </type>
          </event>
        </events>
      </edges>
      <markeds xmi:type="expressions:BoolExpression" xmi:id="259" value="true">
        <position xmi:type="position:Position" xmi:id="260" source="File &quot;C:\Users\rober\Downloads\eclipse-escet-v5.0-win32.win32.x86_64\eclipse-escet-v5.0\workspace\CIFBenchmarks-5.0.0.v20241003-060816\swarm\swarm_aggregation.cif&quot;: " startLine="84" endOffset="1928" startColumn="5" endLine="84" endColumn="10" startOffset="1923" location="C:\Users\rober\Downloads\eclipse-escet-v5.0-win32.win32.x86_64\eclipse-escet-v5.0\workspace\CIFBenchmarks-5.0.0.v20241003-060816\swarm\swarm_aggregation.cif"/>
        <type xmi:type="types:BoolType" xmi:id="261">
          <position xmi:type="position:Position" xmi:id="262" source="File &quot;C:\Users\rober\Downloads\eclipse-escet-v5.0-win32.win32.x86_64\eclipse-escet-v5.0\workspace\CIFBenchmarks-5.0.0.v20241003-060816\swarm\swarm_aggregation.cif&quot;: " startLine="84" endOffset="1928" startColumn="5" endLine="84" endColumn="10" startOffset="1923" location="C:\Users\rober\Downloads\eclipse-escet-v5.0-win32.win32.x86_64\eclipse-escet-v5.0\workspace\CIFBenchmarks-5.0.0.v20241003-060816\swarm\swarm_aggregation.cif"/>
        </type>
      </markeds>
    </locations>
  </components>
</cif:Specification>
`;
const eventMap = ['S0', 'S1', 'V0', 'V1'];
