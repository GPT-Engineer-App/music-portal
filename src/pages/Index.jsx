import React from "react";
import { Box, VStack, HStack, Heading, Text, Link, IconButton, Input, Divider, Image } from "@chakra-ui/react";
import { FaHome, FaMusic, FaSearch, FaList, FaUser, FaCompactDisc, FaNewspaper, FaEnvelope, FaFacebook, FaInstagram, FaTwitter, FaApple, FaYoutube, FaTiktok } from "react-icons/fa";

const Index = () => {
  return (
    <Box display="flex">
      {/* Left Sidebar */}
      <VStack w="250px" h="100vh" bg="gray.100" p={4} spacing={6} alignItems="stretch">
        {/* Navigation Links */}
        <VStack spacing={4} alignItems="stretch">
          <Link href="#home">
            <HStack>
              <IconButton icon={<FaHome />} variant="ghost" />
              <Text>Home</Text>
            </HStack>
          </Link>
          <Link href="#browse">
            <HStack>
              <IconButton icon={<FaMusic />} variant="ghost" />
              <Text>Browse Music</Text>
            </HStack>
          </Link>
          <Link href="#search">
            <HStack>
              <IconButton icon={<FaSearch />} variant="ghost" />
              <Text>Search</Text>
            </HStack>
          </Link>
          <Link href="#playlist">
            <HStack>
              <IconButton icon={<FaList />} variant="ghost" />
              <Text>Playlist</Text>
            </HStack>
          </Link>
          <Link href="#profile">
            <HStack>
              <IconButton icon={<FaUser />} variant="ghost" />
              <Text>User Profile</Text>
            </HStack>
          </Link>
          <Link href="#albums">
            <HStack>
              <IconButton icon={<FaCompactDisc />} variant="ghost" />
              <Text>Albums</Text>
            </HStack>
          </Link>
          <Link href="#blog">
            <HStack>
              <IconButton icon={<FaNewspaper />} variant="ghost" />
              <Text>Blog/News</Text>
            </HStack>
          </Link>
          <Link href="#contact">
            <HStack>
              <IconButton icon={<FaEnvelope />} variant="ghost" />
              <Text>Contact/Support</Text>
            </HStack>
          </Link>
        </VStack>

        <Divider />

        {/* Social Media Links */}
        <VStack spacing={4}>
          <Link href="https://www.facebook.com/yourusername" isExternal>
            <IconButton icon={<FaFacebook />} variant="ghost" />
          </Link>
          <Link href="https://www.instagram.com/yourusername" isExternal>
            <IconButton icon={<FaInstagram />} variant="ghost" />
          </Link>
          <Link href="https://twitter.com/yourusername" isExternal>
            <IconButton icon={<FaTwitter />} variant="ghost" />
          </Link>
          <Link href="https://music.apple.com/yourusername" isExternal>
            <IconButton icon={<FaApple />} variant="ghost" />
          </Link>
          <Link href="https://www.youtube.com/yourusername" isExternal>
            <IconButton icon={<FaYoutube />} variant="ghost" />
          </Link>
          <Link href="https://www.tiktok.com/@yourusername" isExternal>
            <IconButton icon={<FaTiktok />} variant="ghost" />
          </Link>
        </VStack>
      </VStack>

      {/* Main Content */}
      <Box flex={1} p={8}>
        <VStack spacing={8} alignItems="stretch">
          <Box id="home">
            <Heading>Home</Heading>
            <Text>Welcome to your music website!</Text>
          </Box>

          <Box id="browse">
            <Heading>Browse Music</Heading>
            <VStack alignItems="stretch" spacing={4}>
              <Link href="#top-hits">Top Hits</Link>
              <Link href="#new-releases">New Releases</Link>
              <Link href="#recommended">Recommended</Link>
            </VStack>
          </Box>

          <Box id="search">
            <Heading>Search</Heading>
            <Input placeholder="Search for music..." />
          </Box>

          <Box id="playlist">
            <Heading>Playlist</Heading>
            <Text>Create and manage your playlists.</Text>
          </Box>

          <Box id="profile">
            <Heading>User Profile</Heading>
            <Image src="https://images.unsplash.com/photo-1543610892-0b1f7e6d8ac1?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w1MDcxMzJ8MHwxfHNlYXJjaHwxfHx1c2VyJTIwcHJvZmlsZSUyMGF2YXRhcnxlbnwwfHx8fDE3MTE4NDk1MDJ8MA&ixlib=rb-4.0.3&q=80&w=1080" alt="User Avatar" borderRadius="full" boxSize="150px" />
            <Text>Customize your profile and settings.</Text>
          </Box>

          <Box id="albums">
            <Heading>Albums</Heading>
            <Text>Explore albums from various artists.</Text>
          </Box>

          <Box id="blog">
            <Heading>Blog/News</Heading>
            <Text>Stay updated with the latest music news and articles.</Text>
          </Box>

          <Box id="contact">
            <Heading>Contact/Support</Heading>
            <Text>Get in touch with us for any inquiries or support.</Text>
          </Box>
        </VStack>
      </Box>
    </Box>
  );
};

export default Index;
