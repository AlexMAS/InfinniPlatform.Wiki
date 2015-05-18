---
layout: doc
title: "Сервисы репортинговой системы (Report API)"
position: 5
categories: 
tags: 
---

## Запрос отчета по указанному идентификатору шаблона

Запрос на получение сформированного отчета в формате pdf должен осуществляться синхронно, без использования ajax запросов (JQuery).

Метаданные запрашиваемого отчета описаны в [[PrintReportAction]]

|Свойство PrintReportAction|Параметр сервиса|
|--------------------------|----------------|
|ConfigId|Configuration|
|ReportId|Template|
|Parameters|Parameters|
|-|FileFormat|

Значение параметра FileFormat в данный момент должно быть всегда 0, что соответствует формату отчета pdf. Поддержка остальных форматов планируется в будущих релизах.

|Наименование|Значение|
|------------|--------|
|Url|[http://](http://10.0.0.12:9999/SystemConfig/UrlEncodedData/Reporting/GetReport)[<servername>:<serverport>](http://localhost.:9999/SystemConfig/StandardApi/Reporting/getReport)[/SystemConfig/UrlEncodedData/Reporting/GetReport](http://10.0.0.12:9999/SystemConfig/UrlEncodedData/Reporting/GetReport)|
|VerbType|POST|
|Список передаваемых параметров запроса||Параметр|Значение|
|--------|--------|
|Form|{  
   FileFormat: <reportFormat>,  
   Parameters: [  
     {  
         Name: <parameterName>,  
         Value: <parameterValue>  
     }  
  ],  
   Configuration : <reportConfiguration>,  
   Template : <reportName>      
}|

  ```
{
   FileFormat:0,
   Parameters: [
     {
         Name: "HospitalizationId",
         Value: "224427715e-1f73-4077-a58b-9be70c502287"
     }
  ],
   Configuration : "EmergencyRoom",
   Template : "MedicalHistoryReport"    
}
```

|
| | |

# Запрос печатной формы

Запрос на получение сформированного отчета в формате pdf должен осуществляться синхронно, без использования ajax запросов (JQuery).

Метаданные запрашиваемой формы описаны в [PrintViewAction](http://demo.infinnity.ru:8081/display/MC/PrintViewAction)

|Наименование|Значение|
|------------|--------|
|Url|[http://<server>:<port>/SystemConfig/UrlEncodedData/Reporting/GetPrintView](http://10.0.0.12:9999/SystemConfig/UrlEncodedData/Reporting/GetPrintView) |
|VerbType|GET|
|Список передаваемых параметров запроса||Параметр|Значение|
|--------|--------|
|Form|```
{ 
	ConfigId: <Configuration>, 
	DocumentId : <Document>, 
    UpdateAction : <UpdateAction>,
	PrintViewId : <Print view identifier>, 
	PrintViewType : <PrintViewType>, 
	PageNumber : <number of data page>,
	PageSize : <page size>,
	Query : <array of criteria>
}
```

|

Пример параметра запроса:|Параметр|Значение|
|--------|--------|
|Form|```
{ 
	ConfigId: "Ehr", 
	DocumentId : "Header", 
    UpdateAction : "PreprocessPrintData"
	PrintViewId : "PrintPreview", 
	PrintViewType : "ObjectView", 
	PageNumber : 0,
	PageSize : 100,
	Query : [{
	    Property : "Id",
   		 CriteriaType : 1,
	    Value : "29704258-E7CB-4C50-8D5A-BE0110850468"		
	}]
}
```

|

|
|Пример запроса|[http://<server>:<port>/SystemConfig/UrlEncodedData/Reporting/GetPrintView/?Form=%7B%22ConfigId%22%3A%22Ehr%22%2C%22DocumentId%22%3A%22Header%22%2C%22PrintViewId%22%3A%22PrintView%22%2C%22PrintViewType%22%3A%22ObjectView%22%2C%22PageNumber%22%3A0%2C%22PageSize%22%3A100%2C%22Query%22%3A%5B%7B%22Property%22%3A%22Id%22%2C%22Value%22%3A%2229704258-E7CB-4C50-8D5A-BE0110850468%22%2C%22CriteriaType%22%3A1%7D%5D%7D]()|
|Пример ответа|%PDF-1.4  
%����  
% PDFsharp Version 1.32.2608.0 (verbose mode)  
% Creation date: 27.11.2014 15:38:17               
% Creation time: 0.614 seconds                     
% File size: 21608 bytes                           
% Pages: 1                                         
% Objects: 11                                      
%--------------------------------------------------------------------------------------------------  
1 0 obj   % PdfSharp.Pdf.PdfDocumentInformation  
<<  
  /CreationDate (D:20141127153817+06'00')  
  /Creator (PDFsharp 1.32.2608-w \(www.pdfsharp.net\))  
  /Producer (PDFsharp 1.32.2608-w \(www.pdfsharp.net\))  
>>  
endobj  
%--------------------------------------------------------------------------------------------------  
2 0 obj   % PdfSharp.Pdf.Advanced.PdfCatalog  
<<  
  /Pages 3 0 R  
  /Type /Catalog  
>>  
endobj  
%--------------------------------------------------------------------------------------------------  
3 0 obj   % PdfSharp.Pdf.PdfPages  
<<  
  /Count 1  
  /Kids [4 0 R]***<Далее остальной контент печатной формы>***|

Список допустимых значений [PrintViewType](http://demo.infinnity.ru:8081/display/MC/PrintViewType)

 

 

