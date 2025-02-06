import { useState } from "react";
import { Container, Card, CardContent, Typography, Button, TextField, List, ListItem, ListItemText, IconButton } from "@mui/material";
import { AddShoppingCart, Delete, Visibility } from "@mui/icons-material";

export default function listaCompra() {
  const [listName, setListName] = useState("Mi Lista de Compras");
  const [items, setItems] = useState([]);
  const [newItem, setNewItem] = useState("");

  const addItem = () => {
    if (newItem.trim() !== "") {
      setItems([...items, newItem]);
      setNewItem("");
    }
  };

  const clearList = () => {
    setItems([]);
  };

  return (
    <Container maxWidth="sm" style={{ marginTop: "20px" }}>
      <Card>
        <CardContent>
          <Typography variant="h5" gutterBottom>
            {listName}
          </Typography>
          <TextField
            label="Añadir producto"
            variant="outlined"
            fullWidth
            value={newItem}
            onChange={(e) => setNewItem(e.target.value)}
            style={{ marginBottom: "10px" }}
          />
          <Button
            variant="contained"
            color="primary"
            startIcon={<AddShoppingCart />}
            onClick={addItem}
            style={{ marginBottom: "10px" }}
          >
            Añadir
          </Button>
          <List>
            {items.map((item, index) => (
              <ListItem key={index} divider>
                <ListItemText primary={item} />
              </ListItem>
            ))}
          </List>
          <Button
            variant="contained"
            color="secondary"
            startIcon={<Visibility />}
            style={{ marginRight: "10px" }}
          >
            Ver Lista
          </Button>
          <Button
            variant="contained"
            color="error"
            startIcon={<Delete />}
            onClick={clearList}
          >
            Eliminar Lista
          </Button>
        </CardContent>
      </Card>
    </Container>
  );
}