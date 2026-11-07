// 카드 데이터 도우미: 각 분야 파일이 window.EXTRA 에 카드를 더해요.
window.EXTRA = window.EXTRA || [];
window.addCards = function (tag, startId, rows, f) {
  var list = rows.map(function (a, i) {
    var o = f(a);
    o.id = startId + i;
    o.tag = tag;
    o.v = true;
    if (o.q === undefined) o.q = "";
    if (o.no === undefined) o.no = "";
    return o;
  });
  window.EXTRA = window.EXTRA.concat(list);
};
