const STORAGE_KEYS = {
  theme: 'almatsurat.theme',
  fontSize: 'almatsurat.fontSize',
  displayMode: 'almatsurat.displayMode',
  counters: 'almatsurat.counters',
  lastRoute: 'almatsurat.lastRoute'
};

// Data bacaan dibuat menyatu di app.js agar aplikasi tidak perlu request file JSON terpisah.
// Cocok untuk GitHub Pages dan tetap bisa dibuka sebagai file statis sederhana.
const WAZIFAH_DATA = [{"urutan":1,"id":"001-taawudz","judul":"Ta'awudz","arab":"أَعُوذُ بِاللَّهِ السَّمِيعِ الْعَلِيمِ مِنَ الشَّيْطَانِ الرَّجِيمِ","latin":"","arti":"Aku berlindung kepada Allah yang Maha Mendengar lagi Maha Mengetahui dari godaan syetan yang terkutuk.","jumlah":1,"kategori":"wazifah-sugro","sumber":"Al-Ma'tsurat Wazifah Sugro","catatan":"Data dirapikan dari teks mentah yang diberikan pengguna; mohon verifikasi ulang sebelum publikasi."},{"urutan":2,"id":"002-al-fatihah-1-7","judul":"Al-Fatihah","arab":"Ayat 1\nبِسۡمِ ٱللَّهِ ٱلرَّحۡمَٰنِ ٱلرَّحِيمِ\n\nAyat 2\nٱلۡحَمۡدُ لِلَّهِ رَبِّ ٱلۡعَٰلَمِينَ\n\nAyat 3\nٱلرَّحۡمَٰنِ ٱلرَّحِيمِ\n\nAyat 4\nمَٰلِكِ يَوۡمِ ٱلدِّينِ\n\nAyat 5\nإِيَّاكَ نَعۡبُدُ وَإِيَّاكَ نَسۡتَعِينُ\n\nAyat 6\nٱهۡدِنَا ٱلصِّرَٰطَ ٱلۡمُسۡتَقِيمَ\n\nAyat 7\nصِرَٰطَ ٱلَّذِينَ أَنۡعَمۡتَ عَلَيۡهِمۡ غَيۡرِ ٱلۡمَغۡضُوبِ عَلَيۡهِمۡ وَلَا ٱلضَّآلِّينَ","latin":"","arti":"Ayat 1: Dengan menyebut nama Allah Yang Maha Pemurah lagi Maha Penyayang\n\nAyat 2: Segala puji bagi Allah, Tuhan semesta alam\n\nAyat 3: Maha Pemurah lagi Maha Penyayang\n\nAyat 4: Yang menguasai hari pembalasan\n\nAyat 5: Hanya kepada Engkaulah kami menyembah dan hanya kepada Engkaulah kami mohon pertolongan\n\nAyat 6: Tunjukilah kami jalan yang lurus\n\nAyat 7: (yaitu) jalan orang-orang yang telah Engkau anugerahkan nikmat kepada mereka, bukan (jalan) mereka yang dimurkai dan bukan (pula jalan) mereka yang sesat","jumlah":1,"kategori":"wazifah-sugro","sumber":"QS. Al-Fatihah: 1-7","rincian":[{"ayat":1,"arab":"بِسۡمِ ٱللَّهِ ٱلرَّحۡمَٰنِ ٱلرَّحِيمِ","arti":"Dengan menyebut nama Allah Yang Maha Pemurah lagi Maha Penyayang"},{"ayat":2,"arab":"ٱلۡحَمۡدُ لِلَّهِ رَبِّ ٱلۡعَٰلَمِينَ","arti":"Segala puji bagi Allah, Tuhan semesta alam"},{"ayat":3,"arab":"ٱلرَّحۡمَٰنِ ٱلرَّحِيمِ","arti":"Maha Pemurah lagi Maha Penyayang"},{"ayat":4,"arab":"مَٰلِكِ يَوۡمِ ٱلدِّينِ","arti":"Yang menguasai hari pembalasan"},{"ayat":5,"arab":"إِيَّاكَ نَعۡبُدُ وَإِيَّاكَ نَسۡتَعِينُ","arti":"Hanya kepada Engkaulah kami menyembah dan hanya kepada Engkaulah kami mohon pertolongan"},{"ayat":6,"arab":"ٱهۡدِنَا ٱلصِّرَٰطَ ٱلۡمُسۡتَقِيمَ","arti":"Tunjukilah kami jalan yang lurus"},{"ayat":7,"arab":"صِرَٰطَ ٱلَّذِينَ أَنۡعَمۡتَ عَلَيۡهِمۡ غَيۡرِ ٱلۡمَغۡضُوبِ عَلَيۡهِمۡ وَلَا ٱلضَّآلِّينَ","arti":"(yaitu) jalan orang-orang yang telah Engkau anugerahkan nikmat kepada mereka, bukan (jalan) mereka yang dimurkai dan bukan (pula jalan) mereka yang sesat"}]},{"urutan":3,"id":"003-al-baqarah-1-5","judul":"Al-Baqarah","arab":"بِسۡمِ ٱللَّهِ ٱلرَّحۡمَٰنِ ٱلرَّحِيمِ\n\nAyat 1\nالٓمٓ\n\nAyat 2\nذَٰلِكَ ٱلۡكِتَٰبُ لَا رَيۡبَۛ فِيهِۛ هُدٗى لِّلۡمُتَّقِينَ\n\nAyat 3\nٱلَّذِينَ يُؤۡمِنُونَ بِٱلۡغَيۡبِ وَيُقِيمُونَ ٱلصَّلَوٰةَ وَمِمَّا رَزَقۡنَٰهُمۡ يُنفِقُونَ\n\nAyat 4\nوَٱلَّذِينَ يُؤۡمِنُونَ بِمَآ أُنزِلَ إِلَيۡكَ وَمَآ أُنزِلَ مِن قَبۡلِكَ وَبِٱلۡأٓخِرَةِ هُمۡ يُوقِنُونَ\n\nAyat 5\nأُوْلَٰٓئِكَ عَلَىٰ هُدٗى مِّن رَّبِّهِمۡۖ وَأُوْلَٰٓئِكَ هُمُ ٱلۡمُفۡلِحُونَ","latin":"","arti":"Ayat 1: Alif Laam Miim\n\nAyat 2: Kitab (Al Qur'an) ini tidak ada keraguan padanya; petunjuk bagi mereka yang bertakwa\n\nAyat 3: (yaitu) mereka yang beriman kepada yang gaib, yang mendirikan shalat dan menafkahkan sebahagian rezki yang Kami anugerahkan kepada mereka\n\nAyat 4: Dan mereka yang beriman kepada Kitab (AlQur'an) yang telah diturunkan kepadamu dan Kitab-kitab yang telah diturunkan sebelummu, serta mereka yakin akan adanya (kehidupan) akhirat\n\nAyat 5: Mereka itulah yang tetap mendapat petunjuk dari Tuhan mereka, dan merekalah orang-orang yang beruntung","jumlah":1,"kategori":"wazifah-sugro","sumber":"QS. Al-Baqarah: 1-5","rincian":[{"ayat":1,"arab":"الٓمٓ","arti":"Alif Laam Miim"},{"ayat":2,"arab":"ذَٰلِكَ ٱلۡكِتَٰبُ لَا رَيۡبَۛ فِيهِۛ هُدٗى لِّلۡمُتَّقِينَ","arti":"Kitab (Al Qur'an) ini tidak ada keraguan padanya; petunjuk bagi mereka yang bertakwa"},{"ayat":3,"arab":"ٱلَّذِينَ يُؤۡمِنُونَ بِٱلۡغَيۡبِ وَيُقِيمُونَ ٱلصَّلَوٰةَ وَمِمَّا رَزَقۡنَٰهُمۡ يُنفِقُونَ","arti":"(yaitu) mereka yang beriman kepada yang gaib, yang mendirikan shalat dan menafkahkan sebahagian rezki yang Kami anugerahkan kepada mereka"},{"ayat":4,"arab":"وَٱلَّذِينَ يُؤۡمِنُونَ بِمَآ أُنزِلَ إِلَيۡكَ وَمَآ أُنزِلَ مِن قَبۡلِكَ وَبِٱلۡأٓخِرَةِ هُمۡ يُوقِنُونَ","arti":"Dan mereka yang beriman kepada Kitab (AlQur'an) yang telah diturunkan kepadamu dan Kitab-kitab yang telah diturunkan sebelummu, serta mereka yakin akan adanya (kehidupan) akhirat"},{"ayat":5,"arab":"أُوْلَٰٓئِكَ عَلَىٰ هُدٗى مِّن رَّبِّهِمۡۖ وَأُوْلَٰٓئِكَ هُمُ ٱلۡمُفۡلِحُونَ","arti":"Mereka itulah yang tetap mendapat petunjuk dari Tuhan mereka, dan merekalah orang-orang yang beruntung"}]},{"urutan":4,"id":"004-al-baqarah-255-255","judul":"Al-Baqarah","arab":"Ayat 255\nٱللَّهُ لَآ إِلَٰهَ إِلَّا هُوَ ٱلۡحَيُّ ٱلۡقَيُّومُۚ لَا تَأۡخُذُهُۥ سِنَةٞ وَلَا نَوۡمٞۚ لَّهُۥ مَا فِي ٱلسَّمَٰوَٰتِ وَمَا فِي ٱلۡأَرۡضِۗ مَن ذَا ٱلَّذِي يَشۡفَعُ عِندَهُۥٓ إِلَّا بِإِذۡنِهِۦۚ يَعۡلَمُ مَا بَيۡنَ أَيۡدِيهِمۡ وَمَا خَلۡفَهُمۡۖ وَلَا يُحِيطُونَ بِشَيۡءٖ مِّنۡ عِلۡمِهِۦٓ إِلَّا بِمَا شَآءَۚ وَسِعَ كُرۡسِيُّهُ ٱلسَّمَٰوَٰتِ وَٱلۡأَرۡضَۖ وَلَايَئُودُهُۥ حِفۡظُهُمَاۚ وَهُوَ ٱلۡعَلِيُّ ٱلۡعَظِيمُ","latin":"","arti":"Ayat 255: Allah, tidak ada Tuhan (yang berhak disembah) melainkan Dia Yang Hidup kekal lagi terus menerus mengurus (makhluk-Nya); tidak mengantuk dan tidak tidur. Kepunyaan-Nya apa yang di langit dan di bumi. Tiada yang dapat memberi syafaat di sisi Allah tanpa izin-Nya. Allah mengetahui apa-apa yang di hadapan mereka dan di belakang mereka, dan mereka tidak mengetahui apa-apa dari ilmu Allah melainkan apa yang dikehendaki-Nya. Kursi Allah meliputi langit dan bumi. Dan Allah tidak merasa berat memelihara keduanya, dan Allah Maha Tinggi lagi Maha Besar","jumlah":1,"kategori":"wazifah-sugro","sumber":"QS. Al-Baqarah: 255","rincian":[{"ayat":255,"arab":"ٱللَّهُ لَآ إِلَٰهَ إِلَّا هُوَ ٱلۡحَيُّ ٱلۡقَيُّومُۚ لَا تَأۡخُذُهُۥ سِنَةٞ وَلَا نَوۡمٞۚ لَّهُۥ مَا فِي ٱلسَّمَٰوَٰتِ وَمَا فِي ٱلۡأَرۡضِۗ مَن ذَا ٱلَّذِي يَشۡفَعُ عِندَهُۥٓ إِلَّا بِإِذۡنِهِۦۚ يَعۡلَمُ مَا بَيۡنَ أَيۡدِيهِمۡ وَمَا خَلۡفَهُمۡۖ وَلَا يُحِيطُونَ بِشَيۡءٖ مِّنۡ عِلۡمِهِۦٓ إِلَّا بِمَا شَآءَۚ وَسِعَ كُرۡسِيُّهُ ٱلسَّمَٰوَٰتِ وَٱلۡأَرۡضَۖ وَلَايَئُودُهُۥ حِفۡظُهُمَاۚ وَهُوَ ٱلۡعَلِيُّ ٱلۡعَظِيمُ","arti":"Allah, tidak ada Tuhan (yang berhak disembah) melainkan Dia Yang Hidup kekal lagi terus menerus mengurus (makhluk-Nya); tidak mengantuk dan tidak tidur. Kepunyaan-Nya apa yang di langit dan di bumi. Tiada yang dapat memberi syafaat di sisi Allah tanpa izin-Nya. Allah mengetahui apa-apa yang di hadapan mereka dan di belakang mereka, dan mereka tidak mengetahui apa-apa dari ilmu Allah melainkan apa yang dikehendaki-Nya. Kursi Allah meliputi langit dan bumi. Dan Allah tidak merasa berat memelihara keduanya, dan Allah Maha Tinggi lagi Maha Besar"}]},{"urutan":5,"id":"005-al-baqarah-256-257","judul":"Al-Baqarah","arab":"Ayat 256\nلَآ إِكۡرَاهَ فِي ٱلدِّينِۖ قَد تَّبَيَّنَ ٱلرُّشۡدُ مِنَ ٱلۡغَيِّۚ فَمَن يَكۡفُرۡ بِٱلطَّٰغُوتِ وَيُؤۡمِنۢ بِٱللَّهِ فَقَدِ ٱسۡتَمۡسَكَ بِٱلۡعُرۡوَةِ ٱلۡوُثۡقَىٰ لَا ٱنفِصَامَ لَهَاۗ وَٱللَّهُ سَمِيعٌ عَلِيمٌ\n\nAyat 257\nٱللَّهُ وَلِيُّ ٱلَّذِينَ ءَامَنُواْ يُخۡرِجُهُم مِّنَ ٱلظُّلُمَٰتِ إِلَى ٱلنُّورِۖ وَٱلَّذِينَ كَفَرُوٓاْ أَوۡلِيَآؤُهُمُ ٱلطَّٰغُوتُ يُخۡرِجُونَهُم مِّنَ ٱلنُّورِ إِلَى ٱلظُّلُمَٰتِۗ أُوْلَٰٓئِكَ أَصۡحَٰبُ ٱلنَّارِۖ هُمۡ فِيهَا خَٰلِدُونَ","latin":"","arti":"Ayat 256: Tidak ada paksaan untuk (memasuki) agama (Islam); sesungguhnya telah jelas jalan yang benar daripada jalan yang sesat. Karena itu barang siapa yang ingkar kepada Thaghut dan beriman kepada Allah, maka sesungguhnya ia telah berpegang kepada buhu tali yang amat kuat yang tidak akan putus. Dan Allah Maha Mendengar lagi Maha Mengetahui.\n\nAyat 257: Allah Pelindung orang-orang yang beriman; Dia mengeluarkan mereka dari kegelapan (kekafiran) kepada cahaya (iman). Dan orang-orang yang kafir, pelindung-pelindungnya ialah setan, yang mengeluarkan mereka dari cahaya kepada kegelapan (kekafiran). Mereka itu adalah penghuni neraka; mereka kekal di dalamnya","jumlah":1,"kategori":"wazifah-sugro","sumber":"QS. Al-Baqarah: 256-257","rincian":[{"ayat":256,"arab":"لَآ إِكۡرَاهَ فِي ٱلدِّينِۖ قَد تَّبَيَّنَ ٱلرُّشۡدُ مِنَ ٱلۡغَيِّۚ فَمَن يَكۡفُرۡ بِٱلطَّٰغُوتِ وَيُؤۡمِنۢ بِٱللَّهِ فَقَدِ ٱسۡتَمۡسَكَ بِٱلۡعُرۡوَةِ ٱلۡوُثۡقَىٰ لَا ٱنفِصَامَ لَهَاۗ وَٱللَّهُ سَمِيعٌ عَلِيمٌ","arti":"Tidak ada paksaan untuk (memasuki) agama (Islam); sesungguhnya telah jelas jalan yang benar daripada jalan yang sesat. Karena itu barang siapa yang ingkar kepada Thaghut dan beriman kepada Allah, maka sesungguhnya ia telah berpegang kepada buhu tali yang amat kuat yang tidak akan putus. Dan Allah Maha Mendengar lagi Maha Mengetahui."},{"ayat":257,"arab":"ٱللَّهُ وَلِيُّ ٱلَّذِينَ ءَامَنُواْ يُخۡرِجُهُم مِّنَ ٱلظُّلُمَٰتِ إِلَى ٱلنُّورِۖ وَٱلَّذِينَ كَفَرُوٓاْ أَوۡلِيَآؤُهُمُ ٱلطَّٰغُوتُ يُخۡرِجُونَهُم مِّنَ ٱلنُّورِ إِلَى ٱلظُّلُمَٰتِۗ أُوْلَٰٓئِكَ أَصۡحَٰبُ ٱلنَّارِۖ هُمۡ فِيهَا خَٰلِدُونَ","arti":"Allah Pelindung orang-orang yang beriman; Dia mengeluarkan mereka dari kegelapan (kekafiran) kepada cahaya (iman). Dan orang-orang yang kafir, pelindung-pelindungnya ialah setan, yang mengeluarkan mereka dari cahaya kepada kegelapan (kekafiran). Mereka itu adalah penghuni neraka; mereka kekal di dalamnya"}]},{"urutan":6,"id":"006-al-baqarah-284-286","judul":"Al-Baqarah","arab":"Ayat 284\nلِّلَّهِ مَا فِي ٱلسَّمَٰوَٰتِ وَمَا فِي ٱلۡأَرۡضِۗ وَإِن تُبۡدُواْ مَا فِيٓ أَنفُسِكُمۡ أَوۡ تُخۡفُوهُ يُحَاسِبۡكُم بِهِ ٱللَّهُۖ فَيَغۡفِرُ لِمَن يَشَآءُ وَيُعَذِّبُ مَن يَشَآءُۗ وَٱللَّهُ عَلَىٰ كُلِّ شَيۡءٖ قَدِيرٌ\n\nAyat 285\nءَامَنَ ٱلرَّسُولُ بِمَآ أُنزِلَ إِلَيۡهِ مِن رَّبِّهِۦ وَٱلۡمُؤۡمِنُونَۚ كُلٌّ ءَامَنَ بِٱللَّهِ وَمَلَٰٓئِكَتِهِۦ وَكُتُبِهِۦ وَرُسُلِهِۦ لَا نُفَرِّقُ بَيۡنَ أَحَدٖ مِّن رُّسُلِهِۦۚ وَقَالُواْ سَمِعۡنَا وَأَطَعۡنَاۖ غُفۡرَانَكَ رَبَّنَا وَإِلَيۡكَ ٱلۡمَصِيرُ\n\nAyat 286\nلَا يُكَلِّفُ ٱللَّهُ نَفۡسًا إِلَّا وُسۡعَهَاۚ لَهَا مَا كَسَبَتۡ وَعَلَيۡهَا مَا ٱكۡتَسَبَتۡۗ رَبَّنَا لَا تُؤَاخِذۡنَآ إِن نَّسِينَآ أَوۡ أَخۡطَأۡنَاۚ رَبَّنَا وَلَا تَحۡمِلۡ عَلَيۡنَآ إِصۡرٗا كَمَا حَمَلۡتَهُۥ عَلَى ٱلَّذِينَ مِن قَبۡلِنَاۚ رَبَّنَا وَلَا تُحَمِّلۡنَا مَا لَا طَاقَةَ لَنَا بِهِۦۖ وَٱعۡفُ عَنَّا وَٱغۡفِرۡ لَنَا وَٱرۡحَمۡنَآۚ أَنتَ مَوۡلَىٰنَا فَٱنصُرۡنَا عَلَى ٱلۡقَوۡمِ ٱلۡكَٰفِرِينَ","latin":"","arti":"Ayat 284: Kepunyaan Allah-lah segala apa yang ada di langit dan apa yang ada di bumi. Dan jika kamu melahirkan apa yang ada di dalam hatimu atau kamu menyembunyikannya, niscaya Allah akan membuat perhitungan dengan kamu tentang perbuatanmu itu. Maka Allah mengampuni siapa yang dikehendaki-Nya dan menyiksa siapa yang dikehendaki-Nya; dan Allah Maha Kuasa atas segala sesuatu\n\nAyat 285: Rasul telah beriman kepada Al Qur'an yang diturunkan kepadanya dari Tuhannya, demikian pula orang-orang yang beriman. Semuanya beriman kepada Allah, malaikat-malaikat-Nya, kitab-kitab-Nya dan rasul-rasul-Nya. (Mereka mengatakan): \"Kami tidak membeda-bedakan antara seseorang pun (dengan yang lain) dari rasul rasul-Nya\", dan mereka mengatakan: \"Kami dengar dan kami taat\". (Mereka berdoa):\"Ampunilah kami ya Tuhan kami dan kepada Engkaulah tempat kembali\"\n\nAyat 286: Allah tidak membebani seseorang melainkan sesuai dengan kesanggupannya. Ia mendapat pahala (dari kebajikan) yang diusahakannya dan ia mendapat siksa (dari kejahatan) yang dikerjakannya. (Mereka berdo`a): \"Ya Tuhan kami, janganlah Engkau hukum kami jika kami lupa atau kami tersalah. Ya Tuhan kami, janganlah Engkau bebankan kepada kami beban yang berat sebagaimana Engkau bebankan kepada orang-orang yang sebelum kami. Ya Tuhan kami, janganlah Engkau pikulkan kepada kami apa yang tak sanggup kami memikulnya. Beri maaflah kami; ampunilah kami; dan rahmatilah kami. Engkaulah Penolong kami, maka tolonglah kami terhadap kaum yang kafir\"","jumlah":1,"kategori":"wazifah-sugro","sumber":"QS. Al-Baqarah: 284-286","rincian":[{"ayat":284,"arab":"لِّلَّهِ مَا فِي ٱلسَّمَٰوَٰتِ وَمَا فِي ٱلۡأَرۡضِۗ وَإِن تُبۡدُواْ مَا فِيٓ أَنفُسِكُمۡ أَوۡ تُخۡفُوهُ يُحَاسِبۡكُم بِهِ ٱللَّهُۖ فَيَغۡفِرُ لِمَن يَشَآءُ وَيُعَذِّبُ مَن يَشَآءُۗ وَٱللَّهُ عَلَىٰ كُلِّ شَيۡءٖ قَدِيرٌ","arti":"Kepunyaan Allah-lah segala apa yang ada di langit dan apa yang ada di bumi. Dan jika kamu melahirkan apa yang ada di dalam hatimu atau kamu menyembunyikannya, niscaya Allah akan membuat perhitungan dengan kamu tentang perbuatanmu itu. Maka Allah mengampuni siapa yang dikehendaki-Nya dan menyiksa siapa yang dikehendaki-Nya; dan Allah Maha Kuasa atas segala sesuatu"},{"ayat":285,"arab":"ءَامَنَ ٱلرَّسُولُ بِمَآ أُنزِلَ إِلَيۡهِ مِن رَّبِّهِۦ وَٱلۡمُؤۡمِنُونَۚ كُلٌّ ءَامَنَ بِٱللَّهِ وَمَلَٰٓئِكَتِهِۦ وَكُتُبِهِۦ وَرُسُلِهِۦ لَا نُفَرِّقُ بَيۡنَ أَحَدٖ مِّن رُّسُلِهِۦۚ وَقَالُواْ سَمِعۡنَا وَأَطَعۡنَاۖ غُفۡرَانَكَ رَبَّنَا وَإِلَيۡكَ ٱلۡمَصِيرُ","arti":"Rasul telah beriman kepada Al Qur'an yang diturunkan kepadanya dari Tuhannya, demikian pula orang-orang yang beriman. Semuanya beriman kepada Allah, malaikat-malaikat-Nya, kitab-kitab-Nya dan rasul-rasul-Nya. (Mereka mengatakan): \"Kami tidak membeda-bedakan antara seseorang pun (dengan yang lain) dari rasul rasul-Nya\", dan mereka mengatakan: \"Kami dengar dan kami taat\". (Mereka berdoa):\"Ampunilah kami ya Tuhan kami dan kepada Engkaulah tempat kembali\""},{"ayat":286,"arab":"لَا يُكَلِّفُ ٱللَّهُ نَفۡسًا إِلَّا وُسۡعَهَاۚ لَهَا مَا كَسَبَتۡ وَعَلَيۡهَا مَا ٱكۡتَسَبَتۡۗ رَبَّنَا لَا تُؤَاخِذۡنَآ إِن نَّسِينَآ أَوۡ أَخۡطَأۡنَاۚ رَبَّنَا وَلَا تَحۡمِلۡ عَلَيۡنَآ إِصۡرٗا كَمَا حَمَلۡتَهُۥ عَلَى ٱلَّذِينَ مِن قَبۡلِنَاۚ رَبَّنَا وَلَا تُحَمِّلۡنَا مَا لَا طَاقَةَ لَنَا بِهِۦۖ وَٱعۡفُ عَنَّا وَٱغۡفِرۡ لَنَا وَٱرۡحَمۡنَآۚ أَنتَ مَوۡلَىٰنَا فَٱنصُرۡنَا عَلَى ٱلۡقَوۡمِ ٱلۡكَٰفِرِينَ","arti":"Allah tidak membebani seseorang melainkan sesuai dengan kesanggupannya. Ia mendapat pahala (dari kebajikan) yang diusahakannya dan ia mendapat siksa (dari kejahatan) yang dikerjakannya. (Mereka berdo`a): \"Ya Tuhan kami, janganlah Engkau hukum kami jika kami lupa atau kami tersalah. Ya Tuhan kami, janganlah Engkau bebankan kepada kami beban yang berat sebagaimana Engkau bebankan kepada orang-orang yang sebelum kami. Ya Tuhan kami, janganlah Engkau pikulkan kepada kami apa yang tak sanggup kami memikulnya. Beri maaflah kami; ampunilah kami; dan rahmatilah kami. Engkaulah Penolong kami, maka tolonglah kami terhadap kaum yang kafir\""}]},{"urutan":7,"id":"007-al-ikhlas-1-4","judul":"Al-Ikhlas","arab":"بِسۡمِ ٱللَّهِ ٱلرَّحۡمَٰنِ ٱلرَّحِيمِ\n\nAyat 1\nقُلۡ هُوَ ٱللَّهُ أَحَدٌ\n\nAyat 2\nٱللَّهُ ٱلصَّمَدُ\n\nAyat 3\nلَمۡ يَلِدۡ وَلَمۡ يُولَدۡ\n\nAyat 4\nوَلَمۡ يَكُن لَّهُۥ كُفُوًا أَحَدُۢ","latin":"","arti":"Ayat 1: Katakanlah: \"Dialah Allah, Yang Maha Esa\n\nAyat 2: Allah adalah Tuhan yang bergantung kepada-Nya segala sesuatu\n\nAyat 3: Dia tiada beranak dan tidak pula diperanakkan\n\nAyat 4: Dan tidak ada seorangpun yang setara dengan Dia","jumlah":3,"kategori":"wazifah-sugro","sumber":"QS. Al-Ikhlas: 1-4","rincian":[{"ayat":1,"arab":"قُلۡ هُوَ ٱللَّهُ أَحَدٌ","arti":"Katakanlah: \"Dialah Allah, Yang Maha Esa"},{"ayat":2,"arab":"ٱللَّهُ ٱلصَّمَدُ","arti":"Allah adalah Tuhan yang bergantung kepada-Nya segala sesuatu"},{"ayat":3,"arab":"لَمۡ يَلِدۡ وَلَمۡ يُولَدۡ","arti":"Dia tiada beranak dan tidak pula diperanakkan"},{"ayat":4,"arab":"وَلَمۡ يَكُن لَّهُۥ كُفُوًا أَحَدُۢ","arti":"Dan tidak ada seorangpun yang setara dengan Dia"}]},{"urutan":8,"id":"008-al-falaq-1-5","judul":"Al-Falaq","arab":"بِسۡمِ ٱللَّهِ ٱلرَّحۡمَٰنِ ٱلرَّحِيمِ\n\nAyat 1\nقُلۡ أَعُوذُ بِرَبِّ ٱلۡفَلَقِ\n\nAyat 2\nمِن شَرِّ مَا خَلَقَ\n\nAyat 3\nوَمِن شَرِّ غَاسِقٍ إِذَا وَقَبَ\n\nAyat 4\nوَمِن شَرِّ ٱلنَّفَّٰثَٰتِ فِي ٱلۡعُقَدِ\n\nAyat 5\nوَمِن شَرِّ حَاسِدٍ إِذَا حَسَدَ","latin":"","arti":"Ayat 1: 1. Katakanlah: \"Aku berlindung kepada Tuhan Yang Menguasai subuh,\n\nAyat 2: Dari kejahatan makhluk-Nya\n\nAyat 3: Dan dari kejahatan malam apabila telah gelap gulita\n\nAyat 4: Dan dari kejahatan wanita-wanita tukang sihir yang menghembus pada buhul-buhul\n\nAyat 5: Dan dari kejahatan pendengki bila ia dengki","jumlah":3,"kategori":"wazifah-sugro","sumber":"QS. Al-Falaq: 1-5","rincian":[{"ayat":1,"arab":"قُلۡ أَعُوذُ بِرَبِّ ٱلۡفَلَقِ","arti":"1. Katakanlah: \"Aku berlindung kepada Tuhan Yang Menguasai subuh,"},{"ayat":2,"arab":"مِن شَرِّ مَا خَلَقَ","arti":"Dari kejahatan makhluk-Nya"},{"ayat":3,"arab":"وَمِن شَرِّ غَاسِقٍ إِذَا وَقَبَ","arti":"Dan dari kejahatan malam apabila telah gelap gulita"},{"ayat":4,"arab":"وَمِن شَرِّ ٱلنَّفَّٰثَٰتِ فِي ٱلۡعُقَدِ","arti":"Dan dari kejahatan wanita-wanita tukang sihir yang menghembus pada buhul-buhul"},{"ayat":5,"arab":"وَمِن شَرِّ حَاسِدٍ إِذَا حَسَدَ","arti":"Dan dari kejahatan pendengki bila ia dengki"}]},{"urutan":9,"id":"009-an-naas-1-6","judul":"An-Naas","arab":"بِسۡمِ ٱللَّهِ ٱلرَّحۡمَٰنِ ٱلرَّحِيمِ\n\nAyat 1\nقُلۡ أَعُوذُ بِرَبِّ ٱلنَّاسِ\n\nAyat 2\nمَلِكِ ٱلنَّاسِ\n\nAyat 3\nإِلَٰهِ ٱلنَّاسِ\n\nAyat 4\nمِن شَرِّ ٱلۡوَسۡوَاسِ ٱلۡخَنَّاسِ\n\nAyat 5\nٱلَّذِي يُوَسۡوِسُ فِي صُدُورِ ٱلنَّاسِ\n\nAyat 6\nمِنَ ٱلۡجِنَّةِ وَٱلنَّاسِ","latin":"","arti":"Ayat 1: Katakanlah: Aku berlindung kepada Tuhan(yang memelihara dan menguasai) manusia\n\nAyat 2: Raja manusia\n\nAyat 3: Sembahan manusia\n\nAyat 4: Dari kejahatan (bisikan) setan yang biasa bersembunyi\n\nAyat 5: Yang membisikkan (kejahatan) ke dalam dada manusia\n\nAyat 6: Dari (golongan) jin dan manusia","jumlah":3,"kategori":"wazifah-sugro","sumber":"QS. An-Naas: 1-6","rincian":[{"ayat":1,"arab":"قُلۡ أَعُوذُ بِرَبِّ ٱلنَّاسِ","arti":"Katakanlah: Aku berlindung kepada Tuhan(yang memelihara dan menguasai) manusia"},{"ayat":2,"arab":"مَلِكِ ٱلنَّاسِ","arti":"Raja manusia"},{"ayat":3,"arab":"إِلَٰهِ ٱلنَّاسِ","arti":"Sembahan manusia"},{"ayat":4,"arab":"مِن شَرِّ ٱلۡوَسۡوَاسِ ٱلۡخَنَّاسِ","arti":"Dari kejahatan (bisikan) setan yang biasa bersembunyi"},{"ayat":5,"arab":"ٱلَّذِي يُوَسۡوِسُ فِي صُدُورِ ٱلنَّاسِ","arti":"Yang membisikkan (kejahatan) ke dalam dada manusia"},{"ayat":6,"arab":"مِنَ ٱلۡجِنَّةِ وَٱلنَّاسِ","arti":"Dari (golongan) jin dan manusia"}]},{"urutan":10,"id":"010-doa-al-matsurat","judul":"Do'a Al-Matsurat","arab":"أَصْبَحْنَا وَأَصْبَحَ (أَمْسَيْنَا وَأَمْسَى) الْمُلْكُ لِلّهَِ وَالْحَمْدُ لِلّهَِ لاَ شَرِيكَ لَهُ، لاَ إِلهَ إِلَّا هُوَ وَإِلَيْهِ النُّشُوْرُ (الْمَصِيْرُ)","latin":"","arti":"Kami berpagi hari (bersore hari) dan berpagi hari (bersore hari) pula kerjaan milik Allah. Segala puji bagi Allah, tiada sekutu bagi-Nya, tiada Tuhan melainkan Dia dan kepada-Nya tempat kembali.","jumlah":3,"kategori":"wazifah-sugro","sumber":"Al-Ma'tsurat Wazifah Sugro"},{"urutan":11,"id":"011-doa-al-matsurat","judul":"Do'a Al-Matsurat","arab":"أَصْبَحْنَا (أَمْسَيْنَا) عَلَى فِطْرَةِ اْلإِسْلاَمِ وَعَلَى كَلِمَةِ اْلإِخْلاَصِ وَعَلَى دِيْنِ نَبِيِّنَا مُحَمَّدٍ صَلَّى اللَّهُ عَلَيْهِ وَسَلَّمَ وَعَلَى مِلَّةِ أَبِيْنَا إِبْرَاهِيْمَ حَنِيْفًا مُسْلِمًا وَمَا كَانَ مِنَ الْمُشْرِكِيْنَ","latin":"","arti":"Di waktu pagi (sore) kami memegang agama Islam, kalimat ikhlas, agama Nabi kita Muhammad shallallahu ‘alaihi wa sallam, dan agama ayah kami Ibrahim, yang berdiri di atas jalan yang lurus, muslim dan tidak tergolong orang-orang musyrik.","jumlah":3,"kategori":"wazifah-sugro","sumber":"Al-Ma'tsurat Wazifah Sugro"},{"urutan":12,"id":"012-doa-al-matsurat","judul":"Do'a Al-Matsurat","arab":"اللَّهُمَّ إِنِّي أَصْبَحْتُ (أَمْسَيتُ) مِنْكَ فِي نِعْمَةٍ وَعَافِيَةٍ وَسِتْر فَأَتِمَّ عَلَيَّ نِعْمَتَكَ وَعَافِيَتَكَ وَسِتْرَكَ فِي الدُّنْيَا وَالآخِرَة","latin":"","arti":"Ya Allah, sesungguhnya aku berpagi hari (bersore hari) dari-Mu dalam kenikmatan, kesehatan dan perlindungan. Maka sempurnakannlah untukku kenikmatan, kesehatan dan perlindungan-Mu itu di dunia dan akhirat.","jumlah":3,"kategori":"wazifah-sugro","sumber":"Al-Ma'tsurat Wazifah Sugro"},{"urutan":13,"id":"013-doa-al-matsurat","judul":"Do'a Al-Matsurat","arab":"اللَّهُمَّ مَا أَصْبَحَ (أَمْسَ) بِيْ مِنْ نِعْمَةٍ أَوْ بِأَحَدٍ مِنْ خَلْقِكَ فَمِنْكَ وَحْدَكَ لاَ شَرِيْكَ لَكَ فَلَكَ الْحَمْدُ وَلَكَ الشُّكْرُ","latin":"","arti":"Ya Allah, kenikmatan yang aku atau salah seorang dari makhluk-Mu berpagi hari (bersore hari) dengannya adalah dari-Mu semata; tiada sekutu bagi-Mu. Maka bagi-Mu segala puji dan rasa syukur.","jumlah":3,"kategori":"wazifah-sugro","sumber":"Al-Ma'tsurat Wazifah Sugro"},{"urutan":14,"id":"014-doa-al-matsurat","judul":"Do'a Al-Matsurat","arab":"يَا رَبِّي لَكَ الْحَمْدُ كَمَا يَنْبَغِي لِجَلَالِ وَجْهِكَ وَلِعَظِيمِ سُلْطَانِكَ","latin":"","arti":"Ya Tuhanku, Segala puji bagiMu sebagaimana seyogyanya kemuliaan wajahMu dan keagungan kekuasaanMu.","jumlah":3,"kategori":"wazifah-sugro","sumber":"Al-Ma'tsurat Wazifah Sugro"},{"urutan":15,"id":"015-doa-al-matsurat","judul":"Do'a Al-Matsurat","arab":"رَضِيتُ بِاللَّهِ رَبًّا وَبِالْإِسْلَامِ دِينًا وَبِمُحَمَّدٍ نَبِيًّا وَرَسُولًا","latin":"","arti":"Aku ridha Allah sebagai Rabb, Islam sebagai agama, dan Muhammad sebagai Rasul.","jumlah":3,"kategori":"wazifah-sugro","sumber":"Al-Ma'tsurat Wazifah Sugro"},{"urutan":16,"id":"016-doa-al-matsurat","judul":"Do'a Al-Matsurat","arab":"سُبْحَانَ اللَّهِ وَبِحَمْدِهِ عَدَدَ خَلْقِهِ وَرِضَا نَفْسِهِ وَزِنَةَ عَرْشِهِ وَمِدَادَ كَلِمَاتِهِ","latin":"","arti":"Maha Suci Allah dan Segala Puji bagiNya, sebanyak bilangan makhlukNya, seridha diriNya, setimbangan ‘arsy-Nya, dan sebanyak tinta dari kata-kataNya.","jumlah":3,"kategori":"wazifah-sugro","sumber":"Al-Ma'tsurat Wazifah Sugro"},{"urutan":17,"id":"017-doa-al-matsurat","judul":"Do'a Al-Matsurat","arab":"بِسْمِ اللَّهِ الَّذِي لَا يَضُرُّ مَعَ اسْمِهِ شَيْءٌ فِي الْأَرْضِ وَلَا فِي السَّمَاءِ وَهُوَ السَّمِيعُ الْعَلِيمُ","latin":"","arti":"Dengan nama Allah Yang bersama NamaNya sesuatu apa pun tidak akan celaka baik di bumi dan di langit. Dialah Maha Medengar lagi maha Mengetahui.","jumlah":3,"kategori":"wazifah-sugro","sumber":"Al-Ma'tsurat Wazifah Sugro"},{"urutan":18,"id":"018-doa-al-matsurat","judul":"Do'a Al-Matsurat","arab":"اللَّهُمَّ إِنَّا نَعُوذُ بِكَ مِنْ أَنْ نُشْرِكَ بِكَ شَيْئًا نَعْلَمُهُ وَنَسْتَغْفِرُكَ لِمَا لَا نَعْلَمُه","latin":"","arti":"Ya Allah sesungguhnya kami berlindung kepadaMu dari menyekutukanMu dengan sesuatu yang kami ketahui, dan kami memohon ampunanMu dari apa-apa yang tidak kami ketahui.","jumlah":3,"kategori":"wazifah-sugro","sumber":"Al-Ma'tsurat Wazifah Sugro"},{"urutan":19,"id":"019-doa-al-matsurat","judul":"Do'a Al-Matsurat","arab":"أَعُوذُ بِكَلِمَاتِ اللَّهِ التَّامَّاتِ مِنْ شَرِّ مَا خَلَقَ","latin":"","arti":"Aku berlindung dengan kalimat Allah yang sempurna dari keburukan apa-apa yang Dia ciptakan.","jumlah":3,"kategori":"wazifah-sugro","sumber":"Al-Ma'tsurat Wazifah Sugro"},{"urutan":20,"id":"020-doa-al-matsurat","judul":"Do'a Al-Matsurat","arab":"اَللَّهُمَّ إِنِّي أَعُوْذُ بِكَ مِنَ الهَمِّ وَالْحَزَنِ وَأَعُوْذُ بِكَ مِنَ الْعَجْزِ وَالْكَسَلِ وَأَعُوْذُ بِكَ مِنَ الْجُبْنِ وَالبُخْلِ وَأَعُوْذُ بِكَ مِنْ غَلَبَةِ الدَّيْنِ وَقَهْرِ الرِّجَالِ","latin":"","arti":"Ya Allah, aku berlindung kepada-Mu dari rasa gelisah dan sedih, dari kelemahan dan kemalasan, dari sifat pengecut dan bakhil, dan dari lilitan hutang dan kesewenang-wenangan orang.","jumlah":3,"kategori":"wazifah-sugro","sumber":"Al-Ma'tsurat Wazifah Sugro"},{"urutan":21,"id":"021-doa-al-matsurat","judul":"Do'a Al-Matsurat","arab":"اَللَّهُمَّ عَافِنِي فِي بَدَنِي اَللَّهُمَّ عَافِنِي فِي سَمْعِي اَللَّهُمَّ عَافِنِي فِي بَصَرِي","latin":"","arti":"Ya Allah berikanlah kesehatan bagi badanku, bagi pendengaranku, bagi penglihatanku.","jumlah":3,"kategori":"wazifah-sugro","sumber":"Al-Ma'tsurat Wazifah Sugro"},{"urutan":22,"id":"022-doa-al-matsurat","judul":"Do'a Al-Matsurat","arab":"اَللَّهُمَّ إِنِّي أَعُوْذُ بِكَ مِنَ الْكُفْرِ وَالْفَقْرِوَأَعُوْذُ بِكَ مِنْ عَذَابِ الْقَبْرِلاَ إِلهَ إِلاَّ أَنْتَ","latin":"","arti":"Ya Allah sungguh aku berlindung kepadaMu dari kekufuran dan kefaqiran, Ya Allah sungguh aku berlindung kepadaMu dari azab kubur, tidak ada Ilah kecuali Engkau.","jumlah":3,"kategori":"wazifah-sugro","sumber":"Al-Ma'tsurat Wazifah Sugro"},{"urutan":23,"id":"023-doa-al-matsurat","judul":"Do'a Al-Matsurat","arab":"اَللّهُمَّ أَنْتَ رَبِّي لَا إلهَ إِلاَّ أَنْتَ خَلَقْتَنِي وَأَنَا عَبْدُكَ وَأَنَا عَلَى عَهْدِكَ وَوَعْدِكَ مَا اسْتَطَعْتُ أَعُوْذُ بِكَ مِنْ شَرِّ مَا صَنَعْتُ أَبُوْءُ لَكَ بِنِعْمَتِكَ عَلَيَّ وَأَبُوْءُ بِذَنْبِي فَاغْفِرْ لِي فَإِنَّهُ لاَ يَغْفِرُ الذُّنُوْبَ إِلاَّ أَنْتَ","latin":"","arti":"Ya Allah, Engkau Tuhanku, tiada Tuhan kecuali Engkau. Engkau ciptakan aku dan aku adalah hamba-Mu. Aku berada di atas janjiMu, semampuku. Aku berlindung kepadaMu dari keburukan perbuatanku. Aku mengakui banyaknya nikmat (yang Engkau anugerahkan) kepadaku dan aku mengakui dosa-dosaku, maka ampunilah aku. Karena sesungguhnya tiada yang mengampuni dosa-dosa melainkan Engkau","jumlah":3,"kategori":"wazifah-sugro","sumber":"Al-Ma'tsurat Wazifah Sugro"},{"urutan":24,"id":"024-doa-al-matsurat","judul":"Do'a Al-Matsurat","arab":"أَسْتَغْفِرُ اللَّهَ الْعَظِيمَ الَّذِي لَا إلهَ إِلَّا هُوَ الْحَيَّ الْقَيُّومَ وَأَتُوبُ إِلَيْهِ","latin":"","arti":"Aku memohon ampunan Allah Yang Tiada Tuhan melainkan Dia, Yang Maha Hidup dan Maha Mengurus (makhluk-Nya).","jumlah":3,"kategori":"wazifah-sugro","sumber":"Al-Ma'tsurat Wazifah Sugro"},{"urutan":25,"id":"025-doa-al-matsurat","judul":"Do'a Al-Matsurat","arab":"اَللّهُمَّ صَلِّ عَلَى سَيِّدِنَا مُحَمَّدٍ وَعَلَى آلِ سَيِّدِنَا مُحَمَّدٍ كَمَا صَلَّــيْتَ عَـلَى سَيِّدِنَا إِبْرَاهِيْمَ وَعَلَى آلِ سَيِّدِنَا إِبْـرَاهِيْمَ وبَارِكْ عَـلَى سَيِّدِنَا مُحَمَّدٍ وَعَلَى آلِ سَيِّدِنَا مُحَمَّدٍ كَمَا بَارَكْتَ عَـلَى سَيِّدِنَا إِبْرَاهِيْمَ وَعَــلَى آلِ سَيـِّدِنَا إِبْـرَاهِيْمَ فِي الْعَالَمِيْنَ إِنَّكَ حَمِيْدٌ مَجِيْدٌ","latin":"","arti":"Ya Allah berikanlah shalawat kepada Nabi Muhammad dan keluarga Nabi Muhammad, sebagaimana telah Engkau berikan kepada Nabi Ibrahim dan keluarga Nabi Ibrahim. Berikanlah barakah kepada Nabi Muhammad dan keluarga Nabi Muhammad, sebagaimana telah Engkau berikan kepada Nabi Ibrahim dan keluarga Nabi Ibrahim. Di alam Engkaulah Yang Maha Terpuji lagi Maha Mulia.","jumlah":10,"kategori":"wazifah-sugro","sumber":"Al-Ma'tsurat Wazifah Sugro"},{"urutan":26,"id":"026-doa-al-matsurat","judul":"Do'a Al-Matsurat","arab":"سُبْحَانَ اللَّهِ وَالْحَمْدُ لِلَّهِ وَلَا إِلَهَ إِلَّا اللَّهُ وَاللَّهُ أَكْبَرُ","latin":"","arti":"Maha Suci Allah, segala puji bagi Allah, tiada Tuhan melainkan Allah dan Allah Maha Besar.","jumlah":100,"kategori":"wazifah-sugro","sumber":"Al-Ma'tsurat Wazifah Sugro"},{"urutan":27,"id":"027-doa-al-matsurat","judul":"Do'a Al-Matsurat","arab":"لاَ إلهَ إِلَّا اللَّهُ وَحْدَهُ لَا شَرِيْكَ لَهُ ، لَهُ الْمُلْكُ وَلَهُ الْحَمْدُ وَهُوَ عَلَى كُلِّ شَيْءٍ قَدِيْرٌ","latin":"","arti":"Tiada Tuhan melainkan Allah semata, yang tiada sekutu bagi-Nya, bagi-Nya kerajaan dan bagi-Nya segala puji, dan Dia berkuasa ata segala sesuatu.","jumlah":10,"kategori":"wazifah-sugro","sumber":"Al-Ma'tsurat Wazifah Sugro"},{"urutan":28,"id":"028-doa-al-matsurat","judul":"Do'a Al-Matsurat","arab":"سُبْحَانَكَ اللَّهُمَّ وَبِحَمْدِكَ أَشْهَدُ أَنْ لَّا إلهَ إِلَّا أَنْتَ أَسْتَغْفِرُكَ وَأَتُوْبُ إِلَيْكَ","latin":"","arti":"Maha suci Engkau ya Allah, dan segala puji bagi-Mu. Aku bersaksi bahwa tiada Tuhan melainkan Engkau, aku memohon ampunan dan bertaubat kepada-Mu","jumlah":3,"kategori":"wazifah-sugro","sumber":"Al-Ma'tsurat Wazifah Sugro"},{"urutan":29,"id":"029-doa-al-matsurat","judul":"Do'a Al-Matsurat","arab":"اَللَّهُمَّ صَلِّ عَلَى سَيِّدِنَا مُحَمَّدٍ عَبْدِكَ وَرَسُوْلِكَ النَّبِيِّ الأُمِّيِّ وَعَلَى آلِهِ وَصَحْبِهِ وَسَلِّمْ تَسْلِيْمًا عَدَدَ مَا أَحَاطَ بِهِ عِلْمُكَ وَخَطَّ بِهِ قَلَمُكَ وَأَحْصَاهُ كِتَابُكَ، وَارْضَ اللَّهُمَّ عَنْ سَادَاتِنَا أَبِيْ بَكْرٍ وَعُمَرَ وَعُثْمَانَ وَعَلِيْ، وَعَنِ الصَّحَابَةِ أَجْمَعِيْنَ، وَعَنِ التَّابِعِيْنَ وَتَابِعِيْهِمْ بِإِحْسَانٍ إِلَى يَوْمِ الدِّيْن سُبْحَانَ رَبِّك رَبِّ العِزَّةِ عَمَّا يَصِفُوْنَ، وَسَلَامٌ عَلَى المُرْسَلِيْنَ، وَالحَمْدُ لِلَّهِ رَبِّ العَالَمِيْنَ","latin":"","arti":"Ya Allah berikanlah shalawat kepada Nabi Muhammad; hamba-Mu, nabi-Mu, dan Rasul-Mu; Nabi yang ummi. Juga kepada keluarga dan para sahabatnya serta berilah keselamatan sebanyak yang terjangkau oleh ilmu-Mu yang tergores oleh pena-Mu, dan yang terangkum oleh kitab-Mu. Ridhailah ya Allah para pemimpin kami, Abu Bakar, Umar, Utsman, dan Ali, semua sahabat, semua tabi’in dan orang-orang yang mengikuti mereka sampai hari pembalasan. Maha suci Tuhanmu; Tuhan kemuliaan, dari apa-apa yang mereka sifatkan. Keselamatan semoga tercurah kepada para utusan dan segala puji bagi Allah, Tuhan semesta alam.","jumlah":3,"kategori":"wazifah-sugro","sumber":"Al-Ma'tsurat Wazifah Sugro"},{"urutan":30,"id":"030-ali-imran-26-27","judul":"Ali Imran","arab":"Ayat 26\nقُلِ ٱللَّهُمَّ مَٰلِكَ ٱلۡمُلۡكِ تُؤۡتِي ٱلۡمُلۡكَ مَن تَشَآءُ وَتَنزِعُ ٱلۡمُلۡكَ مِمَّن تَشَآءُ وَتُعِزُّ مَن تَشَآءُ وَتُذِلُّ مَن تَشَآءُۖ بِيَدِكَ ٱلۡخَيۡرُۖ إِنَّكَ عَلَىٰ كُلِّ شَيۡءٖ قَدِيرٞ\n\nAyat 27\nتُولِجُ ٱلَّيۡلَ فِي ٱلنَّهَارِ وَتُولِجُ ٱلنَّهَارَ فِي ٱلَّيۡلِۖ وَتُخۡرِجُ ٱلۡحَيَّ مِنَ ٱلۡمَيِّتِ وَتُخۡرِجُ ٱلۡمَيِّتَ مِنَ ٱلۡحَيِّۖ وَتَرۡزُقُ مَن تَشَآءُ بِغَيۡرِ حِسَابٖ","latin":"","arti":"Ayat 26: Katakanlah: \"Wahai Tuhan Yang mempunyai kerajaan, Engkau berikan kerajaan kepada orang yang Engkau kehendaki dan Engkau cabut kerajaan dari orang yang Engkau kehendaki. Engkau muliakan orang yang Engkau kehendaki dan Engkau hinakan orang yang Engkau kehendaki. Di tangan Engkaulah segala kebajikan.Sesungguhnya Engkau Maha Kuasa atas segala sesuatu.\n\nAyat 27: Engkau masukkan malam ke dalam siang dan Engkau masukkan siang ke dalam malam. Engkau keluarkan yang hidup dari yang mati, dan Engkau keluarkan yang mati dari yang hidup. Dan Engkau beri rezeki siapa yang Engkau kehendaki tanpa hisab (batas)","jumlah":1,"kategori":"wazifah-sugro","sumber":"QS. Ali Imran: 26-27","rincian":[{"ayat":26,"arab":"قُلِ ٱللَّهُمَّ مَٰلِكَ ٱلۡمُلۡكِ تُؤۡتِي ٱلۡمُلۡكَ مَن تَشَآءُ وَتَنزِعُ ٱلۡمُلۡكَ مِمَّن تَشَآءُ وَتُعِزُّ مَن تَشَآءُ وَتُذِلُّ مَن تَشَآءُۖ بِيَدِكَ ٱلۡخَيۡرُۖ إِنَّكَ عَلَىٰ كُلِّ شَيۡءٖ قَدِيرٞ","arti":"Katakanlah: \"Wahai Tuhan Yang mempunyai kerajaan, Engkau berikan kerajaan kepada orang yang Engkau kehendaki dan Engkau cabut kerajaan dari orang yang Engkau kehendaki. Engkau muliakan orang yang Engkau kehendaki dan Engkau hinakan orang yang Engkau kehendaki. Di tangan Engkaulah segala kebajikan.Sesungguhnya Engkau Maha Kuasa atas segala sesuatu."},{"ayat":27,"arab":"تُولِجُ ٱلَّيۡلَ فِي ٱلنَّهَارِ وَتُولِجُ ٱلنَّهَارَ فِي ٱلَّيۡلِۖ وَتُخۡرِجُ ٱلۡحَيَّ مِنَ ٱلۡمَيِّتِ وَتُخۡرِجُ ٱلۡمَيِّتَ مِنَ ٱلۡحَيِّۖ وَتَرۡزُقُ مَن تَشَآءُ بِغَيۡرِ حِسَابٖ","arti":"Engkau masukkan malam ke dalam siang dan Engkau masukkan siang ke dalam malam. Engkau keluarkan yang hidup dari yang mati, dan Engkau keluarkan yang mati dari yang hidup. Dan Engkau beri rezeki siapa yang Engkau kehendaki tanpa hisab (batas)"}]},{"urutan":31,"id":"031-doa-robithoh","judul":"Do'a Robithoh","arab":"اَللَّهُمَّ إِنَّ هَذَا إِقْبَالُ نَهَارِكَ (لَيْلِكَ) وَإِدْبَارُ لَيْلِكَ (نَهَارِكَ) وَأَصْوَاتُ دُعَاتِكَ فَاغْفِرْلِي","latin":"","arti":"Ya Allah, sesungguhnya ini adalah siang-Mu (malam-Mu) yang telah menjelang dan (malam-Mu) siang-Mu yang tengah berlalu serta suara-suara penyeru-Mu, maka ampunilah aku.","jumlah":3,"kategori":"wazifah-sugro","sumber":"Do'a Robithoh dalam susunan Al-Ma'tsurat Wazifah Sugro"},{"urutan":32,"id":"032-doa-robithoh","judul":"Do'a Robithoh","arab":"اَللّهُمَّ إِنَّكَ تَعْلَمُ أَنَّ هَذِهِ الْقُلُوْبَ، قَدِ اجْتَمَعَتْ عَلَى مَحَبَّتِكَ وَالْتَقَتْ عَلَى طَاعَتِكَ، وَتَوَحَّدَتْ عَلَى دَعْوَتِكَ وَتَعَاهَدَتْ عَلَى نُصْرَةِ شَرِيْعَتِكَ فَوَثِّقِ اللَّهُمَّ رَابِطَتَهَا، وَأَدِمْ وُدَّهَا، وَاهْدِهَا سُبُلَهَا وَامْلَأَهَا بِنُوْرِكَ الَّذِيْ لاَ يَخْبُوْا وَاشْرَحْ صُدُوْرَهَا بِفَيْضِ الْإِيْمَانِ بِكَ، وَجَمِيْلِ التَّوَكُّلِ عَلَيْكَ وَاَحْيِهَا بِمَعْرِفَتِكَ، وَأَمِتْهَا عَلَى الشَّهَادَةِ فِي سَبِيْلِكَ إِنَّكَ نِعْمَ الْمَوْلَى وَنِعْمَ النَّصِيْرِ. اَللَّهُمَّ أَمِيْنَ. وَصَلِّ اللَّهُمَّ عَلَى سَيِّدَنَا مُحَمَّدٍ وَعَلَى آلِهِ وَصَحْبِهِ وَسَلِّمَ.","latin":"","arti":"Ya Allah, sesungguhnya Engkau Maha Mengetahui bahawa hati-hati ini, telah berhimpun di atas dasar kecintaan terhadapmu, bertemu di atas ketaatan kepada-Mu dan bersatu bagi memikul beban dakwah-Mu, hati-hati ini telah mengikat persetiaan untuk menolong meninggikan syariat-Mu. Oleh itu, Ya Allah, Engkau perkukuhkan ikatannya dan Engkau kekalkan kemesraan hati-hati ini, tunjukilah hati-hati ini akan jalan yang sebenar,  serta penuhkanlah (piala) hati-hati ini dengan cahaya Rabbani-Mu yang tidak kunjung redup, lapangkanlah hati-hati dengan limpahan keimanan serta keindahan tawakkal kepada-Mu, hidup suburkanlah hati-hati ini dengan makrifat (pengenalan yang sebenarnya) tentang-Mu.  (Jika Engkau takdirkan kami mati) maka matikanlah hati-hati ini sebagai para syuhada dalam perjuangan agama-Mu. Sesungguhnya Engkau sebaik-baik pelindung dan sebaik-baik penolong.  Ya Allah perkenankanlah doa kami. Dan semoga shalawat serta salam selalu tercurah kepada Nabi Muhammad, keluarganya dan kepada semua sahabatnya.","jumlah":3,"kategori":"wazifah-sugro","sumber":"Do'a Robithoh dalam susunan Al-Ma'tsurat Wazifah Sugro"}];

