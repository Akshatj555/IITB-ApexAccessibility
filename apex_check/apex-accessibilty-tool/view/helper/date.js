// This file is part of Apex Accessibility Dashboard.
//
// Apex Accessibility Dashboard is free software: you can redistribute it and/or modify
// it under the terms of the GNU General Public License as published by
// the Free Software Foundation, either version 3 of the License, or
// (at your option) any later version.
//
// Apex Accessibility Dashboard is distributed in the hope that it will be useful,
// but WITHOUT ANY WARRANTY; without even the implied warranty of
// MERCHANTABILITY or FITNESS FOR A PARTICULAR PURPOSE.  See the
// GNU General Public License for more details.
//
// You should have received a copy of the GNU General Public License
// along with Apex Accessibility Dashboard.  If not, see <http://www.gnu.org/licenses/>.
'use strict';

const moment = require('moment');

module.exports = helper;

function helper(hbs) {

	// Format a date with Moment
	hbs.registerHelper('date-format', (context, block) => {
		const format = block.hash.format || 'YYYY-MM-DD HH:mm:ss';
		return moment(context).format(format);
	});

	// Get a relative date
	hbs.registerHelper('date-relative', context => moment(context).fromNow());

	hbs.registerHelper('date-timestamp', context => moment(context).valueOf());

}
