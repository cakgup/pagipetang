const STORAGE_KEYS = {
  theme: 'almatsurat.theme',
  fontSize: 'almatsurat.fontSize',
  displayMode: 'almatsurat.displayMode',
  counters: 'almatsurat.counters',
  lastRoute: 'almatsurat.lastRoute',
  prayerProvince: 'almatsurat.prayerProvince',
  prayerCity: 'almatsurat.prayerCity'
};

// Data bacaan dibuat menyatu di app.js agar aplikasi tidak perlu request file JSON terpisah.
// Cocok untuk GitHub Pages, cepat diakses, dan tetap bisa dibuka sebagai file statis sederhana.
const WAZIFAH_SUGRO_DATA = [{"urutan":1,"id":"001-taawudz","judul":"Ta'awudz","arab":"أَعُوذُ بِاللَّهِ السَّمِيعِ الْعَلِيمِ مِنَ الشَّيْطَانِ الرَّجِيمِ","latin":"","arti":"Aku berlindung kepada Allah yang Maha Mendengar lagi Maha Mengetahui dari godaan syetan yang terkutuk.","jumlah":1,"kategori":"wazifah-sugro","sumber":"Al-Ma'tsurat Wazifah Sugro","catatan":"Data dirapikan dari teks mentah yang diberikan pengguna; mohon verifikasi ulang sebelum publikasi."},{"urutan":2,"id":"002-al-fatihah-1-7","judul":"Al-Fatihah","arab":"Ayat 1\nبِسْمِ اللَّهِ الرَّحْمَٰنِ الرَّحِيمِ\n\nAyat 2\nالْحَمْدُ لِلَّهِ رَبِّ الْعَٰلَمِينَ\n\nAyat 3\nالرَّحْمَٰنِ الرَّحِيمِ\n\nAyat 4\nمَٰلِكِ يَوْمِ الدِّينِ\n\nAyat 5\nإِيَّاكَ نَعْبُدُ وَإِيَّاكَ نَسْتَعِينُ\n\nAyat 6\nاهْدِنَا الصِّرَٰطَ الْمُسْتَقِيمَ\n\nAyat 7\nصِرَٰطَ الَّذِينَ أَنْعَمْتَ عَلَيْهِمْ غَيْرِ الْمَغْضُوبِ عَلَيْهِمْ وَلَا الضَّآلِّينَ","latin":"","arti":"Ayat 1: Dengan menyebut nama Allah Yang Maha Pemurah lagi Maha Penyayang\n\nAyat 2: Segala puji bagi Allah, Tuhan semesta alam\n\nAyat 3: Maha Pemurah lagi Maha Penyayang\n\nAyat 4: Yang menguasai hari pembalasan\n\nAyat 5: Hanya kepada Engkaulah kami menyembah dan hanya kepada Engkaulah kami mohon pertolongan\n\nAyat 6: Tunjukilah kami jalan yang lurus\n\nAyat 7: (yaitu) jalan orang-orang yang telah Engkau anugerahkan nikmat kepada mereka, bukan (jalan) mereka yang dimurkai dan bukan (pula jalan) mereka yang sesat","jumlah":1,"kategori":"wazifah-sugro","sumber":"QS. Al-Fatihah: 1-7","rincian":[{"ayat":1,"arab":"بِسْمِ اللَّهِ الرَّحْمَٰنِ الرَّحِيمِ","arti":"Dengan menyebut nama Allah Yang Maha Pemurah lagi Maha Penyayang"},{"ayat":2,"arab":"الْحَمْدُ لِلَّهِ رَبِّ الْعَٰلَمِينَ","arti":"Segala puji bagi Allah, Tuhan semesta alam"},{"ayat":3,"arab":"الرَّحْمَٰنِ الرَّحِيمِ","arti":"Maha Pemurah lagi Maha Penyayang"},{"ayat":4,"arab":"مَٰلِكِ يَوْمِ الدِّينِ","arti":"Yang menguasai hari pembalasan"},{"ayat":5,"arab":"إِيَّاكَ نَعْبُدُ وَإِيَّاكَ نَسْتَعِينُ","arti":"Hanya kepada Engkaulah kami menyembah dan hanya kepada Engkaulah kami mohon pertolongan"},{"ayat":6,"arab":"اهْدِنَا الصِّرَٰطَ الْمُسْتَقِيمَ","arti":"Tunjukilah kami jalan yang lurus"},{"ayat":7,"arab":"صِرَٰطَ الَّذِينَ أَنْعَمْتَ عَلَيْهِمْ غَيْرِ الْمَغْضُوبِ عَلَيْهِمْ وَلَا الضَّآلِّينَ","arti":"(yaitu) jalan orang-orang yang telah Engkau anugerahkan nikmat kepada mereka, bukan (jalan) mereka yang dimurkai dan bukan (pula jalan) mereka yang sesat"}]},{"urutan":3,"id":"003-al-baqarah-1-5","judul":"Al-Baqarah","arab":"بِسْمِ اللَّهِ الرَّحْمَٰنِ الرَّحِيمِ\n\nAyat 1\nالم\n\nAyat 2\nذَٰلِكَ الْكِتَٰبُ لَا رَيْبَ فِيهِ هُدًى لِّلْمُتَّقِينَ\n\nAyat 3\nالَّذِينَ يُؤْمِنُونَ بِالْغَيْبِ وَيُقِيمُونَ الصَّلَوٰةَ وَمِمَّا رَزَقْنَٰهُمْ يُنفِقُونَ\n\nAyat 4\nوَالَّذِينَ يُؤْمِنُونَ بِمَآ أُنزِلَ إِلَيْكَ وَمَآ أُنزِلَ مِن قَبْلِكَ وَبِالْأخِرَةِ هُمْ يُوقِنُونَ\n\nAyat 5\nأُوْلَٰئِكَ عَلَىٰ هُدًى مِّن رَّبِّهِمْ وَأُوْلَٰئِكَ هُمُ الْمُفْلِحُونَ","latin":"","arti":"Ayat 1: Alif Laam Miim\n\nAyat 2: Kitab (Al Qur'an) ini tidak ada keraguan padanya; petunjuk bagi mereka yang bertakwa\n\nAyat 3: (yaitu) mereka yang beriman kepada yang gaib, yang mendirikan shalat dan menafkahkan sebahagian rezki yang Kami anugerahkan kepada mereka\n\nAyat 4: Dan mereka yang beriman kepada Kitab (AlQur'an) yang telah diturunkan kepadamu dan Kitab-kitab yang telah diturunkan sebelummu, serta mereka yakin akan adanya (kehidupan) akhirat\n\nAyat 5: Mereka itulah yang tetap mendapat petunjuk dari Tuhan mereka, dan merekalah orang-orang yang beruntung","jumlah":1,"kategori":"wazifah-sugro","sumber":"QS. Al-Baqarah: 1-5","rincian":[{"ayat":1,"arab":"الم","arti":"Alif Laam Miim"},{"ayat":2,"arab":"ذَٰلِكَ الْكِتَٰبُ لَا رَيْبَ فِيهِ هُدًى لِّلْمُتَّقِينَ","arti":"Kitab (Al Qur'an) ini tidak ada keraguan padanya; petunjuk bagi mereka yang bertakwa"},{"ayat":3,"arab":"الَّذِينَ يُؤْمِنُونَ بِالْغَيْبِ وَيُقِيمُونَ الصَّلَوٰةَ وَمِمَّا رَزَقْنَٰهُمْ يُنفِقُونَ","arti":"(yaitu) mereka yang beriman kepada yang gaib, yang mendirikan shalat dan menafkahkan sebahagian rezki yang Kami anugerahkan kepada mereka"},{"ayat":4,"arab":"وَالَّذِينَ يُؤْمِنُونَ بِمَآ أُنزِلَ إِلَيْكَ وَمَآ أُنزِلَ مِن قَبْلِكَ وَبِالْأخِرَةِ هُمْ يُوقِنُونَ","arti":"Dan mereka yang beriman kepada Kitab (AlQur'an) yang telah diturunkan kepadamu dan Kitab-kitab yang telah diturunkan sebelummu, serta mereka yakin akan adanya (kehidupan) akhirat"},{"ayat":5,"arab":"أُوْلَٰئِكَ عَلَىٰ هُدًى مِّن رَّبِّهِمْ وَأُوْلَٰئِكَ هُمُ الْمُفْلِحُونَ","arti":"Mereka itulah yang tetap mendapat petunjuk dari Tuhan mereka, dan merekalah orang-orang yang beruntung"}]},{"urutan":4,"id":"004-al-baqarah-255-255","judul":"Al-Baqarah","arab":"Ayat 255\nاللَّهُ لَآ إِلَٰهَ إِلَّا هُوَ الْحَيُّ الْقَيُّومُ لَا تَأْخُذُهُ سِنَةٌ وَلَا نَوْمٌ لَّهُ مَا فِي السَّمَٰوَٰتِ وَمَا فِي الْأَرْضِ مَن ذَا الَّذِي يَشْفَعُ عِندَهُ إِلَّا بِإِذْنِهِ يَعْلَمُ مَا بَيْنَ أَيْدِيهِمْ وَمَا خَلْفَهُمْ وَلَا يُحِيطُونَ بِشَيْءٍ مِّنْ عِلْمِهِ إِلَّا بِمَا شَآءَ وَسِعَ كُرْسِيُّهُ السَّمَٰوَٰتِ وَالْأَرْضَ وَلَايَئُودُهُ حِفْظُهُمَا وَهُوَ الْعَلِيُّ الْعَظِيمُ","latin":"","arti":"Ayat 255: Allah, tidak ada Tuhan (yang berhak disembah) melainkan Dia Yang Hidup kekal lagi terus menerus mengurus (makhluk-Nya); tidak mengantuk dan tidak tidur. Kepunyaan-Nya apa yang di langit dan di bumi. Tiada yang dapat memberi syafaat di sisi Allah tanpa izin-Nya. Allah mengetahui apa-apa yang di hadapan mereka dan di belakang mereka, dan mereka tidak mengetahui apa-apa dari ilmu Allah melainkan apa yang dikehendaki-Nya. Kursi Allah meliputi langit dan bumi. Dan Allah tidak merasa berat memelihara keduanya, dan Allah Maha Tinggi lagi Maha Besar","jumlah":1,"kategori":"wazifah-sugro","sumber":"QS. Al-Baqarah: 255","rincian":[{"ayat":255,"arab":"اللَّهُ لَآ إِلَٰهَ إِلَّا هُوَ الْحَيُّ الْقَيُّومُ لَا تَأْخُذُهُ سِنَةٌ وَلَا نَوْمٌ لَّهُ مَا فِي السَّمَٰوَٰتِ وَمَا فِي الْأَرْضِ مَن ذَا الَّذِي يَشْفَعُ عِندَهُ إِلَّا بِإِذْنِهِ يَعْلَمُ مَا بَيْنَ أَيْدِيهِمْ وَمَا خَلْفَهُمْ وَلَا يُحِيطُونَ بِشَيْءٍ مِّنْ عِلْمِهِ إِلَّا بِمَا شَآءَ وَسِعَ كُرْسِيُّهُ السَّمَٰوَٰتِ وَالْأَرْضَ وَلَايَئُودُهُ حِفْظُهُمَا وَهُوَ الْعَلِيُّ الْعَظِيمُ","arti":"Allah, tidak ada Tuhan (yang berhak disembah) melainkan Dia Yang Hidup kekal lagi terus menerus mengurus (makhluk-Nya); tidak mengantuk dan tidak tidur. Kepunyaan-Nya apa yang di langit dan di bumi. Tiada yang dapat memberi syafaat di sisi Allah tanpa izin-Nya. Allah mengetahui apa-apa yang di hadapan mereka dan di belakang mereka, dan mereka tidak mengetahui apa-apa dari ilmu Allah melainkan apa yang dikehendaki-Nya. Kursi Allah meliputi langit dan bumi. Dan Allah tidak merasa berat memelihara keduanya, dan Allah Maha Tinggi lagi Maha Besar"}]},{"urutan":5,"id":"005-al-baqarah-256-257","judul":"Al-Baqarah","arab":"Ayat 256\nلَآ إِكْرَاهَ فِي الدِّينِ قَد تَّبَيَّنَ الرُّشْدُ مِنَ الْغَيِّ فَمَن يَكْفُرْ بِالطَّٰغُوتِ وَيُؤْمِنْ بِاللَّهِ فَقَدِ اسْتَمْسَكَ بِالْعُرْوَةِ الْوُثْقَىٰ لَا انفِصَامَ لَهَا وَاللَّهُ سَمِيعٌ عَلِيمٌ\n\nAyat 257\nاللَّهُ وَلِيُّ الَّذِينَ ءَامَنُواْ يُخْرِجُهُم مِّنَ الظُّلُمَٰتِ إِلَى النُّورِ وَالَّذِينَ كَفَرُواْ أَوْلِيَآؤُهُمُ الطَّٰغُوتُ يُخْرِجُونَهُم مِّنَ النُّورِ إِلَى الظُّلُمَٰتِ أُوْلَٰئِكَ أَصْحَٰبُ النَّارِ هُمْ فِيهَا خَٰلِدُونَ","latin":"","arti":"Ayat 256: Tidak ada paksaan untuk (memasuki) agama (Islam); sesungguhnya telah jelas jalan yang benar daripada jalan yang sesat. Karena itu barang siapa yang ingkar kepada Thaghut dan beriman kepada Allah, maka sesungguhnya ia telah berpegang kepada buhu tali yang amat kuat yang tidak akan putus. Dan Allah Maha Mendengar lagi Maha Mengetahui.\n\nAyat 257: Allah Pelindung orang-orang yang beriman; Dia mengeluarkan mereka dari kegelapan (kekafiran) kepada cahaya (iman). Dan orang-orang yang kafir, pelindung-pelindungnya ialah setan, yang mengeluarkan mereka dari cahaya kepada kegelapan (kekafiran). Mereka itu adalah penghuni neraka; mereka kekal di dalamnya","jumlah":1,"kategori":"wazifah-sugro","sumber":"QS. Al-Baqarah: 256-257","rincian":[{"ayat":256,"arab":"لَآ إِكْرَاهَ فِي الدِّينِ قَد تَّبَيَّنَ الرُّشْدُ مِنَ الْغَيِّ فَمَن يَكْفُرْ بِالطَّٰغُوتِ وَيُؤْمِنْ بِاللَّهِ فَقَدِ اسْتَمْسَكَ بِالْعُرْوَةِ الْوُثْقَىٰ لَا انفِصَامَ لَهَا وَاللَّهُ سَمِيعٌ عَلِيمٌ","arti":"Tidak ada paksaan untuk (memasuki) agama (Islam); sesungguhnya telah jelas jalan yang benar daripada jalan yang sesat. Karena itu barang siapa yang ingkar kepada Thaghut dan beriman kepada Allah, maka sesungguhnya ia telah berpegang kepada buhu tali yang amat kuat yang tidak akan putus. Dan Allah Maha Mendengar lagi Maha Mengetahui."},{"ayat":257,"arab":"اللَّهُ وَلِيُّ الَّذِينَ ءَامَنُواْ يُخْرِجُهُم مِّنَ الظُّلُمَٰتِ إِلَى النُّورِ وَالَّذِينَ كَفَرُواْ أَوْلِيَآؤُهُمُ الطَّٰغُوتُ يُخْرِجُونَهُم مِّنَ النُّورِ إِلَى الظُّلُمَٰتِ أُوْلَٰئِكَ أَصْحَٰبُ النَّارِ هُمْ فِيهَا خَٰلِدُونَ","arti":"Allah Pelindung orang-orang yang beriman; Dia mengeluarkan mereka dari kegelapan (kekafiran) kepada cahaya (iman). Dan orang-orang yang kafir, pelindung-pelindungnya ialah setan, yang mengeluarkan mereka dari cahaya kepada kegelapan (kekafiran). Mereka itu adalah penghuni neraka; mereka kekal di dalamnya"}]},{"urutan":6,"id":"006-al-baqarah-284-286","judul":"Al-Baqarah","arab":"Ayat 284\nلِّلَّهِ مَا فِي السَّمَٰوَٰتِ وَمَا فِي الْأَرْضِ وَإِن تُبْدُواْ مَا فِي أَنفُسِكُمْ أَوْ تُخْفُوهُ يُحَاسِبْكُم بِهِ اللَّهُ فَيَغْفِرُ لِمَن يَشَآءُ وَيُعَذِّبُ مَن يَشَآءُ وَاللَّهُ عَلَىٰ كُلِّ شَيْءٍ قَدِيرٌ\n\nAyat 285\nءَامَنَ الرَّسُولُ بِمَآ أُنزِلَ إِلَيْهِ مِن رَّبِّهِ وَالْمُؤْمِنُونَ كُلٌّ ءَامَنَ بِاللَّهِ وَمَلَٰئِكَتِهِ وَكُتُبِهِ وَرُسُلِهِ لَا نُفَرِّقُ بَيْنَ أَحَدٍ مِّن رُّسُلِهِ وَقَالُواْ سَمِعْنَا وَأَطَعْنَا غُفْرَانَكَ رَبَّنَا وَإِلَيْكَ الْمَصِيرُ\n\nAyat 286\nلَا يُكَلِّفُ اللَّهُ نَفْسًا إِلَّا وُسْعَهَا لَهَا مَا كَسَبَتْ وَعَلَيْهَا مَا اكْتَسَبَتْ رَبَّنَا لَا تُؤَاخِذْنَآ إِن نَّسِينَآ أَوْ أَخْطَأْنَا رَبَّنَا وَلَا تَحْمِلْ عَلَيْنَآ إِصْرًا كَمَا حَمَلْتَهُ عَلَى الَّذِينَ مِن قَبْلِنَا رَبَّنَا وَلَا تُحَمِّلْنَا مَا لَا طَاقَةَ لَنَا بِهِ وَاعْفُ عَنَّا وَاغْفِرْ لَنَا وَارْحَمْنَآ أَنتَ مَوْلَىٰنَا فَانصُرْنَا عَلَى الْقَوْمِ الْكَٰفِرِينَ","latin":"","arti":"Ayat 284: Kepunyaan Allah-lah segala apa yang ada di langit dan apa yang ada di bumi. Dan jika kamu melahirkan apa yang ada di dalam hatimu atau kamu menyembunyikannya, niscaya Allah akan membuat perhitungan dengan kamu tentang perbuatanmu itu. Maka Allah mengampuni siapa yang dikehendaki-Nya dan menyiksa siapa yang dikehendaki-Nya; dan Allah Maha Kuasa atas segala sesuatu\n\nAyat 285: Rasul telah beriman kepada Al Qur'an yang diturunkan kepadanya dari Tuhannya, demikian pula orang-orang yang beriman. Semuanya beriman kepada Allah, malaikat-malaikat-Nya, kitab-kitab-Nya dan rasul-rasul-Nya. (Mereka mengatakan): \"Kami tidak membeda-bedakan antara seseorang pun (dengan yang lain) dari rasul rasul-Nya\", dan mereka mengatakan: \"Kami dengar dan kami taat\". (Mereka berdoa):\"Ampunilah kami ya Tuhan kami dan kepada Engkaulah tempat kembali\"\n\nAyat 286: Allah tidak membebani seseorang melainkan sesuai dengan kesanggupannya. Ia mendapat pahala (dari kebajikan) yang diusahakannya dan ia mendapat siksa (dari kejahatan) yang dikerjakannya. (Mereka berdo`a): \"Ya Tuhan kami, janganlah Engkau hukum kami jika kami lupa atau kami tersalah. Ya Tuhan kami, janganlah Engkau bebankan kepada kami beban yang berat sebagaimana Engkau bebankan kepada orang-orang yang sebelum kami. Ya Tuhan kami, janganlah Engkau pikulkan kepada kami apa yang tak sanggup kami memikulnya. Beri maaflah kami; ampunilah kami; dan rahmatilah kami. Engkaulah Penolong kami, maka tolonglah kami terhadap kaum yang kafir\"","jumlah":1,"kategori":"wazifah-sugro","sumber":"QS. Al-Baqarah: 284-286","rincian":[{"ayat":284,"arab":"لِّلَّهِ مَا فِي السَّمَٰوَٰتِ وَمَا فِي الْأَرْضِ وَإِن تُبْدُواْ مَا فِي أَنفُسِكُمْ أَوْ تُخْفُوهُ يُحَاسِبْكُم بِهِ اللَّهُ فَيَغْفِرُ لِمَن يَشَآءُ وَيُعَذِّبُ مَن يَشَآءُ وَاللَّهُ عَلَىٰ كُلِّ شَيْءٍ قَدِيرٌ","arti":"Kepunyaan Allah-lah segala apa yang ada di langit dan apa yang ada di bumi. Dan jika kamu melahirkan apa yang ada di dalam hatimu atau kamu menyembunyikannya, niscaya Allah akan membuat perhitungan dengan kamu tentang perbuatanmu itu. Maka Allah mengampuni siapa yang dikehendaki-Nya dan menyiksa siapa yang dikehendaki-Nya; dan Allah Maha Kuasa atas segala sesuatu"},{"ayat":285,"arab":"ءَامَنَ الرَّسُولُ بِمَآ أُنزِلَ إِلَيْهِ مِن رَّبِّهِ وَالْمُؤْمِنُونَ كُلٌّ ءَامَنَ بِاللَّهِ وَمَلَٰئِكَتِهِ وَكُتُبِهِ وَرُسُلِهِ لَا نُفَرِّقُ بَيْنَ أَحَدٍ مِّن رُّسُلِهِ وَقَالُواْ سَمِعْنَا وَأَطَعْنَا غُفْرَانَكَ رَبَّنَا وَإِلَيْكَ الْمَصِيرُ","arti":"Rasul telah beriman kepada Al Qur'an yang diturunkan kepadanya dari Tuhannya, demikian pula orang-orang yang beriman. Semuanya beriman kepada Allah, malaikat-malaikat-Nya, kitab-kitab-Nya dan rasul-rasul-Nya. (Mereka mengatakan): \"Kami tidak membeda-bedakan antara seseorang pun (dengan yang lain) dari rasul rasul-Nya\", dan mereka mengatakan: \"Kami dengar dan kami taat\". (Mereka berdoa):\"Ampunilah kami ya Tuhan kami dan kepada Engkaulah tempat kembali\""},{"ayat":286,"arab":"لَا يُكَلِّفُ اللَّهُ نَفْسًا إِلَّا وُسْعَهَا لَهَا مَا كَسَبَتْ وَعَلَيْهَا مَا اكْتَسَبَتْ رَبَّنَا لَا تُؤَاخِذْنَآ إِن نَّسِينَآ أَوْ أَخْطَأْنَا رَبَّنَا وَلَا تَحْمِلْ عَلَيْنَآ إِصْرًا كَمَا حَمَلْتَهُ عَلَى الَّذِينَ مِن قَبْلِنَا رَبَّنَا وَلَا تُحَمِّلْنَا مَا لَا طَاقَةَ لَنَا بِهِ وَاعْفُ عَنَّا وَاغْفِرْ لَنَا وَارْحَمْنَآ أَنتَ مَوْلَىٰنَا فَانصُرْنَا عَلَى الْقَوْمِ الْكَٰفِرِينَ","arti":"Allah tidak membebani seseorang melainkan sesuai dengan kesanggupannya. Ia mendapat pahala (dari kebajikan) yang diusahakannya dan ia mendapat siksa (dari kejahatan) yang dikerjakannya. (Mereka berdo`a): \"Ya Tuhan kami, janganlah Engkau hukum kami jika kami lupa atau kami tersalah. Ya Tuhan kami, janganlah Engkau bebankan kepada kami beban yang berat sebagaimana Engkau bebankan kepada orang-orang yang sebelum kami. Ya Tuhan kami, janganlah Engkau pikulkan kepada kami apa yang tak sanggup kami memikulnya. Beri maaflah kami; ampunilah kami; dan rahmatilah kami. Engkaulah Penolong kami, maka tolonglah kami terhadap kaum yang kafir\""}]},{"urutan":7,"id":"007-al-ikhlas-1-4","judul":"Al-Ikhlas","arab":"بِسْمِ اللَّهِ الرَّحْمَٰنِ الرَّحِيمِ\n\nAyat 1\nقُلْ هُوَ اللَّهُ أَحَدٌ\n\nAyat 2\nاللَّهُ الصَّمَدُ\n\nAyat 3\nلَمْ يَلِدْ وَلَمْ يُولَدْ\n\nAyat 4\nوَلَمْ يَكُن لَّهُ كُفُوًا أَحَدٌ","latin":"","arti":"Ayat 1: Katakanlah: \"Dialah Allah, Yang Maha Esa\n\nAyat 2: Allah adalah Tuhan yang bergantung kepada-Nya segala sesuatu\n\nAyat 3: Dia tiada beranak dan tidak pula diperanakkan\n\nAyat 4: Dan tidak ada seorangpun yang setara dengan Dia","jumlah":3,"kategori":"wazifah-sugro","sumber":"QS. Al-Ikhlas: 1-4","rincian":[{"ayat":1,"arab":"قُلْ هُوَ اللَّهُ أَحَدٌ","arti":"Katakanlah: \"Dialah Allah, Yang Maha Esa"},{"ayat":2,"arab":"اللَّهُ الصَّمَدُ","arti":"Allah adalah Tuhan yang bergantung kepada-Nya segala sesuatu"},{"ayat":3,"arab":"لَمْ يَلِدْ وَلَمْ يُولَدْ","arti":"Dia tiada beranak dan tidak pula diperanakkan"},{"ayat":4,"arab":"وَلَمْ يَكُن لَّهُ كُفُوًا أَحَدٌ","arti":"Dan tidak ada seorangpun yang setara dengan Dia"}]},{"urutan":8,"id":"008-al-falaq-1-5","judul":"Al-Falaq","arab":"بِسْمِ اللَّهِ الرَّحْمَٰنِ الرَّحِيمِ\n\nAyat 1\nقُلْ أَعُوذُ بِرَبِّ الْفَلَقِ\n\nAyat 2\nمِن شَرِّ مَا خَلَقَ\n\nAyat 3\nوَمِن شَرِّ غَاسِقٍ إِذَا وَقَبَ\n\nAyat 4\nوَمِن شَرِّ النَّفَّٰثَٰتِ فِي الْعُقَدِ\n\nAyat 5\nوَمِن شَرِّ حَاسِدٍ إِذَا حَسَدَ","latin":"","arti":"Ayat 1: 1. Katakanlah: \"Aku berlindung kepada Tuhan Yang Menguasai subuh,\n\nAyat 2: Dari kejahatan makhluk-Nya\n\nAyat 3: Dan dari kejahatan malam apabila telah gelap gulita\n\nAyat 4: Dan dari kejahatan wanita-wanita tukang sihir yang menghembus pada buhul-buhul\n\nAyat 5: Dan dari kejahatan pendengki bila ia dengki","jumlah":3,"kategori":"wazifah-sugro","sumber":"QS. Al-Falaq: 1-5","rincian":[{"ayat":1,"arab":"قُلْ أَعُوذُ بِرَبِّ الْفَلَقِ","arti":"1. Katakanlah: \"Aku berlindung kepada Tuhan Yang Menguasai subuh,"},{"ayat":2,"arab":"مِن شَرِّ مَا خَلَقَ","arti":"Dari kejahatan makhluk-Nya"},{"ayat":3,"arab":"وَمِن شَرِّ غَاسِقٍ إِذَا وَقَبَ","arti":"Dan dari kejahatan malam apabila telah gelap gulita"},{"ayat":4,"arab":"وَمِن شَرِّ النَّفَّٰثَٰتِ فِي الْعُقَدِ","arti":"Dan dari kejahatan wanita-wanita tukang sihir yang menghembus pada buhul-buhul"},{"ayat":5,"arab":"وَمِن شَرِّ حَاسِدٍ إِذَا حَسَدَ","arti":"Dan dari kejahatan pendengki bila ia dengki"}]},{"urutan":9,"id":"009-an-naas-1-6","judul":"An-Naas","arab":"بِسْمِ اللَّهِ الرَّحْمَٰنِ الرَّحِيمِ\n\nAyat 1\nقُلْ أَعُوذُ بِرَبِّ النَّاسِ\n\nAyat 2\nمَلِكِ النَّاسِ\n\nAyat 3\nإِلَٰهِ النَّاسِ\n\nAyat 4\nمِن شَرِّ الْوَسْوَاسِ الْخَنَّاسِ\n\nAyat 5\nالَّذِي يُوَسْوِسُ فِي صُدُورِ النَّاسِ\n\nAyat 6\nمِنَ الْجِنَّةِ وَالنَّاسِ","latin":"","arti":"Ayat 1: Katakanlah: Aku berlindung kepada Tuhan(yang memelihara dan menguasai) manusia\n\nAyat 2: Raja manusia\n\nAyat 3: Sembahan manusia\n\nAyat 4: Dari kejahatan (bisikan) setan yang biasa bersembunyi\n\nAyat 5: Yang membisikkan (kejahatan) ke dalam dada manusia\n\nAyat 6: Dari (golongan) jin dan manusia","jumlah":3,"kategori":"wazifah-sugro","sumber":"QS. An-Naas: 1-6","rincian":[{"ayat":1,"arab":"قُلْ أَعُوذُ بِرَبِّ النَّاسِ","arti":"Katakanlah: Aku berlindung kepada Tuhan(yang memelihara dan menguasai) manusia"},{"ayat":2,"arab":"مَلِكِ النَّاسِ","arti":"Raja manusia"},{"ayat":3,"arab":"إِلَٰهِ النَّاسِ","arti":"Sembahan manusia"},{"ayat":4,"arab":"مِن شَرِّ الْوَسْوَاسِ الْخَنَّاسِ","arti":"Dari kejahatan (bisikan) setan yang biasa bersembunyi"},{"ayat":5,"arab":"الَّذِي يُوَسْوِسُ فِي صُدُورِ النَّاسِ","arti":"Yang membisikkan (kejahatan) ke dalam dada manusia"},{"ayat":6,"arab":"مِنَ الْجِنَّةِ وَالنَّاسِ","arti":"Dari (golongan) jin dan manusia"}]},{"urutan":10,"id":"010-doa-al-matsurat","judul":"Do'a Al-Matsurat","arab":"أَصْبَحْنَا وَأَصْبَحَ (أَمْسَيْنَا وَأَمْسَى) الْمُلْكُ لِلّهَِ وَالْحَمْدُ لِلّهَِ لاَ شَرِيكَ لَهُ، لاَ إِلهَ إِلَّا هُوَ وَإِلَيْهِ النُّشُوْرُ (الْمَصِيْرُ)","latin":"","arti":"Kami berpagi hari (bersore hari) dan berpagi hari (bersore hari) pula kerjaan milik Allah. Segala puji bagi Allah, tiada sekutu bagi-Nya, tiada Tuhan melainkan Dia dan kepada-Nya tempat kembali.","jumlah":3,"kategori":"wazifah-sugro","sumber":"Al-Ma'tsurat Wazifah Sugro"},{"urutan":11,"id":"011-doa-al-matsurat","judul":"Do'a Al-Matsurat","arab":"أَصْبَحْنَا (أَمْسَيْنَا) عَلَى فِطْرَةِ اْلإِسْلاَمِ وَعَلَى كَلِمَةِ اْلإِخْلاَصِ وَعَلَى دِيْنِ نَبِيِّنَا مُحَمَّدٍ صَلَّى اللَّهُ عَلَيْهِ وَسَلَّمَ وَعَلَى مِلَّةِ أَبِيْنَا إِبْرَاهِيْمَ حَنِيْفًا مُسْلِمًا وَمَا كَانَ مِنَ الْمُشْرِكِيْنَ","latin":"","arti":"Di waktu pagi (sore) kami memegang agama Islam, kalimat ikhlas, agama Nabi kita Muhammad shallallahu ‘alaihi wa sallam, dan agama ayah kami Ibrahim, yang berdiri di atas jalan yang lurus, muslim dan tidak tergolong orang-orang musyrik.","jumlah":3,"kategori":"wazifah-sugro","sumber":"Al-Ma'tsurat Wazifah Sugro"},{"urutan":12,"id":"012-doa-al-matsurat","judul":"Do'a Al-Matsurat","arab":"اللَّهُمَّ إِنِّي أَصْبَحْتُ (أَمْسَيتُ) مِنْكَ فِي نِعْمَةٍ وَعَافِيَةٍ وَسِتْر فَأَتِمَّ عَلَيَّ نِعْمَتَكَ وَعَافِيَتَكَ وَسِتْرَكَ فِي الدُّنْيَا وَالآخِرَة","latin":"","arti":"Ya Allah, sesungguhnya aku berpagi hari (bersore hari) dari-Mu dalam kenikmatan, kesehatan dan perlindungan. Maka sempurnakannlah untukku kenikmatan, kesehatan dan perlindungan-Mu itu di dunia dan akhirat.","jumlah":3,"kategori":"wazifah-sugro","sumber":"Al-Ma'tsurat Wazifah Sugro"},{"urutan":13,"id":"013-doa-al-matsurat","judul":"Do'a Al-Matsurat","arab":"اللَّهُمَّ مَا أَصْبَحَ (أَمْسَ) بِيْ مِنْ نِعْمَةٍ أَوْ بِأَحَدٍ مِنْ خَلْقِكَ فَمِنْكَ وَحْدَكَ لاَ شَرِيْكَ لَكَ فَلَكَ الْحَمْدُ وَلَكَ الشُّكْرُ","latin":"","arti":"Ya Allah, kenikmatan yang aku atau salah seorang dari makhluk-Mu berpagi hari (bersore hari) dengannya adalah dari-Mu semata; tiada sekutu bagi-Mu. Maka bagi-Mu segala puji dan rasa syukur.","jumlah":3,"kategori":"wazifah-sugro","sumber":"Al-Ma'tsurat Wazifah Sugro"},{"urutan":14,"id":"014-doa-al-matsurat","judul":"Do'a Al-Matsurat","arab":"يَا رَبِّي لَكَ الْحَمْدُ كَمَا يَنْبَغِي لِجَلَالِ وَجْهِكَ وَلِعَظِيمِ سُلْطَانِكَ","latin":"","arti":"Ya Tuhanku, Segala puji bagiMu sebagaimana seyogyanya kemuliaan wajahMu dan keagungan kekuasaanMu.","jumlah":3,"kategori":"wazifah-sugro","sumber":"Al-Ma'tsurat Wazifah Sugro"},{"urutan":15,"id":"015-doa-al-matsurat","judul":"Do'a Al-Matsurat","arab":"رَضِيتُ بِاللَّهِ رَبًّا وَبِالْإِسْلَامِ دِينًا وَبِمُحَمَّدٍ نَبِيًّا وَرَسُولًا","latin":"","arti":"Aku ridha Allah sebagai Rabb, Islam sebagai agama, dan Muhammad sebagai Rasul.","jumlah":3,"kategori":"wazifah-sugro","sumber":"Al-Ma'tsurat Wazifah Sugro"},{"urutan":16,"id":"016-doa-al-matsurat","judul":"Do'a Al-Matsurat","arab":"سُبْحَانَ اللَّهِ وَبِحَمْدِهِ عَدَدَ خَلْقِهِ وَرِضَا نَفْسِهِ وَزِنَةَ عَرْشِهِ وَمِدَادَ كَلِمَاتِهِ","latin":"","arti":"Maha Suci Allah dan Segala Puji bagiNya, sebanyak bilangan makhlukNya, seridha diriNya, setimbangan ‘arsy-Nya, dan sebanyak tinta dari kata-kataNya.","jumlah":3,"kategori":"wazifah-sugro","sumber":"Al-Ma'tsurat Wazifah Sugro"},{"urutan":17,"id":"017-doa-al-matsurat","judul":"Do'a Al-Matsurat","arab":"بِسْمِ اللَّهِ الَّذِي لَا يَضُرُّ مَعَ اسْمِهِ شَيْءٌ فِي الْأَرْضِ وَلَا فِي السَّمَاءِ وَهُوَ السَّمِيعُ الْعَلِيمُ","latin":"","arti":"Dengan nama Allah Yang bersama NamaNya sesuatu apa pun tidak akan celaka baik di bumi dan di langit. Dialah Maha Medengar lagi maha Mengetahui.","jumlah":3,"kategori":"wazifah-sugro","sumber":"Al-Ma'tsurat Wazifah Sugro"},{"urutan":18,"id":"018-doa-al-matsurat","judul":"Do'a Al-Matsurat","arab":"اللَّهُمَّ إِنَّا نَعُوذُ بِكَ مِنْ أَنْ نُشْرِكَ بِكَ شَيْئًا نَعْلَمُهُ وَنَسْتَغْفِرُكَ لِمَا لَا نَعْلَمُه","latin":"","arti":"Ya Allah sesungguhnya kami berlindung kepadaMu dari menyekutukanMu dengan sesuatu yang kami ketahui, dan kami memohon ampunanMu dari apa-apa yang tidak kami ketahui.","jumlah":3,"kategori":"wazifah-sugro","sumber":"Al-Ma'tsurat Wazifah Sugro"},{"urutan":19,"id":"019-doa-al-matsurat","judul":"Do'a Al-Matsurat","arab":"أَعُوذُ بِكَلِمَاتِ اللَّهِ التَّامَّاتِ مِنْ شَرِّ مَا خَلَقَ","latin":"","arti":"Aku berlindung dengan kalimat Allah yang sempurna dari keburukan apa-apa yang Dia ciptakan.","jumlah":3,"kategori":"wazifah-sugro","sumber":"Al-Ma'tsurat Wazifah Sugro"},{"urutan":20,"id":"020-doa-al-matsurat","judul":"Do'a Al-Matsurat","arab":"اَللَّهُمَّ إِنِّي أَعُوْذُ بِكَ مِنَ الهَمِّ وَالْحَزَنِ وَأَعُوْذُ بِكَ مِنَ الْعَجْزِ وَالْكَسَلِ وَأَعُوْذُ بِكَ مِنَ الْجُبْنِ وَالبُخْلِ وَأَعُوْذُ بِكَ مِنْ غَلَبَةِ الدَّيْنِ وَقَهْرِ الرِّجَالِ","latin":"","arti":"Ya Allah, aku berlindung kepada-Mu dari rasa gelisah dan sedih, dari kelemahan dan kemalasan, dari sifat pengecut dan bakhil, dan dari lilitan hutang dan kesewenang-wenangan orang.","jumlah":3,"kategori":"wazifah-sugro","sumber":"Al-Ma'tsurat Wazifah Sugro"},{"urutan":21,"id":"021-doa-al-matsurat","judul":"Do'a Al-Matsurat","arab":"اَللَّهُمَّ عَافِنِي فِي بَدَنِي اَللَّهُمَّ عَافِنِي فِي سَمْعِي اَللَّهُمَّ عَافِنِي فِي بَصَرِي","latin":"","arti":"Ya Allah berikanlah kesehatan bagi badanku, bagi pendengaranku, bagi penglihatanku.","jumlah":3,"kategori":"wazifah-sugro","sumber":"Al-Ma'tsurat Wazifah Sugro"},{"urutan":22,"id":"022-doa-al-matsurat","judul":"Do'a Al-Matsurat","arab":"اَللَّهُمَّ إِنِّي أَعُوْذُ بِكَ مِنَ الْكُفْرِ وَالْفَقْرِوَأَعُوْذُ بِكَ مِنْ عَذَابِ الْقَبْرِلاَ إِلهَ إِلاَّ أَنْتَ","latin":"","arti":"Ya Allah sungguh aku berlindung kepadaMu dari kekufuran dan kefaqiran, Ya Allah sungguh aku berlindung kepadaMu dari azab kubur, tidak ada Ilah kecuali Engkau.","jumlah":3,"kategori":"wazifah-sugro","sumber":"Al-Ma'tsurat Wazifah Sugro"},{"urutan":23,"id":"023-doa-al-matsurat","judul":"Do'a Al-Matsurat","arab":"اَللّهُمَّ أَنْتَ رَبِّي لَا إلهَ إِلاَّ أَنْتَ خَلَقْتَنِي وَأَنَا عَبْدُكَ وَأَنَا عَلَى عَهْدِكَ وَوَعْدِكَ مَا اسْتَطَعْتُ أَعُوْذُ بِكَ مِنْ شَرِّ مَا صَنَعْتُ أَبُوْءُ لَكَ بِنِعْمَتِكَ عَلَيَّ وَأَبُوْءُ بِذَنْبِي فَاغْفِرْ لِي فَإِنَّهُ لاَ يَغْفِرُ الذُّنُوْبَ إِلاَّ أَنْتَ","latin":"","arti":"Ya Allah, Engkau Tuhanku, tiada Tuhan kecuali Engkau. Engkau ciptakan aku dan aku adalah hamba-Mu. Aku berada di atas janjiMu, semampuku. Aku berlindung kepadaMu dari keburukan perbuatanku. Aku mengakui banyaknya nikmat (yang Engkau anugerahkan) kepadaku dan aku mengakui dosa-dosaku, maka ampunilah aku. Karena sesungguhnya tiada yang mengampuni dosa-dosa melainkan Engkau","jumlah":3,"kategori":"wazifah-sugro","sumber":"Al-Ma'tsurat Wazifah Sugro"},{"urutan":24,"id":"024-doa-al-matsurat","judul":"Do'a Al-Matsurat","arab":"أَسْتَغْفِرُ اللَّهَ الْعَظِيمَ الَّذِي لَا إلهَ إِلَّا هُوَ الْحَيَّ الْقَيُّومَ وَأَتُوبُ إِلَيْهِ","latin":"","arti":"Aku memohon ampunan Allah Yang Tiada Tuhan melainkan Dia, Yang Maha Hidup dan Maha Mengurus (makhluk-Nya).","jumlah":3,"kategori":"wazifah-sugro","sumber":"Al-Ma'tsurat Wazifah Sugro"},{"urutan":25,"id":"025-doa-al-matsurat","judul":"Do'a Al-Matsurat","arab":"اَللّهُمَّ صَلِّ عَلَى سَيِّدِنَا مُحَمَّدٍ وَعَلَى آلِ سَيِّدِنَا مُحَمَّدٍ كَمَا صَلَّيْتَ عَلَى سَيِّدِنَا إِبْرَاهِيْمَ وَعَلَى آلِ سَيِّدِنَا إِبْرَاهِيْمَ وبَارِكْ عَلَى سَيِّدِنَا مُحَمَّدٍ وَعَلَى آلِ سَيِّدِنَا مُحَمَّدٍ كَمَا بَارَكْتَ عَلَى سَيِّدِنَا إِبْرَاهِيْمَ وَعَلَى آلِ سَيِّدِنَا إِبْرَاهِيْمَ فِي الْعَالَمِيْنَ إِنَّكَ حَمِيْدٌ مَجِيْدٌ","latin":"","arti":"Ya Allah berikanlah shalawat kepada Nabi Muhammad dan keluarga Nabi Muhammad, sebagaimana telah Engkau berikan kepada Nabi Ibrahim dan keluarga Nabi Ibrahim. Berikanlah barakah kepada Nabi Muhammad dan keluarga Nabi Muhammad, sebagaimana telah Engkau berikan kepada Nabi Ibrahim dan keluarga Nabi Ibrahim. Di alam Engkaulah Yang Maha Terpuji lagi Maha Mulia.","jumlah":10,"kategori":"wazifah-sugro","sumber":"Al-Ma'tsurat Wazifah Sugro"},{"urutan":26,"id":"026-doa-al-matsurat","judul":"Do'a Al-Matsurat","arab":"سُبْحَانَ اللَّهِ وَالْحَمْدُ لِلَّهِ وَلَا إِلَهَ إِلَّا اللَّهُ وَاللَّهُ أَكْبَرُ","latin":"","arti":"Maha Suci Allah, segala puji bagi Allah, tiada Tuhan melainkan Allah dan Allah Maha Besar.","jumlah":100,"kategori":"wazifah-sugro","sumber":"Al-Ma'tsurat Wazifah Sugro"},{"urutan":27,"id":"027-doa-al-matsurat","judul":"Do'a Al-Matsurat","arab":"لاَ إلهَ إِلَّا اللَّهُ وَحْدَهُ لَا شَرِيْكَ لَهُ، لَهُ الْمُلْكُ وَلَهُ الْحَمْدُ وَهُوَ عَلَى كُلِّ شَيْءٍ قَدِيْرٌ","latin":"","arti":"Tiada Tuhan melainkan Allah semata, yang tiada sekutu bagi-Nya, bagi-Nya kerajaan dan bagi-Nya segala puji, dan Dia berkuasa ata segala sesuatu.","jumlah":10,"kategori":"wazifah-sugro","sumber":"Al-Ma'tsurat Wazifah Sugro"},{"urutan":28,"id":"028-doa-al-matsurat","judul":"Do'a Al-Matsurat","arab":"سُبْحَانَكَ اللَّهُمَّ وَبِحَمْدِكَ أَشْهَدُ أَنْ لَّا إلهَ إِلَّا أَنْتَ أَسْتَغْفِرُكَ وَأَتُوْبُ إِلَيْكَ","latin":"","arti":"Maha suci Engkau ya Allah, dan segala puji bagi-Mu. Aku bersaksi bahwa tiada Tuhan melainkan Engkau, aku memohon ampunan dan bertaubat kepada-Mu","jumlah":3,"kategori":"wazifah-sugro","sumber":"Al-Ma'tsurat Wazifah Sugro"},{"urutan":29,"id":"029-doa-al-matsurat","judul":"Do'a Al-Matsurat","arab":"اَللَّهُمَّ صَلِّ عَلَى سَيِّدِنَا مُحَمَّدٍ عَبْدِكَ وَرَسُوْلِكَ النَّبِيِّ الأُمِّيِّ وَعَلَى آلِهِ وَصَحْبِهِ وَسَلِّمْ تَسْلِيْمًا عَدَدَ مَا أَحَاطَ بِهِ عِلْمُكَ وَخَطَّ بِهِ قَلَمُكَ وَأَحْصَاهُ كِتَابُكَ، وَارْضَ اللَّهُمَّ عَنْ سَادَاتِنَا أَبِيْ بَكْرٍ وَعُمَرَ وَعُثْمَانَ وَعَلِيْ، وَعَنِ الصَّحَابَةِ أَجْمَعِيْنَ، وَعَنِ التَّابِعِيْنَ وَتَابِعِيْهِمْ بِإِحْسَانٍ إِلَى يَوْمِ الدِّيْن سُبْحَانَ رَبِّك رَبِّ العِزَّةِ عَمَّا يَصِفُوْنَ، وَسَلَامٌ عَلَى المُرْسَلِيْنَ، وَالحَمْدُ لِلَّهِ رَبِّ العَالَمِيْنَ","latin":"","arti":"Ya Allah berikanlah shalawat kepada Nabi Muhammad; hamba-Mu, nabi-Mu, dan Rasul-Mu; Nabi yang ummi. Juga kepada keluarga dan para sahabatnya serta berilah keselamatan sebanyak yang terjangkau oleh ilmu-Mu yang tergores oleh pena-Mu, dan yang terangkum oleh kitab-Mu. Ridhailah ya Allah para pemimpin kami, Abu Bakar, Umar, Utsman, dan Ali, semua sahabat, semua tabi’in dan orang-orang yang mengikuti mereka sampai hari pembalasan. Maha suci Tuhanmu; Tuhan kemuliaan, dari apa-apa yang mereka sifatkan. Keselamatan semoga tercurah kepada para utusan dan segala puji bagi Allah, Tuhan semesta alam.","jumlah":3,"kategori":"wazifah-sugro","sumber":"Al-Ma'tsurat Wazifah Sugro"},{"urutan":30,"id":"030-ali-imran-26-27","judul":"Ali Imran","arab":"Ayat 26\nقُلِ اللَّهُمَّ مَٰلِكَ الْمُلْكِ تُؤْتِي الْمُلْكَ مَن تَشَآءُ وَتَنزِعُ الْمُلْكَ مِمَّن تَشَآءُ وَتُعِزُّ مَن تَشَآءُ وَتُذِلُّ مَن تَشَآءُ بِيَدِكَ الْخَيْرُ إِنَّكَ عَلَىٰ كُلِّ شَيْءٍ قَدِيرٌ\n\nAyat 27\nتُولِجُ الَّيْلَ فِي النَّهَارِ وَتُولِجُ النَّهَارَ فِي الَّيْلِ وَتُخْرِجُ الْحَيَّ مِنَ الْمَيِّتِ وَتُخْرِجُ الْمَيِّتَ مِنَ الْحَيِّ وَتَرْزُقُ مَن تَشَآءُ بِغَيْرِ حِسَابٍ","latin":"","arti":"Ayat 26: Katakanlah: \"Wahai Tuhan Yang mempunyai kerajaan, Engkau berikan kerajaan kepada orang yang Engkau kehendaki dan Engkau cabut kerajaan dari orang yang Engkau kehendaki. Engkau muliakan orang yang Engkau kehendaki dan Engkau hinakan orang yang Engkau kehendaki. Di tangan Engkaulah segala kebajikan.Sesungguhnya Engkau Maha Kuasa atas segala sesuatu.\n\nAyat 27: Engkau masukkan malam ke dalam siang dan Engkau masukkan siang ke dalam malam. Engkau keluarkan yang hidup dari yang mati, dan Engkau keluarkan yang mati dari yang hidup. Dan Engkau beri rezeki siapa yang Engkau kehendaki tanpa hisab (batas)","jumlah":1,"kategori":"wazifah-sugro","sumber":"QS. Ali Imran: 26-27","rincian":[{"ayat":26,"arab":"قُلِ اللَّهُمَّ مَٰلِكَ الْمُلْكِ تُؤْتِي الْمُلْكَ مَن تَشَآءُ وَتَنزِعُ الْمُلْكَ مِمَّن تَشَآءُ وَتُعِزُّ مَن تَشَآءُ وَتُذِلُّ مَن تَشَآءُ بِيَدِكَ الْخَيْرُ إِنَّكَ عَلَىٰ كُلِّ شَيْءٍ قَدِيرٌ","arti":"Katakanlah: \"Wahai Tuhan Yang mempunyai kerajaan, Engkau berikan kerajaan kepada orang yang Engkau kehendaki dan Engkau cabut kerajaan dari orang yang Engkau kehendaki. Engkau muliakan orang yang Engkau kehendaki dan Engkau hinakan orang yang Engkau kehendaki. Di tangan Engkaulah segala kebajikan.Sesungguhnya Engkau Maha Kuasa atas segala sesuatu."},{"ayat":27,"arab":"تُولِجُ الَّيْلَ فِي النَّهَارِ وَتُولِجُ النَّهَارَ فِي الَّيْلِ وَتُخْرِجُ الْحَيَّ مِنَ الْمَيِّتِ وَتُخْرِجُ الْمَيِّتَ مِنَ الْحَيِّ وَتَرْزُقُ مَن تَشَآءُ بِغَيْرِ حِسَابٍ","arti":"Engkau masukkan malam ke dalam siang dan Engkau masukkan siang ke dalam malam. Engkau keluarkan yang hidup dari yang mati, dan Engkau keluarkan yang mati dari yang hidup. Dan Engkau beri rezeki siapa yang Engkau kehendaki tanpa hisab (batas)"}]},{"urutan":31,"id":"031-doa-robithoh","judul":"Do'a Robithoh","arab":"اَللَّهُمَّ إِنَّ هَذَا إِقْبَالُ نَهَارِكَ (لَيْلِكَ) وَإِدْبَارُ لَيْلِكَ (نَهَارِكَ) وَأَصْوَاتُ دُعَاتِكَ فَاغْفِرْلِي","latin":"","arti":"Ya Allah, sesungguhnya ini adalah siang-Mu (malam-Mu) yang telah menjelang dan (malam-Mu) siang-Mu yang tengah berlalu serta suara-suara penyeru-Mu, maka ampunilah aku.","jumlah":3,"kategori":"wazifah-sugro","sumber":"Do'a Robithoh dalam susunan Al-Ma'tsurat Wazifah Sugro"},{"urutan":32,"id":"032-doa-robithoh","judul":"Do'a Robithoh","arab":"اَللّهُمَّ إِنَّكَ تَعْلَمُ أَنَّ هَذِهِ الْقُلُوْبَ، قَدِ اجْتَمَعَتْ عَلَى مَحَبَّتِكَ وَالْتَقَتْ عَلَى طَاعَتِكَ، وَتَوَحَّدَتْ عَلَى دَعْوَتِكَ وَتَعَاهَدَتْ عَلَى نُصْرَةِ شَرِيْعَتِكَ فَوَثِّقِ اللَّهُمَّ رَابِطَتَهَا، وَأَدِمْ وُدَّهَا، وَاهْدِهَا سُبُلَهَا وَامْلَأَهَا بِنُوْرِكَ الَّذِيْ لاَ يَخْبُوْا وَاشْرَحْ صُدُوْرَهَا بِفَيْضِ الْإِيْمَانِ بِكَ، وَجَمِيْلِ التَّوَكُّلِ عَلَيْكَ وَاَحْيِهَا بِمَعْرِفَتِكَ، وَأَمِتْهَا عَلَى الشَّهَادَةِ فِي سَبِيْلِكَ إِنَّكَ نِعْمَ الْمَوْلَى وَنِعْمَ النَّصِيْرِ. اَللَّهُمَّ أَمِيْنَ. وَصَلِّ اللَّهُمَّ عَلَى سَيِّدَنَا مُحَمَّدٍ وَعَلَى آلِهِ وَصَحْبِهِ وَسَلِّمَ.","latin":"","arti":"Ya Allah, sesungguhnya Engkau Maha Mengetahui bahawa hati-hati ini, telah berhimpun di atas dasar kecintaan terhadapmu, bertemu di atas ketaatan kepada-Mu dan bersatu bagi memikul beban dakwah-Mu, hati-hati ini telah mengikat persetiaan untuk menolong meninggikan syariat-Mu. Oleh itu, Ya Allah, Engkau perkukuhkan ikatannya dan Engkau kekalkan kemesraan hati-hati ini, tunjukilah hati-hati ini akan jalan yang sebenar,  serta penuhkanlah (piala) hati-hati ini dengan cahaya Rabbani-Mu yang tidak kunjung redup, lapangkanlah hati-hati dengan limpahan keimanan serta keindahan tawakkal kepada-Mu, hidup suburkanlah hati-hati ini dengan makrifat (pengenalan yang sebenarnya) tentang-Mu.  (Jika Engkau takdirkan kami mati) maka matikanlah hati-hati ini sebagai para syuhada dalam perjuangan agama-Mu. Sesungguhnya Engkau sebaik-baik pelindung dan sebaik-baik penolong.  Ya Allah perkenankanlah doa kami. Dan semoga shalawat serta salam selalu tercurah kepada Nabi Muhammad, keluarganya dan kepada semua sahabatnya.","jumlah":3,"kategori":"wazifah-sugro","sumber":"Do'a Robithoh dalam susunan Al-Ma'tsurat Wazifah Sugro"}];
const DOA_SHOLAT_RAW = {"id":"bacaan_doa_setelah_sholat_5_waktu","title":"Bacaan Doa Setelah Sholat 5 Waktu","language":"id","script":["arabic","latin_translation"],"version":"1.0.0","source_file":"BACAAN DOA SETELAH SHOLAT 5 WAKTU.docx","metadata":{"total_items":10,"description":"JSON terstruktur dari dokumen Bacaan Doa Setelah Sholat 5 Waktu. Field repeat menunjukkan jumlah pengulangan bacaan sesuai dokumen sumber.","extraction_note":"Teks Arab dan terjemahan diambil dari dokumen sumber dan dibersihkan seperlunya untuk validitas JSON.","audio_note":"Seluruh bacaan menggunakan konfigurasi runtime TTS yang seragam. Audio tidak disimpan sebagai URL tetap, melainkan digenerate oleh aplikasi menggunakan engine edge_tts dengan suara laki-laki Arab Saudi ar-SA-HamedNeural. Disarankan hasil audio dicache di perangkat/server.","audio_sources":[{"name":"edge_tts","voice":"ar-SA-HamedNeural","gender":"male","language":"ar-SA","usage":"Generate audio bacaan Arab saat runtime"}],"audio_runtime_config":{"type":"runtime_tts","engine":"edge_tts","voice":"ar-SA-HamedNeural","gender":"male","language":"ar-SA","generate_at_runtime":true,"cache_recommended":true}},"items":[{"id":"membaca_istighfar","category":"doa_dzikir","title":"Membaca Istighfar","repeat":3,"texts":[{"id":"membaca_istighfar_01","arabic":"أَسْتَغْفِرُ اللهَ الْعَظِـيْمِ الَّذِيْ لَااِلَهَ اِلَّا هُوَ الْحَيُّ الْقَيُّوْمُ وَأَتُوْبُ إِلَيْهِ","translation":"Aku memohon ampunan kepada Allah yang Maha Agung, yang tiada Tuhan selain Dia, Maha Hidup, Maha Kuasa, dan kepada-Nya aku bertaubat.","audio":{"type":"runtime_tts","engine":"edge_tts","voice":"ar-SA-HamedNeural","gender":"male","language":"ar-SA","generate_at_runtime":true,"cache_recommended":true}},{"id":"membaca_istighfar_02","arabic":"أَسْتَغْفِرُ اللهَ العَظِيمَ، لِي وَلِوَالِدَيَّ، وَلِأَصْحَابِ الْحُقُوقِ الْوَاجِبَاتِ عَلَيَّ، وَلِجَمِيْعِ المُسْلِمِيْنَ والمُسْلِماتِ والمُؤْمِنِيْنَ والمُؤْمِناتِ، اَلأَحْياءِ مِنْهُمْ والأَمْوَاتِ","translation":"Aku mohon ampunan kepada Allah yang Maha Agung, ampunan untukku, kedua orang tuaku, orang-orang yang berhubungan denganku, dan aku mohon ampunan untuk semua muslimin, muslimat, mukminin, dan mukminat, baik yang masih hidup maupun yang sudah meninggal.","audio":{"type":"runtime_tts","engine":"edge_tts","voice":"ar-SA-HamedNeural","gender":"male","language":"ar-SA","generate_at_runtime":true,"cache_recommended":true}}]},{"id":"membaca_tahlil","category":"doa_dzikir","title":"Membaca Tahlil","repeat":3,"arabic":"لَا إِلٰهَ إِلَّا اللهُ وَحْدَهُ لَا شَرِيْكَ لَهُ، لَهُ الْمُلْكُ وَلَهُ الْحَمْدُ، يُحْيِيْ وَيُمِيْتُ، وَهُوَ عَلَى كُلِّ شَيْءٍ قَدِيْرٌ","translation":"Tiada tuhan selain Allah yang Esa, tiada sekutu bagi-Nya miliknya kerajaan dan pujian, (Ia) pula yang menghidupkan dan mematikan. Dan Dia Maha kuasa atas segala sesuatu.","audio":{"type":"runtime_tts","engine":"edge_tts","voice":"ar-SA-HamedNeural","gender":"male","language":"ar-SA","generate_at_runtime":true,"cache_recommended":true}},{"id":"mohon_perlindungan_dari_api_neraka","category":"doa_dzikir","title":"Mohon Perlindungan Dari Api Neraka","repeat":3,"arabic":"اَللّهُمَّ اَجِرْنَا مِنَ النَّارِ","translation":"Ya allah, jauhkan kami dari api neraka.","audio":{"type":"runtime_tts","engine":"edge_tts","voice":"ar-SA-HamedNeural","gender":"male","language":"ar-SA","generate_at_runtime":true,"cache_recommended":true}},{"id":"mohon_keselamatan","category":"doa_dzikir","title":"Mohon Keselamatan","repeat":1,"arabic":"اَللَّهُمَّ أَنْتَ السَّلاَمُ، وَمِنْكَ السَّلَامُ، وَإِلَيْكَ يَعُوْدُ السَّلَامُ، فَحَيِّنَارَبَّنَا بِالسَّلَامِ، وَاَدْخِلْنَا الْـجَنَّةَ دَارَ السَّلَامِ، تَبَارَكْتَ رَبَّنَا وَتَعَالَيْتَ يَا ذَاالْـجَلَالِ وَاْلإِكْرَام","translation":"Ya Allah, Engkau sumber keselamatan dan dari pada-Mulah datangnya keselamatan dan kepada-Mu kembalinya keselamatan. Maka hidupkanlah kami wahai Tuhan, dengan selamat sejahtera dan masukkanlah kami ke dalam surga negeri keselamatan. Maha banyak anugerahMu dan Maha Tinggi Engkau Wahai Tuhan yang memiliki keagungan dan kehormatan.","audio":{"type":"runtime_tts","engine":"edge_tts","voice":"ar-SA-HamedNeural","gender":"male","language":"ar-SA","generate_at_runtime":true,"cache_recommended":true}},{"id":"doa_berserah_kepada_allah_swt","category":"doa_dzikir","title":"Doa Berserah Kepada Allah SWT","repeat":1,"arabic":"اللَّهُمَّ لَا مَانِعَ لِمَا أَعْطَيْتَ، وَلَا مُعْطِيَ لِمَا مَنَعْتَ، وَلَا رَادَّ لِمَا قَضَيْتَ، وَلَا يَنْفَعُ ذَا الْجَدِّ مِنْكَ الْجَدُّ","translation":"Ya Allah, tidak ada yang dapat menghalangi apa yang Engkau berikan, dan tidak ada yang dapat memberi apa yang Engkau cegah, dan tidak ada yang dapat menolak apa yang telah Engkau tetapkan, serta tidak berguna kekayaan dan kekuasaan di sisi-Mu.","audio":{"type":"runtime_tts","engine":"edge_tts","voice":"ar-SA-HamedNeural","gender":"male","language":"ar-SA","generate_at_runtime":true,"cache_recommended":true}},{"id":"mohon_pertolongan_agar_menjadi_hamba_yang_bersyukur","category":"doa_dzikir","title":"Mohon Pertolongan Agar Menjadi Hamba yang bersyukur","repeat":1,"arabic":"اللَّهُمَّ أَعِنِّي عَلَى ذِكْرِكَ وَشُكْرِكَ وَحُسْنِ عِبَادَتِكَ","translation":"Ya Allah, Bantulah aku untuk senantiasa berdzikir dan bersyukur kepada- Mu, serta selalu beribadah dengan baik kepadamu.","audio":{"type":"runtime_tts","engine":"edge_tts","voice":"ar-SA-HamedNeural","gender":"male","language":"ar-SA","generate_at_runtime":true,"cache_recommended":true}},{"id":"membaca_al_fatihah","category":"quran","title":"Membaca Al Fatihah","repeat":1,"verses":[{"ayah":1,"arabic":"بِسْمِ اللَّهِ الرَّحْمَٰنِ الرَّحِيمِ","translation":"Dengan menyebut nama Allah Yang Maha Pengasih lagi Maha Penyayang.","audio":{"type":"runtime_tts","engine":"edge_tts","voice":"ar-SA-HamedNeural","gender":"male","language":"ar-SA","generate_at_runtime":true,"cache_recommended":true}},{"ayah":2,"arabic":"الْحَمْدُ لِلَّهِ رَبِّ الْعَالَمِينَ","translation":"Segala puji bagi Allah, Tuhan seluruh alam.","audio":{"type":"runtime_tts","engine":"edge_tts","voice":"ar-SA-HamedNeural","gender":"male","language":"ar-SA","generate_at_runtime":true,"cache_recommended":true}},{"ayah":3,"arabic":"الرَّحْمَٰنِ الرَّحِيمِ","translation":"Yang Maha Pengasih lagi Maha Penyayang.","audio":{"type":"runtime_tts","engine":"edge_tts","voice":"ar-SA-HamedNeural","gender":"male","language":"ar-SA","generate_at_runtime":true,"cache_recommended":true}},{"ayah":4,"arabic":"مَالِكِ يَوْمِ الدِّينِ","translation":"Pemilik hari pembalasan.","audio":{"type":"runtime_tts","engine":"edge_tts","voice":"ar-SA-HamedNeural","gender":"male","language":"ar-SA","generate_at_runtime":true,"cache_recommended":true}},{"ayah":5,"arabic":"إِيَّاكَ نَعْبُدُ وَإِيَّاكَ نَسْتَعِينُ","translation":"Hanya kepada Engkaulah kami menyembah dan hanya kepada Engkaulah kami mohon pertolongan.","audio":{"type":"runtime_tts","engine":"edge_tts","voice":"ar-SA-HamedNeural","gender":"male","language":"ar-SA","generate_at_runtime":true,"cache_recommended":true}},{"ayah":6,"arabic":"اهْدِنَا الصِّرَاطَ الْمُسْتَقِيمَ","translation":"Tunjukilah kami jalan yang lurus.","audio":{"type":"runtime_tts","engine":"edge_tts","voice":"ar-SA-HamedNeural","gender":"male","language":"ar-SA","generate_at_runtime":true,"cache_recommended":true}},{"ayah":7,"arabic":"صِرَاطَ الَّذِينَ أَنْعَمْتَ عَلَيْهِمْ غَيْرِ الْمَغْضُوبِ عَلَيْهِمْ وَلَا الضَّالِّينَ","translation":"(Yaitu) jalan orang-orang yang telah Engkau beri nikmat kepada mereka; bukan jalan mereka yang dimurkai dan bukan pula jalan mereka yang sesat.","audio":{"type":"runtime_tts","engine":"edge_tts","voice":"ar-SA-HamedNeural","gender":"male","language":"ar-SA","generate_at_runtime":true,"cache_recommended":true}}],"source":"QS Al-Fatihah","bookmarkable":true,"audio":{"type":"remote_mp3_playlist","provider":"Al Quran Cloud CDN","reciter":"Mishary Rashid Alafasy","edition":"ar.alafasy","urls":["https://cdn.islamic.network/quran/audio/128/ar.alafasy/1.mp3","https://cdn.islamic.network/quran/audio/128/ar.alafasy/2.mp3","https://cdn.islamic.network/quran/audio/128/ar.alafasy/3.mp3","https://cdn.islamic.network/quran/audio/128/ar.alafasy/4.mp3","https://cdn.islamic.network/quran/audio/128/ar.alafasy/5.mp3","https://cdn.islamic.network/quran/audio/128/ar.alafasy/6.mp3","https://cdn.islamic.network/quran/audio/128/ar.alafasy/7.mp3"]}},{"id":"membaca_ayat_qursi","category":"quran","title":"Membaca Ayat Qursi","repeat":1,"arabic":"اللَّهُ لَا إِلَٰهَ إِلَّا هُوَ الْحَيُّ الْقَيُّومُ ۚ لَا تَأْخُذُهُ سِنَةٌ وَلَا نَوْمٌ ۚ لَهُ مَا فِي السَّمَاوَاتِ وَمَا فِي الْأَرْضِ ۗ مَنْ ذَا الَّذِي يَشْفَعُ عِنْدَهُ إِلَّا بِإِذْنِهِ ۚ يَعْلَمُ مَا بَيْنَ أَيْدِيهِمْ وَمَا خَلْفَهُمْ ۖ وَلَا يُحِيطُونَ بِشَيْءٍ مِنْ عِلْمِهِ إِلَّا بِمَا شَاءَ ۚ وَسِعَ كُرْسِيُّهُ السَّمَاوَاتِ وَالْأَرْضَ ۖ وَلَا يَئُودُهُ حِفْظُهُمَا ۚ وَهُوَ الْعَلِيُّ الْعَظِيمُ","translation":"Allah, tidak ada Tuhan yang berhak disembah selain Dia, Yang Maha Hidup, Yang terus-menerus mengurus makhluk-Nya. Dia tidak mengantuk dan tidak tidur. Milik-Nya apa yang ada di langit dan apa yang ada di bumi. Tidak ada yang dapat memberi syafaat di sisi-Nya tanpa izin-Nya. Dia mengetahui apa yang di hadapan mereka dan apa yang di belakang mereka, sedangkan mereka tidak mengetahui sesuatu apa pun dari ilmu-Nya kecuali apa yang Dia kehendaki. Kursi-Nya meliputi langit dan bumi. Dan Dia tidak merasa berat memelihara keduanya. Dan Dia Maha Tinggi lagi Maha Agung.","surah":"Al-Baqarah","ayah":255,"source":"QS Al-Baqarah:255","bookmarkable":true,"audio":{"type":"runtime_tts","engine":"edge_tts","voice":"ar-SA-HamedNeural","gender":"male","language":"ar-SA","generate_at_runtime":true,"cache_recommended":true}},{"id":"dzikir_tasbih_tahmid_takbir","category":"dzikir","title":"Berdzikir Tasbih, Tahmid, dan Takbir","repeat":1,"subsections":[{"title":"Membaca kalimat Tasbih 33 kali","repeat":33,"id":"dzikir_1_membaca_kalimat_tasbih_33_kali","category":"dzikir","texts":[{"arabic":"اِلَهَنَا يَارَبَّناَ أَنْتَ مَوْلنَا : سُبْحَنَ اللهِ","translation":"Maha Suci Allah","audio":{"type":"runtime_tts","engine":"edge_tts","voice":"ar-SA-HamedNeural","gender":"male","language":"ar-SA","generate_at_runtime":true,"cache_recommended":true}},{"arabic":"سُبْحَانَ اللهِ وَبِحَمْدِهِ دَائِمًا اَبَدًا","translation":"Maha Suci Allah dan segala puji bagi-Nya, senantiasa selama-lamanya.","audio":{"type":"runtime_tts","engine":"edge_tts","voice":"ar-SA-HamedNeural","gender":"male","language":"ar-SA","generate_at_runtime":true,"cache_recommended":true}}]},{"title":"Membaca kalimat Tahmid 33 kali","repeat":33,"id":"dzikir_2_membaca_kalimat_tahmid_33_kali","category":"dzikir","texts":[{"arabic":"الْحَمْدُلِلهِ","translation":"Segala Puji Bagi Allah","audio":{"type":"runtime_tts","engine":"edge_tts","voice":"ar-SA-HamedNeural","gender":"male","language":"ar-SA","generate_at_runtime":true,"cache_recommended":true}},{"arabic":"اْلحَمْدُ لله رَبِّ اْلعَالَمِيْنَ عَلٰى كُلِّ حَالٍ وَنِعْمَةٍ","translation":"Segala puji bagi Allah, Tuhan semesta alam, dalam segala keadaan dan atas setiap nikmat.","audio":{"type":"runtime_tts","engine":"edge_tts","voice":"ar-SA-HamedNeural","gender":"male","language":"ar-SA","generate_at_runtime":true,"cache_recommended":true}}]},{"title":"Membaca kalimat Takbir 33 kali","repeat":33,"id":"dzikir_3_membaca_kalimat_takbir_33_kali","category":"dzikir","texts":[{"arabic":"اللهُ اَكْبَرُ","translation":"Allah Maha Besar","audio":{"type":"runtime_tts","engine":"edge_tts","voice":"ar-SA-HamedNeural","gender":"male","language":"ar-SA","generate_at_runtime":true,"cache_recommended":true}},{"arabic":"اَللهُ اَكْبَرُ كَبِيْرًا وَاْلحَمْدُ للهِ كَثِيرًا وَسُبْحَانَ اللهِ بُكْرَةً وَاَصِيْلاً ، لاَاِلٰهَ اِلاَّ اللهُ وَحْدَهُ لاَشَرِيْكَ لَهُ لَهُ اْلمُلْكُ وَلَهُ اْلحَمْدُ يُحْيِيْ وَيُمِيْتُ وَهُوَ عَلٰى كُلِّ شَيْئٍ قَدِيْرٌ ، وَلاَ حَوْلَ وَلاَقُوَّةَ اِلاَّ بِااللهِ اْلعَلِيِّ اْلعَظِيْمِ\nاَسْتًغْفِرُاللهَ اْلعَظِيْم\nاَفْضَلُ الذِّكْرِ فَاعْلَمْ اَنَّهُ – لاَاِلٰهَ اِلاَّ اللهُ\nلاَاِلٰهَ اِلاَّ اللهُ مُحَمَّدٌ رَسُوْلُ اللهِ صَلَّى اللهُ عَلَيْهِ وَسَلَّمَ ، كَلِمَةُ اْلحَقُِّ عَلَيْهَا نَحْيٰ وَعَلَيْهَا نَمُوْتُ وَعَلَيْهَا نُبْعَثُ اِنْ شَاءَاللهُ تَعَالٰى مِنَ اْلاٰمِنِيْنَ","translation":"Allah Maha Besar dengan segala kebesaran, segala puji bagi Allah dengan pujian yang banyak, dan Maha Suci Allah pada waktu pagi dan petang. Tiada Tuhan selain Allah Yang Maha Esa, tiada sekutu bagi-Nya. Bagi-Nya segala kekuasaan dan bagi-Nya segala puji. Dia yang menghidupkan dan mematikan, dan Dia Maha Kuasa atas segala sesuatu. Tiada daya dan upaya kecuali dengan pertolongan Allah Yang Maha Tinggi lagi Maha Agung. Aku memohon ampun kepada Allah Yang Maha Agung. Ketahuilah bahwa dzikir yang paling utama adalah: Tiada Tuhan selain Allah. Tiada Tuhan selain Allah, Nabi Muhammad adalah utusan Allah, semoga Allah melimpahkan shalawat dan keselamatan kepadanya. Kalimat kebenaran yang di atasnya kami hidup, di atasnya kami mati, dan di atasnya kami akan dibangkitkan, insya Allah, tergolong orang-orang yang aman.","audio":{"type":"runtime_tts","engine":"edge_tts","voice":"ar-SA-HamedNeural","gender":"male","language":"ar-SA","generate_at_runtime":true,"cache_recommended":true}}]}]},{"id":"doa_penutup","category":"doa","title":"Doa","repeat":1,"items":[{"id":"doa_penutup_01","category":"doa","title":"Doa Penutup 1","repeat":1,"arabic":"أَعُوذُ بِاللَّهِ مِنَ الشَّيْطَانِ الرَّجِيمِ، بِسْمِ اللهِ الرَّحْمنِ الرَّحِيمِ\nالحَمْدُ لِلهِ رَبِّ الْعَالَمِيْنَ، حَمْداً يُوَافِي نِعَمَهُ وَيُكَافِئُ مَزِيْدَهُ","translation":"Segala puji bagi Allah, Tuhan semesta alam, pujian yang sesuai dengan segala nikmat-Nya dan sebanding dengan tambahan karunia-Nya.","audio":{"type":"runtime_tts","engine":"edge_tts","voice":"ar-SA-HamedNeural","gender":"male","language":"ar-SA","generate_at_runtime":true,"cache_recommended":true}},{"id":"doa_penutup_02","category":"doa","title":"Doa Penutup 2","repeat":1,"arabic":"يَا رَبَّنَا لَكَ الْحَمْدُ كَمَا يَنْبَغِيْ لِجَلَالِ وَجْهِكَ الْكَرِيْمِ وَعَظِيْمِ سُلْطَانِكَ","translation":"Ya Tuhan kami, bagi-Mu segala puji dan syukur sebagaimana layaknya bagi keagungan Wajah-Mu dan kebesaran kekuasaan-Mu.","audio":{"type":"runtime_tts","engine":"edge_tts","voice":"ar-SA-HamedNeural","gender":"male","language":"ar-SA","generate_at_runtime":true,"cache_recommended":true}},{"id":"doa_penutup_03","category":"doa","title":"Doa Penutup 3","repeat":1,"arabic":"اَللّٰهُمَّ صَلِّ عَلَى سَيِّدِنَا مُحَمَّدٍ، صَلاَةً تُنْجِيْنَا بِهَا مِنْ جَمِيْعِ الْأَهْوَالِ وَالْاٰفَاتِ، وَتَقْضِيْ لَنَا بِهَا جَمِيعَ الْحَاجَاتِ، وَتُطَهِّرُنَا بِهَا مِنْ جَمِيْعِ السَيِّئَاتِ، وَتَرْفَعُنَا بِهَا عِنْدَكَ أَعْلَى الدَّرَجَاتِ، وَتُبَلِّغُنَا بِهَـــا أَقْصَى الْغَايَاتِ، مِنْ جَمِيْعِ الْخَيْرَاتِ فِى الْحَيَاةِ وَبَعْدَ الْمَمَـــاتِ","translation":"Ya Allah, limpahkanlah shalawat kepada junjungan kami Nabi Muhammad, suatu shalawat yang dengannya Engkau menyelamatkan kami dari segala ketakutan dan musibah, yang dengannya Engkau memenuhi seluruh hajat kami, yang dengannya Engkau menyucikan kami dari segala dosa, yang dengannya Engkau mengangkat derajat kami setinggi-tingginya di sisi-Mu, dan yang dengannya Engkau sampaikan kami kepada tujuan tertinggi dari semua kebaikan, baik di kehidupan dunia maupun setelah kematian.","audio":{"type":"runtime_tts","engine":"edge_tts","voice":"ar-SA-HamedNeural","gender":"male","language":"ar-SA","generate_at_runtime":true,"cache_recommended":true}},{"id":"doa_penutup_04","category":"doa","title":"Doa Penutup 4","repeat":1,"arabic":"اَللَّهُمَّ إِنَّا نَسْأَلُكَ سَلَامَةً فِي الدِّينِ، وَعَافِيَةً فِي الْجَسَدِ، وَزِيَادَةً فِي الْعِلْمِ، وَبَرَكَةً فِي الرِّزْقِ، وَتَوْبَةً قَبْلَ الْمَوْتِ، وَرَحْمَةً عِنْدَ الْمَوْتِ، وَمَغْفِرَةً بَعْدَ الْمَوْتِ\nاَللهُمَّ هَوِّنْ عَلَيْنَا فِىْ سَكَرَاتِ الْمَوْتِ، وَالنَّجَاةَ مِنَ النَّارِ، وَالْعَفْوَ عِنْدَ الْحِسَابِ","translation":"Ya Allah, kami memohon kepada-Mu keselamatan dalam agama. Kami memohon kepada-Mu kesehatan jasmani, tambahan ilmu, keberkahan dalam rezeki, taubat sebelum mati, rahmat saat kematian, dan ampunan setelah kematian. Ya Allah, ringankanlah bagi kami sakaratul maut, selamatkan kami dari neraka, dan berilah ampunan saat perhitungan amal.","audio":{"type":"runtime_tts","engine":"edge_tts","voice":"ar-SA-HamedNeural","gender":"male","language":"ar-SA","generate_at_runtime":true,"cache_recommended":true}},{"id":"doa_penutup_05","category":"doa","title":"Doa Penutup 5","repeat":1,"arabic":"رَبَّنَا تَقَبَّلْ مِنَّا صَلَاتَنَا وَصِيَامَنَا وَقِيَامَنَا وَتَخَشُّعَنَا وَتَضَرُّعَنَا وَتَعَبُّدَنَا وَتَمِّمْ تَقْصِيْرَنَا يَا أَللَّهُ يَاأَرْحَمَ الرَّاحِمِيْنَ","translation":"Ya Allah, terimalah shalat kami, puasa kami, qiyam kami, kekhusyukan kami, doa-doa kami, dan penghambaan kami. Sempurnakanlah kekurangan kami, wahai Allah, wahai Dzat Yang Maha Pengasih dari semua yang mengasihi.","audio":{"type":"runtime_tts","engine":"edge_tts","voice":"ar-SA-HamedNeural","gender":"male","language":"ar-SA","generate_at_runtime":true,"cache_recommended":true}},{"id":"doa_penutup_06","category":"doa","title":"Doa Penutup 6","repeat":1,"arabic":"اَللَّهُمَّ إِنَّا نَسْأَلُكَ مِنْ خَيْرِ مَا سَأَلَكَ مِنْهُ سَيِّدِنَا مُحَمَّدٌ\nوَنَعُوذُ بِكَ مِنْ شَرِّ مَا اسْتَعَاذَ مِنْهُ سَيِّدِنَا مُحَمَّدٌ","translation":"Ya Allah, aku memohon kepada-Mu kebaikan sebagaimana yang dimohonkan oleh Nabi-Mu Muhammad. Dan aku berlindung kepada-Mu dari keburukan sebagaimana yang dimintakan perlindungan darinya oleh Nabi-Mu Muhammad.","audio":{"type":"runtime_tts","engine":"edge_tts","voice":"ar-SA-HamedNeural","gender":"male","language":"ar-SA","generate_at_runtime":true,"cache_recommended":true}},{"id":"doa_penutup_07","category":"doa","title":"Doa Penutup 7","repeat":1,"arabic":"رَبَّنَا ضَلَمْنَا أَنْفُسَنَا وَإِنْ لَمْ تَغْفِرْ لَنَا وَتَرْ حَمْنَا لَنَكُوْ نَنَّ مِنَ الْخَا سِرِ يْنَ","translation":"Ya Tuhan kami, kami telah menzalimi diri kami sendiri, dan jika Engkau tidak mengampuni kami dan merahmati kami, niscaya kami termasuk orang-orang yang merugi.","audio":{"type":"runtime_tts","engine":"edge_tts","voice":"ar-SA-HamedNeural","gender":"male","language":"ar-SA","generate_at_runtime":true,"cache_recommended":true}},{"id":"doa_penutup_08","category":"doa","title":"Doa Penutup 8","repeat":1,"arabic":"رَبَّنَا لَا تُزِغْ قُلُوبَنَا بَعْدَ إِذْ هَدَيْتَنَا وَهَبْ لَنَا مِن لَّدُنْكَ رَحْمَةً، إِنَّكَ أَنْتَ الْوَهَّابُ","translation":"Ya Tuhan kami, janganlah Engkau palingkan hati kami setelah Engkau memberi petunjuk kepada kami, dan karuniakanlah kepada kami rahmat dari sisi-Mu. Sungguh Engkau Maha Pemberi.","audio":{"type":"runtime_tts","engine":"edge_tts","voice":"ar-SA-HamedNeural","gender":"male","language":"ar-SA","generate_at_runtime":true,"cache_recommended":true}},{"id":"doa_penutup_09","category":"doa","title":"Doa Penutup 9","repeat":1,"arabic":"أَللَّهُمَّ إِنَّا نَسْاَلُكَ إِيْمَانًا دَاِئمًا، وَنَسْأَلُكَ قَلْبًا خَاشِعًا، وَنَسْأَلُكَ عِلْمًا نَافِعًا، وَنَسْأَلُكَ يَقِيْنًا صَادِقًا، وَنَسْأَلُكَ عَمَلًا صَالِحًا، وَنَسْأَلُكَ دِيْنًا قَيِّمًا، وَنَسْأَلُكَ خَيْرًا كَثِيْرًا، وَنَسْأَلُكَ الْعَفْوَ وَالْعَافِيَةَ، وَنَسْأَلُكَ تَمَامَ الْعَافِيَةِ، وَنَسْأَلُكَ الشُّكْرَ عَلَى الْعَافِيَةِ،\nوَنَسْأَلُكَ الْغِنَى عَنِ النَّاسِ","translation":"Ya Allah, kami memohon kepada-Mu iman yang teguh, hati yang khusyuk, ilmu yang bermanfaat, keyakinan yang benar, amal yang saleh, agama yang lurus, banyak kebaikan, ampunan dan keselamatan, kesempurnaan nikmat sehat, syukur atas kesehatan, dan kecukupan dari bergantung pada manusia.","audio":{"type":"runtime_tts","engine":"edge_tts","voice":"ar-SA-HamedNeural","gender":"male","language":"ar-SA","generate_at_runtime":true,"cache_recommended":true}},{"id":"doa_penutup_10","category":"doa","title":"Doa Penutup 10","repeat":1,"arabic":"اَللَّهُمَّ إِنِّي أُشْهِدُكَ أَنِّي رَاضِيَةٌ عَنْ اَوْلاَدَناَ تَمَامَ الرِّضَا وَكَمَالَ الرِّضَا وَمُنْتَهَى الرِّضَا، فَاللَّهُمَّ أَنْزِلْ رِضْوَانَكَ عَلَيْهِمْ بِرِضَائِي عَنْهُمْ","translation":"Ya Allah, aku bersaksi kepada-Mu bahwa aku ridha kepada anakku laki-laki/perempuanku dengan keridhaan yang sempurna, penuh, dan tiada batas. Maka ya Allah, turunkanlah keridhaan-Mu kepada mereka karena aku telah ridha kepada mereka.","audio":{"type":"runtime_tts","engine":"edge_tts","voice":"ar-SA-HamedNeural","gender":"male","language":"ar-SA","generate_at_runtime":true,"cache_recommended":true}},{"id":"doa_penutup_11","category":"doa","title":"Doa Penutup 11","repeat":1,"arabic":"اَللَّهُمَّ اجْعَلْ أَوْلَادَنَا كُلَّهُمْ صَالِحًا وَطَاعَةً، وَعُمُرَهُمْ طَوِيلًا، وَارْزُقْهُمْ رِزْقًا وَاسِعًا، وَعُقُولَهُمْ ذَكِيَّةً، وَقُلُوبَهُمْ نُورًا، وَعُلُومَهُمْ كَثِيرَةً نَافِعَةً، وَأَجْسَادَهُمْ صِحَّةً وَعَافِيَةً، بِرَحْمَتِكَ يَا أَرْحَمَ الرَّاحِمِينَ","translation":"Ya Allah, jadikanlah semua anak-anak kami sebagai anak yang shalih, taat beribadah, panjang umur, luas rezekinya, cerdas akalnya, bercahaya hatinya, banyak dan bermanfaat ilmunya, serta sehat dan kuat jasadnya. Dengan rahmat-Mu, wahai Dzat Yang Maha Penyayang dari semua yang memiliki sifat kasih sayang.","audio":{"type":"runtime_tts","engine":"edge_tts","voice":"ar-SA-HamedNeural","gender":"male","language":"ar-SA","generate_at_runtime":true,"cache_recommended":true}},{"id":"doa_penutup_12","category":"doa","title":"Doa Penutup 12","repeat":1,"arabic":"اَللَّهُمَّ اجْعَلْ أَوْلَادَنَا أَوْلَادًا صَالِحِيْنَ حَافِظِيْنَ لِلْقُرْآنِ وَالسُّنَّةِ، فُقَهَاءَ فِى الدِّيْنِ مُبَارَكًا حَيَاتُهُمْ فِى الدُّنْيَا وَالْأَخِرَة","translation":"Ya Allah, jadikanlah anak-anak kami anak yang sholih sholihah, orang-orang yang hafal Al-Qur’an dan Sunnah, orang-orang yang faham dalam agama dibarokahi kehidupan mereka didunia dan di akhirat","audio":{"type":"runtime_tts","engine":"edge_tts","voice":"ar-SA-HamedNeural","gender":"male","language":"ar-SA","generate_at_runtime":true,"cache_recommended":true}},{"id":"doa_penutup_13","category":"doa","title":"Doa Penutup 13","repeat":1,"arabic":"اللَّهُمَّ اجْعَلْنَا وَأَوْلَادَنَا وَأَزْوَاجَنَا وَتَلَامِيذَنَا وَجَمَاعَتَنَا مِنْ أَهْلِ الْعِلْمِ وَأَهْلِ الْخَيْرِ، وَلَا تَجْعَلْنَا وَإِيَّاهُمْ مِنْ أَهْلِ الشَّرِّ وَالضَّيْرِ","translation":"Ya Allah, jadikanlah kami, anak-anak kami, pasangan-pasangan kami, para murid kami, dan seluruh kelompok kami termasuk dalam golongan orang-orang yang berilmu dan orang-orang yang berbuat kebaikan. Dan janganlah Engkau jadikan kami dan mereka termasuk dalam golongan orang-orang yang jahat dan orang-orang yang membawa mudarat.","audio":{"type":"runtime_tts","engine":"edge_tts","voice":"ar-SA-HamedNeural","gender":"male","language":"ar-SA","generate_at_runtime":true,"cache_recommended":true}},{"id":"doa_penutup_14","category":"doa","title":"Doa Penutup 14","repeat":1,"arabic":"رَبِّ اجْعَلْنِي مُقِيمَ الصَّلاةِ وَمِنْ ذُرِّيَّتِي رَبَّنَا وَتَقَبَّلْ دُعَاءِ","translation":"Ya Allah Ya Tuhanku, jadikanlah aku dan anak cucuku orang-orang yang mendirikan shalat. Ya Tuhanku perkenankanlah do'aku.","audio":{"type":"runtime_tts","engine":"edge_tts","voice":"ar-SA-HamedNeural","gender":"male","language":"ar-SA","generate_at_runtime":true,"cache_recommended":true}},{"id":"doa_penutup_15","category":"doa","title":"Doa Penutup 15","repeat":1,"arabic":"رَبَّنَا غْفِرْلَنَا وَلِوَالِدِيْنَ وَلِجَمِيْعِ الْمُسْلِمِيْنَ وَالْمُسْلِمَاتِ، وَالْمُؤْمِنِيْنَ وَالْمُؤْمِنَاتِ،\nأَلْأَحْيَآءِمِنْهُمْ وَاْلأَ مْوَاتِ، اِنَّكَ عَلَى كُلِّ شَىۡءٍ قَدِيۡرٌ‏","translation":"Ya Tuhan kami, ampunilah dosa kami, dosa kedua orang tua kami, serta seluruh kaum muslimin dan muslimat, mukminin dan mukminat, baik yang masih hidup maupun yang telah wafat. Sungguh Engkau Maha Kuasa atas segala sesuatu.","audio":{"type":"runtime_tts","engine":"edge_tts","voice":"ar-SA-HamedNeural","gender":"male","language":"ar-SA","generate_at_runtime":true,"cache_recommended":true}},{"id":"doa_penutup_16","category":"doa","title":"Doa Penutup 16","repeat":1,"arabic":"اللَّهُمَّ اغْفِرْلَنَا ذُنُوْبَنَا وَ ذُنُوْبَ وَالِدَيْنَا وَارْحَمْهُمَا كَمَا رَبَّيَانَا صِغَارًا","translation":"Ya Allah, ampunilah dosa kami dan dosa kedua orang tua kami, dan rahmatilah mereka sebagaimana mereka mendidik kami saat kecil.","audio":{"type":"runtime_tts","engine":"edge_tts","voice":"ar-SA-HamedNeural","gender":"male","language":"ar-SA","generate_at_runtime":true,"cache_recommended":true}},{"id":"doa_penutup_17","category":"doa","title":"Doa Penutup 17","repeat":1,"arabic":"رَبَّنَا آتِنَا فِي الدُّنْيَا حَسَنَةً وَفِي الْأَخِرَةِ حَسَنَةً وَقِنَا عَذَابَ النَّار","translation":"Ya Tuhan kami, berikanlah kami kebaikan di dunia dan kebaikan di akhirat, dan peliharalah kami dari siksa neraka.","audio":{"type":"runtime_tts","engine":"edge_tts","voice":"ar-SA-HamedNeural","gender":"male","language":"ar-SA","generate_at_runtime":true,"cache_recommended":true}},{"id":"doa_penutup_18","category":"doa","title":"Doa Penutup 18","repeat":1,"arabic":"سُبْحَانَ رَبِّكَ رَبِّ الْعِزَّةِ عَمَّا يَصِفُوْنَ وَسَلَامٌ عَلَى الْمُرْسَلِيْنَ وَالْحَمْدُ لِلّٰهِ رَبِّ الْعَلَمِيْنَ، اَلْفَاتِحَة","translation":"Maha Suci Tuhanmu, Tuhan pemilik kemuliaan, dari apa yang mereka sifatkan. Dan selamat sejahtera bagi para rasul. Segala puji bagi Allah, Tuhan semesta alam. (Membaca) Al-Fatihah.","audio":{"type":"runtime_tts","engine":"edge_tts","voice":"ar-SA-HamedNeural","gender":"male","language":"ar-SA","generate_at_runtime":true,"cache_recommended":true}}]}]};
const WAZIFAH_KUBRO_RAW = {"id":"wazifah_kubro","title":"Wazifah Kubro","source_url":"https://almatsurat.net/kubro","language":"id","schema_version":"2.0","version":"1.2","created_at":"2026-05-29","updated_at":"2026-05-29","note":"JSON terstruktur Wazifah Kubro. Pada versi ini teks Arab dinormalisasi ke gaya Arab standar agar harakat dan tanwin tampil lebih konsisten pada font umum, mengacu pada tampilan Dzikir Setelah Shalat. Karakter Utsmani/Qur'anic khusus seperti alef wasla, tanda waqaf, small waw/yeh, dan tanwin Qur'anic dikonversi atau dihapus tanpa mengubah struktur item, urutan, repeat, dan terjemahan.","summary":{"total_items":43,"quran_items":20,"dua_items":18,"dzikir_items":2,"shalawat_items":2,"opening_items":1},"items":[{"sequence":1,"id":"istiadzah","category":"opening","title":"Isti'adzah","repeat":1,"arabic":"أَعُوذُ بِاللَّهِ السَّمِيعِ الْعَلِيمِ مِنَ الشَّيْطَانِ الرَّجِيمِ","translation":"Aku berlindung kepada Allah yang Maha Mendengar lagi Maha Mengetahui dari godaan syetan yang terkutuk."},{"sequence":2,"id":"al_fatihah","category":"quran","title":"Al-Fatihah","source_title":"Al-Fatihah","surah":"Al-Fatihah","surah_number":1,"repeat":1,"ayah_range":{"start":1,"end":7},"verses":[{"ayah":1,"arabic":"بِسْمِ اللَّهِ الرَّحْمَٰنِ الرَّحِيمِ","translation":"Dengan menyebut nama Allah Yang Maha Pemurah lagi Maha Penyayang"},{"ayah":2,"arabic":"الْحَمْدُ لِلَّهِ رَبِّ الْعَٰلَمِينَ","translation":"Segala puji bagi Allah, Tuhan semesta alam"},{"ayah":3,"arabic":"الرَّحْمَٰنِ الرَّحِيمِ","translation":"Maha Pemurah lagi Maha Penyayang"},{"ayah":4,"arabic":"مَٰلِكِ يَوْمِ الدِّينِ","translation":"Yang menguasai hari pembalasan"},{"ayah":5,"arabic":"إِيَّاكَ نَعْبُدُ وَإِيَّاكَ نَسْتَعِينُ","translation":"Hanya kepada Engkaulah kami menyembah dan hanya kepada Engkaulah kami mohon pertolongan"},{"ayah":6,"arabic":"اهْدِنَا الصِّرَٰطَ الْمُسْتَقِيمَ","translation":"Tunjukilah kami jalan yang lurus"},{"ayah":7,"arabic":"صِرَٰطَ الَّذِينَ أَنْعَمْتَ عَلَيْهِمْ غَيْرِ الْمَغْضُوبِ عَلَيْهِمْ وَلَا الضَّآلِّينَ","translation":"(yaitu) jalan orang-orang yang telah Engkau anugerahkan nikmat kepada mereka, bukan (jalan) mereka yang dimurkai dan bukan (pula jalan) mereka yang sesat"}]},{"sequence":3,"id":"al_baqarah_1_5","category":"quran","title":"Al-Baqarah ayat 1-5","source_title":"Al-Baqarah","surah":"Al-Baqarah","surah_number":2,"repeat":1,"ayah_range":{"start":1,"end":5},"basmalah":"بِسْمِ اللَّهِ الرَّحْمَٰنِ الرَّحِيمِ","verses":[{"ayah":1,"arabic":"الم","translation":"Alif Laam Miim"},{"ayah":2,"arabic":"ذَٰلِكَ الْكِتَٰبُ لَا رَيْبَ فِيهِ هُدًى لِّلْمُتَّقِينَ","translation":"Kitab (Al Qur'an) ini tidak ada keraguan padanya; petunjuk bagi mereka yang bertakwa"},{"ayah":3,"arabic":"الَّذِينَ يُؤْمِنُونَ بِالْغَيْبِ وَيُقِيمُونَ الصَّلَوٰةَ وَمِمَّا رَزَقْنَٰهُمْ يُنفِقُونَ","translation":"(yaitu) mereka yang beriman kepada yang gaib, yang mendirikan shalat dan menafkahkan sebahagian rezki yang Kami anugerahkan kepada mereka"},{"ayah":4,"arabic":"وَالَّذِينَ يُؤْمِنُونَ بِمَآ أُنزِلَ إِلَيْكَ وَمَآ أُنزِلَ مِن قَبْلِكَ وَبِالْأخِرَةِ هُمْ يُوقِنُونَ","translation":"Dan mereka yang beriman kepada Kitab (AlQur'an) yang telah diturunkan kepadamu dan Kitab-kitab yang telah diturunkan sebelummu, serta mereka yakin akan adanya (kehidupan) akhirat"},{"ayah":5,"arabic":"أُوْلَٰئِكَ عَلَىٰ هُدًى مِّن رَّبِّهِمْ وَأُوْلَٰئِكَ هُمُ الْمُفْلِحُونَ","translation":"Mereka itulah yang tetap mendapat petunjuk dari Tuhan mereka, dan merekalah orang-orang yang beruntung"}]},{"sequence":4,"id":"ayat_kursi","category":"quran","title":"Ayat Kursi","source_title":"Al-Baqarah","surah":"Al-Baqarah","surah_number":2,"repeat":1,"ayah_range":{"start":255,"end":255},"verses":[{"ayah":255,"arabic":"اللَّهُ لَآ إِلَٰهَ إِلَّا هُوَ الْحَيُّ الْقَيُّومُ لَا تَأْخُذُهُ سِنَةٌ وَلَا نَوْمٌ لَّهُ مَا فِي السَّمَٰوَٰتِ وَمَا فِي الْأَرْضِ مَن ذَا الَّذِي يَشْفَعُ عِندَهُ إِلَّا بِإِذْنِهِ يَعْلَمُ مَا بَيْنَ أَيْدِيهِمْ وَمَا خَلْفَهُمْ وَلَا يُحِيطُونَ بِشَيْءٍ مِّنْ عِلْمِهِ إِلَّا بِمَا شَآءَ وَسِعَ كُرْسِيُّهُ السَّمَٰوَٰتِ وَالْأَرْضَ وَلَا يَئُودُهُ حِفْظُهُمَا وَهُوَ الْعَلِيُّ الْعَظِيمُ","translation":"Allah, tidak ada Tuhan (yang berhak disembah) melainkan Dia Yang Hidup kekal lagi terus menerus mengurus (makhluk-Nya); tidak mengantuk dan tidak tidur. Kepunyaan-Nya apa yang di langit dan di bumi. Tiada yang dapat memberi syafaat di sisi Allah tanpa izin-Nya. Allah mengetahui apa-apa yang di hadapan mereka dan di belakang mereka, dan mereka tidak mengetahui apa-apa dari ilmu Allah melainkan apa yang dikehendaki-Nya. Kursi Allah meliputi langit dan bumi. Dan Allah tidak merasa berat memelihara keduanya, dan Allah Maha Tinggi lagi Maha Besar"}]},{"sequence":5,"id":"al_baqarah_256_257","category":"quran","title":"Al-Baqarah ayat 256-257","source_title":"Al-Baqarah","surah":"Al-Baqarah","surah_number":2,"repeat":1,"ayah_range":{"start":256,"end":257},"verses":[{"ayah":256,"arabic":"لَآ إِكْرَاهَ فِي الدِّينِ قَد تَّبَيَّنَ الرُّشْدُ مِنَ الْغَيِّ فَمَن يَكْفُرْ بِالطَّٰغُوتِ وَيُؤْمِنْ بِاللَّهِ فَقَدِ اسْتَمْسَكَ بِالْعُرْوَةِ الْوُثْقَىٰ لَا انفِصَامَ لَهَا وَاللَّهُ سَمِيعٌ عَلِيمٌ","translation":"Tidak ada paksaan untuk (memasuki) agama (Islam); sesungguhnya telah jelas jalan yang benar daripada jalan yang sesat. Karena itu barang siapa yang ingkar kepada Thaghut dan beriman kepada Allah, maka sesungguhnya ia telah berpegang kepada buhul tali yang amat kuat yang tidak akan putus. Dan Allah Maha Mendengar lagi Maha Mengetahui."},{"ayah":257,"arabic":"اللَّهُ وَلِيُّ الَّذِينَ ءَامَنُواْ يُخْرِجُهُم مِّنَ الظُّلُمَٰتِ إِلَى النُّورِ وَالَّذِينَ كَفَرُواْ أَوْلِيَآؤُهُمُ الطَّٰغُوتُ يُخْرِجُونَهُم مِّنَ النُّورِ إِلَى الظُّلُمَٰتِ أُوْلَٰئِكَ أَصْحَٰبُ النَّارِ هُمْ فِيهَا خَٰلِدُونَ","translation":"Allah Pelindung orang-orang yang beriman; Dia mengeluarkan mereka dari kegelapan (kekafiran) kepada cahaya (iman). Dan orang-orang yang kafir, pelindung-pelindungnya ialah setan, yang mengeluarkan mereka dari cahaya kepada kegelapan (kekafiran). Mereka itu adalah penghuni neraka; mereka kekal di dalamnya"}]},{"sequence":6,"id":"al_baqarah_284_286","category":"quran","title":"Al-Baqarah ayat 284-286","source_title":"Al-Baqarah","surah":"Al-Baqarah","surah_number":2,"repeat":1,"ayah_range":{"start":284,"end":286},"verses":[{"ayah":284,"arabic":"لِّلَّهِ مَا فِي السَّمَٰوَٰتِ وَمَا فِي الْأَرْضِ وَإِن تُبْدُواْ مَا فِي أَنفُسِكُمْ أَوْ تُخْفُوهُ يُحَاسِبْكُم بِهِ اللَّهُ فَيَغْفِرُ لِمَن يَشَآءُ وَيُعَذِّبُ مَن يَشَآءُ وَاللَّهُ عَلَىٰ كُلِّ شَيْءٍ قَدِيرٌ","translation":"Kepunyaan Allah-lah segala apa yang ada di langit dan apa yang ada di bumi. Dan jika kamu melahirkan apa yang ada di dalam hatimu atau kamu menyembunyikannya, niscaya Allah akan membuat perhitungan dengan kamu tentang perbuatanmu itu. Maka Allah mengampuni siapa yang dikehendaki-Nya dan menyiksa siapa yang dikehendaki-Nya; dan Allah Maha Kuasa atas segala sesuatu"},{"ayah":285,"arabic":"ءَامَنَ الرَّسُولُ بِمَآ أُنزِلَ إِلَيْهِ مِن رَّبِّهِ وَالْمُؤْمِنُونَ كُلٌّ ءَامَنَ بِاللَّهِ وَمَلَٰئِكَتِهِ وَكُتُبِهِ وَرُسُلِهِ لَا نُفَرِّقُ بَيْنَ أَحَدٍ مِّن رُّسُلِهِ وَقَالُواْ سَمِعْنَا وَأَطَعْنَا غُفْرَانَكَ رَبَّنَا وَإِلَيْكَ الْمَصِيرُ","translation":"Rasul telah beriman kepada Al Qur'an yang diturunkan kepadanya dari Tuhannya, demikian pula orang-orang yang beriman. Semuanya beriman kepada Allah, malaikat-malaikat-Nya, kitab-kitab-Nya dan rasul-rasul-Nya. (Mereka mengatakan): \"Kami tidak membeda-bedakan antara seseorang pun (dengan yang lain) dari rasul rasul-Nya\", dan mereka mengatakan: \"Kami dengar dan kami taat\". (Mereka berdoa):\"Ampunilah kami ya Tuhan kami dan kepada Engkaulah tempat kembali\""},{"ayah":286,"arabic":"لَا يُكَلِّفُ اللَّهُ نَفْسًا إِلَّا وُسْعَهَا لَهَا مَا كَسَبَتْ وَعَلَيْهَا مَا اكْتَسَبَتْ رَبَّنَا لَا تُؤَاخِذْنَآ إِن نَّسِينَآ أَوْ أَخْطَأْنَا رَبَّنَا وَلَا تَحْمِلْ عَلَيْنَآ إِصْرًا كَمَا حَمَلْتَهُ عَلَى الَّذِينَ مِن قَبْلِنَا رَبَّنَا وَلَا تُحَمِّلْنَا مَا لَا طَاقَةَ لَنَا بِهِ وَاعْفُ عَنَّا وَاغْفِرْ لَنَا وَارْحَمْنَآ أَنتَ مَوْلَىٰنَا فَانصُرْنَا عَلَى الْقَوْمِ الْكَٰفِرِينَ","translation":"Allah tidak membebani seseorang melainkan sesuai dengan kesanggupannya. Ia mendapat pahala (dari kebajikan) yang diusahakannya dan ia mendapat siksa (dari kejahatan) yang dikerjakannya. (Mereka berdo`a): \"Ya Tuhan kami, janganlah Engkau hukum kami jika kami lupa atau kami tersalah. Ya Tuhan kami, janganlah Engkau bebankan kepada kami beban yang berat sebagaimana Engkau bebankan kepada orang-orang yang sebelum kami. Ya Tuhan kami, janganlah Engkau pikulkan kepada kami apa yang tak sanggup kami memikulnya. Beri maaflah kami; ampunilah kami; dan rahmatilah kami. Engkaulah Penolong kami, maka tolonglah kami terhadap kaum yang kafir\""}]},{"sequence":7,"id":"ali_imran_1_2","category":"quran","title":"Ali Imran ayat 1-2","source_title":"Ali Imran","surah":"Ali Imran","surah_number":3,"repeat":1,"ayah_range":{"start":1,"end":2},"basmalah":"بِسْمِ اللَّهِ الرَّحْمَٰنِ الرَّحِيمِ","verses":[{"ayah":1,"arabic":"الم","translation":"Alif Lam Mim"},{"ayah":2,"arabic":"اللَّهُ لَآ إِلَٰهَ إِلَّا هُوَ الْحَيُّ الْقَيُّومُ","translation":"Allah, tidak ada Tuhan (yang berhak disembah) melainkan Dia. Yang Hidup kekal lagi terus menerus mengurus makhluk-Nya"}]},{"sequence":8,"id":"thaha_111_112","category":"quran","title":"Thoha ayat 111-112","source_title":"Thoha","surah":"Thoha","surah_number":20,"repeat":1,"ayah_range":{"start":111,"end":112},"verses":[{"ayah":111,"arabic":"وَعَنَتِ الْوُجُوهُ لِلْحَيِّ الْقَيُّومِ وَقَدْ خَابَ مَنْ حَمَلَ ظُلْمًا","translation":"Dan tunduklah semua muka (dengan berendah diri) kepada Tuhan Yang Hidup Kekal lagi senantiasa mengurus (makhluk-Nya). Dan sesungguhnya telah merugilah orang yang melakukan kelaliman"},{"ayah":112,"arabic":"وَمَن يَعْمَلْ مِنَ الصَّٰلِحَٰتِ وَهُوَ مُؤْمِنٌ فَلَا يَخَافُ ظُلْمًا وَلَا هَضْمًا","translation":"Dan barang siapa mengerjakan amal-amal yang saleh dan ia dalam keadaan beriman, maka ia tidak khawatir akan perlakuan yang tidak adil (terhadapnya) dan tidak (pula) akan pengurangan haknya"}]},{"sequence":9,"id":"at_taubah_129","category":"quran","title":"At-Taubah ayat 129","source_title":"At-Taubah","surah":"At-Taubah","surah_number":9,"repeat":7,"ayah_range":{"start":129,"end":129},"verses":[{"ayah":129,"arabic":"حَسْبِيَ اللَّهُ لَآإِلَٰهَ إِلَّاهُوَ عَلَيْهِ تَوَكَّلْتُ وَهُوَ رَبُّ الْعَرْشِ الْعَظِيمِ","translation":"\"Cukuplah Allah bagiku; tidak ada Tuhan selain Dia. Hanya kepada-Nya aku bertawakal dan Dia adalah Tuhan yang memiliki Arasy yang agung\""}]},{"sequence":10,"id":"al_isra_110_111","category":"quran","title":"Al-Isra ayat 110-111","source_title":"Al-Isra","surah":"Al-Isra","surah_number":17,"repeat":1,"ayah_range":{"start":110,"end":111},"verses":[{"ayah":110,"arabic":"قُلِ ادْعُواْ اللَّهَ أَوِ ادْعُواْ الرَّحْمَٰنَ أَيًّا مَّا تَدْعُواْ فَلَهُ الْأَسْمَآءُ الْحُسْنَىٰ وَلَا تَجْهَرْ بِصَلَاتِكَ وَلَا تُخَافِتْ بِهَا وَابْتَغِ بَيْنَ ذَٰلِكَ سَبِيلًا","translation":"Katakanlah: \"Serulah Allah atau serulah Ar-Rahman. Dengan nama yang mana saja kamu seru, Dia mempunyai al asmaaulhusna (nama-nama yang terbaik)dan janganlah kamu mengeraskan suaramu dalam salatmu dan janganlah pula merendahkannya dan carilah jalan tengah di antara kedua itu\""},{"ayah":111,"arabic":"وَقُلِ الْحَمْدُ لِلَّهِ الَّذِي لَمْ يَتَّخِذْ وَلَدًا وَلَمْ يَكُن لَّهُ شَرِيكٌ فِي الْمُلْكِ وَلَمْ يَكُن لَّهُ وَلِيٌّ مِّنَ الذُّلِّ وَكَبِّرْهُ تَكْبِيرًا","translation":"Dan katakanlah: \"Segala puji bagi Allah Yang tidak mempunyai anak dan tidak mempunyai sekutu dalam kerajaan-Nya dan Dia bukan pula hina yang memerlukan penolong dan agungkanlah Dia dengan pengagungan yang sebesar-besarnya"}]},{"sequence":11,"id":"al_muminun_115_118","category":"quran","title":"Al-Mu'minun ayat 115-118","source_title":"Al-Mu'minun","surah":"Al-Mu'minun","surah_number":23,"repeat":1,"ayah_range":{"start":115,"end":118},"verses":[{"ayah":115,"arabic":"أَفَحَسِبْتُمْ أَنَّمَا خَلَقْنَٰكُمْ عَبَثًا وَأَنَّكُمْ إِلَيْنَا لَا تُرْجَعُونَ","translation":"Maka apakah kamu mengira, bahwa sesungguhnya Kami menciptakan kamu secara main-main (saja), dan bahwa kamu tidak akan dikembalikan kepada Kami ?"},{"ayah":116,"arabic":"فَتَعَٰلَى اللَّهُ الْمَلِكُ الْحَقُّ لَآ إِلَٰهَ إِلَّا هُوَ رَبُّ الْعَرْشِ الْكَرِيمِ","translation":"Maka Maha Tinggi Allah, Raja Yang Sebenarnya; tidak ada Tuhan (yang berhak disembah) selain Dia, Tuhan (Yang mempunyai) Arasy yang mulia"},{"ayah":117,"arabic":"وَمَن يَدْعُ مَعَ اللَّهِ إِلَٰهًا ءَاخَرَ لَا بُرْهَٰنَ لَهُ بِهِ فَإِنَّمَا حِسَابُهُ عِندَ رَبِّهِ إِنَّهُ لَا يُفْلِحُ الْكَٰفِرُونَ","translation":"Dan barang siapa menyembah tuhan yang lain di samping Allah, padahal tidak ada suatu dalil pun baginya tentang itu, maka sesungguhnya perhitungannya di sisi Tuhannya. Sesungguhnya orang-orang yang kafir itu tiada beruntung"},{"ayah":118,"arabic":"وَقُل رَّبِّ اغْفِرْ وَارْحَمْ وَأَنتَ خَيْرُ الرَّٰحِمِينَ","translation":"Dan katakanlah: \"Ya Tuhanku berilah ampun dan berilah rahmat, dan Engkau adalah Pemberi rahmat Yang Paling baik"}]},{"sequence":12,"id":"ar_rum_17_26","category":"quran","title":"Ar-Rum ayat 17-26","source_title":"Ar-Rum","surah":"Ar-Rum","surah_number":30,"repeat":1,"ayah_range":{"start":17,"end":26},"verses":[{"ayah":17,"arabic":"فَسُبْحَٰنَ اللَّهِ حِينَ تُمْسُونَ وَحِينَ تُصْبِحُونَ","translation":"Maka bertasbihlah kepada Allah di waktu kamu berada di petang hari dan waktu kamu berada di waktu subuh"},{"ayah":18,"arabic":"وَلَهُ الْحَمْدُ فِي السَّمَٰوَٰتِ وَالْأَرْضِ وَعَشِيًّا وَحِينَ تُظْهِرُونَ","translation":"Dan bagi-Nya-lah segala puji di langit dan di bumi dan di waktu kamu berada pada petang hari dan di waktu kamu berada di waktu Zuhur"},{"ayah":19,"arabic":"يُخْرِجُ الْحَيَّ مِنَ الْمَيِّتِ وَيُخْرِجُ الْمَيِّتَ مِنَ الْحَيِّ وَيُحْيِ الْأَرْضَ بَعْدَ مَوْتِهَا وَكَذَٰلِكَ تُخْرَجُونَ","translation":"Dia mengeluarkan yang hidup dari yang mati dan mengeluarkan yang mati dari yang hidup dan menghidupkan bumi sesudah matinya. Dan seperti itulah kamu akan dikeluarkan dari kubur"},{"ayah":20,"arabic":"وَمِنْ ءَايَٰتِهِ أَنْ خَلَقَكُم مِّن تُرَابٍ ثُمَّ إِذَآ أَنتُم بَشَرٌ تَنتَشِرُونَ","translation":"Dan di antara tanda-tanda kekuasaan-Nya ialah Dia menciptakan kamu dari tanah, kemudian tiba-tiba kamu menjadi manusia yang berkembang biak"},{"ayah":21,"arabic":"وَمِنْ ءَايَٰتِهِ أَنْ خَلَقَ لَكُم مِّنْ أَنفُسِكُمْ أَزْوَٰجًا لِّتَسْكُنُواْ إِلَيْهَا وَجَعَلَ بَيْنَكُم مَّوَدَّةً وَرَحْمَةً إِنَّ فِي ذَٰلِكَ لَأيَٰتٍ لِّقَوْمٍ يَتَفَكَّرُونَ","translation":"Dan di antara tanda-tanda kekuasaan-Nya ialah Dia menciptakan untukmu isteri-isteri dari jenismu sendiri, supaya kamu cenderung dan merasa tenteram kepadanya, dan dijadikan-Nya diantaramu rasa kasih dan sayang. Sesungguhnya pada yang demikian itu benar-benar terdapat tanda-tanda bagi kaum yang berfikir"},{"ayah":22,"arabic":"وَمِنْ ءَايَٰتِهِ خَلْقُ السَّمَٰوَٰتِ وَالْأَرْضِ وَاخْتِلَٰفُ أَلْسِنَتِكُمْ وَأَلْوَٰنِكُمْ إِنَّ فِي ذَٰلِكَ لَأيَٰتٍ لِّلْعَٰلِمِينَ","translation":"Dan di antara tanda-tanda kekuasaan-Nya ialah menciptakan langit dan bumi dan berlain-lainan bahasamu dan warna kulitmu. Sesungguhnya pada yang demikian itu benar-benar terdapat tanda-tanda bagi orang-orang yang mengetahui"},{"ayah":23,"arabic":"وَمِنْ ءَايَٰتِهِ مَنَامُكُم بِالَّيْلِ وَالنَّهَارِ وَابْتِغَآؤُكُم مِّن فَضْلِهِإِنَّ فِي ذَٰلِكَ لَأيَٰتٍ لِّقَوْمٍ يَسْمَعُونَ","translation":"Dan di antara tanda-tanda kekuasaan-Nya ialah tidurmu di waktu malam dan siang hari dan usahamu mencari sebagian dari karunia-Nya. Sesungguhnya pada yang demikian itu benar-benar terdapat tanda-tanda bagi kaum yang mendengarkan"},{"ayah":24,"arabic":"وَمِنْ ءَايَٰتِهِ يُرِيكُمُ الْبَرْقَ خَوْفًا وَطَمَعًا وَيُنَزِّلُ مِنَ السَّمَآءِمَآءً فَيُحْيِي بِهِ الْأَرْضَ بَعْدَ مَوْتِهَآ إِنَّ فِي ذَٰلِكَ لَأيَٰتٍ لِّقَوْمٍ يَعْقِلُونَ","translation":"Dan di antara tanda-tanda kekuasaan-Nya, Dia memperlihatkan kepadamu kilat untuk menimbulkan ketakutan dan harapan, dan Dia menurunkan hujan dari langit, lalu menghidupkan bumi dengan air itu sesudah matinya. Sesungguhnya pada yang demikian itu benar-benar terdapat tanda-tanda bagi kaum yang mempergunakan akalnya"},{"ayah":25,"arabic":"وَمِنْ ءَايَٰتِهِ أَن تَقُومَ السَّمَآءُ وَالْأَرْضُ بِأَمْرِهِ ثُمَّ إِذَا دَعَاكُمْ دَعْوَةً مِّنَ الْأَرْضِ إِذَآ أَنتُمْ تَخْرُجُونَ","translation":"Dan di antara tanda-tanda kekuasaan-Nya ialah berdirinya langit dan bumi dengan iradat-Nya. Kemudian apabila Dia memanggil kamu sekali panggil dari bumi, seketika itu juga kamu keluar dari kubur"},{"ayah":26,"arabic":"وَلَهُ مَن فِي السَّمَٰوَٰتِ وَالْأَرْضِ كُلٌّ لَّهُ قَٰنِتُونَ","translation":"Dan kepunyaan-Nya-lah siapa saja yang ada di langit dan di bumi. Semuanya hanya kepada-Nya tunduk"}]},{"sequence":13,"id":"ghafir_1_3","category":"quran","title":"Ghafir ayat 1-3","source_title":"Ghafir","surah":"Ghafir","surah_number":40,"repeat":1,"ayah_range":{"start":1,"end":3},"verses":[{"ayah":1,"arabic":"حم","translation":"Haa Miim"},{"ayah":2,"arabic":"تَنزِيلُ الْكِتَٰبِ مِنَ اللَّهِ الْعَزِيزِ الْعَلِيمِ","translation":"Diturunkan Kitab ini (Al Quran) dari Allah Yang Maha Perkasa lagi Maha Mengetahui"},{"ayah":3,"arabic":"غَافِرِ الذَّنْبِ وَقَابِلِ التَّوْبِ شَدِيدِ الْعِقَابِ ذِي الطَّوْلِ لَآ إِلَٰهَ إِلَّاهُوَ إِلَيْهِ الْمَصِيرُ","translation":"Yang Mengampuni dosa dan Menerima taubat lagi keras hukuman-Nya. Yang mempunyai karunia. Tiada Tuhan (yang berhak disembah) selain Dia. Hanya kepada-Nya-lah kembali (semua makhluk)"}]},{"sequence":14,"id":"al_hasyr_22_24","category":"quran","title":"Al-Hasyr ayat 22-24","source_title":"Al-Hasyr","surah":"Al-Hasyr","surah_number":59,"repeat":1,"ayah_range":{"start":22,"end":24},"verses":[{"ayah":22,"arabic":"هُوَ اللَّهُ الَّذِي لَآ إِلَٰهَ إِلَّا هُوَ عَٰلِمُ الْغَيْبِ وَالشَّهَٰدَةِ هُوَ الرَّحْمَٰنُ الرَّحِيمُ","translation":"Dialah Allah Yang tiada Tuhan selain Dia, Yang Mengetahui yang ghaib dan yang nyata, Dialah Yang Maha Pemurah lagi Maha Penyayang"},{"ayah":23,"arabic":"هُوَ اللَّهُ الَّذِي لَآ إِلَٰهَ إِلَّا هُوَ الْمَلِكُ الْقُدُّوسُ السَّلَٰمُ الْمُؤْمِنُ الْمُهَيْمِنُ الْعَزِيزُ الْجَبَّارُ الْمُتَكَبِّرُ سُبْحَٰنَ اللَّهِ عَمَّا يُشْرِكُونَ","translation":"Dialah Allah Yang tiada Tuhan selain Dia, Raja, Yang Maha Suci, Yang Maha Sejahtera, Yang Mengaruniakan Keamanan, Yang Maha Memelihara, Yang Maha Perkasa, Yang Maha Kuasa, Yang Memiliki segala Keagungan, Maha Suci Allah dari apa yang mereka persekutukan"},{"ayah":24,"arabic":"هُوَ اللَّهُ الْخَٰلِقُ الْبَارِئُ الْمُصَوِّرُ لَهُ الْأَسْمَآءُ الْحُسْنَىٰ يُسَبِّحُ لَهُ مَا فِي السَّمَٰوَٰتِ وَالْأَرْضِ وَهُوَ الْعَزِيزُ الْحَكِيمُ","translation":"Dialah Allah Yang Menciptakan, Yang Mengadakan, Yang Membentuk Rupa, Yang Mempunyai Asmaaul Husna. Bertasbih kepada-Nya apa yang di langit dan bumi. Dan Dialah Yang Maha Perkasa lagi Maha Bijaksana"}]},{"sequence":15,"id":"az_zalzalah","category":"quran","title":"Az-Zalzalah","source_title":"Az-Zalzalah","surah":"Az-Zalzalah","surah_number":99,"repeat":1,"ayah_range":{"start":1,"end":8},"basmalah":"بِسْمِ اللَّهِ الرَّحْمَٰنِ الرَّحِيمِ","verses":[{"ayah":1,"arabic":"إِذَا زُلْزِلَتِ الْأَرْضُ زِلْزَالَهَا","translation":"Apabila bumi digoncangkan dengan goncangan (yang dahsyat)"},{"ayah":2,"arabic":"وَأَخْرَجَتِ الْأَرْضُ أَثْقَالَهَا","translation":"dan bumi telah mengeluarkan beban-beban berat (yang dikandung)nya"},{"ayah":3,"arabic":"وَقَالَ الْإِنسَٰنُ مَا لَهَا","translation":"dan manusia bertanya: \"Mengapa bumi (menjadi begini)?\""},{"ayah":4,"arabic":"يَوْمَئِذٍ تُحَدِّثُ أَخْبَارَهَا","translation":"Pada hari itu bumi menceritakan beritanya"},{"ayah":5,"arabic":"بِأَنَّ رَبَّكَ أَوْحَىٰ لَهَا","translation":"karena sesungguhnya Tuhanmu telah memerintahkan (yang sedemikian itu) kepadanya"},{"ayah":6,"arabic":"يَوْمَئِذٍ يَصْدُرُ النَّاسُ أَشْتَاتًا لِّيُرَوْاْ أَعْمَٰلَهُمْ","translation":"Pada hari itu manusia ke luar dari kuburnya dalam keadaan bermacam-macam, supaya diperlihatkan kepada mereka (balasan) pekerjaan mereka"},{"ayah":7,"arabic":"فَمَن يَعْمَلْ مِثْقَالَ ذَرَّةٍ خَيْرًا يَرَهُ","translation":"Barangsiapa yang mengerjakan kebaikan seberat dzarrahpun, niscaya dia akan melihat (balasan)nya"},{"ayah":8,"arabic":"وَمَن يَعْمَلْ مِثْقَالَ ذَرَّةٍ شَرًّا يَرَهُ","translation":"Dan barangsiapa yang mengerjakan kejahatan sebesar dzarrahpun, niscaya dia akan melihat (balasan)nya pula"}]},{"sequence":16,"id":"al_kafirun","category":"quran","title":"Al-Kafirun","source_title":"Al-Kafirun","surah":"Al-Kafirun","surah_number":109,"repeat":1,"ayah_range":{"start":1,"end":6},"basmalah":"بِسْمِ اللَّهِ الرَّحْمَٰنِ الرَّحِيمِ","verses":[{"ayah":1,"arabic":"قُلْ يَٰأَيُّهَا الْكَٰفِرُونَ","translation":"Katakanlah: \"Hai orang-orang kafir"},{"ayah":2,"arabic":"لَآ أَعْبُدُ مَا تَعْبُدُونَ","translation":"Aku tidak akan menyembah apa yang kamu sembah"},{"ayah":3,"arabic":"وَلَآ أَنتُمْ عَٰبِدُونَ مَآ أَعْبُدُ","translation":"Dan kamu bukan penyembah Tuhan yang aku sembah"},{"ayah":4,"arabic":"وَلَآ أَنَا عَابِدٌ مَّا عَبَدتُّمْ","translation":"Dan aku tidak pernah menjadi penyembah apa yang kamu sembah"},{"ayah":5,"arabic":"وَلَآ أَنتُمْ عَٰبِدُونَ مَآ أَعْبُدُ","translation":"Dan kamu tidak pernah (pula) menjadi penyembah Tuhan yang aku sembah"},{"ayah":6,"arabic":"لَكُمْ دِينُكُمْ وَلِيَ دِينِ","translation":"Untukmu agamamu, dan untukkulah, agamaku\""}]},{"sequence":17,"id":"an_nashr","category":"quran","title":"An-Nashr","source_title":"An-Nashr","surah":"An-Nashr","surah_number":110,"repeat":1,"ayah_range":{"start":1,"end":3},"basmalah":"بِسْمِ اللَّهِ الرَّحْمَٰنِ الرَّحِيمِ","verses":[{"ayah":1,"arabic":"إِذَا جَآءَ نَصْرُ اللَّهِ وَالْفَتْحُ","translation":"Apabila telah datang pertolongan Allah dan kemenangan"},{"ayah":2,"arabic":"وَرَأَيْتَ النَّاسَ يَدْخُلُونَ فِي دِينِ اللَّهِ أَفْوَاجًا","translation":"Dan kamu lihat manusia masuk agama Allah dengan berbondong-bondong"},{"ayah":3,"arabic":"فَسَبِّحْ بِحَمْدِ رَبِّكَ وَاسْتَغْفِرْهُ إِنَّهُكَانَ تَوَّابًا","translation":"Maka bertasbihlah dengan memuji Tuhanmu dan mohonlah ampun kepada-Nya. Sesungguhnya Dia adalah Maha Penerima taubat"}]},{"sequence":18,"id":"al_ikhlas","category":"quran","title":"Al-Ikhlas","source_title":"Al-Ikhlas","surah":"Al-Ikhlas","surah_number":112,"repeat":3,"ayah_range":{"start":1,"end":4},"basmalah":"بِسْمِ اللَّهِ الرَّحْمَٰنِ الرَّحِيمِ","verses":[{"ayah":1,"arabic":"قُلْ هُوَ اللَّهُ أَحَدٌ","translation":"Katakanlah: \"Dialah Allah, Yang Maha Esa"},{"ayah":2,"arabic":"اللَّهُ الصَّمَدُ","translation":"Allah adalah Tuhan yang bergantung kepada-Nya segala sesuatu"},{"ayah":3,"arabic":"لَمْ يَلِدْ وَلَمْ يُولَدْ","translation":"Dia tiada beranak dan tidak pula diperanakkan"},{"ayah":4,"arabic":"وَلَمْ يَكُن لَّهُ كُفُوًا أَحَدٌ","translation":"Dan tidak ada seorangpun yang setara dengan Dia"}]},{"sequence":19,"id":"al_falaq","category":"quran","title":"Al-Falaq","source_title":"Al-Falaq","surah":"Al-Falaq","surah_number":113,"repeat":3,"ayah_range":{"start":1,"end":5},"basmalah":"بِسْمِ اللَّهِ الرَّحْمَٰنِ الرَّحِيمِ","verses":[{"ayah":1,"arabic":"قُلْ أَعُوذُ بِرَبِّ الْفَلَقِ","translation":"Katakanlah: \"Aku berlindung kepada Tuhan Yang Menguasai subuh,"},{"ayah":2,"arabic":"مِن شَرِّ مَا خَلَقَ","translation":"Dari kejahatan makhluk-Nya"},{"ayah":3,"arabic":"وَمِن شَرِّ غَاسِقٍ إِذَا وَقَبَ","translation":"Dan dari kejahatan malam apabila telah gelap gulita"},{"ayah":4,"arabic":"وَمِن شَرِّ النَّفَّٰثَٰتِ فِي الْعُقَدِ","translation":"Dan dari kejahatan wanita-wanita tukang sihir yang menghembus pada buhul-buhul"},{"ayah":5,"arabic":"وَمِن شَرِّ حَاسِدٍ إِذَا حَسَدَ","translation":"Dan dari kejahatan pendengki bila ia dengki"}]},{"sequence":20,"id":"an_naas","category":"quran","title":"An-Naas","source_title":"An-Naas","surah":"An-Naas","surah_number":114,"repeat":3,"ayah_range":{"start":1,"end":6},"basmalah":"بِسْمِ اللَّهِ الرَّحْمَٰنِ الرَّحِيمِ","verses":[{"ayah":1,"arabic":"قُلْ أَعُوذُ بِرَبِّ النَّاسِ","translation":"Katakanlah: Aku berlindung kepada Tuhan (yang memelihara dan menguasai) manusia"},{"ayah":2,"arabic":"مَلِكِ النَّاسِ","translation":"Raja manusia"},{"ayah":3,"arabic":"إِلَٰهِ النَّاسِ","translation":"Sembahan manusia"},{"ayah":4,"arabic":"مِن شَرِّ الْوَسْوَاسِ الْخَنَّاسِ","translation":"Dari kejahatan (bisikan) setan yang biasa bersembunyi"},{"ayah":5,"arabic":"الَّذِي يُوَسْوِسُ فِي صُدُورِ النَّاسِ","translation":"Yang membisikkan (kejahatan) ke dalam dada manusia"},{"ayah":6,"arabic":"مِنَ الْجِنَّةِ وَالنَّاسِ","translation":"Dari (golongan) jin dan manusia"}]},{"sequence":21,"id":"dua_al_matsurat_01","category":"dua","title":"Do'a Al-Matsurat 1","source_title":"Do'a Al-Matsurat","repeat":3,"arabic":"أَصْبَحْنَا وَأَصْبَحَ (أَمْسَيْنَا وَأَمْسَى) الْمُلْكُ لِلَّهِ، وَالْحَمْدُ لِلَّهِ، لَا شَرِيكَ لَهُ، لَا إِلَهَ إِلَّا هُوَ، وَإِلَيْهِ النُّشُورُ (الْمَصِيرُ)","translation":"Kami berpagi hari (bersore hari) dan berpagi hari (bersore hari) pula kerajaan milik Allah. Segala puji bagi Allah, tiada sekutu bagi-Nya, tiada Tuhan melainkan Dia dan kepada-Nya tempat kembali."},{"sequence":22,"id":"dua_al_matsurat_02","category":"dua","title":"Do'a Al-Matsurat 2","source_title":"Do'a Al-Matsurat","repeat":3,"arabic":"أَصْبَحْنَا (أَمْسَيْنَا) عَلَى فِطْرَةِ الْإِسْلَامِ، وَعَلَى كَلِمَةِ الْإِخْلَاصِ، وَعَلَى دِينِ نَبِيِّنَا مُحَمَّدٍ صَلَّى اللَّهُ عَلَيْهِ وَسَلَّمَ، وَعَلَى مِلَّةِ أَبِينَا إِبْرَاهِيمَ حَنِيفًا مُسْلِمًا، وَمَا كَانَ مِنَ الْمُشْرِكِينَ","translation":"Di waktu pagi (sore) kami memegang agama Islam, kalimat ikhlas, agama Nabi kita Muhammad shallallahu ‘alaihi wa sallam, dan agama ayah kami Ibrahim, yang berdiri di atas jalan yang lurus, muslim dan tidak tergolong orang-orang musyrik."},{"sequence":23,"id":"dua_al_matsurat_03","category":"dua","title":"Do'a Al-Matsurat 3","source_title":"Do'a Al-Matsurat","repeat":3,"arabic":"اللَّهُمَّ إِنِّي أَصْبَحْتُ (أَمْسَيْتُ) مِنْكَ فِي نِعْمَةٍ وَعَافِيَةٍ وَسِتْرٍ، فَأَتِمَّ عَلَيَّ نِعْمَتَكَ وَعَافِيَتَكَ وَسِتْرَكَ فِي الدُّنْيَا وَالْآخِرَةِ","translation":"Ya Allah, sesungguhnya aku berpagi hari (bersore hari) dari-Mu dalam kenikmatan, kesehatan dan perlindungan. Maka sempurnakanlah untukku kenikmatan, kesehatan dan perlindungan-Mu itu di dunia dan akhirat."},{"sequence":24,"id":"dua_al_matsurat_04","category":"dua","title":"Do'a Al-Matsurat 4","source_title":"Do'a Al-Matsurat","repeat":3,"arabic":"اللَّهُمَّ مَا أَصْبَحَ (أَمْسَى) بِي مِنْ نِعْمَةٍ أَوْ بِأَحَدٍ مِنْ خَلْقِكَ فَمِنْكَ وَحْدَكَ لَا شَرِيكَ لَكَ، فَلَكَ الْحَمْدُ وَلَكَ الشُّكْرُ","translation":"Ya Allah, kenikmatan yang aku atau salah seorang dari makhluk-Mu berpagi hari (bersore hari) dengannya adalah dari-Mu semata; tiada sekutu bagi-Mu. Maka bagi-Mu segala puji dan rasa syukur."},{"sequence":25,"id":"dua_al_matsurat_05","category":"dua","title":"Do'a Al-Matsurat 5","source_title":"Do'a Al-Matsurat","repeat":3,"arabic":"يَا رَبِّي لَكَ الْحَمْدُ كَمَا يَنْبَغِي لِجَلَالِ وَجْهِكَ وَلِعَظِيمِ سُلْطَانِكَ","translation":"Ya Tuhanku, Segala puji bagi-Mu sebagaimana seyogyanya kemuliaan wajah-Mu dan keagungan kekuasaan-Mu."},{"sequence":26,"id":"dua_al_matsurat_06","category":"dua","title":"Do'a Al-Matsurat 6","source_title":"Do'a Al-Matsurat","repeat":3,"arabic":"رَضِيتُ بِاللَّهِ رَبًّا، وَبِالْإِسْلَامِ دِينًا، وَبِمُحَمَّدٍ نَبِيًّا وَرَسُولًا","translation":"Aku ridha Allah sebagai Rabb, Islam sebagai agama, dan Muhammad sebagai Rasul."},{"sequence":27,"id":"dua_al_matsurat_07","category":"dua","title":"Do'a Al-Matsurat 7","source_title":"Do'a Al-Matsurat","repeat":3,"arabic":"سُبْحَانَ اللَّهِ وَبِحَمْدِهِ، عَدَدَ خَلْقِهِ، وَرِضَا نَفْسِهِ، وَزِنَةَ عَرْشِهِ، وَمِدَادَ كَلِمَاتِهِ","translation":"Maha Suci Allah dan Segala Puji bagiNya, sebanyak bilangan makhluk-Nya, seridha diri-Nya, setimbangan ‘arsy-Nya, dan sebanyak tinta dari kata-kata-Nya."},{"sequence":28,"id":"dua_al_matsurat_08","category":"dua","title":"Do'a Al-Matsurat 8","source_title":"Do'a Al-Matsurat","repeat":3,"arabic":"بِسْمِ اللَّهِ الَّذِي لَا يَضُرُّ مَعَ اسْمِهِ شَيْءٌ فِي الْأَرْضِ وَلَا فِي السَّمَاءِ، وَهُوَ السَّمِيعُ الْعَلِيمُ","translation":"Dengan nama Allah Yang bersama Nama-Nya sesuatu apa pun tidak akan celaka baik di bumi dan di langit. Dialah Maha Mendengar lagi maha Mengetahui."},{"sequence":29,"id":"dua_al_matsurat_09","category":"dua","title":"Do'a Al-Matsurat 9","source_title":"Do'a Al-Matsurat","repeat":3,"arabic":"اللَّهُمَّ إِنَّا نَعُوذُ بِكَ مِنْ أَنْ نُشْرِكَ بِكَ شَيْئًا نَعْلَمُهُ، وَنَسْتَغْفِرُكَ لِمَا لَا نَعْلَمُهُ","translation":"Ya Allah sesungguhnya kami berlindung kepada-Mu dari menyekutukanMu dengan sesuatu yang kami ketahui, dan kami memohon ampunanMu dari apa-apa yang tidak kami ketahui."},{"sequence":30,"id":"dua_al_matsurat_10","category":"dua","title":"Do'a Al-Matsurat 10","source_title":"Do'a Al-Matsurat","repeat":3,"arabic":"أَعُوذُ بِكَلِمَاتِ اللَّهِ التَّامَّاتِ مِنْ شَرِّ مَا خَلَقَ","translation":"Aku berlindung dengan kalimat Allah yang sempurna dari keburukan apa-apa yang Dia ciptakan."},{"sequence":31,"id":"dua_al_matsurat_11","category":"dua","title":"Do'a Al-Matsurat 11","source_title":"Do'a Al-Matsurat","repeat":3,"arabic":"اللَّهُمَّ إِنِّي أَعُوذُ بِكَ مِنَ الْهَمِّ وَالْحَزَنِ، وَأَعُوذُ بِكَ مِنَ الْعَجْزِ وَالْكَسَلِ، وَأَعُوذُ بِكَ مِنَ الْجُبْنِ وَالْبُخْلِ، وَأَعُوذُ بِكَ مِنْ غَلَبَةِ الدَّيْنِ وَقَهْرِ الرِّجَالِ","translation":"Ya Allah, aku berlindung kepada-Mu dari rasa gelisah dan sedih, dari kelemahan dan kemalasan, dari sifat pengecut dan bakhil, dan dari lilitan hutang dan kesewenang-wenangan orang."},{"sequence":32,"id":"dua_al_matsurat_12","category":"dua","title":"Do'a Al-Matsurat 12","source_title":"Do'a Al-Matsurat","repeat":3,"arabic":"اللَّهُمَّ عَافِنِي فِي بَدَنِي، اللَّهُمَّ عَافِنِي فِي سَمْعِي، اللَّهُمَّ عَافِنِي فِي بَصَرِي","translation":"Ya Allah berikanlah kesehatan bagi badanku, bagi pendengaranku, bagi penglihatanku."},{"sequence":33,"id":"dua_al_matsurat_13","category":"dua","title":"Do'a Al-Matsurat 13","source_title":"Do'a Al-Matsurat","repeat":3,"arabic":"اللَّهُمَّ إِنِّي أَعُوذُ بِكَ مِنَ الْكُفْرِ وَالْفَقْرِ، وَأَعُوذُ بِكَ مِنْ عَذَابِ الْقَبْرِ، لَا إِلَهَ إِلَّا أَنْتَ","translation":"Ya Allah sungguh aku berlindung kepada-Mu dari kekufuran dan kefaqiran, Ya Allah sungguh aku berlindung kepada-Mu dari azab kubur, tidak ada Ilah kecuali Engkau."},{"sequence":34,"id":"dua_al_matsurat_14","category":"dua","title":"Do'a Al-Matsurat 14","source_title":"Do'a Al-Matsurat","repeat":3,"arabic":"اللَّهُمَّ أَنْتَ رَبِّي، لَا إِلَهَ إِلَّا أَنْتَ، خَلَقْتَنِي وَأَنَا عَبْدُكَ، وَأَنَا عَلَى عَهْدِكَ وَوَعْدِكَ مَا اسْتَطَعْتُ، أَعُوذُ بِكَ مِنْ شَرِّ مَا صَنَعْتُ، أَبُوءُ لَكَ بِنِعْمَتِكَ عَلَيَّ، وَأَبُوءُ بِذَنْبِي، فَاغْفِرْ لِي؛ فَإِنَّهُ لَا يَغْفِرُ الذُّنُوبَ إِلَّا أَنْتَ","translation":"Ya Allah, Engkau Tuhanku, tiada Tuhan kecuali Engkau. Engkau ciptakan aku dan aku adalah hamba-Mu. Aku berada di atas janjiMu, semampuku. Aku berlindung kepada-Mu dari keburukan perbuatanku. Aku mengakui banyaknya nikmat yang Engkau anugerahkan kepadaku dan aku mengakui dosa-dosaku, maka ampunilah aku. Karena sesungguhnya tiada yang mengampuni dosa-dosa melainkan Engkau"},{"sequence":35,"id":"dua_al_matsurat_15","category":"dua","title":"Do'a Al-Matsurat 15","source_title":"Do'a Al-Matsurat","repeat":3,"arabic":"أَسْتَغْفِرُ اللَّهَ الْعَظِيمَ الَّذِي لَا إِلَهَ إِلَّا هُوَ الْحَيَّ الْقَيُّومَ، وَأَتُوبُ إِلَيْهِ","translation":"Aku memohon ampunan Allah Yang Tiada Tuhan melainkan Dia, Yang Maha Hidup dan Maha Mengurus (makhluk-Nya)."},{"sequence":36,"id":"shalawat_ibrahimiyah","category":"shalawat","title":"Shalawat Ibrahimiyah","source_title":"Do'a Al-Matsurat","repeat":10,"arabic":"اللَّهُمَّ صَلِّ عَلَى سَيِّدِنَا مُحَمَّدٍ، وَعَلَى آلِ سَيِّدِنَا مُحَمَّدٍ، كَمَا صَلَّيْتَ عَلَى سَيِّدِنَا إِبْرَاهِيمَ، وَعَلَى آلِ سَيِّدِنَا إِبْرَاهِيمَ، وَبَارِكْ عَلَى سَيِّدِنَا مُحَمَّدٍ، وَعَلَى آلِ سَيِّدِنَا مُحَمَّدٍ، كَمَا بَارَكْتَ عَلَى سَيِّدِنَا إِبْرَاهِيمَ، وَعَلَى آلِ سَيِّدِنَا إِبْرَاهِيمَ، فِي الْعَالَمِينَ، إِنَّكَ حَمِيدٌ مَجِيدٌ","translation":"Ya Allah berikanlah shalawat kepada Nabi Muhammad dan keluarga Nabi Muhammad, sebagaimana telah Engkau berikan kepada Nabi Ibrahim dan keluarga Nabi Ibrahim. Berikanlah barakah kepada Nabi Muhammad dan keluarga Nabi Muhammad, sebagaimana telah Engkau berikan kepada Nabi Ibrahim dan keluarga Nabi Ibrahim. Di alam Engkaulah Yang Maha Terpuji lagi Maha Mulia."},{"sequence":37,"id":"tasbih_tahmid_tahlil_takbir","category":"dzikir","title":"Tasbih, Tahmid, Tahlil, dan Takbir","source_title":"Do'a Al-Matsurat","repeat":100,"arabic":"سُبْحَانَ اللَّهِ، وَالْحَمْدُ لِلَّهِ، وَلَا إِلَهَ إِلَّا اللَّهُ، وَاللَّهُ أَكْبَرُ","translation":"Maha Suci Allah, segala puji bagi Allah, tiada Tuhan melainkan Allah dan Allah Maha Besar."},{"sequence":38,"id":"tahlil","category":"dzikir","title":"Tahlil","source_title":"Do'a Al-Matsurat","repeat":10,"arabic":"لَا إِلَهَ إِلَّا اللَّهُ وَحْدَهُ لَا شَرِيكَ لَهُ، لَهُ الْمُلْكُ وَلَهُ الْحَمْدُ، وَهُوَ عَلَى كُلِّ شَيْءٍ قَدِيرٌ","translation":"Tiada Tuhan melainkan Allah semata, yang tiada sekutu bagi-Nya, bagi-Nya kerajaan dan bagi-Nya segala puji, dan Dia berkuasa atas segala sesuatu."},{"sequence":39,"id":"kafaratul_majelis","category":"dua","title":"Kafaratul Majelis","source_title":"Do'a Al-Matsurat","repeat":3,"arabic":"سُبْحَانَكَ اللَّهُمَّ وَبِحَمْدِكَ، أَشْهَدُ أَنْ لَا إِلَهَ إِلَّا أَنْتَ، أَسْتَغْفِرُكَ وَأَتُوبُ إِلَيْكَ","translation":"Maha suci Engkau ya Allah, dan segala puji bagi-Mu. Aku bersaksi bahwa tiada Tuhan melainkan Engkau, aku memohon ampunan dan bertaubat kepada-Mu"},{"sequence":40,"id":"shalawat_penutup","category":"shalawat","title":"Shalawat Penutup","source_title":"Do'a Al-Matsurat","repeat":3,"arabic":"اللَّهُمَّ صَلِّ عَلَى سَيِّدِنَا مُحَمَّدٍ عَبْدِكَ وَرَسُولِكَ النَّبِيِّ الْأُمِّيِّ، وَعَلَى آلِهِ وَصَحْبِهِ، وَسَلِّمْ تَسْلِيمًا عَدَدَ مَا أَحَاطَ بِهِ عِلْمُكَ، وَخَطَّ بِهِ قَلَمُكَ، وَأَحْصَاهُ كِتَابُكَ، وَارْضَ اللَّهُمَّ عَنْ سَادَاتِنَا أَبِي بَكْرٍ وَعُمَرَ وَعُثْمَانَ وَعَلِيٍّ، وَعَنِ الصَّحَابَةِ أَجْمَعِينَ، وَعَنِ التَّابِعِينَ وَتَابِعِيهِمْ بِإِحْسَانٍ إِلَى يَوْمِ الدِّينِ. سُبْحَانَ رَبِّكَ رَبِّ الْعِزَّةِ عَمَّا يَصِفُونَ، وَسَلَامٌ عَلَى الْمُرْسَلِينَ، وَالْحَمْدُ لِلَّهِ رَبِّ الْعَالَمِينَ","translation":"Ya Allah berikanlah shalawat kepada Nabi Muhammad; hamba-Mu, nabi-Mu, dan Rasul-Mu; Nabi yang ummi. Juga kepada keluarga dan para sahabatnya serta berilah keselamatan sebanyak yang terjangkau oleh ilmu-Mu yang tergores oleh pena-Mu, dan yang terangkum oleh kitab-Mu. Ridhailah ya Allah para pemimpin kami, Abu Bakar, Umar, Utsman, dan Ali, semua sahabat, semua tabi’in dan orang-orang yang mengikuti mereka sampai hari pembalasan. Maha suci Tuhanmu; Tuhan kemuliaan, dari apa-apa yang mereka sifatkan. Keselamatan semoga tercurah kepada para utusan dan segala puji bagi Allah, Tuhan semesta alam."},{"sequence":41,"id":"ali_imran_26_27","category":"quran","title":"Ali Imran ayat 26-27","source_title":"Ali Imran","surah":"Ali Imran","surah_number":3,"repeat":1,"ayah_range":{"start":26,"end":27},"verses":[{"ayah":26,"arabic":"قُلِ اللَّهُمَّ مَٰلِكَ الْمُلْكِ تُؤْتِي الْمُلْكَ مَن تَشَآءُ وَتَنزِعُ الْمُلْكَ مِمَّن تَشَآءُ وَتُعِزُّ مَن تَشَآءُ وَتُذِلُّ مَن تَشَآءُ بِيَدِكَ الْخَيْرُ إِنَّكَ عَلَىٰ كُلِّ شَيْءٍ قَدِيرٌ","translation":"Katakanlah: \"Wahai Tuhan Yang mempunyai kerajaan, Engkau berikan kerajaan kepada orang yang Engkau kehendaki dan Engkau cabut kerajaan dari orang yang Engkau kehendaki. Engkau muliakan orang yang Engkau kehendaki dan Engkau hinakan orang yang Engkau kehendaki. Di tangan Engkaulah segala kebajikan.Sesungguhnya Engkau Maha Kuasa atas segala sesuatu."},{"ayah":27,"arabic":"تُولِجُ الَّيْلَ فِي النَّهَارِ وَتُولِجُ النَّهَارَ فِي الَّيْلِ وَتُخْرِجُ الْحَيَّ مِنَ الْمَيِّتِ وَتُخْرِجُ الْمَيِّتَ مِنَ الْحَيِّ وَتَرْزُقُ مَن تَشَآءُ بِغَيْرِ حِسَابٍ","translation":"Engkau masukkan malam ke dalam siang dan Engkau masukkan siang ke dalam malam. Engkau keluarkan yang hidup dari yang mati, dan Engkau keluarkan yang mati dari yang hidup. Dan Engkau beri rezeki siapa yang Engkau kehendaki tanpa hisab (batas)"}]},{"sequence":42,"id":"doa_robithoh_01","category":"dua","title":"Do'a Robithoh 1","source_title":"Do'a Robithoh","repeat":3,"arabic":"اللَّهُمَّ إِنَّ هَذَا إِقْبَالُ نَهَارِكَ (لَيْلِكَ)، وَإِدْبَارُ لَيْلِكَ (نَهَارِكَ)، وَأَصْوَاتُ دُعَاتِكَ، فَاغْفِرْ لِي","translation":"Ya Allah, sesungguhnya ini adalah siang-Mu (malam-Mu) yang telah menjelang dan (malam-Mu) siang-Mu yang tengah berlalu serta suara-suara penyeru-Mu, maka ampunilah aku."},{"sequence":43,"id":"doa_robithoh_02","category":"dua","title":"Do'a Robithoh 2","source_title":"Do'a Robithoh","repeat":3,"arabic":"اللَّهُمَّ إِنَّكَ تَعْلَمُ أَنَّ هَذِهِ الْقُلُوبَ، قَدِ اجْتَمَعَتْ عَلَى مَحَبَّتِكَ وَالْتَقَتْ عَلَى طَاعَتِكَ، وَتَوَحَّدَتْ عَلَى دَعْوَتِكَ وَتَعَاهَدَتْ عَلَى نُصْرَةِ شَرِيعَتِكَ فَوَثِّقِ اللَّهُمَّ رَابِطَتَهَا، وَأَدِمْ وُدَّهَا، وَاهْدِهَا سُبُلَهَا وَامْلَأَهَا بِنُورِكَ الَّذِي لَا يَخْبُو وَاشْرَحْ صُدُورَهَا بِفَيْضِ الْإِيمَانِ بِكَ، وَجَمِيلِ التَّوَكُّلِ عَلَيْكَ وَأَحْيِهَا بِمَعْرِفَتِكَ، وَأَمِتْهَا عَلَى الشَّهَادَةِ فِي سَبِيلِكَ إِنَّكَ نِعْمَ الْمَوْلَى وَنِعْمَ النَّصِيرِ. اللَّهُمَّ آمِينَ. وَصَلِّ اللَّهُمَّ عَلَى سَيِّدِنَا مُحَمَّدٍ وَعَلَى آلِهِ وَصَحْبِهِ وَسَلِّمْ.","translation":"Ya Allah, sesungguhnya Engkau Maha Mengetahui bahwa hati-hati ini, telah berhimpun di atas dasar kecintaan terhadap-Mu, bertemu di atas ketaatan kepada-Mu dan bersatu bagi memikul beban dakwah-Mu, hati-hati ini telah mengikat persetiaan untuk menolong meninggikan syariat-Mu. Oleh itu, Ya Allah, Engkau perkukuhkan ikatannya dan Engkau kekalkan kemesraan hati-hati ini, tunjukilah hati-hati ini akan jalan yang sebenar, serta penuhkanlah (piala) hati-hati ini dengan cahaya Rabbani-Mu yang tidak kunjung redup, lapangkanlah hati-hati dengan limpahan keimanan serta keindahan tawakkal kepada-Mu, hidup suburkanlah hati-hati ini dengan makrifat (pengenalan yang sebenarnya) tentang-Mu. (Jika Engkau takdirkan kami mati) maka matikanlah hati-hati ini sebagai para syuhada dalam perjuangan agama-Mu. Sesungguhnya Engkau sebaik-baik pelindung dan sebaik-baik penolong. Ya Allah perkenankanlah doa kami. Dan semoga shalawat serta salam selalu tercurah kepada Nabi Muhammad, keluarganya dan kepada semua sahabatnya."}],"arabic_text_policy":{"normalization":"standard_arabic_with_harakat","preserve_quran_uthmani_style":false,"changes":["Mengubah alef wasla ٱ menjadi alif standar ا.","Mengubah sukun/tanwin Qur'anic menjadi harakat standar: ْ, ً, ٌ, ٍ.","Menghapus tanda waqaf dan tanda baca Utsmani yang mengganggu tampilan font umum.","Menghapus small waw/yeh Qur'anic agar bentuk lebih mendekati data Dzikir Setelah Shalat.","Tidak mengubah struktur JSON, urutan bacaan, repeat, maupun terjemahan."]}};

