export interface Timeline {
  id: number;
  title: string;
  tahun: string;
  icon: string;
  description: string;
}

export const experience: Timeline[] = [
  {
    id: 1,
    title: "SMA N 2 TEGAL",
    tahun: "2019 - 2022",
    icon: "/src/images/sma.jpg",
    description: "Termasuk SMA yang masuh ke dalam kategori sekolah adiwiyata",
  },

  {
    id: 2,
    title: "PT. DINGXIN BOGA INDONESIA",
    tahun: "2022 - 2023",
    icon: "/src/images/aicee.png",
    description:
      "Perusahaan yang bergerak dalam bidang distributor eskrim Aice",
  },

  {
    id: 3,
    title: "TRANSSTUDIO MINI TEGAL",
    tahun: "2023 - NOW",
    icon: "/src/images/tsmm.png",
    description:
      "Trans Studio Mini Tegal adalah salah satu destinasi hiburan keluarga yang terletak di kota Tegal, Jawa Tengah. Tempat ini menawarkan pengalaman rekreasi indoor yang menyenangkan dengan berbagai wahana permainan modern, edukatif, dan interaktif.",
  },

  {
    id: 4,
    title: "PT. ABSOLUTE SERVIS NUSANTARA",
    tahun: "2024 - NOW",
    icon: "/src/images/abs.jpg",
    description: "Termasuk SMA yang masuh ke dalam kategori sekolah adiwiyata",
  },
];
