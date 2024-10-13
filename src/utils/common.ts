export const getImageUrl = (imgName: string) => {
  return new URL(`../assets/personalPractise/${imgName}`, import.meta.url).href;
}