const DATASETS = {
  wazifah: WAZIFAH_SUGRO_DATA,
  'doa-sholat': DOA_SHOLAT_RAW,
  'wazifah-kubro': WAZIFAH_KUBRO_RAW
};

const READER_ROUTES = {
  wazifah: {
    title: 'Wazifah Sughro',
    eyebrow: "Al-Ma'tsurat Hasan Al-Banna",
    description: 'Rangkaian bacaan yang ringkas untuk pagi dan petang.'
  },
  'doa-sholat': {
    title: 'Dzikir Setelah Shalat',
    eyebrow: 'Dzikir dan doa setelah shalat',
    description: 'Rangkaian istighfar, tahlil, dzikir, ayat pilihan, dan doa penutup setelah shalat fardhu.'
  },
  'wazifah-kubro': {
    title: 'Wazifah Kubro',
    eyebrow: "Al-Ma'tsurat Hasan Al-Banna",
    description: 'Rangkaian bacaan pagi dan petang yang lebih lengkap, meliputi surat-surat pendek, ayat kursi, dan doa-doa pilihan lainnya.'
  }
};

const EQURAN_BASE = 'https://equran.id/api/v2/shalat';
const DEFAULT_PRAYER_PROVINCE = 'DKI Jakarta';
const DEFAULT_PRAYER_CITY = 'Kota Jakarta Pusat';

