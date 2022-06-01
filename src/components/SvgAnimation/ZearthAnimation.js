import React from 'react';

import './ZearthAnimation.css';
const ZearthAnimation = () => {
  return (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      xmlnsXlink="http://www.w3.org/1999/xlink"
      viewBox="0 0 1280.92 1026.73"
    >
      <defs>
        <image
          id="image"
          width="439"
          height="355"
          xlinkHref="data:image/png;base64,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"
        />
      </defs>
      <g id="floor">
        <rect x="0.68" y="2.73" width="1280" height="1024" />
        <path
          className="cls-1-2"
          d="M0,315.75-.68,567.52H558.78l-.68,155.93h645.55s.92-229.3,0-232.06,73.93-4.58,75.14-4.58,0-165,0-165Z"
          transform="translate(0.68 2.73)"
        />
      </g>
      <g id="Layer_6" data-name="Layer 6">
        <use
          transform="translate(0.68 2.73) scale(0.24 0.24)"
          xlinkHref="#image"
        />
        <use
          transform="translate(80.85 2.73) scale(0.24 0.24)"
          xlinkHref="#image"
        />
        <use
          transform="translate(0.68 82.76) scale(0.24 0.24)"
          xlinkHref="#image"
        />
        <use
          transform="translate(80.85 82.76) scale(0.24 0.24)"
          xlinkHref="#image"
        />
        <use
          transform="translate(160.25 2.73) scale(0.24 0.24)"
          xlinkHref="#image"
        />
        <use
          transform="translate(240.42 2.73) scale(0.24 0.24)"
          xlinkHref="#image"
        />
        <use
          transform="translate(160.25 82.76) scale(0.24 0.24)"
          xlinkHref="#image"
        />
        <use
          transform="translate(240.42 82.76) scale(0.24 0.24)"
          xlinkHref="#image"
        />
        <use
          transform="translate(319.72 2.73) scale(0.24 0.24)"
          xlinkHref="#image"
        />
        <use
          transform="translate(399.89 2.73) scale(0.24 0.24)"
          xlinkHref="#image"
        />
        <use
          transform="translate(319.72 82.76) scale(0.24 0.24)"
          xlinkHref="#image"
        />
        <use
          transform="translate(399.89 82.76) scale(0.24 0.24)"
          xlinkHref="#image"
        />
        <use
          transform="translate(479.29 2.73) scale(0.24 0.24)"
          xlinkHref="#image"
        />
        <use
          transform="translate(559.46 2.73) scale(0.24 0.24)"
          xlinkHref="#image"
        />
        <use
          transform="translate(479.29 82.76) scale(0.24 0.24)"
          xlinkHref="#image"
        />
        <use
          transform="translate(559.46 82.76) scale(0.24 0.24)"
          xlinkHref="#image"
        />
        <use
          transform="translate(638.82 2.73) scale(0.24 0.24)"
          xlinkHref="#image"
        />
        <use
          transform="translate(718.99 2.73) scale(0.24 0.24)"
          xlinkHref="#image"
        />
        <use
          transform="translate(638.82 82.76) scale(0.24 0.24)"
          xlinkHref="#image"
        />
        <use
          transform="translate(718.99 82.76) scale(0.24 0.24)"
          xlinkHref="#image"
        />
        <use
          transform="translate(798.39 2.73) scale(0.24 0.24)"
          xlinkHref="#image"
        />
        <use
          transform="translate(878.56 2.73) scale(0.24 0.24)"
          xlinkHref="#image"
        />
        <use
          transform="translate(798.39 82.76) scale(0.24 0.24)"
          xlinkHref="#image"
        />
        <use
          transform="translate(878.56 82.76) scale(0.24 0.24)"
          xlinkHref="#image"
        />
        <use
          transform="translate(957.86 2.73) scale(0.24 0.24)"
          xlinkHref="#image"
        />
        <use
          transform="translate(1038.03 2.73) scale(0.24 0.24)"
          xlinkHref="#image"
        />
        <use
          transform="translate(957.86 82.76) scale(0.24 0.24)"
          xlinkHref="#image"
        />
        <use
          transform="translate(1038.03 82.76) scale(0.24 0.24)"
          xlinkHref="#image"
        />
        <use
          transform="translate(1117.43 2.73) scale(0.24 0.24)"
          xlinkHref="#image"
        />
        <use
          transform="translate(1197.59 2.73) scale(0.19 0.24)"
          xlinkHref="#image"
        />
        <use
          transform="translate(1117.43 82.76) scale(0.24 0.24)"
          xlinkHref="#image"
        />
        <use
          transform="translate(1197.59 82.76) scale(0.19 0.24)"
          xlinkHref="#image"
        />
        <use
          transform="translate(0 159.23) scale(0.24 0.24)"
          xlinkHref="#image"
        />
        <use
          transform="translate(80.17 159.23) scale(0.24 0.24)"
          xlinkHref="#image"
        />
        <use
          transform="translate(0 239.26) scale(0.24 0.24)"
          xlinkHref="#image"
        />
        <use
          transform="translate(80.17 239.26) scale(0.24 0.24)"
          xlinkHref="#image"
        />
        <use
          transform="translate(159.57 159.23) scale(0.24 0.24)"
          xlinkHref="#image"
        />
        <use
          transform="translate(239.74 159.23) scale(0.24 0.24)"
          xlinkHref="#image"
        />
        <use
          transform="translate(159.57 239.26) scale(0.24 0.24)"
          xlinkHref="#image"
        />
        <use
          transform="translate(239.74 239.26) scale(0.24 0.24)"
          xlinkHref="#image"
        />
        <use
          transform="translate(319.04 159.23) scale(0.24 0.24)"
          xlinkHref="#image"
        />
        <use
          transform="translate(399.21 159.23) scale(0.24 0.24)"
          xlinkHref="#image"
        />
        <use
          transform="translate(319.04 239.26) scale(0.24 0.24)"
          xlinkHref="#image"
        />
        <use
          transform="translate(399.21 239.26) scale(0.24 0.24)"
          xlinkHref="#image"
        />
        <use
          transform="translate(478.61 159.23) scale(0.24 0.24)"
          xlinkHref="#image"
        />
        <use
          transform="translate(558.78 159.23) scale(0.24 0.24)"
          xlinkHref="#image"
        />
        <use
          transform="translate(478.61 239.26) scale(0.24 0.24)"
          xlinkHref="#image"
        />
        <use
          transform="translate(558.78 239.26) scale(0.24 0.24)"
          xlinkHref="#image"
        />
        <use
          transform="translate(638.14 159.23) scale(0.24 0.24)"
          xlinkHref="#image"
        />
        <use
          transform="translate(718.31 159.23) scale(0.24 0.24)"
          xlinkHref="#image"
        />
        <use
          transform="translate(638.14 239.26) scale(0.24 0.24)"
          xlinkHref="#image"
        />
        <use
          transform="translate(718.31 239.26) scale(0.24 0.24)"
          xlinkHref="#image"
        />
        <use
          transform="translate(797.71 159.23) scale(0.24 0.24)"
          xlinkHref="#image"
        />
        <use
          transform="translate(877.88 159.23) scale(0.24 0.24)"
          xlinkHref="#image"
        />
        <use
          transform="translate(797.71 239.26) scale(0.24 0.24)"
          xlinkHref="#image"
        />
        <use
          transform="translate(877.88 239.26) scale(0.24 0.24)"
          xlinkHref="#image"
        />
        <use
          transform="translate(957.18 159.23) scale(0.24 0.24)"
          xlinkHref="#image"
        />
        <use
          transform="translate(1037.35 159.23) scale(0.24 0.24)"
          xlinkHref="#image"
        />
        <use
          transform="translate(957.18 239.26) scale(0.24 0.24)"
          xlinkHref="#image"
        />
        <use
          transform="translate(1037.35 239.26) scale(0.24 0.24)"
          xlinkHref="#image"
        />
        <use
          transform="translate(1116.75 159.23) scale(0.24 0.24)"
          xlinkHref="#image"
        />
        <use
          transform="translate(1196.91 159.23) scale(0.19 0.24)"
          xlinkHref="#image"
        />
        <use
          transform="translate(1116.75 239.26) scale(0.24 0.24)"
          xlinkHref="#image"
        />
        <use
          transform="translate(1196.91 239.26) scale(0.19 0.24)"
          xlinkHref="#image"
        />
      </g>
      <g id="waterfall1">
        <path
          className="cls-2-2"
          d="M480.44,40.13V89.66h4.81V79.8l5.28.46V100h4.36v5h5.27V89.89h4.59V100h5.5v-5l4.81-.46V105h5.05V80.49l5.5-.23-1.15,9.86,5.51-.46V105l5.73-.92V94.94l4.59.45v10.55h9.86v-6l-4.82-.69.23-14.21h4.59V95.39l4.81-.45V89.2l5.5.23v-44c0-.92-5.5-.23-5.5-.23l-.23-14.91H544.41l.46-5.27h-4.81l.23,10.32L535,35.09l-.23,4.59-5,.45V29.59h-5l.23,5-4.47.23v14.9l-5.39.23V34.86l-5.5.23.46,9.63L505,45l-.22-5.27-4.82.22V29.82h-5l-.23,14.67-4.59.69V35.32l-5-.46-.46,5.27Z"
          transform="translate(0.68 2.73)"
        />
        <path
          className="cls-2-2"
          d="M480.44.54c-.46-.54,0,9.48,0,9.48h4.74V0Z"
          transform="translate(0.68 2.73)"
        />
        <polygon
          className="cls-2-2"
          points="490.9 2.73 490.9 22.53 495.64 22.53 495.64 27.73 500.84 27.73 500.84 12.75 505.73 12.75 505.73 22.38 510.93 22.68 510.93 17.34 515.97 17.95 515.97 27.73 521.13 27.12 521.13 2.73 490.9 2.73"
        />
        <path
          className="cls-2-2"
          d="M525.23-.68V10H530V25h5.5V14.61l4.74-.31L540.06,25H550V19.8l-4.89.31L545,5h5V15.06h5V10h5.42s.54-11.38,0-10.7S525.23-.68,525.23-.68Z"
          transform="translate(0.68 2.73)"
        />
        <rect x="496.1" y="52.49" width="4.59" height="10.24" />
        <rect x="506.02" y="87.5" width="4.91" height="10.17" />
        <rect x="536.15" y="82.46" width="4.59" height="10.13" />
        <rect x="525.3" y="42.25" width="4.89" height="16.36" />
        <rect x="536.15" y="42.25" width="4.59" height="6.11" />
        <rect x="506.02" y="7.74" width="4.91" height="10.67" />
        <rect x="536.15" y="2.22" width="4.59" height="10.85" />
        <rect
          className="cls-1-2"
          x="490.29"
          y="62.74"
          width="6.04"
          height="6.04"
        />
        <rect
          className="cls-1-2"
          x="506.02"
          y="52.49"
          width="4.15"
          height="16.28"
        />
        <rect
          className="cls-1-2"
          x="520.1"
          y="67.17"
          width="5.2"
          height="7.03"
        />
        <rect
          className="cls-1-2"
          x="544.86"
          y="37.51"
          width="4.74"
          height="17.43"
        />
        <rect className="cls-1-2" x="555.26" y="68.2" width="3.82" height="6" />
        <rect
          className="cls-1-2"
          x="555.64"
          y="92.58"
          width="5.5"
          height="10.2"
        />
        <rect
          className="cls-1-2"
          x="525.91"
          y="97.68"
          width="5.1"
          height="5.1"
        />
        <rect
          className="cls-1-2"
          x="510.93"
          y="97.67"
          width="5.12"
          height="5.12"
        />
        <rect
          className="cls-1-2"
          x="501.45"
          y="92.62"
          width="4.57"
          height="10.09"
        />
        <rect
          className="cls-1-2"
          x="485.93"
          y="82.53"
          width="4.97"
          height="15.15"
        />
        <rect
          className="cls-1-2"
          x="495.64"
          y="27.73"
          width="16.05"
          height="4.74"
        />
        <rect
          className="cls-1-2"
          x="480.92"
          y="92.58"
          width="5.02"
          height="5.1"
        />
        <rect
          className="cls-1-2"
          x="490.29"
          y="27.73"
          width="5.35"
          height="20.64"
        />
        <rect
          className="cls-1-2"
          x="480.92"
          y="32.47"
          width="9.38"
          height="5.04"
        />
        <rect
          className="cls-1-2"
          x="545.74"
          y="18.4"
          width="20.83"
          height="4.43"
        />
        <path
          className="cls-2-2"
          d="M482,121.08v49.53h4.81v-9.86l5.28.45v19.72h4.35V186h5.28V170.83h4.58v10.09h5.51v-5l4.81-.46V186h5.05V161.43l5.5-.23L526,171.06l5.51-.45V186l5.73-.92v-9.17l4.59.46v10.55h9.86v-6l-4.82-.68.23-14.22h4.59v10.32l4.81-.46v-5.73l5.5.23v-44c0-.92-5.5-.23-5.5-.23l-.23-14.9H546l.46-5.28h-4.81l.23,10.32-5.28-.23-.23,4.59-5,.46V110.53h-5.05l.23,5-4.47.23v14.91l-5.39.23V115.8l-5.5.23.46,9.63-5.05.23-.23-5.27-4.81.23V110.76h-5.05l-.22,14.67-4.59.69v-9.86l-5-.46-.46,5.28Z"
          transform="translate(0.68 2.73)"
        />
        <rect x="497.68" y="133.44" width="4.59" height="10.24" />
        <rect x="507.6" y="168.44" width="4.91" height="10.17" />
        <rect x="537.73" y="163.4" width="4.59" height="10.13" />
        <rect x="526.88" y="123.19" width="4.89" height="16.36" />
        <rect x="537.73" y="123.19" width="4.59" height="6.11" />
        <rect
          className="cls-1-2"
          x="491.87"
          y="143.68"
          width="6.04"
          height="6.04"
        />
        <rect
          className="cls-1-2"
          x="507.6"
          y="133.44"
          width="4.15"
          height="16.28"
        />
        <rect
          className="cls-1-2"
          x="521.68"
          y="148.11"
          width="5.2"
          height="7.03"
        />
        <rect
          className="cls-1-2"
          x="546.44"
          y="118.46"
          width="4.74"
          height="17.43"
        />
        <rect
          className="cls-1-2"
          x="556.84"
          y="149.14"
          width="3.82"
          height="6"
        />
        <rect
          className="cls-1-2"
          x="557.22"
          y="173.53"
          width="5.5"
          height="10.2"
        />
        <rect
          className="cls-1-2"
          x="527.49"
          y="178.63"
          width="5.1"
          height="5.1"
        />
        <rect
          className="cls-1-2"
          x="512.51"
          y="178.61"
          width="5.12"
          height="5.12"
        />
        <rect
          className="cls-1-2"
          x="503.03"
          y="173.56"
          width="4.57"
          height="10.09"
        />
        <rect
          className="cls-1-2"
          x="487.51"
          y="163.47"
          width="4.97"
          height="15.15"
        />
        <rect
          className="cls-1-2"
          x="497.22"
          y="108.67"
          width="16.05"
          height="4.74"
        />
        <rect
          className="cls-1-2"
          x="482.49"
          y="173.53"
          width="5.02"
          height="5.1"
        />
        <rect
          className="cls-1-2"
          x="491.87"
          y="108.67"
          width="5.35"
          height="20.64"
        />
        <rect
          className="cls-1-2"
          x="482.49"
          y="113.41"
          width="9.38"
          height="5.04"
        />
        <path
          className="cls-2-2"
          d="M483.69,201.6v49.52h4.81v-9.86l5.28.46v19.72h4.35v5.05h5.28V251.35H508v10.09h5.51v-5l4.81-.46v10.55h5.05V242l5.5-.23-1.15,9.86,5.51-.46v15.37l5.73-.92V256.4l4.59.46V267.4h9.85v-6l-4.81-.69.23-14.21h4.58v10.32l4.82-.46v-5.73l5.5.22v-44c0-.92-5.5-.23-5.5-.23l-.23-14.9H547.66l.46-5.28h-4.81l.23,10.32-5.28-.23-.23,4.59-5,.46V191.05h-5l.23,5-4.47.23v14.91l-5.39.23V196.32l-5.5.23.46,9.63-5,.23-.23-5.27-4.81.23V191.28h-5.05L497.9,206l-4.58.69v-9.86l-5.05-.46-.45,5.28Z"
          transform="translate(0.68 2.73)"
        />
        <rect x="499.35" y="213.96" width="4.59" height="10.24" />
        <rect x="509.27" y="248.96" width="4.91" height="10.17" />
        <rect x="539.4" y="243.92" width="4.59" height="10.13" />
        <rect x="528.55" y="203.71" width="4.89" height="16.36" />
        <rect x="539.4" y="203.71" width="4.59" height="6.11" />
        <rect
          className="cls-1-2"
          x="493.54"
          y="224.2"
          width="6.04"
          height="6.04"
        />
        <rect
          className="cls-1-2"
          x="509.27"
          y="213.96"
          width="4.15"
          height="16.28"
        />
        <rect
          className="cls-1-2"
          x="523.35"
          y="228.63"
          width="5.2"
          height="7.03"
        />
        <rect
          className="cls-1-2"
          x="548.11"
          y="198.97"
          width="4.74"
          height="17.43"
        />
        <rect
          className="cls-1-2"
          x="558.51"
          y="229.66"
          width="3.82"
          height="6"
        />
        <rect
          className="cls-1-2"
          x="558.89"
          y="254.04"
          width="5.5"
          height="10.2"
        />
        <rect
          className="cls-1-2"
          x="529.16"
          y="259.15"
          width="5.1"
          height="5.1"
        />
        <rect
          className="cls-1-2"
          x="514.18"
          y="259.13"
          width="5.12"
          height="5.12"
        />
        <rect
          className="cls-1-2"
          x="504.7"
          y="254.08"
          width="4.57"
          height="10.09"
        />
        <rect
          className="cls-1-2"
          x="489.18"
          y="243.99"
          width="4.97"
          height="15.15"
        />
        <rect
          className="cls-1-2"
          x="498.89"
          y="189.19"
          width="16.05"
          height="4.74"
        />
        <rect
          className="cls-1-2"
          x="484.16"
          y="254.04"
          width="5.02"
          height="5.1"
        />
        <rect
          className="cls-1-2"
          x="493.54"
          y="189.19"
          width="5.35"
          height="20.64"
        />
        <rect
          className="cls-1-2"
          x="484.16"
          y="193.93"
          width="9.38"
          height="5.04"
        />
        <path
          className="cls-2-2"
          d="M485.36,279.64v49.53h4.81v-9.86l5.28.45v19.72h4.35v5h5.28V329.39h4.58v10.09h5.51v-5L520,334v10.55h5V320l5.5-.23-1.15,9.86,5.51-.45v15.36l5.73-.92v-9.17l4.58.46v10.55h9.86v-6l-4.81-.68.23-14.22h4.58V334.9l4.82-.46v-5.73l5.5.23v-44c0-.92-5.5-.23-5.5-.23l-.23-14.9H549.33l.46-5.28H545l.23,10.32-5.27-.23-.23,4.59-5,.46V269.09h-5l.23,5-4.47.23v14.91l-5.39.23V274.36l-5.5.23.46,9.63-5.05.23-.23-5.27-4.81.23V269.32H499.8L499.57,284l-4.58.69v-9.86l-5.05-.46-.46,5.28Z"
          transform="translate(0.68 2.73)"
        />
        <rect x="501.02" y="292" width="4.59" height="10.24" />
        <rect x="510.93" y="327" width="4.91" height="10.17" />
        <rect x="541.07" y="321.96" width="4.59" height="10.13" />
        <rect x="530.21" y="281.75" width="4.89" height="16.36" />
        <rect x="541.07" y="281.75" width="4.59" height="6.11" />
        <rect
          className="cls-1-2"
          x="495.21"
          y="302.24"
          width="6.04"
          height="6.04"
        />
        <rect
          className="cls-1-2"
          x="510.93"
          y="292"
          width="4.15"
          height="16.28"
        />
        <rect
          className="cls-1-2"
          x="525.02"
          y="306.67"
          width="5.2"
          height="7.03"
        />
        <rect
          className="cls-1-2"
          x="549.78"
          y="277.02"
          width="4.74"
          height="17.43"
        />
        <rect
          className="cls-1-2"
          x="560.18"
          y="307.7"
          width="3.82"
          height="6"
        />
        <rect
          className="cls-1-2"
          x="560.56"
          y="332.09"
          width="5.5"
          height="10.2"
        />
        <rect
          className="cls-1-2"
          x="530.83"
          y="337.19"
          width="5.1"
          height="5.1"
        />
        <rect
          className="cls-1-2"
          x="515.85"
          y="337.17"
          width="5.12"
          height="5.12"
        />
        <rect
          className="cls-1-2"
          x="506.37"
          y="332.12"
          width="4.57"
          height="10.09"
        />
        <rect
          className="cls-1-2"
          x="490.85"
          y="322.04"
          width="4.97"
          height="15.15"
        />
        <rect
          className="cls-1-2"
          x="500.56"
          y="267.23"
          width="16.05"
          height="4.74"
        />
        <rect
          className="cls-1-2"
          x="485.83"
          y="332.09"
          width="5.02"
          height="5.1"
        />
        <rect
          className="cls-1-2"
          x="495.21"
          y="267.23"
          width="5.35"
          height="20.64"
        />
        <rect
          className="cls-1-2"
          x="485.83"
          y="271.97"
          width="9.38"
          height="5.04"
        />
      </g>
      <g id="waterfall2">
        <path
          className="cls-2-2"
          d="M478.53,87.11v49.53h4.81v-9.86l5.28.46V147H493v5h5.28V136.87h4.58V147h5.51v-5l4.81-.46V152h5.05V127.47l5.5-.23-1.15,9.86,5.51-.46V152l5.73-.92v-9.17l4.59.45v10.55h9.86v-6l-4.82-.69.23-14.21h4.59v10.31l4.81-.45v-5.74l5.5.23v-44c0-.92-5.5-.23-5.5-.23l-.23-14.91H542.5L543,72h-4.81l.23,10.32-5.28-.23-.23,4.58-5,.46V76.57h-5.05l.23,5-4.47.23v14.9l-5.39.23V81.84l-5.5.23.46,9.63-5.05.23-.23-5.28-4.81.23V76.79h-5l-.22,14.68-4.59.69V82.3l-5.05-.46-.45,5.27Z"
          transform="translate(0.68 2.73)"
        />
        <path
          className="cls-2-2"
          d="M478.35,49.47c-.46-.54,0,9.48,0,9.48h4.74v-10Z"
          transform="translate(0.68 2.73)"
        />
        <polygon
          className="cls-2-2"
          points="488.81 51.66 488.81 71.46 493.55 71.46 493.55 76.66 498.75 76.66 498.75 61.68 503.64 61.68 503.64 71.31 508.84 71.61 508.84 66.27 513.88 66.88 513.88 76.66 519.04 76.05 519.04 51.66 488.81 51.66"
        />
        <path
          className="cls-2-2"
          d="M523.14,48.25V59h4.74v15h5.5V63.54l4.74-.31L538,73.93h9.93v-5.2L543,69l-.15-15.1h5V64H553V59h5.43s.53-11.38,0-10.7S523.14,48.25,523.14,48.25Z"
          transform="translate(0.68 2.73)"
        />
        <rect x="494.19" y="99.47" width="4.59" height="10.24" />
        <rect x="504.11" y="134.48" width="4.91" height="10.17" />
        <rect x="534.24" y="129.44" width="4.59" height="10.13" />
        <rect x="523.39" y="89.23" width="4.89" height="16.36" />
        <rect x="534.24" y="89.23" width="4.59" height="6.11" />
        <rect x="503.93" y="56.67" width="4.91" height="10.67" />
        <rect x="534.06" y="51.15" width="4.59" height="10.85" />
        <rect
          className="cls-1-2"
          x="488.38"
          y="109.72"
          width="6.04"
          height="6.04"
        />
        <rect
          className="cls-1-2"
          x="504.11"
          y="99.47"
          width="4.15"
          height="16.28"
        />
        <rect
          className="cls-1-2"
          x="518.19"
          y="114.15"
          width="5.2"
          height="7.03"
        />
        <rect
          className="cls-1-2"
          x="542.95"
          y="84.49"
          width="4.74"
          height="17.43"
        />
        <rect
          className="cls-1-2"
          x="553.35"
          y="115.18"
          width="3.82"
          height="6"
        />
        <rect
          className="cls-1-2"
          x="553.73"
          y="139.56"
          width="5.5"
          height="10.2"
        />
        <rect className="cls-1-2" x="524" y="144.66" width="5.1" height="5.1" />
        <rect
          className="cls-1-2"
          x="509.02"
          y="144.65"
          width="5.12"
          height="5.12"
        />
        <rect
          className="cls-1-2"
          x="499.54"
          y="139.6"
          width="4.57"
          height="10.09"
        />
        <rect
          className="cls-1-2"
          x="484.02"
          y="129.51"
          width="4.97"
          height="15.15"
        />
        <rect
          className="cls-1-2"
          x="493.73"
          y="74.71"
          width="16.05"
          height="4.74"
        />
        <rect
          className="cls-1-2"
          x="479"
          y="139.56"
          width="5.02"
          height="5.1"
        />
        <rect
          className="cls-1-2"
          x="488.38"
          y="74.71"
          width="5.35"
          height="20.64"
        />
        <rect
          className="cls-1-2"
          x="479"
          y="79.45"
          width="9.38"
          height="5.04"
        />
        <rect
          className="cls-1-2"
          x="543.65"
          y="67.33"
          width="20.83"
          height="4.43"
        />
        <path
          className="cls-2-2"
          d="M480.11,168.06v49.52h4.81v-9.86l5.28.46V227.9h4.35v5h5.28V217.81h4.58V227.9h5.51v-5l4.81-.46V233h5V208.41l5.5-.23L524.13,218l5.51-.46V233l5.73-.92v-9.17l4.59.46v10.55h9.86v-6l-4.82-.68.23-14.22h4.59v10.32l4.81-.46v-5.73l5.5.23v-44c0-.92-5.5-.23-5.5-.23l-.23-14.9H544.08l.46-5.28h-4.81l.23,10.32-5.28-.23-.23,4.59-5,.46V157.51h-5l.23,5-4.47.23v14.91l-5.39.23V162.78l-5.5.23.46,9.63-5.05.23-.23-5.27-4.81.23V157.74h-5.05l-.23,14.67-4.58.69v-9.86l-5.05-.46-.45,5.28Z"
          transform="translate(0.68 2.73)"
        />
        <rect x="495.77" y="180.42" width="4.59" height="10.24" />
        <rect x="505.69" y="215.42" width="4.91" height="10.17" />
        <rect x="535.82" y="210.38" width="4.59" height="10.13" />
        <rect x="524.97" y="170.17" width="4.89" height="16.36" />
        <rect x="535.82" y="170.17" width="4.59" height="6.11" />
        <rect
          className="cls-1-2"
          x="489.96"
          y="190.66"
          width="6.04"
          height="6.04"
        />
        <rect
          className="cls-1-2"
          x="505.69"
          y="180.42"
          width="4.15"
          height="16.28"
        />
        <rect
          className="cls-1-2"
          x="519.77"
          y="195.09"
          width="5.2"
          height="7.03"
        />
        <rect
          className="cls-1-2"
          x="544.53"
          y="165.44"
          width="4.74"
          height="17.43"
        />
        <rect
          className="cls-1-2"
          x="554.93"
          y="196.12"
          width="3.82"
          height="6"
        />
        <rect
          className="cls-1-2"
          x="555.31"
          y="220.51"
          width="5.5"
          height="10.2"
        />
        <rect
          className="cls-1-2"
          x="525.58"
          y="225.61"
          width="5.1"
          height="5.1"
        />
        <rect
          className="cls-1-2"
          x="510.6"
          y="225.59"
          width="5.12"
          height="5.12"
        />
        <rect
          className="cls-1-2"
          x="501.12"
          y="220.54"
          width="4.57"
          height="10.09"
        />
        <rect
          className="cls-1-2"
          x="485.6"
          y="210.45"
          width="4.97"
          height="15.15"
        />
        <rect
          className="cls-1-2"
          x="495.31"
          y="155.65"
          width="16.05"
          height="4.74"
        />
        <rect
          className="cls-1-2"
          x="480.58"
          y="220.51"
          width="5.02"
          height="5.1"
        />
        <rect
          className="cls-1-2"
          x="489.96"
          y="155.65"
          width="5.35"
          height="20.64"
        />
        <rect
          className="cls-1-2"
          x="480.58"
          y="160.39"
          width="9.38"
          height="5.04"
        />
        <path
          className="cls-2-2"
          d="M481.78,248.58V298.1h4.81v-9.86l5.28.46v19.72h4.35v5.05h5.28V298.33h4.58v10.09h5.51v-5l4.81-.46v10.55h5.05V288.93l5.5-.23-1.15,9.86,5.51-.46v15.37l5.73-.92v-9.17l4.58.46v10.54h9.86v-6l-4.81-.69.23-14.21h4.58v10.32l4.82-.46v-5.73l5.5.22v-44c0-.92-5.5-.23-5.5-.23l-.23-14.9H545.75l.46-5.28h-4.82l.23,10.32-5.27-.23-.23,4.59-5,.46V238H526l.23,5-4.47.23v14.91l-5.39.23V243.3l-5.5.23.46,9.63-5.05.23-.23-5.27-4.81.23V238.26h-5L496,252.93l-4.58.69v-9.86l-5.05-.46-.46,5.28Z"
          transform="translate(0.68 2.73)"
        />
        <rect x="497.44" y="260.94" width="4.59" height="10.24" />
        <rect x="507.35" y="295.94" width="4.91" height="10.17" />
        <rect x="537.49" y="290.9" width="4.59" height="10.13" />
        <rect x="526.64" y="250.69" width="4.89" height="16.36" />
        <rect x="537.49" y="250.69" width="4.59" height="6.11" />
        <rect
          className="cls-1-2"
          x="491.63"
          y="271.18"
          width="6.04"
          height="6.04"
        />
        <rect
          className="cls-1-2"
          x="507.35"
          y="260.94"
          width="4.15"
          height="16.28"
        />
        <rect
          className="cls-1-2"
          x="521.44"
          y="275.61"
          width="5.2"
          height="7.03"
        />
        <rect
          className="cls-1-2"
          x="546.2"
          y="245.95"
          width="4.74"
          height="17.43"
        />
        <rect
          className="cls-1-2"
          x="556.6"
          y="276.64"
          width="3.82"
          height="6"
        />
        <rect
          className="cls-1-2"
          x="556.98"
          y="301.02"
          width="5.5"
          height="10.2"
        />
        <rect
          className="cls-1-2"
          x="527.25"
          y="306.13"
          width="5.1"
          height="5.1"
        />
        <rect
          className="cls-1-2"
          x="512.27"
          y="306.11"
          width="5.12"
          height="5.12"
        />
        <rect
          className="cls-1-2"
          x="502.79"
          y="301.06"
          width="4.57"
          height="10.09"
        />
        <rect
          className="cls-1-2"
          x="487.27"
          y="290.97"
          width="4.97"
          height="15.15"
        />
        <rect
          className="cls-1-2"
          x="496.98"
          y="236.17"
          width="16.05"
          height="4.74"
        />
        <rect
          className="cls-1-2"
          x="482.25"
          y="301.02"
          width="5.02"
          height="5.1"
        />
        <rect
          className="cls-1-2"
          x="491.63"
          y="236.17"
          width="5.35"
          height="20.64"
        />
        <rect
          className="cls-1-2"
          x="482.25"
          y="240.91"
          width="9.38"
          height="5.04"
        />
        <rect x="539.16" y="328.73" width="4.59" height="6.11" />
        <rect
          className="cls-1-2"
          x="498.65"
          y="314.21"
          width="16.05"
          height="4.74"
        />
        <rect
          className="cls-1-2"
          x="493.3"
          y="314.21"
          width="5.35"
          height="20.64"
        />
        <rect
          className="cls-1-2"
          x="483.92"
          y="318.95"
          width="9.38"
          height="5.04"
        />
        <path
          className="cls-2-2"
          d="M476.62-2.12V47.41h4.81V37.55l5.28.46V57.73h4.35v5h5.28V47.64h4.58V57.73h5.51v-5l4.81-.45V62.77h5V38.24l5.5-.23-1.15,9.86,5.51-.46V62.77l5.73-.91V52.68l4.58.46V63.69h9.86v-6L541.51,57l.23-14.22h4.58V53.14l4.82-.46V47l5.5.23v-44"
          transform="translate(0.68 2.73)"
        />
        <rect x="492.28" y="10.24" width="4.59" height="10.24" />
        <rect x="502.2" y="45.25" width="4.91" height="10.17" />
        <rect x="532.33" y="40.2" width="4.59" height="10.13" />
        <rect x="521.48" width="4.89" height="16.36" />
        <rect x="532.33" width="4.59" height="6.11" />
        <rect
          className="cls-1-2"
          x="486.47"
          y="20.48"
          width="6.04"
          height="6.04"
        />
        <rect
          className="cls-1-2"
          x="502.2"
          y="10.24"
          width="4.15"
          height="16.28"
        />
        <rect
          className="cls-1-2"
          x="516.28"
          y="24.92"
          width="5.2"
          height="7.03"
        />
        <rect
          className="cls-1-2"
          x="551.44"
          y="25.95"
          width="3.82"
          height="6"
        />
        <rect
          className="cls-1-2"
          x="551.82"
          y="50.33"
          width="5.5"
          height="10.2"
        />
        <rect
          className="cls-1-2"
          x="497.63"
          y="50.37"
          width="4.57"
          height="10.09"
        />
        <rect
          className="cls-1-2"
          x="482.11"
          y="40.28"
          width="4.97"
          height="15.15"
        />
        <rect
          className="cls-1-2"
          x="477.09"
          y="50.33"
          width="5.02"
          height="5.1"
        />
      </g>
      <g id="river3">
        <path
          className="cls-2-2"
          d="M426.08,317.69V396h10.6V391l5.35.15V396h5.19V391l4.65-.06v-5.16l5,.12-.29,4.93h10.32s.06,4.81,0,5a82.9,82.9,0,0,0,10,.23v-5.16l4.93.05v4.93l5.1.26v-5.3l4.87.06v-5l5.16.06v4.93l9.8.06v4.93l10.09-.06v-5.1l5.1.17v4.87l5,.12v-5l4.93.11-.29-5.1,5.33.06v4.87l10,.06v5l9.86.31v-5.24a48.13,48.13,0,0,0,5,.11c.11-.17,0,5.13,0,5.13s4.93.49,5.15,0a41.48,41.48,0,0,0,0-5.36l5.22.06v-5l4.64.12V391s10.09-.46,10-.23,0,5.1,0,5.1,10.43-.34,10.32-.17,0-4.81,0-4.81a46.16,46.16,0,0,0,4.81.11c-.11-.17,0,5.05,0,5.05l5-.06v-5.1s4.87.46,4.87.11v-5.27l5,.17v4.93h9.81V396l10.49-.23-.29-5a50,50,0,0,0,5.05.06v5s5.5-.29,5.33-.17a45,45,0,0,1,0-4.93H652v-5.1l4.87.11V391s10.09-.12,10.15-.23-.29,5.1-.29,5.1l10.26-.11v-5h5l-.35,5.58,5.56-.25v-5.33l4.76.17v-5l4.88.11V391l9.91-.23v5.1l10.32.06v-5l4.76.12V396l5-.12v-5.22l5.16.06v-5l4.65.34v5.1l10.09-.28v5l10,.18v-5.11l4.87.23v5.18h5.27s0-6.27,0-5.75,5.28.23,5.28.23v-5.16l4.47.23V391h10.2v5l10.15-.28v-5l4.93.29-.4,5.23,5.44-.36v-4.87l5.16.11v-5.33l4.42.17v4.87l10.2.12v4.93l10.09-.17v-5l4.93.23-.34,5,5.44.25v-5.81l5.05.4v-5h4.64V391l10.38.17v4.64h9.86v-5l5-.06v5s5.33.35,5.22.18,0-5.34,0-5.34l4.87.18v-5.16l4.87.23v4.93l9.86-.12v5.16l10.49-.29v-4.81l4.59.17v5.1l5.33-.28v-5.16l4.87.23v-5.11l4.82.23v4.82l10.15.29v4.87h10v-5.28l5.22.29-.35,5.35,5.22-.48v-5.1l5.22.17v-5.1l4.47.12v5.16L987,391V314.21Z"
          transform="translate(0.68 2.73)"
        />
        <path
          className="cls-2-2"
          d="M1187.12,312.9l-281.65,1.75V393h10.6v-5l5.35.15V393h5.2v-5l4.64-.06v-5.16l5,.12-.28,4.92h10.32s0,4.82,0,5a82.69,82.69,0,0,0,10,.23v-5.16l4.93.06v4.93l5.1.26v-5.31l4.87.06v-5l5.16.06v4.92l9.81.06v4.93l10.09-.06v-5.1l5.1.17v4.88l5,.11v-5l4.93.12-.28-5.1,5.33.06v4.87l10,.05v5l9.86.32v-5.25a48.07,48.07,0,0,0,5,.12c.11-.18,0,5.13,0,5.13s4.93.48,5.16,0a41.48,41.48,0,0,0,0-5.36l5.21.05v-5l4.65.12v5.1s10.09-.46,10-.23,0,5.1,0,5.1,10.44-.34,10.32-.17,0-4.82,0-4.82a46.36,46.36,0,0,0,4.82.12c-.12-.18,0,5,0,5l5-.06v-5.1s4.87.46,4.87.12v-5.28l5,.18v4.92h9.8V393l10.49-.23-.29-5a50,50,0,0,0,5,.06v5s5.5-.29,5.33-.18a47.67,47.67,0,0,1,0-4.93h4.7v-5.1l4.87.12V388s10.09-.11,10.15-.23-.29,5.11-.29,5.11l10.26-.12v-5h5l-.34,5.57,5.56-.24v-5.33l4.76.17v-5l4.87.11v5l9.92-.23v5.11"
          transform="translate(0.68 2.73)"
        />
        <path
          className="cls-2-2"
          d="M1268.6,313.68l-94,.59v78.3h10.59v-5l5.35.15v4.89h5.2v-5l4.65-.06v-5.16l5,.11-.29,4.93h10.32s.06,4.82,0,5a82.85,82.85,0,0,0,10,.23v-5.16l4.93.06v4.93l5.1.25v-5.3l4.87.06v-5l5.16.05v4.93l9.8.06v4.93l10.09-.06v-5.1l3.24.11"
          transform="translate(0.68 2.73)"
        />
        <path
          className="cls-2-2"
          d="M1280.23,313l-25.48.58v78.3h2.87v-5l1.45.15v4.89h1.41v-5l1.26-.06v-5.16l1.36.12-.07,4.93h2.79s0,4.81,0,5a6.25,6.25,0,0,0,2.71.23v-5.16l1.33.06v4.93l1.39.26v-5.3l1.32.05v-5l1.4.06v4.93l2.65.05v4.93l2.74-.05v-5.11l.88.11"
          transform="translate(0.68 2.73)"
        />
        <path
          className="cls-2-2"
          d="M-.68,323.91v78.3H9.92v-5l5.35.16v4.89h5.19v-5l4.65-.05V392l5,.11L29.87,397H40.18s.06,4.82,0,5a82.9,82.9,0,0,0,10,.23v-5.16l4.93.06V402l5.1.25V397l4.87.06v-5l5.16.05V397l9.81.06V402l10.08-.06v-5.1l5.11.17v4.88l5,.11v-5l4.93.12-.29-5.1,5.34.05v4.88l10,.05v5l9.86.31v-5.24a45.5,45.5,0,0,0,5,.11c.11-.17,0,5.13,0,5.13s4.93.49,5.16,0a41.34,41.34,0,0,0,0-5.35l5.21.05v-5l4.65.11v5.1s10.09-.45,10-.22,0,5.1,0,5.1,10.43-.35,10.32-.17,0-4.82,0-4.82a43.56,43.56,0,0,0,4.81.11c-.11-.17,0,5,0,5l5-.06v-5.1s4.87.46,4.87.11v-5.27l5.05.17V397H200v5.22l10.49-.23-.29-5a50,50,0,0,0,5,.06v5s5.5-.28,5.33-.17a47.67,47.67,0,0,1,0-4.93h4.7v-5.1l4.87.12v5.21s10.09-.11,10.15-.23-.29,5.1-.29,5.1l10.26-.11v-5h5l-.34,5.57,5.56-.24v-5.33l4.75.17v-5.05l4.88.12v5L280,397v5.1l10.32.06v-5l4.76.12v4.93l5.05-.12v-5.21l5.15.06v-5.05l4.65.34v5.11l10.09-.29v5l10,.17v-5.1l4.87.23v5.17h5.28s-.06-6.26,0-5.75,5.27.23,5.27.23v-5.16l4.47.23v5.16h10.2v5l10.15-.29v-5l4.93.29-.4,5.23,5.45-.36v-4.87l5.15.11v-5.33l4.42.17v4.88l10.2.11v4.93L410.1,402v-5l4.93.23-.34,5,5.44.24v-5.8l5.05.4v-5h4.64v5.1l10.38.17V402h9.86v-5l5-.06V402s5.34.34,5.22.17,0-5.33,0-5.33l4.87.17v-5.16l4.88.23v4.93l9.86-.11v5.15l10.49-.28V397l4.58.17v5.11l5.33-.29v-5.16l4.88.23V392l4.81.23V397l10.15.29v4.87h10v-5.27l5.22.28-.34,5.35,5.21-.47v-5.1l5.22.17V392l4.47.11v5.16l10.38-.12V320.43Z"
          transform="translate(0.68 2.73)"
        />
        <path
          className="cls-2-2"
          d="M760.37,319.12l-281.66,1.74v78.3h10.6v-5l5.35.15v4.89h5.2v-5l4.64-.06V388.9l5.05.12-.29,4.93h10.32s.06,4.81,0,5a82.7,82.7,0,0,0,10,.22V394l4.93.05V399l5.1.26V394l4.88.06V389l5.16.06V394l9.8.06v4.93l10.09-.06v-5.1l5.1.17v4.87l5,.12v-5l4.93.11-.28-5.1,5.33.06v4.87l10,.06v5l9.86.31V394a48.19,48.19,0,0,0,5,.11c.12-.17,0,5.13,0,5.13s4.93.49,5.16,0a41.48,41.48,0,0,0,0-5.36l5.22.06V388.9l4.64.12v5.1s10.09-.46,10-.23,0,5.1,0,5.1,10.43-.34,10.31-.17,0-4.81,0-4.81a46.29,46.29,0,0,0,4.82.11c-.12-.17,0,5,0,5l5-.05V394s4.88.45,4.88.11v-5.27l5,.17V394h9.8v5.21l10.49-.22-.28-5a49.85,49.85,0,0,0,5,.06v5s5.5-.29,5.33-.17a47.74,47.74,0,0,1,0-4.93h4.69v-5.1l4.88.11v5.22s10.08-.12,10.14-.23-.28,5.1-.28,5.1l10.26-.11v-5.05h5l-.34,5.58,5.56-.25v-5.33l4.76.17v-5l4.87.11v5.05l9.92-.23v5.1"
          transform="translate(0.68 2.73)"
        />
        <path
          className="cls-2-2"
          d="M841.84,319.9l-94,.58v78.3h10.6v-5l5.35.15v4.89H769v-5l4.65-.06v-5.16l5,.12-.28,4.93h10.31s.06,4.81,0,5a80.89,80.89,0,0,0,10,.23v-5.16l4.93.06v4.93l5.1.26v-5.3l4.87.05v-5l5.16.06v4.93l9.8.05v4.93l10.09-.05v-5.11l3.24.11"
          transform="translate(0.68 2.73)"
        />
        <path
          className="cls-2-2"
          d="M853.48,319.17l-25.49.58v78.31h2.87V393l1.45.15v4.9h1.41V393L835,393v-5.16l1.37.12-.08,4.93h2.8s0,4.81,0,5a6.34,6.34,0,0,0,2.7.23V392.9l1.34.05v4.93l1.38.26v-5.3l1.32.06v-5l1.4.06v4.93l2.66.06v4.93l2.73-.06v-5.1l.88.11"
          transform="translate(0.68 2.73)"
        />
      </g>
      <g id="river1">
        <path
          className="cls-2-2"
          d="M-.68,321.83v78.3H9.92v-5l5.35.15v4.89h5.19v-5l4.65-.06v-5.16l5,.12-.28,4.93H40.18s.06,4.81,0,5a80.89,80.89,0,0,0,10,.23V395l4.93.06V400l5.1.26v-5.3l4.87.05v-5l5.16.06v4.93L80,395v4.93l10.08,0v-5.1l5.11.17v4.87l5,.11v-5l4.93.11-.29-5.1,5.34.06v4.87l10,.06v5l9.86.32V395a48.07,48.07,0,0,0,5,.12c.11-.17,0,5.13,0,5.13s4.93.49,5.16,0a41.48,41.48,0,0,0,0-5.36l5.21.06v-5.05l4.65.12v5.1s10.09-.46,10-.23,0,5.1,0,5.1,10.43-.34,10.32-.17,0-4.82,0-4.82a46.24,46.24,0,0,0,4.81.12c-.11-.17,0,5,0,5l5-.05V395s4.87.46,4.87.12v-5.27l5.05.17v4.93H200v5.21l10.49-.23-.29-5a47.27,47.27,0,0,0,5,.05v5s5.5-.29,5.33-.17a47.68,47.68,0,0,1,0-4.93h4.7v-5.1l4.87.11v5.22s10.09-.12,10.15-.23S240,400,240,400l10.26-.12v-5h5l-.34,5.58,5.56-.25v-5.33l4.75.17v-5l4.88.11v5l9.91-.23V400l10.32.06v-5l4.76.11v4.93l5.05-.11V394.8l5.15.06v-5l4.65.34v5.1L320,395v5l10,.17V395l4.87.23v5.18h5.28s-.06-6.27,0-5.75,5.27.23,5.27.23v-5.16l4.47.23v5.16h10.2v5l10.15-.29v-5l4.93.28-.4,5.24,5.45-.36V395.2l5.15.12V390l4.42.17V395l10.2.12v4.93l10.09-.18v-5l4.93.23-.34,5,5.44.25v-5.81l5.05.4v-5h4.64v5.11l10.38.17V400h9.86v-5l5-.05v5a51.68,51.68,0,0,0,5.22.17c-.11-.17,0-5.33,0-5.33l4.87.17v-5.15L470,390V395l9.86-.11V400l10.49-.29v-4.81l4.58.17v5.1l5.33-.29v-5.15l4.88.22v-5.1l4.81.23v4.82l10.15.28v4.88h10V394.8l5.22.29-.34,5.35,5.21-.48v-5.1l5.22.17v-5.1l4.47.11v5.16l10.38-.11V318.35Z"
          transform="translate(0.68 2.73)"
        />
        <rect x="0.68" y="372.44" width="5.26" height="5.26" />
        <rect x="15.61" y="347.66" width="5.26" height="5.26" />
        <rect x="20.63" y="327.82" width="5.45" height="5.1" />
        <rect x="35.71" y="362.74" width="5.22" height="5.22" />
        <rect x="40.58" y="372.44" width="5.49" height="5.49" />
        <rect x="55.71" y="347.66" width="5.26" height="5.26" />
        <rect x="75.66" y="362.74" width="5.22" height="5.22" />
        <rect x="80.88" y="372.65" width="5.07" height="5.07" />
        <rect x="60.98" y="327.82" width="5.1" height="5.1" />
        <rect x="100.83" y="327.82" width="5.65" height="5.65" />
        <rect x="140.72" y="327.82" width="5.1" height="5.1" />
        <rect x="95.67" y="347.66" width="5.26" height="5.26" />
        <rect x="135.68" y="347.66" width="5.26" height="5.26" />
        <rect x="155.74" y="362.12" width="5.5" height="6.46" />
        <rect x="160.56" y="372.44" width="5.49" height="5.49" />
        <rect x="160.56" y="392.89" width="5.49" height="5.49" />
        <rect x="135.68" y="392.2" width="5.39" height="5.39" />
        <rect x="120.43" y="392.2" width="6.31" height="5.5" />
        <rect x="94.98" y="392.2" width="6.42" height="5.39" />
        <rect x="80.17" y="392.2" width="5.78" height="5.78" />
        <rect x="55.2" y="392.2" width="6.19" height="5.39" />
        <rect x="40.58" y="392.89" width="6.13" height="4.7" />
        <rect x="15.61" y="392.54" width="5.16" height="5.16" />
        <rect x="0.68" y="392.54" width="5.16" height="5.16" />
        <rect x="175.23" y="392.89" width="5.68" height="4.82" />
        <rect x="200.23" y="392.2" width="5.78" height="5.78" />
        <rect x="214.79" y="392.2" width="6.42" height="5.45" />
        <rect x="200.23" y="372.65" width="5.78" height="5.78" />
        <rect x="195.18" y="362.62" width="5.96" height="5.96" />
        <rect x="175.81" y="347.66" width="5.26" height="5.26" />
        <rect x="180.39" y="327.31" width="5.62" height="5.62" />
        <rect x="220.63" y="327.82" width="5.65" height="5.65" />
        <rect x="216.05" y="347.66" width="5.26" height="5.26" />
        <rect x="240.47" y="372.65" width="5.42" height="5.42" />
        <rect x="240.47" y="392.2" width="5.78" height="5.78" />
        <rect x="256.29" y="392.2" width="5.41" height="5.41" />
        <rect x="281.17" y="392.89" width="4.82" height="4.82" />
        <rect x="280.02" y="372.65" width="5.78" height="5.78" />
        <rect x="275.67" y="362.12" width="5.5" height="6.46" />
        <rect x="290.34" y="332.93" width="5.96" height="5.16" />
        <rect x="296.3" y="392.54" width="5.16" height="5.16" />
        <rect x="320.49" y="372.65" width="5.42" height="5.42" />
        <rect x="335.4" y="347.66" width="4.7" height="5.26" />
        <rect x="320.49" y="392.54" width="5.42" height="4.7" />
        <rect x="340.1" y="327.42" width="5.85" height="5.85" />
        <rect x="355.81" y="362.12" width="5.47" height="5.47" />
        <rect x="360.39" y="372.65" width="5.42" height="5.42" />
        <rect x="360.39" y="392.54" width="5.42" height="5.42" />
        <rect x="335.4" y="392.54" width="5.42" height="5.42" />
        <rect x="375.3" y="347.66" width="5.26" height="5.26" />
        <rect x="380.56" y="327.42" width="5.5" height="5.5" />
        <rect x="395.71" y="362.85" width="5.62" height="5.62" />
        <rect x="400.52" y="373.17" width="5.33" height="5.33" />
        <rect x="375.99" y="392.54" width="4.93" height="5.39" />
        <rect x="400.52" y="392.54" width="5.33" height="5.33" />
        <rect x="416.23" y="393" width="4.93" height="4.93" />
        <rect x="440.65" y="372.65" width="5.3" height="5.3" />
        <rect x="435.26" y="362.85" width="5.39" height="4.74" />
        <rect x="414.97" y="347.66" width="5.26" height="5.26" />
        <rect x="420.23" y="327.42" width="5.5" height="5.5" />
        <rect x="440.65" y="392.54" width="5.96" height="5.27" />
        <rect x="460.37" y="327.42" width="5.5" height="5.5" />
        <rect x="455.09" y="347.66" width="6.08" height="5.26" />
        <rect x="475.85" y="362.85" width="5.04" height="5.04" />
        <rect x="480.89" y="372.65" width="5.3" height="5.3" />
        <rect x="480.2" y="392.54" width="6.42" height="5.27" />
        <rect x="455.09" y="392.54" width="5.85" height="4.99" />
        <rect x="495.68" y="392.54" width="6.02" height="6.02" />
        <rect x="520.9" y="372.65" width="5.3" height="5.3" />
        <rect x="519.87" y="391.97" width="6.33" height="5.56" />
        <rect x="535.23" y="393" width="6.08" height="4.93" />
        <rect x="515.4" y="361.59" width="6.31" height="6.31" />
        <rect x="499.92" y="341.64" width="5.62" height="5.62" />
        <rect x="509.9" y="347.66" width="5.5" height="5.5" />
        <rect x="525.6" y="342.56" width="5.11" height="5.11" />
        <rect x="546.01" y="327.42" width="5.5" height="5.5" />
        <rect x="490.98" y="322.95" width="6.19" height="6.19" />
        <path
          className="cls-2-2"
          d="M519.19,318.55v78.3h10.6v-5l5.35.15v4.89h5.2v-5l4.64-.06v-5.16l5,.11-.28,4.93h10.32s.05,4.82,0,5a82.69,82.69,0,0,0,10,.23v-5.16l4.93.06v4.93l5.1.26v-5.31l4.87.06v-5l5.16.05v4.93l9.81.06v4.93l10.09-.06v-5.1l5.1.17v4.88l5,.11v-5l4.93.12-.28-5.1,5.33.05v4.88l10,.05v5l9.86.32v-5.25a48.07,48.07,0,0,0,5,.12c.11-.18,0,5.13,0,5.13s4.93.48,5.16,0a41.48,41.48,0,0,0,0-5.36l5.21.05v-5l4.65.11v5.11s10.09-.46,10-.23,0,5.1,0,5.1,10.43-.35,10.32-.17,0-4.82,0-4.82a46.36,46.36,0,0,0,4.82.12c-.12-.18,0,5,0,5l5-.06v-5.1s4.87.46,4.87.12v-5.28l5,.17v4.93h9.8v5.22l10.49-.23-.29-5a50,50,0,0,0,5.05.06v5.05s5.5-.29,5.33-.18a47.67,47.67,0,0,1,0-4.93h4.7v-5.1l4.87.12v5.21s10.09-.11,10.15-.23-.29,5.11-.29,5.11l10.26-.12v-5h5l-.34,5.57,5.56-.24v-5.33l4.76.17V386.7l4.87.12v5l9.92-.23v5.11l10.31.05v-5l4.76.11v4.93l5.05-.11v-5.22l5.16.06v-5.05l4.64.35V392l10.09-.29v5l10,.17v-5.1l4.87.23v5.17H860s-.06-6.26,0-5.75,5.27.23,5.27.23v-5.16l4.47.23v5.16H880v5.05l10.14-.29v-5l4.93.29-.4,5.23,5.45-.36v-4.87l5.16.11V386.7l4.41.18v4.87l10.2.11v4.93l10.09-.17v-5l4.93.23-.34,5.05,5.44.24v-5.8l5,.4v-5h4.64v5.1l10.38.17v4.65h9.86v-5l5-.06v5.05s5.33.34,5.21.17,0-5.33,0-5.33l4.87.17v-5.16l4.88.23v4.93l9.86-.11v5.16l10.49-.29v-4.82l4.58.18v5.1l5.33-.29v-5.16l4.88.23v-5.1l4.81.23v4.81l10.15.29v4.87h10v-5.27l5.22.29-.34,5.34,5.21-.47v-5.1l5.22.17v-5.1l4.47.11v5.16l10.38-.11V315.07Z"
          transform="translate(0.68 2.73)"
        />
        <rect x="520.55" y="369.16" width="5.26" height="5.26" />
        <rect x="535.48" y="344.38" width="5.26" height="5.26" />
        <rect x="540.5" y="324.54" width="5.45" height="5.1" />
        <rect x="555.58" y="359.45" width="5.22" height="5.22" />
        <rect x="560.45" y="369.16" width="5.49" height="5.49" />
        <rect x="575.58" y="344.38" width="5.26" height="5.26" />
        <rect x="595.53" y="359.45" width="5.22" height="5.22" />
        <rect x="600.75" y="369.37" width="5.07" height="5.07" />
        <rect x="580.85" y="324.54" width="5.1" height="5.1" />
        <rect x="620.7" y="324.54" width="5.65" height="5.65" />
        <rect x="660.59" y="324.54" width="5.1" height="5.1" />
        <rect x="615.54" y="344.38" width="5.26" height="5.26" />
        <rect x="655.55" y="344.38" width="5.26" height="5.26" />
        <rect x="675.61" y="358.84" width="5.5" height="6.46" />
        <rect x="680.43" y="369.16" width="5.49" height="5.49" />
        <rect x="680.43" y="389.61" width="5.49" height="5.49" />
        <rect x="655.55" y="388.92" width="5.39" height="5.39" />
        <rect x="640.3" y="388.92" width="6.31" height="5.5" />
        <rect x="614.85" y="388.92" width="6.42" height="5.39" />
        <rect x="600.04" y="388.92" width="5.78" height="5.78" />
        <rect x="575.07" y="388.92" width="6.19" height="5.39" />
        <rect x="560.45" y="389.61" width="6.13" height="4.7" />
        <rect x="535.48" y="389.26" width="5.16" height="5.16" />
        <rect x="520.55" y="389.26" width="5.16" height="5.16" />
        <rect x="695.1" y="389.61" width="5.68" height="4.82" />
        <rect x="720.1" y="388.92" width="5.78" height="5.78" />
        <rect x="734.66" y="388.92" width="6.42" height="5.45" />
        <rect x="720.1" y="369.37" width="5.78" height="5.78" />
        <rect x="715.05" y="359.34" width="5.96" height="5.96" />
        <rect x="695.68" y="344.38" width="5.26" height="5.26" />
        <rect x="700.26" y="324.03" width="5.62" height="5.62" />
        <rect x="740.51" y="324.54" width="5.65" height="5.65" />
        <rect x="735.92" y="344.38" width="5.26" height="5.26" />
        <rect x="760.34" y="369.37" width="5.42" height="5.42" />
        <rect x="760.34" y="388.92" width="5.78" height="5.78" />
        <rect x="776.16" y="388.92" width="5.41" height="5.41" />
        <rect x="801.04" y="389.61" width="4.82" height="4.82" />
        <rect x="799.89" y="369.37" width="5.78" height="5.78" />
        <rect x="795.54" y="358.84" width="5.5" height="6.46" />
        <rect x="810.21" y="329.64" width="5.96" height="5.16" />
        <rect x="816.17" y="389.26" width="5.16" height="5.16" />
        <rect x="840.37" y="369.37" width="5.42" height="5.42" />
        <rect x="855.27" y="344.38" width="4.7" height="5.26" />
        <rect x="840.37" y="389.26" width="5.42" height="4.7" />
        <rect x="859.97" y="324.14" width="5.85" height="5.85" />
        <rect x="875.68" y="358.84" width="5.47" height="5.47" />
        <rect x="880.26" y="369.37" width="5.42" height="5.42" />
        <rect x="880.26" y="389.26" width="5.42" height="5.42" />
        <rect x="855.27" y="389.26" width="5.42" height="5.42" />
        <rect x="895.17" y="344.38" width="5.26" height="5.26" />
        <rect x="900.43" y="324.14" width="5.5" height="5.5" />
        <rect x="915.58" y="359.57" width="5.62" height="5.62" />
        <rect x="920.39" y="369.89" width="5.33" height="5.33" />
        <rect x="895.86" y="389.26" width="4.93" height="5.39" />
        <rect x="920.39" y="389.26" width="5.33" height="5.33" />
        <rect x="936.1" y="389.72" width="4.93" height="4.93" />
        <rect x="960.52" y="369.37" width="5.3" height="5.3" />
        <rect x="955.13" y="359.57" width="5.39" height="4.74" />
        <rect x="934.84" y="344.38" width="5.26" height="5.26" />
        <rect x="940.1" y="324.14" width="5.5" height="5.5" />
        <rect x="960.52" y="389.26" width="5.96" height="5.27" />
        <rect x="980.24" y="324.14" width="5.5" height="5.5" />
        <rect x="974.96" y="344.38" width="6.08" height="5.26" />
        <rect x="995.72" y="359.57" width="5.04" height="5.04" />
        <rect x="1000.76" y="369.37" width="5.3" height="5.3" />
        <rect x="1000.07" y="389.26" width="6.42" height="5.27" />
        <rect x="974.96" y="389.26" width="5.85" height="4.99" />
        <rect x="1015.55" y="389.26" width="6.02" height="6.02" />
        <rect x="1040.77" y="369.37" width="5.3" height="5.3" />
        <rect x="1039.74" y="388.69" width="6.33" height="5.56" />
        <rect x="1055.1" y="389.72" width="6.08" height="4.93" />
        <rect x="1035.27" y="358.31" width="6.31" height="6.31" />
        <rect x="1019.79" y="338.36" width="5.62" height="5.62" />
        <rect x="1029.77" y="344.38" width="5.5" height="5.5" />
        <rect x="1045.47" y="339.27" width="5.11" height="5.11" />
        <rect x="1065.88" y="324.14" width="5.5" height="5.5" />
        <rect x="1010.85" y="319.67" width="6.19" height="6.19" />
        <path
          className="cls-2-2"
          d="M1280.24,313.76,998.58,315.5v78.31h10.6v-5.05l5.35.15v4.9h5.2v-5.05l4.64-.06v-5.16l5.05.12-.29,4.93h10.32s.06,4.81,0,5a82.69,82.69,0,0,0,10,.23v-5.16l4.93.05v4.93l5.11.26v-5.3l4.87.06v-5l5.16.06v4.93l9.8.06v4.93l10.09-.06v-5.1l5.1.17v4.87l5,.12v-5l4.93.11-.29-5.1,5.33.06v4.87l10,.06v5l9.86.31v-5.24a48.19,48.19,0,0,0,5,.11c.12-.17,0,5.13,0,5.13s4.93.49,5.16,0a41.48,41.48,0,0,0,0-5.36l5.22.06v-5l4.64.12v5.1s10.09-.46,10-.23,0,5.1,0,5.1,10.43-.34,10.31-.17,0-4.81,0-4.81a46.29,46.29,0,0,0,4.82.11c-.12-.17,0,5.05,0,5.05l5-.06v-5.1s4.88.46,4.88.11v-5.27l5,.17v4.93h9.8v5.22l10.49-.23-.28-5a49.85,49.85,0,0,0,5,.06v5s5.5-.29,5.33-.17a47.74,47.74,0,0,1,0-4.93h4.69v-5.1l4.88.11v5.22s10.09-.12,10.14-.23-.28,5.1-.28,5.1l10.26-.11v-5.05h5l-.34,5.58,5.56-.25v-5.33l4.76.17v-5l4.87.11v5.05l9.92-.23v5.1"
          transform="translate(0.68 2.73)"
        />
        <rect x="999.94" y="366.11" width="5.26" height="5.26" />
        <rect x="1014.87" y="341.34" width="5.26" height="5.26" />
        <rect x="1019.89" y="321.5" width="5.45" height="5.1" />
        <rect x="1034.97" y="356.41" width="5.22" height="5.22" />
        <rect x="1039.84" y="366.11" width="5.49" height="5.49" />
        <rect x="1054.98" y="341.34" width="5.26" height="5.26" />
        <rect x="1074.92" y="356.41" width="5.22" height="5.22" />
        <rect x="1080.14" y="366.33" width="5.07" height="5.07" />
        <rect x="1060.24" y="321.5" width="5.1" height="5.1" />
        <rect x="1100.09" y="321.5" width="5.65" height="5.65" />
        <rect x="1139.99" y="321.5" width="5.1" height="5.1" />
        <rect x="1094.93" y="341.34" width="5.26" height="5.26" />
        <rect x="1134.94" y="341.34" width="5.26" height="5.26" />
        <rect x="1155.01" y="355.79" width="5.5" height="6.46" />
        <rect x="1159.82" y="366.11" width="5.49" height="5.49" />
        <rect x="1159.82" y="386.56" width="5.49" height="5.49" />
        <rect x="1134.94" y="385.87" width="5.39" height="5.39" />
        <rect x="1119.7" y="385.87" width="6.31" height="5.5" />
        <rect x="1094.24" y="385.87" width="6.42" height="5.39" />
        <rect x="1079.43" y="385.87" width="5.78" height="5.78" />
        <rect x="1054.46" y="385.87" width="6.19" height="5.39" />
        <rect x="1039.84" y="386.56" width="6.13" height="4.7" />
        <rect x="1014.87" y="386.22" width="5.16" height="5.16" />
        <rect x="999.94" y="386.22" width="5.16" height="5.16" />
        <rect x="1174.5" y="386.56" width="5.68" height="4.82" />
        <rect x="1199.49" y="385.87" width="5.78" height="5.78" />
        <rect x="1214.05" y="385.87" width="6.42" height="5.45" />
        <rect x="1199.49" y="366.33" width="5.78" height="5.78" />
        <rect x="1194.45" y="356.29" width="5.96" height="5.96" />
        <rect x="1175.07" y="341.34" width="5.26" height="5.26" />
        <rect x="1179.66" y="320.98" width="5.62" height="5.62" />
        <rect x="1219.9" y="321.5" width="5.65" height="5.65" />
        <rect x="1215.31" y="341.34" width="5.26" height="5.26" />
        <rect x="1239.73" y="366.33" width="5.42" height="5.42" />
        <rect x="1239.73" y="385.87" width="5.78" height="5.78" />
        <rect x="1255.55" y="385.87" width="5.41" height="5.41" />
        <rect x="1274.93" y="355.79" width="5.5" height="6.46" />
      </g>
      <g id="river2">
        <path
          className="cls-2-2"
          d="M-.67,395.78l1.87.06v4.87l5,.12v-5l4.93.11-.29-5.1,5.34.06v4.87l10,.06v5l9.86.31V395.9a48.13,48.13,0,0,0,5,.11c.11-.17,0,5.13,0,5.13s4.93.49,5.16,0a41.48,41.48,0,0,0,0-5.36l5.21.06v-5l4.65.12V396s10.09-.46,10-.23,0,5.1,0,5.1,10.43-.34,10.32-.17,0-4.81,0-4.81a46.16,46.16,0,0,0,4.81.11c-.11-.17,0,5.05,0,5.05l5-.06v-5.1s4.87.45,4.87.11v-5.27l5,.17v4.93h9.8v5.22l10.49-.23-.29-5a50,50,0,0,0,5.05.06v5s5.5-.29,5.33-.17a47.68,47.68,0,0,1,0-4.93h4.7v-5.1l4.87.11v5.22s10.09-.12,10.15-.23-.29,5.1-.29,5.1l10.26-.11v-5.05h5l-.34,5.58,5.56-.25v-5.33l4.75.17v-5L176,391v5.05l9.91-.23v5.1l10.32.06v-5l4.76.12v4.93l5.05-.12v-5.22l5.15.06v-5l4.65.34v5.1L226,395.9v5l10,.18V396l4.87.23v5.18h5.28s-.06-6.27,0-5.75,5.27.23,5.27.23v-5.16l4.47.23v5.16h10.2v5l10.15-.28v-5l4.93.29-.4,5.23,5.45-.36v-4.87l5.15.11v-5.33l4.42.17V396l10.2.12V401l10.09-.17v-5l4.93.23-.34,5,5.44.25v-5.81l5.05.4v-5h4.64v5.1l10.38.17v4.64H356v-5l5-.06v5s5.34.35,5.22.18,0-5.34,0-5.34l4.87.18v-5.16L376,391v4.93l9.86-.12v5.16l10.49-.29v-4.81l4.58.17v5.1l5.33-.28v-5.16l4.88.23v-5.11l4.81.23v4.82l10.15.29V401h10v-5.28l5.22.29-.34,5.35,5.21-.48v-5.1l5.22.17v-5.1l4.47.12v5.16l10.38-.12V319.27l-466.9,2.9"
          transform="translate(0.68 2.73)"
        />
        <rect x="6.81" y="328.75" width="5.65" height="5.65" />
        <rect x="46.7" y="328.75" width="5.1" height="5.1" />
        <rect x="1.65" y="348.59" width="5.26" height="5.26" />
        <rect x="41.66" y="348.59" width="5.26" height="5.26" />
        <rect x="61.72" y="363.04" width="5.5" height="6.46" />
        <rect x="66.54" y="373.36" width="5.49" height="5.49" />
        <rect x="66.54" y="393.81" width="5.49" height="5.49" />
        <rect x="41.66" y="393.12" width="5.39" height="5.39" />
        <rect x="26.41" y="393.12" width="6.31" height="5.5" />
        <rect x="0.96" y="393.12" width="6.42" height="5.39" />
        <rect x="81.21" y="393.81" width="5.68" height="4.82" />
        <rect x="106.21" y="393.12" width="5.78" height="5.78" />
        <rect x="120.77" y="393.12" width="6.42" height="5.45" />
        <rect x="106.21" y="373.57" width="5.78" height="5.78" />
        <rect x="101.16" y="363.54" width="5.96" height="5.96" />
        <rect x="81.79" y="348.59" width="5.26" height="5.26" />
        <rect x="86.37" y="328.23" width="5.62" height="5.62" />
        <rect x="126.61" y="328.75" width="5.65" height="5.65" />
        <rect x="122.03" y="348.59" width="5.26" height="5.26" />
        <rect x="146.45" y="373.57" width="5.42" height="5.42" />
        <rect x="146.45" y="393.12" width="5.78" height="5.78" />
        <rect x="162.27" y="393.12" width="5.41" height="5.41" />
        <rect x="187.15" y="393.81" width="4.82" height="4.82" />
        <rect x="186" y="373.57" width="5.78" height="5.78" />
        <rect x="181.65" y="363.04" width="5.5" height="6.46" />
        <rect x="196.32" y="333.85" width="5.96" height="5.16" />
        <rect x="202.28" y="393.47" width="5.16" height="5.16" />
        <rect x="226.47" y="373.57" width="5.42" height="5.42" />
        <rect x="241.38" y="348.59" width="4.7" height="5.26" />
        <rect x="226.47" y="393.47" width="5.42" height="4.7" />
        <rect x="246.08" y="328.34" width="5.85" height="5.85" />
        <rect x="261.79" y="363.04" width="5.47" height="5.47" />
        <rect x="266.37" y="373.57" width="5.42" height="5.42" />
        <rect x="266.37" y="393.47" width="5.42" height="5.42" />
        <rect x="241.38" y="393.47" width="5.42" height="5.42" />
        <rect x="281.28" y="348.59" width="5.26" height="5.26" />
        <rect x="286.54" y="328.34" width="5.5" height="5.5" />
        <rect x="301.68" y="363.77" width="5.62" height="5.62" />
        <rect x="306.5" y="374.09" width="5.33" height="5.33" />
        <rect x="281.96" y="393.47" width="4.93" height="5.39" />
        <rect x="306.5" y="393.47" width="5.33" height="5.33" />
        <rect x="322.21" y="393.92" width="4.93" height="4.93" />
        <rect x="346.63" y="373.57" width="5.3" height="5.3" />
        <rect x="341.24" y="363.77" width="5.39" height="4.74" />
        <rect x="320.95" y="348.59" width="5.26" height="5.26" />
        <rect x="326.21" y="328.34" width="5.5" height="5.5" />
        <rect x="346.63" y="393.47" width="5.96" height="5.27" />
        <rect x="366.35" y="328.34" width="5.5" height="5.5" />
        <rect x="361.07" y="348.59" width="6.08" height="5.26" />
        <rect x="381.82" y="363.77" width="5.04" height="5.04" />
        <rect x="386.87" y="373.57" width="5.3" height="5.3" />
        <rect x="386.18" y="393.47" width="6.42" height="5.27" />
        <rect x="361.07" y="393.47" width="5.85" height="4.99" />
        <rect x="401.66" y="393.47" width="6.02" height="6.02" />
        <rect x="426.88" y="373.57" width="5.3" height="5.3" />
        <rect x="425.85" y="392.89" width="6.33" height="5.56" />
        <rect x="441.21" y="393.92" width="6.08" height="4.93" />
        <rect x="421.38" y="362.51" width="6.31" height="6.31" />
        <rect x="405.9" y="342.56" width="5.62" height="5.62" />
        <rect x="415.88" y="348.59" width="5.5" height="5.5" />
        <rect x="431.58" y="343.48" width="5.11" height="5.11" />
        <rect x="451.99" y="328.34" width="5.5" height="5.5" />
        <rect x="396.96" y="323.87" width="6.19" height="6.19" />
        <path
          className="cls-2-2"
          d="M425.17,319.47v78.3h10.6v-5l5.35.15v4.89h5.2v-5l4.64-.06v-5.16l5,.11-.28,4.93H466s0,4.82,0,5a82.69,82.69,0,0,0,10,.23v-5.16l4.93.06v4.93l5.1.26v-5.31l4.87.06v-5l5.16.05v4.93l9.81.06v4.93l10.08-.06v-5.1l5.11.17v4.88l5,.11v-5l4.93.12-.29-5.1,5.34.05v4.88l10,.05v5l9.86.32v-5.25a48.07,48.07,0,0,0,5,.12c.11-.18,0,5.13,0,5.13s4.93.48,5.16,0a41.48,41.48,0,0,0,0-5.36l5.21.05v-5l4.65.11v5.11s10.09-.46,10-.23,0,5.1,0,5.1,10.43-.34,10.32-.17,0-4.82,0-4.82a46.36,46.36,0,0,0,4.82.12c-.12-.18,0,5,0,5l5-.06v-5.1s4.87.46,4.87.12v-5.28l5,.17v4.93h9.8v5.22l10.49-.23-.29-5a50,50,0,0,0,5,.06v5.05s5.5-.29,5.33-.18a47.67,47.67,0,0,1,0-4.93h4.7v-5.1l4.87.12v5.21s10.09-.11,10.15-.23-.29,5.11-.29,5.11l10.26-.12v-5h5l-.34,5.57,5.56-.24V392.5l4.76.17v-5.05l4.87.12v5l9.91-.23v5.11l10.32,0v-5l4.76.11v4.93l5.05-.11v-5.22l5.16.06v-5.05l4.64.35v5.1l10.09-.29v5l10,.17v-5.1l4.87.23v5.17H766s-.06-6.26,0-5.74,5.27.22,5.27.22V387.4l4.47.22v5.16H786v5.05l10.15-.29v-5l4.93.29-.4,5.23,5.45-.36v-4.87l5.16.12v-5.34l4.41.18v4.87l10.2.11v4.93l10.09-.17v-5l4.93.23-.34,5.05,5.44.24v-5.8l5,.4v-5h4.64v5.1l10.38.18v4.64h9.86v-5l5-.06v5.05s5.34.34,5.22.17,0-5.33,0-5.33l4.87.17v-5.16l4.88.23v4.93l9.86-.11v5.16l10.49-.29v-4.82l4.58.18v5.1l5.33-.29v-5.16l4.88.23v-5.1l4.81.23v4.81l10.15.29v4.87h10v-5.27l5.22.29-.34,5.34,5.21-.47v-5.1l5.22.17v-5.1l4.47.11v5.16l10.38-.11V316Z"
          transform="translate(0.68 2.73)"
        />
        <rect x="426.53" y="370.08" width="5.26" height="5.26" />
        <rect x="441.46" y="345.3" width="5.26" height="5.26" />
        <rect x="446.48" y="325.46" width="5.45" height="5.1" />
        <rect x="461.56" y="360.37" width="5.22" height="5.22" />
        <rect x="466.43" y="370.08" width="5.49" height="5.49" />
        <rect x="481.56" y="345.3" width="5.26" height="5.26" />
        <rect x="501.51" y="360.37" width="5.22" height="5.22" />
        <rect x="506.73" y="370.29" width="5.07" height="5.07" />
        <rect x="486.83" y="325.46" width="5.1" height="5.1" />
        <rect x="526.68" y="325.46" width="5.65" height="5.65" />
        <rect x="566.57" y="325.46" width="5.1" height="5.1" />
        <rect x="521.52" y="345.3" width="5.26" height="5.26" />
        <rect x="561.53" y="345.3" width="5.26" height="5.26" />
        <rect x="581.59" y="359.76" width="5.5" height="6.46" />
        <rect x="586.41" y="370.08" width="5.49" height="5.49" />
        <rect x="586.41" y="390.53" width="5.49" height="5.49" />
        <rect x="561.53" y="389.84" width="5.39" height="5.39" />
        <rect x="546.28" y="389.84" width="6.31" height="5.5" />
        <rect x="520.83" y="389.84" width="6.42" height="5.39" />
        <rect x="506.02" y="389.84" width="5.78" height="5.78" />
        <rect x="481.05" y="389.84" width="6.19" height="5.39" />
        <rect x="466.43" y="390.53" width="6.13" height="4.7" />
        <rect x="441.46" y="390.18" width="5.16" height="5.16" />
        <rect x="426.53" y="390.18" width="5.16" height="5.16" />
        <rect x="601.08" y="390.53" width="5.68" height="4.82" />
        <rect x="626.08" y="389.84" width="5.78" height="5.78" />
        <rect x="640.64" y="389.84" width="6.42" height="5.45" />
        <rect x="626.08" y="370.29" width="5.78" height="5.78" />
        <rect x="621.03" y="360.26" width="5.96" height="5.96" />
        <rect x="601.66" y="345.3" width="5.26" height="5.26" />
        <rect x="606.24" y="324.95" width="5.62" height="5.62" />
        <rect x="646.49" y="325.46" width="5.65" height="5.65" />
        <rect x="641.9" y="345.3" width="5.26" height="5.26" />
        <rect x="666.32" y="370.29" width="5.42" height="5.42" />
        <rect x="666.32" y="389.84" width="5.78" height="5.78" />
        <rect x="682.14" y="389.84" width="5.41" height="5.41" />
        <rect x="707.02" y="390.53" width="4.82" height="4.82" />
        <rect x="705.87" y="370.29" width="5.78" height="5.78" />
        <rect x="701.52" y="359.76" width="5.5" height="6.46" />
        <rect x="716.19" y="330.56" width="5.96" height="5.16" />
        <rect x="722.15" y="390.18" width="5.16" height="5.16" />
        <rect x="746.35" y="370.29" width="5.42" height="5.42" />
        <rect x="761.25" y="345.3" width="4.7" height="5.26" />
        <rect x="746.35" y="390.18" width="5.42" height="4.7" />
        <rect x="765.95" y="325.06" width="5.85" height="5.85" />
        <rect x="781.66" y="359.76" width="5.47" height="5.47" />
        <rect x="786.24" y="370.29" width="5.42" height="5.42" />
        <rect x="786.24" y="390.18" width="5.42" height="5.42" />
        <rect x="761.25" y="390.18" width="5.42" height="5.42" />
        <rect x="801.15" y="345.3" width="5.26" height="5.26" />
        <rect x="806.41" y="325.06" width="5.5" height="5.5" />
        <rect x="821.56" y="360.49" width="5.62" height="5.62" />
        <rect x="826.37" y="370.81" width="5.33" height="5.33" />
        <rect x="801.84" y="390.18" width="4.93" height="5.39" />
        <rect x="826.37" y="390.18" width="5.33" height="5.33" />
        <rect x="842.08" y="390.64" width="4.93" height="4.93" />
        <rect x="866.5" y="370.29" width="5.3" height="5.3" />
        <rect x="861.11" y="360.49" width="5.39" height="4.74" />
        <rect x="840.82" y="345.3" width="5.26" height="5.26" />
        <rect x="846.08" y="325.06" width="5.5" height="5.5" />
        <rect x="866.5" y="390.18" width="5.96" height="5.27" />
        <rect x="886.22" y="325.06" width="5.5" height="5.5" />
        <rect x="880.94" y="345.3" width="6.08" height="5.26" />
        <rect x="901.7" y="360.49" width="5.04" height="5.04" />
        <rect x="906.74" y="370.29" width="5.3" height="5.3" />
        <rect x="906.05" y="390.18" width="6.42" height="5.27" />
        <rect x="880.94" y="390.18" width="5.85" height="4.99" />
        <rect x="921.53" y="390.18" width="6.02" height="6.02" />
        <rect x="946.75" y="370.29" width="5.3" height="5.3" />
        <rect x="945.72" y="389.61" width="6.33" height="5.56" />
        <rect x="961.08" y="390.64" width="6.08" height="4.93" />
        <rect x="941.25" y="359.23" width="6.31" height="6.31" />
        <rect x="925.77" y="339.28" width="5.62" height="5.62" />
        <rect x="935.75" y="345.3" width="5.5" height="5.5" />
        <rect x="951.45" y="340.2" width="5.11" height="5.11" />
        <rect x="971.86" y="325.06" width="5.5" height="5.5" />
        <rect x="916.83" y="320.59" width="6.19" height="6.19" />
        <path
          className="cls-2-2"
          d="M1186.22,314.68l-281.66,1.75v78.3h10.6v-5.05l5.35.16v4.89h5.2v-5.05l4.64-.05v-5.16l5,.11-.29,4.93h10.32s.06,4.82,0,5a82.69,82.69,0,0,0,10,.23v-5.16l4.93.06v4.93l5.1.25v-5.3l4.88.06v-5.05l5.16.06v4.93l9.8.06v4.93l10.09-.06v-5.1l5.1.17v4.87l5,.12v-5l4.93.12-.28-5.11,5.33.06v4.87l10,.06v5l9.86.31v-5.24a48.19,48.19,0,0,0,5,.11c.12-.17,0,5.13,0,5.13s4.93.49,5.16,0a41.49,41.49,0,0,0,0-5.36l5.22.06v-5l4.64.11v5.1s10.09-.46,10-.23,0,5.11,0,5.11,10.43-.35,10.31-.18,0-4.81,0-4.81a46.29,46.29,0,0,0,4.82.11c-.12-.17,0,5.05,0,5.05l5-.06v-5.1s4.88.46,4.88.11v-5.27l5,.17v4.93h9.8v5.22l10.49-.23-.28-5a49.85,49.85,0,0,0,5,.06v5s5.5-.28,5.33-.17a47.74,47.74,0,0,1,0-4.93h4.69v-5.1l4.88.11v5.22s10.08-.11,10.14-.23-.28,5.1-.28,5.1l10.26-.11v-5.05h5l-.34,5.58,5.56-.25v-5.33l4.76.18v-5.05l4.87.12v5l9.92-.23v5.1"
          transform="translate(0.68 2.73)"
        />
        <rect x="905.92" y="367.04" width="5.26" height="5.26" />
        <rect x="920.85" y="342.26" width="5.26" height="5.26" />
        <rect x="925.87" y="322.42" width="5.45" height="5.1" />
        <rect x="940.95" y="357.33" width="5.22" height="5.22" />
        <rect x="945.82" y="367.04" width="5.49" height="5.49" />
        <rect x="960.96" y="342.26" width="5.26" height="5.26" />
        <rect x="980.9" y="357.33" width="5.22" height="5.22" />
        <rect x="986.12" y="367.25" width="5.07" height="5.07" />
        <rect x="966.22" y="322.42" width="5.1" height="5.1" />
        <rect x="1006.07" y="322.42" width="5.65" height="5.65" />
        <rect x="1045.97" y="322.42" width="5.1" height="5.1" />
        <rect x="1000.91" y="342.26" width="5.26" height="5.26" />
        <rect x="1040.92" y="342.26" width="5.26" height="5.26" />
        <rect x="1060.99" y="356.72" width="5.5" height="6.46" />
        <rect x="1065.8" y="367.04" width="5.49" height="5.49" />
        <rect x="1065.8" y="387.48" width="5.49" height="5.49" />
        <rect x="1040.92" y="386.79" width="5.39" height="5.39" />
        <rect x="1025.67" y="386.79" width="6.31" height="5.5" />
        <rect x="1000.22" y="386.79" width="6.42" height="5.39" />
        <rect x="985.41" y="386.79" width="5.78" height="5.78" />
        <rect x="960.44" y="386.79" width="6.19" height="5.39" />
        <rect x="945.82" y="387.48" width="6.13" height="4.7" />
        <rect x="920.85" y="387.14" width="5.16" height="5.16" />
        <rect x="905.92" y="387.14" width="5.16" height="5.16" />
        <rect x="1080.48" y="387.48" width="5.68" height="4.82" />
        <rect x="1105.47" y="386.79" width="5.78" height="5.78" />
        <rect x="1120.03" y="386.79" width="6.42" height="5.45" />
        <rect x="1105.47" y="367.25" width="5.78" height="5.78" />
        <rect x="1100.43" y="357.21" width="5.96" height="5.96" />
        <rect x="1081.05" y="342.26" width="5.26" height="5.26" />
        <rect x="1085.64" y="321.9" width="5.62" height="5.62" />
        <rect x="1125.88" y="322.42" width="5.65" height="5.65" />
        <rect x="1121.29" y="342.26" width="5.26" height="5.26" />
        <rect x="1145.71" y="367.25" width="5.42" height="5.42" />
        <rect x="1145.71" y="386.79" width="5.78" height="5.78" />
        <rect x="1161.53" y="386.79" width="5.41" height="5.41" />
        <rect x="1180.91" y="356.72" width="5.5" height="6.46" />
        <path
          className="cls-2-2"
          d="M1267.69,315.46l-94,.58v78.31h10.6V389.3l5.35.15v4.9h5.19V389.3l4.65-.06v-5.16l5,.12-.28,4.93h10.31s.06,4.81,0,5a85,85,0,0,0,10,.23v-5.16l4.93.05v4.93l5.1.26v-5.3l4.87.06v-5.05l5.16.06v4.93l9.81.06v4.93l10.08-.06V389l3.24.11"
          transform="translate(0.68 2.73)"
        />
        <rect x="1175.03" y="366.65" width="5.26" height="5.26" />
        <rect x="1189.96" y="341.88" width="5.26" height="5.26" />
        <rect x="1194.98" y="322.04" width="5.45" height="5.1" />
        <rect x="1210.05" y="356.95" width="5.22" height="5.22" />
        <rect x="1214.93" y="366.65" width="5.49" height="5.49" />
        <rect x="1230.06" y="341.88" width="5.26" height="5.26" />
        <rect x="1250.01" y="356.95" width="5.22" height="5.22" />
        <rect x="1255.23" y="366.86" width="5.07" height="5.07" />
        <rect x="1235.33" y="322.04" width="5.1" height="5.1" />
        <rect x="1254.52" y="386.41" width="5.78" height="5.78" />
        <rect x="1229.55" y="386.41" width="6.19" height="5.39" />
        <rect x="1214.93" y="387.1" width="6.13" height="4.7" />
        <rect x="1189.96" y="386.76" width="5.16" height="5.16" />
        <rect x="1175.03" y="386.76" width="5.16" height="5.16" />
        <rect
          className="cls-2-2"
          x="1271.74"
          y="353.11"
          width="7.98"
          height="11.01"
        />
        <path
          className="cls-2-2"
          d="M1279.33,314.73l-25.49.59v78.3h2.87v-5.05l1.45.16v4.89h1.41v-5.05l1.26-.05v-5.16l1.37.11-.08,4.93h2.8s0,4.82,0,5a6.19,6.19,0,0,0,2.7.23v-5.16l1.34.06v4.93l1.38.25v-5.3l1.32.06v-5l1.4.06v4.93l2.66.06v4.93l2.73-.06v-5.1l.88.11"
          transform="translate(0.68 2.73)"
        />
      </g>
    </svg>
  );
};

export default ZearthAnimation;