const READER_ROUTES = {
  wazifah: {
    title: 'Wazifah Sugro',
    eyebrow: "Al-Ma'tsurat Hasan Al-Banna",
    description: ''
  }
};

const state = {
  currentView: 'home',
  currentRoute: 'home',
  currentData: [],
  currentType: null,
  dataCache: {},
  counters: loadJson(STORAGE_KEYS.counters, {}),
  displayMode: 'arab-translation'
};

const views = {
  home: document.getElementById('homeView'),
  reader: document.getElementById('readerView')
};

const prayerList = document.getElementById('prayerList');
const statusMessage = document.getElementById('statusMessage');
const readerTitle = document.getElementById('readerTitle');
const readerDescription = document.getElementById('readerDescription');
const readerEyebrow = document.getElementById('readerEyebrow');
const searchInput = document.getElementById('searchInput');
const fontDecreaseBtn = document.getElementById('fontDecreaseBtn');
const fontIncreaseBtn = document.getElementById('fontIncreaseBtn');
const displayModeSelect = document.getElementById('displayModeSelect');
const themeToggle = document.getElementById('themeToggle');
const soundToggleBtn = document.getElementById('soundToggleBtn');
const backsoundAudio = document.getElementById('backsoundAudio');
const resetCountersBtn = document.getElementById('resetCountersBtn');
const printBtn = document.getElementById('printBtn');
const progressText = document.getElementById('progressText');
const year = document.getElementById('year');

