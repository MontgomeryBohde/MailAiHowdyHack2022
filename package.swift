import SwiftUI

let package = Package(
    name: "MyApp",
    platforms: [
        .iOS(.v13),
        .macOS(.v10_15),
        .watchOS(.v6),
        .tvOS(.v13)
    ],
    products: [
        .library(
            name: "MyApp",
            targets: ["MyApp"]),
    ],
    dependencies: [
        .package(url: "