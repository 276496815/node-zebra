var assert = require('assert');
var zebra = require('./zebra');

var UPC_E = '06717508';
var UPC_A = '049000026566';
var EAN_13 = '7501035010659';

var upce = zebra.parse(UPC_E);
assert.equal(zebra.TYPE_UPCE, upce.type);
assert.equal('06717508', upce.code);
assert.equal('067000001758', upce.toUPCA().code);
assert.equal('0067000001758', upce.toEAN13().code);

var upca = zebra.parse(UPC_A);
assert.equal(zebra.TYPE_UPCA, upca.type);
assert.equal('049000026566', upca.code);
assert.equal('0049000026566', upca.toEAN13().code);

var ean13 = zebra.parse(EAN_13);
assert.equal(zebra.TYPE_EAN13, ean13.type);
assert.equal('7501035010659', ean13.code);
assert.equal(false, ean13.isUPCA());