const state = {
  currentView: 'home',
  currentRoute: 'home',
  currentData: [],
  currentType: null,
  dataCache: {},
  counters: loadJson(STORAGE_KEYS.counters, {}),
  displayMode: 'arab-translation',
  prayerProvince: safeStorageGet(STORAGE_KEYS.prayerProvince) || DEFAULT_PRAYER_PROVINCE,
  prayerCity: safeStorageGet(STORAGE_KEYS.prayerCity) || DEFAULT_PRAYER_CITY
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
const homePrayerWidget = document.getElementById('homePrayerWidget');
const homePrayerNext = document.getElementById('homePrayerNext');
const homePrayerCountdownLabel = document.getElementById('homePrayerCountdownLabel');
const homePrayerCountdown = document.getElementById('homePrayerCountdown');
const homePrayerLocation = document.getElementById('homePrayerLocation');
const homePrayerLocationBtn = document.getElementById('homePrayerLocationBtn');
const homePrayerSettingsModal = document.getElementById('homePrayerSettingsModal');
const homePrayerSettingsPanel = document.getElementById('homePrayerSettingsPanel');
const homePrayerSettingsCloseBtn = document.getElementById('homePrayerSettingsCloseBtn');
const homePrayerProvinceSelect = document.getElementById('homePrayerProvinceSelect');
const homePrayerCitySelect = document.getElementById('homePrayerCitySelect');
const homePrayerSaveLocationBtn = document.getElementById('homePrayerSaveLocationBtn');
const homePrayerGpsBtn = document.getElementById('homePrayerGpsBtn');
const homePrayerLocationStatus = document.getElementById('homePrayerLocationStatus');

const HOME_PRAYER_CONFIG = {
  apiBaseUrl: EQURAN_BASE
};

const homePrayerState = {
  countdownInterval: null,
  refreshPending: false,
  remainingSeconds: null,
  nextName: '',
  nextTime: '',
  settingsReady: false
};

if (year) year.textContent = new Date().getFullYear();

initPreferences();
window.addEventListener('hashchange', handleRoute);
document.addEventListener('click', handleCounterClick);
if (searchInput) searchInput.addEventListener('input', () => renderPrayerList(filterData(searchInput.value)));
fontDecreaseBtn?.addEventListener('click', () => adjustFontSize(-1));
fontIncreaseBtn?.addEventListener('click', () => adjustFontSize(1));
displayModeSelect?.addEventListener('change', () => setDisplayMode(displayModeSelect.value));
themeToggle?.addEventListener('click', toggleTheme);
soundToggleBtn?.addEventListener('click', toggleBacksound);
resetCountersBtn?.addEventListener('click', resetCountersForCurrentType);
printBtn?.addEventListener('click', () => window.print());

initHomePrayerWidget();
handleRoute();

function initPreferences() {
  const theme = safeStorageGet(STORAGE_KEYS.theme) || 'light';
  const fontSize = safeStorageGet(STORAGE_KEYS.fontSize) || 'medium';
  const displayMode = safeStorageGet(STORAGE_KEYS.displayMode) || 'arab-translation';
  document.documentElement.dataset.theme = theme === 'dark' ? 'dark' : 'light';
  document.documentElement.dataset.fontSize = ['small', 'medium', 'large'].includes(fontSize) ? fontSize : 'medium';
  state.displayMode = normalizeDisplayMode(displayMode);
  document.documentElement.dataset.displayMode = state.displayMode;
  themeToggle?.setAttribute('aria-pressed', String(document.documentElement.dataset.theme === 'dark'));
  updateFontButtons();
  if (displayModeSelect) displayModeSelect.value = state.displayMode;
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
    if (element) element.hidden = name !== viewName;
  });

  state.currentView = viewName;
  state.currentRoute = routeName;
  if (document.body) document.body.dataset.currentView = viewName;
  updateHomePrayerWidgetVisibility();
  safeStorageSet(STORAGE_KEYS.lastRoute, routeName);
}

