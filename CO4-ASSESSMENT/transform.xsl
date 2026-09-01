<?xml version="1.0" encoding="UTF-8"?>
<xsl:stylesheet version="1.0" xmlns:xsl="http://www.w3.org/1999/XSL/Transform">
<xsl:output method="html" encoding="UTF-8" indent="yes"/>
<xsl:template match="/">
<html><head><title>High Enrollment Courses</title>
<style>
body{background:#efe0bf;color:#34271d;font-family:Georgia,serif}
.page{max-width:1100px;margin:35px auto;padding:28px;background:#f7edcf;border:3px double #5b3b22}
h1{text-transform:uppercase}.rule{border-top:2px solid #5b3b22;margin:15px 0}
table{width:100%;border-collapse:collapse}th,td{padding:12px;border:1px solid #9c7b50;text-align:left}
th{background:#6b4729;color:#f7edcf}tr:nth-child(even){background:#efe0bf}
</style></head><body><div class="page">
<h1>High Enrollment Courses</h1><div class="rule"/>
<table><tr><th>Course Code</th><th>Course Name</th><th>Faculty</th><th>Students</th><th>Credits</th><th>Type</th></tr>
<xsl:for-each select="courses/course[students &gt; 40]">
<xsl:sort select="students" data-type="number" order="descending"/>
<tr><td><xsl:value-of select="code"/></td><td><xsl:value-of select="name"/></td><td><xsl:value-of select="faculty"/></td><td><xsl:value-of select="students"/></td><td><xsl:value-of select="credits"/></td><td><xsl:value-of select="type"/></td></tr>
</xsl:for-each>
</table></div></body></html>
</xsl:template>
</xsl:stylesheet>
