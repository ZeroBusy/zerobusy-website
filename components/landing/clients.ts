export type Client = {
  name: string;
  src: string;
  href: string;
  /** Intrinsic aspect ratio, used so next/image reserves correct space. */
  width: number;
  height: number;
};

export const clients: Client[] = [
  { name: "Hype Fly India", src: "/clients/hypefly.webp", href: "https://hypefly.co.in", width: 120, height: 40 },
  { name: "Sneakinn", src: "/clients/sneakinn.webp", href: "https://sneakinn.in/", width: 120, height: 40 },
  { name: "Mumbai Retina Center", src: "/clients/mumbai-retina-center.png", href: "https://mumbairetinacenter.com", width: 60, height: 60 },
  { name: "Khatwani Group", src: "/clients/khatwani-group.png", href: "https://khatwanigroup.in/", width: 54, height: 60 },
  { name: "Vaayu Realty", src: "/clients/vaayu-realty.png", href: "https://vaayurealty.com/", width: 140, height: 60 },
  { name: "Key Getaways", src: "/clients/key-getaways.svg", href: "https://keygetaways.com/", width: 140, height: 40 },
  { name: "J Elliot", src: "/clients/j-elliot.png", href: "https://jelliot.com.au/", width: 130, height: 61 },
  { name: "Samani Decorators", src: "/clients/samani-decorators.png", href: "https://www.samanidecorators.in/", width: 90, height: 84 },
  { name: "KKings Events", src: "/clients/kkings-events.png", href: "https://kkingsevents.com/", width: 79, height: 100 },
  { name: "Lubna Meherally", src: "/clients/lubna-meherally.png", href: "https://www.therapywithlubna.com/", width: 170, height: 40 },
  { name: "Veer Gidwani", src: "/clients/veer-gidwani.jpeg", href: "https://veergidwanicoaching.com/42days/", width: 80, height: 40 },
  { name: "Indira Gems", src: "/clients/indira-gems.png", href: "#", width: 120, height: 60 },
];