async function showReader(type) {
  const routeConfig = READER_ROUTES[type];
  showView('reader', type);
  state.currentType = type;
  if (searchInput) searchInput.value = '';
  if (prayerList) prayerList.innerHTML = '';
  updateProgress();
  setStatus('Memuat data bacaan...');

  if (readerTitle) readerTitle.textContent = routeConfig.title;
  if (readerEyebrow) readerEyebrow.textContent = routeConfig.eyebrow;
  if (readerDescription) {
    readerDescription.textContent = routeConfig.description || '';
    readerDescription.hidden = !routeConfig.description;
  }

  try {
    const data = loadPrayerData(type);
    state.currentData = data;
    renderPrayerList(state.currentData);
  } catch (error) {
    state.currentData = [];
    if (prayerList) prayerList.innerHTML = renderErrorCard();
    setStatus('Data bacaan tidak dapat dimuat.');
    updateProgress();
    console.error(error);
  }
}

function loadPrayerData(type) {
  if (state.dataCache[type]) return state.dataCache[type];

  const payload = DATASETS[type];
  const data = type === 'wazifah'
    ? normalizeLegacyPayload(payload)
    : normalizeStructuredPayload(payload, type);

  if (!data.length) throw new Error('Data bacaan tertanam tidak berisi array bacaan yang valid.');

  state.dataCache[type] = data;
  return data;
}

