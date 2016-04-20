/* jshint undef: true */
/* globals document, google, require, module */
'use strict';

/**
 * Dashboard module
 *
 * @class     Dashboard
 * @module    lava/Dashboard
 * @author    Kevin Hill <kevinkhill@gmail.com>
 * @copyright (c) 2015, KHill Designs
 * @license   MIT
 */
module.exports = Dashboard;

function Dashboard (label) {
    this.label     = label;
    this.element   = null;
    this.data      = null;
    this.bindings  = [];
    this.dashboard = null;
    this.draw      = function(){};
    this.init      = function(){};
    this.configure = function(){};
    this.render    = function(){};
    this._errors   = require('./Errors.js');
}

/**
 * Sets the data for the chart by creating a new DataTable
 *
 * @external "google.visualization.DataTable"
 * @see   {@link https://developers.google.com/chart/interactive/docs/reference#DataTable|DataTable Class}
 * @param {Object}        data      Json representation of a DataTable
 * @param {Array.<Array>} data.cols Array of column definitions
 * @param {Array.<Array>} data.rows Array of row definitions
 */
Dashboard.prototype.setData = function (data) {
    this.data = new google.visualization.DataTable(data);
};

/**
 * Set the ID of the output element for the Dashboard.
 *
 * @public
 * @param  {string} elemId
 * @throws ElementIdNotFound
 */
Dashboard.prototype.setElement = function (elemId) {
    this.element = document.getElementById(elemId);

    if (! this.element) {
        throw new this._errors.ElementIdNotFound(elemId);
    }
};
