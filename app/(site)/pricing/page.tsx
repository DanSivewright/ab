import { Suspense } from "react"
import Link from "next/link"
import {
  checkoutSession,
  createCustomerPortalLink,
  hasSubscription,
} from "@/actions/stripe"
import { Loader2 } from "lucide-react"

import { Await } from "@/components/await"
import { Section } from "@/components/section"
import { Title } from "@/components/title"

type Props = {}
const PricingPage: React.FC<Props> = async ({}) => {
  return (
    <Section spacer="p" className="bg-[#030303] overflow-hidden relative">
      <svg
        className="absolute opacity-30 w-[100vw] left-1/2 -translate-x-1/2 top-0"
        viewBox="0 0 1681 978"
        fill="none"
        xmlns="http://www.w3.org/2000/svg"
      >
        <mask
          id="mask0_1503_1700"
          style={{
            maskType: "alpha",
          }}
          maskUnits="userSpaceOnUse"
          x="0"
          y="0"
          width="1681"
          height="978"
        >
          <path d="M0.5 0L1680.5 0V768L0.5 978V0Z" fill="#1C1740"></path>
        </mask>
        <g mask="url(#mask0_1503_1700)">
          <path d="M0.5 0L1680.5 0V768L0.5 978V0Z" fill="#0E0D17"></path>
          <g filter="url(#filter0_f_1503_1700)">
            <path
              d="M2156.05 -606.341C2156.05 -606.341 2075.29 25.8064 1731.15 201.252C1394.62 372.826 1152.78 -75.6031 819.09 101.068C485.521 277.673 743.525 703.193 419.536 895.252C70.69 1102.05 -575.501 838.969 -575.501 838.969"
              stroke="url(#paint0_angular_1503_1700)"
              stroke-width="325.413"
              stroke-linecap="round"
            ></path>
          </g>
          <g filter="url(#filter1_f_1503_1700)">
            <path
              d="M2290.69 543.196C2290.69 543.196 1863.83 968.178 1555.06 879.367C1253.1 792.517 1378.97 298.802 1075.64 217.624C772.419 136.477 669.857 623.3 363.039 559.967C32.6814 491.774 -191.789 -121.981 -191.789 -121.981"
              stroke="url(#paint1_angular_1503_1700)"
              stroke-width="325.413"
              stroke-linecap="round"
            ></path>
          </g>
          <g
            //
            style={{
              mixBlendMode: "overlay",
            }}
            filter="url(#filter2_f_1503_1700)"
          >
            <path
              d="M1743.11 788.778C1743.11 788.778 1440.79 1023.51 1207.37 957.41C979.098 892.767 1054.54 604.218 825.457 542.894C596.459 481.592 538.127 767.036 307.109 716.187C58.3658 661.436 -131.751 286.41 -131.751 286.41"
              stroke="url(#paint2_angular_1503_1700)"
              stroke-width="325.413"
              stroke-linecap="round"
            ></path>
          </g>
          <g filter="url(#filter3_f_1503_1700)">
            <path
              d="M398.746 1256.29C398.746 1256.29 374.987 904.578 532.709 802.487C686.949 702.649 856.582 947.979 1008.85 845.354C1161.05 742.766 985.518 510.366 1131.24 399.342C1288.15 279.799 1645.24 416.706 1645.24 416.706"
              stroke="url(#paint3_angular_1503_1700)"
              stroke-width="325.413"
              stroke-linecap="round"
            ></path>
          </g>
          <g
            style={{
              mixBlendMode: "soft-light",
            }}
            opacity="0.5"
          >
            <path
              d="M0.5 422L1919.5 182.5V-57L0.5 182.5V422Z"
              fill="url(#paint4_linear_1503_1700)"
            ></path>
          </g>
          <g
            style={{
              mixBlendMode: "soft-light",
            }}
            opacity="0.5"
          >
            <path
              d="M1630.5 218L-364.5 467.5L-364.5 717L1630.5 467.5L1630.5 218Z"
              fill="url(#paint5_linear_1503_1700)"
            ></path>
          </g>
        </g>
        <defs>
          <filter
            id="filter0_f_1503_1700"
            x="-870.685"
            y="-896.931"
            width="3321.89"
            height="2162.05"
            filterUnits="userSpaceOnUse"
            color-interpolation-filters="sRGB"
          >
            <feFlood flood-opacity="0" result="BackgroundImageFix"></feFlood>
            <feBlend
              mode="normal"
              in="SourceGraphic"
              in2="BackgroundImageFix"
              result="shape"
            ></feBlend>
            <feGaussianBlur
              stdDeviation="65.0825"
              result="effect1_foregroundBlur_1503_1700"
            ></feGaussianBlur>
          </filter>
          <filter
            id="filter1_f_1503_1700"
            x="-483.427"
            y="-416.166"
            width="3065.71"
            height="1601.89"
            filterUnits="userSpaceOnUse"
            color-interpolation-filters="sRGB"
          >
            <feFlood flood-opacity="0" result="BackgroundImageFix"></feFlood>
            <feBlend
              mode="normal"
              in="SourceGraphic"
              in2="BackgroundImageFix"
              result="shape"
            ></feBlend>
            <feGaussianBlur
              stdDeviation="65.0825"
              result="effect1_foregroundBlur_1503_1700"
            ></feGaussianBlur>
          </filter>
          <filter
            id="filter2_f_1503_1700"
            x="-423.376"
            y="-7.76707"
            width="2458.08"
            height="1271.04"
            filterUnits="userSpaceOnUse"
            color-interpolation-filters="sRGB"
          >
            <feFlood flood-opacity="0" result="BackgroundImageFix"></feFlood>
            <feBlend
              mode="normal"
              in="SourceGraphic"
              in2="BackgroundImageFix"
              result="shape"
            ></feBlend>
            <feGaussianBlur
              stdDeviation="65.0825"
              result="effect1_foregroundBlur_1503_1700"
            ></feGaussianBlur>
          </filter>
          <filter
            id="filter3_f_1503_1700"
            x="102.081"
            y="60.0571"
            width="1838.6"
            height="1486.55"
            filterUnits="userSpaceOnUse"
            color-interpolation-filters="sRGB"
          >
            <feFlood flood-opacity="0" result="BackgroundImageFix"></feFlood>
            <feBlend
              mode="normal"
              in="SourceGraphic"
              in2="BackgroundImageFix"
              result="shape"
            ></feBlend>
            <feGaussianBlur
              stdDeviation="65.0825"
              result="effect1_foregroundBlur_1503_1700"
            ></feGaussianBlur>
          </filter>
          <radialGradient
            id="paint0_angular_1503_1700"
            cx="0"
            cy="0"
            r="1"
            gradientUnits="userSpaceOnUse"
            gradientTransform="translate(918.431 340.19) rotate(-119.789) scale(257.962 1544.32)"
          >
            <stop stop-color="#FF7BDA"></stop>
            <stop offset="0.354167" stop-color="#BFDEF8"></stop>
            <stop offset="0.604167" stop-color="#5840FA"></stop>
            <stop offset="0.806766" stop-color="#BFDEF8"></stop>
            <stop offset="1" stop-color="#5840FA"></stop>
          </radialGradient>
          <radialGradient
            id="paint1_angular_1503_1700"
            cx="0"
            cy="0"
            r="1"
            gradientUnits="userSpaceOnUse"
            gradientTransform="translate(991.002 461.861) rotate(-76.9047) scale(257.962 1284.31)"
          >
            <stop stop-color="#FF7BDA"></stop>
            <stop offset="0.354167" stop-color="#BFDEF8"></stop>
            <stop offset="0.604167" stop-color="#5840FA"></stop>
            <stop offset="0.806766" stop-color="#BFDEF8"></stop>
            <stop offset="1" stop-color="#5840FA"></stop>
          </radialGradient>
          <radialGradient
            id="paint2_angular_1503_1700"
            cx="0"
            cy="0"
            r="1"
            gradientUnits="userSpaceOnUse"
            gradientTransform="translate(771.464 684.678) rotate(-76.9047) scale(151.011 969.963)"
          >
            <stop stop-color="#FF7BDA"></stop>
            <stop offset="0.354167" stop-color="#BFDEF8"></stop>
            <stop offset="0.604167" stop-color="#5840FA"></stop>
            <stop offset="0.806766" stop-color="#BFDEF8"></stop>
            <stop offset="1" stop-color="#5840FA"></stop>
          </radialGradient>
          <radialGradient
            id="paint3_angular_1503_1700"
            cx="0"
            cy="0"
            r="1"
            gradientUnits="userSpaceOnUse"
            gradientTransform="translate(933.516 714.121) rotate(54.1329) scale(151.011 751.026)"
          >
            <stop stop-color="#FF7BDA"></stop>
            <stop offset="0.354167" stop-color="#BFDEF8"></stop>
            <stop offset="0.604167" stop-color="#5840FA"></stop>
            <stop offset="0.806766" stop-color="#BFDEF8"></stop>
            <stop offset="1" stop-color="#5840FA"></stop>
          </radialGradient>
          <linearGradient
            id="paint4_linear_1503_1700"
            x1="1933.78"
            y1="34.2379"
            x2="37.7558"
            y2="320.803"
            gradientUnits="userSpaceOnUse"
          >
            <stop stop-color="white"></stop>
            <stop offset="1" stop-color="white" stop-opacity="0"></stop>
          </linearGradient>
          <linearGradient
            id="paint5_linear_1503_1700"
            x1="-379.344"
            y1="621.953"
            x2="1591.95"
            y2="324.626"
            gradientUnits="userSpaceOnUse"
          >
            <stop stop-color="white"></stop>
            <stop offset="1" stop-color="white" stop-opacity="0"></stop>
          </linearGradient>
        </defs>
      </svg>
      <div className="relative flex flex-col items-center p-8 md:justify-center">
        <div className="lg:text-center">
          <p className="inline-flex items-center px-2 py-1 text-xs font-medium text-gray-400 rounded-md bg-gray-400/10 ring-1 ring-inset ring-gray-400/20">
            Start Today
          </p>
          <Title showAs={3} className="text-white">
            We like to keep it simple <br /> One plan one price
          </Title>
          <Title style={{ marginBottom: 0 }} className="text-white ">
            R 200
          </Title>
        </div>
        <div>
          <ul className="grid mt-8 mx-auto text-white md:grid-cols-2 gap-x-12 gap-y-2">
            <li className="flex items-center gap-3">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                className="w-4 h-4 icon icon-tabler icon-tabler-circle-dot"
                viewBox="0 0 24 24"
                stroke-width="2"
                stroke="currentColor"
                fill="none"
                stroke-linecap="round"
                stroke-linejoin="round"
              >
                <path stroke="none" d="M0 0h24v24H0z" fill="none"></path>
                <path d="M12 12m-1 0a1 1 0 1 0 2 0a1 1 0 1 0 -2 0"></path>
                <path d="M12 12m-9 0a9 9 0 1 0 18 0a9 9 0 1 0 -18 0"></path>
              </svg>
              10 of a thing we offer
            </li>
            <li className="flex items-center gap-3">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                className="w-4 h-4 icon icon-tabler icon-tabler-circle-dot"
                viewBox="0 0 24 24"
                stroke-width="2"
                stroke="currentColor"
                fill="none"
                stroke-linecap="round"
                stroke-linejoin="round"
              >
                <path stroke="none" d="M0 0h24v24H0z" fill="none"></path>
                <path d="M12 12m-1 0a1 1 0 1 0 2 0a1 1 0 1 0 -2 0"></path>
                <path d="M12 12m-9 0a9 9 0 1 0 18 0a9 9 0 1 0 -18 0"></path>
              </svg>
              10 Free drinks
            </li>
            <li className="flex items-center gap-3">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                className="w-4 h-4 icon icon-tabler icon-tabler-circle-dot"
                viewBox="0 0 24 24"
                stroke-width="2"
                stroke="currentColor"
                fill="none"
                stroke-linecap="round"
                stroke-linejoin="round"
              >
                <path stroke="none" d="M0 0h24v24H0z" fill="none"></path>
                <path d="M12 12m-1 0a1 1 0 1 0 2 0a1 1 0 1 0 -2 0"></path>
                <path d="M12 12m-9 0a9 9 0 1 0 18 0a9 9 0 1 0 -18 0"></path>
              </svg>
              Unlimited Access To Parties
            </li>
            <li className="flex items-center gap-3">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                className="w-4 h-4 icon icon-tabler icon-tabler-circle-dot"
                viewBox="0 0 24 24"
                stroke-width="2"
                stroke="currentColor"
                fill="none"
                stroke-linecap="round"
                stroke-linejoin="round"
              >
                <path stroke="none" d="M0 0h24v24H0z" fill="none"></path>
                <path d="M12 12m-1 0a1 1 0 1 0 2 0a1 1 0 1 0 -2 0"></path>
                <path d="M12 12m-9 0a9 9 0 1 0 18 0a9 9 0 1 0 -18 0"></path>
              </svg>
              100% Satisfaction
            </li>
          </ul>
          <div className="w-1/2 mx-auto mt-8">
            <button
              className="rounded-lg px-4 mx-auto py-2 text-sm transition-all flex items-center justify-center text-white bg-gradient-to-b from-white/[.105] to-white/[.15] hover:to-white/[.25] h-10 ring-1 ring-inset ring-white/10"
              aria-label="Indie hacker tier"
            >
              Launching Soon
            </button>
          </div>
        </div>
        <div className="mt-5 text-xs text-gray-400 lg:text-center">
          We use a third party payment processor, who will add local taxes at
          checkout.
          <br />
          After creating your account, you will be redirected to them to
          complete your purchase.
          <div className="mt-5">
            By signing up, you agree to our
            <a className="text-white" href="https://copyremix.com/terms">
              Terms and Conditions
            </a>
            and
            <a className="text-white" href="https://copyremix.com/privacy">
              Privacy Policy
            </a>
          </div>
        </div>
      </div>
    </Section>
  )
}
export default PricingPage