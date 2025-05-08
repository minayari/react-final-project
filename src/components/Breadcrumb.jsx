// import * as React from "react";
// import Typography from "@mui/material/Typography";
// import Breadcrumbs from "@mui/material/Breadcrumbs";
// import Link from "@mui/material/Link";

// function handleClick(event) {
//   event.preventDefault();
//   console.info("You clicked a breadcrumb.");
// }

// export default function Breadcrumb() {
//   return (
//     <div role="presentation" onClick={handleClick}>
//       <Breadcrumbs aria-label="breadcrumb">
//         <Link underline="hover" color="inherit" href="/">
//           Main page
//         </Link>
//         <Link
//           underline="hover"
//           color="inherit"
//           href="/product/category"
//         >
//           Category
//         </Link>
//         <Typography sx={{ color: 'text.primary' }}>Breadcrumbs</Typography>
//       </Breadcrumbs>
//     </div>
//   );
// }

// import React from "react";
// import { useLocation, Link as RouterLink } from "react-router-dom";
// import Breadcrumbs from "@mui/material/Breadcrumbs";
// import Link from "@mui/material/Link";
// import Typography from "@mui/material/Typography";
// import NavigateNextIcon from "@mui/icons-material/NavigateNext";

// export default function DynamicBreadcrumbs() {
//   const location = useLocation();
//   const pathnames = location.pathname.split("/").filter((x) => x);

//   if (pathnames.length === 0) {
//     return (
//       <Breadcrumbs
//         separator={<NavigateNextIcon fontSize="small" />}
//         aria-label="breadcrumb"
//       >
//         <Typography color="text.primary">main page</Typography>
//       </Breadcrumbs>
//     );
//   }

//   return (
//     <Breadcrumbs
//       separator={<NavigateNextIcon fontSize="small" />}
//       aria-label="breadcrumb"
//     >
//       <Link component={RouterLink} to="/" underline="hover" color="inherit">
//         main page
//       </Link>

//       {pathnames.map((value, index) => {
//         const to = `/${pathnames.slice(0, index + 1).join("/")}`;
//         const isLast = index === pathnames.length - 1;

//         return isLast ? (
//           <Typography key={to} color="text.primary">
//             {decodeURIComponent(value)}
//           </Typography>
//         ) : (
//           <Link
//             key={to}
//             component={RouterLink}
//             to={to}
//             underline="hover"
//             color="inherit"
//           >
//             {decodeURIComponent(value)}
//           </Link>
//         );
//       })}
//     </Breadcrumbs>
//   );
// }

import React from "react";
import { useLocation, Link as RouterLink } from "react-router-dom";
import Breadcrumbs from "@mui/material/Breadcrumbs";
import Typography from "@mui/material/Typography";
import NavigateNextIcon from "@mui/icons-material/NavigateNext";
import Link from "@mui/material/Link";

export default function Breadcrumb() {
  const location = useLocation();

  const fullPathnames = location.pathname.split("/").filter(Boolean);

  const displayPathnames = fullPathnames.filter((part) => part !== "product");

  if (displayPathnames.length === 0) {
    return (
      <Breadcrumbs
        separator={<NavigateNextIcon fontSize="small" />}
        aria-label="breadcrumb"
      >
        <Typography color="text.primary">main page</Typography>
      </Breadcrumbs>
    );
  }

  let currentPathIndex = 0;

  return (
    <Breadcrumbs
      separator={<NavigateNextIcon fontSize="small" />}
      aria-label="breadcrumb"
    >
      <Link component={RouterLink} to="/" underline="hover" color="inherit">
        main page
      </Link>

      {displayPathnames.map((segment, index) => {
        currentPathIndex = fullPathnames.indexOf(segment, currentPathIndex);
        const to = "/" + fullPathnames.slice(0, currentPathIndex + 1).join("/");
        currentPathIndex += 1;

        const isLast = index === displayPathnames.length - 1;

        return isLast ? (
          <Typography key={to} color="text.primary">
            {decodeURIComponent(segment)}
          </Typography>
        ) : (
          <Link
            key={to}
            component={RouterLink}
            to={to}
            underline="hover"
            color="inherit"
          >
            {decodeURIComponent(segment)}
          </Link>
        );
      })}
    </Breadcrumbs>
  );
}
