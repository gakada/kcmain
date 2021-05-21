const test = require('tape')

const main = require('../dist/main')

test('tests', t => {
  const r = new main.ShipUpgradeModelHolder()
  t.equal(r._getRequiredDevkitNum(129, 1, 2000), 0)
  t.equal(r._getRequiredDevkitNum(503, 1, 4700), 10)
  t.equal(r._getRequiredDevkitNum(508, 0, 4500), 10)
  t.equal(r._getRequiredDevkitNum(610), 84)
  t.equal(r._getRequiredBuildKitNum(129), 0)
  t.equal(r._getRequiredBuildKitNum(503), 20)
  t.equal(r._getRequiredBuildKitNum(508), 20)
  t.equal(r._getRequiredBuildKitNum(610), 84)
  t.equal(main.PlaneConst.getEnemyPlaneGraphicsType(610), 18)
  t.equal(main.ITEMUP_REPLACE[610], 610)
  t.equal(main.SuffixUtil.create(156, 'ship_card'), '6982')
  t.end()
})
