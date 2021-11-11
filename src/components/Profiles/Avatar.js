import React, {useEffect, useState} from 'react';
import Avatar from '@mui/material/Avatar';
// import Stack from '@mui/material/Stack';



export default function ImageAvatars() {
  return (
    <Avatar alt="K" 
    src="./src/components/pics/minion.png" 
    sx={{ width: 50, height: 50, backgroundColor: "blue" }} 
    />
  );
}
/////////////////////////////////////////////////////////////////////////////////////////////////
// function stringToColor(string) {
//   let hash = 0;
//   let i;

//   for (i = 0; i < string.length; i += 1) {
//     hash = string.charCodeAt(i) + ((hash << 5) - hash);
//   }

//   let color = '#';
//   for (i = 0; i < 3; i += 1) {
//     const value = (hash >> (i * 8)) & 0xff;
//     color += `00${value.toString(16)}`.substr(-2);
//   }
//   return color;
// }

// function stringAvatar(name) {
//   return {
//     sx: {
//       bgcolor: stringToColor(name),
//     },
//     children: `${name.split(' ')[0][0]}${name.split(' ')[1][0]}`,
//   };
// }

// export default function BackgroundLetterAvatars() {
//   return (
//     <Stack direction="row" spacing={2}>
//       <Avatar {...stringAvatar('Katy Winslet')} />
//     </Stack>
//   );
// }