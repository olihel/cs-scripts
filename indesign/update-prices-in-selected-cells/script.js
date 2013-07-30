/*!
 * cs-scripts
 * https://github.com/olihel/cs-scripts
 *
 * Copyright (c) 2013 Oliver Hellebusch
 * Released under MIT license (https://raw.github.com/olihel/cs-scripts/master/LICENSE)
 */

(function () {
  var calculatePrice = function (price) {
    return price * 1.05;
  };

  var formatPrice = function (num) {
    var str = (Math.floor(num * 10) / 10).toFixed(2).toString();
    return str.split('.').join(',');
  };

  var CellData = function (cell) {
    var str = cell.contents.indexOf(',') === -1 ? cell.contents : cell.contents.split(',').join('.'); // assume price is localized for Germany
    var data;

    if (cell.label && (cell.label !== '') && (cell.label.indexOf('{"') !== -1)) {
      data = JSON.parse(cell.label);
    } else {
      data = {
        originalLabel: cell.label && (cell.label !== '') ? cell.label : '',
        price: null,
        isPrice: false
      };
    }

    if (str.length && Number(str)) {
      data.isPrice = true;
      data.price = Number(str);
    }

    console.log(JSON.stringify(data));

    return {
      getPrice: function () {
        return data.price;
      },
      setPrice: function (price) {
        data.price = price;
      },
      updateCell: function () {
        cell.label = JSON.stringify(data);
        if (data.isPrice) {
          cell.contents = formatPrice(data.price);
        }
      }
    };
  };

  if (!app || !app.documents || !app.documents.length) {
    alert('Error, no active document found!');
    return;
  }

  if (app.selection.length === 0) {
    alert('No selection!');
    return;
  }

  for (var selectionIndex = 0; selectionIndex < app.selection.length; selectionIndex++) {
    var selection = app.selection[selectionIndex];
    if (selection.toString() !== '[object InsertionPoint]') {
      var cells = selection.cells;
      for (var cellsIndex = 0; cellsIndex < cells.length; cellsIndex++) {
        var cellData = new CellData(cells[cellsIndex]);
        var price = cellData.getPrice();
        price = calculatePrice(price);
        cellData.setPrice(price);
        cellData.updateCell();
      }
    } else {
      alert('No selected cells!');
      return;
    }
  }
}());
