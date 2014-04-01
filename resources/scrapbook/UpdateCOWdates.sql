update cshapes_mw set cowsdate = CAST(cowsyear||'-'||cowsmonth||'-'||cowsday AS date)
update cshapes_mw set cowedate = CAST(coweyear||'-'||cowemonth||'-'||coweday AS date)