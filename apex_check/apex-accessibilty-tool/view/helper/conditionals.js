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

module.exports = helper;

function helper(hbs) {
	// Compare if one value is greater than another
	hbs.registerHelper('ifgtr', function(conditional, condition, options) {
		if (conditional > condition) {
			// eslint-disable-next-line no-invalid-this
			return options.fn(this);
		}
	});
}
