import { Drawer, Button } from "@material-ui/core";
import React from "react";


export default function Sidebar() {
    const [open, setOpen] = React.useState(true);

    const handleDrawerOpen = () => {
        setOpen(true);
    };
    
    const handleDrawerClose = () => {
        setOpen(false);
    };

    

    return (
        <div className="sidebar-container">
            <Button
            color="inherit"
            aria-label="open drawer"
            onClick={handleDrawerOpen}
            edge="start"
            sx={{ mr: 2, ...(open && { display: 'none' }) }}
            >
                OPEN
            </Button>
            <Drawer
            sx={{
            width: "300px",
            flexShrink: 0,
            '& .MuiDrawer-paper': {
                width: "300px",
                boxSizing: 'border-box',
            },
            }}
            variant="persistent"
            anchor="left"
            open={open}
            >
                <Button onClick={handleDrawerClose}>
                    CLOSE
                </Button>
                <div className="start-new-game">
                    <Button>
                        Start New Game
                    </Button>
                </div>
                
            </Drawer>
        </div>
    );
}