function normalizeLegacyPayload(payload) {
  const rawItems = Array.isArray(payload) ? payload : Array.isArray(payload?.data) ? payload.data : [];

  return rawItems.map((item, index) => {
    const urutan = Number(item.urutan || index + 1);
    return {
      urutan,
      id: String(item.id || `bacaan-${urutan || index + 1}`),
      judul: String(item.judul || `Bacaan ${urutan || index + 1}`),
      arab: item.arab || '',
      latin: item.latin || '',
      arti: item.arti || '',
      rincian: normalizePrayerDetails(item.rincian),
      jumlah: normalizeRepeat(item.jumlah),
      kategori: item.kategori || '',
      sumber: item.sumber || '',
      catatan: item.catatan || ''
    };
  }).sort((a, b) => a.urutan - b.urutan);
}

function normalizeStructuredPayload(payload, routeType) {
  const rawItems = Array.isArray(payload) ? payload : Array.isArray(payload?.items) ? payload.items : [];
  const sourceTitle = payload?.title || '';
  const flattened = [];

  rawItems.forEach((item, index) => {
    appendStructuredItem(flattened, item, {
      routeType,
      sourceTitle,
      parentTitle: '',
      fallbackIndex: index + 1
    });
  });

  return flattened.map((item, index) => ({
    ...item,
    urutan: index + 1
  }));
}

