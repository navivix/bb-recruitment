import {
  Paper,
  FormControl,
  Input,
  InputLabel,
  InputAdornment,
} from "@mui/material";
import SearchIcon from "@mui/icons-material/Search";

interface SearchBarProps {
  value: string;
  onChange: (arg: string) => void;
  onSearch: () => void;
}

export default function SearchBar(props: SearchBarProps) {
  const handleChange = (event: any) => {
    props.onChange(event.target.value);
  };

  const handleKeyPress = (event: any) => {
    if (event.keyCode == 13) {
      props.onSearch();
    }
  };

  return (
    <Paper sx={{ p: 3 }}>
      <FormControl sx={{ width: "100%" }}>
        <InputLabel>Search repository by name</InputLabel>
        <Input
          value={props.value}
          onChange={handleChange}
          onKeyDown={handleKeyPress}
          startAdornment={
            <InputAdornment position="start">
              <SearchIcon />
            </InputAdornment>
          }
          fullWidth
        />
      </FormControl>
    </Paper>
  );
}
