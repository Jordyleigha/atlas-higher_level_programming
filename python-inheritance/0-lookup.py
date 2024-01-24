#!/usr/bin/python
"""Defines an object attribute lookup function."""


def lookup(obj):
    """Return a lost of an object's available attributes."""
    return (dir(obj))
