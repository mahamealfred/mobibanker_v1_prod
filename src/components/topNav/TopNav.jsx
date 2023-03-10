import { AppBar, Toolbar,styled,Box,Button,Typography} from '@mui/material'
import React, { useEffect } from 'react'
import NativeSelect from '@mui/material/NativeSelect';
import FormControl from '@mui/material/FormControl';
import InputLabel from '@mui/material/InputLabel';
import Paper from '@mui/material/Paper';
import Stack from '@mui/material/Stack';
import LanguageIcon from '@mui/icons-material/Language';
import { Colors, DrawerWidth } from "../styles/theme";
import { useTranslation } from "react-i18next";
import CssBaseline from '@mui/material/CssBaseline';
import i18next from "i18next";
import LanguagePopover from '../../pages/dashboard/header/LanguagePopover';
import {
  flexBetweenCenter,
  justifyCenter,
  fullWidthFlex,
} from '../styles/theme';
const TopNav = () => {
  const [ setLanguage] = React.useState('');
  const { i18n, t } = useTranslation(["common"]);

	useEffect(() => {
		if (localStorage.getItem("i18nextLng")?.length > 2) {
			i18next.changeLanguage("en");
		}
	}, []);
	const handleLanguageChange = (e) => {
		i18n.changeLanguage(e.target.value);
	};
    const StyledToolbar=styled(Toolbar)({
        display:"flex",
        justifyContent:"space-between",
        padding:2,
    });
    const MobiLogoImg=styled(Box)(({theme})=>({
        marginLeft:35,
    }))
    const MobiBankerImg=styled(Box)(({theme})=>({
        marginRight:35,
    }))
 
  return (
    <AppBar position="sticky"   elevation={2} sx={{backgroundColor:'white',width:"100%"}} >
        {/* <CssBaseline/> */}
        <StyledToolbar>
            <MobiLogoImg>
            <Box
        component="img"
        sx={{
          marginLeft:8,
          objectFit:"contain",
          maxHeight: { xs: 150, md: 150},
          maxWidth: { xs: 200, md: 200},
          display:{xs:"none",sm:"block"}
        }}
        alt="mobicash logo"
        src="../../images/mobibk.png"
      />
       <Box
              component="img"
              sx={{
               
                maxHeight: { xs: 100, md: 100},
                maxWidth: { xs: 300, md: 300},
                display: { xs: "block", sm: "none", md: "none" }
              }}
              alt="mobicash logo"
              src="../../images/mobibk.png"
            />
        
            </MobiLogoImg>
        < MobiBankerImg>
        <Box sx={{ minWidth: 100 }}>
     
      <Box
      sx={{
        ...fullWidthFlex,
       
        display:{xs:"none",sm:"block"}
      }}
    >
       <LanguagePopover/>
      </Box>
    
        </Box>
        </MobiBankerImg>
       
        </StyledToolbar>

       
    </AppBar>
  )
}

export default TopNav