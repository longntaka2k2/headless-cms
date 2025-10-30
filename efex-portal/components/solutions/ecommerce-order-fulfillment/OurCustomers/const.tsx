const logoLinks = {
  zalora: "image_19_88b37c62c1.png",
  drEnzyme: "image_20_a7be834f31.png",
  amuse: "amuse_1_341ac7a613.png",
  hooga: "image_21_c4fde5e75e.png",
  shopbop: "image_22_b2b5a743c6.png",
  kiwico: "image_23_02520a10c6.png",
  cosmoHeaven: "cosmo_1_cf21152197.png",
  ckcyin: "chcyin_1_1f5a0f5802.png",
  skechers: "Frame_2b55eb8956.svg",
  janbox: "Frame_1_8008a8bea6.svg",
};

export const mobileLogos = Array(2)
  .fill("")
  .map(() => [
    { link: logoLinks.zalora, width: 78, height: 11 },
    { link: logoLinks.drEnzyme, width: 80, height: 10 },
    { link: logoLinks.amuse, width: 66, height: 20 },
    { link: logoLinks.kiwico, width: 73, height: 16 },
    { link: logoLinks.cosmoHeaven, width: 22, height: 22 },
    { link: logoLinks.ckcyin, width: 76, height: 21 },
  ]);

export const desktopLogos = Array(2)
  .fill("")
  .map(() => [
    { link: logoLinks.zalora, width: 120, height: 10 },
    {
      link: logoLinks.drEnzyme,
      width: 126,
      height: 16,
    },
    {
      link: logoLinks.amuse,
      width: 126,
      height: 36,
    },
    {
      link: logoLinks.hooga,
      width: 121,
      height: 40,
    },
    {
      link: logoLinks.shopbop,
      width: 121,
      height: 30,
    },
    {
      link: logoLinks.kiwico,
      width: 121,
      height: 28,
    },
    {
      link: logoLinks.cosmoHeaven,
      width: 42,
      height: 40,
    },
    {
      link: logoLinks.ckcyin,
      width: 121,
      height: 34,
    },
    { link: logoLinks.skechers, width: 107, height: 40 },
    {
      link: logoLinks.janbox,
      width: 121,
      height: 34,
    },
  ]);
