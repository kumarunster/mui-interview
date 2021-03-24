# Interview Test Task

>Please **do not** fork this repository via github fork function. Just clone it and as soon it is done upload somewhere and share the link.

or make your own fork on sandbox and share your own link:

[![Edit on CodeSandbox](https://codesandbox.io/static/img/play-codesandbox.svg)](https://codesandbox.io/s/black-cdn-rg5i7)

Implement a Data Table to show people and entities under EU sanctions by utilizing [agGrid community edition](https://www.ag-grid.com/react-grid/getting-started/!) and Material UI.

The task includes following sub tasks:
* create a data fetch service, which uses the url from the TextField on the frontpage.
* implement a Data Grid/Table by using the agGrid component (extend dependencies as you need) in the `SanctionsTable.tsx` file
* make first and last column fixed in size and sticky (pinned, always visible)
* last column should contain a view action with an "eye" as icon
* click on that "eye" icon should open a simple modal Material UI Dialog with following content as label and value pairs. Dialog should disappear on close action:

**EU reference number**: _Entity_EU_ReferenceNumber_

**Legal basis**: _Entity_Regulation_NumberTitle_

**Programme**: _Entity_Regulation_Programme_

**Identity information**:  
  * **Name/Alias**: _NameAlias_FirstName NameAlias_LastName_
  * **Name/Alias**: ...
  * **Name/Alias**: ...

keep in mind, that for the same _Entity_EU_ReferenceNumber_ multimple names/aliases could exist. They all should be presented in that dialog, but you do not need to group the data for the agGrid presentation.

Working url for data fetch can be found [here](https://data.europa.eu/euodp/data/dataset/consolidated-list-of-persons-groups-and-entities-subject-to-eu-financial-sanctions-fisma/resource/421d4220-42b5-458f-8c0c-aa666db7c0ce184276e7-d3ec-4908-8d29-1bd3b5730666c13d9f68-5f9e-4875-bd71-478716316106#)


