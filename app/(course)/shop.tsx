import React, { useState } from 'react';
import {
  StyleSheet,
  View,
  Text,
  FlatList,
  TouchableOpacity,
  SafeAreaView,
  Modal,
} from 'react-native';
import { Ionicons } from '@expo/vector-icons';

interface ShopItem {
  id: string;
  name: string;
  description: string;
  price: number;
  image: string;
  icon: string;
}

const shopItems: ShopItem[] = [
  {
    id: '1',
    name: 'Premium Subscription',
    description: 'Get access to all premium features for 1 month',
    price: 9.99,
    image: '/placeholder.svg?height=100&width=100',
    icon: 'star',
  },
  {
    id: '2',
    name: 'Language Course Bundle',
    description: 'Access to 5 language courses of your choice',
    price: 49.99,
    image: '/placeholder.svg?height=100&width=100',
    icon: 'book',
  },
  {
    id: '3',
    name: 'Conversation Practice Pack',
    description: '10 one-on-one conversation sessions with native speakers',
    price: 29.99,
    image: '/placeholder.svg?height=100&width=100',
    icon: 'chatbubbles',
  },
  {
    id: '4',
    name: 'Grammar Mastery eBook',
    description: 'Comprehensive guide to master grammar rules',
    price: 14.99,
    image: '/placeholder.svg?height=100&width=100',
    icon: 'document-text',
  },
  {
    id: '5',
    name: 'Vocabulary Booster',
    description: 'Expand your vocabulary with 1000+ new words',
    price: 19.99,
    image: '/placeholder.svg?height=100&width=100',
    icon: 'list',
  },
];

export default function ShopPage() {
  const [selectedItem, setSelectedItem] = useState<ShopItem | null>(null);
  const [cart, setCart] = useState<ShopItem[]>([]);

  const addToCart = (item: ShopItem) => {
    setCart([...cart, item]);
  };

  const renderShopItem = ({ item }: { item: ShopItem }) => (
    <TouchableOpacity
      style={styles.shopItem}
      onPress={() => setSelectedItem(item)}
    >
      <View style={styles.itemIconContainer}>
        <Ionicons name={item.icon as any} size={24} color="#FFFFFF" />
      </View>
      <View style={styles.itemInfo}>
        <Text style={styles.itemName}>{item.name}</Text>
        <Text style={styles.itemPrice}>${item.price.toFixed(2)}</Text>
      </View>
      <Ionicons name="chevron-forward" size={24} color="#666666" />
    </TouchableOpacity>
  );

  const renderItemModal = () => (
    <Modal
      visible={selectedItem !== null}
      transparent={true}
      animationType="slide"
    >
      <View style={styles.modalContainer}>
        <View style={styles.modalContent}>
          <TouchableOpacity
            style={styles.closeButton}
            onPress={() => setSelectedItem(null)}
          >
            <Ionicons name="close" size={24} color="#FFFFFF" />
          </TouchableOpacity>
          {selectedItem && (
            <>
              <View style={styles.modalIconContainer}>
                <Ionicons name={selectedItem.icon as any} size={48} color="#FFFFFF" />
              </View>
              <Text style={styles.modalItemName}>{selectedItem.name}</Text>
              <Text style={styles.modalItemDescription}>{selectedItem.description}</Text>
              <Text style={styles.modalItemPrice}>${selectedItem.price.toFixed(2)}</Text>
              <TouchableOpacity
                style={styles.addToCartButton}
                onPress={() => {
                  addToCart(selectedItem);
                  setSelectedItem(null);
                }}
              >
                <Text style={styles.addToCartButtonText}>Add to Cart</Text>
              </TouchableOpacity>
            </>
          )}
        </View>
      </View>
    </Modal>
  );

  return (
    <SafeAreaView style={styles.container}>
      <View style={styles.header}>
        <Text style={styles.headerTitle}>Shop</Text>
        <TouchableOpacity style={styles.cartButton}>
          <Ionicons name="cart" size={24} color="#FFFFFF" />
          {cart.length > 0 && (
            <View style={styles.cartBadge}>
              <Text style={styles.cartBadgeText}>{cart.length}</Text>
            </View>
          )}
        </TouchableOpacity>
      </View>
      <FlatList
        data={shopItems}
        renderItem={renderShopItem}
        keyExtractor={(item) => item.id}
        contentContainerStyle={styles.listContainer}
      />
      {renderItemModal()}
    </SafeAreaView>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#1A1A1A',
  },
  header: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    padding: 16,
    borderBottomWidth: 1,
    borderBottomColor: '#2B2B2B',
  },
  headerTitle: {
    fontSize: 24,
    fontWeight: 'bold',
    color: '#FFFFFF',
  },
  cartButton: {
    position: 'relative',
  },
  cartBadge: {
    position: 'absolute',
    right: -6,
    top: -6,
    backgroundColor: '#FF4444',
    borderRadius: 10,
    width: 20,
    height: 20,
    justifyContent: 'center',
    alignItems: 'center',
  },
  cartBadgeText: {
    color: '#FFFFFF',
    fontSize: 12,
    fontWeight: 'bold',
  },
  listContainer: {
    padding: 16,
  },
  shopItem: {
    flexDirection: 'row',
    alignItems: 'center',
    backgroundColor: '#2B2B2B',
    borderRadius: 12,
    padding: 16,
    marginBottom: 12,
  },
  itemIconContainer: {
    width: 48,
    height: 48,
    borderRadius: 24,
    backgroundColor: '#363636',
    justifyContent: 'center',
    alignItems: 'center',
    marginRight: 16,
  },
  itemInfo: {
    flex: 1,
  },
  itemName: {
    fontSize: 18,
    fontWeight: 'bold',
    color: '#FFFFFF',
    marginBottom: 4,
  },
  itemPrice: {
    fontSize: 16,
    color: '#4CAF50',
  },
  modalContainer: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: 'rgba(0, 0, 0, 0.5)',
  },
  modalContent: {
    backgroundColor: '#2B2B2B',
    borderRadius: 12,
    padding: 24,
    alignItems: 'center',
    width: '80%',
  },
  closeButton: {
    position: 'absolute',
    top: 12,
    right: 12,
  },
  modalIconContainer: {
    width: 80,
    height: 80,
    borderRadius: 40,
    backgroundColor: '#363636',
    justifyContent: 'center',
    alignItems: 'center',
    marginBottom: 16,
  },
  modalItemName: {
    fontSize: 24,
    fontWeight: 'bold',
    color: '#FFFFFF',
    marginBottom: 8,
    textAlign: 'center',
  },
  modalItemDescription: {
    fontSize: 16,
    color: '#CCCCCC',
    marginBottom: 16,
    textAlign: 'center',
  },
  modalItemPrice: {
    fontSize: 20,
    fontWeight: 'bold',
    color: '#4CAF50',
    marginBottom: 24,
  },
  addToCartButton: {
    backgroundColor: '#4CAF50',
    paddingHorizontal: 24,
    paddingVertical: 12,
    borderRadius: 24,
  },
  addToCartButtonText: {
    color: '#FFFFFF',
    fontSize: 16,
    fontWeight: 'bold',
  },
});

