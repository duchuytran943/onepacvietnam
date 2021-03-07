<template>
  <svg xmlns="http://www.w3.org/2000/svg" width="14" height="14" viewBox="0 0 14 14">
    <defs>
      <path
        id="a"
        d="M196.432 64c-2.996 0-5.432 2.522-5.432 5.623 0 3.102 2.436 5.614
        5.432 5.614a5.285 5.285 0 0 0 3.416-1.247.802.802 0 0 0 .14.223l3.388
        3.497c.177.193.43.29.672.29a.931.931 0 0 0 .672-.29 1.016 1.016 0 0 0
        0-1.4l-3.379-3.498a.883.883 0 0 0-.317-.213c.532-.87.83-1.884.83-2.976
        0-3.101-2.426-5.623-5.422-5.623zm0 1.73c2.072 0 3.752 1.748 3.752 3.893
        0 .725-.196 1.43-.57 2.058l-.345.56-.476.397c-.681.57-1.493.87-2.361.87-2.072
        0-3.761-1.74-3.761-3.885 0-2.145 1.689-3.894 3.761-3.894z"
      />
      <filter width="142.9%" height="142.9%" x="-21.4%" y="-21.4%" filterUnits="objectBoundingBox">
        <feGaussianBlur in="SourceAlpha" result="shadowBlurInner1" stdDeviation="2.5" />
        <feOffset dy="1" in="shadowBlurInner1" result="shadowOffsetInner1" />
        <feComposite
          in="shadowOffsetInner1"
          in2="SourceAlpha"
          k2="-1"
          k3="1"
          operator="arithmetic"
          result="shadowInnerInner1"
        />
        <feColorMatrix in="shadowInnerInner1" values="0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0.2 0" />
      </filter>
    </defs>
    <g fill="none" fill-rule="evenodd" transform="translate(-191 -64)">
      <use fill="#9EA4AC" xlink:href="#a" />
      <use fill="#000" filter="url(#b)" xlink:href="#a" />
    </g>
  </svg>
</template>
