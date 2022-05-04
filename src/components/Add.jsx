import React from "react";
import {
  Box,
  Fab,
  Modal,
  Tooltip,
  Typography,
  styled,
  Avatar,
  TextField,
  Stack,
  ButtonGroup,
  Button,
  IconButton,
} from "@mui/material";
import {
  Add as AddIcon,
  Close,
  DateRange,
  EmojiEmotions,
  Image,
  Person,
  VideoCameraBack,
} from "@mui/icons-material";

const StyledModal = styled(Modal)({
  display: "flex",
  alignItems: "center",
  justifyContent: "center",
});

const UserBox = styled(Box)({
  display: "flex",
  alignItems: "center",
  gap: "10px",
  marginBottom: "10px",
});

const Add = () => {
  const [open, setOpen] = React.useState(false);

  return (
    <>
      <Tooltip
        onClick={() => setOpen(true)}
        title="Delete"
        sx={{
          position: "fixed",
          bottom: 20,
          left: {
            xs: "calc(50% - 25px)",
            md: 30,
          },
        }}
      >
        <Fab color="primary" aria-label="add">
          <AddIcon />
        </Fab>
      </Tooltip>

      <StyledModal
        open={open}
        onClose={() => setOpen(false)}
        aria-labelledby="modal-modal-title"
        aria-describedby="modal-modal-description"
      >
        <Box
          width={400}
          height={280}
          bgcolor={"background.default"}
          color={"text.primary"}
          p={3}
          m={2}
          borderRadius={2}
        >
          <Stack
            flexDirection="row"
            alignItems="center"
            justifyContent="space-between"
            mb={2}
          >
            <Typography
              id="modal-modal-title"
              variant="h6"
              color="gray"
              textAlign="left"
            >
              Create Post
            </Typography>
            {/* close button */}
            <Box display="flex" justifyContent="flex-end">
              <IconButton
                size="small"
                color="error"
                onClick={() => setOpen(false)}
              >
                <Close fontSize="small" />
              </IconButton>
            </Box>
          </Stack>

          <UserBox>
            <Avatar
              src=""
              sx={{
                width: 30,
                height: 30,
              }}
            />
            <Typography fontWeight={500} variant="span" sx={{}}>
              Jean Paul
            </Typography>
          </UserBox>
          <TextField
            sx={{
              width: "100%",
            }}
            variant="standard"
            multiline={true}
            rows={4}
            placeholder="What's on your mind?"
          />

          <Stack direction="row" gap={1} mt={2} mb={3}>
            <EmojiEmotions color="primary" />
            <Image color="info" />
            <VideoCameraBack color="success" />
            <Person color="error" />
          </Stack>

          <ButtonGroup
            fullWidth={true}
            variant="contained"
            aria-label="outlined primary button group"
          >
            <Button>POST</Button>
            <Button
              sx={{
                width: "100px",
              }}
            >
              <DateRange />
            </Button>
          </ButtonGroup>
        </Box>
      </StyledModal>
    </>
  );
};

export default Add;
