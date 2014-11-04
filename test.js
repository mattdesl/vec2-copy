var test = require('tape').test
var copy = require('./')


test('should copy', function(t) {
    var tmp = [0, 0]
    var other = [25, 25]


    t.deepEqual(copy([], other), [25, 25], 'copies value')

    copy(tmp, [51, 12])
    t.deepEqual(tmp, [51, 12], 'copies value')
    t.equal(copy(tmp, other), tmp, 'returns first out param')

    t.end()
})