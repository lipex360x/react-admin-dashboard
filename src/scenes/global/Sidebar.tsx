import { useState } from 'react'
import { ProSidebar, Menu, MenuItem } from 'react-pro-sidebar'
import { Link } from 'react-router-dom'
import 'react-pro-sidebar/dist/css/styles.css'

import { ColorModeContext, tokens } from '@/theme'
import BarChartOutlinedIcon from '@mui/icons-material/BarChartOutlined'
import CalendarTodayOutlinedIcon from '@mui/icons-material/CalendarTodayOutlined'
import ContactsOutlinedIcon from '@mui/icons-material/ContactsOutlined'
import HelpOutlineOutlinedIcon from '@mui/icons-material/HelpOutlineOutlined'
import HomeOutlinedIcon from '@mui/icons-material/HomeOutlined'
import MapOutlinedIcon from '@mui/icons-material/MapOutlined'
import MenuOutlinedIcon from '@mui/icons-material/MenuOutlined'
import PeopleOutlinedIcon from '@mui/icons-material/PeopleOutlined'
import PersonOutlinedIcon from '@mui/icons-material/PersonOutlined'
import PieChartOutlineOutlinedIcon from '@mui/icons-material/PieChartOutlineOutlined'
import ReceiptOutlinedIcon from '@mui/icons-material/ReceiptOutlined'
import TimelineOutlinedIcon from '@mui/icons-material/TimelineOutlined'
import { Box, IconButton, Typography, useTheme } from '@mui/material'

const Sidebar = () => {
  const theme = useTheme()
  const colors = tokens(theme.palette.mode)
  const [isCollapsed, setIsCollapsed] = useState(false)
  const [selected, setSelected] = useState('Dashboard')

  return (
    <Box
      sx={{
        '& .pro-sidebar-inner': {
          background: `${colors.primary[400]} !important`,
        },
        '& .pro-icon-wrapper': {
          backgroundColor: 'transparent !important',
        },
        '& .pro-inner-item': {
          padding: '5px 35px 5px 20px !important',
        },
        '& .pro-inner-item:hover': {
          color: '#868dfb !important',
        },
        '& .pro-menu-item.active': {
          color: '#6870fa !important',
        },
      }}
    >
      <ProSidebar collapsed={isCollapsed}>
        <Menu iconShape="square">
          <MenuItem
            onClick={() => setIsCollapsed(!isCollapsed)}
            icon={isCollapsed ? <MenuOutlinedIcon /> : undefined}
            style={{
              margin: '10px 0 20px 0',
              color: colors.grey[100],
            }}
          >
            {!isCollapsed && (
              <Box display="flex" justifyContent="space-between" alignItems="center" ml="15px">
                <Typography variant="h3" color={colors.grey[100]}>
                  ADMINIS
                </Typography>
                <IconButton onClick={() => setIsCollapsed(!isCollapsed)}>
                  <MenuOutlinedIcon />
                </IconButton>
              </Box>
            )}
          </MenuItem>

          {/* USER */}
          {!isCollapsed && (
            <Box>
              <Box display="flex" justifyContent="center" alignItems="center">
                <img
                  alt="profile user"
                  width="100px"
                  height="100px"
                  src={`https://xsgames.co/randomusers/avatar.php?g=pixel`}
                  style={{ cursor: 'pointer', borderRadius: '50%' }}
                />
              </Box>

              <Box textAlign="center">
                <Typography
                  variant="h2"
                  color={colors.grey[100]}
                  fontWeight="bold"
                  sx={{ m: '10px 0 0 0' }}
                >
                  Scotty Schuble
                </Typography>
                <Typography variant="h5" color={colors.greenAccent[400]}>
                  VP Fancy Admin
                </Typography>
              </Box>
            </Box>
          )}
        </Menu>
      </ProSidebar>
    </Box>
  )
}

export { Sidebar }