function appendStructuredItem(target, item, context) {
  if (!item) return;

  if (Array.isArray(item.items) && item.items.length) {
    item.items.forEach((child, childIndex) => {
      appendStructuredItem(target, {
        ...child,
        category: child.category || item.category,
        repeat: child.repeat || item.repeat
      }, {
        ...context,
        parentTitle: item.title || context.parentTitle,
        fallbackIndex: `${context.fallbackIndex}.${childIndex + 1}`
      });
    });
    return;
  }

  if (Array.isArray(item.subsections) && item.subsections.length) {
    item.subsections.forEach((section, sectionIndex) => {
      appendStructuredItem(target, {
        ...section,
        title: section.title || item.title,
        category: section.category || item.category,
        source: item.source || section.source,
        status: section.status || item.status
      }, {
        ...context,
        parentTitle: item.title || context.parentTitle,
        fallbackIndex: `${context.fallbackIndex}.${sectionIndex + 1}`
      });
    });
    return;
  }

  target.push(normalizeStructuredItem(item, context));
}

function normalizeStructuredItem(item, context) {
  const fallbackIndex = String(context.fallbackIndex || '').replace(/[^0-9a-z.]/gi, '-') || 'item';
  const title = item.title || context.parentTitle || `Bacaan ${fallbackIndex}`;
  const source = item.source || buildSourceFromItem(item) || context.sourceTitle || '';
  const category = item.category || '';
  const details = buildDetailsFromStructuredItem(item);
  const arab = item.arabic || item.arab || '';
  const arti = item.translation || item.arti || item.terjemah || item.terjemahan || '';
  const hasAnyContent = Boolean(arab || arti || item.latin || details.some((entry) => entry.arab || entry.arti || entry.latin));
  const note = item.status === 'structured_placeholder_from_user_text' && !hasAnyContent
    ? 'Teks Arab dan terjemahan belum tersedia di file JSON referensi.'
    : (item.note || item.catatan || '');

  return {
    urutan: 0,
    id: `${context.routeType}-${item.id || slugify(title) || fallbackIndex}`,
    judul: String(title),
    arab,
    latin: item.latin || item.transliteration || '',
    arti,
    rincian: details,
    jumlah: normalizeRepeat(item.repeat || item.jumlah),
    kategori: category,
    sumber: source,
    catatan: note
  };
}

