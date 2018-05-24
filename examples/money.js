/**
 * This file is part of the JS Money library
 *
 * Copyright (c) 2014 David Kalosi
 *
 * For the full copyright and license information, please view the LICENSE
 * file that was distributed with this source code.
 */

var Money = require ('js-money');

var currencies = require('./currencies.json')

Money.currencies = currencies

var a = new Money(1000, 'USD')
var b = new Money(2000, 'RUB')
