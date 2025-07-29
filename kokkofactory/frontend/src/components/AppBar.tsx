
import * as React from "react";
import AppBar from "@mui/material/AppBar";
import Box from "@mui/material/Box";
import Toolbar from "@mui/material/Toolbar";
import Typography from "@mui/material/Typography";
import IconButton from "@mui/material/IconButton";
import MenuIcon from "@mui/icons-material/Menu";
import AccountCircle from "@mui/icons-material/AccountCircle";
import Link from "next/link";
import Switch from "@mui/material/Switch";
import FormControlLabel from "@mui/material/FormControlLabel";
import FormGroup from "@mui/material/FormGroup";
import MenuItem from "@mui/material/MenuItem";
import Menu from "@mui/material/Menu";


type MenuAppBarProps = {
  title: string | {src: string; alt: string};
};

export default function MenuAppBar({ title }: MenuAppBarProps) {
  const [auth, setAuth] = React.useState(true);
  const [anchorEl, setAnchorEl] = React.useState<null | HTMLElement>(null);

  const handleChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    setAuth(event.target.checked);
  };

  const handleMenu = (event: React.MouseEvent<HTMLElement>) => {
    setAnchorEl(event.currentTarget);
  };

  const handleClose = () => {
    setAnchorEl(null);
  };

  return (
    <Box sx={{ flexGrow: 1 }}>
      <AppBar position="static" sx={{ backgroundColor: 'transparent', boxShadow: 'none', }}> {/* ベージュ：ユニバーサルカラー */}
        <Toolbar
          sx={{
            display: 'flex',
            justifyContent: 'space-between',
            alignItems: 'flex-start',
            position: 'relative', 
          }}
        >
          <IconButton
            size="large"
            edge="start"
            color="inherit"
            aria-label="menu"
            sx={{ 
              position: 'flex', //アイコン左端
              left: 0,
              color: '#8B4513',
              width: 64,
              height: 10,
              top: '8px',
             }}
          >
            <MenuIcon sx={{fontSize: 64}}/>
          </IconButton>
          {typeof title === 'string' ? (
            <Typography
              variant="h6"
              component="div"
              sx={{
                flexGrow: 1,
                fontFamily: 'Poppins, sans-serif', // 柔らかい印象のフォント
                fontSize: '1.5rem', // フォントサイズ調整
                color: '#fff', // 白色にして明るく
                textAlign: 'center',
              }}
            >
              {title}
            </Typography>
          ) : (
            <img
              src={title.src}
              alt={title.alt}
              style={{
                height: '170px', //ロゴの高さ
                objectFit: 'contain',
                display: 'block',
                margin: 'auto',
              }}
            />
          )}
          {auth && (
            <div>
              <IconButton
                size="large"
                edge="start"
                aria-label="account of current user"
                aria-controls="menu-appbar"
                aria-haspopup="true"
                onClick={handleMenu}
                color="inherit"
                sx={{
                  position: 'flex', //アイコンみぎはじ
                  right: 0,
                  color: '#8B4513',
                  width: 64,
                  height: 10,
                  top: '8px'
                }}
              >
                <AccountCircle style={{fontSize: 64}}/>
              </IconButton>
              <Menu
                id="menu-appbar"
                anchorEl={anchorEl}
                anchorOrigin={{
                  vertical: "top",
                  horizontal: "right",
                }}
                keepMounted
                transformOrigin={{
                  vertical: "top",
                  horizontal: "right",
                }}
                open={Boolean(anchorEl)}
                onClose={handleClose}
              >
                <Link href={"/countcheck"}>
                  <MenuItem onClick={handleClose}>countcheck</MenuItem>
                </Link>
                <MenuItem onClick={handleClose}>My account</MenuItem>
              </Menu>
            </div>
          )}
        </Toolbar>
      </AppBar>
    </Box>
  );
}
