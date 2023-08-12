import { clsx } from "clsx"
import { Blocks, TrendingUp, User2, Zap } from "lucide-react";
import { twMerge } from "tailwind-merge"
 
export function cn(...inputs) {
  return twMerge(clsx(inputs))
}

export const projects = [
  {
    img: "https://jbm.infura-ipfs.io/ipfs/QmRXMCbe7MvhvabciTVCenLknNeTjoH1hHUGhjrfjFuGnU",
    title: "Edu4Labs02",
    desc: "Who do the adventurers meet in the market? Shuffle and draw one of these...",
    amount: 30,
    volume: 0.901,
  },
  {
    img: "https://jbm.infura-ipfs.io/ipfs/QmRXMCbe7MvhvabciTVCenLknNeTjoH1hHUGhjrfjFuGnU",
    title: "Highway Inc",
    desc: "Who do the adventurers meet in the market? Shuffle and draw one of these...",
    amount: 30,
    volume: 0.901,
  },
  {
    img: "https://jbm.infura-ipfs.io/ipfs/QmRXMCbe7MvhvabciTVCenLknNeTjoH1hHUGhjrfjFuGnU",
    title: "Build up 500",
    desc: "Who do the adventurers meet in the market? Shuffle and draw one of these...",
    amount: 30,
    volume: 0.901,
  },
  {
    img: "https://jbm.infura-ipfs.io/ipfs/QmRXMCbe7MvhvabciTVCenLknNeTjoH1hHUGhjrfjFuGnU",
    title: "Highness in order",
    desc: "Who do the adventurers meet in the market? Shuffle and draw one of these...",
    amount: 30,
    volume: 0.901,
  },
  {
    img: "https://jbm.infura-ipfs.io/ipfs/QmRXMCbe7MvhvabciTVCenLknNeTjoH1hHUGhjrfjFuGnU",
    title: "Highway Inc",
    desc: "Who do the adventurers meet in the market? Shuffle and draw one of these...",
    amount: 30,
    volume: 0.901,
  },
  {
    img: "https://jbm.infura-ipfs.io/ipfs/QmRXMCbe7MvhvabciTVCenLknNeTjoH1hHUGhjrfjFuGnU",
    title: "Build up 500",
    desc: "Who do the adventurers meet in the market? Shuffle and draw one of these...",
    amount: 30,
    volume: 0.901,
  },
  {
    img: "https://jbm.infura-ipfs.io/ipfs/QmRXMCbe7MvhvabciTVCenLknNeTjoH1hHUGhjrfjFuGnU",
    title: "Highness in order",
    desc: "Who do the adventurers meet in the market? Shuffle and draw one of these...",
    amount: 30,
    volume: 0.901,
  },
];

export const reasons = [
  {
    icon: <User2 />,
    title: 'Community owned',
    desc: 'Decentraise is owned and governed by the people — its builders, supporters, and project creators using the protocol.',
    color: 'bg-[#68CA8F]'
  },
  {
    icon: <Zap />,
    title: 'Battle tested',
    desc: 'Decentraise is reliable, open-source, audited, and has been battle-tested by more than 1,000 projects raising over 50,000 ETH.',
    color: 'bg-[#EE6F3A]'
  },
  {
    icon: <Zap />,
    title: 'Trust minimized',
    desc: 'Decentraise is non-custodial, meaning you have complete ownership over your project and its funds. Easily customize your own on-chain rules.',
    color: 'bg-[#A47AED]'
  },
  {
    icon: <TrendingUp />,
    title: 'Flexible',
    desc: "Whether you're building a boutique crypto law firm or the next mega-fundraiser, Decentraise is customizable to match your needs.",
    color: 'bg-[#FFB2DD]'
  },
  {
    icon: <Blocks />,
    title: 'Extensible',
    desc: "Safe, Snapshot, or even on-chain governance: Decentraise uses simple standards and works with all of your favorite Ethereum tools.",
    color: 'bg-[#FFBB45]'
  },
];