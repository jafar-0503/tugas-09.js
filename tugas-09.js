function object(){

  var barang = {
    Nama_Barang : "TV LED",
    Size: "34 Inch",
    Warna: "Hitam",
    Harga: 2500000,
  }
  for (var x in barang){
    console.log(barang[x]);
  }
}
object();
