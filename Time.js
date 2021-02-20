public class Time　{
    public static void main(String[] args) {
    //日時を取得する
    Date d = new Date();
     //書式の作成
  SimpleDateFormat sdf = new SimpleDateFormat("GGGGy年 M月 d日 (E) a h時 m分 s秒");

  //指定書式に変換して表示
  System.out.println(sdf.format(d));
    }
}
