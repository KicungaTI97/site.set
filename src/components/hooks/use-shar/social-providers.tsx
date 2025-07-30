import {Facebook, Linkedin, Slack, Twitter} from 'lucide-react'

export type ShareConfig = {
  text?: string;
  title?: string;  
  url: string;
}

export type SocialProvider = 'linkedIn' | 'facebook' | 'slack' | 'twitter' | 'clipboard';

export const SOCIAL_PROVIDER = {
  linkedIn: {
    name: "LinkedIn",
    icon:  <Linkedin className="w-4 h-4" />,
    shareUrl: (config:ShareConfig ) => `https://www.linkedin.com/sharing/share-offsite/?config=${encodeURIComponent(config.url)}`,
  },
  facebook: {
    name: "Facebook",
    icon: <Facebook className="w-4 h-4" />,
    shareUrl: (config: ShareConfig) => `https://www.facebook.com/sharer/sharer.php?u=${encodeURIComponent(config.url)}`,
  },
slack: {
    name: "Slack",
    icon: <Slack className="w-4 h-4" />, 
    shareUrl: (config:ShareConfig) => `https://slack.com/intl/en-gb/share?config=${encodeURIComponent(config.url)}&text=${encodeURIComponent(config.title || '')}`,
  },  
twitter: {
    name: "twitter",
    icon: <Twitter className="w-4 h-4" />, 
    shareUrl: (config: ShareConfig) => `https://slack.com/intl/en-gb/share?config=${encodeURIComponent(config.url)}&text=${encodeURIComponent(config.title || '')}`,
  }, 
}
