import React from "react";
import { Link, router, usePathname } from "expo-router";
import { Pressable, Image } from "react-native"; // Added Image import

import { Icon } from "@/components/icons";
import { Text, View } from "@/components/themed";
import { colors } from "@/constants/colors";
import { layouts } from "@/constants/layouts";
import { useBreakpoint } from "@/context/breakpoints";
import { useTheme } from "@/context/theme";
import { NavItem } from "@/types";

interface Props {
  navItems: NavItem[];
}

export function CourseLeftBar({ navItems }: Props) {
  const { border, accent, foreground } = useTheme();
  const breakpoint = useBreakpoint();
  const pathname = usePathname();

  return (
    <View
      style={{
        padding: layouts.padding * 2,
        borderRightWidth: layouts.borderWidth,
        borderRightColor: border,
        gap: layouts.padding,
      }}
    >
      <Link
        href="/learn"
        style={{
          paddingVertical: layouts.padding,
          paddingLeft: layouts.padding * 2,
        }}
      >
        <Image
          source={require("mascot.png")} // Display mascot.png
          style={{ width: 40, height: 40 }} // Adjust size as needed
        />
      </Link>
      {navItems.map((navItem, index) => {
        const isActive =
          pathname === navItem.href || pathname.startsWith(navItem.href);
        return (
          <Pressable key={index} onPress={() => router.push(navItem.href)}>
            {({ pressed, hovered }) => (
              <View
                style={{
                  flexDirection: "row",
                  gap: layouts.padding,
                  alignItems: "center",
                  paddingHorizontal:
                    breakpoint === "xl" || breakpoint === "2xl"
                      ? layouts.padding * 1.5
                      : layouts.padding,
                  paddingVertical: layouts.padding,
                  borderWidth: layouts.borderWidth,
                  borderRadius: layouts.padding,
                  borderColor: isActive ? border : colors.transparent,
                  backgroundColor:
                    pressed || hovered ? accent : colors.transparent,
                }}
              >
                <Icon
                  name={navItem.icon}
                  color={isActive ? foreground : undefined}
                />
                {(breakpoint === "xl" || breakpoint === "2xl") && (
                  <Text
                    style={{
                      fontWeight: "800",
                      textTransform: "uppercase",
                    }}
                  >
                    {navItem.label}
                  </Text>
                )}
              </View>
            )}
          </Pressable>
        );
      })}
    </View>
  );
}