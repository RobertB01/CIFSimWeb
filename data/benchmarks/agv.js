const xml_agv = `<?xml version="1.0" encoding="UTF-8"?>
<cif:Specification xmi:version="2.0" xmlns:xmi="http://www.omg.org/XMI" xmlns:xsi="http://www.w3.org/2001/XMLSchema-instance" xmlns:automata="http://eclipse.org/escet/cif/automata" xmlns:cif="http://eclipse.org/escet/cif" xmlns:declarations="http://eclipse.org/escet/cif/declarations" xmlns:expressions="http://eclipse.org/escet/cif/expressions" xmlns:position="http://eclipse.org/escet/position" xmlns:types="http://eclipse.org/escet/cif/types" xsi:schemaLocation="http://eclipse.org/escet/cif/automata http://eclipse.org/escet/cif#//automata http://eclipse.org/escet/cif/declarations http://eclipse.org/escet/cif#//declarations http://eclipse.org/escet/cif/expressions http://eclipse.org/escet/cif#//expressions http://eclipse.org/escet/cif/types http://eclipse.org/escet/cif#//types" xmi:id="1" name="specification">
  <position xmi:type="position:Position" xmi:id="2" source="File &quot;C:\Users\rober\Downloads\eclipse-escet-v5.0-win32.win32.x86_64\eclipse-escet-v5.0\workspace\CIFBenchmarks-5.0.0.v20241003-060816\agv\agv.cif&quot;: " startLine="1" startColumn="1" endLine="1" endColumn="1" location="C:\Users\rober\Downloads\eclipse-escet-v5.0-win32.win32.x86_64\eclipse-escet-v5.0\workspace\CIFBenchmarks-5.0.0.v20241003-060816\agv\agv.cif"/>
  <definitions xmi:type="cif:ComponentDef" xmi:id="3">
    <position xmi:type="position:Position" xmi:id="4" source="File &quot;C:\Users\rober\Downloads\eclipse-escet-v5.0-win32.win32.x86_64\eclipse-escet-v5.0\workspace\CIFBenchmarks-5.0.0.v20241003-060816\agv\agv.cif&quot;: " startLine="146" endOffset="3528" startColumn="17" endLine="146" endColumn="22" startOffset="3523" location="C:\Users\rober\Downloads\eclipse-escet-v5.0-win32.win32.x86_64\eclipse-escet-v5.0\workspace\CIFBenchmarks-5.0.0.v20241003-060816\agv\agv.cif"/>
    <body xmi:type="automata:Automaton" xmi:id="5" name="ZxSPEC" kind="Requirement">
      <position xmi:type="position:Position" xmi:id="6" source="File &quot;C:\Users\rober\Downloads\eclipse-escet-v5.0-win32.win32.x86_64\eclipse-escet-v5.0\workspace\CIFBenchmarks-5.0.0.v20241003-060816\agv\agv.cif&quot;: " startLine="146" endOffset="3528" startColumn="17" endLine="146" endColumn="22" startOffset="3523" location="C:\Users\rober\Downloads\eclipse-escet-v5.0-win32.win32.x86_64\eclipse-escet-v5.0\workspace\CIFBenchmarks-5.0.0.v20241003-060816\agv\agv.cif"/>
      <locations xmi:type="automata:Location" xmi:id="7" name="l0">
        <position xmi:type="position:Position" xmi:id="8" source="File &quot;C:\Users\rober\Downloads\eclipse-escet-v5.0-win32.win32.x86_64\eclipse-escet-v5.0\workspace\CIFBenchmarks-5.0.0.v20241003-060816\agv\agv.cif&quot;: " startLine="147" endOffset="3574" startColumn="12" endLine="147" endColumn="13" startOffset="3573" location="C:\Users\rober\Downloads\eclipse-escet-v5.0-win32.win32.x86_64\eclipse-escet-v5.0\workspace\CIFBenchmarks-5.0.0.v20241003-060816\agv\agv.cif"/>
        <initials xmi:type="expressions:BoolExpression" xmi:id="9" value="true">
          <position xmi:type="position:Position" xmi:id="10" source="File &quot;C:\Users\rober\Downloads\eclipse-escet-v5.0-win32.win32.x86_64\eclipse-escet-v5.0\workspace\CIFBenchmarks-5.0.0.v20241003-060816\agv\agv.cif&quot;: " startLine="148" endOffset="3587" startColumn="5" endLine="148" endColumn="11" startOffset="3581" location="C:\Users\rober\Downloads\eclipse-escet-v5.0-win32.win32.x86_64\eclipse-escet-v5.0\workspace\CIFBenchmarks-5.0.0.v20241003-060816\agv\agv.cif"/>
          <type xmi:type="types:BoolType" xmi:id="11">
            <position xmi:type="position:Position" xmi:id="12" source="File &quot;C:\Users\rober\Downloads\eclipse-escet-v5.0-win32.win32.x86_64\eclipse-escet-v5.0\workspace\CIFBenchmarks-5.0.0.v20241003-060816\agv\agv.cif&quot;: " startLine="148" endOffset="3587" startColumn="5" endLine="148" endColumn="11" startOffset="3581" location="C:\Users\rober\Downloads\eclipse-escet-v5.0-win32.win32.x86_64\eclipse-escet-v5.0\workspace\CIFBenchmarks-5.0.0.v20241003-060816\agv\agv.cif"/>
          </type>
        </initials>
        <edges xmi:type="automata:Edge" xmi:id="13" target="45">
          <position xmi:type="position:Position" xmi:id="14" source="File &quot;C:\Users\rober\Downloads\eclipse-escet-v5.0-win32.win32.x86_64\eclipse-escet-v5.0\workspace\CIFBenchmarks-5.0.0.v20241003-060816\agv\agv.cif&quot;: " startLine="149" endOffset="3605" startColumn="5" endLine="149" endColumn="8" startOffset="3602" location="C:\Users\rober\Downloads\eclipse-escet-v5.0-win32.win32.x86_64\eclipse-escet-v5.0\workspace\CIFBenchmarks-5.0.0.v20241003-060816\agv\agv.cif"/>
          <events xmi:type="automata:EdgeEvent" xmi:id="15">
            <position xmi:type="position:Position" xmi:id="16" source="File &quot;C:\Users\rober\Downloads\eclipse-escet-v5.0-win32.win32.x86_64\eclipse-escet-v5.0\workspace\CIFBenchmarks-5.0.0.v20241003-060816\agv\agv.cif&quot;: " startLine="149" endOffset="3607" startColumn="10" endLine="149" endColumn="10" startOffset="3607" location="C:\Users\rober\Downloads\eclipse-escet-v5.0-win32.win32.x86_64\eclipse-escet-v5.0\workspace\CIFBenchmarks-5.0.0.v20241003-060816\agv\agv.cif"/>
            <event xmi:type="expressions:EventExpression" xmi:id="17" event="87">
              <position xmi:type="position:Position" xmi:id="18" source="File &quot;C:\Users\rober\Downloads\eclipse-escet-v5.0-win32.win32.x86_64\eclipse-escet-v5.0\workspace\CIFBenchmarks-5.0.0.v20241003-060816\agv\agv.cif&quot;: " startLine="149" endOffset="3607" startColumn="10" endLine="149" endColumn="10" startOffset="3607" location="C:\Users\rober\Downloads\eclipse-escet-v5.0-win32.win32.x86_64\eclipse-escet-v5.0\workspace\CIFBenchmarks-5.0.0.v20241003-060816\agv\agv.cif"/>
              <type xmi:type="types:BoolType" xmi:id="19">
                <position xmi:type="position:Position" xmi:id="20" source="File &quot;C:\Users\rober\Downloads\eclipse-escet-v5.0-win32.win32.x86_64\eclipse-escet-v5.0\workspace\CIFBenchmarks-5.0.0.v20241003-060816\agv\agv.cif&quot;: " startLine="149" endOffset="3607" startColumn="10" endLine="149" endColumn="10" startOffset="3607" location="C:\Users\rober\Downloads\eclipse-escet-v5.0-win32.win32.x86_64\eclipse-escet-v5.0\workspace\CIFBenchmarks-5.0.0.v20241003-060816\agv\agv.cif"/>
              </type>
            </event>
          </events>
          <events xmi:type="automata:EdgeEvent" xmi:id="21">
            <position xmi:type="position:Position" xmi:id="22" source="File &quot;C:\Users\rober\Downloads\eclipse-escet-v5.0-win32.win32.x86_64\eclipse-escet-v5.0\workspace\CIFBenchmarks-5.0.0.v20241003-060816\agv\agv.cif&quot;: " startLine="149" endOffset="3610" startColumn="13" endLine="149" endColumn="13" startOffset="3610" location="C:\Users\rober\Downloads\eclipse-escet-v5.0-win32.win32.x86_64\eclipse-escet-v5.0\workspace\CIFBenchmarks-5.0.0.v20241003-060816\agv\agv.cif"/>
            <event xmi:type="expressions:EventExpression" xmi:id="23" event="91">
              <position xmi:type="position:Position" xmi:id="24" source="File &quot;C:\Users\rober\Downloads\eclipse-escet-v5.0-win32.win32.x86_64\eclipse-escet-v5.0\workspace\CIFBenchmarks-5.0.0.v20241003-060816\agv\agv.cif&quot;: " startLine="149" endOffset="3610" startColumn="13" endLine="149" endColumn="13" startOffset="3610" location="C:\Users\rober\Downloads\eclipse-escet-v5.0-win32.win32.x86_64\eclipse-escet-v5.0\workspace\CIFBenchmarks-5.0.0.v20241003-060816\agv\agv.cif"/>
              <type xmi:type="types:BoolType" xmi:id="25">
                <position xmi:type="position:Position" xmi:id="26" source="File &quot;C:\Users\rober\Downloads\eclipse-escet-v5.0-win32.win32.x86_64\eclipse-escet-v5.0\workspace\CIFBenchmarks-5.0.0.v20241003-060816\agv\agv.cif&quot;: " startLine="149" endOffset="3610" startColumn="13" endLine="149" endColumn="13" startOffset="3610" location="C:\Users\rober\Downloads\eclipse-escet-v5.0-win32.win32.x86_64\eclipse-escet-v5.0\workspace\CIFBenchmarks-5.0.0.v20241003-060816\agv\agv.cif"/>
              </type>
            </event>
          </events>
        </edges>
        <edges xmi:type="automata:Edge" xmi:id="27" target="65">
          <position xmi:type="position:Position" xmi:id="28" source="File &quot;C:\Users\rober\Downloads\eclipse-escet-v5.0-win32.win32.x86_64\eclipse-escet-v5.0\workspace\CIFBenchmarks-5.0.0.v20241003-060816\agv\agv.cif&quot;: " startLine="150" endOffset="3628" startColumn="5" endLine="150" endColumn="8" startOffset="3625" location="C:\Users\rober\Downloads\eclipse-escet-v5.0-win32.win32.x86_64\eclipse-escet-v5.0\workspace\CIFBenchmarks-5.0.0.v20241003-060816\agv\agv.cif"/>
          <events xmi:type="automata:EdgeEvent" xmi:id="29">
            <position xmi:type="position:Position" xmi:id="30" source="File &quot;C:\Users\rober\Downloads\eclipse-escet-v5.0-win32.win32.x86_64\eclipse-escet-v5.0\workspace\CIFBenchmarks-5.0.0.v20241003-060816\agv\agv.cif&quot;: " startLine="150" endOffset="3630" startColumn="10" endLine="150" endColumn="10" startOffset="3630" location="C:\Users\rober\Downloads\eclipse-escet-v5.0-win32.win32.x86_64\eclipse-escet-v5.0\workspace\CIFBenchmarks-5.0.0.v20241003-060816\agv\agv.cif"/>
            <event xmi:type="expressions:EventExpression" xmi:id="31" event="103">
              <position xmi:type="position:Position" xmi:id="32" source="File &quot;C:\Users\rober\Downloads\eclipse-escet-v5.0-win32.win32.x86_64\eclipse-escet-v5.0\workspace\CIFBenchmarks-5.0.0.v20241003-060816\agv\agv.cif&quot;: " startLine="150" endOffset="3630" startColumn="10" endLine="150" endColumn="10" startOffset="3630" location="C:\Users\rober\Downloads\eclipse-escet-v5.0-win32.win32.x86_64\eclipse-escet-v5.0\workspace\CIFBenchmarks-5.0.0.v20241003-060816\agv\agv.cif"/>
              <type xmi:type="types:BoolType" xmi:id="33">
                <position xmi:type="position:Position" xmi:id="34" source="File &quot;C:\Users\rober\Downloads\eclipse-escet-v5.0-win32.win32.x86_64\eclipse-escet-v5.0\workspace\CIFBenchmarks-5.0.0.v20241003-060816\agv\agv.cif&quot;: " startLine="150" endOffset="3630" startColumn="10" endLine="150" endColumn="10" startOffset="3630" location="C:\Users\rober\Downloads\eclipse-escet-v5.0-win32.win32.x86_64\eclipse-escet-v5.0\workspace\CIFBenchmarks-5.0.0.v20241003-060816\agv\agv.cif"/>
              </type>
            </event>
          </events>
          <events xmi:type="automata:EdgeEvent" xmi:id="35">
            <position xmi:type="position:Position" xmi:id="36" source="File &quot;C:\Users\rober\Downloads\eclipse-escet-v5.0-win32.win32.x86_64\eclipse-escet-v5.0\workspace\CIFBenchmarks-5.0.0.v20241003-060816\agv\agv.cif&quot;: " startLine="150" endOffset="3633" startColumn="13" endLine="150" endColumn="13" startOffset="3633" location="C:\Users\rober\Downloads\eclipse-escet-v5.0-win32.win32.x86_64\eclipse-escet-v5.0\workspace\CIFBenchmarks-5.0.0.v20241003-060816\agv\agv.cif"/>
            <event xmi:type="expressions:EventExpression" xmi:id="37" event="107">
              <position xmi:type="position:Position" xmi:id="38" source="File &quot;C:\Users\rober\Downloads\eclipse-escet-v5.0-win32.win32.x86_64\eclipse-escet-v5.0\workspace\CIFBenchmarks-5.0.0.v20241003-060816\agv\agv.cif&quot;: " startLine="150" endOffset="3633" startColumn="13" endLine="150" endColumn="13" startOffset="3633" location="C:\Users\rober\Downloads\eclipse-escet-v5.0-win32.win32.x86_64\eclipse-escet-v5.0\workspace\CIFBenchmarks-5.0.0.v20241003-060816\agv\agv.cif"/>
              <type xmi:type="types:BoolType" xmi:id="39">
                <position xmi:type="position:Position" xmi:id="40" source="File &quot;C:\Users\rober\Downloads\eclipse-escet-v5.0-win32.win32.x86_64\eclipse-escet-v5.0\workspace\CIFBenchmarks-5.0.0.v20241003-060816\agv\agv.cif&quot;: " startLine="150" endOffset="3633" startColumn="13" endLine="150" endColumn="13" startOffset="3633" location="C:\Users\rober\Downloads\eclipse-escet-v5.0-win32.win32.x86_64\eclipse-escet-v5.0\workspace\CIFBenchmarks-5.0.0.v20241003-060816\agv\agv.cif"/>
              </type>
            </event>
          </events>
        </edges>
        <markeds xmi:type="expressions:BoolExpression" xmi:id="41" value="true">
          <position xmi:type="position:Position" xmi:id="42" source="File &quot;C:\Users\rober\Downloads\eclipse-escet-v5.0-win32.win32.x86_64\eclipse-escet-v5.0\workspace\CIFBenchmarks-5.0.0.v20241003-060816\agv\agv.cif&quot;: " startLine="148" endOffset="3595" startColumn="14" endLine="148" endColumn="19" startOffset="3590" location="C:\Users\rober\Downloads\eclipse-escet-v5.0-win32.win32.x86_64\eclipse-escet-v5.0\workspace\CIFBenchmarks-5.0.0.v20241003-060816\agv\agv.cif"/>
          <type xmi:type="types:BoolType" xmi:id="43">
            <position xmi:type="position:Position" xmi:id="44" source="File &quot;C:\Users\rober\Downloads\eclipse-escet-v5.0-win32.win32.x86_64\eclipse-escet-v5.0\workspace\CIFBenchmarks-5.0.0.v20241003-060816\agv\agv.cif&quot;: " startLine="148" endOffset="3595" startColumn="14" endLine="148" endColumn="19" startOffset="3590" location="C:\Users\rober\Downloads\eclipse-escet-v5.0-win32.win32.x86_64\eclipse-escet-v5.0\workspace\CIFBenchmarks-5.0.0.v20241003-060816\agv\agv.cif"/>
          </type>
        </markeds>
      </locations>
      <locations xmi:type="automata:Location" xmi:id="45" name="l1">
        <position xmi:type="position:Position" xmi:id="46" source="File &quot;C:\Users\rober\Downloads\eclipse-escet-v5.0-win32.win32.x86_64\eclipse-escet-v5.0\workspace\CIFBenchmarks-5.0.0.v20241003-060816\agv\agv.cif&quot;: " startLine="152" endOffset="3657" startColumn="12" endLine="152" endColumn="13" startOffset="3656" location="C:\Users\rober\Downloads\eclipse-escet-v5.0-win32.win32.x86_64\eclipse-escet-v5.0\workspace\CIFBenchmarks-5.0.0.v20241003-060816\agv\agv.cif"/>
        <edges xmi:type="automata:Edge" xmi:id="47" target="7">
          <position xmi:type="position:Position" xmi:id="48" source="File &quot;C:\Users\rober\Downloads\eclipse-escet-v5.0-win32.win32.x86_64\eclipse-escet-v5.0\workspace\CIFBenchmarks-5.0.0.v20241003-060816\agv\agv.cif&quot;: " startLine="154" endOffset="3679" startColumn="5" endLine="154" endColumn="8" startOffset="3676" location="C:\Users\rober\Downloads\eclipse-escet-v5.0-win32.win32.x86_64\eclipse-escet-v5.0\workspace\CIFBenchmarks-5.0.0.v20241003-060816\agv\agv.cif"/>
          <events xmi:type="automata:EdgeEvent" xmi:id="49">
            <position xmi:type="position:Position" xmi:id="50" source="File &quot;C:\Users\rober\Downloads\eclipse-escet-v5.0-win32.win32.x86_64\eclipse-escet-v5.0\workspace\CIFBenchmarks-5.0.0.v20241003-060816\agv\agv.cif&quot;: " startLine="154" endOffset="3681" startColumn="10" endLine="154" endColumn="10" startOffset="3681" location="C:\Users\rober\Downloads\eclipse-escet-v5.0-win32.win32.x86_64\eclipse-escet-v5.0\workspace\CIFBenchmarks-5.0.0.v20241003-060816\agv\agv.cif"/>
            <event xmi:type="expressions:EventExpression" xmi:id="51" event="95">
              <position xmi:type="position:Position" xmi:id="52" source="File &quot;C:\Users\rober\Downloads\eclipse-escet-v5.0-win32.win32.x86_64\eclipse-escet-v5.0\workspace\CIFBenchmarks-5.0.0.v20241003-060816\agv\agv.cif&quot;: " startLine="154" endOffset="3681" startColumn="10" endLine="154" endColumn="10" startOffset="3681" location="C:\Users\rober\Downloads\eclipse-escet-v5.0-win32.win32.x86_64\eclipse-escet-v5.0\workspace\CIFBenchmarks-5.0.0.v20241003-060816\agv\agv.cif"/>
              <type xmi:type="types:BoolType" xmi:id="53">
                <position xmi:type="position:Position" xmi:id="54" source="File &quot;C:\Users\rober\Downloads\eclipse-escet-v5.0-win32.win32.x86_64\eclipse-escet-v5.0\workspace\CIFBenchmarks-5.0.0.v20241003-060816\agv\agv.cif&quot;: " startLine="154" endOffset="3681" startColumn="10" endLine="154" endColumn="10" startOffset="3681" location="C:\Users\rober\Downloads\eclipse-escet-v5.0-win32.win32.x86_64\eclipse-escet-v5.0\workspace\CIFBenchmarks-5.0.0.v20241003-060816\agv\agv.cif"/>
              </type>
            </event>
          </events>
          <events xmi:type="automata:EdgeEvent" xmi:id="55">
            <position xmi:type="position:Position" xmi:id="56" source="File &quot;C:\Users\rober\Downloads\eclipse-escet-v5.0-win32.win32.x86_64\eclipse-escet-v5.0\workspace\CIFBenchmarks-5.0.0.v20241003-060816\agv\agv.cif&quot;: " startLine="154" endOffset="3684" startColumn="13" endLine="154" endColumn="13" startOffset="3684" location="C:\Users\rober\Downloads\eclipse-escet-v5.0-win32.win32.x86_64\eclipse-escet-v5.0\workspace\CIFBenchmarks-5.0.0.v20241003-060816\agv\agv.cif"/>
            <event xmi:type="expressions:EventExpression" xmi:id="57" event="99">
              <position xmi:type="position:Position" xmi:id="58" source="File &quot;C:\Users\rober\Downloads\eclipse-escet-v5.0-win32.win32.x86_64\eclipse-escet-v5.0\workspace\CIFBenchmarks-5.0.0.v20241003-060816\agv\agv.cif&quot;: " startLine="154" endOffset="3684" startColumn="13" endLine="154" endColumn="13" startOffset="3684" location="C:\Users\rober\Downloads\eclipse-escet-v5.0-win32.win32.x86_64\eclipse-escet-v5.0\workspace\CIFBenchmarks-5.0.0.v20241003-060816\agv\agv.cif"/>
              <type xmi:type="types:BoolType" xmi:id="59">
                <position xmi:type="position:Position" xmi:id="60" source="File &quot;C:\Users\rober\Downloads\eclipse-escet-v5.0-win32.win32.x86_64\eclipse-escet-v5.0\workspace\CIFBenchmarks-5.0.0.v20241003-060816\agv\agv.cif&quot;: " startLine="154" endOffset="3684" startColumn="13" endLine="154" endColumn="13" startOffset="3684" location="C:\Users\rober\Downloads\eclipse-escet-v5.0-win32.win32.x86_64\eclipse-escet-v5.0\workspace\CIFBenchmarks-5.0.0.v20241003-060816\agv\agv.cif"/>
              </type>
            </event>
          </events>
        </edges>
        <markeds xmi:type="expressions:BoolExpression" xmi:id="61" value="true">
          <position xmi:type="position:Position" xmi:id="62" source="File &quot;C:\Users\rober\Downloads\eclipse-escet-v5.0-win32.win32.x86_64\eclipse-escet-v5.0\workspace\CIFBenchmarks-5.0.0.v20241003-060816\agv\agv.cif&quot;: " startLine="153" endOffset="3669" startColumn="5" endLine="153" endColumn="10" startOffset="3664" location="C:\Users\rober\Downloads\eclipse-escet-v5.0-win32.win32.x86_64\eclipse-escet-v5.0\workspace\CIFBenchmarks-5.0.0.v20241003-060816\agv\agv.cif"/>
          <type xmi:type="types:BoolType" xmi:id="63">
            <position xmi:type="position:Position" xmi:id="64" source="File &quot;C:\Users\rober\Downloads\eclipse-escet-v5.0-win32.win32.x86_64\eclipse-escet-v5.0\workspace\CIFBenchmarks-5.0.0.v20241003-060816\agv\agv.cif&quot;: " startLine="153" endOffset="3669" startColumn="5" endLine="153" endColumn="10" startOffset="3664" location="C:\Users\rober\Downloads\eclipse-escet-v5.0-win32.win32.x86_64\eclipse-escet-v5.0\workspace\CIFBenchmarks-5.0.0.v20241003-060816\agv\agv.cif"/>
          </type>
        </markeds>
      </locations>
      <locations xmi:type="automata:Location" xmi:id="65" name="l2">
        <position xmi:type="position:Position" xmi:id="66" source="File &quot;C:\Users\rober\Downloads\eclipse-escet-v5.0-win32.win32.x86_64\eclipse-escet-v5.0\workspace\CIFBenchmarks-5.0.0.v20241003-060816\agv\agv.cif&quot;: " startLine="156" endOffset="3708" startColumn="12" endLine="156" endColumn="13" startOffset="3707" location="C:\Users\rober\Downloads\eclipse-escet-v5.0-win32.win32.x86_64\eclipse-escet-v5.0\workspace\CIFBenchmarks-5.0.0.v20241003-060816\agv\agv.cif"/>
        <edges xmi:type="automata:Edge" xmi:id="67" target="7">
          <position xmi:type="position:Position" xmi:id="68" source="File &quot;C:\Users\rober\Downloads\eclipse-escet-v5.0-win32.win32.x86_64\eclipse-escet-v5.0\workspace\CIFBenchmarks-5.0.0.v20241003-060816\agv\agv.cif&quot;: " startLine="158" endOffset="3730" startColumn="5" endLine="158" endColumn="8" startOffset="3727" location="C:\Users\rober\Downloads\eclipse-escet-v5.0-win32.win32.x86_64\eclipse-escet-v5.0\workspace\CIFBenchmarks-5.0.0.v20241003-060816\agv\agv.cif"/>
          <events xmi:type="automata:EdgeEvent" xmi:id="69">
            <position xmi:type="position:Position" xmi:id="70" source="File &quot;C:\Users\rober\Downloads\eclipse-escet-v5.0-win32.win32.x86_64\eclipse-escet-v5.0\workspace\CIFBenchmarks-5.0.0.v20241003-060816\agv\agv.cif&quot;: " startLine="158" endOffset="3732" startColumn="10" endLine="158" endColumn="10" startOffset="3732" location="C:\Users\rober\Downloads\eclipse-escet-v5.0-win32.win32.x86_64\eclipse-escet-v5.0\workspace\CIFBenchmarks-5.0.0.v20241003-060816\agv\agv.cif"/>
            <event xmi:type="expressions:EventExpression" xmi:id="71" event="111">
              <position xmi:type="position:Position" xmi:id="72" source="File &quot;C:\Users\rober\Downloads\eclipse-escet-v5.0-win32.win32.x86_64\eclipse-escet-v5.0\workspace\CIFBenchmarks-5.0.0.v20241003-060816\agv\agv.cif&quot;: " startLine="158" endOffset="3732" startColumn="10" endLine="158" endColumn="10" startOffset="3732" location="C:\Users\rober\Downloads\eclipse-escet-v5.0-win32.win32.x86_64\eclipse-escet-v5.0\workspace\CIFBenchmarks-5.0.0.v20241003-060816\agv\agv.cif"/>
              <type xmi:type="types:BoolType" xmi:id="73">
                <position xmi:type="position:Position" xmi:id="74" source="File &quot;C:\Users\rober\Downloads\eclipse-escet-v5.0-win32.win32.x86_64\eclipse-escet-v5.0\workspace\CIFBenchmarks-5.0.0.v20241003-060816\agv\agv.cif&quot;: " startLine="158" endOffset="3732" startColumn="10" endLine="158" endColumn="10" startOffset="3732" location="C:\Users\rober\Downloads\eclipse-escet-v5.0-win32.win32.x86_64\eclipse-escet-v5.0\workspace\CIFBenchmarks-5.0.0.v20241003-060816\agv\agv.cif"/>
              </type>
            </event>
          </events>
          <events xmi:type="automata:EdgeEvent" xmi:id="75">
            <position xmi:type="position:Position" xmi:id="76" source="File &quot;C:\Users\rober\Downloads\eclipse-escet-v5.0-win32.win32.x86_64\eclipse-escet-v5.0\workspace\CIFBenchmarks-5.0.0.v20241003-060816\agv\agv.cif&quot;: " startLine="158" endOffset="3735" startColumn="13" endLine="158" endColumn="13" startOffset="3735" location="C:\Users\rober\Downloads\eclipse-escet-v5.0-win32.win32.x86_64\eclipse-escet-v5.0\workspace\CIFBenchmarks-5.0.0.v20241003-060816\agv\agv.cif"/>
            <event xmi:type="expressions:EventExpression" xmi:id="77" event="115">
              <position xmi:type="position:Position" xmi:id="78" source="File &quot;C:\Users\rober\Downloads\eclipse-escet-v5.0-win32.win32.x86_64\eclipse-escet-v5.0\workspace\CIFBenchmarks-5.0.0.v20241003-060816\agv\agv.cif&quot;: " startLine="158" endOffset="3735" startColumn="13" endLine="158" endColumn="13" startOffset="3735" location="C:\Users\rober\Downloads\eclipse-escet-v5.0-win32.win32.x86_64\eclipse-escet-v5.0\workspace\CIFBenchmarks-5.0.0.v20241003-060816\agv\agv.cif"/>
              <type xmi:type="types:BoolType" xmi:id="79">
                <position xmi:type="position:Position" xmi:id="80" source="File &quot;C:\Users\rober\Downloads\eclipse-escet-v5.0-win32.win32.x86_64\eclipse-escet-v5.0\workspace\CIFBenchmarks-5.0.0.v20241003-060816\agv\agv.cif&quot;: " startLine="158" endOffset="3735" startColumn="13" endLine="158" endColumn="13" startOffset="3735" location="C:\Users\rober\Downloads\eclipse-escet-v5.0-win32.win32.x86_64\eclipse-escet-v5.0\workspace\CIFBenchmarks-5.0.0.v20241003-060816\agv\agv.cif"/>
              </type>
            </event>
          </events>
        </edges>
        <markeds xmi:type="expressions:BoolExpression" xmi:id="81" value="true">
          <position xmi:type="position:Position" xmi:id="82" source="File &quot;C:\Users\rober\Downloads\eclipse-escet-v5.0-win32.win32.x86_64\eclipse-escet-v5.0\workspace\CIFBenchmarks-5.0.0.v20241003-060816\agv\agv.cif&quot;: " startLine="157" endOffset="3720" startColumn="5" endLine="157" endColumn="10" startOffset="3715" location="C:\Users\rober\Downloads\eclipse-escet-v5.0-win32.win32.x86_64\eclipse-escet-v5.0\workspace\CIFBenchmarks-5.0.0.v20241003-060816\agv\agv.cif"/>
          <type xmi:type="types:BoolType" xmi:id="83">
            <position xmi:type="position:Position" xmi:id="84" source="File &quot;C:\Users\rober\Downloads\eclipse-escet-v5.0-win32.win32.x86_64\eclipse-escet-v5.0\workspace\CIFBenchmarks-5.0.0.v20241003-060816\agv\agv.cif&quot;: " startLine="157" endOffset="3720" startColumn="5" endLine="157" endColumn="10" startOffset="3715" location="C:\Users\rober\Downloads\eclipse-escet-v5.0-win32.win32.x86_64\eclipse-escet-v5.0\workspace\CIFBenchmarks-5.0.0.v20241003-060816\agv\agv.cif"/>
          </type>
        </markeds>
      </locations>
    </body>
    <parameters xmi:type="cif:EventParameter" xmi:id="85">
      <position xmi:type="position:Position" xmi:id="86" source="File &quot;C:\Users\rober\Downloads\eclipse-escet-v5.0-win32.win32.x86_64\eclipse-escet-v5.0\workspace\CIFBenchmarks-5.0.0.v20241003-060816\agv\agv.cif&quot;: " startLine="146" endOffset="3537" startColumn="31" endLine="146" endColumn="31" startOffset="3537" location="C:\Users\rober\Downloads\eclipse-escet-v5.0-win32.win32.x86_64\eclipse-escet-v5.0\workspace\CIFBenchmarks-5.0.0.v20241003-060816\agv\agv.cif"/>
      <event xmi:type="declarations:Event" xmi:id="87" name="a">
        <position xmi:type="position:Position" xmi:id="88" source="File &quot;C:\Users\rober\Downloads\eclipse-escet-v5.0-win32.win32.x86_64\eclipse-escet-v5.0\workspace\CIFBenchmarks-5.0.0.v20241003-060816\agv\agv.cif&quot;: " startLine="146" endOffset="3537" startColumn="31" endLine="146" endColumn="31" startOffset="3537" location="C:\Users\rober\Downloads\eclipse-escet-v5.0-win32.win32.x86_64\eclipse-escet-v5.0\workspace\CIFBenchmarks-5.0.0.v20241003-060816\agv\agv.cif"/>
      </event>
    </parameters>
    <parameters xmi:type="cif:EventParameter" xmi:id="89">
      <position xmi:type="position:Position" xmi:id="90" source="File &quot;C:\Users\rober\Downloads\eclipse-escet-v5.0-win32.win32.x86_64\eclipse-escet-v5.0\workspace\CIFBenchmarks-5.0.0.v20241003-060816\agv\agv.cif&quot;: " startLine="146" endOffset="3540" startColumn="34" endLine="146" endColumn="34" startOffset="3540" location="C:\Users\rober\Downloads\eclipse-escet-v5.0-win32.win32.x86_64\eclipse-escet-v5.0\workspace\CIFBenchmarks-5.0.0.v20241003-060816\agv\agv.cif"/>
      <event xmi:type="declarations:Event" xmi:id="91" name="b">
        <position xmi:type="position:Position" xmi:id="92" source="File &quot;C:\Users\rober\Downloads\eclipse-escet-v5.0-win32.win32.x86_64\eclipse-escet-v5.0\workspace\CIFBenchmarks-5.0.0.v20241003-060816\agv\agv.cif&quot;: " startLine="146" endOffset="3540" startColumn="34" endLine="146" endColumn="34" startOffset="3540" location="C:\Users\rober\Downloads\eclipse-escet-v5.0-win32.win32.x86_64\eclipse-escet-v5.0\workspace\CIFBenchmarks-5.0.0.v20241003-060816\agv\agv.cif"/>
      </event>
    </parameters>
    <parameters xmi:type="cif:EventParameter" xmi:id="93">
      <position xmi:type="position:Position" xmi:id="94" source="File &quot;C:\Users\rober\Downloads\eclipse-escet-v5.0-win32.win32.x86_64\eclipse-escet-v5.0\workspace\CIFBenchmarks-5.0.0.v20241003-060816\agv\agv.cif&quot;: " startLine="146" endOffset="3543" startColumn="37" endLine="146" endColumn="37" startOffset="3543" location="C:\Users\rober\Downloads\eclipse-escet-v5.0-win32.win32.x86_64\eclipse-escet-v5.0\workspace\CIFBenchmarks-5.0.0.v20241003-060816\agv\agv.cif"/>
      <event xmi:type="declarations:Event" xmi:id="95" name="c">
        <position xmi:type="position:Position" xmi:id="96" source="File &quot;C:\Users\rober\Downloads\eclipse-escet-v5.0-win32.win32.x86_64\eclipse-escet-v5.0\workspace\CIFBenchmarks-5.0.0.v20241003-060816\agv\agv.cif&quot;: " startLine="146" endOffset="3543" startColumn="37" endLine="146" endColumn="37" startOffset="3543" location="C:\Users\rober\Downloads\eclipse-escet-v5.0-win32.win32.x86_64\eclipse-escet-v5.0\workspace\CIFBenchmarks-5.0.0.v20241003-060816\agv\agv.cif"/>
      </event>
    </parameters>
    <parameters xmi:type="cif:EventParameter" xmi:id="97">
      <position xmi:type="position:Position" xmi:id="98" source="File &quot;C:\Users\rober\Downloads\eclipse-escet-v5.0-win32.win32.x86_64\eclipse-escet-v5.0\workspace\CIFBenchmarks-5.0.0.v20241003-060816\agv\agv.cif&quot;: " startLine="146" endOffset="3546" startColumn="40" endLine="146" endColumn="40" startOffset="3546" location="C:\Users\rober\Downloads\eclipse-escet-v5.0-win32.win32.x86_64\eclipse-escet-v5.0\workspace\CIFBenchmarks-5.0.0.v20241003-060816\agv\agv.cif"/>
      <event xmi:type="declarations:Event" xmi:id="99" name="d">
        <position xmi:type="position:Position" xmi:id="100" source="File &quot;C:\Users\rober\Downloads\eclipse-escet-v5.0-win32.win32.x86_64\eclipse-escet-v5.0\workspace\CIFBenchmarks-5.0.0.v20241003-060816\agv\agv.cif&quot;: " startLine="146" endOffset="3546" startColumn="40" endLine="146" endColumn="40" startOffset="3546" location="C:\Users\rober\Downloads\eclipse-escet-v5.0-win32.win32.x86_64\eclipse-escet-v5.0\workspace\CIFBenchmarks-5.0.0.v20241003-060816\agv\agv.cif"/>
      </event>
    </parameters>
    <parameters xmi:type="cif:EventParameter" xmi:id="101">
      <position xmi:type="position:Position" xmi:id="102" source="File &quot;C:\Users\rober\Downloads\eclipse-escet-v5.0-win32.win32.x86_64\eclipse-escet-v5.0\workspace\CIFBenchmarks-5.0.0.v20241003-060816\agv\agv.cif&quot;: " startLine="146" endOffset="3549" startColumn="43" endLine="146" endColumn="43" startOffset="3549" location="C:\Users\rober\Downloads\eclipse-escet-v5.0-win32.win32.x86_64\eclipse-escet-v5.0\workspace\CIFBenchmarks-5.0.0.v20241003-060816\agv\agv.cif"/>
      <event xmi:type="declarations:Event" xmi:id="103" name="e">
        <position xmi:type="position:Position" xmi:id="104" source="File &quot;C:\Users\rober\Downloads\eclipse-escet-v5.0-win32.win32.x86_64\eclipse-escet-v5.0\workspace\CIFBenchmarks-5.0.0.v20241003-060816\agv\agv.cif&quot;: " startLine="146" endOffset="3549" startColumn="43" endLine="146" endColumn="43" startOffset="3549" location="C:\Users\rober\Downloads\eclipse-escet-v5.0-win32.win32.x86_64\eclipse-escet-v5.0\workspace\CIFBenchmarks-5.0.0.v20241003-060816\agv\agv.cif"/>
      </event>
    </parameters>
    <parameters xmi:type="cif:EventParameter" xmi:id="105">
      <position xmi:type="position:Position" xmi:id="106" source="File &quot;C:\Users\rober\Downloads\eclipse-escet-v5.0-win32.win32.x86_64\eclipse-escet-v5.0\workspace\CIFBenchmarks-5.0.0.v20241003-060816\agv\agv.cif&quot;: " startLine="146" endOffset="3552" startColumn="46" endLine="146" endColumn="46" startOffset="3552" location="C:\Users\rober\Downloads\eclipse-escet-v5.0-win32.win32.x86_64\eclipse-escet-v5.0\workspace\CIFBenchmarks-5.0.0.v20241003-060816\agv\agv.cif"/>
      <event xmi:type="declarations:Event" xmi:id="107" name="f">
        <position xmi:type="position:Position" xmi:id="108" source="File &quot;C:\Users\rober\Downloads\eclipse-escet-v5.0-win32.win32.x86_64\eclipse-escet-v5.0\workspace\CIFBenchmarks-5.0.0.v20241003-060816\agv\agv.cif&quot;: " startLine="146" endOffset="3552" startColumn="46" endLine="146" endColumn="46" startOffset="3552" location="C:\Users\rober\Downloads\eclipse-escet-v5.0-win32.win32.x86_64\eclipse-escet-v5.0\workspace\CIFBenchmarks-5.0.0.v20241003-060816\agv\agv.cif"/>
      </event>
    </parameters>
    <parameters xmi:type="cif:EventParameter" xmi:id="109">
      <position xmi:type="position:Position" xmi:id="110" source="File &quot;C:\Users\rober\Downloads\eclipse-escet-v5.0-win32.win32.x86_64\eclipse-escet-v5.0\workspace\CIFBenchmarks-5.0.0.v20241003-060816\agv\agv.cif&quot;: " startLine="146" endOffset="3555" startColumn="49" endLine="146" endColumn="49" startOffset="3555" location="C:\Users\rober\Downloads\eclipse-escet-v5.0-win32.win32.x86_64\eclipse-escet-v5.0\workspace\CIFBenchmarks-5.0.0.v20241003-060816\agv\agv.cif"/>
      <event xmi:type="declarations:Event" xmi:id="111" name="g">
        <position xmi:type="position:Position" xmi:id="112" source="File &quot;C:\Users\rober\Downloads\eclipse-escet-v5.0-win32.win32.x86_64\eclipse-escet-v5.0\workspace\CIFBenchmarks-5.0.0.v20241003-060816\agv\agv.cif&quot;: " startLine="146" endOffset="3555" startColumn="49" endLine="146" endColumn="49" startOffset="3555" location="C:\Users\rober\Downloads\eclipse-escet-v5.0-win32.win32.x86_64\eclipse-escet-v5.0\workspace\CIFBenchmarks-5.0.0.v20241003-060816\agv\agv.cif"/>
      </event>
    </parameters>
    <parameters xmi:type="cif:EventParameter" xmi:id="113">
      <position xmi:type="position:Position" xmi:id="114" source="File &quot;C:\Users\rober\Downloads\eclipse-escet-v5.0-win32.win32.x86_64\eclipse-escet-v5.0\workspace\CIFBenchmarks-5.0.0.v20241003-060816\agv\agv.cif&quot;: " startLine="146" endOffset="3558" startColumn="52" endLine="146" endColumn="52" startOffset="3558" location="C:\Users\rober\Downloads\eclipse-escet-v5.0-win32.win32.x86_64\eclipse-escet-v5.0\workspace\CIFBenchmarks-5.0.0.v20241003-060816\agv\agv.cif"/>
      <event xmi:type="declarations:Event" xmi:id="115" name="h">
        <position xmi:type="position:Position" xmi:id="116" source="File &quot;C:\Users\rober\Downloads\eclipse-escet-v5.0-win32.win32.x86_64\eclipse-escet-v5.0\workspace\CIFBenchmarks-5.0.0.v20241003-060816\agv\agv.cif&quot;: " startLine="146" endOffset="3558" startColumn="52" endLine="146" endColumn="52" startOffset="3558" location="C:\Users\rober\Downloads\eclipse-escet-v5.0-win32.win32.x86_64\eclipse-escet-v5.0\workspace\CIFBenchmarks-5.0.0.v20241003-060816\agv\agv.cif"/>
      </event>
    </parameters>
  </definitions>
  <definitions xmi:type="cif:ComponentDef" xmi:id="117">
    <position xmi:type="position:Position" xmi:id="118" source="File &quot;C:\Users\rober\Downloads\eclipse-escet-v5.0-win32.win32.x86_64\eclipse-escet-v5.0\workspace\CIFBenchmarks-5.0.0.v20241003-060816\agv\agv.cif&quot;: " startLine="189" endOffset="4618" startColumn="17" endLine="189" endColumn="23" startOffset="4612" location="C:\Users\rober\Downloads\eclipse-escet-v5.0-win32.win32.x86_64\eclipse-escet-v5.0\workspace\CIFBenchmarks-5.0.0.v20241003-060816\agv\agv.cif"/>
    <body xmi:type="automata:Automaton" xmi:id="119" name="WSxSPEC" kind="Requirement">
      <position xmi:type="position:Position" xmi:id="120" source="File &quot;C:\Users\rober\Downloads\eclipse-escet-v5.0-win32.win32.x86_64\eclipse-escet-v5.0\workspace\CIFBenchmarks-5.0.0.v20241003-060816\agv\agv.cif&quot;: " startLine="189" endOffset="4618" startColumn="17" endLine="189" endColumn="23" startOffset="4612" location="C:\Users\rober\Downloads\eclipse-escet-v5.0-win32.win32.x86_64\eclipse-escet-v5.0\workspace\CIFBenchmarks-5.0.0.v20241003-060816\agv\agv.cif"/>
      <locations xmi:type="automata:Location" xmi:id="121" name="l0">
        <position xmi:type="position:Position" xmi:id="122" source="File &quot;C:\Users\rober\Downloads\eclipse-escet-v5.0-win32.win32.x86_64\eclipse-escet-v5.0\workspace\CIFBenchmarks-5.0.0.v20241003-060816\agv\agv.cif&quot;: " startLine="190" endOffset="4646" startColumn="12" endLine="190" endColumn="13" startOffset="4645" location="C:\Users\rober\Downloads\eclipse-escet-v5.0-win32.win32.x86_64\eclipse-escet-v5.0\workspace\CIFBenchmarks-5.0.0.v20241003-060816\agv\agv.cif"/>
        <initials xmi:type="expressions:BoolExpression" xmi:id="123" value="true">
          <position xmi:type="position:Position" xmi:id="124" source="File &quot;C:\Users\rober\Downloads\eclipse-escet-v5.0-win32.win32.x86_64\eclipse-escet-v5.0\workspace\CIFBenchmarks-5.0.0.v20241003-060816\agv\agv.cif&quot;: " startLine="191" endOffset="4659" startColumn="5" endLine="191" endColumn="11" startOffset="4653" location="C:\Users\rober\Downloads\eclipse-escet-v5.0-win32.win32.x86_64\eclipse-escet-v5.0\workspace\CIFBenchmarks-5.0.0.v20241003-060816\agv\agv.cif"/>
          <type xmi:type="types:BoolType" xmi:id="125">
            <position xmi:type="position:Position" xmi:id="126" source="File &quot;C:\Users\rober\Downloads\eclipse-escet-v5.0-win32.win32.x86_64\eclipse-escet-v5.0\workspace\CIFBenchmarks-5.0.0.v20241003-060816\agv\agv.cif&quot;: " startLine="191" endOffset="4659" startColumn="5" endLine="191" endColumn="11" startOffset="4653" location="C:\Users\rober\Downloads\eclipse-escet-v5.0-win32.win32.x86_64\eclipse-escet-v5.0\workspace\CIFBenchmarks-5.0.0.v20241003-060816\agv\agv.cif"/>
          </type>
        </initials>
        <edges xmi:type="automata:Edge" xmi:id="127" target="139">
          <position xmi:type="position:Position" xmi:id="128" source="File &quot;C:\Users\rober\Downloads\eclipse-escet-v5.0-win32.win32.x86_64\eclipse-escet-v5.0\workspace\CIFBenchmarks-5.0.0.v20241003-060816\agv\agv.cif&quot;: " startLine="192" endOffset="4677" startColumn="5" endLine="192" endColumn="8" startOffset="4674" location="C:\Users\rober\Downloads\eclipse-escet-v5.0-win32.win32.x86_64\eclipse-escet-v5.0\workspace\CIFBenchmarks-5.0.0.v20241003-060816\agv\agv.cif"/>
          <events xmi:type="automata:EdgeEvent" xmi:id="129">
            <position xmi:type="position:Position" xmi:id="130" source="File &quot;C:\Users\rober\Downloads\eclipse-escet-v5.0-win32.win32.x86_64\eclipse-escet-v5.0\workspace\CIFBenchmarks-5.0.0.v20241003-060816\agv\agv.cif&quot;: " startLine="192" endOffset="4679" startColumn="10" endLine="192" endColumn="10" startOffset="4679" location="C:\Users\rober\Downloads\eclipse-escet-v5.0-win32.win32.x86_64\eclipse-escet-v5.0\workspace\CIFBenchmarks-5.0.0.v20241003-060816\agv\agv.cif"/>
            <event xmi:type="expressions:EventExpression" xmi:id="131" event="155">
              <position xmi:type="position:Position" xmi:id="132" source="File &quot;C:\Users\rober\Downloads\eclipse-escet-v5.0-win32.win32.x86_64\eclipse-escet-v5.0\workspace\CIFBenchmarks-5.0.0.v20241003-060816\agv\agv.cif&quot;: " startLine="192" endOffset="4679" startColumn="10" endLine="192" endColumn="10" startOffset="4679" location="C:\Users\rober\Downloads\eclipse-escet-v5.0-win32.win32.x86_64\eclipse-escet-v5.0\workspace\CIFBenchmarks-5.0.0.v20241003-060816\agv\agv.cif"/>
              <type xmi:type="types:BoolType" xmi:id="133">
                <position xmi:type="position:Position" xmi:id="134" source="File &quot;C:\Users\rober\Downloads\eclipse-escet-v5.0-win32.win32.x86_64\eclipse-escet-v5.0\workspace\CIFBenchmarks-5.0.0.v20241003-060816\agv\agv.cif&quot;: " startLine="192" endOffset="4679" startColumn="10" endLine="192" endColumn="10" startOffset="4679" location="C:\Users\rober\Downloads\eclipse-escet-v5.0-win32.win32.x86_64\eclipse-escet-v5.0\workspace\CIFBenchmarks-5.0.0.v20241003-060816\agv\agv.cif"/>
              </type>
            </event>
          </events>
        </edges>
        <markeds xmi:type="expressions:BoolExpression" xmi:id="135" value="true">
          <position xmi:type="position:Position" xmi:id="136" source="File &quot;C:\Users\rober\Downloads\eclipse-escet-v5.0-win32.win32.x86_64\eclipse-escet-v5.0\workspace\CIFBenchmarks-5.0.0.v20241003-060816\agv\agv.cif&quot;: " startLine="191" endOffset="4667" startColumn="14" endLine="191" endColumn="19" startOffset="4662" location="C:\Users\rober\Downloads\eclipse-escet-v5.0-win32.win32.x86_64\eclipse-escet-v5.0\workspace\CIFBenchmarks-5.0.0.v20241003-060816\agv\agv.cif"/>
          <type xmi:type="types:BoolType" xmi:id="137">
            <position xmi:type="position:Position" xmi:id="138" source="File &quot;C:\Users\rober\Downloads\eclipse-escet-v5.0-win32.win32.x86_64\eclipse-escet-v5.0\workspace\CIFBenchmarks-5.0.0.v20241003-060816\agv\agv.cif&quot;: " startLine="191" endOffset="4667" startColumn="14" endLine="191" endColumn="19" startOffset="4662" location="C:\Users\rober\Downloads\eclipse-escet-v5.0-win32.win32.x86_64\eclipse-escet-v5.0\workspace\CIFBenchmarks-5.0.0.v20241003-060816\agv\agv.cif"/>
          </type>
        </markeds>
      </locations>
      <locations xmi:type="automata:Location" xmi:id="139" name="l1">
        <position xmi:type="position:Position" xmi:id="140" source="File &quot;C:\Users\rober\Downloads\eclipse-escet-v5.0-win32.win32.x86_64\eclipse-escet-v5.0\workspace\CIFBenchmarks-5.0.0.v20241003-060816\agv\agv.cif&quot;: " startLine="194" endOffset="4703" startColumn="12" endLine="194" endColumn="13" startOffset="4702" location="C:\Users\rober\Downloads\eclipse-escet-v5.0-win32.win32.x86_64\eclipse-escet-v5.0\workspace\CIFBenchmarks-5.0.0.v20241003-060816\agv\agv.cif"/>
        <edges xmi:type="automata:Edge" xmi:id="141" target="121">
          <position xmi:type="position:Position" xmi:id="142" source="File &quot;C:\Users\rober\Downloads\eclipse-escet-v5.0-win32.win32.x86_64\eclipse-escet-v5.0\workspace\CIFBenchmarks-5.0.0.v20241003-060816\agv\agv.cif&quot;: " startLine="196" endOffset="4725" startColumn="5" endLine="196" endColumn="8" startOffset="4722" location="C:\Users\rober\Downloads\eclipse-escet-v5.0-win32.win32.x86_64\eclipse-escet-v5.0\workspace\CIFBenchmarks-5.0.0.v20241003-060816\agv\agv.cif"/>
          <events xmi:type="automata:EdgeEvent" xmi:id="143">
            <position xmi:type="position:Position" xmi:id="144" source="File &quot;C:\Users\rober\Downloads\eclipse-escet-v5.0-win32.win32.x86_64\eclipse-escet-v5.0\workspace\CIFBenchmarks-5.0.0.v20241003-060816\agv\agv.cif&quot;: " startLine="196" endOffset="4727" startColumn="10" endLine="196" endColumn="10" startOffset="4727" location="C:\Users\rober\Downloads\eclipse-escet-v5.0-win32.win32.x86_64\eclipse-escet-v5.0\workspace\CIFBenchmarks-5.0.0.v20241003-060816\agv\agv.cif"/>
            <event xmi:type="expressions:EventExpression" xmi:id="145" event="159">
              <position xmi:type="position:Position" xmi:id="146" source="File &quot;C:\Users\rober\Downloads\eclipse-escet-v5.0-win32.win32.x86_64\eclipse-escet-v5.0\workspace\CIFBenchmarks-5.0.0.v20241003-060816\agv\agv.cif&quot;: " startLine="196" endOffset="4727" startColumn="10" endLine="196" endColumn="10" startOffset="4727" location="C:\Users\rober\Downloads\eclipse-escet-v5.0-win32.win32.x86_64\eclipse-escet-v5.0\workspace\CIFBenchmarks-5.0.0.v20241003-060816\agv\agv.cif"/>
              <type xmi:type="types:BoolType" xmi:id="147">
                <position xmi:type="position:Position" xmi:id="148" source="File &quot;C:\Users\rober\Downloads\eclipse-escet-v5.0-win32.win32.x86_64\eclipse-escet-v5.0\workspace\CIFBenchmarks-5.0.0.v20241003-060816\agv\agv.cif&quot;: " startLine="196" endOffset="4727" startColumn="10" endLine="196" endColumn="10" startOffset="4727" location="C:\Users\rober\Downloads\eclipse-escet-v5.0-win32.win32.x86_64\eclipse-escet-v5.0\workspace\CIFBenchmarks-5.0.0.v20241003-060816\agv\agv.cif"/>
              </type>
            </event>
          </events>
        </edges>
        <markeds xmi:type="expressions:BoolExpression" xmi:id="149" value="true">
          <position xmi:type="position:Position" xmi:id="150" source="File &quot;C:\Users\rober\Downloads\eclipse-escet-v5.0-win32.win32.x86_64\eclipse-escet-v5.0\workspace\CIFBenchmarks-5.0.0.v20241003-060816\agv\agv.cif&quot;: " startLine="195" endOffset="4715" startColumn="5" endLine="195" endColumn="10" startOffset="4710" location="C:\Users\rober\Downloads\eclipse-escet-v5.0-win32.win32.x86_64\eclipse-escet-v5.0\workspace\CIFBenchmarks-5.0.0.v20241003-060816\agv\agv.cif"/>
          <type xmi:type="types:BoolType" xmi:id="151">
            <position xmi:type="position:Position" xmi:id="152" source="File &quot;C:\Users\rober\Downloads\eclipse-escet-v5.0-win32.win32.x86_64\eclipse-escet-v5.0\workspace\CIFBenchmarks-5.0.0.v20241003-060816\agv\agv.cif&quot;: " startLine="195" endOffset="4715" startColumn="5" endLine="195" endColumn="10" startOffset="4710" location="C:\Users\rober\Downloads\eclipse-escet-v5.0-win32.win32.x86_64\eclipse-escet-v5.0\workspace\CIFBenchmarks-5.0.0.v20241003-060816\agv\agv.cif"/>
          </type>
        </markeds>
      </locations>
    </body>
    <parameters xmi:type="cif:EventParameter" xmi:id="153">
      <position xmi:type="position:Position" xmi:id="154" source="File &quot;C:\Users\rober\Downloads\eclipse-escet-v5.0-win32.win32.x86_64\eclipse-escet-v5.0\workspace\CIFBenchmarks-5.0.0.v20241003-060816\agv\agv.cif&quot;: " startLine="189" endOffset="4627" startColumn="32" endLine="189" endColumn="32" startOffset="4627" location="C:\Users\rober\Downloads\eclipse-escet-v5.0-win32.win32.x86_64\eclipse-escet-v5.0\workspace\CIFBenchmarks-5.0.0.v20241003-060816\agv\agv.cif"/>
      <event xmi:type="declarations:Event" xmi:id="155" name="a">
        <position xmi:type="position:Position" xmi:id="156" source="File &quot;C:\Users\rober\Downloads\eclipse-escet-v5.0-win32.win32.x86_64\eclipse-escet-v5.0\workspace\CIFBenchmarks-5.0.0.v20241003-060816\agv\agv.cif&quot;: " startLine="189" endOffset="4627" startColumn="32" endLine="189" endColumn="32" startOffset="4627" location="C:\Users\rober\Downloads\eclipse-escet-v5.0-win32.win32.x86_64\eclipse-escet-v5.0\workspace\CIFBenchmarks-5.0.0.v20241003-060816\agv\agv.cif"/>
      </event>
    </parameters>
    <parameters xmi:type="cif:EventParameter" xmi:id="157">
      <position xmi:type="position:Position" xmi:id="158" source="File &quot;C:\Users\rober\Downloads\eclipse-escet-v5.0-win32.win32.x86_64\eclipse-escet-v5.0\workspace\CIFBenchmarks-5.0.0.v20241003-060816\agv\agv.cif&quot;: " startLine="189" endOffset="4630" startColumn="35" endLine="189" endColumn="35" startOffset="4630" location="C:\Users\rober\Downloads\eclipse-escet-v5.0-win32.win32.x86_64\eclipse-escet-v5.0\workspace\CIFBenchmarks-5.0.0.v20241003-060816\agv\agv.cif"/>
      <event xmi:type="declarations:Event" xmi:id="159" name="b">
        <position xmi:type="position:Position" xmi:id="160" source="File &quot;C:\Users\rober\Downloads\eclipse-escet-v5.0-win32.win32.x86_64\eclipse-escet-v5.0\workspace\CIFBenchmarks-5.0.0.v20241003-060816\agv\agv.cif&quot;: " startLine="189" endOffset="4630" startColumn="35" endLine="189" endColumn="35" startOffset="4630" location="C:\Users\rober\Downloads\eclipse-escet-v5.0-win32.win32.x86_64\eclipse-escet-v5.0\workspace\CIFBenchmarks-5.0.0.v20241003-060816\agv\agv.cif"/>
      </event>
    </parameters>
  </definitions>
  <components xmi:type="automata:Automaton" xmi:id="161" name="AGV1" kind="Plant">
    <position xmi:type="position:Position" xmi:id="162" source="File &quot;C:\Users\rober\Downloads\eclipse-escet-v5.0-win32.win32.x86_64\eclipse-escet-v5.0\workspace\CIFBenchmarks-5.0.0.v20241003-060816\agv\agv.cif&quot;: " startLine="20" endOffset="865" startColumn="7" endLine="20" endColumn="10" startOffset="862" location="C:\Users\rober\Downloads\eclipse-escet-v5.0-win32.win32.x86_64\eclipse-escet-v5.0\workspace\CIFBenchmarks-5.0.0.v20241003-060816\agv\agv.cif"/>
    <declarations xmi:type="declarations:Event" xmi:id="163" name="e11" controllable="true">
      <position xmi:type="position:Position" xmi:id="164" source="File &quot;C:\Users\rober\Downloads\eclipse-escet-v5.0-win32.win32.x86_64\eclipse-escet-v5.0\workspace\CIFBenchmarks-5.0.0.v20241003-060816\agv\agv.cif&quot;: " startLine="21" endOffset="885" startColumn="16" endLine="21" endColumn="18" startOffset="883" location="C:\Users\rober\Downloads\eclipse-escet-v5.0-win32.win32.x86_64\eclipse-escet-v5.0\workspace\CIFBenchmarks-5.0.0.v20241003-060816\agv\agv.cif"/>
    </declarations>
    <declarations xmi:type="declarations:Event" xmi:id="165" name="e13" controllable="true">
      <position xmi:type="position:Position" xmi:id="166" source="File &quot;C:\Users\rober\Downloads\eclipse-escet-v5.0-win32.win32.x86_64\eclipse-escet-v5.0\workspace\CIFBenchmarks-5.0.0.v20241003-060816\agv\agv.cif&quot;: " startLine="22" endOffset="935" startColumn="16" endLine="22" endColumn="18" startOffset="933" location="C:\Users\rober\Downloads\eclipse-escet-v5.0-win32.win32.x86_64\eclipse-escet-v5.0\workspace\CIFBenchmarks-5.0.0.v20241003-060816\agv\agv.cif"/>
    </declarations>
    <declarations xmi:type="declarations:Event" xmi:id="167" name="e10" controllable="false">
      <position xmi:type="position:Position" xmi:id="168" source="File &quot;C:\Users\rober\Downloads\eclipse-escet-v5.0-win32.win32.x86_64\eclipse-escet-v5.0\workspace\CIFBenchmarks-5.0.0.v20241003-060816\agv\agv.cif&quot;: " startLine="23" endOffset="978" startColumn="18" endLine="23" endColumn="20" startOffset="976" location="C:\Users\rober\Downloads\eclipse-escet-v5.0-win32.win32.x86_64\eclipse-escet-v5.0\workspace\CIFBenchmarks-5.0.0.v20241003-060816\agv\agv.cif"/>
    </declarations>
    <declarations xmi:type="declarations:Event" xmi:id="169" name="e12" controllable="false">
      <position xmi:type="position:Position" xmi:id="170" source="File &quot;C:\Users\rober\Downloads\eclipse-escet-v5.0-win32.win32.x86_64\eclipse-escet-v5.0\workspace\CIFBenchmarks-5.0.0.v20241003-060816\agv\agv.cif&quot;: " startLine="24" endOffset="1037" startColumn="18" endLine="24" endColumn="20" startOffset="1035" location="C:\Users\rober\Downloads\eclipse-escet-v5.0-win32.win32.x86_64\eclipse-escet-v5.0\workspace\CIFBenchmarks-5.0.0.v20241003-060816\agv\agv.cif"/>
    </declarations>
    <locations xmi:type="automata:Location" xmi:id="171" name="l0">
      <position xmi:type="position:Position" xmi:id="172" source="File &quot;C:\Users\rober\Downloads\eclipse-escet-v5.0-win32.win32.x86_64\eclipse-escet-v5.0\workspace\CIFBenchmarks-5.0.0.v20241003-060816\agv\agv.cif&quot;: " startLine="26" endOffset="1096" startColumn="12" endLine="26" endColumn="13" startOffset="1095" location="C:\Users\rober\Downloads\eclipse-escet-v5.0-win32.win32.x86_64\eclipse-escet-v5.0\workspace\CIFBenchmarks-5.0.0.v20241003-060816\agv\agv.cif"/>
      <initials xmi:type="expressions:BoolExpression" xmi:id="173" value="true">
        <position xmi:type="position:Position" xmi:id="174" source="File &quot;C:\Users\rober\Downloads\eclipse-escet-v5.0-win32.win32.x86_64\eclipse-escet-v5.0\workspace\CIFBenchmarks-5.0.0.v20241003-060816\agv\agv.cif&quot;: " startLine="27" endOffset="1109" startColumn="5" endLine="27" endColumn="11" startOffset="1103" location="C:\Users\rober\Downloads\eclipse-escet-v5.0-win32.win32.x86_64\eclipse-escet-v5.0\workspace\CIFBenchmarks-5.0.0.v20241003-060816\agv\agv.cif"/>
        <type xmi:type="types:BoolType" xmi:id="175">
          <position xmi:type="position:Position" xmi:id="176" source="File &quot;C:\Users\rober\Downloads\eclipse-escet-v5.0-win32.win32.x86_64\eclipse-escet-v5.0\workspace\CIFBenchmarks-5.0.0.v20241003-060816\agv\agv.cif&quot;: " startLine="27" endOffset="1109" startColumn="5" endLine="27" endColumn="11" startOffset="1103" location="C:\Users\rober\Downloads\eclipse-escet-v5.0-win32.win32.x86_64\eclipse-escet-v5.0\workspace\CIFBenchmarks-5.0.0.v20241003-060816\agv\agv.cif"/>
        </type>
      </initials>
      <edges xmi:type="automata:Edge" xmi:id="177" target="189">
        <position xmi:type="position:Position" xmi:id="178" source="File &quot;C:\Users\rober\Downloads\eclipse-escet-v5.0-win32.win32.x86_64\eclipse-escet-v5.0\workspace\CIFBenchmarks-5.0.0.v20241003-060816\agv\agv.cif&quot;: " startLine="28" endOffset="1127" startColumn="5" endLine="28" endColumn="8" startOffset="1124" location="C:\Users\rober\Downloads\eclipse-escet-v5.0-win32.win32.x86_64\eclipse-escet-v5.0\workspace\CIFBenchmarks-5.0.0.v20241003-060816\agv\agv.cif"/>
        <events xmi:type="automata:EdgeEvent" xmi:id="179">
          <position xmi:type="position:Position" xmi:id="180" source="File &quot;C:\Users\rober\Downloads\eclipse-escet-v5.0-win32.win32.x86_64\eclipse-escet-v5.0\workspace\CIFBenchmarks-5.0.0.v20241003-060816\agv\agv.cif&quot;: " startLine="28" endOffset="1131" startColumn="10" endLine="28" endColumn="12" startOffset="1129" location="C:\Users\rober\Downloads\eclipse-escet-v5.0-win32.win32.x86_64\eclipse-escet-v5.0\workspace\CIFBenchmarks-5.0.0.v20241003-060816\agv\agv.cif"/>
          <event xmi:type="expressions:EventExpression" xmi:id="181" event="163">
            <position xmi:type="position:Position" xmi:id="182" source="File &quot;C:\Users\rober\Downloads\eclipse-escet-v5.0-win32.win32.x86_64\eclipse-escet-v5.0\workspace\CIFBenchmarks-5.0.0.v20241003-060816\agv\agv.cif&quot;: " startLine="28" endOffset="1131" startColumn="10" endLine="28" endColumn="12" startOffset="1129" location="C:\Users\rober\Downloads\eclipse-escet-v5.0-win32.win32.x86_64\eclipse-escet-v5.0\workspace\CIFBenchmarks-5.0.0.v20241003-060816\agv\agv.cif"/>
            <type xmi:type="types:BoolType" xmi:id="183">
              <position xmi:type="position:Position" xmi:id="184" source="File &quot;C:\Users\rober\Downloads\eclipse-escet-v5.0-win32.win32.x86_64\eclipse-escet-v5.0\workspace\CIFBenchmarks-5.0.0.v20241003-060816\agv\agv.cif&quot;: " startLine="28" endOffset="1131" startColumn="10" endLine="28" endColumn="12" startOffset="1129" location="C:\Users\rober\Downloads\eclipse-escet-v5.0-win32.win32.x86_64\eclipse-escet-v5.0\workspace\CIFBenchmarks-5.0.0.v20241003-060816\agv\agv.cif"/>
            </type>
          </event>
        </events>
      </edges>
      <markeds xmi:type="expressions:BoolExpression" xmi:id="185" value="true">
        <position xmi:type="position:Position" xmi:id="186" source="File &quot;C:\Users\rober\Downloads\eclipse-escet-v5.0-win32.win32.x86_64\eclipse-escet-v5.0\workspace\CIFBenchmarks-5.0.0.v20241003-060816\agv\agv.cif&quot;: " startLine="27" endOffset="1117" startColumn="14" endLine="27" endColumn="19" startOffset="1112" location="C:\Users\rober\Downloads\eclipse-escet-v5.0-win32.win32.x86_64\eclipse-escet-v5.0\workspace\CIFBenchmarks-5.0.0.v20241003-060816\agv\agv.cif"/>
        <type xmi:type="types:BoolType" xmi:id="187">
          <position xmi:type="position:Position" xmi:id="188" source="File &quot;C:\Users\rober\Downloads\eclipse-escet-v5.0-win32.win32.x86_64\eclipse-escet-v5.0\workspace\CIFBenchmarks-5.0.0.v20241003-060816\agv\agv.cif&quot;: " startLine="27" endOffset="1117" startColumn="14" endLine="27" endColumn="19" startOffset="1112" location="C:\Users\rober\Downloads\eclipse-escet-v5.0-win32.win32.x86_64\eclipse-escet-v5.0\workspace\CIFBenchmarks-5.0.0.v20241003-060816\agv\agv.cif"/>
        </type>
      </markeds>
    </locations>
    <locations xmi:type="automata:Location" xmi:id="189" name="l1">
      <position xmi:type="position:Position" xmi:id="190" source="File &quot;C:\Users\rober\Downloads\eclipse-escet-v5.0-win32.win32.x86_64\eclipse-escet-v5.0\workspace\CIFBenchmarks-5.0.0.v20241003-060816\agv\agv.cif&quot;: " startLine="30" endOffset="1155" startColumn="12" endLine="30" endColumn="13" startOffset="1154" location="C:\Users\rober\Downloads\eclipse-escet-v5.0-win32.win32.x86_64\eclipse-escet-v5.0\workspace\CIFBenchmarks-5.0.0.v20241003-060816\agv\agv.cif"/>
      <edges xmi:type="automata:Edge" xmi:id="191" target="199">
        <position xmi:type="position:Position" xmi:id="192" source="File &quot;C:\Users\rober\Downloads\eclipse-escet-v5.0-win32.win32.x86_64\eclipse-escet-v5.0\workspace\CIFBenchmarks-5.0.0.v20241003-060816\agv\agv.cif&quot;: " startLine="31" endOffset="1165" startColumn="5" endLine="31" endColumn="8" startOffset="1162" location="C:\Users\rober\Downloads\eclipse-escet-v5.0-win32.win32.x86_64\eclipse-escet-v5.0\workspace\CIFBenchmarks-5.0.0.v20241003-060816\agv\agv.cif"/>
        <events xmi:type="automata:EdgeEvent" xmi:id="193">
          <position xmi:type="position:Position" xmi:id="194" source="File &quot;C:\Users\rober\Downloads\eclipse-escet-v5.0-win32.win32.x86_64\eclipse-escet-v5.0\workspace\CIFBenchmarks-5.0.0.v20241003-060816\agv\agv.cif&quot;: " startLine="31" endOffset="1169" startColumn="10" endLine="31" endColumn="12" startOffset="1167" location="C:\Users\rober\Downloads\eclipse-escet-v5.0-win32.win32.x86_64\eclipse-escet-v5.0\workspace\CIFBenchmarks-5.0.0.v20241003-060816\agv\agv.cif"/>
          <event xmi:type="expressions:EventExpression" xmi:id="195" event="167">
            <position xmi:type="position:Position" xmi:id="196" source="File &quot;C:\Users\rober\Downloads\eclipse-escet-v5.0-win32.win32.x86_64\eclipse-escet-v5.0\workspace\CIFBenchmarks-5.0.0.v20241003-060816\agv\agv.cif&quot;: " startLine="31" endOffset="1169" startColumn="10" endLine="31" endColumn="12" startOffset="1167" location="C:\Users\rober\Downloads\eclipse-escet-v5.0-win32.win32.x86_64\eclipse-escet-v5.0\workspace\CIFBenchmarks-5.0.0.v20241003-060816\agv\agv.cif"/>
            <type xmi:type="types:BoolType" xmi:id="197">
              <position xmi:type="position:Position" xmi:id="198" source="File &quot;C:\Users\rober\Downloads\eclipse-escet-v5.0-win32.win32.x86_64\eclipse-escet-v5.0\workspace\CIFBenchmarks-5.0.0.v20241003-060816\agv\agv.cif&quot;: " startLine="31" endOffset="1169" startColumn="10" endLine="31" endColumn="12" startOffset="1167" location="C:\Users\rober\Downloads\eclipse-escet-v5.0-win32.win32.x86_64\eclipse-escet-v5.0\workspace\CIFBenchmarks-5.0.0.v20241003-060816\agv\agv.cif"/>
            </type>
          </event>
        </events>
      </edges>
    </locations>
    <locations xmi:type="automata:Location" xmi:id="199" name="l2">
      <position xmi:type="position:Position" xmi:id="200" source="File &quot;C:\Users\rober\Downloads\eclipse-escet-v5.0-win32.win32.x86_64\eclipse-escet-v5.0\workspace\CIFBenchmarks-5.0.0.v20241003-060816\agv\agv.cif&quot;: " startLine="33" endOffset="1193" startColumn="12" endLine="33" endColumn="13" startOffset="1192" location="C:\Users\rober\Downloads\eclipse-escet-v5.0-win32.win32.x86_64\eclipse-escet-v5.0\workspace\CIFBenchmarks-5.0.0.v20241003-060816\agv\agv.cif"/>
      <edges xmi:type="automata:Edge" xmi:id="201" target="209">
        <position xmi:type="position:Position" xmi:id="202" source="File &quot;C:\Users\rober\Downloads\eclipse-escet-v5.0-win32.win32.x86_64\eclipse-escet-v5.0\workspace\CIFBenchmarks-5.0.0.v20241003-060816\agv\agv.cif&quot;: " startLine="34" endOffset="1203" startColumn="5" endLine="34" endColumn="8" startOffset="1200" location="C:\Users\rober\Downloads\eclipse-escet-v5.0-win32.win32.x86_64\eclipse-escet-v5.0\workspace\CIFBenchmarks-5.0.0.v20241003-060816\agv\agv.cif"/>
        <events xmi:type="automata:EdgeEvent" xmi:id="203">
          <position xmi:type="position:Position" xmi:id="204" source="File &quot;C:\Users\rober\Downloads\eclipse-escet-v5.0-win32.win32.x86_64\eclipse-escet-v5.0\workspace\CIFBenchmarks-5.0.0.v20241003-060816\agv\agv.cif&quot;: " startLine="34" endOffset="1207" startColumn="10" endLine="34" endColumn="12" startOffset="1205" location="C:\Users\rober\Downloads\eclipse-escet-v5.0-win32.win32.x86_64\eclipse-escet-v5.0\workspace\CIFBenchmarks-5.0.0.v20241003-060816\agv\agv.cif"/>
          <event xmi:type="expressions:EventExpression" xmi:id="205" event="165">
            <position xmi:type="position:Position" xmi:id="206" source="File &quot;C:\Users\rober\Downloads\eclipse-escet-v5.0-win32.win32.x86_64\eclipse-escet-v5.0\workspace\CIFBenchmarks-5.0.0.v20241003-060816\agv\agv.cif&quot;: " startLine="34" endOffset="1207" startColumn="10" endLine="34" endColumn="12" startOffset="1205" location="C:\Users\rober\Downloads\eclipse-escet-v5.0-win32.win32.x86_64\eclipse-escet-v5.0\workspace\CIFBenchmarks-5.0.0.v20241003-060816\agv\agv.cif"/>
            <type xmi:type="types:BoolType" xmi:id="207">
              <position xmi:type="position:Position" xmi:id="208" source="File &quot;C:\Users\rober\Downloads\eclipse-escet-v5.0-win32.win32.x86_64\eclipse-escet-v5.0\workspace\CIFBenchmarks-5.0.0.v20241003-060816\agv\agv.cif&quot;: " startLine="34" endOffset="1207" startColumn="10" endLine="34" endColumn="12" startOffset="1205" location="C:\Users\rober\Downloads\eclipse-escet-v5.0-win32.win32.x86_64\eclipse-escet-v5.0\workspace\CIFBenchmarks-5.0.0.v20241003-060816\agv\agv.cif"/>
            </type>
          </event>
        </events>
      </edges>
    </locations>
    <locations xmi:type="automata:Location" xmi:id="209" name="l3">
      <position xmi:type="position:Position" xmi:id="210" source="File &quot;C:\Users\rober\Downloads\eclipse-escet-v5.0-win32.win32.x86_64\eclipse-escet-v5.0\workspace\CIFBenchmarks-5.0.0.v20241003-060816\agv\agv.cif&quot;: " startLine="36" endOffset="1231" startColumn="12" endLine="36" endColumn="13" startOffset="1230" location="C:\Users\rober\Downloads\eclipse-escet-v5.0-win32.win32.x86_64\eclipse-escet-v5.0\workspace\CIFBenchmarks-5.0.0.v20241003-060816\agv\agv.cif"/>
      <edges xmi:type="automata:Edge" xmi:id="211" target="171">
        <position xmi:type="position:Position" xmi:id="212" source="File &quot;C:\Users\rober\Downloads\eclipse-escet-v5.0-win32.win32.x86_64\eclipse-escet-v5.0\workspace\CIFBenchmarks-5.0.0.v20241003-060816\agv\agv.cif&quot;: " startLine="37" endOffset="1241" startColumn="5" endLine="37" endColumn="8" startOffset="1238" location="C:\Users\rober\Downloads\eclipse-escet-v5.0-win32.win32.x86_64\eclipse-escet-v5.0\workspace\CIFBenchmarks-5.0.0.v20241003-060816\agv\agv.cif"/>
        <events xmi:type="automata:EdgeEvent" xmi:id="213">
          <position xmi:type="position:Position" xmi:id="214" source="File &quot;C:\Users\rober\Downloads\eclipse-escet-v5.0-win32.win32.x86_64\eclipse-escet-v5.0\workspace\CIFBenchmarks-5.0.0.v20241003-060816\agv\agv.cif&quot;: " startLine="37" endOffset="1245" startColumn="10" endLine="37" endColumn="12" startOffset="1243" location="C:\Users\rober\Downloads\eclipse-escet-v5.0-win32.win32.x86_64\eclipse-escet-v5.0\workspace\CIFBenchmarks-5.0.0.v20241003-060816\agv\agv.cif"/>
          <event xmi:type="expressions:EventExpression" xmi:id="215" event="169">
            <position xmi:type="position:Position" xmi:id="216" source="File &quot;C:\Users\rober\Downloads\eclipse-escet-v5.0-win32.win32.x86_64\eclipse-escet-v5.0\workspace\CIFBenchmarks-5.0.0.v20241003-060816\agv\agv.cif&quot;: " startLine="37" endOffset="1245" startColumn="10" endLine="37" endColumn="12" startOffset="1243" location="C:\Users\rober\Downloads\eclipse-escet-v5.0-win32.win32.x86_64\eclipse-escet-v5.0\workspace\CIFBenchmarks-5.0.0.v20241003-060816\agv\agv.cif"/>
            <type xmi:type="types:BoolType" xmi:id="217">
              <position xmi:type="position:Position" xmi:id="218" source="File &quot;C:\Users\rober\Downloads\eclipse-escet-v5.0-win32.win32.x86_64\eclipse-escet-v5.0\workspace\CIFBenchmarks-5.0.0.v20241003-060816\agv\agv.cif&quot;: " startLine="37" endOffset="1245" startColumn="10" endLine="37" endColumn="12" startOffset="1243" location="C:\Users\rober\Downloads\eclipse-escet-v5.0-win32.win32.x86_64\eclipse-escet-v5.0\workspace\CIFBenchmarks-5.0.0.v20241003-060816\agv\agv.cif"/>
            </type>
          </event>
        </events>
      </edges>
    </locations>
  </components>
  <components xmi:type="automata:Automaton" xmi:id="219" name="AGV2" kind="Plant">
    <position xmi:type="position:Position" xmi:id="220" source="File &quot;C:\Users\rober\Downloads\eclipse-escet-v5.0-win32.win32.x86_64\eclipse-escet-v5.0\workspace\CIFBenchmarks-5.0.0.v20241003-060816\agv\agv.cif&quot;: " startLine="40" endOffset="1270" startColumn="7" endLine="40" endColumn="10" startOffset="1267" location="C:\Users\rober\Downloads\eclipse-escet-v5.0-win32.win32.x86_64\eclipse-escet-v5.0\workspace\CIFBenchmarks-5.0.0.v20241003-060816\agv\agv.cif"/>
    <declarations xmi:type="declarations:Event" xmi:id="221" name="e21" controllable="true">
      <position xmi:type="position:Position" xmi:id="222" source="File &quot;C:\Users\rober\Downloads\eclipse-escet-v5.0-win32.win32.x86_64\eclipse-escet-v5.0\workspace\CIFBenchmarks-5.0.0.v20241003-060816\agv\agv.cif&quot;: " startLine="41" endOffset="1290" startColumn="16" endLine="41" endColumn="18" startOffset="1288" location="C:\Users\rober\Downloads\eclipse-escet-v5.0-win32.win32.x86_64\eclipse-escet-v5.0\workspace\CIFBenchmarks-5.0.0.v20241003-060816\agv\agv.cif"/>
    </declarations>
    <declarations xmi:type="declarations:Event" xmi:id="223" name="e23" controllable="true">
      <position xmi:type="position:Position" xmi:id="224" source="File &quot;C:\Users\rober\Downloads\eclipse-escet-v5.0-win32.win32.x86_64\eclipse-escet-v5.0\workspace\CIFBenchmarks-5.0.0.v20241003-060816\agv\agv.cif&quot;: " startLine="42" endOffset="1340" startColumn="16" endLine="42" endColumn="18" startOffset="1338" location="C:\Users\rober\Downloads\eclipse-escet-v5.0-win32.win32.x86_64\eclipse-escet-v5.0\workspace\CIFBenchmarks-5.0.0.v20241003-060816\agv\agv.cif"/>
    </declarations>
    <declarations xmi:type="declarations:Event" xmi:id="225" name="e18" controllable="false">
      <position xmi:type="position:Position" xmi:id="226" source="File &quot;C:\Users\rober\Downloads\eclipse-escet-v5.0-win32.win32.x86_64\eclipse-escet-v5.0\workspace\CIFBenchmarks-5.0.0.v20241003-060816\agv\agv.cif&quot;: " startLine="43" endOffset="1383" startColumn="18" endLine="43" endColumn="20" startOffset="1381" location="C:\Users\rober\Downloads\eclipse-escet-v5.0-win32.win32.x86_64\eclipse-escet-v5.0\workspace\CIFBenchmarks-5.0.0.v20241003-060816\agv\agv.cif"/>
    </declarations>
    <declarations xmi:type="declarations:Event" xmi:id="227" name="e20" controllable="false">
      <position xmi:type="position:Position" xmi:id="228" source="File &quot;C:\Users\rober\Downloads\eclipse-escet-v5.0-win32.win32.x86_64\eclipse-escet-v5.0\workspace\CIFBenchmarks-5.0.0.v20241003-060816\agv\agv.cif&quot;: " startLine="44" endOffset="1439" startColumn="18" endLine="44" endColumn="20" startOffset="1437" location="C:\Users\rober\Downloads\eclipse-escet-v5.0-win32.win32.x86_64\eclipse-escet-v5.0\workspace\CIFBenchmarks-5.0.0.v20241003-060816\agv\agv.cif"/>
    </declarations>
    <declarations xmi:type="declarations:Event" xmi:id="229" name="e22" controllable="false">
      <position xmi:type="position:Position" xmi:id="230" source="File &quot;C:\Users\rober\Downloads\eclipse-escet-v5.0-win32.win32.x86_64\eclipse-escet-v5.0\workspace\CIFBenchmarks-5.0.0.v20241003-060816\agv\agv.cif&quot;: " startLine="45" endOffset="1496" startColumn="18" endLine="45" endColumn="20" startOffset="1494" location="C:\Users\rober\Downloads\eclipse-escet-v5.0-win32.win32.x86_64\eclipse-escet-v5.0\workspace\CIFBenchmarks-5.0.0.v20241003-060816\agv\agv.cif"/>
    </declarations>
    <declarations xmi:type="declarations:Event" xmi:id="231" name="e24" controllable="false">
      <position xmi:type="position:Position" xmi:id="232" source="File &quot;C:\Users\rober\Downloads\eclipse-escet-v5.0-win32.win32.x86_64\eclipse-escet-v5.0\workspace\CIFBenchmarks-5.0.0.v20241003-060816\agv\agv.cif&quot;: " startLine="46" endOffset="1555" startColumn="18" endLine="46" endColumn="20" startOffset="1553" location="C:\Users\rober\Downloads\eclipse-escet-v5.0-win32.win32.x86_64\eclipse-escet-v5.0\workspace\CIFBenchmarks-5.0.0.v20241003-060816\agv\agv.cif"/>
    </declarations>
    <declarations xmi:type="declarations:Event" xmi:id="233" name="e26" controllable="false">
      <position xmi:type="position:Position" xmi:id="234" source="File &quot;C:\Users\rober\Downloads\eclipse-escet-v5.0-win32.win32.x86_64\eclipse-escet-v5.0\workspace\CIFBenchmarks-5.0.0.v20241003-060816\agv\agv.cif&quot;: " startLine="47" endOffset="1615" startColumn="18" endLine="47" endColumn="20" startOffset="1613" location="C:\Users\rober\Downloads\eclipse-escet-v5.0-win32.win32.x86_64\eclipse-escet-v5.0\workspace\CIFBenchmarks-5.0.0.v20241003-060816\agv\agv.cif"/>
    </declarations>
    <declarations xmi:type="declarations:Event" xmi:id="235" name="e28" controllable="false">
      <position xmi:type="position:Position" xmi:id="236" source="File &quot;C:\Users\rober\Downloads\eclipse-escet-v5.0-win32.win32.x86_64\eclipse-escet-v5.0\workspace\CIFBenchmarks-5.0.0.v20241003-060816\agv\agv.cif&quot;: " startLine="48" endOffset="1675" startColumn="18" endLine="48" endColumn="20" startOffset="1673" location="C:\Users\rober\Downloads\eclipse-escet-v5.0-win32.win32.x86_64\eclipse-escet-v5.0\workspace\CIFBenchmarks-5.0.0.v20241003-060816\agv\agv.cif"/>
    </declarations>
    <locations xmi:type="automata:Location" xmi:id="237" name="l0">
      <position xmi:type="position:Position" xmi:id="238" source="File &quot;C:\Users\rober\Downloads\eclipse-escet-v5.0-win32.win32.x86_64\eclipse-escet-v5.0\workspace\CIFBenchmarks-5.0.0.v20241003-060816\agv\agv.cif&quot;: " startLine="50" endOffset="1734" startColumn="12" endLine="50" endColumn="13" startOffset="1733" location="C:\Users\rober\Downloads\eclipse-escet-v5.0-win32.win32.x86_64\eclipse-escet-v5.0\workspace\CIFBenchmarks-5.0.0.v20241003-060816\agv\agv.cif"/>
      <initials xmi:type="expressions:BoolExpression" xmi:id="239" value="true">
        <position xmi:type="position:Position" xmi:id="240" source="File &quot;C:\Users\rober\Downloads\eclipse-escet-v5.0-win32.win32.x86_64\eclipse-escet-v5.0\workspace\CIFBenchmarks-5.0.0.v20241003-060816\agv\agv.cif&quot;: " startLine="51" endOffset="1747" startColumn="5" endLine="51" endColumn="11" startOffset="1741" location="C:\Users\rober\Downloads\eclipse-escet-v5.0-win32.win32.x86_64\eclipse-escet-v5.0\workspace\CIFBenchmarks-5.0.0.v20241003-060816\agv\agv.cif"/>
        <type xmi:type="types:BoolType" xmi:id="241">
          <position xmi:type="position:Position" xmi:id="242" source="File &quot;C:\Users\rober\Downloads\eclipse-escet-v5.0-win32.win32.x86_64\eclipse-escet-v5.0\workspace\CIFBenchmarks-5.0.0.v20241003-060816\agv\agv.cif&quot;: " startLine="51" endOffset="1747" startColumn="5" endLine="51" endColumn="11" startOffset="1741" location="C:\Users\rober\Downloads\eclipse-escet-v5.0-win32.win32.x86_64\eclipse-escet-v5.0\workspace\CIFBenchmarks-5.0.0.v20241003-060816\agv\agv.cif"/>
        </type>
      </initials>
      <edges xmi:type="automata:Edge" xmi:id="243" target="255">
        <position xmi:type="position:Position" xmi:id="244" source="File &quot;C:\Users\rober\Downloads\eclipse-escet-v5.0-win32.win32.x86_64\eclipse-escet-v5.0\workspace\CIFBenchmarks-5.0.0.v20241003-060816\agv\agv.cif&quot;: " startLine="52" endOffset="1765" startColumn="5" endLine="52" endColumn="8" startOffset="1762" location="C:\Users\rober\Downloads\eclipse-escet-v5.0-win32.win32.x86_64\eclipse-escet-v5.0\workspace\CIFBenchmarks-5.0.0.v20241003-060816\agv\agv.cif"/>
        <events xmi:type="automata:EdgeEvent" xmi:id="245">
          <position xmi:type="position:Position" xmi:id="246" source="File &quot;C:\Users\rober\Downloads\eclipse-escet-v5.0-win32.win32.x86_64\eclipse-escet-v5.0\workspace\CIFBenchmarks-5.0.0.v20241003-060816\agv\agv.cif&quot;: " startLine="52" endOffset="1769" startColumn="10" endLine="52" endColumn="12" startOffset="1767" location="C:\Users\rober\Downloads\eclipse-escet-v5.0-win32.win32.x86_64\eclipse-escet-v5.0\workspace\CIFBenchmarks-5.0.0.v20241003-060816\agv\agv.cif"/>
          <event xmi:type="expressions:EventExpression" xmi:id="247" event="221">
            <position xmi:type="position:Position" xmi:id="248" source="File &quot;C:\Users\rober\Downloads\eclipse-escet-v5.0-win32.win32.x86_64\eclipse-escet-v5.0\workspace\CIFBenchmarks-5.0.0.v20241003-060816\agv\agv.cif&quot;: " startLine="52" endOffset="1769" startColumn="10" endLine="52" endColumn="12" startOffset="1767" location="C:\Users\rober\Downloads\eclipse-escet-v5.0-win32.win32.x86_64\eclipse-escet-v5.0\workspace\CIFBenchmarks-5.0.0.v20241003-060816\agv\agv.cif"/>
            <type xmi:type="types:BoolType" xmi:id="249">
              <position xmi:type="position:Position" xmi:id="250" source="File &quot;C:\Users\rober\Downloads\eclipse-escet-v5.0-win32.win32.x86_64\eclipse-escet-v5.0\workspace\CIFBenchmarks-5.0.0.v20241003-060816\agv\agv.cif&quot;: " startLine="52" endOffset="1769" startColumn="10" endLine="52" endColumn="12" startOffset="1767" location="C:\Users\rober\Downloads\eclipse-escet-v5.0-win32.win32.x86_64\eclipse-escet-v5.0\workspace\CIFBenchmarks-5.0.0.v20241003-060816\agv\agv.cif"/>
            </type>
          </event>
        </events>
      </edges>
      <markeds xmi:type="expressions:BoolExpression" xmi:id="251" value="true">
        <position xmi:type="position:Position" xmi:id="252" source="File &quot;C:\Users\rober\Downloads\eclipse-escet-v5.0-win32.win32.x86_64\eclipse-escet-v5.0\workspace\CIFBenchmarks-5.0.0.v20241003-060816\agv\agv.cif&quot;: " startLine="51" endOffset="1755" startColumn="14" endLine="51" endColumn="19" startOffset="1750" location="C:\Users\rober\Downloads\eclipse-escet-v5.0-win32.win32.x86_64\eclipse-escet-v5.0\workspace\CIFBenchmarks-5.0.0.v20241003-060816\agv\agv.cif"/>
        <type xmi:type="types:BoolType" xmi:id="253">
          <position xmi:type="position:Position" xmi:id="254" source="File &quot;C:\Users\rober\Downloads\eclipse-escet-v5.0-win32.win32.x86_64\eclipse-escet-v5.0\workspace\CIFBenchmarks-5.0.0.v20241003-060816\agv\agv.cif&quot;: " startLine="51" endOffset="1755" startColumn="14" endLine="51" endColumn="19" startOffset="1750" location="C:\Users\rober\Downloads\eclipse-escet-v5.0-win32.win32.x86_64\eclipse-escet-v5.0\workspace\CIFBenchmarks-5.0.0.v20241003-060816\agv\agv.cif"/>
        </type>
      </markeds>
    </locations>
    <locations xmi:type="automata:Location" xmi:id="255" name="l1">
      <position xmi:type="position:Position" xmi:id="256" source="File &quot;C:\Users\rober\Downloads\eclipse-escet-v5.0-win32.win32.x86_64\eclipse-escet-v5.0\workspace\CIFBenchmarks-5.0.0.v20241003-060816\agv\agv.cif&quot;: " startLine="54" endOffset="1793" startColumn="12" endLine="54" endColumn="13" startOffset="1792" location="C:\Users\rober\Downloads\eclipse-escet-v5.0-win32.win32.x86_64\eclipse-escet-v5.0\workspace\CIFBenchmarks-5.0.0.v20241003-060816\agv\agv.cif"/>
      <edges xmi:type="automata:Edge" xmi:id="257" target="265">
        <position xmi:type="position:Position" xmi:id="258" source="File &quot;C:\Users\rober\Downloads\eclipse-escet-v5.0-win32.win32.x86_64\eclipse-escet-v5.0\workspace\CIFBenchmarks-5.0.0.v20241003-060816\agv\agv.cif&quot;: " startLine="55" endOffset="1803" startColumn="5" endLine="55" endColumn="8" startOffset="1800" location="C:\Users\rober\Downloads\eclipse-escet-v5.0-win32.win32.x86_64\eclipse-escet-v5.0\workspace\CIFBenchmarks-5.0.0.v20241003-060816\agv\agv.cif"/>
        <events xmi:type="automata:EdgeEvent" xmi:id="259">
          <position xmi:type="position:Position" xmi:id="260" source="File &quot;C:\Users\rober\Downloads\eclipse-escet-v5.0-win32.win32.x86_64\eclipse-escet-v5.0\workspace\CIFBenchmarks-5.0.0.v20241003-060816\agv\agv.cif&quot;: " startLine="55" endOffset="1807" startColumn="10" endLine="55" endColumn="12" startOffset="1805" location="C:\Users\rober\Downloads\eclipse-escet-v5.0-win32.win32.x86_64\eclipse-escet-v5.0\workspace\CIFBenchmarks-5.0.0.v20241003-060816\agv\agv.cif"/>
          <event xmi:type="expressions:EventExpression" xmi:id="261" event="225">
            <position xmi:type="position:Position" xmi:id="262" source="File &quot;C:\Users\rober\Downloads\eclipse-escet-v5.0-win32.win32.x86_64\eclipse-escet-v5.0\workspace\CIFBenchmarks-5.0.0.v20241003-060816\agv\agv.cif&quot;: " startLine="55" endOffset="1807" startColumn="10" endLine="55" endColumn="12" startOffset="1805" location="C:\Users\rober\Downloads\eclipse-escet-v5.0-win32.win32.x86_64\eclipse-escet-v5.0\workspace\CIFBenchmarks-5.0.0.v20241003-060816\agv\agv.cif"/>
            <type xmi:type="types:BoolType" xmi:id="263">
              <position xmi:type="position:Position" xmi:id="264" source="File &quot;C:\Users\rober\Downloads\eclipse-escet-v5.0-win32.win32.x86_64\eclipse-escet-v5.0\workspace\CIFBenchmarks-5.0.0.v20241003-060816\agv\agv.cif&quot;: " startLine="55" endOffset="1807" startColumn="10" endLine="55" endColumn="12" startOffset="1805" location="C:\Users\rober\Downloads\eclipse-escet-v5.0-win32.win32.x86_64\eclipse-escet-v5.0\workspace\CIFBenchmarks-5.0.0.v20241003-060816\agv\agv.cif"/>
            </type>
          </event>
        </events>
      </edges>
    </locations>
    <locations xmi:type="automata:Location" xmi:id="265" name="l2">
      <position xmi:type="position:Position" xmi:id="266" source="File &quot;C:\Users\rober\Downloads\eclipse-escet-v5.0-win32.win32.x86_64\eclipse-escet-v5.0\workspace\CIFBenchmarks-5.0.0.v20241003-060816\agv\agv.cif&quot;: " startLine="57" endOffset="1831" startColumn="12" endLine="57" endColumn="13" startOffset="1830" location="C:\Users\rober\Downloads\eclipse-escet-v5.0-win32.win32.x86_64\eclipse-escet-v5.0\workspace\CIFBenchmarks-5.0.0.v20241003-060816\agv\agv.cif"/>
      <edges xmi:type="automata:Edge" xmi:id="267" target="275">
        <position xmi:type="position:Position" xmi:id="268" source="File &quot;C:\Users\rober\Downloads\eclipse-escet-v5.0-win32.win32.x86_64\eclipse-escet-v5.0\workspace\CIFBenchmarks-5.0.0.v20241003-060816\agv\agv.cif&quot;: " startLine="58" endOffset="1841" startColumn="5" endLine="58" endColumn="8" startOffset="1838" location="C:\Users\rober\Downloads\eclipse-escet-v5.0-win32.win32.x86_64\eclipse-escet-v5.0\workspace\CIFBenchmarks-5.0.0.v20241003-060816\agv\agv.cif"/>
        <events xmi:type="automata:EdgeEvent" xmi:id="269">
          <position xmi:type="position:Position" xmi:id="270" source="File &quot;C:\Users\rober\Downloads\eclipse-escet-v5.0-win32.win32.x86_64\eclipse-escet-v5.0\workspace\CIFBenchmarks-5.0.0.v20241003-060816\agv\agv.cif&quot;: " startLine="58" endOffset="1845" startColumn="10" endLine="58" endColumn="12" startOffset="1843" location="C:\Users\rober\Downloads\eclipse-escet-v5.0-win32.win32.x86_64\eclipse-escet-v5.0\workspace\CIFBenchmarks-5.0.0.v20241003-060816\agv\agv.cif"/>
          <event xmi:type="expressions:EventExpression" xmi:id="271" event="227">
            <position xmi:type="position:Position" xmi:id="272" source="File &quot;C:\Users\rober\Downloads\eclipse-escet-v5.0-win32.win32.x86_64\eclipse-escet-v5.0\workspace\CIFBenchmarks-5.0.0.v20241003-060816\agv\agv.cif&quot;: " startLine="58" endOffset="1845" startColumn="10" endLine="58" endColumn="12" startOffset="1843" location="C:\Users\rober\Downloads\eclipse-escet-v5.0-win32.win32.x86_64\eclipse-escet-v5.0\workspace\CIFBenchmarks-5.0.0.v20241003-060816\agv\agv.cif"/>
            <type xmi:type="types:BoolType" xmi:id="273">
              <position xmi:type="position:Position" xmi:id="274" source="File &quot;C:\Users\rober\Downloads\eclipse-escet-v5.0-win32.win32.x86_64\eclipse-escet-v5.0\workspace\CIFBenchmarks-5.0.0.v20241003-060816\agv\agv.cif&quot;: " startLine="58" endOffset="1845" startColumn="10" endLine="58" endColumn="12" startOffset="1843" location="C:\Users\rober\Downloads\eclipse-escet-v5.0-win32.win32.x86_64\eclipse-escet-v5.0\workspace\CIFBenchmarks-5.0.0.v20241003-060816\agv\agv.cif"/>
            </type>
          </event>
        </events>
      </edges>
    </locations>
    <locations xmi:type="automata:Location" xmi:id="275" name="l3">
      <position xmi:type="position:Position" xmi:id="276" source="File &quot;C:\Users\rober\Downloads\eclipse-escet-v5.0-win32.win32.x86_64\eclipse-escet-v5.0\workspace\CIFBenchmarks-5.0.0.v20241003-060816\agv\agv.cif&quot;: " startLine="60" endOffset="1869" startColumn="12" endLine="60" endColumn="13" startOffset="1868" location="C:\Users\rober\Downloads\eclipse-escet-v5.0-win32.win32.x86_64\eclipse-escet-v5.0\workspace\CIFBenchmarks-5.0.0.v20241003-060816\agv\agv.cif"/>
      <edges xmi:type="automata:Edge" xmi:id="277" target="285">
        <position xmi:type="position:Position" xmi:id="278" source="File &quot;C:\Users\rober\Downloads\eclipse-escet-v5.0-win32.win32.x86_64\eclipse-escet-v5.0\workspace\CIFBenchmarks-5.0.0.v20241003-060816\agv\agv.cif&quot;: " startLine="61" endOffset="1879" startColumn="5" endLine="61" endColumn="8" startOffset="1876" location="C:\Users\rober\Downloads\eclipse-escet-v5.0-win32.win32.x86_64\eclipse-escet-v5.0\workspace\CIFBenchmarks-5.0.0.v20241003-060816\agv\agv.cif"/>
        <events xmi:type="automata:EdgeEvent" xmi:id="279">
          <position xmi:type="position:Position" xmi:id="280" source="File &quot;C:\Users\rober\Downloads\eclipse-escet-v5.0-win32.win32.x86_64\eclipse-escet-v5.0\workspace\CIFBenchmarks-5.0.0.v20241003-060816\agv\agv.cif&quot;: " startLine="61" endOffset="1883" startColumn="10" endLine="61" endColumn="12" startOffset="1881" location="C:\Users\rober\Downloads\eclipse-escet-v5.0-win32.win32.x86_64\eclipse-escet-v5.0\workspace\CIFBenchmarks-5.0.0.v20241003-060816\agv\agv.cif"/>
          <event xmi:type="expressions:EventExpression" xmi:id="281" event="229">
            <position xmi:type="position:Position" xmi:id="282" source="File &quot;C:\Users\rober\Downloads\eclipse-escet-v5.0-win32.win32.x86_64\eclipse-escet-v5.0\workspace\CIFBenchmarks-5.0.0.v20241003-060816\agv\agv.cif&quot;: " startLine="61" endOffset="1883" startColumn="10" endLine="61" endColumn="12" startOffset="1881" location="C:\Users\rober\Downloads\eclipse-escet-v5.0-win32.win32.x86_64\eclipse-escet-v5.0\workspace\CIFBenchmarks-5.0.0.v20241003-060816\agv\agv.cif"/>
            <type xmi:type="types:BoolType" xmi:id="283">
              <position xmi:type="position:Position" xmi:id="284" source="File &quot;C:\Users\rober\Downloads\eclipse-escet-v5.0-win32.win32.x86_64\eclipse-escet-v5.0\workspace\CIFBenchmarks-5.0.0.v20241003-060816\agv\agv.cif&quot;: " startLine="61" endOffset="1883" startColumn="10" endLine="61" endColumn="12" startOffset="1881" location="C:\Users\rober\Downloads\eclipse-escet-v5.0-win32.win32.x86_64\eclipse-escet-v5.0\workspace\CIFBenchmarks-5.0.0.v20241003-060816\agv\agv.cif"/>
            </type>
          </event>
        </events>
      </edges>
    </locations>
    <locations xmi:type="automata:Location" xmi:id="285" name="l4">
      <position xmi:type="position:Position" xmi:id="286" source="File &quot;C:\Users\rober\Downloads\eclipse-escet-v5.0-win32.win32.x86_64\eclipse-escet-v5.0\workspace\CIFBenchmarks-5.0.0.v20241003-060816\agv\agv.cif&quot;: " startLine="63" endOffset="1907" startColumn="12" endLine="63" endColumn="13" startOffset="1906" location="C:\Users\rober\Downloads\eclipse-escet-v5.0-win32.win32.x86_64\eclipse-escet-v5.0\workspace\CIFBenchmarks-5.0.0.v20241003-060816\agv\agv.cif"/>
      <edges xmi:type="automata:Edge" xmi:id="287" target="295">
        <position xmi:type="position:Position" xmi:id="288" source="File &quot;C:\Users\rober\Downloads\eclipse-escet-v5.0-win32.win32.x86_64\eclipse-escet-v5.0\workspace\CIFBenchmarks-5.0.0.v20241003-060816\agv\agv.cif&quot;: " startLine="64" endOffset="1917" startColumn="5" endLine="64" endColumn="8" startOffset="1914" location="C:\Users\rober\Downloads\eclipse-escet-v5.0-win32.win32.x86_64\eclipse-escet-v5.0\workspace\CIFBenchmarks-5.0.0.v20241003-060816\agv\agv.cif"/>
        <events xmi:type="automata:EdgeEvent" xmi:id="289">
          <position xmi:type="position:Position" xmi:id="290" source="File &quot;C:\Users\rober\Downloads\eclipse-escet-v5.0-win32.win32.x86_64\eclipse-escet-v5.0\workspace\CIFBenchmarks-5.0.0.v20241003-060816\agv\agv.cif&quot;: " startLine="64" endOffset="1921" startColumn="10" endLine="64" endColumn="12" startOffset="1919" location="C:\Users\rober\Downloads\eclipse-escet-v5.0-win32.win32.x86_64\eclipse-escet-v5.0\workspace\CIFBenchmarks-5.0.0.v20241003-060816\agv\agv.cif"/>
          <event xmi:type="expressions:EventExpression" xmi:id="291" event="223">
            <position xmi:type="position:Position" xmi:id="292" source="File &quot;C:\Users\rober\Downloads\eclipse-escet-v5.0-win32.win32.x86_64\eclipse-escet-v5.0\workspace\CIFBenchmarks-5.0.0.v20241003-060816\agv\agv.cif&quot;: " startLine="64" endOffset="1921" startColumn="10" endLine="64" endColumn="12" startOffset="1919" location="C:\Users\rober\Downloads\eclipse-escet-v5.0-win32.win32.x86_64\eclipse-escet-v5.0\workspace\CIFBenchmarks-5.0.0.v20241003-060816\agv\agv.cif"/>
            <type xmi:type="types:BoolType" xmi:id="293">
              <position xmi:type="position:Position" xmi:id="294" source="File &quot;C:\Users\rober\Downloads\eclipse-escet-v5.0-win32.win32.x86_64\eclipse-escet-v5.0\workspace\CIFBenchmarks-5.0.0.v20241003-060816\agv\agv.cif&quot;: " startLine="64" endOffset="1921" startColumn="10" endLine="64" endColumn="12" startOffset="1919" location="C:\Users\rober\Downloads\eclipse-escet-v5.0-win32.win32.x86_64\eclipse-escet-v5.0\workspace\CIFBenchmarks-5.0.0.v20241003-060816\agv\agv.cif"/>
            </type>
          </event>
        </events>
      </edges>
    </locations>
    <locations xmi:type="automata:Location" xmi:id="295" name="l5">
      <position xmi:type="position:Position" xmi:id="296" source="File &quot;C:\Users\rober\Downloads\eclipse-escet-v5.0-win32.win32.x86_64\eclipse-escet-v5.0\workspace\CIFBenchmarks-5.0.0.v20241003-060816\agv\agv.cif&quot;: " startLine="66" endOffset="1945" startColumn="12" endLine="66" endColumn="13" startOffset="1944" location="C:\Users\rober\Downloads\eclipse-escet-v5.0-win32.win32.x86_64\eclipse-escet-v5.0\workspace\CIFBenchmarks-5.0.0.v20241003-060816\agv\agv.cif"/>
      <edges xmi:type="automata:Edge" xmi:id="297" target="305">
        <position xmi:type="position:Position" xmi:id="298" source="File &quot;C:\Users\rober\Downloads\eclipse-escet-v5.0-win32.win32.x86_64\eclipse-escet-v5.0\workspace\CIFBenchmarks-5.0.0.v20241003-060816\agv\agv.cif&quot;: " startLine="67" endOffset="1955" startColumn="5" endLine="67" endColumn="8" startOffset="1952" location="C:\Users\rober\Downloads\eclipse-escet-v5.0-win32.win32.x86_64\eclipse-escet-v5.0\workspace\CIFBenchmarks-5.0.0.v20241003-060816\agv\agv.cif"/>
        <events xmi:type="automata:EdgeEvent" xmi:id="299">
          <position xmi:type="position:Position" xmi:id="300" source="File &quot;C:\Users\rober\Downloads\eclipse-escet-v5.0-win32.win32.x86_64\eclipse-escet-v5.0\workspace\CIFBenchmarks-5.0.0.v20241003-060816\agv\agv.cif&quot;: " startLine="67" endOffset="1959" startColumn="10" endLine="67" endColumn="12" startOffset="1957" location="C:\Users\rober\Downloads\eclipse-escet-v5.0-win32.win32.x86_64\eclipse-escet-v5.0\workspace\CIFBenchmarks-5.0.0.v20241003-060816\agv\agv.cif"/>
          <event xmi:type="expressions:EventExpression" xmi:id="301" event="231">
            <position xmi:type="position:Position" xmi:id="302" source="File &quot;C:\Users\rober\Downloads\eclipse-escet-v5.0-win32.win32.x86_64\eclipse-escet-v5.0\workspace\CIFBenchmarks-5.0.0.v20241003-060816\agv\agv.cif&quot;: " startLine="67" endOffset="1959" startColumn="10" endLine="67" endColumn="12" startOffset="1957" location="C:\Users\rober\Downloads\eclipse-escet-v5.0-win32.win32.x86_64\eclipse-escet-v5.0\workspace\CIFBenchmarks-5.0.0.v20241003-060816\agv\agv.cif"/>
            <type xmi:type="types:BoolType" xmi:id="303">
              <position xmi:type="position:Position" xmi:id="304" source="File &quot;C:\Users\rober\Downloads\eclipse-escet-v5.0-win32.win32.x86_64\eclipse-escet-v5.0\workspace\CIFBenchmarks-5.0.0.v20241003-060816\agv\agv.cif&quot;: " startLine="67" endOffset="1959" startColumn="10" endLine="67" endColumn="12" startOffset="1957" location="C:\Users\rober\Downloads\eclipse-escet-v5.0-win32.win32.x86_64\eclipse-escet-v5.0\workspace\CIFBenchmarks-5.0.0.v20241003-060816\agv\agv.cif"/>
            </type>
          </event>
        </events>
      </edges>
    </locations>
    <locations xmi:type="automata:Location" xmi:id="305" name="l6">
      <position xmi:type="position:Position" xmi:id="306" source="File &quot;C:\Users\rober\Downloads\eclipse-escet-v5.0-win32.win32.x86_64\eclipse-escet-v5.0\workspace\CIFBenchmarks-5.0.0.v20241003-060816\agv\agv.cif&quot;: " startLine="69" endOffset="1983" startColumn="12" endLine="69" endColumn="13" startOffset="1982" location="C:\Users\rober\Downloads\eclipse-escet-v5.0-win32.win32.x86_64\eclipse-escet-v5.0\workspace\CIFBenchmarks-5.0.0.v20241003-060816\agv\agv.cif"/>
      <edges xmi:type="automata:Edge" xmi:id="307" target="315">
        <position xmi:type="position:Position" xmi:id="308" source="File &quot;C:\Users\rober\Downloads\eclipse-escet-v5.0-win32.win32.x86_64\eclipse-escet-v5.0\workspace\CIFBenchmarks-5.0.0.v20241003-060816\agv\agv.cif&quot;: " startLine="70" endOffset="1993" startColumn="5" endLine="70" endColumn="8" startOffset="1990" location="C:\Users\rober\Downloads\eclipse-escet-v5.0-win32.win32.x86_64\eclipse-escet-v5.0\workspace\CIFBenchmarks-5.0.0.v20241003-060816\agv\agv.cif"/>
        <events xmi:type="automata:EdgeEvent" xmi:id="309">
          <position xmi:type="position:Position" xmi:id="310" source="File &quot;C:\Users\rober\Downloads\eclipse-escet-v5.0-win32.win32.x86_64\eclipse-escet-v5.0\workspace\CIFBenchmarks-5.0.0.v20241003-060816\agv\agv.cif&quot;: " startLine="70" endOffset="1997" startColumn="10" endLine="70" endColumn="12" startOffset="1995" location="C:\Users\rober\Downloads\eclipse-escet-v5.0-win32.win32.x86_64\eclipse-escet-v5.0\workspace\CIFBenchmarks-5.0.0.v20241003-060816\agv\agv.cif"/>
          <event xmi:type="expressions:EventExpression" xmi:id="311" event="233">
            <position xmi:type="position:Position" xmi:id="312" source="File &quot;C:\Users\rober\Downloads\eclipse-escet-v5.0-win32.win32.x86_64\eclipse-escet-v5.0\workspace\CIFBenchmarks-5.0.0.v20241003-060816\agv\agv.cif&quot;: " startLine="70" endOffset="1997" startColumn="10" endLine="70" endColumn="12" startOffset="1995" location="C:\Users\rober\Downloads\eclipse-escet-v5.0-win32.win32.x86_64\eclipse-escet-v5.0\workspace\CIFBenchmarks-5.0.0.v20241003-060816\agv\agv.cif"/>
            <type xmi:type="types:BoolType" xmi:id="313">
              <position xmi:type="position:Position" xmi:id="314" source="File &quot;C:\Users\rober\Downloads\eclipse-escet-v5.0-win32.win32.x86_64\eclipse-escet-v5.0\workspace\CIFBenchmarks-5.0.0.v20241003-060816\agv\agv.cif&quot;: " startLine="70" endOffset="1997" startColumn="10" endLine="70" endColumn="12" startOffset="1995" location="C:\Users\rober\Downloads\eclipse-escet-v5.0-win32.win32.x86_64\eclipse-escet-v5.0\workspace\CIFBenchmarks-5.0.0.v20241003-060816\agv\agv.cif"/>
            </type>
          </event>
        </events>
      </edges>
    </locations>
    <locations xmi:type="automata:Location" xmi:id="315" name="l7">
      <position xmi:type="position:Position" xmi:id="316" source="File &quot;C:\Users\rober\Downloads\eclipse-escet-v5.0-win32.win32.x86_64\eclipse-escet-v5.0\workspace\CIFBenchmarks-5.0.0.v20241003-060816\agv\agv.cif&quot;: " startLine="72" endOffset="2021" startColumn="12" endLine="72" endColumn="13" startOffset="2020" location="C:\Users\rober\Downloads\eclipse-escet-v5.0-win32.win32.x86_64\eclipse-escet-v5.0\workspace\CIFBenchmarks-5.0.0.v20241003-060816\agv\agv.cif"/>
      <edges xmi:type="automata:Edge" xmi:id="317" target="237">
        <position xmi:type="position:Position" xmi:id="318" source="File &quot;C:\Users\rober\Downloads\eclipse-escet-v5.0-win32.win32.x86_64\eclipse-escet-v5.0\workspace\CIFBenchmarks-5.0.0.v20241003-060816\agv\agv.cif&quot;: " startLine="73" endOffset="2031" startColumn="5" endLine="73" endColumn="8" startOffset="2028" location="C:\Users\rober\Downloads\eclipse-escet-v5.0-win32.win32.x86_64\eclipse-escet-v5.0\workspace\CIFBenchmarks-5.0.0.v20241003-060816\agv\agv.cif"/>
        <events xmi:type="automata:EdgeEvent" xmi:id="319">
          <position xmi:type="position:Position" xmi:id="320" source="File &quot;C:\Users\rober\Downloads\eclipse-escet-v5.0-win32.win32.x86_64\eclipse-escet-v5.0\workspace\CIFBenchmarks-5.0.0.v20241003-060816\agv\agv.cif&quot;: " startLine="73" endOffset="2035" startColumn="10" endLine="73" endColumn="12" startOffset="2033" location="C:\Users\rober\Downloads\eclipse-escet-v5.0-win32.win32.x86_64\eclipse-escet-v5.0\workspace\CIFBenchmarks-5.0.0.v20241003-060816\agv\agv.cif"/>
          <event xmi:type="expressions:EventExpression" xmi:id="321" event="235">
            <position xmi:type="position:Position" xmi:id="322" source="File &quot;C:\Users\rober\Downloads\eclipse-escet-v5.0-win32.win32.x86_64\eclipse-escet-v5.0\workspace\CIFBenchmarks-5.0.0.v20241003-060816\agv\agv.cif&quot;: " startLine="73" endOffset="2035" startColumn="10" endLine="73" endColumn="12" startOffset="2033" location="C:\Users\rober\Downloads\eclipse-escet-v5.0-win32.win32.x86_64\eclipse-escet-v5.0\workspace\CIFBenchmarks-5.0.0.v20241003-060816\agv\agv.cif"/>
            <type xmi:type="types:BoolType" xmi:id="323">
              <position xmi:type="position:Position" xmi:id="324" source="File &quot;C:\Users\rober\Downloads\eclipse-escet-v5.0-win32.win32.x86_64\eclipse-escet-v5.0\workspace\CIFBenchmarks-5.0.0.v20241003-060816\agv\agv.cif&quot;: " startLine="73" endOffset="2035" startColumn="10" endLine="73" endColumn="12" startOffset="2033" location="C:\Users\rober\Downloads\eclipse-escet-v5.0-win32.win32.x86_64\eclipse-escet-v5.0\workspace\CIFBenchmarks-5.0.0.v20241003-060816\agv\agv.cif"/>
            </type>
          </event>
        </events>
      </edges>
    </locations>
  </components>
  <components xmi:type="automata:Automaton" xmi:id="325" name="AGV3" kind="Plant">
    <position xmi:type="position:Position" xmi:id="326" source="File &quot;C:\Users\rober\Downloads\eclipse-escet-v5.0-win32.win32.x86_64\eclipse-escet-v5.0\workspace\CIFBenchmarks-5.0.0.v20241003-060816\agv\agv.cif&quot;: " startLine="76" endOffset="2060" startColumn="7" endLine="76" endColumn="10" startOffset="2057" location="C:\Users\rober\Downloads\eclipse-escet-v5.0-win32.win32.x86_64\eclipse-escet-v5.0\workspace\CIFBenchmarks-5.0.0.v20241003-060816\agv\agv.cif"/>
    <declarations xmi:type="declarations:Event" xmi:id="327" name="e31" controllable="true">
      <position xmi:type="position:Position" xmi:id="328" source="File &quot;C:\Users\rober\Downloads\eclipse-escet-v5.0-win32.win32.x86_64\eclipse-escet-v5.0\workspace\CIFBenchmarks-5.0.0.v20241003-060816\agv\agv.cif&quot;: " startLine="77" endOffset="2080" startColumn="16" endLine="77" endColumn="18" startOffset="2078" location="C:\Users\rober\Downloads\eclipse-escet-v5.0-win32.win32.x86_64\eclipse-escet-v5.0\workspace\CIFBenchmarks-5.0.0.v20241003-060816\agv\agv.cif"/>
    </declarations>
    <declarations xmi:type="declarations:Event" xmi:id="329" name="e33" controllable="true">
      <position xmi:type="position:Position" xmi:id="330" source="File &quot;C:\Users\rober\Downloads\eclipse-escet-v5.0-win32.win32.x86_64\eclipse-escet-v5.0\workspace\CIFBenchmarks-5.0.0.v20241003-060816\agv\agv.cif&quot;: " startLine="78" endOffset="2121" startColumn="16" endLine="78" endColumn="18" startOffset="2119" location="C:\Users\rober\Downloads\eclipse-escet-v5.0-win32.win32.x86_64\eclipse-escet-v5.0\workspace\CIFBenchmarks-5.0.0.v20241003-060816\agv\agv.cif"/>
    </declarations>
    <declarations xmi:type="declarations:Event" xmi:id="331" name="e32" controllable="false">
      <position xmi:type="position:Position" xmi:id="332" source="File &quot;C:\Users\rober\Downloads\eclipse-escet-v5.0-win32.win32.x86_64\eclipse-escet-v5.0\workspace\CIFBenchmarks-5.0.0.v20241003-060816\agv\agv.cif&quot;: " startLine="79" endOffset="2173" startColumn="18" endLine="79" endColumn="20" startOffset="2171" location="C:\Users\rober\Downloads\eclipse-escet-v5.0-win32.win32.x86_64\eclipse-escet-v5.0\workspace\CIFBenchmarks-5.0.0.v20241003-060816\agv\agv.cif"/>
    </declarations>
    <declarations xmi:type="declarations:Event" xmi:id="333" name="e34" controllable="false">
      <position xmi:type="position:Position" xmi:id="334" source="File &quot;C:\Users\rober\Downloads\eclipse-escet-v5.0-win32.win32.x86_64\eclipse-escet-v5.0\workspace\CIFBenchmarks-5.0.0.v20241003-060816\agv\agv.cif&quot;: " startLine="80" endOffset="2238" startColumn="18" endLine="80" endColumn="20" startOffset="2236" location="C:\Users\rober\Downloads\eclipse-escet-v5.0-win32.win32.x86_64\eclipse-escet-v5.0\workspace\CIFBenchmarks-5.0.0.v20241003-060816\agv\agv.cif"/>
    </declarations>
    <locations xmi:type="automata:Location" xmi:id="335" name="l0">
      <position xmi:type="position:Position" xmi:id="336" source="File &quot;C:\Users\rober\Downloads\eclipse-escet-v5.0-win32.win32.x86_64\eclipse-escet-v5.0\workspace\CIFBenchmarks-5.0.0.v20241003-060816\agv\agv.cif&quot;: " startLine="82" endOffset="2290" startColumn="12" endLine="82" endColumn="13" startOffset="2289" location="C:\Users\rober\Downloads\eclipse-escet-v5.0-win32.win32.x86_64\eclipse-escet-v5.0\workspace\CIFBenchmarks-5.0.0.v20241003-060816\agv\agv.cif"/>
      <initials xmi:type="expressions:BoolExpression" xmi:id="337" value="true">
        <position xmi:type="position:Position" xmi:id="338" source="File &quot;C:\Users\rober\Downloads\eclipse-escet-v5.0-win32.win32.x86_64\eclipse-escet-v5.0\workspace\CIFBenchmarks-5.0.0.v20241003-060816\agv\agv.cif&quot;: " startLine="83" endOffset="2303" startColumn="5" endLine="83" endColumn="11" startOffset="2297" location="C:\Users\rober\Downloads\eclipse-escet-v5.0-win32.win32.x86_64\eclipse-escet-v5.0\workspace\CIFBenchmarks-5.0.0.v20241003-060816\agv\agv.cif"/>
        <type xmi:type="types:BoolType" xmi:id="339">
          <position xmi:type="position:Position" xmi:id="340" source="File &quot;C:\Users\rober\Downloads\eclipse-escet-v5.0-win32.win32.x86_64\eclipse-escet-v5.0\workspace\CIFBenchmarks-5.0.0.v20241003-060816\agv\agv.cif&quot;: " startLine="83" endOffset="2303" startColumn="5" endLine="83" endColumn="11" startOffset="2297" location="C:\Users\rober\Downloads\eclipse-escet-v5.0-win32.win32.x86_64\eclipse-escet-v5.0\workspace\CIFBenchmarks-5.0.0.v20241003-060816\agv\agv.cif"/>
        </type>
      </initials>
      <edges xmi:type="automata:Edge" xmi:id="341" target="353">
        <position xmi:type="position:Position" xmi:id="342" source="File &quot;C:\Users\rober\Downloads\eclipse-escet-v5.0-win32.win32.x86_64\eclipse-escet-v5.0\workspace\CIFBenchmarks-5.0.0.v20241003-060816\agv\agv.cif&quot;: " startLine="84" endOffset="2321" startColumn="5" endLine="84" endColumn="8" startOffset="2318" location="C:\Users\rober\Downloads\eclipse-escet-v5.0-win32.win32.x86_64\eclipse-escet-v5.0\workspace\CIFBenchmarks-5.0.0.v20241003-060816\agv\agv.cif"/>
        <events xmi:type="automata:EdgeEvent" xmi:id="343">
          <position xmi:type="position:Position" xmi:id="344" source="File &quot;C:\Users\rober\Downloads\eclipse-escet-v5.0-win32.win32.x86_64\eclipse-escet-v5.0\workspace\CIFBenchmarks-5.0.0.v20241003-060816\agv\agv.cif&quot;: " startLine="84" endOffset="2325" startColumn="10" endLine="84" endColumn="12" startOffset="2323" location="C:\Users\rober\Downloads\eclipse-escet-v5.0-win32.win32.x86_64\eclipse-escet-v5.0\workspace\CIFBenchmarks-5.0.0.v20241003-060816\agv\agv.cif"/>
          <event xmi:type="expressions:EventExpression" xmi:id="345" event="329">
            <position xmi:type="position:Position" xmi:id="346" source="File &quot;C:\Users\rober\Downloads\eclipse-escet-v5.0-win32.win32.x86_64\eclipse-escet-v5.0\workspace\CIFBenchmarks-5.0.0.v20241003-060816\agv\agv.cif&quot;: " startLine="84" endOffset="2325" startColumn="10" endLine="84" endColumn="12" startOffset="2323" location="C:\Users\rober\Downloads\eclipse-escet-v5.0-win32.win32.x86_64\eclipse-escet-v5.0\workspace\CIFBenchmarks-5.0.0.v20241003-060816\agv\agv.cif"/>
            <type xmi:type="types:BoolType" xmi:id="347">
              <position xmi:type="position:Position" xmi:id="348" source="File &quot;C:\Users\rober\Downloads\eclipse-escet-v5.0-win32.win32.x86_64\eclipse-escet-v5.0\workspace\CIFBenchmarks-5.0.0.v20241003-060816\agv\agv.cif&quot;: " startLine="84" endOffset="2325" startColumn="10" endLine="84" endColumn="12" startOffset="2323" location="C:\Users\rober\Downloads\eclipse-escet-v5.0-win32.win32.x86_64\eclipse-escet-v5.0\workspace\CIFBenchmarks-5.0.0.v20241003-060816\agv\agv.cif"/>
            </type>
          </event>
        </events>
      </edges>
      <markeds xmi:type="expressions:BoolExpression" xmi:id="349" value="true">
        <position xmi:type="position:Position" xmi:id="350" source="File &quot;C:\Users\rober\Downloads\eclipse-escet-v5.0-win32.win32.x86_64\eclipse-escet-v5.0\workspace\CIFBenchmarks-5.0.0.v20241003-060816\agv\agv.cif&quot;: " startLine="83" endOffset="2311" startColumn="14" endLine="83" endColumn="19" startOffset="2306" location="C:\Users\rober\Downloads\eclipse-escet-v5.0-win32.win32.x86_64\eclipse-escet-v5.0\workspace\CIFBenchmarks-5.0.0.v20241003-060816\agv\agv.cif"/>
        <type xmi:type="types:BoolType" xmi:id="351">
          <position xmi:type="position:Position" xmi:id="352" source="File &quot;C:\Users\rober\Downloads\eclipse-escet-v5.0-win32.win32.x86_64\eclipse-escet-v5.0\workspace\CIFBenchmarks-5.0.0.v20241003-060816\agv\agv.cif&quot;: " startLine="83" endOffset="2311" startColumn="14" endLine="83" endColumn="19" startOffset="2306" location="C:\Users\rober\Downloads\eclipse-escet-v5.0-win32.win32.x86_64\eclipse-escet-v5.0\workspace\CIFBenchmarks-5.0.0.v20241003-060816\agv\agv.cif"/>
        </type>
      </markeds>
    </locations>
    <locations xmi:type="automata:Location" xmi:id="353" name="l1">
      <position xmi:type="position:Position" xmi:id="354" source="File &quot;C:\Users\rober\Downloads\eclipse-escet-v5.0-win32.win32.x86_64\eclipse-escet-v5.0\workspace\CIFBenchmarks-5.0.0.v20241003-060816\agv\agv.cif&quot;: " startLine="86" endOffset="2349" startColumn="12" endLine="86" endColumn="13" startOffset="2348" location="C:\Users\rober\Downloads\eclipse-escet-v5.0-win32.win32.x86_64\eclipse-escet-v5.0\workspace\CIFBenchmarks-5.0.0.v20241003-060816\agv\agv.cif"/>
      <edges xmi:type="automata:Edge" xmi:id="355" target="363">
        <position xmi:type="position:Position" xmi:id="356" source="File &quot;C:\Users\rober\Downloads\eclipse-escet-v5.0-win32.win32.x86_64\eclipse-escet-v5.0\workspace\CIFBenchmarks-5.0.0.v20241003-060816\agv\agv.cif&quot;: " startLine="87" endOffset="2359" startColumn="5" endLine="87" endColumn="8" startOffset="2356" location="C:\Users\rober\Downloads\eclipse-escet-v5.0-win32.win32.x86_64\eclipse-escet-v5.0\workspace\CIFBenchmarks-5.0.0.v20241003-060816\agv\agv.cif"/>
        <events xmi:type="automata:EdgeEvent" xmi:id="357">
          <position xmi:type="position:Position" xmi:id="358" source="File &quot;C:\Users\rober\Downloads\eclipse-escet-v5.0-win32.win32.x86_64\eclipse-escet-v5.0\workspace\CIFBenchmarks-5.0.0.v20241003-060816\agv\agv.cif&quot;: " startLine="87" endOffset="2363" startColumn="10" endLine="87" endColumn="12" startOffset="2361" location="C:\Users\rober\Downloads\eclipse-escet-v5.0-win32.win32.x86_64\eclipse-escet-v5.0\workspace\CIFBenchmarks-5.0.0.v20241003-060816\agv\agv.cif"/>
          <event xmi:type="expressions:EventExpression" xmi:id="359" event="333">
            <position xmi:type="position:Position" xmi:id="360" source="File &quot;C:\Users\rober\Downloads\eclipse-escet-v5.0-win32.win32.x86_64\eclipse-escet-v5.0\workspace\CIFBenchmarks-5.0.0.v20241003-060816\agv\agv.cif&quot;: " startLine="87" endOffset="2363" startColumn="10" endLine="87" endColumn="12" startOffset="2361" location="C:\Users\rober\Downloads\eclipse-escet-v5.0-win32.win32.x86_64\eclipse-escet-v5.0\workspace\CIFBenchmarks-5.0.0.v20241003-060816\agv\agv.cif"/>
            <type xmi:type="types:BoolType" xmi:id="361">
              <position xmi:type="position:Position" xmi:id="362" source="File &quot;C:\Users\rober\Downloads\eclipse-escet-v5.0-win32.win32.x86_64\eclipse-escet-v5.0\workspace\CIFBenchmarks-5.0.0.v20241003-060816\agv\agv.cif&quot;: " startLine="87" endOffset="2363" startColumn="10" endLine="87" endColumn="12" startOffset="2361" location="C:\Users\rober\Downloads\eclipse-escet-v5.0-win32.win32.x86_64\eclipse-escet-v5.0\workspace\CIFBenchmarks-5.0.0.v20241003-060816\agv\agv.cif"/>
            </type>
          </event>
        </events>
      </edges>
    </locations>
    <locations xmi:type="automata:Location" xmi:id="363" name="l2">
      <position xmi:type="position:Position" xmi:id="364" source="File &quot;C:\Users\rober\Downloads\eclipse-escet-v5.0-win32.win32.x86_64\eclipse-escet-v5.0\workspace\CIFBenchmarks-5.0.0.v20241003-060816\agv\agv.cif&quot;: " startLine="89" endOffset="2387" startColumn="12" endLine="89" endColumn="13" startOffset="2386" location="C:\Users\rober\Downloads\eclipse-escet-v5.0-win32.win32.x86_64\eclipse-escet-v5.0\workspace\CIFBenchmarks-5.0.0.v20241003-060816\agv\agv.cif"/>
      <edges xmi:type="automata:Edge" xmi:id="365" target="373">
        <position xmi:type="position:Position" xmi:id="366" source="File &quot;C:\Users\rober\Downloads\eclipse-escet-v5.0-win32.win32.x86_64\eclipse-escet-v5.0\workspace\CIFBenchmarks-5.0.0.v20241003-060816\agv\agv.cif&quot;: " startLine="90" endOffset="2397" startColumn="5" endLine="90" endColumn="8" startOffset="2394" location="C:\Users\rober\Downloads\eclipse-escet-v5.0-win32.win32.x86_64\eclipse-escet-v5.0\workspace\CIFBenchmarks-5.0.0.v20241003-060816\agv\agv.cif"/>
        <events xmi:type="automata:EdgeEvent" xmi:id="367">
          <position xmi:type="position:Position" xmi:id="368" source="File &quot;C:\Users\rober\Downloads\eclipse-escet-v5.0-win32.win32.x86_64\eclipse-escet-v5.0\workspace\CIFBenchmarks-5.0.0.v20241003-060816\agv\agv.cif&quot;: " startLine="90" endOffset="2401" startColumn="10" endLine="90" endColumn="12" startOffset="2399" location="C:\Users\rober\Downloads\eclipse-escet-v5.0-win32.win32.x86_64\eclipse-escet-v5.0\workspace\CIFBenchmarks-5.0.0.v20241003-060816\agv\agv.cif"/>
          <event xmi:type="expressions:EventExpression" xmi:id="369" event="327">
            <position xmi:type="position:Position" xmi:id="370" source="File &quot;C:\Users\rober\Downloads\eclipse-escet-v5.0-win32.win32.x86_64\eclipse-escet-v5.0\workspace\CIFBenchmarks-5.0.0.v20241003-060816\agv\agv.cif&quot;: " startLine="90" endOffset="2401" startColumn="10" endLine="90" endColumn="12" startOffset="2399" location="C:\Users\rober\Downloads\eclipse-escet-v5.0-win32.win32.x86_64\eclipse-escet-v5.0\workspace\CIFBenchmarks-5.0.0.v20241003-060816\agv\agv.cif"/>
            <type xmi:type="types:BoolType" xmi:id="371">
              <position xmi:type="position:Position" xmi:id="372" source="File &quot;C:\Users\rober\Downloads\eclipse-escet-v5.0-win32.win32.x86_64\eclipse-escet-v5.0\workspace\CIFBenchmarks-5.0.0.v20241003-060816\agv\agv.cif&quot;: " startLine="90" endOffset="2401" startColumn="10" endLine="90" endColumn="12" startOffset="2399" location="C:\Users\rober\Downloads\eclipse-escet-v5.0-win32.win32.x86_64\eclipse-escet-v5.0\workspace\CIFBenchmarks-5.0.0.v20241003-060816\agv\agv.cif"/>
            </type>
          </event>
        </events>
      </edges>
    </locations>
    <locations xmi:type="automata:Location" xmi:id="373" name="l3">
      <position xmi:type="position:Position" xmi:id="374" source="File &quot;C:\Users\rober\Downloads\eclipse-escet-v5.0-win32.win32.x86_64\eclipse-escet-v5.0\workspace\CIFBenchmarks-5.0.0.v20241003-060816\agv\agv.cif&quot;: " startLine="92" endOffset="2425" startColumn="12" endLine="92" endColumn="13" startOffset="2424" location="C:\Users\rober\Downloads\eclipse-escet-v5.0-win32.win32.x86_64\eclipse-escet-v5.0\workspace\CIFBenchmarks-5.0.0.v20241003-060816\agv\agv.cif"/>
      <edges xmi:type="automata:Edge" xmi:id="375" target="335">
        <position xmi:type="position:Position" xmi:id="376" source="File &quot;C:\Users\rober\Downloads\eclipse-escet-v5.0-win32.win32.x86_64\eclipse-escet-v5.0\workspace\CIFBenchmarks-5.0.0.v20241003-060816\agv\agv.cif&quot;: " startLine="93" endOffset="2435" startColumn="5" endLine="93" endColumn="8" startOffset="2432" location="C:\Users\rober\Downloads\eclipse-escet-v5.0-win32.win32.x86_64\eclipse-escet-v5.0\workspace\CIFBenchmarks-5.0.0.v20241003-060816\agv\agv.cif"/>
        <events xmi:type="automata:EdgeEvent" xmi:id="377">
          <position xmi:type="position:Position" xmi:id="378" source="File &quot;C:\Users\rober\Downloads\eclipse-escet-v5.0-win32.win32.x86_64\eclipse-escet-v5.0\workspace\CIFBenchmarks-5.0.0.v20241003-060816\agv\agv.cif&quot;: " startLine="93" endOffset="2439" startColumn="10" endLine="93" endColumn="12" startOffset="2437" location="C:\Users\rober\Downloads\eclipse-escet-v5.0-win32.win32.x86_64\eclipse-escet-v5.0\workspace\CIFBenchmarks-5.0.0.v20241003-060816\agv\agv.cif"/>
          <event xmi:type="expressions:EventExpression" xmi:id="379" event="331">
            <position xmi:type="position:Position" xmi:id="380" source="File &quot;C:\Users\rober\Downloads\eclipse-escet-v5.0-win32.win32.x86_64\eclipse-escet-v5.0\workspace\CIFBenchmarks-5.0.0.v20241003-060816\agv\agv.cif&quot;: " startLine="93" endOffset="2439" startColumn="10" endLine="93" endColumn="12" startOffset="2437" location="C:\Users\rober\Downloads\eclipse-escet-v5.0-win32.win32.x86_64\eclipse-escet-v5.0\workspace\CIFBenchmarks-5.0.0.v20241003-060816\agv\agv.cif"/>
            <type xmi:type="types:BoolType" xmi:id="381">
              <position xmi:type="position:Position" xmi:id="382" source="File &quot;C:\Users\rober\Downloads\eclipse-escet-v5.0-win32.win32.x86_64\eclipse-escet-v5.0\workspace\CIFBenchmarks-5.0.0.v20241003-060816\agv\agv.cif&quot;: " startLine="93" endOffset="2439" startColumn="10" endLine="93" endColumn="12" startOffset="2437" location="C:\Users\rober\Downloads\eclipse-escet-v5.0-win32.win32.x86_64\eclipse-escet-v5.0\workspace\CIFBenchmarks-5.0.0.v20241003-060816\agv\agv.cif"/>
            </type>
          </event>
        </events>
      </edges>
    </locations>
  </components>
  <components xmi:type="automata:Automaton" xmi:id="383" name="AGV4" kind="Plant">
    <position xmi:type="position:Position" xmi:id="384" source="File &quot;C:\Users\rober\Downloads\eclipse-escet-v5.0-win32.win32.x86_64\eclipse-escet-v5.0\workspace\CIFBenchmarks-5.0.0.v20241003-060816\agv\agv.cif&quot;: " startLine="96" endOffset="2464" startColumn="7" endLine="96" endColumn="10" startOffset="2461" location="C:\Users\rober\Downloads\eclipse-escet-v5.0-win32.win32.x86_64\eclipse-escet-v5.0\workspace\CIFBenchmarks-5.0.0.v20241003-060816\agv\agv.cif"/>
    <declarations xmi:type="declarations:Event" xmi:id="385" name="e41" controllable="true">
      <position xmi:type="position:Position" xmi:id="386" source="File &quot;C:\Users\rober\Downloads\eclipse-escet-v5.0-win32.win32.x86_64\eclipse-escet-v5.0\workspace\CIFBenchmarks-5.0.0.v20241003-060816\agv\agv.cif&quot;: " startLine="97" endOffset="2484" startColumn="16" endLine="97" endColumn="18" startOffset="2482" location="C:\Users\rober\Downloads\eclipse-escet-v5.0-win32.win32.x86_64\eclipse-escet-v5.0\workspace\CIFBenchmarks-5.0.0.v20241003-060816\agv\agv.cif"/>
    </declarations>
    <declarations xmi:type="declarations:Event" xmi:id="387" name="e43" controllable="true">
      <position xmi:type="position:Position" xmi:id="388" source="File &quot;C:\Users\rober\Downloads\eclipse-escet-v5.0-win32.win32.x86_64\eclipse-escet-v5.0\workspace\CIFBenchmarks-5.0.0.v20241003-060816\agv\agv.cif&quot;: " startLine="98" endOffset="2531" startColumn="16" endLine="98" endColumn="18" startOffset="2529" location="C:\Users\rober\Downloads\eclipse-escet-v5.0-win32.win32.x86_64\eclipse-escet-v5.0\workspace\CIFBenchmarks-5.0.0.v20241003-060816\agv\agv.cif"/>
    </declarations>
    <declarations xmi:type="declarations:Event" xmi:id="389" name="e40" controllable="false">
      <position xmi:type="position:Position" xmi:id="390" source="File &quot;C:\Users\rober\Downloads\eclipse-escet-v5.0-win32.win32.x86_64\eclipse-escet-v5.0\workspace\CIFBenchmarks-5.0.0.v20241003-060816\agv\agv.cif&quot;: " startLine="99" endOffset="2573" startColumn="18" endLine="99" endColumn="20" startOffset="2571" location="C:\Users\rober\Downloads\eclipse-escet-v5.0-win32.win32.x86_64\eclipse-escet-v5.0\workspace\CIFBenchmarks-5.0.0.v20241003-060816\agv\agv.cif"/>
    </declarations>
    <declarations xmi:type="declarations:Event" xmi:id="391" name="e42" controllable="false">
      <position xmi:type="position:Position" xmi:id="392" source="File &quot;C:\Users\rober\Downloads\eclipse-escet-v5.0-win32.win32.x86_64\eclipse-escet-v5.0\workspace\CIFBenchmarks-5.0.0.v20241003-060816\agv\agv.cif&quot;: " startLine="100" endOffset="2627" startColumn="18" endLine="100" endColumn="20" startOffset="2625" location="C:\Users\rober\Downloads\eclipse-escet-v5.0-win32.win32.x86_64\eclipse-escet-v5.0\workspace\CIFBenchmarks-5.0.0.v20241003-060816\agv\agv.cif"/>
    </declarations>
    <declarations xmi:type="declarations:Event" xmi:id="393" name="e44" controllable="false">
      <position xmi:type="position:Position" xmi:id="394" source="File &quot;C:\Users\rober\Downloads\eclipse-escet-v5.0-win32.win32.x86_64\eclipse-escet-v5.0\workspace\CIFBenchmarks-5.0.0.v20241003-060816\agv\agv.cif&quot;: " startLine="101" endOffset="2682" startColumn="18" endLine="101" endColumn="20" startOffset="2680" location="C:\Users\rober\Downloads\eclipse-escet-v5.0-win32.win32.x86_64\eclipse-escet-v5.0\workspace\CIFBenchmarks-5.0.0.v20241003-060816\agv\agv.cif"/>
    </declarations>
    <declarations xmi:type="declarations:Event" xmi:id="395" name="e46" controllable="false">
      <position xmi:type="position:Position" xmi:id="396" source="File &quot;C:\Users\rober\Downloads\eclipse-escet-v5.0-win32.win32.x86_64\eclipse-escet-v5.0\workspace\CIFBenchmarks-5.0.0.v20241003-060816\agv\agv.cif&quot;: " startLine="102" endOffset="2737" startColumn="18" endLine="102" endColumn="20" startOffset="2735" location="C:\Users\rober\Downloads\eclipse-escet-v5.0-win32.win32.x86_64\eclipse-escet-v5.0\workspace\CIFBenchmarks-5.0.0.v20241003-060816\agv\agv.cif"/>
    </declarations>
    <locations xmi:type="automata:Location" xmi:id="397" name="l0">
      <position xmi:type="position:Position" xmi:id="398" source="File &quot;C:\Users\rober\Downloads\eclipse-escet-v5.0-win32.win32.x86_64\eclipse-escet-v5.0\workspace\CIFBenchmarks-5.0.0.v20241003-060816\agv\agv.cif&quot;: " startLine="104" endOffset="2794" startColumn="12" endLine="104" endColumn="13" startOffset="2793" location="C:\Users\rober\Downloads\eclipse-escet-v5.0-win32.win32.x86_64\eclipse-escet-v5.0\workspace\CIFBenchmarks-5.0.0.v20241003-060816\agv\agv.cif"/>
      <initials xmi:type="expressions:BoolExpression" xmi:id="399" value="true">
        <position xmi:type="position:Position" xmi:id="400" source="File &quot;C:\Users\rober\Downloads\eclipse-escet-v5.0-win32.win32.x86_64\eclipse-escet-v5.0\workspace\CIFBenchmarks-5.0.0.v20241003-060816\agv\agv.cif&quot;: " startLine="105" endOffset="2807" startColumn="5" endLine="105" endColumn="11" startOffset="2801" location="C:\Users\rober\Downloads\eclipse-escet-v5.0-win32.win32.x86_64\eclipse-escet-v5.0\workspace\CIFBenchmarks-5.0.0.v20241003-060816\agv\agv.cif"/>
        <type xmi:type="types:BoolType" xmi:id="401">
          <position xmi:type="position:Position" xmi:id="402" source="File &quot;C:\Users\rober\Downloads\eclipse-escet-v5.0-win32.win32.x86_64\eclipse-escet-v5.0\workspace\CIFBenchmarks-5.0.0.v20241003-060816\agv\agv.cif&quot;: " startLine="105" endOffset="2807" startColumn="5" endLine="105" endColumn="11" startOffset="2801" location="C:\Users\rober\Downloads\eclipse-escet-v5.0-win32.win32.x86_64\eclipse-escet-v5.0\workspace\CIFBenchmarks-5.0.0.v20241003-060816\agv\agv.cif"/>
        </type>
      </initials>
      <edges xmi:type="automata:Edge" xmi:id="403" target="415">
        <position xmi:type="position:Position" xmi:id="404" source="File &quot;C:\Users\rober\Downloads\eclipse-escet-v5.0-win32.win32.x86_64\eclipse-escet-v5.0\workspace\CIFBenchmarks-5.0.0.v20241003-060816\agv\agv.cif&quot;: " startLine="106" endOffset="2825" startColumn="5" endLine="106" endColumn="8" startOffset="2822" location="C:\Users\rober\Downloads\eclipse-escet-v5.0-win32.win32.x86_64\eclipse-escet-v5.0\workspace\CIFBenchmarks-5.0.0.v20241003-060816\agv\agv.cif"/>
        <events xmi:type="automata:EdgeEvent" xmi:id="405">
          <position xmi:type="position:Position" xmi:id="406" source="File &quot;C:\Users\rober\Downloads\eclipse-escet-v5.0-win32.win32.x86_64\eclipse-escet-v5.0\workspace\CIFBenchmarks-5.0.0.v20241003-060816\agv\agv.cif&quot;: " startLine="106" endOffset="2829" startColumn="10" endLine="106" endColumn="12" startOffset="2827" location="C:\Users\rober\Downloads\eclipse-escet-v5.0-win32.win32.x86_64\eclipse-escet-v5.0\workspace\CIFBenchmarks-5.0.0.v20241003-060816\agv\agv.cif"/>
          <event xmi:type="expressions:EventExpression" xmi:id="407" event="385">
            <position xmi:type="position:Position" xmi:id="408" source="File &quot;C:\Users\rober\Downloads\eclipse-escet-v5.0-win32.win32.x86_64\eclipse-escet-v5.0\workspace\CIFBenchmarks-5.0.0.v20241003-060816\agv\agv.cif&quot;: " startLine="106" endOffset="2829" startColumn="10" endLine="106" endColumn="12" startOffset="2827" location="C:\Users\rober\Downloads\eclipse-escet-v5.0-win32.win32.x86_64\eclipse-escet-v5.0\workspace\CIFBenchmarks-5.0.0.v20241003-060816\agv\agv.cif"/>
            <type xmi:type="types:BoolType" xmi:id="409">
              <position xmi:type="position:Position" xmi:id="410" source="File &quot;C:\Users\rober\Downloads\eclipse-escet-v5.0-win32.win32.x86_64\eclipse-escet-v5.0\workspace\CIFBenchmarks-5.0.0.v20241003-060816\agv\agv.cif&quot;: " startLine="106" endOffset="2829" startColumn="10" endLine="106" endColumn="12" startOffset="2827" location="C:\Users\rober\Downloads\eclipse-escet-v5.0-win32.win32.x86_64\eclipse-escet-v5.0\workspace\CIFBenchmarks-5.0.0.v20241003-060816\agv\agv.cif"/>
            </type>
          </event>
        </events>
      </edges>
      <markeds xmi:type="expressions:BoolExpression" xmi:id="411" value="true">
        <position xmi:type="position:Position" xmi:id="412" source="File &quot;C:\Users\rober\Downloads\eclipse-escet-v5.0-win32.win32.x86_64\eclipse-escet-v5.0\workspace\CIFBenchmarks-5.0.0.v20241003-060816\agv\agv.cif&quot;: " startLine="105" endOffset="2815" startColumn="14" endLine="105" endColumn="19" startOffset="2810" location="C:\Users\rober\Downloads\eclipse-escet-v5.0-win32.win32.x86_64\eclipse-escet-v5.0\workspace\CIFBenchmarks-5.0.0.v20241003-060816\agv\agv.cif"/>
        <type xmi:type="types:BoolType" xmi:id="413">
          <position xmi:type="position:Position" xmi:id="414" source="File &quot;C:\Users\rober\Downloads\eclipse-escet-v5.0-win32.win32.x86_64\eclipse-escet-v5.0\workspace\CIFBenchmarks-5.0.0.v20241003-060816\agv\agv.cif&quot;: " startLine="105" endOffset="2815" startColumn="14" endLine="105" endColumn="19" startOffset="2810" location="C:\Users\rober\Downloads\eclipse-escet-v5.0-win32.win32.x86_64\eclipse-escet-v5.0\workspace\CIFBenchmarks-5.0.0.v20241003-060816\agv\agv.cif"/>
        </type>
      </markeds>
    </locations>
    <locations xmi:type="automata:Location" xmi:id="415" name="l1">
      <position xmi:type="position:Position" xmi:id="416" source="File &quot;C:\Users\rober\Downloads\eclipse-escet-v5.0-win32.win32.x86_64\eclipse-escet-v5.0\workspace\CIFBenchmarks-5.0.0.v20241003-060816\agv\agv.cif&quot;: " startLine="108" endOffset="2853" startColumn="12" endLine="108" endColumn="13" startOffset="2852" location="C:\Users\rober\Downloads\eclipse-escet-v5.0-win32.win32.x86_64\eclipse-escet-v5.0\workspace\CIFBenchmarks-5.0.0.v20241003-060816\agv\agv.cif"/>
      <edges xmi:type="automata:Edge" xmi:id="417" target="425">
        <position xmi:type="position:Position" xmi:id="418" source="File &quot;C:\Users\rober\Downloads\eclipse-escet-v5.0-win32.win32.x86_64\eclipse-escet-v5.0\workspace\CIFBenchmarks-5.0.0.v20241003-060816\agv\agv.cif&quot;: " startLine="109" endOffset="2863" startColumn="5" endLine="109" endColumn="8" startOffset="2860" location="C:\Users\rober\Downloads\eclipse-escet-v5.0-win32.win32.x86_64\eclipse-escet-v5.0\workspace\CIFBenchmarks-5.0.0.v20241003-060816\agv\agv.cif"/>
        <events xmi:type="automata:EdgeEvent" xmi:id="419">
          <position xmi:type="position:Position" xmi:id="420" source="File &quot;C:\Users\rober\Downloads\eclipse-escet-v5.0-win32.win32.x86_64\eclipse-escet-v5.0\workspace\CIFBenchmarks-5.0.0.v20241003-060816\agv\agv.cif&quot;: " startLine="109" endOffset="2867" startColumn="10" endLine="109" endColumn="12" startOffset="2865" location="C:\Users\rober\Downloads\eclipse-escet-v5.0-win32.win32.x86_64\eclipse-escet-v5.0\workspace\CIFBenchmarks-5.0.0.v20241003-060816\agv\agv.cif"/>
          <event xmi:type="expressions:EventExpression" xmi:id="421" event="389">
            <position xmi:type="position:Position" xmi:id="422" source="File &quot;C:\Users\rober\Downloads\eclipse-escet-v5.0-win32.win32.x86_64\eclipse-escet-v5.0\workspace\CIFBenchmarks-5.0.0.v20241003-060816\agv\agv.cif&quot;: " startLine="109" endOffset="2867" startColumn="10" endLine="109" endColumn="12" startOffset="2865" location="C:\Users\rober\Downloads\eclipse-escet-v5.0-win32.win32.x86_64\eclipse-escet-v5.0\workspace\CIFBenchmarks-5.0.0.v20241003-060816\agv\agv.cif"/>
            <type xmi:type="types:BoolType" xmi:id="423">
              <position xmi:type="position:Position" xmi:id="424" source="File &quot;C:\Users\rober\Downloads\eclipse-escet-v5.0-win32.win32.x86_64\eclipse-escet-v5.0\workspace\CIFBenchmarks-5.0.0.v20241003-060816\agv\agv.cif&quot;: " startLine="109" endOffset="2867" startColumn="10" endLine="109" endColumn="12" startOffset="2865" location="C:\Users\rober\Downloads\eclipse-escet-v5.0-win32.win32.x86_64\eclipse-escet-v5.0\workspace\CIFBenchmarks-5.0.0.v20241003-060816\agv\agv.cif"/>
            </type>
          </event>
        </events>
      </edges>
    </locations>
    <locations xmi:type="automata:Location" xmi:id="425" name="l2">
      <position xmi:type="position:Position" xmi:id="426" source="File &quot;C:\Users\rober\Downloads\eclipse-escet-v5.0-win32.win32.x86_64\eclipse-escet-v5.0\workspace\CIFBenchmarks-5.0.0.v20241003-060816\agv\agv.cif&quot;: " startLine="111" endOffset="2891" startColumn="12" endLine="111" endColumn="13" startOffset="2890" location="C:\Users\rober\Downloads\eclipse-escet-v5.0-win32.win32.x86_64\eclipse-escet-v5.0\workspace\CIFBenchmarks-5.0.0.v20241003-060816\agv\agv.cif"/>
      <edges xmi:type="automata:Edge" xmi:id="427" target="435">
        <position xmi:type="position:Position" xmi:id="428" source="File &quot;C:\Users\rober\Downloads\eclipse-escet-v5.0-win32.win32.x86_64\eclipse-escet-v5.0\workspace\CIFBenchmarks-5.0.0.v20241003-060816\agv\agv.cif&quot;: " startLine="112" endOffset="2901" startColumn="5" endLine="112" endColumn="8" startOffset="2898" location="C:\Users\rober\Downloads\eclipse-escet-v5.0-win32.win32.x86_64\eclipse-escet-v5.0\workspace\CIFBenchmarks-5.0.0.v20241003-060816\agv\agv.cif"/>
        <events xmi:type="automata:EdgeEvent" xmi:id="429">
          <position xmi:type="position:Position" xmi:id="430" source="File &quot;C:\Users\rober\Downloads\eclipse-escet-v5.0-win32.win32.x86_64\eclipse-escet-v5.0\workspace\CIFBenchmarks-5.0.0.v20241003-060816\agv\agv.cif&quot;: " startLine="112" endOffset="2905" startColumn="10" endLine="112" endColumn="12" startOffset="2903" location="C:\Users\rober\Downloads\eclipse-escet-v5.0-win32.win32.x86_64\eclipse-escet-v5.0\workspace\CIFBenchmarks-5.0.0.v20241003-060816\agv\agv.cif"/>
          <event xmi:type="expressions:EventExpression" xmi:id="431" event="391">
            <position xmi:type="position:Position" xmi:id="432" source="File &quot;C:\Users\rober\Downloads\eclipse-escet-v5.0-win32.win32.x86_64\eclipse-escet-v5.0\workspace\CIFBenchmarks-5.0.0.v20241003-060816\agv\agv.cif&quot;: " startLine="112" endOffset="2905" startColumn="10" endLine="112" endColumn="12" startOffset="2903" location="C:\Users\rober\Downloads\eclipse-escet-v5.0-win32.win32.x86_64\eclipse-escet-v5.0\workspace\CIFBenchmarks-5.0.0.v20241003-060816\agv\agv.cif"/>
            <type xmi:type="types:BoolType" xmi:id="433">
              <position xmi:type="position:Position" xmi:id="434" source="File &quot;C:\Users\rober\Downloads\eclipse-escet-v5.0-win32.win32.x86_64\eclipse-escet-v5.0\workspace\CIFBenchmarks-5.0.0.v20241003-060816\agv\agv.cif&quot;: " startLine="112" endOffset="2905" startColumn="10" endLine="112" endColumn="12" startOffset="2903" location="C:\Users\rober\Downloads\eclipse-escet-v5.0-win32.win32.x86_64\eclipse-escet-v5.0\workspace\CIFBenchmarks-5.0.0.v20241003-060816\agv\agv.cif"/>
            </type>
          </event>
        </events>
      </edges>
    </locations>
    <locations xmi:type="automata:Location" xmi:id="435" name="l3">
      <position xmi:type="position:Position" xmi:id="436" source="File &quot;C:\Users\rober\Downloads\eclipse-escet-v5.0-win32.win32.x86_64\eclipse-escet-v5.0\workspace\CIFBenchmarks-5.0.0.v20241003-060816\agv\agv.cif&quot;: " startLine="114" endOffset="2929" startColumn="12" endLine="114" endColumn="13" startOffset="2928" location="C:\Users\rober\Downloads\eclipse-escet-v5.0-win32.win32.x86_64\eclipse-escet-v5.0\workspace\CIFBenchmarks-5.0.0.v20241003-060816\agv\agv.cif"/>
      <edges xmi:type="automata:Edge" xmi:id="437" target="445">
        <position xmi:type="position:Position" xmi:id="438" source="File &quot;C:\Users\rober\Downloads\eclipse-escet-v5.0-win32.win32.x86_64\eclipse-escet-v5.0\workspace\CIFBenchmarks-5.0.0.v20241003-060816\agv\agv.cif&quot;: " startLine="115" endOffset="2939" startColumn="5" endLine="115" endColumn="8" startOffset="2936" location="C:\Users\rober\Downloads\eclipse-escet-v5.0-win32.win32.x86_64\eclipse-escet-v5.0\workspace\CIFBenchmarks-5.0.0.v20241003-060816\agv\agv.cif"/>
        <events xmi:type="automata:EdgeEvent" xmi:id="439">
          <position xmi:type="position:Position" xmi:id="440" source="File &quot;C:\Users\rober\Downloads\eclipse-escet-v5.0-win32.win32.x86_64\eclipse-escet-v5.0\workspace\CIFBenchmarks-5.0.0.v20241003-060816\agv\agv.cif&quot;: " startLine="115" endOffset="2943" startColumn="10" endLine="115" endColumn="12" startOffset="2941" location="C:\Users\rober\Downloads\eclipse-escet-v5.0-win32.win32.x86_64\eclipse-escet-v5.0\workspace\CIFBenchmarks-5.0.0.v20241003-060816\agv\agv.cif"/>
          <event xmi:type="expressions:EventExpression" xmi:id="441" event="387">
            <position xmi:type="position:Position" xmi:id="442" source="File &quot;C:\Users\rober\Downloads\eclipse-escet-v5.0-win32.win32.x86_64\eclipse-escet-v5.0\workspace\CIFBenchmarks-5.0.0.v20241003-060816\agv\agv.cif&quot;: " startLine="115" endOffset="2943" startColumn="10" endLine="115" endColumn="12" startOffset="2941" location="C:\Users\rober\Downloads\eclipse-escet-v5.0-win32.win32.x86_64\eclipse-escet-v5.0\workspace\CIFBenchmarks-5.0.0.v20241003-060816\agv\agv.cif"/>
            <type xmi:type="types:BoolType" xmi:id="443">
              <position xmi:type="position:Position" xmi:id="444" source="File &quot;C:\Users\rober\Downloads\eclipse-escet-v5.0-win32.win32.x86_64\eclipse-escet-v5.0\workspace\CIFBenchmarks-5.0.0.v20241003-060816\agv\agv.cif&quot;: " startLine="115" endOffset="2943" startColumn="10" endLine="115" endColumn="12" startOffset="2941" location="C:\Users\rober\Downloads\eclipse-escet-v5.0-win32.win32.x86_64\eclipse-escet-v5.0\workspace\CIFBenchmarks-5.0.0.v20241003-060816\agv\agv.cif"/>
            </type>
          </event>
        </events>
      </edges>
    </locations>
    <locations xmi:type="automata:Location" xmi:id="445" name="l4">
      <position xmi:type="position:Position" xmi:id="446" source="File &quot;C:\Users\rober\Downloads\eclipse-escet-v5.0-win32.win32.x86_64\eclipse-escet-v5.0\workspace\CIFBenchmarks-5.0.0.v20241003-060816\agv\agv.cif&quot;: " startLine="117" endOffset="2967" startColumn="12" endLine="117" endColumn="13" startOffset="2966" location="C:\Users\rober\Downloads\eclipse-escet-v5.0-win32.win32.x86_64\eclipse-escet-v5.0\workspace\CIFBenchmarks-5.0.0.v20241003-060816\agv\agv.cif"/>
      <edges xmi:type="automata:Edge" xmi:id="447" target="455">
        <position xmi:type="position:Position" xmi:id="448" source="File &quot;C:\Users\rober\Downloads\eclipse-escet-v5.0-win32.win32.x86_64\eclipse-escet-v5.0\workspace\CIFBenchmarks-5.0.0.v20241003-060816\agv\agv.cif&quot;: " startLine="118" endOffset="2977" startColumn="5" endLine="118" endColumn="8" startOffset="2974" location="C:\Users\rober\Downloads\eclipse-escet-v5.0-win32.win32.x86_64\eclipse-escet-v5.0\workspace\CIFBenchmarks-5.0.0.v20241003-060816\agv\agv.cif"/>
        <events xmi:type="automata:EdgeEvent" xmi:id="449">
          <position xmi:type="position:Position" xmi:id="450" source="File &quot;C:\Users\rober\Downloads\eclipse-escet-v5.0-win32.win32.x86_64\eclipse-escet-v5.0\workspace\CIFBenchmarks-5.0.0.v20241003-060816\agv\agv.cif&quot;: " startLine="118" endOffset="2981" startColumn="10" endLine="118" endColumn="12" startOffset="2979" location="C:\Users\rober\Downloads\eclipse-escet-v5.0-win32.win32.x86_64\eclipse-escet-v5.0\workspace\CIFBenchmarks-5.0.0.v20241003-060816\agv\agv.cif"/>
          <event xmi:type="expressions:EventExpression" xmi:id="451" event="393">
            <position xmi:type="position:Position" xmi:id="452" source="File &quot;C:\Users\rober\Downloads\eclipse-escet-v5.0-win32.win32.x86_64\eclipse-escet-v5.0\workspace\CIFBenchmarks-5.0.0.v20241003-060816\agv\agv.cif&quot;: " startLine="118" endOffset="2981" startColumn="10" endLine="118" endColumn="12" startOffset="2979" location="C:\Users\rober\Downloads\eclipse-escet-v5.0-win32.win32.x86_64\eclipse-escet-v5.0\workspace\CIFBenchmarks-5.0.0.v20241003-060816\agv\agv.cif"/>
            <type xmi:type="types:BoolType" xmi:id="453">
              <position xmi:type="position:Position" xmi:id="454" source="File &quot;C:\Users\rober\Downloads\eclipse-escet-v5.0-win32.win32.x86_64\eclipse-escet-v5.0\workspace\CIFBenchmarks-5.0.0.v20241003-060816\agv\agv.cif&quot;: " startLine="118" endOffset="2981" startColumn="10" endLine="118" endColumn="12" startOffset="2979" location="C:\Users\rober\Downloads\eclipse-escet-v5.0-win32.win32.x86_64\eclipse-escet-v5.0\workspace\CIFBenchmarks-5.0.0.v20241003-060816\agv\agv.cif"/>
            </type>
          </event>
        </events>
      </edges>
    </locations>
    <locations xmi:type="automata:Location" xmi:id="455" name="l5">
      <position xmi:type="position:Position" xmi:id="456" source="File &quot;C:\Users\rober\Downloads\eclipse-escet-v5.0-win32.win32.x86_64\eclipse-escet-v5.0\workspace\CIFBenchmarks-5.0.0.v20241003-060816\agv\agv.cif&quot;: " startLine="120" endOffset="3005" startColumn="12" endLine="120" endColumn="13" startOffset="3004" location="C:\Users\rober\Downloads\eclipse-escet-v5.0-win32.win32.x86_64\eclipse-escet-v5.0\workspace\CIFBenchmarks-5.0.0.v20241003-060816\agv\agv.cif"/>
      <edges xmi:type="automata:Edge" xmi:id="457" target="397">
        <position xmi:type="position:Position" xmi:id="458" source="File &quot;C:\Users\rober\Downloads\eclipse-escet-v5.0-win32.win32.x86_64\eclipse-escet-v5.0\workspace\CIFBenchmarks-5.0.0.v20241003-060816\agv\agv.cif&quot;: " startLine="121" endOffset="3015" startColumn="5" endLine="121" endColumn="8" startOffset="3012" location="C:\Users\rober\Downloads\eclipse-escet-v5.0-win32.win32.x86_64\eclipse-escet-v5.0\workspace\CIFBenchmarks-5.0.0.v20241003-060816\agv\agv.cif"/>
        <events xmi:type="automata:EdgeEvent" xmi:id="459">
          <position xmi:type="position:Position" xmi:id="460" source="File &quot;C:\Users\rober\Downloads\eclipse-escet-v5.0-win32.win32.x86_64\eclipse-escet-v5.0\workspace\CIFBenchmarks-5.0.0.v20241003-060816\agv\agv.cif&quot;: " startLine="121" endOffset="3019" startColumn="10" endLine="121" endColumn="12" startOffset="3017" location="C:\Users\rober\Downloads\eclipse-escet-v5.0-win32.win32.x86_64\eclipse-escet-v5.0\workspace\CIFBenchmarks-5.0.0.v20241003-060816\agv\agv.cif"/>
          <event xmi:type="expressions:EventExpression" xmi:id="461" event="395">
            <position xmi:type="position:Position" xmi:id="462" source="File &quot;C:\Users\rober\Downloads\eclipse-escet-v5.0-win32.win32.x86_64\eclipse-escet-v5.0\workspace\CIFBenchmarks-5.0.0.v20241003-060816\agv\agv.cif&quot;: " startLine="121" endOffset="3019" startColumn="10" endLine="121" endColumn="12" startOffset="3017" location="C:\Users\rober\Downloads\eclipse-escet-v5.0-win32.win32.x86_64\eclipse-escet-v5.0\workspace\CIFBenchmarks-5.0.0.v20241003-060816\agv\agv.cif"/>
            <type xmi:type="types:BoolType" xmi:id="463">
              <position xmi:type="position:Position" xmi:id="464" source="File &quot;C:\Users\rober\Downloads\eclipse-escet-v5.0-win32.win32.x86_64\eclipse-escet-v5.0\workspace\CIFBenchmarks-5.0.0.v20241003-060816\agv\agv.cif&quot;: " startLine="121" endOffset="3019" startColumn="10" endLine="121" endColumn="12" startOffset="3017" location="C:\Users\rober\Downloads\eclipse-escet-v5.0-win32.win32.x86_64\eclipse-escet-v5.0\workspace\CIFBenchmarks-5.0.0.v20241003-060816\agv\agv.cif"/>
            </type>
          </event>
        </events>
      </edges>
    </locations>
  </components>
  <components xmi:type="automata:Automaton" xmi:id="465" name="AGV5" kind="Plant">
    <position xmi:type="position:Position" xmi:id="466" source="File &quot;C:\Users\rober\Downloads\eclipse-escet-v5.0-win32.win32.x86_64\eclipse-escet-v5.0\workspace\CIFBenchmarks-5.0.0.v20241003-060816\agv\agv.cif&quot;: " startLine="124" endOffset="3044" startColumn="7" endLine="124" endColumn="10" startOffset="3041" location="C:\Users\rober\Downloads\eclipse-escet-v5.0-win32.win32.x86_64\eclipse-escet-v5.0\workspace\CIFBenchmarks-5.0.0.v20241003-060816\agv\agv.cif"/>
    <declarations xmi:type="declarations:Event" xmi:id="467" name="e51" controllable="true">
      <position xmi:type="position:Position" xmi:id="468" source="File &quot;C:\Users\rober\Downloads\eclipse-escet-v5.0-win32.win32.x86_64\eclipse-escet-v5.0\workspace\CIFBenchmarks-5.0.0.v20241003-060816\agv\agv.cif&quot;: " startLine="125" endOffset="3064" startColumn="16" endLine="125" endColumn="18" startOffset="3062" location="C:\Users\rober\Downloads\eclipse-escet-v5.0-win32.win32.x86_64\eclipse-escet-v5.0\workspace\CIFBenchmarks-5.0.0.v20241003-060816\agv\agv.cif"/>
    </declarations>
    <declarations xmi:type="declarations:Event" xmi:id="469" name="e53" controllable="true">
      <position xmi:type="position:Position" xmi:id="470" source="File &quot;C:\Users\rober\Downloads\eclipse-escet-v5.0-win32.win32.x86_64\eclipse-escet-v5.0\workspace\CIFBenchmarks-5.0.0.v20241003-060816\agv\agv.cif&quot;: " startLine="126" endOffset="3114" startColumn="16" endLine="126" endColumn="18" startOffset="3112" location="C:\Users\rober\Downloads\eclipse-escet-v5.0-win32.win32.x86_64\eclipse-escet-v5.0\workspace\CIFBenchmarks-5.0.0.v20241003-060816\agv\agv.cif"/>
    </declarations>
    <declarations xmi:type="declarations:Event" xmi:id="471" name="e50" controllable="false">
      <position xmi:type="position:Position" xmi:id="472" source="File &quot;C:\Users\rober\Downloads\eclipse-escet-v5.0-win32.win32.x86_64\eclipse-escet-v5.0\workspace\CIFBenchmarks-5.0.0.v20241003-060816\agv\agv.cif&quot;: " startLine="127" endOffset="3157" startColumn="18" endLine="127" endColumn="20" startOffset="3155" location="C:\Users\rober\Downloads\eclipse-escet-v5.0-win32.win32.x86_64\eclipse-escet-v5.0\workspace\CIFBenchmarks-5.0.0.v20241003-060816\agv\agv.cif"/>
    </declarations>
    <declarations xmi:type="declarations:Event" xmi:id="473" name="e52" controllable="false">
      <position xmi:type="position:Position" xmi:id="474" source="File &quot;C:\Users\rober\Downloads\eclipse-escet-v5.0-win32.win32.x86_64\eclipse-escet-v5.0\workspace\CIFBenchmarks-5.0.0.v20241003-060816\agv\agv.cif&quot;: " startLine="128" endOffset="3215" startColumn="18" endLine="128" endColumn="20" startOffset="3213" location="C:\Users\rober\Downloads\eclipse-escet-v5.0-win32.win32.x86_64\eclipse-escet-v5.0\workspace\CIFBenchmarks-5.0.0.v20241003-060816\agv\agv.cif"/>
    </declarations>
    <locations xmi:type="automata:Location" xmi:id="475" name="l0">
      <position xmi:type="position:Position" xmi:id="476" source="File &quot;C:\Users\rober\Downloads\eclipse-escet-v5.0-win32.win32.x86_64\eclipse-escet-v5.0\workspace\CIFBenchmarks-5.0.0.v20241003-060816\agv\agv.cif&quot;: " startLine="130" endOffset="3274" startColumn="12" endLine="130" endColumn="13" startOffset="3273" location="C:\Users\rober\Downloads\eclipse-escet-v5.0-win32.win32.x86_64\eclipse-escet-v5.0\workspace\CIFBenchmarks-5.0.0.v20241003-060816\agv\agv.cif"/>
      <initials xmi:type="expressions:BoolExpression" xmi:id="477" value="true">
        <position xmi:type="position:Position" xmi:id="478" source="File &quot;C:\Users\rober\Downloads\eclipse-escet-v5.0-win32.win32.x86_64\eclipse-escet-v5.0\workspace\CIFBenchmarks-5.0.0.v20241003-060816\agv\agv.cif&quot;: " startLine="131" endOffset="3287" startColumn="5" endLine="131" endColumn="11" startOffset="3281" location="C:\Users\rober\Downloads\eclipse-escet-v5.0-win32.win32.x86_64\eclipse-escet-v5.0\workspace\CIFBenchmarks-5.0.0.v20241003-060816\agv\agv.cif"/>
        <type xmi:type="types:BoolType" xmi:id="479">
          <position xmi:type="position:Position" xmi:id="480" source="File &quot;C:\Users\rober\Downloads\eclipse-escet-v5.0-win32.win32.x86_64\eclipse-escet-v5.0\workspace\CIFBenchmarks-5.0.0.v20241003-060816\agv\agv.cif&quot;: " startLine="131" endOffset="3287" startColumn="5" endLine="131" endColumn="11" startOffset="3281" location="C:\Users\rober\Downloads\eclipse-escet-v5.0-win32.win32.x86_64\eclipse-escet-v5.0\workspace\CIFBenchmarks-5.0.0.v20241003-060816\agv\agv.cif"/>
        </type>
      </initials>
      <edges xmi:type="automata:Edge" xmi:id="481" target="493">
        <position xmi:type="position:Position" xmi:id="482" source="File &quot;C:\Users\rober\Downloads\eclipse-escet-v5.0-win32.win32.x86_64\eclipse-escet-v5.0\workspace\CIFBenchmarks-5.0.0.v20241003-060816\agv\agv.cif&quot;: " startLine="132" endOffset="3305" startColumn="5" endLine="132" endColumn="8" startOffset="3302" location="C:\Users\rober\Downloads\eclipse-escet-v5.0-win32.win32.x86_64\eclipse-escet-v5.0\workspace\CIFBenchmarks-5.0.0.v20241003-060816\agv\agv.cif"/>
        <events xmi:type="automata:EdgeEvent" xmi:id="483">
          <position xmi:type="position:Position" xmi:id="484" source="File &quot;C:\Users\rober\Downloads\eclipse-escet-v5.0-win32.win32.x86_64\eclipse-escet-v5.0\workspace\CIFBenchmarks-5.0.0.v20241003-060816\agv\agv.cif&quot;: " startLine="132" endOffset="3309" startColumn="10" endLine="132" endColumn="12" startOffset="3307" location="C:\Users\rober\Downloads\eclipse-escet-v5.0-win32.win32.x86_64\eclipse-escet-v5.0\workspace\CIFBenchmarks-5.0.0.v20241003-060816\agv\agv.cif"/>
          <event xmi:type="expressions:EventExpression" xmi:id="485" event="467">
            <position xmi:type="position:Position" xmi:id="486" source="File &quot;C:\Users\rober\Downloads\eclipse-escet-v5.0-win32.win32.x86_64\eclipse-escet-v5.0\workspace\CIFBenchmarks-5.0.0.v20241003-060816\agv\agv.cif&quot;: " startLine="132" endOffset="3309" startColumn="10" endLine="132" endColumn="12" startOffset="3307" location="C:\Users\rober\Downloads\eclipse-escet-v5.0-win32.win32.x86_64\eclipse-escet-v5.0\workspace\CIFBenchmarks-5.0.0.v20241003-060816\agv\agv.cif"/>
            <type xmi:type="types:BoolType" xmi:id="487">
              <position xmi:type="position:Position" xmi:id="488" source="File &quot;C:\Users\rober\Downloads\eclipse-escet-v5.0-win32.win32.x86_64\eclipse-escet-v5.0\workspace\CIFBenchmarks-5.0.0.v20241003-060816\agv\agv.cif&quot;: " startLine="132" endOffset="3309" startColumn="10" endLine="132" endColumn="12" startOffset="3307" location="C:\Users\rober\Downloads\eclipse-escet-v5.0-win32.win32.x86_64\eclipse-escet-v5.0\workspace\CIFBenchmarks-5.0.0.v20241003-060816\agv\agv.cif"/>
            </type>
          </event>
        </events>
      </edges>
      <markeds xmi:type="expressions:BoolExpression" xmi:id="489" value="true">
        <position xmi:type="position:Position" xmi:id="490" source="File &quot;C:\Users\rober\Downloads\eclipse-escet-v5.0-win32.win32.x86_64\eclipse-escet-v5.0\workspace\CIFBenchmarks-5.0.0.v20241003-060816\agv\agv.cif&quot;: " startLine="131" endOffset="3295" startColumn="14" endLine="131" endColumn="19" startOffset="3290" location="C:\Users\rober\Downloads\eclipse-escet-v5.0-win32.win32.x86_64\eclipse-escet-v5.0\workspace\CIFBenchmarks-5.0.0.v20241003-060816\agv\agv.cif"/>
        <type xmi:type="types:BoolType" xmi:id="491">
          <position xmi:type="position:Position" xmi:id="492" source="File &quot;C:\Users\rober\Downloads\eclipse-escet-v5.0-win32.win32.x86_64\eclipse-escet-v5.0\workspace\CIFBenchmarks-5.0.0.v20241003-060816\agv\agv.cif&quot;: " startLine="131" endOffset="3295" startColumn="14" endLine="131" endColumn="19" startOffset="3290" location="C:\Users\rober\Downloads\eclipse-escet-v5.0-win32.win32.x86_64\eclipse-escet-v5.0\workspace\CIFBenchmarks-5.0.0.v20241003-060816\agv\agv.cif"/>
        </type>
      </markeds>
    </locations>
    <locations xmi:type="automata:Location" xmi:id="493" name="l1">
      <position xmi:type="position:Position" xmi:id="494" source="File &quot;C:\Users\rober\Downloads\eclipse-escet-v5.0-win32.win32.x86_64\eclipse-escet-v5.0\workspace\CIFBenchmarks-5.0.0.v20241003-060816\agv\agv.cif&quot;: " startLine="134" endOffset="3333" startColumn="12" endLine="134" endColumn="13" startOffset="3332" location="C:\Users\rober\Downloads\eclipse-escet-v5.0-win32.win32.x86_64\eclipse-escet-v5.0\workspace\CIFBenchmarks-5.0.0.v20241003-060816\agv\agv.cif"/>
      <edges xmi:type="automata:Edge" xmi:id="495" target="503">
        <position xmi:type="position:Position" xmi:id="496" source="File &quot;C:\Users\rober\Downloads\eclipse-escet-v5.0-win32.win32.x86_64\eclipse-escet-v5.0\workspace\CIFBenchmarks-5.0.0.v20241003-060816\agv\agv.cif&quot;: " startLine="135" endOffset="3343" startColumn="5" endLine="135" endColumn="8" startOffset="3340" location="C:\Users\rober\Downloads\eclipse-escet-v5.0-win32.win32.x86_64\eclipse-escet-v5.0\workspace\CIFBenchmarks-5.0.0.v20241003-060816\agv\agv.cif"/>
        <events xmi:type="automata:EdgeEvent" xmi:id="497">
          <position xmi:type="position:Position" xmi:id="498" source="File &quot;C:\Users\rober\Downloads\eclipse-escet-v5.0-win32.win32.x86_64\eclipse-escet-v5.0\workspace\CIFBenchmarks-5.0.0.v20241003-060816\agv\agv.cif&quot;: " startLine="135" endOffset="3347" startColumn="10" endLine="135" endColumn="12" startOffset="3345" location="C:\Users\rober\Downloads\eclipse-escet-v5.0-win32.win32.x86_64\eclipse-escet-v5.0\workspace\CIFBenchmarks-5.0.0.v20241003-060816\agv\agv.cif"/>
          <event xmi:type="expressions:EventExpression" xmi:id="499" event="471">
            <position xmi:type="position:Position" xmi:id="500" source="File &quot;C:\Users\rober\Downloads\eclipse-escet-v5.0-win32.win32.x86_64\eclipse-escet-v5.0\workspace\CIFBenchmarks-5.0.0.v20241003-060816\agv\agv.cif&quot;: " startLine="135" endOffset="3347" startColumn="10" endLine="135" endColumn="12" startOffset="3345" location="C:\Users\rober\Downloads\eclipse-escet-v5.0-win32.win32.x86_64\eclipse-escet-v5.0\workspace\CIFBenchmarks-5.0.0.v20241003-060816\agv\agv.cif"/>
            <type xmi:type="types:BoolType" xmi:id="501">
              <position xmi:type="position:Position" xmi:id="502" source="File &quot;C:\Users\rober\Downloads\eclipse-escet-v5.0-win32.win32.x86_64\eclipse-escet-v5.0\workspace\CIFBenchmarks-5.0.0.v20241003-060816\agv\agv.cif&quot;: " startLine="135" endOffset="3347" startColumn="10" endLine="135" endColumn="12" startOffset="3345" location="C:\Users\rober\Downloads\eclipse-escet-v5.0-win32.win32.x86_64\eclipse-escet-v5.0\workspace\CIFBenchmarks-5.0.0.v20241003-060816\agv\agv.cif"/>
            </type>
          </event>
        </events>
      </edges>
    </locations>
    <locations xmi:type="automata:Location" xmi:id="503" name="l2">
      <position xmi:type="position:Position" xmi:id="504" source="File &quot;C:\Users\rober\Downloads\eclipse-escet-v5.0-win32.win32.x86_64\eclipse-escet-v5.0\workspace\CIFBenchmarks-5.0.0.v20241003-060816\agv\agv.cif&quot;: " startLine="137" endOffset="3371" startColumn="12" endLine="137" endColumn="13" startOffset="3370" location="C:\Users\rober\Downloads\eclipse-escet-v5.0-win32.win32.x86_64\eclipse-escet-v5.0\workspace\CIFBenchmarks-5.0.0.v20241003-060816\agv\agv.cif"/>
      <edges xmi:type="automata:Edge" xmi:id="505" target="513">
        <position xmi:type="position:Position" xmi:id="506" source="File &quot;C:\Users\rober\Downloads\eclipse-escet-v5.0-win32.win32.x86_64\eclipse-escet-v5.0\workspace\CIFBenchmarks-5.0.0.v20241003-060816\agv\agv.cif&quot;: " startLine="138" endOffset="3381" startColumn="5" endLine="138" endColumn="8" startOffset="3378" location="C:\Users\rober\Downloads\eclipse-escet-v5.0-win32.win32.x86_64\eclipse-escet-v5.0\workspace\CIFBenchmarks-5.0.0.v20241003-060816\agv\agv.cif"/>
        <events xmi:type="automata:EdgeEvent" xmi:id="507">
          <position xmi:type="position:Position" xmi:id="508" source="File &quot;C:\Users\rober\Downloads\eclipse-escet-v5.0-win32.win32.x86_64\eclipse-escet-v5.0\workspace\CIFBenchmarks-5.0.0.v20241003-060816\agv\agv.cif&quot;: " startLine="138" endOffset="3385" startColumn="10" endLine="138" endColumn="12" startOffset="3383" location="C:\Users\rober\Downloads\eclipse-escet-v5.0-win32.win32.x86_64\eclipse-escet-v5.0\workspace\CIFBenchmarks-5.0.0.v20241003-060816\agv\agv.cif"/>
          <event xmi:type="expressions:EventExpression" xmi:id="509" event="469">
            <position xmi:type="position:Position" xmi:id="510" source="File &quot;C:\Users\rober\Downloads\eclipse-escet-v5.0-win32.win32.x86_64\eclipse-escet-v5.0\workspace\CIFBenchmarks-5.0.0.v20241003-060816\agv\agv.cif&quot;: " startLine="138" endOffset="3385" startColumn="10" endLine="138" endColumn="12" startOffset="3383" location="C:\Users\rober\Downloads\eclipse-escet-v5.0-win32.win32.x86_64\eclipse-escet-v5.0\workspace\CIFBenchmarks-5.0.0.v20241003-060816\agv\agv.cif"/>
            <type xmi:type="types:BoolType" xmi:id="511">
              <position xmi:type="position:Position" xmi:id="512" source="File &quot;C:\Users\rober\Downloads\eclipse-escet-v5.0-win32.win32.x86_64\eclipse-escet-v5.0\workspace\CIFBenchmarks-5.0.0.v20241003-060816\agv\agv.cif&quot;: " startLine="138" endOffset="3385" startColumn="10" endLine="138" endColumn="12" startOffset="3383" location="C:\Users\rober\Downloads\eclipse-escet-v5.0-win32.win32.x86_64\eclipse-escet-v5.0\workspace\CIFBenchmarks-5.0.0.v20241003-060816\agv\agv.cif"/>
            </type>
          </event>
        </events>
      </edges>
    </locations>
    <locations xmi:type="automata:Location" xmi:id="513" name="l3">
      <position xmi:type="position:Position" xmi:id="514" source="File &quot;C:\Users\rober\Downloads\eclipse-escet-v5.0-win32.win32.x86_64\eclipse-escet-v5.0\workspace\CIFBenchmarks-5.0.0.v20241003-060816\agv\agv.cif&quot;: " startLine="140" endOffset="3409" startColumn="12" endLine="140" endColumn="13" startOffset="3408" location="C:\Users\rober\Downloads\eclipse-escet-v5.0-win32.win32.x86_64\eclipse-escet-v5.0\workspace\CIFBenchmarks-5.0.0.v20241003-060816\agv\agv.cif"/>
      <edges xmi:type="automata:Edge" xmi:id="515" target="475">
        <position xmi:type="position:Position" xmi:id="516" source="File &quot;C:\Users\rober\Downloads\eclipse-escet-v5.0-win32.win32.x86_64\eclipse-escet-v5.0\workspace\CIFBenchmarks-5.0.0.v20241003-060816\agv\agv.cif&quot;: " startLine="141" endOffset="3419" startColumn="5" endLine="141" endColumn="8" startOffset="3416" location="C:\Users\rober\Downloads\eclipse-escet-v5.0-win32.win32.x86_64\eclipse-escet-v5.0\workspace\CIFBenchmarks-5.0.0.v20241003-060816\agv\agv.cif"/>
        <events xmi:type="automata:EdgeEvent" xmi:id="517">
          <position xmi:type="position:Position" xmi:id="518" source="File &quot;C:\Users\rober\Downloads\eclipse-escet-v5.0-win32.win32.x86_64\eclipse-escet-v5.0\workspace\CIFBenchmarks-5.0.0.v20241003-060816\agv\agv.cif&quot;: " startLine="141" endOffset="3423" startColumn="10" endLine="141" endColumn="12" startOffset="3421" location="C:\Users\rober\Downloads\eclipse-escet-v5.0-win32.win32.x86_64\eclipse-escet-v5.0\workspace\CIFBenchmarks-5.0.0.v20241003-060816\agv\agv.cif"/>
          <event xmi:type="expressions:EventExpression" xmi:id="519" event="473">
            <position xmi:type="position:Position" xmi:id="520" source="File &quot;C:\Users\rober\Downloads\eclipse-escet-v5.0-win32.win32.x86_64\eclipse-escet-v5.0\workspace\CIFBenchmarks-5.0.0.v20241003-060816\agv\agv.cif&quot;: " startLine="141" endOffset="3423" startColumn="10" endLine="141" endColumn="12" startOffset="3421" location="C:\Users\rober\Downloads\eclipse-escet-v5.0-win32.win32.x86_64\eclipse-escet-v5.0\workspace\CIFBenchmarks-5.0.0.v20241003-060816\agv\agv.cif"/>
            <type xmi:type="types:BoolType" xmi:id="521">
              <position xmi:type="position:Position" xmi:id="522" source="File &quot;C:\Users\rober\Downloads\eclipse-escet-v5.0-win32.win32.x86_64\eclipse-escet-v5.0\workspace\CIFBenchmarks-5.0.0.v20241003-060816\agv\agv.cif&quot;: " startLine="141" endOffset="3423" startColumn="10" endLine="141" endColumn="12" startOffset="3421" location="C:\Users\rober\Downloads\eclipse-escet-v5.0-win32.win32.x86_64\eclipse-escet-v5.0\workspace\CIFBenchmarks-5.0.0.v20241003-060816\agv\agv.cif"/>
            </type>
          </event>
        </events>
      </edges>
    </locations>
  </components>
  <components xmi:type="cif:ComponentInst" xmi:id="523" name="Z1SPEC">
    <position xmi:type="position:Position" xmi:id="524" source="File &quot;C:\Users\rober\Downloads\eclipse-escet-v5.0-win32.win32.x86_64\eclipse-escet-v5.0\workspace\CIFBenchmarks-5.0.0.v20241003-060816\agv\agv.cif&quot;: " startLine="161" endOffset="3756" startColumn="1" endLine="161" endColumn="6" startOffset="3751" location="C:\Users\rober\Downloads\eclipse-escet-v5.0-win32.win32.x86_64\eclipse-escet-v5.0\workspace\CIFBenchmarks-5.0.0.v20241003-060816\agv\agv.cif"/>
    <definition xmi:type="types:ComponentDefType" xmi:id="525" definition="3">
      <position xmi:type="position:Position" xmi:id="526" source="File &quot;C:\Users\rober\Downloads\eclipse-escet-v5.0-win32.win32.x86_64\eclipse-escet-v5.0\workspace\CIFBenchmarks-5.0.0.v20241003-060816\agv\agv.cif&quot;: " startLine="161" endOffset="3764" startColumn="9" endLine="161" endColumn="14" startOffset="3759" location="C:\Users\rober\Downloads\eclipse-escet-v5.0-win32.win32.x86_64\eclipse-escet-v5.0\workspace\CIFBenchmarks-5.0.0.v20241003-060816\agv\agv.cif"/>
    </definition>
    <arguments xmi:type="expressions:EventExpression" xmi:id="527" event="163">
      <position xmi:type="position:Position" xmi:id="528" source="File &quot;C:\Users\rober\Downloads\eclipse-escet-v5.0-win32.win32.x86_64\eclipse-escet-v5.0\workspace\CIFBenchmarks-5.0.0.v20241003-060816\agv\agv.cif&quot;: " startLine="161" endOffset="3773" startColumn="16" endLine="161" endColumn="23" startOffset="3766" location="C:\Users\rober\Downloads\eclipse-escet-v5.0-win32.win32.x86_64\eclipse-escet-v5.0\workspace\CIFBenchmarks-5.0.0.v20241003-060816\agv\agv.cif"/>
      <type xmi:type="types:BoolType" xmi:id="529">
        <position xmi:type="position:Position" xmi:id="530" source="File &quot;C:\Users\rober\Downloads\eclipse-escet-v5.0-win32.win32.x86_64\eclipse-escet-v5.0\workspace\CIFBenchmarks-5.0.0.v20241003-060816\agv\agv.cif&quot;: " startLine="161" endOffset="3773" startColumn="16" endLine="161" endColumn="23" startOffset="3766" location="C:\Users\rober\Downloads\eclipse-escet-v5.0-win32.win32.x86_64\eclipse-escet-v5.0\workspace\CIFBenchmarks-5.0.0.v20241003-060816\agv\agv.cif"/>
      </type>
    </arguments>
    <arguments xmi:type="expressions:EventExpression" xmi:id="531" event="165">
      <position xmi:type="position:Position" xmi:id="532" source="File &quot;C:\Users\rober\Downloads\eclipse-escet-v5.0-win32.win32.x86_64\eclipse-escet-v5.0\workspace\CIFBenchmarks-5.0.0.v20241003-060816\agv\agv.cif&quot;: " startLine="161" endOffset="3783" startColumn="26" endLine="161" endColumn="33" startOffset="3776" location="C:\Users\rober\Downloads\eclipse-escet-v5.0-win32.win32.x86_64\eclipse-escet-v5.0\workspace\CIFBenchmarks-5.0.0.v20241003-060816\agv\agv.cif"/>
      <type xmi:type="types:BoolType" xmi:id="533">
        <position xmi:type="position:Position" xmi:id="534" source="File &quot;C:\Users\rober\Downloads\eclipse-escet-v5.0-win32.win32.x86_64\eclipse-escet-v5.0\workspace\CIFBenchmarks-5.0.0.v20241003-060816\agv\agv.cif&quot;: " startLine="161" endOffset="3783" startColumn="26" endLine="161" endColumn="33" startOffset="3776" location="C:\Users\rober\Downloads\eclipse-escet-v5.0-win32.win32.x86_64\eclipse-escet-v5.0\workspace\CIFBenchmarks-5.0.0.v20241003-060816\agv\agv.cif"/>
      </type>
    </arguments>
    <arguments xmi:type="expressions:EventExpression" xmi:id="535" event="167">
      <position xmi:type="position:Position" xmi:id="536" source="File &quot;C:\Users\rober\Downloads\eclipse-escet-v5.0-win32.win32.x86_64\eclipse-escet-v5.0\workspace\CIFBenchmarks-5.0.0.v20241003-060816\agv\agv.cif&quot;: " startLine="161" endOffset="3793" startColumn="36" endLine="161" endColumn="43" startOffset="3786" location="C:\Users\rober\Downloads\eclipse-escet-v5.0-win32.win32.x86_64\eclipse-escet-v5.0\workspace\CIFBenchmarks-5.0.0.v20241003-060816\agv\agv.cif"/>
      <type xmi:type="types:BoolType" xmi:id="537">
        <position xmi:type="position:Position" xmi:id="538" source="File &quot;C:\Users\rober\Downloads\eclipse-escet-v5.0-win32.win32.x86_64\eclipse-escet-v5.0\workspace\CIFBenchmarks-5.0.0.v20241003-060816\agv\agv.cif&quot;: " startLine="161" endOffset="3793" startColumn="36" endLine="161" endColumn="43" startOffset="3786" location="C:\Users\rober\Downloads\eclipse-escet-v5.0-win32.win32.x86_64\eclipse-escet-v5.0\workspace\CIFBenchmarks-5.0.0.v20241003-060816\agv\agv.cif"/>
      </type>
    </arguments>
    <arguments xmi:type="expressions:EventExpression" xmi:id="539" event="169">
      <position xmi:type="position:Position" xmi:id="540" source="File &quot;C:\Users\rober\Downloads\eclipse-escet-v5.0-win32.win32.x86_64\eclipse-escet-v5.0\workspace\CIFBenchmarks-5.0.0.v20241003-060816\agv\agv.cif&quot;: " startLine="161" endOffset="3803" startColumn="46" endLine="161" endColumn="53" startOffset="3796" location="C:\Users\rober\Downloads\eclipse-escet-v5.0-win32.win32.x86_64\eclipse-escet-v5.0\workspace\CIFBenchmarks-5.0.0.v20241003-060816\agv\agv.cif"/>
      <type xmi:type="types:BoolType" xmi:id="541">
        <position xmi:type="position:Position" xmi:id="542" source="File &quot;C:\Users\rober\Downloads\eclipse-escet-v5.0-win32.win32.x86_64\eclipse-escet-v5.0\workspace\CIFBenchmarks-5.0.0.v20241003-060816\agv\agv.cif&quot;: " startLine="161" endOffset="3803" startColumn="46" endLine="161" endColumn="53" startOffset="3796" location="C:\Users\rober\Downloads\eclipse-escet-v5.0-win32.win32.x86_64\eclipse-escet-v5.0\workspace\CIFBenchmarks-5.0.0.v20241003-060816\agv\agv.cif"/>
      </type>
    </arguments>
    <arguments xmi:type="expressions:EventExpression" xmi:id="543" event="227">
      <position xmi:type="position:Position" xmi:id="544" source="File &quot;C:\Users\rober\Downloads\eclipse-escet-v5.0-win32.win32.x86_64\eclipse-escet-v5.0\workspace\CIFBenchmarks-5.0.0.v20241003-060816\agv\agv.cif&quot;: " startLine="161" endOffset="3813" startColumn="56" endLine="161" endColumn="63" startOffset="3806" location="C:\Users\rober\Downloads\eclipse-escet-v5.0-win32.win32.x86_64\eclipse-escet-v5.0\workspace\CIFBenchmarks-5.0.0.v20241003-060816\agv\agv.cif"/>
      <type xmi:type="types:BoolType" xmi:id="545">
        <position xmi:type="position:Position" xmi:id="546" source="File &quot;C:\Users\rober\Downloads\eclipse-escet-v5.0-win32.win32.x86_64\eclipse-escet-v5.0\workspace\CIFBenchmarks-5.0.0.v20241003-060816\agv\agv.cif&quot;: " startLine="161" endOffset="3813" startColumn="56" endLine="161" endColumn="63" startOffset="3806" location="C:\Users\rober\Downloads\eclipse-escet-v5.0-win32.win32.x86_64\eclipse-escet-v5.0\workspace\CIFBenchmarks-5.0.0.v20241003-060816\agv\agv.cif"/>
      </type>
    </arguments>
    <arguments xmi:type="expressions:EventExpression" xmi:id="547" event="223">
      <position xmi:type="position:Position" xmi:id="548" source="File &quot;C:\Users\rober\Downloads\eclipse-escet-v5.0-win32.win32.x86_64\eclipse-escet-v5.0\workspace\CIFBenchmarks-5.0.0.v20241003-060816\agv\agv.cif&quot;: " startLine="161" endOffset="3823" startColumn="66" endLine="161" endColumn="73" startOffset="3816" location="C:\Users\rober\Downloads\eclipse-escet-v5.0-win32.win32.x86_64\eclipse-escet-v5.0\workspace\CIFBenchmarks-5.0.0.v20241003-060816\agv\agv.cif"/>
      <type xmi:type="types:BoolType" xmi:id="549">
        <position xmi:type="position:Position" xmi:id="550" source="File &quot;C:\Users\rober\Downloads\eclipse-escet-v5.0-win32.win32.x86_64\eclipse-escet-v5.0\workspace\CIFBenchmarks-5.0.0.v20241003-060816\agv\agv.cif&quot;: " startLine="161" endOffset="3823" startColumn="66" endLine="161" endColumn="73" startOffset="3816" location="C:\Users\rober\Downloads\eclipse-escet-v5.0-win32.win32.x86_64\eclipse-escet-v5.0\workspace\CIFBenchmarks-5.0.0.v20241003-060816\agv\agv.cif"/>
      </type>
    </arguments>
    <arguments xmi:type="expressions:EventExpression" xmi:id="551" event="229">
      <position xmi:type="position:Position" xmi:id="552" source="File &quot;C:\Users\rober\Downloads\eclipse-escet-v5.0-win32.win32.x86_64\eclipse-escet-v5.0\workspace\CIFBenchmarks-5.0.0.v20241003-060816\agv\agv.cif&quot;: " startLine="161" endOffset="3833" startColumn="76" endLine="161" endColumn="83" startOffset="3826" location="C:\Users\rober\Downloads\eclipse-escet-v5.0-win32.win32.x86_64\eclipse-escet-v5.0\workspace\CIFBenchmarks-5.0.0.v20241003-060816\agv\agv.cif"/>
      <type xmi:type="types:BoolType" xmi:id="553">
        <position xmi:type="position:Position" xmi:id="554" source="File &quot;C:\Users\rober\Downloads\eclipse-escet-v5.0-win32.win32.x86_64\eclipse-escet-v5.0\workspace\CIFBenchmarks-5.0.0.v20241003-060816\agv\agv.cif&quot;: " startLine="161" endOffset="3833" startColumn="76" endLine="161" endColumn="83" startOffset="3826" location="C:\Users\rober\Downloads\eclipse-escet-v5.0-win32.win32.x86_64\eclipse-escet-v5.0\workspace\CIFBenchmarks-5.0.0.v20241003-060816\agv\agv.cif"/>
      </type>
    </arguments>
    <arguments xmi:type="expressions:EventExpression" xmi:id="555" event="231">
      <position xmi:type="position:Position" xmi:id="556" source="File &quot;C:\Users\rober\Downloads\eclipse-escet-v5.0-win32.win32.x86_64\eclipse-escet-v5.0\workspace\CIFBenchmarks-5.0.0.v20241003-060816\agv\agv.cif&quot;: " startLine="161" endOffset="3843" startColumn="86" endLine="161" endColumn="93" startOffset="3836" location="C:\Users\rober\Downloads\eclipse-escet-v5.0-win32.win32.x86_64\eclipse-escet-v5.0\workspace\CIFBenchmarks-5.0.0.v20241003-060816\agv\agv.cif"/>
      <type xmi:type="types:BoolType" xmi:id="557">
        <position xmi:type="position:Position" xmi:id="558" source="File &quot;C:\Users\rober\Downloads\eclipse-escet-v5.0-win32.win32.x86_64\eclipse-escet-v5.0\workspace\CIFBenchmarks-5.0.0.v20241003-060816\agv\agv.cif&quot;: " startLine="161" endOffset="3843" startColumn="86" endLine="161" endColumn="93" startOffset="3836" location="C:\Users\rober\Downloads\eclipse-escet-v5.0-win32.win32.x86_64\eclipse-escet-v5.0\workspace\CIFBenchmarks-5.0.0.v20241003-060816\agv\agv.cif"/>
      </type>
    </arguments>
  </components>
  <components xmi:type="cif:ComponentInst" xmi:id="559" name="Z2SPEC">
    <position xmi:type="position:Position" xmi:id="560" source="File &quot;C:\Users\rober\Downloads\eclipse-escet-v5.0-win32.win32.x86_64\eclipse-escet-v5.0\workspace\CIFBenchmarks-5.0.0.v20241003-060816\agv\agv.cif&quot;: " startLine="162" endOffset="3852" startColumn="1" endLine="162" endColumn="6" startOffset="3847" location="C:\Users\rober\Downloads\eclipse-escet-v5.0-win32.win32.x86_64\eclipse-escet-v5.0\workspace\CIFBenchmarks-5.0.0.v20241003-060816\agv\agv.cif"/>
    <definition xmi:type="types:ComponentDefType" xmi:id="561" definition="3">
      <position xmi:type="position:Position" xmi:id="562" source="File &quot;C:\Users\rober\Downloads\eclipse-escet-v5.0-win32.win32.x86_64\eclipse-escet-v5.0\workspace\CIFBenchmarks-5.0.0.v20241003-060816\agv\agv.cif&quot;: " startLine="162" endOffset="3860" startColumn="9" endLine="162" endColumn="14" startOffset="3855" location="C:\Users\rober\Downloads\eclipse-escet-v5.0-win32.win32.x86_64\eclipse-escet-v5.0\workspace\CIFBenchmarks-5.0.0.v20241003-060816\agv\agv.cif"/>
    </definition>
    <arguments xmi:type="expressions:EventExpression" xmi:id="563" event="225">
      <position xmi:type="position:Position" xmi:id="564" source="File &quot;C:\Users\rober\Downloads\eclipse-escet-v5.0-win32.win32.x86_64\eclipse-escet-v5.0\workspace\CIFBenchmarks-5.0.0.v20241003-060816\agv\agv.cif&quot;: " startLine="162" endOffset="3869" startColumn="16" endLine="162" endColumn="23" startOffset="3862" location="C:\Users\rober\Downloads\eclipse-escet-v5.0-win32.win32.x86_64\eclipse-escet-v5.0\workspace\CIFBenchmarks-5.0.0.v20241003-060816\agv\agv.cif"/>
      <type xmi:type="types:BoolType" xmi:id="565">
        <position xmi:type="position:Position" xmi:id="566" source="File &quot;C:\Users\rober\Downloads\eclipse-escet-v5.0-win32.win32.x86_64\eclipse-escet-v5.0\workspace\CIFBenchmarks-5.0.0.v20241003-060816\agv\agv.cif&quot;: " startLine="162" endOffset="3869" startColumn="16" endLine="162" endColumn="23" startOffset="3862" location="C:\Users\rober\Downloads\eclipse-escet-v5.0-win32.win32.x86_64\eclipse-escet-v5.0\workspace\CIFBenchmarks-5.0.0.v20241003-060816\agv\agv.cif"/>
      </type>
    </arguments>
    <arguments xmi:type="expressions:EventExpression" xmi:id="567" event="231">
      <position xmi:type="position:Position" xmi:id="568" source="File &quot;C:\Users\rober\Downloads\eclipse-escet-v5.0-win32.win32.x86_64\eclipse-escet-v5.0\workspace\CIFBenchmarks-5.0.0.v20241003-060816\agv\agv.cif&quot;: " startLine="162" endOffset="3879" startColumn="26" endLine="162" endColumn="33" startOffset="3872" location="C:\Users\rober\Downloads\eclipse-escet-v5.0-win32.win32.x86_64\eclipse-escet-v5.0\workspace\CIFBenchmarks-5.0.0.v20241003-060816\agv\agv.cif"/>
      <type xmi:type="types:BoolType" xmi:id="569">
        <position xmi:type="position:Position" xmi:id="570" source="File &quot;C:\Users\rober\Downloads\eclipse-escet-v5.0-win32.win32.x86_64\eclipse-escet-v5.0\workspace\CIFBenchmarks-5.0.0.v20241003-060816\agv\agv.cif&quot;: " startLine="162" endOffset="3879" startColumn="26" endLine="162" endColumn="33" startOffset="3872" location="C:\Users\rober\Downloads\eclipse-escet-v5.0-win32.win32.x86_64\eclipse-escet-v5.0\workspace\CIFBenchmarks-5.0.0.v20241003-060816\agv\agv.cif"/>
      </type>
    </arguments>
    <arguments xmi:type="expressions:EventExpression" xmi:id="571" event="227">
      <position xmi:type="position:Position" xmi:id="572" source="File &quot;C:\Users\rober\Downloads\eclipse-escet-v5.0-win32.win32.x86_64\eclipse-escet-v5.0\workspace\CIFBenchmarks-5.0.0.v20241003-060816\agv\agv.cif&quot;: " startLine="162" endOffset="3889" startColumn="36" endLine="162" endColumn="43" startOffset="3882" location="C:\Users\rober\Downloads\eclipse-escet-v5.0-win32.win32.x86_64\eclipse-escet-v5.0\workspace\CIFBenchmarks-5.0.0.v20241003-060816\agv\agv.cif"/>
      <type xmi:type="types:BoolType" xmi:id="573">
        <position xmi:type="position:Position" xmi:id="574" source="File &quot;C:\Users\rober\Downloads\eclipse-escet-v5.0-win32.win32.x86_64\eclipse-escet-v5.0\workspace\CIFBenchmarks-5.0.0.v20241003-060816\agv\agv.cif&quot;: " startLine="162" endOffset="3889" startColumn="36" endLine="162" endColumn="43" startOffset="3882" location="C:\Users\rober\Downloads\eclipse-escet-v5.0-win32.win32.x86_64\eclipse-escet-v5.0\workspace\CIFBenchmarks-5.0.0.v20241003-060816\agv\agv.cif"/>
      </type>
    </arguments>
    <arguments xmi:type="expressions:EventExpression" xmi:id="575" event="233">
      <position xmi:type="position:Position" xmi:id="576" source="File &quot;C:\Users\rober\Downloads\eclipse-escet-v5.0-win32.win32.x86_64\eclipse-escet-v5.0\workspace\CIFBenchmarks-5.0.0.v20241003-060816\agv\agv.cif&quot;: " startLine="162" endOffset="3899" startColumn="46" endLine="162" endColumn="53" startOffset="3892" location="C:\Users\rober\Downloads\eclipse-escet-v5.0-win32.win32.x86_64\eclipse-escet-v5.0\workspace\CIFBenchmarks-5.0.0.v20241003-060816\agv\agv.cif"/>
      <type xmi:type="types:BoolType" xmi:id="577">
        <position xmi:type="position:Position" xmi:id="578" source="File &quot;C:\Users\rober\Downloads\eclipse-escet-v5.0-win32.win32.x86_64\eclipse-escet-v5.0\workspace\CIFBenchmarks-5.0.0.v20241003-060816\agv\agv.cif&quot;: " startLine="162" endOffset="3899" startColumn="46" endLine="162" endColumn="53" startOffset="3892" location="C:\Users\rober\Downloads\eclipse-escet-v5.0-win32.win32.x86_64\eclipse-escet-v5.0\workspace\CIFBenchmarks-5.0.0.v20241003-060816\agv\agv.cif"/>
      </type>
    </arguments>
    <arguments xmi:type="expressions:EventExpression" xmi:id="579" event="327">
      <position xmi:type="position:Position" xmi:id="580" source="File &quot;C:\Users\rober\Downloads\eclipse-escet-v5.0-win32.win32.x86_64\eclipse-escet-v5.0\workspace\CIFBenchmarks-5.0.0.v20241003-060816\agv\agv.cif&quot;: " startLine="162" endOffset="3909" startColumn="56" endLine="162" endColumn="63" startOffset="3902" location="C:\Users\rober\Downloads\eclipse-escet-v5.0-win32.win32.x86_64\eclipse-escet-v5.0\workspace\CIFBenchmarks-5.0.0.v20241003-060816\agv\agv.cif"/>
      <type xmi:type="types:BoolType" xmi:id="581">
        <position xmi:type="position:Position" xmi:id="582" source="File &quot;C:\Users\rober\Downloads\eclipse-escet-v5.0-win32.win32.x86_64\eclipse-escet-v5.0\workspace\CIFBenchmarks-5.0.0.v20241003-060816\agv\agv.cif&quot;: " startLine="162" endOffset="3909" startColumn="56" endLine="162" endColumn="63" startOffset="3902" location="C:\Users\rober\Downloads\eclipse-escet-v5.0-win32.win32.x86_64\eclipse-escet-v5.0\workspace\CIFBenchmarks-5.0.0.v20241003-060816\agv\agv.cif"/>
      </type>
    </arguments>
    <arguments xmi:type="expressions:EventExpression" xmi:id="583" event="329">
      <position xmi:type="position:Position" xmi:id="584" source="File &quot;C:\Users\rober\Downloads\eclipse-escet-v5.0-win32.win32.x86_64\eclipse-escet-v5.0\workspace\CIFBenchmarks-5.0.0.v20241003-060816\agv\agv.cif&quot;: " startLine="162" endOffset="3919" startColumn="66" endLine="162" endColumn="73" startOffset="3912" location="C:\Users\rober\Downloads\eclipse-escet-v5.0-win32.win32.x86_64\eclipse-escet-v5.0\workspace\CIFBenchmarks-5.0.0.v20241003-060816\agv\agv.cif"/>
      <type xmi:type="types:BoolType" xmi:id="585">
        <position xmi:type="position:Position" xmi:id="586" source="File &quot;C:\Users\rober\Downloads\eclipse-escet-v5.0-win32.win32.x86_64\eclipse-escet-v5.0\workspace\CIFBenchmarks-5.0.0.v20241003-060816\agv\agv.cif&quot;: " startLine="162" endOffset="3919" startColumn="66" endLine="162" endColumn="73" startOffset="3912" location="C:\Users\rober\Downloads\eclipse-escet-v5.0-win32.win32.x86_64\eclipse-escet-v5.0\workspace\CIFBenchmarks-5.0.0.v20241003-060816\agv\agv.cif"/>
      </type>
    </arguments>
    <arguments xmi:type="expressions:EventExpression" xmi:id="587" event="331">
      <position xmi:type="position:Position" xmi:id="588" source="File &quot;C:\Users\rober\Downloads\eclipse-escet-v5.0-win32.win32.x86_64\eclipse-escet-v5.0\workspace\CIFBenchmarks-5.0.0.v20241003-060816\agv\agv.cif&quot;: " startLine="162" endOffset="3929" startColumn="76" endLine="162" endColumn="83" startOffset="3922" location="C:\Users\rober\Downloads\eclipse-escet-v5.0-win32.win32.x86_64\eclipse-escet-v5.0\workspace\CIFBenchmarks-5.0.0.v20241003-060816\agv\agv.cif"/>
      <type xmi:type="types:BoolType" xmi:id="589">
        <position xmi:type="position:Position" xmi:id="590" source="File &quot;C:\Users\rober\Downloads\eclipse-escet-v5.0-win32.win32.x86_64\eclipse-escet-v5.0\workspace\CIFBenchmarks-5.0.0.v20241003-060816\agv\agv.cif&quot;: " startLine="162" endOffset="3929" startColumn="76" endLine="162" endColumn="83" startOffset="3922" location="C:\Users\rober\Downloads\eclipse-escet-v5.0-win32.win32.x86_64\eclipse-escet-v5.0\workspace\CIFBenchmarks-5.0.0.v20241003-060816\agv\agv.cif"/>
      </type>
    </arguments>
    <arguments xmi:type="expressions:EventExpression" xmi:id="591" event="333">
      <position xmi:type="position:Position" xmi:id="592" source="File &quot;C:\Users\rober\Downloads\eclipse-escet-v5.0-win32.win32.x86_64\eclipse-escet-v5.0\workspace\CIFBenchmarks-5.0.0.v20241003-060816\agv\agv.cif&quot;: " startLine="162" endOffset="3939" startColumn="86" endLine="162" endColumn="93" startOffset="3932" location="C:\Users\rober\Downloads\eclipse-escet-v5.0-win32.win32.x86_64\eclipse-escet-v5.0\workspace\CIFBenchmarks-5.0.0.v20241003-060816\agv\agv.cif"/>
      <type xmi:type="types:BoolType" xmi:id="593">
        <position xmi:type="position:Position" xmi:id="594" source="File &quot;C:\Users\rober\Downloads\eclipse-escet-v5.0-win32.win32.x86_64\eclipse-escet-v5.0\workspace\CIFBenchmarks-5.0.0.v20241003-060816\agv\agv.cif&quot;: " startLine="162" endOffset="3939" startColumn="86" endLine="162" endColumn="93" startOffset="3932" location="C:\Users\rober\Downloads\eclipse-escet-v5.0-win32.win32.x86_64\eclipse-escet-v5.0\workspace\CIFBenchmarks-5.0.0.v20241003-060816\agv\agv.cif"/>
      </type>
    </arguments>
  </components>
  <components xmi:type="cif:ComponentInst" xmi:id="595" name="Z3SPEC">
    <position xmi:type="position:Position" xmi:id="596" source="File &quot;C:\Users\rober\Downloads\eclipse-escet-v5.0-win32.win32.x86_64\eclipse-escet-v5.0\workspace\CIFBenchmarks-5.0.0.v20241003-060816\agv\agv.cif&quot;: " startLine="163" endOffset="3948" startColumn="1" endLine="163" endColumn="6" startOffset="3943" location="C:\Users\rober\Downloads\eclipse-escet-v5.0-win32.win32.x86_64\eclipse-escet-v5.0\workspace\CIFBenchmarks-5.0.0.v20241003-060816\agv\agv.cif"/>
    <definition xmi:type="types:ComponentDefType" xmi:id="597" definition="3">
      <position xmi:type="position:Position" xmi:id="598" source="File &quot;C:\Users\rober\Downloads\eclipse-escet-v5.0-win32.win32.x86_64\eclipse-escet-v5.0\workspace\CIFBenchmarks-5.0.0.v20241003-060816\agv\agv.cif&quot;: " startLine="163" endOffset="3956" startColumn="9" endLine="163" endColumn="14" startOffset="3951" location="C:\Users\rober\Downloads\eclipse-escet-v5.0-win32.win32.x86_64\eclipse-escet-v5.0\workspace\CIFBenchmarks-5.0.0.v20241003-060816\agv\agv.cif"/>
    </definition>
    <arguments xmi:type="expressions:EventExpression" xmi:id="599" event="221">
      <position xmi:type="position:Position" xmi:id="600" source="File &quot;C:\Users\rober\Downloads\eclipse-escet-v5.0-win32.win32.x86_64\eclipse-escet-v5.0\workspace\CIFBenchmarks-5.0.0.v20241003-060816\agv\agv.cif&quot;: " startLine="163" endOffset="3965" startColumn="16" endLine="163" endColumn="23" startOffset="3958" location="C:\Users\rober\Downloads\eclipse-escet-v5.0-win32.win32.x86_64\eclipse-escet-v5.0\workspace\CIFBenchmarks-5.0.0.v20241003-060816\agv\agv.cif"/>
      <type xmi:type="types:BoolType" xmi:id="601">
        <position xmi:type="position:Position" xmi:id="602" source="File &quot;C:\Users\rober\Downloads\eclipse-escet-v5.0-win32.win32.x86_64\eclipse-escet-v5.0\workspace\CIFBenchmarks-5.0.0.v20241003-060816\agv\agv.cif&quot;: " startLine="163" endOffset="3965" startColumn="16" endLine="163" endColumn="23" startOffset="3958" location="C:\Users\rober\Downloads\eclipse-escet-v5.0-win32.win32.x86_64\eclipse-escet-v5.0\workspace\CIFBenchmarks-5.0.0.v20241003-060816\agv\agv.cif"/>
      </type>
    </arguments>
    <arguments xmi:type="expressions:EventExpression" xmi:id="603" event="233">
      <position xmi:type="position:Position" xmi:id="604" source="File &quot;C:\Users\rober\Downloads\eclipse-escet-v5.0-win32.win32.x86_64\eclipse-escet-v5.0\workspace\CIFBenchmarks-5.0.0.v20241003-060816\agv\agv.cif&quot;: " startLine="163" endOffset="3975" startColumn="26" endLine="163" endColumn="33" startOffset="3968" location="C:\Users\rober\Downloads\eclipse-escet-v5.0-win32.win32.x86_64\eclipse-escet-v5.0\workspace\CIFBenchmarks-5.0.0.v20241003-060816\agv\agv.cif"/>
      <type xmi:type="types:BoolType" xmi:id="605">
        <position xmi:type="position:Position" xmi:id="606" source="File &quot;C:\Users\rober\Downloads\eclipse-escet-v5.0-win32.win32.x86_64\eclipse-escet-v5.0\workspace\CIFBenchmarks-5.0.0.v20241003-060816\agv\agv.cif&quot;: " startLine="163" endOffset="3975" startColumn="26" endLine="163" endColumn="33" startOffset="3968" location="C:\Users\rober\Downloads\eclipse-escet-v5.0-win32.win32.x86_64\eclipse-escet-v5.0\workspace\CIFBenchmarks-5.0.0.v20241003-060816\agv\agv.cif"/>
      </type>
    </arguments>
    <arguments xmi:type="expressions:EventExpression" xmi:id="607" event="225">
      <position xmi:type="position:Position" xmi:id="608" source="File &quot;C:\Users\rober\Downloads\eclipse-escet-v5.0-win32.win32.x86_64\eclipse-escet-v5.0\workspace\CIFBenchmarks-5.0.0.v20241003-060816\agv\agv.cif&quot;: " startLine="163" endOffset="3985" startColumn="36" endLine="163" endColumn="43" startOffset="3978" location="C:\Users\rober\Downloads\eclipse-escet-v5.0-win32.win32.x86_64\eclipse-escet-v5.0\workspace\CIFBenchmarks-5.0.0.v20241003-060816\agv\agv.cif"/>
      <type xmi:type="types:BoolType" xmi:id="609">
        <position xmi:type="position:Position" xmi:id="610" source="File &quot;C:\Users\rober\Downloads\eclipse-escet-v5.0-win32.win32.x86_64\eclipse-escet-v5.0\workspace\CIFBenchmarks-5.0.0.v20241003-060816\agv\agv.cif&quot;: " startLine="163" endOffset="3985" startColumn="36" endLine="163" endColumn="43" startOffset="3978" location="C:\Users\rober\Downloads\eclipse-escet-v5.0-win32.win32.x86_64\eclipse-escet-v5.0\workspace\CIFBenchmarks-5.0.0.v20241003-060816\agv\agv.cif"/>
      </type>
    </arguments>
    <arguments xmi:type="expressions:EventExpression" xmi:id="611" event="235">
      <position xmi:type="position:Position" xmi:id="612" source="File &quot;C:\Users\rober\Downloads\eclipse-escet-v5.0-win32.win32.x86_64\eclipse-escet-v5.0\workspace\CIFBenchmarks-5.0.0.v20241003-060816\agv\agv.cif&quot;: " startLine="163" endOffset="3995" startColumn="46" endLine="163" endColumn="53" startOffset="3988" location="C:\Users\rober\Downloads\eclipse-escet-v5.0-win32.win32.x86_64\eclipse-escet-v5.0\workspace\CIFBenchmarks-5.0.0.v20241003-060816\agv\agv.cif"/>
      <type xmi:type="types:BoolType" xmi:id="613">
        <position xmi:type="position:Position" xmi:id="614" source="File &quot;C:\Users\rober\Downloads\eclipse-escet-v5.0-win32.win32.x86_64\eclipse-escet-v5.0\workspace\CIFBenchmarks-5.0.0.v20241003-060816\agv\agv.cif&quot;: " startLine="163" endOffset="3995" startColumn="46" endLine="163" endColumn="53" startOffset="3988" location="C:\Users\rober\Downloads\eclipse-escet-v5.0-win32.win32.x86_64\eclipse-escet-v5.0\workspace\CIFBenchmarks-5.0.0.v20241003-060816\agv\agv.cif"/>
      </type>
    </arguments>
    <arguments xmi:type="expressions:EventExpression" xmi:id="615" event="385">
      <position xmi:type="position:Position" xmi:id="616" source="File &quot;C:\Users\rober\Downloads\eclipse-escet-v5.0-win32.win32.x86_64\eclipse-escet-v5.0\workspace\CIFBenchmarks-5.0.0.v20241003-060816\agv\agv.cif&quot;: " startLine="163" endOffset="4005" startColumn="56" endLine="163" endColumn="63" startOffset="3998" location="C:\Users\rober\Downloads\eclipse-escet-v5.0-win32.win32.x86_64\eclipse-escet-v5.0\workspace\CIFBenchmarks-5.0.0.v20241003-060816\agv\agv.cif"/>
      <type xmi:type="types:BoolType" xmi:id="617">
        <position xmi:type="position:Position" xmi:id="618" source="File &quot;C:\Users\rober\Downloads\eclipse-escet-v5.0-win32.win32.x86_64\eclipse-escet-v5.0\workspace\CIFBenchmarks-5.0.0.v20241003-060816\agv\agv.cif&quot;: " startLine="163" endOffset="4005" startColumn="56" endLine="163" endColumn="63" startOffset="3998" location="C:\Users\rober\Downloads\eclipse-escet-v5.0-win32.win32.x86_64\eclipse-escet-v5.0\workspace\CIFBenchmarks-5.0.0.v20241003-060816\agv\agv.cif"/>
      </type>
    </arguments>
    <arguments xmi:type="expressions:EventExpression" xmi:id="619" event="393">
      <position xmi:type="position:Position" xmi:id="620" source="File &quot;C:\Users\rober\Downloads\eclipse-escet-v5.0-win32.win32.x86_64\eclipse-escet-v5.0\workspace\CIFBenchmarks-5.0.0.v20241003-060816\agv\agv.cif&quot;: " startLine="163" endOffset="4015" startColumn="66" endLine="163" endColumn="73" startOffset="4008" location="C:\Users\rober\Downloads\eclipse-escet-v5.0-win32.win32.x86_64\eclipse-escet-v5.0\workspace\CIFBenchmarks-5.0.0.v20241003-060816\agv\agv.cif"/>
      <type xmi:type="types:BoolType" xmi:id="621">
        <position xmi:type="position:Position" xmi:id="622" source="File &quot;C:\Users\rober\Downloads\eclipse-escet-v5.0-win32.win32.x86_64\eclipse-escet-v5.0\workspace\CIFBenchmarks-5.0.0.v20241003-060816\agv\agv.cif&quot;: " startLine="163" endOffset="4015" startColumn="66" endLine="163" endColumn="73" startOffset="4008" location="C:\Users\rober\Downloads\eclipse-escet-v5.0-win32.win32.x86_64\eclipse-escet-v5.0\workspace\CIFBenchmarks-5.0.0.v20241003-060816\agv\agv.cif"/>
      </type>
    </arguments>
    <arguments xmi:type="expressions:EventExpression" xmi:id="623" event="389">
      <position xmi:type="position:Position" xmi:id="624" source="File &quot;C:\Users\rober\Downloads\eclipse-escet-v5.0-win32.win32.x86_64\eclipse-escet-v5.0\workspace\CIFBenchmarks-5.0.0.v20241003-060816\agv\agv.cif&quot;: " startLine="163" endOffset="4025" startColumn="76" endLine="163" endColumn="83" startOffset="4018" location="C:\Users\rober\Downloads\eclipse-escet-v5.0-win32.win32.x86_64\eclipse-escet-v5.0\workspace\CIFBenchmarks-5.0.0.v20241003-060816\agv\agv.cif"/>
      <type xmi:type="types:BoolType" xmi:id="625">
        <position xmi:type="position:Position" xmi:id="626" source="File &quot;C:\Users\rober\Downloads\eclipse-escet-v5.0-win32.win32.x86_64\eclipse-escet-v5.0\workspace\CIFBenchmarks-5.0.0.v20241003-060816\agv\agv.cif&quot;: " startLine="163" endOffset="4025" startColumn="76" endLine="163" endColumn="83" startOffset="4018" location="C:\Users\rober\Downloads\eclipse-escet-v5.0-win32.win32.x86_64\eclipse-escet-v5.0\workspace\CIFBenchmarks-5.0.0.v20241003-060816\agv\agv.cif"/>
      </type>
    </arguments>
    <arguments xmi:type="expressions:EventExpression" xmi:id="627" event="395">
      <position xmi:type="position:Position" xmi:id="628" source="File &quot;C:\Users\rober\Downloads\eclipse-escet-v5.0-win32.win32.x86_64\eclipse-escet-v5.0\workspace\CIFBenchmarks-5.0.0.v20241003-060816\agv\agv.cif&quot;: " startLine="163" endOffset="4035" startColumn="86" endLine="163" endColumn="93" startOffset="4028" location="C:\Users\rober\Downloads\eclipse-escet-v5.0-win32.win32.x86_64\eclipse-escet-v5.0\workspace\CIFBenchmarks-5.0.0.v20241003-060816\agv\agv.cif"/>
      <type xmi:type="types:BoolType" xmi:id="629">
        <position xmi:type="position:Position" xmi:id="630" source="File &quot;C:\Users\rober\Downloads\eclipse-escet-v5.0-win32.win32.x86_64\eclipse-escet-v5.0\workspace\CIFBenchmarks-5.0.0.v20241003-060816\agv\agv.cif&quot;: " startLine="163" endOffset="4035" startColumn="86" endLine="163" endColumn="93" startOffset="4028" location="C:\Users\rober\Downloads\eclipse-escet-v5.0-win32.win32.x86_64\eclipse-escet-v5.0\workspace\CIFBenchmarks-5.0.0.v20241003-060816\agv\agv.cif"/>
      </type>
    </arguments>
  </components>
  <components xmi:type="cif:ComponentInst" xmi:id="631" name="Z4SPEC">
    <position xmi:type="position:Position" xmi:id="632" source="File &quot;C:\Users\rober\Downloads\eclipse-escet-v5.0-win32.win32.x86_64\eclipse-escet-v5.0\workspace\CIFBenchmarks-5.0.0.v20241003-060816\agv\agv.cif&quot;: " startLine="164" endOffset="4044" startColumn="1" endLine="164" endColumn="6" startOffset="4039" location="C:\Users\rober\Downloads\eclipse-escet-v5.0-win32.win32.x86_64\eclipse-escet-v5.0\workspace\CIFBenchmarks-5.0.0.v20241003-060816\agv\agv.cif"/>
    <definition xmi:type="types:ComponentDefType" xmi:id="633" definition="3">
      <position xmi:type="position:Position" xmi:id="634" source="File &quot;C:\Users\rober\Downloads\eclipse-escet-v5.0-win32.win32.x86_64\eclipse-escet-v5.0\workspace\CIFBenchmarks-5.0.0.v20241003-060816\agv\agv.cif&quot;: " startLine="164" endOffset="4052" startColumn="9" endLine="164" endColumn="14" startOffset="4047" location="C:\Users\rober\Downloads\eclipse-escet-v5.0-win32.win32.x86_64\eclipse-escet-v5.0\workspace\CIFBenchmarks-5.0.0.v20241003-060816\agv\agv.cif"/>
    </definition>
    <arguments xmi:type="expressions:EventExpression" xmi:id="635" event="389">
      <position xmi:type="position:Position" xmi:id="636" source="File &quot;C:\Users\rober\Downloads\eclipse-escet-v5.0-win32.win32.x86_64\eclipse-escet-v5.0\workspace\CIFBenchmarks-5.0.0.v20241003-060816\agv\agv.cif&quot;: " startLine="164" endOffset="4061" startColumn="16" endLine="164" endColumn="23" startOffset="4054" location="C:\Users\rober\Downloads\eclipse-escet-v5.0-win32.win32.x86_64\eclipse-escet-v5.0\workspace\CIFBenchmarks-5.0.0.v20241003-060816\agv\agv.cif"/>
      <type xmi:type="types:BoolType" xmi:id="637">
        <position xmi:type="position:Position" xmi:id="638" source="File &quot;C:\Users\rober\Downloads\eclipse-escet-v5.0-win32.win32.x86_64\eclipse-escet-v5.0\workspace\CIFBenchmarks-5.0.0.v20241003-060816\agv\agv.cif&quot;: " startLine="164" endOffset="4061" startColumn="16" endLine="164" endColumn="23" startOffset="4054" location="C:\Users\rober\Downloads\eclipse-escet-v5.0-win32.win32.x86_64\eclipse-escet-v5.0\workspace\CIFBenchmarks-5.0.0.v20241003-060816\agv\agv.cif"/>
      </type>
    </arguments>
    <arguments xmi:type="expressions:EventExpression" xmi:id="639" event="387">
      <position xmi:type="position:Position" xmi:id="640" source="File &quot;C:\Users\rober\Downloads\eclipse-escet-v5.0-win32.win32.x86_64\eclipse-escet-v5.0\workspace\CIFBenchmarks-5.0.0.v20241003-060816\agv\agv.cif&quot;: " startLine="164" endOffset="4071" startColumn="26" endLine="164" endColumn="33" startOffset="4064" location="C:\Users\rober\Downloads\eclipse-escet-v5.0-win32.win32.x86_64\eclipse-escet-v5.0\workspace\CIFBenchmarks-5.0.0.v20241003-060816\agv\agv.cif"/>
      <type xmi:type="types:BoolType" xmi:id="641">
        <position xmi:type="position:Position" xmi:id="642" source="File &quot;C:\Users\rober\Downloads\eclipse-escet-v5.0-win32.win32.x86_64\eclipse-escet-v5.0\workspace\CIFBenchmarks-5.0.0.v20241003-060816\agv\agv.cif&quot;: " startLine="164" endOffset="4071" startColumn="26" endLine="164" endColumn="33" startOffset="4064" location="C:\Users\rober\Downloads\eclipse-escet-v5.0-win32.win32.x86_64\eclipse-escet-v5.0\workspace\CIFBenchmarks-5.0.0.v20241003-060816\agv\agv.cif"/>
      </type>
    </arguments>
    <arguments xmi:type="expressions:EventExpression" xmi:id="643" event="391">
      <position xmi:type="position:Position" xmi:id="644" source="File &quot;C:\Users\rober\Downloads\eclipse-escet-v5.0-win32.win32.x86_64\eclipse-escet-v5.0\workspace\CIFBenchmarks-5.0.0.v20241003-060816\agv\agv.cif&quot;: " startLine="164" endOffset="4081" startColumn="36" endLine="164" endColumn="43" startOffset="4074" location="C:\Users\rober\Downloads\eclipse-escet-v5.0-win32.win32.x86_64\eclipse-escet-v5.0\workspace\CIFBenchmarks-5.0.0.v20241003-060816\agv\agv.cif"/>
      <type xmi:type="types:BoolType" xmi:id="645">
        <position xmi:type="position:Position" xmi:id="646" source="File &quot;C:\Users\rober\Downloads\eclipse-escet-v5.0-win32.win32.x86_64\eclipse-escet-v5.0\workspace\CIFBenchmarks-5.0.0.v20241003-060816\agv\agv.cif&quot;: " startLine="164" endOffset="4081" startColumn="36" endLine="164" endColumn="43" startOffset="4074" location="C:\Users\rober\Downloads\eclipse-escet-v5.0-win32.win32.x86_64\eclipse-escet-v5.0\workspace\CIFBenchmarks-5.0.0.v20241003-060816\agv\agv.cif"/>
      </type>
    </arguments>
    <arguments xmi:type="expressions:EventExpression" xmi:id="647" event="393">
      <position xmi:type="position:Position" xmi:id="648" source="File &quot;C:\Users\rober\Downloads\eclipse-escet-v5.0-win32.win32.x86_64\eclipse-escet-v5.0\workspace\CIFBenchmarks-5.0.0.v20241003-060816\agv\agv.cif&quot;: " startLine="164" endOffset="4091" startColumn="46" endLine="164" endColumn="53" startOffset="4084" location="C:\Users\rober\Downloads\eclipse-escet-v5.0-win32.win32.x86_64\eclipse-escet-v5.0\workspace\CIFBenchmarks-5.0.0.v20241003-060816\agv\agv.cif"/>
      <type xmi:type="types:BoolType" xmi:id="649">
        <position xmi:type="position:Position" xmi:id="650" source="File &quot;C:\Users\rober\Downloads\eclipse-escet-v5.0-win32.win32.x86_64\eclipse-escet-v5.0\workspace\CIFBenchmarks-5.0.0.v20241003-060816\agv\agv.cif&quot;: " startLine="164" endOffset="4091" startColumn="46" endLine="164" endColumn="53" startOffset="4084" location="C:\Users\rober\Downloads\eclipse-escet-v5.0-win32.win32.x86_64\eclipse-escet-v5.0\workspace\CIFBenchmarks-5.0.0.v20241003-060816\agv\agv.cif"/>
      </type>
    </arguments>
    <arguments xmi:type="expressions:EventExpression" xmi:id="651" event="467">
      <position xmi:type="position:Position" xmi:id="652" source="File &quot;C:\Users\rober\Downloads\eclipse-escet-v5.0-win32.win32.x86_64\eclipse-escet-v5.0\workspace\CIFBenchmarks-5.0.0.v20241003-060816\agv\agv.cif&quot;: " startLine="164" endOffset="4101" startColumn="56" endLine="164" endColumn="63" startOffset="4094" location="C:\Users\rober\Downloads\eclipse-escet-v5.0-win32.win32.x86_64\eclipse-escet-v5.0\workspace\CIFBenchmarks-5.0.0.v20241003-060816\agv\agv.cif"/>
      <type xmi:type="types:BoolType" xmi:id="653">
        <position xmi:type="position:Position" xmi:id="654" source="File &quot;C:\Users\rober\Downloads\eclipse-escet-v5.0-win32.win32.x86_64\eclipse-escet-v5.0\workspace\CIFBenchmarks-5.0.0.v20241003-060816\agv\agv.cif&quot;: " startLine="164" endOffset="4101" startColumn="56" endLine="164" endColumn="63" startOffset="4094" location="C:\Users\rober\Downloads\eclipse-escet-v5.0-win32.win32.x86_64\eclipse-escet-v5.0\workspace\CIFBenchmarks-5.0.0.v20241003-060816\agv\agv.cif"/>
      </type>
    </arguments>
    <arguments xmi:type="expressions:EventExpression" xmi:id="655" event="469">
      <position xmi:type="position:Position" xmi:id="656" source="File &quot;C:\Users\rober\Downloads\eclipse-escet-v5.0-win32.win32.x86_64\eclipse-escet-v5.0\workspace\CIFBenchmarks-5.0.0.v20241003-060816\agv\agv.cif&quot;: " startLine="164" endOffset="4111" startColumn="66" endLine="164" endColumn="73" startOffset="4104" location="C:\Users\rober\Downloads\eclipse-escet-v5.0-win32.win32.x86_64\eclipse-escet-v5.0\workspace\CIFBenchmarks-5.0.0.v20241003-060816\agv\agv.cif"/>
      <type xmi:type="types:BoolType" xmi:id="657">
        <position xmi:type="position:Position" xmi:id="658" source="File &quot;C:\Users\rober\Downloads\eclipse-escet-v5.0-win32.win32.x86_64\eclipse-escet-v5.0\workspace\CIFBenchmarks-5.0.0.v20241003-060816\agv\agv.cif&quot;: " startLine="164" endOffset="4111" startColumn="66" endLine="164" endColumn="73" startOffset="4104" location="C:\Users\rober\Downloads\eclipse-escet-v5.0-win32.win32.x86_64\eclipse-escet-v5.0\workspace\CIFBenchmarks-5.0.0.v20241003-060816\agv\agv.cif"/>
      </type>
    </arguments>
    <arguments xmi:type="expressions:EventExpression" xmi:id="659" event="471">
      <position xmi:type="position:Position" xmi:id="660" source="File &quot;C:\Users\rober\Downloads\eclipse-escet-v5.0-win32.win32.x86_64\eclipse-escet-v5.0\workspace\CIFBenchmarks-5.0.0.v20241003-060816\agv\agv.cif&quot;: " startLine="164" endOffset="4121" startColumn="76" endLine="164" endColumn="83" startOffset="4114" location="C:\Users\rober\Downloads\eclipse-escet-v5.0-win32.win32.x86_64\eclipse-escet-v5.0\workspace\CIFBenchmarks-5.0.0.v20241003-060816\agv\agv.cif"/>
      <type xmi:type="types:BoolType" xmi:id="661">
        <position xmi:type="position:Position" xmi:id="662" source="File &quot;C:\Users\rober\Downloads\eclipse-escet-v5.0-win32.win32.x86_64\eclipse-escet-v5.0\workspace\CIFBenchmarks-5.0.0.v20241003-060816\agv\agv.cif&quot;: " startLine="164" endOffset="4121" startColumn="76" endLine="164" endColumn="83" startOffset="4114" location="C:\Users\rober\Downloads\eclipse-escet-v5.0-win32.win32.x86_64\eclipse-escet-v5.0\workspace\CIFBenchmarks-5.0.0.v20241003-060816\agv\agv.cif"/>
      </type>
    </arguments>
    <arguments xmi:type="expressions:EventExpression" xmi:id="663" event="473">
      <position xmi:type="position:Position" xmi:id="664" source="File &quot;C:\Users\rober\Downloads\eclipse-escet-v5.0-win32.win32.x86_64\eclipse-escet-v5.0\workspace\CIFBenchmarks-5.0.0.v20241003-060816\agv\agv.cif&quot;: " startLine="164" endOffset="4131" startColumn="86" endLine="164" endColumn="93" startOffset="4124" location="C:\Users\rober\Downloads\eclipse-escet-v5.0-win32.win32.x86_64\eclipse-escet-v5.0\workspace\CIFBenchmarks-5.0.0.v20241003-060816\agv\agv.cif"/>
      <type xmi:type="types:BoolType" xmi:id="665">
        <position xmi:type="position:Position" xmi:id="666" source="File &quot;C:\Users\rober\Downloads\eclipse-escet-v5.0-win32.win32.x86_64\eclipse-escet-v5.0\workspace\CIFBenchmarks-5.0.0.v20241003-060816\agv\agv.cif&quot;: " startLine="164" endOffset="4131" startColumn="86" endLine="164" endColumn="93" startOffset="4124" location="C:\Users\rober\Downloads\eclipse-escet-v5.0-win32.win32.x86_64\eclipse-escet-v5.0\workspace\CIFBenchmarks-5.0.0.v20241003-060816\agv\agv.cif"/>
      </type>
    </arguments>
  </components>
  <components xmi:type="automata:Automaton" xmi:id="667" name="WS1SPEC" kind="Requirement">
    <position xmi:type="position:Position" xmi:id="668" source="File &quot;C:\Users\rober\Downloads\eclipse-escet-v5.0-win32.win32.x86_64\eclipse-escet-v5.0\workspace\CIFBenchmarks-5.0.0.v20241003-060816\agv\agv.cif&quot;: " startLine="168" endOffset="4226" startColumn="13" endLine="168" endColumn="19" startOffset="4220" location="C:\Users\rober\Downloads\eclipse-escet-v5.0-win32.win32.x86_64\eclipse-escet-v5.0\workspace\CIFBenchmarks-5.0.0.v20241003-060816\agv\agv.cif"/>
    <locations xmi:type="automata:Location" xmi:id="669" name="l0">
      <position xmi:type="position:Position" xmi:id="670" source="File &quot;C:\Users\rober\Downloads\eclipse-escet-v5.0-win32.win32.x86_64\eclipse-escet-v5.0\workspace\CIFBenchmarks-5.0.0.v20241003-060816\agv\agv.cif&quot;: " startLine="169" endOffset="4241" startColumn="12" endLine="169" endColumn="13" startOffset="4240" location="C:\Users\rober\Downloads\eclipse-escet-v5.0-win32.win32.x86_64\eclipse-escet-v5.0\workspace\CIFBenchmarks-5.0.0.v20241003-060816\agv\agv.cif"/>
      <initials xmi:type="expressions:BoolExpression" xmi:id="671" value="true">
        <position xmi:type="position:Position" xmi:id="672" source="File &quot;C:\Users\rober\Downloads\eclipse-escet-v5.0-win32.win32.x86_64\eclipse-escet-v5.0\workspace\CIFBenchmarks-5.0.0.v20241003-060816\agv\agv.cif&quot;: " startLine="170" endOffset="4254" startColumn="5" endLine="170" endColumn="11" startOffset="4248" location="C:\Users\rober\Downloads\eclipse-escet-v5.0-win32.win32.x86_64\eclipse-escet-v5.0\workspace\CIFBenchmarks-5.0.0.v20241003-060816\agv\agv.cif"/>
        <type xmi:type="types:BoolType" xmi:id="673">
          <position xmi:type="position:Position" xmi:id="674" source="File &quot;C:\Users\rober\Downloads\eclipse-escet-v5.0-win32.win32.x86_64\eclipse-escet-v5.0\workspace\CIFBenchmarks-5.0.0.v20241003-060816\agv\agv.cif&quot;: " startLine="170" endOffset="4254" startColumn="5" endLine="170" endColumn="11" startOffset="4248" location="C:\Users\rober\Downloads\eclipse-escet-v5.0-win32.win32.x86_64\eclipse-escet-v5.0\workspace\CIFBenchmarks-5.0.0.v20241003-060816\agv\agv.cif"/>
        </type>
      </initials>
      <edges xmi:type="automata:Edge" xmi:id="675" target="695">
        <position xmi:type="position:Position" xmi:id="676" source="File &quot;C:\Users\rober\Downloads\eclipse-escet-v5.0-win32.win32.x86_64\eclipse-escet-v5.0\workspace\CIFBenchmarks-5.0.0.v20241003-060816\agv\agv.cif&quot;: " startLine="171" endOffset="4272" startColumn="5" endLine="171" endColumn="8" startOffset="4269" location="C:\Users\rober\Downloads\eclipse-escet-v5.0-win32.win32.x86_64\eclipse-escet-v5.0\workspace\CIFBenchmarks-5.0.0.v20241003-060816\agv\agv.cif"/>
        <events xmi:type="automata:EdgeEvent" xmi:id="677">
          <position xmi:type="position:Position" xmi:id="678" source="File &quot;C:\Users\rober\Downloads\eclipse-escet-v5.0-win32.win32.x86_64\eclipse-escet-v5.0\workspace\CIFBenchmarks-5.0.0.v20241003-060816\agv\agv.cif&quot;: " startLine="171" endOffset="4281" startColumn="10" endLine="171" endColumn="17" startOffset="4274" location="C:\Users\rober\Downloads\eclipse-escet-v5.0-win32.win32.x86_64\eclipse-escet-v5.0\workspace\CIFBenchmarks-5.0.0.v20241003-060816\agv\agv.cif"/>
          <event xmi:type="expressions:EventExpression" xmi:id="679" event="331">
            <position xmi:type="position:Position" xmi:id="680" source="File &quot;C:\Users\rober\Downloads\eclipse-escet-v5.0-win32.win32.x86_64\eclipse-escet-v5.0\workspace\CIFBenchmarks-5.0.0.v20241003-060816\agv\agv.cif&quot;: " startLine="171" endOffset="4281" startColumn="10" endLine="171" endColumn="17" startOffset="4274" location="C:\Users\rober\Downloads\eclipse-escet-v5.0-win32.win32.x86_64\eclipse-escet-v5.0\workspace\CIFBenchmarks-5.0.0.v20241003-060816\agv\agv.cif"/>
            <type xmi:type="types:BoolType" xmi:id="681">
              <position xmi:type="position:Position" xmi:id="682" source="File &quot;C:\Users\rober\Downloads\eclipse-escet-v5.0-win32.win32.x86_64\eclipse-escet-v5.0\workspace\CIFBenchmarks-5.0.0.v20241003-060816\agv\agv.cif&quot;: " startLine="171" endOffset="4281" startColumn="10" endLine="171" endColumn="17" startOffset="4274" location="C:\Users\rober\Downloads\eclipse-escet-v5.0-win32.win32.x86_64\eclipse-escet-v5.0\workspace\CIFBenchmarks-5.0.0.v20241003-060816\agv\agv.cif"/>
            </type>
          </event>
        </events>
      </edges>
      <edges xmi:type="automata:Edge" xmi:id="683" target="709">
        <position xmi:type="position:Position" xmi:id="684" source="File &quot;C:\Users\rober\Downloads\eclipse-escet-v5.0-win32.win32.x86_64\eclipse-escet-v5.0\workspace\CIFBenchmarks-5.0.0.v20241003-060816\agv\agv.cif&quot;: " startLine="172" endOffset="4299" startColumn="5" endLine="172" endColumn="8" startOffset="4296" location="C:\Users\rober\Downloads\eclipse-escet-v5.0-win32.win32.x86_64\eclipse-escet-v5.0\workspace\CIFBenchmarks-5.0.0.v20241003-060816\agv\agv.cif"/>
        <events xmi:type="automata:EdgeEvent" xmi:id="685">
          <position xmi:type="position:Position" xmi:id="686" source="File &quot;C:\Users\rober\Downloads\eclipse-escet-v5.0-win32.win32.x86_64\eclipse-escet-v5.0\workspace\CIFBenchmarks-5.0.0.v20241003-060816\agv\agv.cif&quot;: " startLine="172" endOffset="4308" startColumn="10" endLine="172" endColumn="17" startOffset="4301" location="C:\Users\rober\Downloads\eclipse-escet-v5.0-win32.win32.x86_64\eclipse-escet-v5.0\workspace\CIFBenchmarks-5.0.0.v20241003-060816\agv\agv.cif"/>
          <event xmi:type="expressions:EventExpression" xmi:id="687" event="395">
            <position xmi:type="position:Position" xmi:id="688" source="File &quot;C:\Users\rober\Downloads\eclipse-escet-v5.0-win32.win32.x86_64\eclipse-escet-v5.0\workspace\CIFBenchmarks-5.0.0.v20241003-060816\agv\agv.cif&quot;: " startLine="172" endOffset="4308" startColumn="10" endLine="172" endColumn="17" startOffset="4301" location="C:\Users\rober\Downloads\eclipse-escet-v5.0-win32.win32.x86_64\eclipse-escet-v5.0\workspace\CIFBenchmarks-5.0.0.v20241003-060816\agv\agv.cif"/>
            <type xmi:type="types:BoolType" xmi:id="689">
              <position xmi:type="position:Position" xmi:id="690" source="File &quot;C:\Users\rober\Downloads\eclipse-escet-v5.0-win32.win32.x86_64\eclipse-escet-v5.0\workspace\CIFBenchmarks-5.0.0.v20241003-060816\agv\agv.cif&quot;: " startLine="172" endOffset="4308" startColumn="10" endLine="172" endColumn="17" startOffset="4301" location="C:\Users\rober\Downloads\eclipse-escet-v5.0-win32.win32.x86_64\eclipse-escet-v5.0\workspace\CIFBenchmarks-5.0.0.v20241003-060816\agv\agv.cif"/>
            </type>
          </event>
        </events>
      </edges>
      <markeds xmi:type="expressions:BoolExpression" xmi:id="691" value="true">
        <position xmi:type="position:Position" xmi:id="692" source="File &quot;C:\Users\rober\Downloads\eclipse-escet-v5.0-win32.win32.x86_64\eclipse-escet-v5.0\workspace\CIFBenchmarks-5.0.0.v20241003-060816\agv\agv.cif&quot;: " startLine="170" endOffset="4262" startColumn="14" endLine="170" endColumn="19" startOffset="4257" location="C:\Users\rober\Downloads\eclipse-escet-v5.0-win32.win32.x86_64\eclipse-escet-v5.0\workspace\CIFBenchmarks-5.0.0.v20241003-060816\agv\agv.cif"/>
        <type xmi:type="types:BoolType" xmi:id="693">
          <position xmi:type="position:Position" xmi:id="694" source="File &quot;C:\Users\rober\Downloads\eclipse-escet-v5.0-win32.win32.x86_64\eclipse-escet-v5.0\workspace\CIFBenchmarks-5.0.0.v20241003-060816\agv\agv.cif&quot;: " startLine="170" endOffset="4262" startColumn="14" endLine="170" endColumn="19" startOffset="4257" location="C:\Users\rober\Downloads\eclipse-escet-v5.0-win32.win32.x86_64\eclipse-escet-v5.0\workspace\CIFBenchmarks-5.0.0.v20241003-060816\agv\agv.cif"/>
        </type>
      </markeds>
    </locations>
    <locations xmi:type="automata:Location" xmi:id="695" name="l1">
      <position xmi:type="position:Position" xmi:id="696" source="File &quot;C:\Users\rober\Downloads\eclipse-escet-v5.0-win32.win32.x86_64\eclipse-escet-v5.0\workspace\CIFBenchmarks-5.0.0.v20241003-060816\agv\agv.cif&quot;: " startLine="174" endOffset="4332" startColumn="12" endLine="174" endColumn="13" startOffset="4331" location="C:\Users\rober\Downloads\eclipse-escet-v5.0-win32.win32.x86_64\eclipse-escet-v5.0\workspace\CIFBenchmarks-5.0.0.v20241003-060816\agv\agv.cif"/>
      <edges xmi:type="automata:Edge" xmi:id="697" target="723">
        <position xmi:type="position:Position" xmi:id="698" source="File &quot;C:\Users\rober\Downloads\eclipse-escet-v5.0-win32.win32.x86_64\eclipse-escet-v5.0\workspace\CIFBenchmarks-5.0.0.v20241003-060816\agv\agv.cif&quot;: " startLine="176" endOffset="4354" startColumn="5" endLine="176" endColumn="8" startOffset="4351" location="C:\Users\rober\Downloads\eclipse-escet-v5.0-win32.win32.x86_64\eclipse-escet-v5.0\workspace\CIFBenchmarks-5.0.0.v20241003-060816\agv\agv.cif"/>
        <events xmi:type="automata:EdgeEvent" xmi:id="699">
          <position xmi:type="position:Position" xmi:id="700" source="File &quot;C:\Users\rober\Downloads\eclipse-escet-v5.0-win32.win32.x86_64\eclipse-escet-v5.0\workspace\CIFBenchmarks-5.0.0.v20241003-060816\agv\agv.cif&quot;: " startLine="176" endOffset="4363" startColumn="10" endLine="176" endColumn="17" startOffset="4356" location="C:\Users\rober\Downloads\eclipse-escet-v5.0-win32.win32.x86_64\eclipse-escet-v5.0\workspace\CIFBenchmarks-5.0.0.v20241003-060816\agv\agv.cif"/>
          <event xmi:type="expressions:EventExpression" xmi:id="701" event="395">
            <position xmi:type="position:Position" xmi:id="702" source="File &quot;C:\Users\rober\Downloads\eclipse-escet-v5.0-win32.win32.x86_64\eclipse-escet-v5.0\workspace\CIFBenchmarks-5.0.0.v20241003-060816\agv\agv.cif&quot;: " startLine="176" endOffset="4363" startColumn="10" endLine="176" endColumn="17" startOffset="4356" location="C:\Users\rober\Downloads\eclipse-escet-v5.0-win32.win32.x86_64\eclipse-escet-v5.0\workspace\CIFBenchmarks-5.0.0.v20241003-060816\agv\agv.cif"/>
            <type xmi:type="types:BoolType" xmi:id="703">
              <position xmi:type="position:Position" xmi:id="704" source="File &quot;C:\Users\rober\Downloads\eclipse-escet-v5.0-win32.win32.x86_64\eclipse-escet-v5.0\workspace\CIFBenchmarks-5.0.0.v20241003-060816\agv\agv.cif&quot;: " startLine="176" endOffset="4363" startColumn="10" endLine="176" endColumn="17" startOffset="4356" location="C:\Users\rober\Downloads\eclipse-escet-v5.0-win32.win32.x86_64\eclipse-escet-v5.0\workspace\CIFBenchmarks-5.0.0.v20241003-060816\agv\agv.cif"/>
            </type>
          </event>
        </events>
      </edges>
      <markeds xmi:type="expressions:BoolExpression" xmi:id="705" value="true">
        <position xmi:type="position:Position" xmi:id="706" source="File &quot;C:\Users\rober\Downloads\eclipse-escet-v5.0-win32.win32.x86_64\eclipse-escet-v5.0\workspace\CIFBenchmarks-5.0.0.v20241003-060816\agv\agv.cif&quot;: " startLine="175" endOffset="4344" startColumn="5" endLine="175" endColumn="10" startOffset="4339" location="C:\Users\rober\Downloads\eclipse-escet-v5.0-win32.win32.x86_64\eclipse-escet-v5.0\workspace\CIFBenchmarks-5.0.0.v20241003-060816\agv\agv.cif"/>
        <type xmi:type="types:BoolType" xmi:id="707">
          <position xmi:type="position:Position" xmi:id="708" source="File &quot;C:\Users\rober\Downloads\eclipse-escet-v5.0-win32.win32.x86_64\eclipse-escet-v5.0\workspace\CIFBenchmarks-5.0.0.v20241003-060816\agv\agv.cif&quot;: " startLine="175" endOffset="4344" startColumn="5" endLine="175" endColumn="10" startOffset="4339" location="C:\Users\rober\Downloads\eclipse-escet-v5.0-win32.win32.x86_64\eclipse-escet-v5.0\workspace\CIFBenchmarks-5.0.0.v20241003-060816\agv\agv.cif"/>
        </type>
      </markeds>
    </locations>
    <locations xmi:type="automata:Location" xmi:id="709" name="l2">
      <position xmi:type="position:Position" xmi:id="710" source="File &quot;C:\Users\rober\Downloads\eclipse-escet-v5.0-win32.win32.x86_64\eclipse-escet-v5.0\workspace\CIFBenchmarks-5.0.0.v20241003-060816\agv\agv.cif&quot;: " startLine="178" endOffset="4387" startColumn="12" endLine="178" endColumn="13" startOffset="4386" location="C:\Users\rober\Downloads\eclipse-escet-v5.0-win32.win32.x86_64\eclipse-escet-v5.0\workspace\CIFBenchmarks-5.0.0.v20241003-060816\agv\agv.cif"/>
      <edges xmi:type="automata:Edge" xmi:id="711" target="723">
        <position xmi:type="position:Position" xmi:id="712" source="File &quot;C:\Users\rober\Downloads\eclipse-escet-v5.0-win32.win32.x86_64\eclipse-escet-v5.0\workspace\CIFBenchmarks-5.0.0.v20241003-060816\agv\agv.cif&quot;: " startLine="180" endOffset="4409" startColumn="5" endLine="180" endColumn="8" startOffset="4406" location="C:\Users\rober\Downloads\eclipse-escet-v5.0-win32.win32.x86_64\eclipse-escet-v5.0\workspace\CIFBenchmarks-5.0.0.v20241003-060816\agv\agv.cif"/>
        <events xmi:type="automata:EdgeEvent" xmi:id="713">
          <position xmi:type="position:Position" xmi:id="714" source="File &quot;C:\Users\rober\Downloads\eclipse-escet-v5.0-win32.win32.x86_64\eclipse-escet-v5.0\workspace\CIFBenchmarks-5.0.0.v20241003-060816\agv\agv.cif&quot;: " startLine="180" endOffset="4418" startColumn="10" endLine="180" endColumn="17" startOffset="4411" location="C:\Users\rober\Downloads\eclipse-escet-v5.0-win32.win32.x86_64\eclipse-escet-v5.0\workspace\CIFBenchmarks-5.0.0.v20241003-060816\agv\agv.cif"/>
          <event xmi:type="expressions:EventExpression" xmi:id="715" event="331">
            <position xmi:type="position:Position" xmi:id="716" source="File &quot;C:\Users\rober\Downloads\eclipse-escet-v5.0-win32.win32.x86_64\eclipse-escet-v5.0\workspace\CIFBenchmarks-5.0.0.v20241003-060816\agv\agv.cif&quot;: " startLine="180" endOffset="4418" startColumn="10" endLine="180" endColumn="17" startOffset="4411" location="C:\Users\rober\Downloads\eclipse-escet-v5.0-win32.win32.x86_64\eclipse-escet-v5.0\workspace\CIFBenchmarks-5.0.0.v20241003-060816\agv\agv.cif"/>
            <type xmi:type="types:BoolType" xmi:id="717">
              <position xmi:type="position:Position" xmi:id="718" source="File &quot;C:\Users\rober\Downloads\eclipse-escet-v5.0-win32.win32.x86_64\eclipse-escet-v5.0\workspace\CIFBenchmarks-5.0.0.v20241003-060816\agv\agv.cif&quot;: " startLine="180" endOffset="4418" startColumn="10" endLine="180" endColumn="17" startOffset="4411" location="C:\Users\rober\Downloads\eclipse-escet-v5.0-win32.win32.x86_64\eclipse-escet-v5.0\workspace\CIFBenchmarks-5.0.0.v20241003-060816\agv\agv.cif"/>
            </type>
          </event>
        </events>
      </edges>
      <markeds xmi:type="expressions:BoolExpression" xmi:id="719" value="true">
        <position xmi:type="position:Position" xmi:id="720" source="File &quot;C:\Users\rober\Downloads\eclipse-escet-v5.0-win32.win32.x86_64\eclipse-escet-v5.0\workspace\CIFBenchmarks-5.0.0.v20241003-060816\agv\agv.cif&quot;: " startLine="179" endOffset="4399" startColumn="5" endLine="179" endColumn="10" startOffset="4394" location="C:\Users\rober\Downloads\eclipse-escet-v5.0-win32.win32.x86_64\eclipse-escet-v5.0\workspace\CIFBenchmarks-5.0.0.v20241003-060816\agv\agv.cif"/>
        <type xmi:type="types:BoolType" xmi:id="721">
          <position xmi:type="position:Position" xmi:id="722" source="File &quot;C:\Users\rober\Downloads\eclipse-escet-v5.0-win32.win32.x86_64\eclipse-escet-v5.0\workspace\CIFBenchmarks-5.0.0.v20241003-060816\agv\agv.cif&quot;: " startLine="179" endOffset="4399" startColumn="5" endLine="179" endColumn="10" startOffset="4394" location="C:\Users\rober\Downloads\eclipse-escet-v5.0-win32.win32.x86_64\eclipse-escet-v5.0\workspace\CIFBenchmarks-5.0.0.v20241003-060816\agv\agv.cif"/>
        </type>
      </markeds>
    </locations>
    <locations xmi:type="automata:Location" xmi:id="723" name="l3">
      <position xmi:type="position:Position" xmi:id="724" source="File &quot;C:\Users\rober\Downloads\eclipse-escet-v5.0-win32.win32.x86_64\eclipse-escet-v5.0\workspace\CIFBenchmarks-5.0.0.v20241003-060816\agv\agv.cif&quot;: " startLine="182" endOffset="4442" startColumn="12" endLine="182" endColumn="13" startOffset="4441" location="C:\Users\rober\Downloads\eclipse-escet-v5.0-win32.win32.x86_64\eclipse-escet-v5.0\workspace\CIFBenchmarks-5.0.0.v20241003-060816\agv\agv.cif"/>
      <edges xmi:type="automata:Edge" xmi:id="725" target="669">
        <position xmi:type="position:Position" xmi:id="726" source="File &quot;C:\Users\rober\Downloads\eclipse-escet-v5.0-win32.win32.x86_64\eclipse-escet-v5.0\workspace\CIFBenchmarks-5.0.0.v20241003-060816\agv\agv.cif&quot;: " startLine="184" endOffset="4464" startColumn="5" endLine="184" endColumn="8" startOffset="4461" location="C:\Users\rober\Downloads\eclipse-escet-v5.0-win32.win32.x86_64\eclipse-escet-v5.0\workspace\CIFBenchmarks-5.0.0.v20241003-060816\agv\agv.cif"/>
        <events xmi:type="automata:EdgeEvent" xmi:id="727">
          <position xmi:type="position:Position" xmi:id="728" source="File &quot;C:\Users\rober\Downloads\eclipse-escet-v5.0-win32.win32.x86_64\eclipse-escet-v5.0\workspace\CIFBenchmarks-5.0.0.v20241003-060816\agv\agv.cif&quot;: " startLine="184" endOffset="4473" startColumn="10" endLine="184" endColumn="17" startOffset="4466" location="C:\Users\rober\Downloads\eclipse-escet-v5.0-win32.win32.x86_64\eclipse-escet-v5.0\workspace\CIFBenchmarks-5.0.0.v20241003-060816\agv\agv.cif"/>
          <event xmi:type="expressions:EventExpression" xmi:id="729" event="471">
            <position xmi:type="position:Position" xmi:id="730" source="File &quot;C:\Users\rober\Downloads\eclipse-escet-v5.0-win32.win32.x86_64\eclipse-escet-v5.0\workspace\CIFBenchmarks-5.0.0.v20241003-060816\agv\agv.cif&quot;: " startLine="184" endOffset="4473" startColumn="10" endLine="184" endColumn="17" startOffset="4466" location="C:\Users\rober\Downloads\eclipse-escet-v5.0-win32.win32.x86_64\eclipse-escet-v5.0\workspace\CIFBenchmarks-5.0.0.v20241003-060816\agv\agv.cif"/>
            <type xmi:type="types:BoolType" xmi:id="731">
              <position xmi:type="position:Position" xmi:id="732" source="File &quot;C:\Users\rober\Downloads\eclipse-escet-v5.0-win32.win32.x86_64\eclipse-escet-v5.0\workspace\CIFBenchmarks-5.0.0.v20241003-060816\agv\agv.cif&quot;: " startLine="184" endOffset="4473" startColumn="10" endLine="184" endColumn="17" startOffset="4466" location="C:\Users\rober\Downloads\eclipse-escet-v5.0-win32.win32.x86_64\eclipse-escet-v5.0\workspace\CIFBenchmarks-5.0.0.v20241003-060816\agv\agv.cif"/>
            </type>
          </event>
        </events>
      </edges>
      <markeds xmi:type="expressions:BoolExpression" xmi:id="733" value="true">
        <position xmi:type="position:Position" xmi:id="734" source="File &quot;C:\Users\rober\Downloads\eclipse-escet-v5.0-win32.win32.x86_64\eclipse-escet-v5.0\workspace\CIFBenchmarks-5.0.0.v20241003-060816\agv\agv.cif&quot;: " startLine="183" endOffset="4454" startColumn="5" endLine="183" endColumn="10" startOffset="4449" location="C:\Users\rober\Downloads\eclipse-escet-v5.0-win32.win32.x86_64\eclipse-escet-v5.0\workspace\CIFBenchmarks-5.0.0.v20241003-060816\agv\agv.cif"/>
        <type xmi:type="types:BoolType" xmi:id="735">
          <position xmi:type="position:Position" xmi:id="736" source="File &quot;C:\Users\rober\Downloads\eclipse-escet-v5.0-win32.win32.x86_64\eclipse-escet-v5.0\workspace\CIFBenchmarks-5.0.0.v20241003-060816\agv\agv.cif&quot;: " startLine="183" endOffset="4454" startColumn="5" endLine="183" endColumn="10" startOffset="4449" location="C:\Users\rober\Downloads\eclipse-escet-v5.0-win32.win32.x86_64\eclipse-escet-v5.0\workspace\CIFBenchmarks-5.0.0.v20241003-060816\agv\agv.cif"/>
        </type>
      </markeds>
    </locations>
  </components>
  <components xmi:type="cif:ComponentInst" xmi:id="737" name="WS2SPEC">
    <position xmi:type="position:Position" xmi:id="738" source="File &quot;C:\Users\rober\Downloads\eclipse-escet-v5.0-win32.win32.x86_64\eclipse-escet-v5.0\workspace\CIFBenchmarks-5.0.0.v20241003-060816\agv\agv.cif&quot;: " startLine="199" endOffset="4749" startColumn="1" endLine="199" endColumn="7" startOffset="4743" location="C:\Users\rober\Downloads\eclipse-escet-v5.0-win32.win32.x86_64\eclipse-escet-v5.0\workspace\CIFBenchmarks-5.0.0.v20241003-060816\agv\agv.cif"/>
    <definition xmi:type="types:ComponentDefType" xmi:id="739" definition="117">
      <position xmi:type="position:Position" xmi:id="740" source="File &quot;C:\Users\rober\Downloads\eclipse-escet-v5.0-win32.win32.x86_64\eclipse-escet-v5.0\workspace\CIFBenchmarks-5.0.0.v20241003-060816\agv\agv.cif&quot;: " startLine="199" endOffset="4758" startColumn="10" endLine="199" endColumn="16" startOffset="4752" location="C:\Users\rober\Downloads\eclipse-escet-v5.0-win32.win32.x86_64\eclipse-escet-v5.0\workspace\CIFBenchmarks-5.0.0.v20241003-060816\agv\agv.cif"/>
    </definition>
    <arguments xmi:type="expressions:EventExpression" xmi:id="741" event="169">
      <position xmi:type="position:Position" xmi:id="742" source="File &quot;C:\Users\rober\Downloads\eclipse-escet-v5.0-win32.win32.x86_64\eclipse-escet-v5.0\workspace\CIFBenchmarks-5.0.0.v20241003-060816\agv\agv.cif&quot;: " startLine="199" endOffset="4767" startColumn="18" endLine="199" endColumn="25" startOffset="4760" location="C:\Users\rober\Downloads\eclipse-escet-v5.0-win32.win32.x86_64\eclipse-escet-v5.0\workspace\CIFBenchmarks-5.0.0.v20241003-060816\agv\agv.cif"/>
      <type xmi:type="types:BoolType" xmi:id="743">
        <position xmi:type="position:Position" xmi:id="744" source="File &quot;C:\Users\rober\Downloads\eclipse-escet-v5.0-win32.win32.x86_64\eclipse-escet-v5.0\workspace\CIFBenchmarks-5.0.0.v20241003-060816\agv\agv.cif&quot;: " startLine="199" endOffset="4767" startColumn="18" endLine="199" endColumn="25" startOffset="4760" location="C:\Users\rober\Downloads\eclipse-escet-v5.0-win32.win32.x86_64\eclipse-escet-v5.0\workspace\CIFBenchmarks-5.0.0.v20241003-060816\agv\agv.cif"/>
      </type>
    </arguments>
    <arguments xmi:type="expressions:EventExpression" xmi:id="745" event="333">
      <position xmi:type="position:Position" xmi:id="746" source="File &quot;C:\Users\rober\Downloads\eclipse-escet-v5.0-win32.win32.x86_64\eclipse-escet-v5.0\workspace\CIFBenchmarks-5.0.0.v20241003-060816\agv\agv.cif&quot;: " startLine="199" endOffset="4777" startColumn="28" endLine="199" endColumn="35" startOffset="4770" location="C:\Users\rober\Downloads\eclipse-escet-v5.0-win32.win32.x86_64\eclipse-escet-v5.0\workspace\CIFBenchmarks-5.0.0.v20241003-060816\agv\agv.cif"/>
      <type xmi:type="types:BoolType" xmi:id="747">
        <position xmi:type="position:Position" xmi:id="748" source="File &quot;C:\Users\rober\Downloads\eclipse-escet-v5.0-win32.win32.x86_64\eclipse-escet-v5.0\workspace\CIFBenchmarks-5.0.0.v20241003-060816\agv\agv.cif&quot;: " startLine="199" endOffset="4777" startColumn="28" endLine="199" endColumn="35" startOffset="4770" location="C:\Users\rober\Downloads\eclipse-escet-v5.0-win32.win32.x86_64\eclipse-escet-v5.0\workspace\CIFBenchmarks-5.0.0.v20241003-060816\agv\agv.cif"/>
      </type>
    </arguments>
  </components>
  <components xmi:type="cif:ComponentInst" xmi:id="749" name="WS3SPEC">
    <position xmi:type="position:Position" xmi:id="750" source="File &quot;C:\Users\rober\Downloads\eclipse-escet-v5.0-win32.win32.x86_64\eclipse-escet-v5.0\workspace\CIFBenchmarks-5.0.0.v20241003-060816\agv\agv.cif&quot;: " startLine="200" endOffset="4787" startColumn="1" endLine="200" endColumn="7" startOffset="4781" location="C:\Users\rober\Downloads\eclipse-escet-v5.0-win32.win32.x86_64\eclipse-escet-v5.0\workspace\CIFBenchmarks-5.0.0.v20241003-060816\agv\agv.cif"/>
    <definition xmi:type="types:ComponentDefType" xmi:id="751" definition="117">
      <position xmi:type="position:Position" xmi:id="752" source="File &quot;C:\Users\rober\Downloads\eclipse-escet-v5.0-win32.win32.x86_64\eclipse-escet-v5.0\workspace\CIFBenchmarks-5.0.0.v20241003-060816\agv\agv.cif&quot;: " startLine="200" endOffset="4796" startColumn="10" endLine="200" endColumn="16" startOffset="4790" location="C:\Users\rober\Downloads\eclipse-escet-v5.0-win32.win32.x86_64\eclipse-escet-v5.0\workspace\CIFBenchmarks-5.0.0.v20241003-060816\agv\agv.cif"/>
    </definition>
    <arguments xmi:type="expressions:EventExpression" xmi:id="753" event="235">
      <position xmi:type="position:Position" xmi:id="754" source="File &quot;C:\Users\rober\Downloads\eclipse-escet-v5.0-win32.win32.x86_64\eclipse-escet-v5.0\workspace\CIFBenchmarks-5.0.0.v20241003-060816\agv\agv.cif&quot;: " startLine="200" endOffset="4805" startColumn="18" endLine="200" endColumn="25" startOffset="4798" location="C:\Users\rober\Downloads\eclipse-escet-v5.0-win32.win32.x86_64\eclipse-escet-v5.0\workspace\CIFBenchmarks-5.0.0.v20241003-060816\agv\agv.cif"/>
      <type xmi:type="types:BoolType" xmi:id="755">
        <position xmi:type="position:Position" xmi:id="756" source="File &quot;C:\Users\rober\Downloads\eclipse-escet-v5.0-win32.win32.x86_64\eclipse-escet-v5.0\workspace\CIFBenchmarks-5.0.0.v20241003-060816\agv\agv.cif&quot;: " startLine="200" endOffset="4805" startColumn="18" endLine="200" endColumn="25" startOffset="4798" location="C:\Users\rober\Downloads\eclipse-escet-v5.0-win32.win32.x86_64\eclipse-escet-v5.0\workspace\CIFBenchmarks-5.0.0.v20241003-060816\agv\agv.cif"/>
      </type>
    </arguments>
    <arguments xmi:type="expressions:EventExpression" xmi:id="757" event="391">
      <position xmi:type="position:Position" xmi:id="758" source="File &quot;C:\Users\rober\Downloads\eclipse-escet-v5.0-win32.win32.x86_64\eclipse-escet-v5.0\workspace\CIFBenchmarks-5.0.0.v20241003-060816\agv\agv.cif&quot;: " startLine="200" endOffset="4815" startColumn="28" endLine="200" endColumn="35" startOffset="4808" location="C:\Users\rober\Downloads\eclipse-escet-v5.0-win32.win32.x86_64\eclipse-escet-v5.0\workspace\CIFBenchmarks-5.0.0.v20241003-060816\agv\agv.cif"/>
      <type xmi:type="types:BoolType" xmi:id="759">
        <position xmi:type="position:Position" xmi:id="760" source="File &quot;C:\Users\rober\Downloads\eclipse-escet-v5.0-win32.win32.x86_64\eclipse-escet-v5.0\workspace\CIFBenchmarks-5.0.0.v20241003-060816\agv\agv.cif&quot;: " startLine="200" endOffset="4815" startColumn="28" endLine="200" endColumn="35" startOffset="4808" location="C:\Users\rober\Downloads\eclipse-escet-v5.0-win32.win32.x86_64\eclipse-escet-v5.0\workspace\CIFBenchmarks-5.0.0.v20241003-060816\agv\agv.cif"/>
      </type>
    </arguments>
  </components>
  <components xmi:type="automata:Automaton" xmi:id="761" name="IPSSPEC" kind="Requirement">
    <position xmi:type="position:Position" xmi:id="762" source="File &quot;C:\Users\rober\Downloads\eclipse-escet-v5.0-win32.win32.x86_64\eclipse-escet-v5.0\workspace\CIFBenchmarks-5.0.0.v20241003-060816\agv\agv.cif&quot;: " startLine="204" endOffset="4931" startColumn="13" endLine="204" endColumn="19" startOffset="4925" location="C:\Users\rober\Downloads\eclipse-escet-v5.0-win32.win32.x86_64\eclipse-escet-v5.0\workspace\CIFBenchmarks-5.0.0.v20241003-060816\agv\agv.cif"/>
    <locations xmi:type="automata:Location" xmi:id="763" name="l0">
      <position xmi:type="position:Position" xmi:id="764" source="File &quot;C:\Users\rober\Downloads\eclipse-escet-v5.0-win32.win32.x86_64\eclipse-escet-v5.0\workspace\CIFBenchmarks-5.0.0.v20241003-060816\agv\agv.cif&quot;: " startLine="205" endOffset="4946" startColumn="12" endLine="205" endColumn="13" startOffset="4945" location="C:\Users\rober\Downloads\eclipse-escet-v5.0-win32.win32.x86_64\eclipse-escet-v5.0\workspace\CIFBenchmarks-5.0.0.v20241003-060816\agv\agv.cif"/>
      <initials xmi:type="expressions:BoolExpression" xmi:id="765" value="true">
        <position xmi:type="position:Position" xmi:id="766" source="File &quot;C:\Users\rober\Downloads\eclipse-escet-v5.0-win32.win32.x86_64\eclipse-escet-v5.0\workspace\CIFBenchmarks-5.0.0.v20241003-060816\agv\agv.cif&quot;: " startLine="206" endOffset="4959" startColumn="5" endLine="206" endColumn="11" startOffset="4953" location="C:\Users\rober\Downloads\eclipse-escet-v5.0-win32.win32.x86_64\eclipse-escet-v5.0\workspace\CIFBenchmarks-5.0.0.v20241003-060816\agv\agv.cif"/>
        <type xmi:type="types:BoolType" xmi:id="767">
          <position xmi:type="position:Position" xmi:id="768" source="File &quot;C:\Users\rober\Downloads\eclipse-escet-v5.0-win32.win32.x86_64\eclipse-escet-v5.0\workspace\CIFBenchmarks-5.0.0.v20241003-060816\agv\agv.cif&quot;: " startLine="206" endOffset="4959" startColumn="5" endLine="206" endColumn="11" startOffset="4953" location="C:\Users\rober\Downloads\eclipse-escet-v5.0-win32.win32.x86_64\eclipse-escet-v5.0\workspace\CIFBenchmarks-5.0.0.v20241003-060816\agv\agv.cif"/>
        </type>
      </initials>
      <edges xmi:type="automata:Edge" xmi:id="769" target="789">
        <position xmi:type="position:Position" xmi:id="770" source="File &quot;C:\Users\rober\Downloads\eclipse-escet-v5.0-win32.win32.x86_64\eclipse-escet-v5.0\workspace\CIFBenchmarks-5.0.0.v20241003-060816\agv\agv.cif&quot;: " startLine="207" endOffset="4977" startColumn="5" endLine="207" endColumn="8" startOffset="4974" location="C:\Users\rober\Downloads\eclipse-escet-v5.0-win32.win32.x86_64\eclipse-escet-v5.0\workspace\CIFBenchmarks-5.0.0.v20241003-060816\agv\agv.cif"/>
        <events xmi:type="automata:EdgeEvent" xmi:id="771">
          <position xmi:type="position:Position" xmi:id="772" source="File &quot;C:\Users\rober\Downloads\eclipse-escet-v5.0-win32.win32.x86_64\eclipse-escet-v5.0\workspace\CIFBenchmarks-5.0.0.v20241003-060816\agv\agv.cif&quot;: " startLine="207" endOffset="4986" startColumn="10" endLine="207" endColumn="17" startOffset="4979" location="C:\Users\rober\Downloads\eclipse-escet-v5.0-win32.win32.x86_64\eclipse-escet-v5.0\workspace\CIFBenchmarks-5.0.0.v20241003-060816\agv\agv.cif"/>
          <event xmi:type="expressions:EventExpression" xmi:id="773" event="167">
            <position xmi:type="position:Position" xmi:id="774" source="File &quot;C:\Users\rober\Downloads\eclipse-escet-v5.0-win32.win32.x86_64\eclipse-escet-v5.0\workspace\CIFBenchmarks-5.0.0.v20241003-060816\agv\agv.cif&quot;: " startLine="207" endOffset="4986" startColumn="10" endLine="207" endColumn="17" startOffset="4979" location="C:\Users\rober\Downloads\eclipse-escet-v5.0-win32.win32.x86_64\eclipse-escet-v5.0\workspace\CIFBenchmarks-5.0.0.v20241003-060816\agv\agv.cif"/>
            <type xmi:type="types:BoolType" xmi:id="775">
              <position xmi:type="position:Position" xmi:id="776" source="File &quot;C:\Users\rober\Downloads\eclipse-escet-v5.0-win32.win32.x86_64\eclipse-escet-v5.0\workspace\CIFBenchmarks-5.0.0.v20241003-060816\agv\agv.cif&quot;: " startLine="207" endOffset="4986" startColumn="10" endLine="207" endColumn="17" startOffset="4979" location="C:\Users\rober\Downloads\eclipse-escet-v5.0-win32.win32.x86_64\eclipse-escet-v5.0\workspace\CIFBenchmarks-5.0.0.v20241003-060816\agv\agv.cif"/>
            </type>
          </event>
        </events>
      </edges>
      <edges xmi:type="automata:Edge" xmi:id="777" target="803">
        <position xmi:type="position:Position" xmi:id="778" source="File &quot;C:\Users\rober\Downloads\eclipse-escet-v5.0-win32.win32.x86_64\eclipse-escet-v5.0\workspace\CIFBenchmarks-5.0.0.v20241003-060816\agv\agv.cif&quot;: " startLine="208" endOffset="5004" startColumn="5" endLine="208" endColumn="8" startOffset="5001" location="C:\Users\rober\Downloads\eclipse-escet-v5.0-win32.win32.x86_64\eclipse-escet-v5.0\workspace\CIFBenchmarks-5.0.0.v20241003-060816\agv\agv.cif"/>
        <events xmi:type="automata:EdgeEvent" xmi:id="779">
          <position xmi:type="position:Position" xmi:id="780" source="File &quot;C:\Users\rober\Downloads\eclipse-escet-v5.0-win32.win32.x86_64\eclipse-escet-v5.0\workspace\CIFBenchmarks-5.0.0.v20241003-060816\agv\agv.cif&quot;: " startLine="208" endOffset="5013" startColumn="10" endLine="208" endColumn="17" startOffset="5006" location="C:\Users\rober\Downloads\eclipse-escet-v5.0-win32.win32.x86_64\eclipse-escet-v5.0\workspace\CIFBenchmarks-5.0.0.v20241003-060816\agv\agv.cif"/>
          <event xmi:type="expressions:EventExpression" xmi:id="781" event="229">
            <position xmi:type="position:Position" xmi:id="782" source="File &quot;C:\Users\rober\Downloads\eclipse-escet-v5.0-win32.win32.x86_64\eclipse-escet-v5.0\workspace\CIFBenchmarks-5.0.0.v20241003-060816\agv\agv.cif&quot;: " startLine="208" endOffset="5013" startColumn="10" endLine="208" endColumn="17" startOffset="5006" location="C:\Users\rober\Downloads\eclipse-escet-v5.0-win32.win32.x86_64\eclipse-escet-v5.0\workspace\CIFBenchmarks-5.0.0.v20241003-060816\agv\agv.cif"/>
            <type xmi:type="types:BoolType" xmi:id="783">
              <position xmi:type="position:Position" xmi:id="784" source="File &quot;C:\Users\rober\Downloads\eclipse-escet-v5.0-win32.win32.x86_64\eclipse-escet-v5.0\workspace\CIFBenchmarks-5.0.0.v20241003-060816\agv\agv.cif&quot;: " startLine="208" endOffset="5013" startColumn="10" endLine="208" endColumn="17" startOffset="5006" location="C:\Users\rober\Downloads\eclipse-escet-v5.0-win32.win32.x86_64\eclipse-escet-v5.0\workspace\CIFBenchmarks-5.0.0.v20241003-060816\agv\agv.cif"/>
            </type>
          </event>
        </events>
      </edges>
      <markeds xmi:type="expressions:BoolExpression" xmi:id="785" value="true">
        <position xmi:type="position:Position" xmi:id="786" source="File &quot;C:\Users\rober\Downloads\eclipse-escet-v5.0-win32.win32.x86_64\eclipse-escet-v5.0\workspace\CIFBenchmarks-5.0.0.v20241003-060816\agv\agv.cif&quot;: " startLine="206" endOffset="4967" startColumn="14" endLine="206" endColumn="19" startOffset="4962" location="C:\Users\rober\Downloads\eclipse-escet-v5.0-win32.win32.x86_64\eclipse-escet-v5.0\workspace\CIFBenchmarks-5.0.0.v20241003-060816\agv\agv.cif"/>
        <type xmi:type="types:BoolType" xmi:id="787">
          <position xmi:type="position:Position" xmi:id="788" source="File &quot;C:\Users\rober\Downloads\eclipse-escet-v5.0-win32.win32.x86_64\eclipse-escet-v5.0\workspace\CIFBenchmarks-5.0.0.v20241003-060816\agv\agv.cif&quot;: " startLine="206" endOffset="4967" startColumn="14" endLine="206" endColumn="19" startOffset="4962" location="C:\Users\rober\Downloads\eclipse-escet-v5.0-win32.win32.x86_64\eclipse-escet-v5.0\workspace\CIFBenchmarks-5.0.0.v20241003-060816\agv\agv.cif"/>
        </type>
      </markeds>
    </locations>
    <locations xmi:type="automata:Location" xmi:id="789" name="l1">
      <position xmi:type="position:Position" xmi:id="790" source="File &quot;C:\Users\rober\Downloads\eclipse-escet-v5.0-win32.win32.x86_64\eclipse-escet-v5.0\workspace\CIFBenchmarks-5.0.0.v20241003-060816\agv\agv.cif&quot;: " startLine="210" endOffset="5037" startColumn="12" endLine="210" endColumn="13" startOffset="5036" location="C:\Users\rober\Downloads\eclipse-escet-v5.0-win32.win32.x86_64\eclipse-escet-v5.0\workspace\CIFBenchmarks-5.0.0.v20241003-060816\agv\agv.cif"/>
      <edges xmi:type="automata:Edge" xmi:id="791" target="763">
        <position xmi:type="position:Position" xmi:id="792" source="File &quot;C:\Users\rober\Downloads\eclipse-escet-v5.0-win32.win32.x86_64\eclipse-escet-v5.0\workspace\CIFBenchmarks-5.0.0.v20241003-060816\agv\agv.cif&quot;: " startLine="212" endOffset="5059" startColumn="5" endLine="212" endColumn="8" startOffset="5056" location="C:\Users\rober\Downloads\eclipse-escet-v5.0-win32.win32.x86_64\eclipse-escet-v5.0\workspace\CIFBenchmarks-5.0.0.v20241003-060816\agv\agv.cif"/>
        <events xmi:type="automata:EdgeEvent" xmi:id="793">
          <position xmi:type="position:Position" xmi:id="794" source="File &quot;C:\Users\rober\Downloads\eclipse-escet-v5.0-win32.win32.x86_64\eclipse-escet-v5.0\workspace\CIFBenchmarks-5.0.0.v20241003-060816\agv\agv.cif&quot;: " startLine="212" endOffset="5068" startColumn="10" endLine="212" endColumn="17" startOffset="5061" location="C:\Users\rober\Downloads\eclipse-escet-v5.0-win32.win32.x86_64\eclipse-escet-v5.0\workspace\CIFBenchmarks-5.0.0.v20241003-060816\agv\agv.cif"/>
          <event xmi:type="expressions:EventExpression" xmi:id="795" event="165">
            <position xmi:type="position:Position" xmi:id="796" source="File &quot;C:\Users\rober\Downloads\eclipse-escet-v5.0-win32.win32.x86_64\eclipse-escet-v5.0\workspace\CIFBenchmarks-5.0.0.v20241003-060816\agv\agv.cif&quot;: " startLine="212" endOffset="5068" startColumn="10" endLine="212" endColumn="17" startOffset="5061" location="C:\Users\rober\Downloads\eclipse-escet-v5.0-win32.win32.x86_64\eclipse-escet-v5.0\workspace\CIFBenchmarks-5.0.0.v20241003-060816\agv\agv.cif"/>
            <type xmi:type="types:BoolType" xmi:id="797">
              <position xmi:type="position:Position" xmi:id="798" source="File &quot;C:\Users\rober\Downloads\eclipse-escet-v5.0-win32.win32.x86_64\eclipse-escet-v5.0\workspace\CIFBenchmarks-5.0.0.v20241003-060816\agv\agv.cif&quot;: " startLine="212" endOffset="5068" startColumn="10" endLine="212" endColumn="17" startOffset="5061" location="C:\Users\rober\Downloads\eclipse-escet-v5.0-win32.win32.x86_64\eclipse-escet-v5.0\workspace\CIFBenchmarks-5.0.0.v20241003-060816\agv\agv.cif"/>
            </type>
          </event>
        </events>
      </edges>
      <markeds xmi:type="expressions:BoolExpression" xmi:id="799" value="true">
        <position xmi:type="position:Position" xmi:id="800" source="File &quot;C:\Users\rober\Downloads\eclipse-escet-v5.0-win32.win32.x86_64\eclipse-escet-v5.0\workspace\CIFBenchmarks-5.0.0.v20241003-060816\agv\agv.cif&quot;: " startLine="211" endOffset="5049" startColumn="5" endLine="211" endColumn="10" startOffset="5044" location="C:\Users\rober\Downloads\eclipse-escet-v5.0-win32.win32.x86_64\eclipse-escet-v5.0\workspace\CIFBenchmarks-5.0.0.v20241003-060816\agv\agv.cif"/>
        <type xmi:type="types:BoolType" xmi:id="801">
          <position xmi:type="position:Position" xmi:id="802" source="File &quot;C:\Users\rober\Downloads\eclipse-escet-v5.0-win32.win32.x86_64\eclipse-escet-v5.0\workspace\CIFBenchmarks-5.0.0.v20241003-060816\agv\agv.cif&quot;: " startLine="211" endOffset="5049" startColumn="5" endLine="211" endColumn="10" startOffset="5044" location="C:\Users\rober\Downloads\eclipse-escet-v5.0-win32.win32.x86_64\eclipse-escet-v5.0\workspace\CIFBenchmarks-5.0.0.v20241003-060816\agv\agv.cif"/>
        </type>
      </markeds>
    </locations>
    <locations xmi:type="automata:Location" xmi:id="803" name="l2">
      <position xmi:type="position:Position" xmi:id="804" source="File &quot;C:\Users\rober\Downloads\eclipse-escet-v5.0-win32.win32.x86_64\eclipse-escet-v5.0\workspace\CIFBenchmarks-5.0.0.v20241003-060816\agv\agv.cif&quot;: " startLine="214" endOffset="5092" startColumn="12" endLine="214" endColumn="13" startOffset="5091" location="C:\Users\rober\Downloads\eclipse-escet-v5.0-win32.win32.x86_64\eclipse-escet-v5.0\workspace\CIFBenchmarks-5.0.0.v20241003-060816\agv\agv.cif"/>
      <edges xmi:type="automata:Edge" xmi:id="805" target="763">
        <position xmi:type="position:Position" xmi:id="806" source="File &quot;C:\Users\rober\Downloads\eclipse-escet-v5.0-win32.win32.x86_64\eclipse-escet-v5.0\workspace\CIFBenchmarks-5.0.0.v20241003-060816\agv\agv.cif&quot;: " startLine="216" endOffset="5114" startColumn="5" endLine="216" endColumn="8" startOffset="5111" location="C:\Users\rober\Downloads\eclipse-escet-v5.0-win32.win32.x86_64\eclipse-escet-v5.0\workspace\CIFBenchmarks-5.0.0.v20241003-060816\agv\agv.cif"/>
        <events xmi:type="automata:EdgeEvent" xmi:id="807">
          <position xmi:type="position:Position" xmi:id="808" source="File &quot;C:\Users\rober\Downloads\eclipse-escet-v5.0-win32.win32.x86_64\eclipse-escet-v5.0\workspace\CIFBenchmarks-5.0.0.v20241003-060816\agv\agv.cif&quot;: " startLine="216" endOffset="5123" startColumn="10" endLine="216" endColumn="17" startOffset="5116" location="C:\Users\rober\Downloads\eclipse-escet-v5.0-win32.win32.x86_64\eclipse-escet-v5.0\workspace\CIFBenchmarks-5.0.0.v20241003-060816\agv\agv.cif"/>
          <event xmi:type="expressions:EventExpression" xmi:id="809" event="223">
            <position xmi:type="position:Position" xmi:id="810" source="File &quot;C:\Users\rober\Downloads\eclipse-escet-v5.0-win32.win32.x86_64\eclipse-escet-v5.0\workspace\CIFBenchmarks-5.0.0.v20241003-060816\agv\agv.cif&quot;: " startLine="216" endOffset="5123" startColumn="10" endLine="216" endColumn="17" startOffset="5116" location="C:\Users\rober\Downloads\eclipse-escet-v5.0-win32.win32.x86_64\eclipse-escet-v5.0\workspace\CIFBenchmarks-5.0.0.v20241003-060816\agv\agv.cif"/>
            <type xmi:type="types:BoolType" xmi:id="811">
              <position xmi:type="position:Position" xmi:id="812" source="File &quot;C:\Users\rober\Downloads\eclipse-escet-v5.0-win32.win32.x86_64\eclipse-escet-v5.0\workspace\CIFBenchmarks-5.0.0.v20241003-060816\agv\agv.cif&quot;: " startLine="216" endOffset="5123" startColumn="10" endLine="216" endColumn="17" startOffset="5116" location="C:\Users\rober\Downloads\eclipse-escet-v5.0-win32.win32.x86_64\eclipse-escet-v5.0\workspace\CIFBenchmarks-5.0.0.v20241003-060816\agv\agv.cif"/>
            </type>
          </event>
        </events>
      </edges>
      <markeds xmi:type="expressions:BoolExpression" xmi:id="813" value="true">
        <position xmi:type="position:Position" xmi:id="814" source="File &quot;C:\Users\rober\Downloads\eclipse-escet-v5.0-win32.win32.x86_64\eclipse-escet-v5.0\workspace\CIFBenchmarks-5.0.0.v20241003-060816\agv\agv.cif&quot;: " startLine="215" endOffset="5104" startColumn="5" endLine="215" endColumn="10" startOffset="5099" location="C:\Users\rober\Downloads\eclipse-escet-v5.0-win32.win32.x86_64\eclipse-escet-v5.0\workspace\CIFBenchmarks-5.0.0.v20241003-060816\agv\agv.cif"/>
        <type xmi:type="types:BoolType" xmi:id="815">
          <position xmi:type="position:Position" xmi:id="816" source="File &quot;C:\Users\rober\Downloads\eclipse-escet-v5.0-win32.win32.x86_64\eclipse-escet-v5.0\workspace\CIFBenchmarks-5.0.0.v20241003-060816\agv\agv.cif&quot;: " startLine="215" endOffset="5104" startColumn="5" endLine="215" endColumn="10" startOffset="5099" location="C:\Users\rober\Downloads\eclipse-escet-v5.0-win32.win32.x86_64\eclipse-escet-v5.0\workspace\CIFBenchmarks-5.0.0.v20241003-060816\agv\agv.cif"/>
        </type>
      </markeds>
    </locations>
  </components>
</cif:Specification>
`;
const eventMap = ['AGV1.e10', 'AGV1.e12', 'AGV2.e18', 'AGV2.e20', 'AGV2.e22', 'AGV2.e24', 'AGV2.e26', 'AGV2.e28', 'AGV3.e32', 'AGV3.e34', 'AGV4.e40', 'AGV4.e42', 'AGV4.e44', 'AGV4.e46', 'AGV5.e50', 'AGV5.e52', 'AGV1.e11', 'AGV1.e13', 'AGV2.e21', 'AGV2.e23', 'AGV3.e31', 'AGV3.e33', 'AGV4.e41', 'AGV4.e43', 'AGV5.e51', 'AGV5.e53'];