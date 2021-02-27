//SPDX-License-Identifier: Unlicense
pragma solidity ^0.7.0;

import "hardhat/console.sol";

contract ONSEN {
    struct PlatformData {
        string username;
        // More platform specific data can be added later
    }

    // Mapping of ethereum address with social media handle (username and other data)
    mapping(address => mapping(uint256 => PlatformData))
        public addressHandleMap;

    // Mapping of social medial handle to ethereum address
    // This is supposed to be a reference to addressHandleMap as it can access PlatformData
    mapping(uint256 => mapping(string => address)) private handleAddressMap;

    // returns address from social media handle
    function getByHandle(uint256 _platformID, string memory _username)
        public
        view
        returns (address addr)
    {
        return (handleAddressMap[_platformID][_username]);
    }

    // Sets both mapping for address and social media handle.
    function set(
        address _addr1,
        uint256 _platformID,
        string memory _username
    ) public {
        addressHandleMap[_addr1][_platformID].username = _username;

        handleAddressMap[_platformID][_username] = _addr1;
    }

    // Deletes data from both address and handle mapping
    function remove(address _addr1, uint256 _platformID) public {
        string memory _username =
            addressHandleMap[_addr1][_platformID].username;
        delete handleAddressMap[_platformID][_username];

        delete addressHandleMap[_addr1][_platformID];
    }
}
