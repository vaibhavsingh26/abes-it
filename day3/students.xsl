<?xml version="1.0" encoding="UTF-8"?>
<xsl:stylesheet version="1.0"
  xmlns:xsl="http://www.w3.org/1999/XSL/Transform"
  xmlns:html="http://www.w3.org/1999/xhtml">

  <xsl:template match="/">
    <html:html>
      <html:head>
        <html:title>Student Details</html:title>
      </html:head>
      <html:body>
        <html:h1>Student Details</html:h1>
        <html:table border="1">
          <html:tr>
            <html:th>Roll No</html:th>
            <html:th>Marks</html:th>
            <html:th>Total Marks</html:th>
            <html:th>Percentage</html:th>
          </html:tr>
          <xsl:for-each select="students/student">
            <html:tr>
              <html:td><xsl:value-of select="rollno"/></html:td>
              <html:td><xsl:value-of select="marks"/></html:td>
              <html:td><xsl:value-of select="totalmarks"/></html:td>
              <html:td><xsl:value-of select="percentage"/></html:td>
            </html:tr>
          </xsl:for-each>
        </html:table>
      </html:body>
    </html:html>
  </xsl:template>

</xsl:stylesheet>