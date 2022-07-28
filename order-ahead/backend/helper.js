class dataprocessing {
 
    constructor (filename){
        this.items = require("./" + filename);
    }
    getSelectedTotal(selectedItems){
        var total = selectedItems.reduce((acc,item) => acc + this.findselected(item),0);
        return total * 0.06;
    }

    findselected(selectedItem){
        var found = this.items.itemsList.find(item => item.name === selectedItem);
        if (found !== undefined){
            return found.cost;
        }else {
            return 0;
        }
    }
    returnDictionary(){
        return this.items.itemsList;
    }
    displayAllItems(){
    var html = "<table border = '1|1'>";
    html += "<th>" + "Item" +  "</th>"
    html += "<th>" + "Cost" +  "</th>"
    this.items.itemsList.forEach(element => {
        html += "<tr>";
        html += "<td>"+ element.name+"</td>";
        html += "<td>" + element.cost.toFixed(2) + "</td>"
        html += "</tr>";
    });
    html += "</table>";
    return html;
   }
   allItems(){
    var html = "";
    this.items.itemsList.forEach(element => {
        html += "<option>" + element.name + "</option>";
    });
    return html;
   }

   displaySelected(itemsSelected){
    var html = "<table border = '1|1'>";
    html += "<th>" + "Item" +  "</th>"
    html += "<th>" + "Cost" +  "</th>"
    itemsSelected.forEach(element => {
        html += "<tr>";
        html += "<td>"+ element+"</td>";
        html += "<td>" + this.items.itemsList.find(item => item.name === element).cost.toFixed(2)+ "</td>"
        html += "</tr>";
    });
    html += "<tr>";
    html += "<td>" + "Total cost:"+"</td>"
    html += "<td>" + this.getSelectedTotal(itemsSelected)+"</td>"
    html += "</tr>";
    html += "</table>";
    return html;
   }

}
module.exports = dataprocessing;