function buildDetailsFromStructuredItem(item) {
  if (Array.isArray(item.verses) && item.verses.length) {
    return item.verses.map((verse, index) => ({
      label: verse?.ayah ? `Ayat ${verse.ayah}` : `Ayat ${index + 1}`,
      ayat: verse?.ayah ?? '',
      arab: verse?.arabic || verse?.arab || '',
      latin: verse?.latin || verse?.transliteration || '',
      arti: verse?.translation || verse?.arti || verse?.terjemah || verse?.terjemahan || ''
    }));
  }

  if (Array.isArray(item.texts) && item.texts.length) {
    return item.texts.map((text, index) => ({
      label: text?.title || `Bagian ${index + 1}`,
      ayat: text?.ayah ?? '',
      arab: text?.arabic || text?.arab || '',
      latin: text?.latin || text?.transliteration || '',
      arti: text?.translation || text?.arti || text?.terjemah || text?.terjemahan || ''
    }));
  }

  return [];
}

function buildSourceFromItem(item) {
  if (item.source) return item.source;
  if (item.surah && item.ayah) return `QS ${item.surah}:${item.ayah}`;
  if (item.surah && Array.isArray(item.verses) && item.verses.length) {
    const ayahs = item.verses.map((verse) => Number(verse.ayah)).filter(Number.isFinite);
    if (ayahs.length) {
      const min = Math.min(...ayahs);
      const max = Math.max(...ayahs);
      return `QS ${item.surah}:${min === max ? min : `${min}-${max}`}`;
    }
    return `QS ${item.surah}`;
  }
  return '';
}

