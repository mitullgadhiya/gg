import { commonIconDefaultAttrs } from "@/components/icons/utils"

import { createIconBase } from "../icon-base"

export const AuditedIcon = createIconBase({
  displayName: "AuditedIcon",
  viewBox: "0 0 72 72",
  className: "size-[1em]",
  ...commonIconDefaultAttrs,
  children: (
    <>
      <path d="M38.2523 22.6467C39.1147 21.6585 40.615 21.5565 41.6033 22.419C42.5915 23.2815 42.6935 24.7818 41.831 25.77L30.7765 38.4367C30.3444 38.9318 29.7265 39.2257 29.0698 39.2486C28.4131 39.2715 27.7762 39.0213 27.3108 38.5575L19.3653 30.6408C18.4361 29.715 18.4334 28.2112 19.3592 27.282C20.285 26.3529 21.7888 26.3501 22.718 27.2759L28.866 33.4018L38.2523 22.6467Z" />

      <path d="M6 30.5417C6 16.9877 16.9877 6 30.5417 6C44.0957 6 55.0833 16.9877 55.0833 30.5417C55.0833 36.4665 52.9838 41.9009 49.4882 46.1415C49.5395 46.1848 49.5894 46.2306 49.6377 46.279L62.3044 58.9456C63.2319 59.8731 63.2319 61.3769 62.3044 62.3044C61.3769 63.2319 59.8731 63.2319 58.9456 62.3044L46.279 49.6377C46.2306 49.5894 46.1848 49.5395 46.1415 49.4882C41.9009 52.9838 36.4665 55.0833 30.5417 55.0833C16.9877 55.0833 6 44.0957 6 30.5417ZM30.5417 10.75C19.611 10.75 10.75 19.611 10.75 30.5417C10.75 41.4723 19.611 50.3333 30.5417 50.3333C41.4723 50.3333 50.3333 41.4723 50.3333 30.5417C50.3333 19.611 41.4723 10.75 30.5417 10.75Z" />
    </>
  ),
})