if (year) year.textContent = new Date().getFullYear();

initPreferences();
window.addEventListener('hashchange', handleRoute);
document.addEventListener('click', handleCounterClick);
if (searchInput) searchInput.addEventListener('input', () => renderPrayerList(filterData(searchInput.value)));
fontDecreaseBtn?.addEventListener('click', () => adjustFontSize(-1));
fontIncreaseBtn?.addEventListener('click', () => adjustFontSize(1));
displayModeSelect.addEventListener('change', () => setDisplayMode(displayModeSelect.value));
themeToggle.addEventListener('click', toggleTheme);
soundToggleBtn?.addEventListener('click', toggleBacksound);
resetCountersBtn?.addEventListener('click', resetCountersForCurrentType);
printBtn?.addEventListener('click', () => window.print());

handleRoute();

function initPreferences() {
  const theme = safeStorageGet(STORAGE_KEYS.theme) || 'light';
  const fontSize = safeStorageGet(STORAGE_KEYS.fontSize) || 'medium';
  const displayMode = safeStorageGet(STORAGE_KEYS.displayMode) || 'arab-translation';
  document.documentElement.dataset.theme = theme === 'dark' ? 'dark' : 'light';
  document.documentElement.dataset.fontSize = ['small', 'medium', 'large'].includes(fontSize) ? fontSize : 'medium';
  state.displayMode = normalizeDisplayMode(displayMode);
  document.documentElement.dataset.displayMode = state.displayMode;
  themeToggle.setAttribute('aria-pressed', String(document.documentElement.dataset.theme === 'dark'));
  updateFontButtons();
  displayModeSelect.value = state.displayMode;
}