function normalizePrayerDetails(details) {
  if (!Array.isArray(details)) return [];

  return details.map((detail, index) => {
    const ayat = detail?.ayat ?? detail?.nomor ?? detail?.number ?? '';
    const label = detail?.label || (ayat !== '' ? `Ayat ${ayat}` : `Bagian ${index + 1}`);
    return {
      label: String(label),
      ayat,
      arab: detail?.arab || detail?.arabic || '',
      latin: detail?.latin || detail?.transliteration || '',
      arti: detail?.arti || detail?.translation || detail?.terjemah || detail?.terjemahan || ''
    };
  });
}

function normalizeRepeat(value) {
  const numberValue = Number(value);
  if (!Number.isFinite(numberValue) || numberValue < 1) return 1;
  return Math.max(1, Math.floor(numberValue));
}

function renderPrayerList(items) {
  const filteredItems = Array.isArray(items) ? items : [];

  if (!prayerList) return;

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
  const target = normalizeRepeat(item.jumlah);
  const count = Math.min(Number(state.counters[getCounterKey(item.id)] || 0), target);
  const isDone = count >= target;

  return `
    <article class="prayer-card ${isDone ? 'prayer-card-done' : ''}" id="${domId(item.id)}">
      <div class="prayer-meta">
        <div>
          <h2 class="prayer-title">${displayNumber ? `${displayNumber}. ` : ''}${escapeHtml(item.judul)}</h2>
          <div class="meta-row">
            ${item.sumber ? `<span class="category-badge">${escapeHtml(item.sumber)}</span>` : ''}
            ${item.kategori ? `<span class="category-badge">${escapeHtml(formatCategory(item.kategori))}</span>` : ''}
          </div>
        </div>
        <span class="repeat-badge">× ${target}</span>
      </div>

      ${renderPrayerContent(item, showTranslation)}
      ${item.catatan ? `<p class="note-text">${formatMultilineText(item.catatan)}</p>` : ''}
      ${renderCounterTools(item, count, target, isDone)}
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

  const hasContent = item.arab || item.latin || item.arti;
  if (!hasContent) {
    return '<p class="note-text">Teks bacaan belum tersedia pada data referensi.</p>';
  }

  return `
    ${item.arab ? renderArabicText(item.arab) : ''}
    ${item.latin ? `<p class="latin-text">${formatMultilineText(item.latin)}</p>` : ''}
    ${showTranslation && item.arti ? `<p class="translation-text">${formatMultilineText(item.arti)}</p>` : ''}
  `;
}

function renderVerseSegment(detail, showTranslation) {
  const label = detail.label || (detail.ayat ? `Ayat ${detail.ayat}` : '');
  const hasContent = detail.arab || detail.latin || detail.arti;

  return `
    <section class="verse-segment">
      ${label ? `<span class="arabic-label verse-label" dir="ltr">${escapeHtml(label)}</span>` : ''}
      ${detail.arab ? renderArabicText(detail.arab) : ''}
      ${detail.latin ? `<p class="latin-text">${formatMultilineText(detail.latin)}</p>` : ''}
      ${showTranslation && detail.arti ? `<p class="translation-text verse-translation">${formatMultilineText(detail.arti)}</p>` : ''}
      ${!hasContent ? '<p class="note-text">Teks Arab dan terjemahan belum tersedia pada data referensi.</p>' : ''}
    </section>
  `;
}

function renderCounterTools(item, count, target, isDone) {
  return `
    <div class="card-tools">
      <span class="counter-status ${isDone ? 'done' : ''}">${count} / ${target} dibaca</span>
      <div class="counter-actions">
        <button class="btn btn-primary" type="button" data-counter-add="${escapeAttr(item.id)}" ${isDone ? 'disabled' : ''}>Sudah dibaca</button>
        <button class="btn btn-ghost" type="button" data-counter-reset="${escapeAttr(item.id)}">Ulangi</button>
      </div>
    </div>
  `;
}

function renderArabicText(value) {
  const lines = String(value)
    .split(/\r?\n/)
    .map((line) => line.trim())
    .filter(Boolean);

  if (!lines.length) return '';

  const html = lines.map((line) => {
    if (/^(ayat|surat|doa|hadits|dzikir|bagian)\s+/i.test(line)) {
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
  if (statusMessage) statusMessage.textContent = message;
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
  themeToggle?.setAttribute('aria-pressed', String(nextTheme === 'dark'));
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

function slugify(value) {
  return String(value || '')
    .toLowerCase()
    .normalize('NFD')
    .replace(/[\u0300-\u036f]/g, '')
    .replace(/[^a-z0-9]+/g, '-')
    .replace(/^-+|-+$/g, '');
}

function formatCategory(value) {
  return String(value || '')
    .replace(/[_-]+/g, ' ')
    .replace(/\b\w/g, (letter) => letter.toUpperCase());
}


function initHomePrayerWidget() {
  initHomePrayerLocationControls();
  updateHomePrayerWidgetVisibility();
  refreshHomePrayerWidget();
  if (homePrayerState.countdownInterval) clearInterval(homePrayerState.countdownInterval);
  homePrayerState.countdownInterval = window.setInterval(() => {
    if (!Number.isFinite(homePrayerState.remainingSeconds)) return;
    if (homePrayerState.remainingSeconds <= 0) {
      refreshHomePrayerWidget();
      return;
    }
    homePrayerState.remainingSeconds -= 1;
    renderHomePrayerCountdown();
  }, 1000);
}

function initHomePrayerLocationControls() {
  if (homePrayerState.settingsReady) return;
  homePrayerState.settingsReady = true;

  homePrayerLocationBtn?.addEventListener('click', async () => {
    const willOpen = homePrayerSettingsModal?.hidden;
    toggleHomePrayerSettings(willOpen);
    if (willOpen) await hydrateHomePrayerLocationControls();
  });

  homePrayerSettingsCloseBtn?.addEventListener('click', () => toggleHomePrayerSettings(false));
  homePrayerSettingsModal?.addEventListener('click', (event) => {
    if (event.target === homePrayerSettingsModal) toggleHomePrayerSettings(false);
  });
  document.addEventListener('keydown', (event) => {
    if (event.key === 'Escape' && homePrayerSettingsModal && !homePrayerSettingsModal.hidden) {
      toggleHomePrayerSettings(false);
    }
  });

  homePrayerProvinceSelect?.addEventListener('change', async () => {
    setHomePrayerLocationStatus('Memuat kabupaten/kota...');
    try {
      await fillHomePrayerCities(homePrayerProvinceSelect.value);
      setHomePrayerLocationStatus('Pilih kabupaten/kota, lalu tekan Simpan Wilayah.');
    } catch (error) {
      setHomePrayerLocationStatus('Kabupaten/kota gagal dimuat. Coba lagi saat koneksi tersedia.');
    }
  });

  homePrayerSaveLocationBtn?.addEventListener('click', async () => {
    if (!homePrayerProvinceSelect || !homePrayerCitySelect) return;
    state.prayerProvince = homePrayerProvinceSelect.value;
    state.prayerCity = homePrayerCitySelect.value;
    persistHomePrayerLocation();
    setHomePrayerLocationStatus(`Wilayah disimpan: ${state.prayerCity}, ${state.prayerProvince}. Memperbarui jadwal...`);
    try {
      await loadHomePrayerSchedule(true);
      await refreshHomePrayerWidget();
      setHomePrayerLocationStatus(`Wilayah aktif: ${state.prayerCity}, ${state.prayerProvince}. Jadwal berhasil diperbarui.`);
      toggleHomePrayerSettings(false);
    } catch (error) {
      setHomePrayerLocationStatus('Wilayah tersimpan, tetapi jadwal belum bisa diperbarui. Coba lagi saat online.');
    }
  });

  homePrayerGpsBtn?.addEventListener('click', async () => {
    setHomePrayerLocationStatus('Meminta izin GPS dan mendeteksi wilayah...');
    try {
      const detected = await detectRegionFromGps();
      state.prayerProvince = detected.province;
      state.prayerCity = detected.city;
      persistHomePrayerLocation();
      await hydrateHomePrayerLocationControls();
      setHomePrayerLocationStatus(`GPS cocok dengan wilayah: ${state.prayerCity}, ${state.prayerProvince}. Memperbarui jadwal...`);
      await loadHomePrayerSchedule(true);
      await refreshHomePrayerWidget();
      setHomePrayerLocationStatus(`Wilayah aktif: ${state.prayerCity}, ${state.prayerProvince}. Jadwal berhasil diperbarui.`);
      toggleHomePrayerSettings(false);
    } catch (error) {
      setHomePrayerLocationStatus(error.message || 'GPS belum berhasil mencocokkan wilayah. Silakan pilih manual.');
    }
  });
}

function toggleHomePrayerSettings(forceOpen) {
  if (!homePrayerSettingsModal || !homePrayerLocationBtn) return;
  const nextOpen = typeof forceOpen === 'boolean' ? forceOpen : homePrayerSettingsModal.hidden;
  homePrayerSettingsModal.hidden = !nextOpen;
  homePrayerLocationBtn.setAttribute('aria-expanded', String(nextOpen));
  document.body?.classList.toggle('home-prayer-modal-open', nextOpen);
}

function updateHomePrayerWidgetVisibility() {
  if (!homePrayerWidget) return;
  const shouldShow = state.currentView === 'home' && homePrayerWidget.classList.contains('is-ready');
  homePrayerWidget.hidden = !shouldShow;
}

async function refreshHomePrayerWidget() {
  if (!homePrayerWidget || homePrayerState.refreshPending) return;
  homePrayerState.refreshPending = true;

  try {
    const schedule = await loadHomePrayerSchedule(false);
    const nextPrayer = getNextPrayerFromSchedule(schedule);
    if (!nextPrayer) throw new Error('Jadwal shalat tidak tersedia.');

    homePrayerState.nextName = nextPrayer.name;
    homePrayerState.nextTime = nextPrayer.time;
    homePrayerState.remainingSeconds = nextPrayer.remainingSeconds;

    if (homePrayerNext) homePrayerNext.innerHTML = `<span class="home-prayer-name">${nextPrayer.name}</span><span class="home-prayer-separator"> | </span><span class="home-prayer-time">${nextPrayer.time}</span>`;
    if (homePrayerCountdownLabel) homePrayerCountdownLabel.textContent = `${schedule.data.kabkota}, ${schedule.data.provinsi}`;
    if (homePrayerLocation) {
      homePrayerLocation.textContent = `${schedule.data.kabkota}, ${schedule.data.provinsi}`;
      homePrayerLocation.hidden = true;
    }

    homePrayerWidget.classList.add('is-ready');
    renderHomePrayerCountdown();
  } catch (error) {
    console.error('Gagal memuat jadwal shalat home:', error);
    homePrayerWidget?.classList.remove('is-ready');
    homePrayerWidget && (homePrayerWidget.hidden = true);
  } finally {
    homePrayerState.refreshPending = false;
    updateHomePrayerWidgetVisibility();
  }
}

function renderHomePrayerCountdown() {
  if (!homePrayerCountdown) return;
  homePrayerCountdown.textContent = formatCountdown(homePrayerState.remainingSeconds);
}

async function loadHomePrayerSchedule(force = false) {
  const now = new Date();
  const month = now.getMonth() + 1;
  const year = now.getFullYear();
  const cacheKey = `almatsurat-prayer-${state.prayerProvince}-${state.prayerCity}-${year}-${month}`;
  const cached = loadJson(cacheKey, null);
  if (!force && cached?.data?.jadwal?.length) return cached;

  try {
    const response = await fetch(HOME_PRAYER_CONFIG.apiBaseUrl, {
      method: 'POST',
      headers: { 'Content-Type': 'application/json' },
      body: JSON.stringify({
        provinsi: state.prayerProvince,
        kabkota: state.prayerCity,
        bulan: month,
        tahun: year
      })
    });
    if (!response.ok) throw new Error('Jadwal shalat gagal dimuat.');
    const json = await response.json();
    if (json.code !== 200 || !json.data?.jadwal?.length) {
      throw new Error(json.message || 'Format jadwal tidak sesuai.');
    }
    const payload = { data: json.data, cachedAt: new Date().toISOString() };
    safeStorageSet(cacheKey, JSON.stringify(payload));
    return payload;
  } catch (error) {
    if (cached?.data?.jadwal?.length) return cached;
    throw error;
  }
}

function getNextPrayerFromSchedule(schedulePayload) {
  const jadwal = schedulePayload?.data?.jadwal || [];
  if (!jadwal.length) return null;

  const now = new Date();
  const today = localYmd(now);
  const tomorrow = new Date(now.getFullYear(), now.getMonth(), now.getDate() + 1);
  const tomorrowYmd = localYmd(tomorrow);
  const prayers = [
    ['subuh', 'Subuh'],
    ['dzuhur', 'Dzuhur'],
    ['ashar', 'Ashar'],
    ['maghrib', 'Maghrib'],
    ['isya', 'Isya']
  ];
  const candidates = [];

  for (const row of jadwal) {
    if (![today, tomorrowYmd].includes(row.tanggal_lengkap)) continue;
    const [year, month, day] = String(row.tanggal_lengkap).split('-').map(Number);
    for (const [key, label] of prayers) {
      const time = normalizePrayerTime(row[key]);
      if (!time) continue;
      const [hour, minute] = time.split(':').map(Number);
      const date = new Date(year, month - 1, day, hour, minute, 0);
      if (date > now) {
        candidates.push({
          name: label,
          time,
          remainingSeconds: Math.floor((date.getTime() - now.getTime()) / 1000)
        });
      }
    }
  }

  return candidates.sort((a, b) => a.remainingSeconds - b.remainingSeconds)[0] || null;
}

function normalizePrayerTime(value) {
  const raw = String(value || '').trim();
  if (!raw) return '';
  const match = raw.match(/(\d{1,2}):(\d{2})/);
  return match ? `${match[1].padStart(2, '0')}:${match[2]}` : '';
}

function parseTimeToSeconds(timeValue) {
  const [hour, minute] = String(timeValue).split(':').map((value) => Number(value || 0));
  return toDaySeconds(hour, minute, 0);
}

function toDaySeconds(hour, minute, second) {
  return (Number(hour || 0) * 3600) + (Number(minute || 0) * 60) + Number(second || 0);
}

function formatCountdown(totalSeconds) {
  const value = Math.max(0, Number(totalSeconds || 0));
  const hours = Math.floor(value / 3600);
  const minutes = Math.floor((value % 3600) / 60);
  const seconds = value % 60;
  return `${String(hours).padStart(2, '0')} : ${String(minutes).padStart(2, '0')} : ${String(seconds).padStart(2, '0')}`;
}

async function hydrateHomePrayerLocationControls() {
  if (!homePrayerProvinceSelect || !homePrayerCitySelect) return;

  try {
    const provinces = await fetchPrayerProvinces();
    homePrayerProvinceSelect.innerHTML = provinces.map((province) => (
      `<option value="${escapeAttr(province)}" ${province === state.prayerProvince ? 'selected' : ''}>${escapeHtml(province)}</option>`
    )).join('');
    await fillHomePrayerCities(state.prayerProvince);
    setHomePrayerLocationStatus(`Wilayah aktif: ${state.prayerCity}, ${state.prayerProvince}`);
  } catch (error) {
    homePrayerProvinceSelect.innerHTML = `<option value="${escapeAttr(state.prayerProvince)}">${escapeHtml(state.prayerProvince)}</option>`;
    homePrayerCitySelect.innerHTML = `<option value="${escapeAttr(state.prayerCity)}">${escapeHtml(state.prayerCity)}</option>`;
    setHomePrayerLocationStatus('Daftar wilayah belum bisa dimuat. Wilayah tersimpan tetap digunakan.');
  }
}

async function fillHomePrayerCities(province) {
  if (!homePrayerCitySelect) return;
  homePrayerCitySelect.innerHTML = '<option>Memuat kabupaten/kota...</option>';
  const cities = await fetchPrayerCities(province);
  const selectedCity = cities.includes(state.prayerCity) ? state.prayerCity : cities[0];
  homePrayerCitySelect.innerHTML = cities.map((city) => (
    `<option value="${escapeAttr(city)}" ${city === selectedCity ? 'selected' : ''}>${escapeHtml(city)}</option>`
  )).join('');
}

function setHomePrayerLocationStatus(message) {
  if (homePrayerLocationStatus) homePrayerLocationStatus.textContent = message;
}

function persistHomePrayerLocation() {
  safeStorageSet(STORAGE_KEYS.prayerProvince, state.prayerProvince);
  safeStorageSet(STORAGE_KEYS.prayerCity, state.prayerCity);
}

async function fetchPrayerProvinces() {
  const cached = loadJson('almatsurat-prayer-provinces', null);
  if (Array.isArray(cached) && cached.length) return cached;
  const response = await fetch(`${EQURAN_BASE}/provinsi`);
  if (!response.ok) throw new Error('Provinsi gagal dimuat.');
  const json = await response.json();
  if (json.code !== 200 || !Array.isArray(json.data)) throw new Error('Format provinsi tidak sesuai.');
  safeStorageSet('almatsurat-prayer-provinces', JSON.stringify(json.data));
  return json.data;
}

async function fetchPrayerCities(province) {
  const cacheKey = `almatsurat-prayer-cities-${province}`;
  const cached = loadJson(cacheKey, null);
  if (Array.isArray(cached) && cached.length) return cached;
  const response = await fetch(`${EQURAN_BASE}/kabkota`, {
    method: 'POST',
    headers: { 'Content-Type': 'application/json' },
    body: JSON.stringify({ provinsi: province })
  });
  if (!response.ok) throw new Error('Kabupaten/kota gagal dimuat.');
  const json = await response.json();
  if (json.code !== 200 || !Array.isArray(json.data)) throw new Error('Format kabupaten/kota tidak sesuai.');
  safeStorageSet(cacheKey, JSON.stringify(json.data));
  return json.data;
}

async function detectRegionFromGps() {
  if (!navigator.geolocation) throw new Error('Perangkat/browser belum mendukung GPS.');
  const position = await new Promise((resolve, reject) => {
    navigator.geolocation.getCurrentPosition(resolve, reject, {
      enableHighAccuracy: true,
      timeout: 12000,
      maximumAge: 300000
    });
  });
  const { latitude, longitude } = position.coords;
  const reverseUrl = `https://nominatim.openstreetmap.org/reverse?format=jsonv2&lat=${encodeURIComponent(latitude)}&lon=${encodeURIComponent(longitude)}&zoom=10&addressdetails=1&accept-language=id`;
  const response = await fetch(reverseUrl);
  if (!response.ok) throw new Error('Reverse geocoding GPS gagal. Silakan pilih manual.');
  const json = await response.json();
  const address = json.address || {};
  const provinceRaw = address.state || address.region || address.province || '';
  const cityRaw = address.city || address.county || address.municipality || address.city_district || address.town || address.village || '';
  const provinces = await fetchPrayerProvinces();
  const province = matchPrayerProvince(provinceRaw, provinces);
  if (!province) throw new Error('Provinsi dari GPS belum cocok. Silakan pilih manual.');
  const cities = await fetchPrayerCities(province);
  const city = matchPrayerCity(cityRaw, cities);
  if (!city) throw new Error('Kabupaten/kota dari GPS belum cocok. Silakan pilih manual.');
  return { province, city };
}

function matchPrayerProvince(rawValue, provinces) {
  const mapped = prayerProvinceAliasMap()[normalizePrayerLookupKey(rawValue)] || rawValue;
  const wanted = normalizePrayerLookupKey(mapped);
  return provinces.find((province) => normalizePrayerLookupKey(province) === wanted)
    || provinces.find((province) => wanted.includes(normalizePrayerLookupKey(province)) || normalizePrayerLookupKey(province).includes(wanted));
}

function matchPrayerCity(rawValue, cities) {
  const wanted = normalizePrayerLookupKey(rawValue).replace(/^(kabupaten|kab|kota)\s+/, '');
  return cities.find((city) => normalizePrayerLookupKey(city).replace(/^(kabupaten|kab|kota)\s+/, '') === wanted)
    || cities.find((city) => normalizePrayerLookupKey(city).includes(wanted) || wanted.includes(normalizePrayerLookupKey(city).replace(/^(kabupaten|kab|kota)\s+/, '')));
}

function normalizePrayerLookupKey(value) {
  return String(value || '')
    .toLowerCase()
    .normalize('NFD')
    .replace(/[\u0300-\u036f]/g, '')
    .replace(/dki\s+jakarta.*/, 'dki jakarta')
    .replace(/di\s+yogyakarta|daerah\s+istimewa\s+yogyakarta/, 'di yogyakarta')
    .replace(/provinsi|province|regency|city|kota|kabupaten/g, '')
    .replace(/[^a-z0-9]+/g, ' ')
    .trim();
}

function prayerProvinceAliasMap() {
  return {
    'jakarta': 'DKI Jakarta',
    'special capital region of jakarta': 'DKI Jakarta',
    'yogyakarta': 'DI Yogyakarta',
    'special region of yogyakarta': 'DI Yogyakarta'
  };
}

function localYmd(value) {
  const year = value.getFullYear();
  const month = String(value.getMonth() + 1).padStart(2, '0');
  const day = String(value.getDate()).padStart(2, '0');
  return `${year}-${month}-${day}`;
}
