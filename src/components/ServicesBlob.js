import React, { useState, useEffect } from 'react';
import PropTypes from 'prop-types';
import styled from 'styled-components';
import { useIntersectionObserver } from '@researchgate/react-intersection-observer';
import { motion, useAnimation } from 'framer-motion';
import { media } from 'src/utils';

const Decor = styled(motion.path)`
  display: none;

  ${media.tablet`
display:block;
`}
`;

const ServicesBlob = ({ className }) => {
  const [visibility, setVisibility] = useState(false);
  const controls = useAnimation();

  const handleChange = entry => {
    setVisibility(entry.isIntersecting);
  };

  const [ref] = useIntersectionObserver(handleChange, { threshold: 0 });

  const transition = { ease: 'linear', loop: Infinity, duration: 8 };

  useEffect(() => {
    if (visibility) controls.start({ rotate: 360 });
    return () => controls.stop();
  }, [visibility, controls]);
  return (
    <svg
      ref={ref}
      className={className}
      viewBox="0 0 792 1002"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
    >
      <g filter="url(#filter0_dddd)">
        <path
          fillRule="evenodd"
          clipRule="evenodd"
          d="M611.732 117.464C712.565 195.9 678.289 303.831 706.294 400.533C726.002 468.583 758.845 534.56 751.26 599.246C743.042 669.321 713.71 731.462 661.329 783.967C593.456 852.001 531.518 936.589 406.774 944.547C276.68 952.847 125.668 899.353 12.7239 825.346C-94.3103 755.211 -131.645 654.319 -178.914 560.773C-221.849 475.804 -276.456 385.919 -247.734 309.896C-219.865 236.129 -106.951 213.728 -30.0783 166.822C53.4863 115.834 104.161 32.5451 221.616 23.5123C348.122 13.7835 510.15 38.4458 611.732 117.464Z"
          fill="#DFF2FA"
          fillOpacity="0.89"
        />
      </g>
      <g filter="url(#filter1_ddd)">
        <path
          fillRule="evenodd"
          clipRule="evenodd"
          d="M614.988 109.59C719.353 189.837 686.219 298.341 716.51 396.207C737.826 465.077 772.524 532.001 765.902 597.174C758.728 667.777 729.847 730.142 677.255 782.529C609.108 850.411 547.311 935.059 420.025 941.704C287.28 948.634 132.091 892.993 15.4311 817.08C-95.1244 745.139 -135.018 642.941 -184.931 548.045C-230.269 461.849 -287.614 370.565 -259.599 294.189C-232.415 220.079 -117.464 198.732 -39.7564 152.265C44.7163 101.753 95.0301 18.2909 214.852 10.481C343.907 2.06935 509.847 28.7466 614.988 109.59Z"
          stroke="#338FFF"
          strokeWidth="1.71818"
        />
      </g>
      <Decor
        opacity="0.8"
        d="M498.274 786.607C498.274 779.309 504.19 773.393 511.487 773.393H545.465C552.762 773.393 558.678 779.309 558.678 786.607V821.528C558.678 828.825 552.762 834.741 545.465 834.741H511.487C504.19 834.741 498.274 828.825 498.274 821.528V786.607Z"
        fill="#FEFEFE"
        animate={controls}
        transition={transition}
      />
      <Decor
        opacity="0.7"
        d="M468 111.213C468 103.916 473.916 98 481.213 98H515.19C522.488 98 528.404 103.916 528.404 111.213V146.134C528.404 153.432 522.488 159.348 515.19 159.348H481.213C473.916 159.348 468 153.432 468 146.134V111.213Z"
        fill="#FEFEFE"
        animate={controls}
        transition={transition}
      />

      <defs>
        <filter
          id="filter0_dddd"
          x="-287.736"
          y="13.5015"
          width="1072.11"
          height="987.895"
          filterUnits="userSpaceOnUse"
          colorInterpolationFilters="sRGB"
        >
          <feFlood floodOpacity="0" result="BackgroundImageFix" />
          <feColorMatrix
            in="SourceAlpha"
            type="matrix"
            values="0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 127 0"
          />
          <feOffset />
          <feGaussianBlur stdDeviation="0.5" />
          <feColorMatrix
            type="matrix"
            values="0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0.04 0"
          />
          <feBlend
            mode="normal"
            in2="BackgroundImageFix"
            result="effect1_dropShadow"
          />
          <feColorMatrix
            in="SourceAlpha"
            type="matrix"
            values="0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 127 0"
          />
          <feOffset dy="4" />
          <feGaussianBlur stdDeviation="4" />
          <feColorMatrix
            type="matrix"
            values="0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0.04 0"
          />
          <feBlend
            mode="normal"
            in2="effect1_dropShadow"
            result="effect2_dropShadow"
          />
          <feColorMatrix
            in="SourceAlpha"
            type="matrix"
            values="0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 127 0"
          />
          <feOffset dy="16" />
          <feGaussianBlur stdDeviation="12" />
          <feColorMatrix
            type="matrix"
            values="0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0.04 0"
          />
          <feBlend
            mode="normal"
            in2="effect2_dropShadow"
            result="effect3_dropShadow"
          />
          <feColorMatrix
            in="SourceAlpha"
            type="matrix"
            values="0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 127 0"
          />
          <feOffset dy="24" />
          <feGaussianBlur stdDeviation="16" />
          <feColorMatrix
            type="matrix"
            values="0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0.04 0"
          />
          <feBlend
            mode="normal"
            in2="effect3_dropShadow"
            result="effect4_dropShadow"
          />
          <feBlend
            mode="normal"
            in="SourceGraphic"
            in2="effect4_dropShadow"
            result="shape"
          />
        </filter>
        <filter
          id="filter1_ddd"
          x="-291.859"
          y="0.141052"
          width="1083.45"
          height="983.005"
          filterUnits="userSpaceOnUse"
          colorInterpolationFilters="sRGB"
        >
          <feFlood floodOpacity="0" result="BackgroundImageFix" />
          <feColorMatrix
            in="SourceAlpha"
            type="matrix"
            values="0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 127 0"
          />
          <feOffset />
          <feGaussianBlur stdDeviation="0.5" />
          <feColorMatrix
            type="matrix"
            values="0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0.04 0"
          />
          <feBlend
            mode="normal"
            in2="BackgroundImageFix"
            result="effect1_dropShadow"
          />
          <feColorMatrix
            in="SourceAlpha"
            type="matrix"
            values="0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 127 0"
          />
          <feOffset dy="2" />
          <feGaussianBlur stdDeviation="3" />
          <feColorMatrix
            type="matrix"
            values="0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0.04 0"
          />
          <feBlend
            mode="normal"
            in2="effect1_dropShadow"
            result="effect2_dropShadow"
          />
          <feColorMatrix
            in="SourceAlpha"
            type="matrix"
            values="0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 127 0"
          />
          <feOffset dy="16" />
          <feGaussianBlur stdDeviation="12" />
          <feColorMatrix
            type="matrix"
            values="0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0.06 0"
          />
          <feBlend
            mode="normal"
            in2="effect2_dropShadow"
            result="effect3_dropShadow"
          />
          <feBlend
            mode="normal"
            in="SourceGraphic"
            in2="effect3_dropShadow"
            result="shape"
          />
        </filter>
        <filter
          id="filter2_dd"
          x="-156.169"
          y="469.993"
          width="284.27"
          height="284.27"
          filterUnits="userSpaceOnUse"
          colorInterpolationFilters="sRGB"
        >
          <feFlood floodOpacity="0" result="BackgroundImageFix" />
          <feColorMatrix
            in="SourceAlpha"
            type="matrix"
            values="0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 127 0"
          />
          <feOffset dy="14.2784" />
          <feGaussianBlur stdDeviation="11.4227" />
          <feColorMatrix
            type="matrix"
            values="0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0.1 0"
          />
          <feBlend
            mode="normal"
            in2="BackgroundImageFix"
            result="effect1_dropShadow"
          />
          <feColorMatrix
            in="SourceAlpha"
            type="matrix"
            values="0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 127 0"
          />
          <feOffset dy="5.71135" />
          <feGaussianBlur stdDeviation="4.28351" />
          <feColorMatrix
            type="matrix"
            values="0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0.06 0"
          />
          <feBlend
            mode="normal"
            in2="effect1_dropShadow"
            result="effect2_dropShadow"
          />
          <feBlend
            mode="normal"
            in="SourceGraphic"
            in2="effect2_dropShadow"
            result="shape"
          />
        </filter>
        <filter
          id="filter3_dd"
          x="-156.169"
          y="171.61"
          width="284.27"
          height="284.27"
          filterUnits="userSpaceOnUse"
          colorInterpolationFilters="sRGB"
        >
          <feFlood floodOpacity="0" result="BackgroundImageFix" />
          <feColorMatrix
            in="SourceAlpha"
            type="matrix"
            values="0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 127 0"
          />
          <feOffset dy="14.2784" />
          <feGaussianBlur stdDeviation="11.4227" />
          <feColorMatrix
            type="matrix"
            values="0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0.1 0"
          />
          <feBlend
            mode="normal"
            in2="BackgroundImageFix"
            result="effect1_dropShadow"
          />
          <feColorMatrix
            in="SourceAlpha"
            type="matrix"
            values="0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 127 0"
          />
          <feOffset dy="5.71135" />
          <feGaussianBlur stdDeviation="4.28351" />
          <feColorMatrix
            type="matrix"
            values="0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0.06 0"
          />
          <feBlend
            mode="normal"
            in2="effect1_dropShadow"
            result="effect2_dropShadow"
          />
          <feBlend
            mode="normal"
            in="SourceGraphic"
            in2="effect2_dropShadow"
            result="shape"
          />
        </filter>
        <filter
          id="filter4_dd"
          x="-156.169"
          y="17.2279"
          width="284.27"
          height="140.27"
          filterUnits="userSpaceOnUse"
          colorInterpolationFilters="sRGB"
        >
          <feFlood floodOpacity="0" result="BackgroundImageFix" />
          <feColorMatrix
            in="SourceAlpha"
            type="matrix"
            values="0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 127 0"
          />
          <feOffset dy="14.2784" />
          <feGaussianBlur stdDeviation="11.4227" />
          <feColorMatrix
            type="matrix"
            values="0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0.1 0"
          />
          <feBlend
            mode="normal"
            in2="BackgroundImageFix"
            result="effect1_dropShadow"
          />
          <feColorMatrix
            in="SourceAlpha"
            type="matrix"
            values="0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 127 0"
          />
          <feOffset dy="5.71135" />
          <feGaussianBlur stdDeviation="4.28351" />
          <feColorMatrix
            type="matrix"
            values="0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0.06 0"
          />
          <feBlend
            mode="normal"
            in2="effect1_dropShadow"
            result="effect2_dropShadow"
          />
          <feBlend
            mode="normal"
            in="SourceGraphic"
            in2="effect2_dropShadow"
            result="shape"
          />
        </filter>
      </defs>
    </svg>
  );
};

ServicesBlob.propTypes = {
  className: PropTypes.string,
};

ServicesBlob.defaultProps = {
  className: '',
};

export default ServicesBlob;
