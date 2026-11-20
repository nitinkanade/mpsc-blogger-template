$xml = Get-Content -Raw -Path "c:\zMyData\blog\blogger-template\mpsc-pyq.xml"
$doc = New-Object System.Xml.XmlDocument
$doc.LoadXml($xml)
Write-Output "STRICT XML VALID: $($doc.DocumentElement.Name)"
