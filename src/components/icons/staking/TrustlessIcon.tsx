import { commonIconDefaultAttrs } from "@/components/icons/utils"

import { createIconBase } from "../icon-base"

export const TrustlessIcon = createIconBase({
  displayName: "TrustlessIcon",
  viewBox: "0 0 72 72",
  className: "size-[1em]",
  ...commonIconDefaultAttrs,
  children: (
    <>
      <path d="M21.0508 33.0075C17.5865 30.2206 15.3725 25.9665 15.3725 21.2C15.3725 12.8053 22.2396 6 30.7106 6C39.1816 6 46.0486 12.8053 46.0486 21.2C46.0486 25.117 44.5536 28.6879 42.0981 31.3829C38.6701 32.2404 35.6056 34.0033 33.1788 36.4L26.3233 36.4C23.7066 36.4 21.4322 38.1803 20.8261 40.7029L17.8681 53.0147C17.7473 53.5174 18.132 54 18.6534 54H27.9014C28.2634 55.6932 28.8507 57.3039 29.6306 58.8H18.6534C15.0033 58.8 12.3108 55.4218 13.1562 51.9029L16.1142 39.5911C16.7987 36.7423 18.6288 34.4033 21.0508 33.0075ZM20.2161 21.2C20.2161 15.4562 24.9147 10.8 30.7106 10.8C36.5065 10.8 41.205 15.4562 41.205 21.2C41.205 26.9419 36.5096 31.5969 30.7163 31.6H30.7048C24.9116 31.5969 20.2161 26.9419 20.2161 21.2Z" />

      <path d="M41.782 47.6C40.4445 47.6 39.3602 48.6745 39.3602 50C39.3602 51.3255 40.4445 52.4 41.782 52.4H51.9273C53.2649 52.4 54.3491 51.3255 54.3491 50C54.3491 48.6745 53.2649 47.6 51.9273 47.6H41.782Z" />

      <path d="M63 50C63 58.8366 55.7715 66 46.8547 66C37.9379 66 30.7094 58.8366 30.7094 50C30.7094 41.1634 37.9379 34 46.8547 34C55.7715 34 63 41.1634 63 50ZM58.1564 50C58.1564 56.1856 53.0965 61.2 46.8547 61.2C40.6129 61.2 35.553 56.1856 35.553 50C35.553 43.8144 40.6129 38.8 46.8547 38.8C53.0965 38.8 58.1564 43.8144 58.1564 50Z" />
    </>
  ),
})
