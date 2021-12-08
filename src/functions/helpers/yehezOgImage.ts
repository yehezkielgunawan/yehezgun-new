export const yehezOgImage = (text: string, isArticle: boolean) => {
  if (isArticle) {
    return `https://yehez-og-image.yehezgun.com/${text}.png?theme=dark&md=1&fontSize=75px&images=https%3A%2F%2Fres.cloudinary.com%2Fyehez%2Fimage%2Fupload%2Fv1636202181%2Fpeep_amkhuu.svg&widths=250&heights=250`;
  }
  return `https://yehez-og-image.yehezgun.com/**${text}**%20%7C%20YehezGun.png?theme=dark&md=1&fontSize=100px&images=https%3A%2F%2Fres.cloudinary.com%2Fyehez%2Fimage%2Fupload%2Fv1636202181%2Fpeep_amkhuu.svg&widths=250&heights=250`;
};
