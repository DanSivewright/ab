export const makeImageUrl = (url: string) => {
  return `${process.env.NEXT_PUBLIC_API_URL!.replace(/\/api$/, "")}${url}`
}