async function handleRoute() {
  const route = normalizeRoute(location.hash || '#home');
  updateActiveNav(route);

  if (READER_ROUTES[route]) {
    await showReader(route);
    return;
  }


  showView('home', 'home');
}

function normalizeRoute(hashValue) {
  return String(hashValue || '#home').replace(/^#/, '').trim().toLowerCase() || 'home';
}

function updateActiveNav(route) {
  document.querySelectorAll('[data-nav-link]').forEach((link) => {
    link.classList.toggle('active', link.dataset.navLink === route);
  });
}

function showView(viewName, routeName = viewName) {
  Object.entries(views).forEach(([name, element]) => {
    element.hidden = name !== viewName;
  });

  state.currentView = viewName;
  state.currentRoute = routeName;
  safeStorageSet(STORAGE_KEYS.lastRoute, routeName);
}

async function showReader(type) {
  const routeConfig = READER_ROUTES[type];
  showView('reader', type);
  state.currentType = type;
  if (searchInput) searchInput.value = '';
  prayerList.innerHTML = '';
  updateProgress();
  setStatus('Memuat data bacaan...');

  readerTitle.textContent = routeConfig.title;
  readerEyebrow.textContent = routeConfig.eyebrow;
  readerDescription.textContent = routeConfig.description || '';
  readerDescription.hidden = !routeConfig.description;

  try {
    const data = loadPrayerData(type);
    state.currentData = data;
    renderPrayerList(state.currentData);
  } catch (error) {
    state.currentData = [];
    prayerList.innerHTML = renderErrorCard();
    setStatus('Data bacaan tidak dapat dimuat.');
    updateProgress();
    console.error(error);
  }
}

function loadPrayerData(type) {
  if (state.dataCache[type]) return state.dataCache[type];

  const payload = type === 'wazifah' ? WAZIFAH_DATA : [];
  const data = normalizePrayerPayload(payload);
  if (!data.length) throw new Error('Data bacaan tertanam tidak berisi array bacaan yang valid.');

  state.dataCache[type] = data;
  return data;
}

function normalizePrayerPayload(payload) {
  const rawItems = Array.isArray(payload)
    ? payload
    : Array.isArray(payload?.data)
      ? payload.data
      : [];

  return rawItems
    .map((item, index) => {
      const urutan = Number(item.urutan || index + 1);
      const jumlah = normalizeRepeat(item.jumlah);
      return {
        urutan,
        id: String(item.id || `bacaan-${urutan || index + 1}`),
        judul: String(item.judul || `Bacaan ${urutan || index + 1}`),
        arab: item.arab || '',
        latin: item.latin || '',
        arti: item.arti || '',
        rincian: normalizePrayerDetails(item.rincian),
        jumlah,
        kategori: item.kategori || '',
        sumber: item.sumber || '',
        catatan: item.catatan || ''
      };
    })
    .sort((a, b) => a.urutan - b.urutan);
}

function normalizePrayerDetails(details) {
  if (!Array.isArray(details)) return [];

  return details
    .map((detail, index) => {
      const ayat = detail?.ayat ?? detail?.nomor ?? detail?.number ?? '';
      const label = detail?.label || (ayat !== '' ? `Ayat ${ayat}` : `Bagian ${index + 1}`);
      return {
        label: String(label),
        ayat,
        arab: detail?.arab || '',
        latin: detail?.latin || '',
        arti: detail?.arti || detail?.terjemah || detail?.terjemahan || ''
      };
    })
    .filter((detail) => detail.arab || detail.arti || detail.latin);
}

function normalizeRepeat(value) {
  const numberValue = Number(value);
  if (!Number.isFinite(numberValue) || numberValue < 1) return 1;
  return Math.max(1, Math.floor(numberValue));
}

function renderPrayerList(items) {
  const filteredItems = Array.isArray(items) ? items : [];

  if (!filteredItems.length) {
    prayerList.innerHTML = '<div class="empty-card">Tidak ada bacaan yang cocok dengan kata kunci tersebut.</div>';
    setStatus('Tidak ada bacaan yang cocok.');
    updateProgress();
    return;
  }

  setStatus('');
  prayerList.innerHTML = filteredItems.map((item) => renderPrayerCard(item)).join('');
  updateProgress();
}

function renderPrayerCard(item) {
  const displayNumber = Number.isFinite(item.urutan) ? item.urutan : '';
  const showTranslation = state.displayMode === 'arab-translation';

  return `
    <article class="prayer-card" id="${domId(item.id)}">
      <div class="prayer-meta">
        <div>
          <h2 class="prayer-title">${displayNumber ? `${displayNumber}. ` : ''}${escapeHtml(item.judul)}</h2>
          ${item.sumber ? `<p class="prayer-source">Sumber: ${escapeHtml(item.sumber)}</p>` : ''}
        </div>
      </div>

      ${renderPrayerContent(item, showTranslation)}
    </article>
  `;
}

function renderPrayerContent(item, showTranslation) {
  if (Array.isArray(item.rincian) && item.rincian.length) {
    return `
      <div class="verse-list">
        ${item.rincian.map((detail) => renderVerseSegment(detail, showTranslation)).join('')}
      </div>
    `;
  }

  return `
    ${item.arab ? renderArabicText(item.arab) : ''}
    ${showTranslation && item.arti ? `<p class="translation-text">${formatMultilineText(item.arti)}</p>` : ''}
  `;
}

function renderVerseSegment(detail, showTranslation) {
  const label = detail.label || (detail.ayat ? `Ayat ${detail.ayat}` : '');

  return `
    <section class="verse-segment">
      ${label ? `<span class="arabic-label verse-label" dir="ltr">${escapeHtml(label)}</span>` : ''}
      ${detail.arab ? renderArabicText(detail.arab) : ''}
      ${showTranslation && detail.arti ? `<p class="translation-text verse-translation">${formatMultilineText(detail.arti)}</p>` : ''}
    </section>
  `;
}

function renderArabicText(value) {
  const lines = String(value)
    .split(/\r?\n/)
    .map((line) => line.trim())
    .filter(Boolean);

  if (!lines.length) return '';

  const html = lines.map((line) => {
    if (/^(ayat|surat|doa|hadits|dzikir)\s+/i.test(line)) {
      return `<span class="arabic-label" dir="ltr">${escapeHtml(line)}</span>`;
    }
    return `<span class="arabic-line" dir="rtl" lang="ar">${escapeHtml(line)}</span>`;
  }).join('');

  return `<div class="arabic-text">${html}</div>`;
}

function formatMultilineText(value) {
  return escapeHtml(value).replace(/\r?\n/g, '<br>');
}

function renderErrorCard() {
  return `
    <div class="empty-card error-card">
      <strong>Data belum dapat dibuka.</strong>
      <p>Data bacaan sudah tertanam di dalam aplikasi. Silakan periksa kembali file <code>js/app.js</code> apabila halaman bacaan tidak muncul.</p>
    </div>
  `;
}

function handleCounterClick(event) {
  const addButton = event.target.closest('[data-counter-add]');
  const resetButton = event.target.closest('[data-counter-reset]');

  if (addButton) {
    const itemId = addButton.dataset.counterAdd;
    const item = state.currentData.find((entry) => entry.id === itemId);
    if (!item) return;

    const target = normalizeRepeat(item.jumlah);
    const key = getCounterKey(itemId);
    state.counters[key] = Math.min(Number(state.counters[key] || 0) + 1, target);
    saveCounters();
    renderPrayerList(filterData(searchInput ? searchInput.value : ''));
    return;
  }

  if (resetButton) {
    const itemId = resetButton.dataset.counterReset;
    const key = getCounterKey(itemId);
    delete state.counters[key];
    saveCounters();
    renderPrayerList(filterData(searchInput ? searchInput.value : ''));
  }
}

function resetCountersForCurrentType() {
  if (!state.currentType) return;
  const prefix = `${state.currentType}:`;
  Object.keys(state.counters).forEach((key) => {
    if (key.startsWith(prefix)) delete state.counters[key];
  });
  saveCounters();
  renderPrayerList(filterData(searchInput ? searchInput.value : ''));
}

function filterData(query) {
  const keyword = normalizeSearchText(query);
  if (!keyword) return state.currentData;

  return state.currentData.filter((item) => {
    const detailText = Array.isArray(item.rincian)
      ? item.rincian.map((detail) => `${detail.label || ''} ${detail.arab || ''} ${detail.latin || ''} ${detail.arti || ''}`).join(' ')
      : '';

    return [item.judul, item.arab, item.latin, item.arti, detailText, item.sumber, item.catatan, item.kategori]
      .filter(Boolean)
      .some((value) => normalizeSearchText(value).includes(keyword));
  });
}

function updateProgress() {
  if (!progressText) return;
  const total = state.currentData.length;
  if (!total) {
    progressText.textContent = '0 / 0 selesai';
    return;
  }

  const done = state.currentData.filter((item) => {
    const count = Number(state.counters[getCounterKey(item.id)] || 0);
    return count >= normalizeRepeat(item.jumlah);
  }).length;

  progressText.textContent = `${done} / ${total} selesai`;
}

function setStatus(message) {
  statusMessage.textContent = message;
}

function getCounterKey(id) {
  return `${state.currentType}:${id}`;
}

function saveCounters() {
  safeStorageSet(STORAGE_KEYS.counters, JSON.stringify(state.counters));
}

function setFontSize(value) {
  const nextValue = ['small', 'medium', 'large'].includes(value) ? value : 'medium';
  document.documentElement.dataset.fontSize = nextValue;
  safeStorageSet(STORAGE_KEYS.fontSize, nextValue);
  updateFontButtons();
}

function adjustFontSize(direction) {
  const sizes = ['small', 'medium', 'large'];
  const current = document.documentElement.dataset.fontSize || 'medium';
  const currentIndex = Math.max(0, sizes.indexOf(current));
  const nextIndex = Math.min(sizes.length - 1, Math.max(0, currentIndex + direction));
  setFontSize(sizes[nextIndex]);
}

function updateFontButtons() {
  const sizes = ['small', 'medium', 'large'];
  const current = document.documentElement.dataset.fontSize || 'medium';
  const index = sizes.indexOf(current);
  if (fontDecreaseBtn) fontDecreaseBtn.disabled = index <= 0;
  if (fontIncreaseBtn) fontIncreaseBtn.disabled = index >= sizes.length - 1;
}

function setDisplayMode(value) {
  const nextValue = normalizeDisplayMode(value);
  state.displayMode = nextValue;
  document.documentElement.dataset.displayMode = nextValue;
  safeStorageSet(STORAGE_KEYS.displayMode, nextValue);
  renderPrayerList(filterData(searchInput ? searchInput.value : ''));
}

function normalizeDisplayMode(value) {
  return ['arab-only', 'arab-translation'].includes(value) ? value : 'arab-translation';
}

function toggleTheme() {
  const nextTheme = document.documentElement.dataset.theme === 'dark' ? 'light' : 'dark';
  document.documentElement.dataset.theme = nextTheme;
  themeToggle.setAttribute('aria-pressed', String(nextTheme === 'dark'));
  safeStorageSet(STORAGE_KEYS.theme, nextTheme);
}

async function toggleBacksound() {
  if (!backsoundAudio || !soundToggleBtn) return;

  try {
    if (backsoundAudio.paused) {
      await backsoundAudio.play();
    } else {
      backsoundAudio.pause();
    }
  } catch (error) {
    return;
  }

  const isPlaying = !backsoundAudio.paused;
  soundToggleBtn.classList.toggle('is-playing', isPlaying);
  soundToggleBtn.setAttribute('aria-pressed', String(isPlaying));
  soundToggleBtn.setAttribute('aria-label', isPlaying ? 'Hentikan backsound' : 'Putar backsound');
}

function normalizeSearchText(value) {
  return String(value || '')
    .toLowerCase()
    .normalize('NFD')
    .replace(/[\u0300-\u036f]/g, '')
    .trim();
}

function loadJson(key, fallback) {
  try {
    const raw = safeStorageGet(key);
    if (!raw) return fallback;
    return JSON.parse(raw) || fallback;
  } catch {
    return fallback;
  }
}

function safeStorageGet(key) {
  try {
    return localStorage.getItem(key);
  } catch {
    return null;
  }
}

function safeStorageSet(key, value) {
  try {
    localStorage.setItem(key, value);
  } catch {
    // localStorage dapat gagal pada mode privat atau browser tertentu; aplikasi tetap berjalan tanpa penyimpanan lokal.
  }
}

function escapeHtml(value) {
  return String(value)
    .replace(/&/g, '&amp;')
    .replace(/</g, '&lt;')
    .replace(/>/g, '&gt;')
    .replace(/"/g, '&quot;')
    .replace(/'/g, '&#039;');
}

function escapeAttr(value) {
  return escapeHtml(value);
}

function domId(value) {
  return String(value || 'bacaan')
    .toLowerCase()
    .replace(/[^a-z0-9_-]+/g, '-')
    .replace(/^-+|-+$/g, '') || 'bacaan';
}
